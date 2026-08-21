/* theme.js — 按当日日出日落时间自动切换明暗主题 */
(function () {
  var LAT = 35;   // 纬度（度）：影响昼长，默认中国中部，可按所在城市调整
  var LON = null; // 经度（度）：null = 按浏览器时区自动估算（每 15° ≈ 1 小时）

  function getLongitude() {
    if (typeof LON === 'number') return LON;
    return -new Date().getTimezoneOffset() / 60 * 15;
  }

  function sunTimes(now, lat, lon) {
    var rad = Math.PI / 180;
    var start = new Date(now.getFullYear(), 0, 0);
    var N = Math.floor((now - start) / 86400000); // 一年中的第几天
    var delta = 23.44 * rad * Math.sin(2 * Math.PI * (284 + N) / 365); // 太阳赤纬

    var cosOmega = (Math.sin(-0.83 * rad) - Math.sin(lat * rad) * Math.sin(delta)) /
                   (Math.cos(lat * rad) * Math.cos(delta));
    if (cosOmega > 1 || cosOmega < -1) return null; // 极昼 / 极夜

    var halfDay = Math.acos(cosOmega) / rad / 15 * 3600000; // 半日长（毫秒）
    var noonUtcMs = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) +
                    (12 - lon / 15) * 3600000; // 太阳正午（忽略均时差，误差约 ±15 分钟）

    return {
      sunrise: new Date(noonUtcMs - halfDay),
      sunset: new Date(noonUtcMs + halfDay)
    };
  }

  function isNight() {
    var now = new Date();
    var t = sunTimes(now, LAT, getLongitude());
    if (!t) return now.getHours() < 6 || now.getHours() >= 18; // 极端情况兜底
    return now < t.sunrise || now > t.sunset;
  }

  function apply() {
    var dark = isNight();
    document.documentElement.classList.toggle('dark', dark);
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute('content', dark ? 'dark' : 'light');
  }

  apply();
  setInterval(apply, 60 * 1000);
})();
