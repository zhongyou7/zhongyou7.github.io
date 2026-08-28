/*
 * weather.js — 天气小组件
 * 流程：geojs 免费 IP 定位 → open-meteo 免费取当前天气（均无需 key、支持 CORS）
 * 交互：按 W 键显示/隐藏；默认隐藏，仅后台加载数据，不自动弹出
 * 失败时回退到默认城市（北京），再失败则提示「获取失败」，不影响页面其它功能
 */
(function () {
  'use strict';

  var widget = document.getElementById('weather-widget');
  if (!widget) return;
  var body = widget.querySelector('.weather-body');

  // WMO 天气代码 → 中文描述（open-meteo 使用）
  var WMO = {
    0: '☀️ 晴', 1: '🌤️ 大致晴朗', 2: '⛅ 局部多云', 3: '☁️ 阴',
    45: '🌫️ 雾', 48: '🌫️ 雾凇',
    51: '🌦️ 毛毛雨', 53: '🌦️ 毛毛雨', 55: '🌦️ 毛毛雨',
    56: '🌧️ 冻雨', 57: '🌧️ 冻雨',
    61: '🌧️ 小雨', 63: '🌧️ 中雨', 65: '🌧️ 大雨',
    66: '🌧️ 冻雨', 67: '🌧️ 冻雨',
    71: '🌨️ 小雪', 73: '🌨️ 中雪', 75: '🌨️ 大雪', 77: '🌨️ 雪粒',
    80: '🌦️ 阵雨', 81: '🌦️ 阵雨', 82: '🌦️ 强阵雨',
    85: '🌨️ 阵雪', 86: '🌨️ 阵雪',
    95: '⛈️ 雷阵雨', 96: '⛈️ 雷阵雨冰雹', 99: '⛈️ 雷阵雨冰雹'
  };

  function show() { widget.classList.remove('hidden'); }
  function hide() { widget.classList.add('hidden'); }
  function toggle() { widget.classList.toggle('hidden'); }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function render(data, city) {
    var cur = data.current || {};
    var desc = WMO[cur.weather_code] || '🌡️ 未知';
    var temp = Math.round(cur.temperature_2m != null ? cur.temperature_2m : 0);
    var wind = Math.round(cur.wind_speed_10m != null ? cur.wind_speed_10m : 0);
    body.innerHTML =
      '<div class="weather-city">' + escapeHtml(city || '当地') + '</div>' +
      '<div class="weather-main"><span class="weather-temp">' + temp + '°</span>' +
      '<span class="weather-desc">' + desc + '</span></div>' +
      '<div class="weather-meta">风速 ' + wind + ' km/h</div>';
  }

  function fail(msg) {
    body.innerHTML = '<div class="weather-city">天气</div>' +
      '<div class="weather-main"><span class="weather-desc">' + (msg || '获取失败') + '</span></div>';
  }

  // W 键切换显示/隐藏（主页无输入框，无需担心焦点冲突）
  document.body.addEventListener('keydown', function (e) {
    if ((e.key || '').toLowerCase() === 'w') toggle();
  });

  var FALLBACK = { lat: 39.9042, lon: 116.4074, city: '北京' };

  function meteoUrl(lat, lon) {
    return 'https://api.open-meteo.com/v1/forecast?latitude=' + lat +
      '&longitude=' + lon +
      '&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto';
  }

  function fetchWeather(lat, lon, city) {
    return fetch(meteoUrl(lat, lon))
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.current) render(d, city);
        else fail('数据异常');
      });
  }

  function load() {
    body.innerHTML = '<div class="weather-main"><span class="weather-desc">定位中…</span></div>';
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(function (r) { return r.json(); })
      .then(function (g) {
        var lat = parseFloat(g.latitude) || FALLBACK.lat;
        var lon = parseFloat(g.longitude) || FALLBACK.lon;
        var city = g.city || g.country || FALLBACK.city;
        return fetchWeather(lat, lon, city);
      })
      .catch(function () {
        // 定位失败 → 兜底默认城市
        return fetchWeather(FALLBACK.lat, FALLBACK.lon, FALLBACK.city)
          .catch(function () { fail('获取失败'); });
      });
  }

  hide();      // 初始隐藏（默认不显示）
  load();      // 后台加载数据，但保持隐藏，按 W 才显示
})();
