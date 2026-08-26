var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "node_modules/jszip/dist/jszip.min.js"(exports, module) {
    !(function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A2(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O2.utf8encode, f = I2.transformTo("string", s2(h.name)), c = I2.transformTo("string", O2.utf8encode(h.name)), d = h.comment, p = I2.transformTo("string", s2(d)), m = I2.transformTo("string", O2.utf8encode(d)), _2 = c.length !== h.name.length, g2 = m.length !== d.length, b2 = "", v = "", y = "", w = h.dir, k2 = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S2 = 0;
          t2 && (S2 |= 8), l || !_2 && !g2 || (S2 |= 2048);
          var z2 = 0, C = 0;
          w && (z2 |= 16), "UNIX" === i2 ? (C = 798, z2 |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z2 |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k2.getUTCHours(), a <<= 6, a |= k2.getUTCMinutes(), a <<= 5, a |= k2.getUTCSeconds() / 2, o = k2.getUTCFullYear() - 1980, o <<= 4, o |= k2.getUTCMonth() + 1, o <<= 5, o |= k2.getUTCDate(), _2 && (v = A2(1, 1) + A2(B(f), 4) + c, b2 += "up" + A2(v.length, 2) + v), g2 && (y = A2(1, 1) + A2(B(p), 4) + m, b2 += "uc" + A2(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A2(S2, 2), E += u.magic, E += A2(a, 2), E += A2(o, 2), E += A2(x.crc32, 4), E += A2(x.compressedSize, 4), E += A2(x.uncompressedSize, 4), E += A2(f.length, 2), E += A2(b2.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b2, dirRecord: R.CENTRAL_FILE_HEADER + A2(C, 2) + E + A2(p.length, 2) + "\0\0\0\0" + A2(z2, 4) + A2(n2, 4) + f + b2 + p };
        }
        var I2 = e("../utils"), i = e("../stream/GenericWorker"), O2 = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I2.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A2(e3.crc32, 4) + A2(e3.compressedSize, 4) + A2(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I2.transformTo("string", i2(n3));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e3, 2) + A2(e3, 2) + A2(t3, 4) + A2(r3, 4) + A2(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g2(e2)), s2.createFolders && (n2 = _2(e2)) && b2.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _2 = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g2 = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b2 = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g2(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b2.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          "use strict";
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _2 = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _2.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _2.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _2 = -2, g2 = -1, b2 = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k2 = 15, x = 3, S2 = 258, z2 = S2 + x + 1, C = 42, E = 113, A2 = 1, I2 = 2, O2 = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T2(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D2(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F2(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F2(e2.strm);
        }
        function U2(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P2(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L2(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z2 ? e2.strstart - (e2.w_size - z2) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S2, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S2 - (c2 - s2), s2 = c2 - S2, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j2(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z2)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z2 && 0 !== e2.strm.avail_in);
        }
        function Z2(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z2) {
              if (j2(e2), e2.lookahead < z2 && t2 === l) return A2;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z2 && (e2.match_length = L2(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A2 : I2;
        }
        function W2(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z2) {
              if (j2(e2), e2.lookahead < z2 && t2 === l) return A2;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z2 && (e2.match_length = L2(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A2;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A2 : I2;
        }
        function M2(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H2() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D2(this.dyn_ltree), D2(this.dyn_dtree), D2(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k2 + 1), this.heap = new c.Buf16(2 * s + 1), D2(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D2(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G2(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _2);
        }
        function K2(e2) {
          var t2 = G2(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D2(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y2(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _2;
          var a2 = 1;
          if (t2 === g2 && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b2 < s2) return R(e2, _2);
          8 === n2 && (n2 = 9);
          var o2 = new H2();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K2(e2);
        }
        h = [new M2(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j2(e2), 0 === e2.lookahead && t2 === l) return A2;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A2;
            if (e2.strstart - e2.block_start >= e2.w_size - z2 && (N(e2, false), 0 === e2.strm.avail_out)) return A2;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O2 : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A2);
        }), new M2(4, 4, 8, 4, Z2), new M2(4, 5, 16, 8, Z2), new M2(4, 6, 32, 32, Z2), new M2(4, 4, 16, 16, W2), new M2(8, 16, 32, 32, W2), new M2(8, 16, 128, 128, W2), new M2(8, 32, 128, 256, W2), new M2(32, 128, 258, 1024, W2), new M2(32, 258, 258, 4096, W2)], r.deflateInit = function(e2, t2) {
          return Y2(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y2, r.deflateReset = K2, r.deflateResetKeep = G2, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _2 : (e2.state.gzhead = t2, m) : _2;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _2) : _2;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _2);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U2(n2, 31), U2(n2, 139), U2(n2, 8), n2.gzhead ? (U2(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U2(n2, 255 & n2.gzhead.time), U2(n2, n2.gzhead.time >> 8 & 255), U2(n2, n2.gzhead.time >> 16 & 255), U2(n2, n2.gzhead.time >> 24 & 255), U2(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U2(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U2(n2, 255 & n2.gzhead.extra.length), U2(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 0), U2(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U2(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P2(n2, a2), 0 !== n2.strstart && (P2(n2, e2.adler >>> 16), P2(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U2(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U2(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F2(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U2(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F2(e2), n2.pending + 2 <= n2.pending_buf_size && (U2(n2, 255 & e2.adler), U2(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
            if (F2(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
          } else if (0 === e2.avail_in && T2(t2) <= T2(r2) && t2 !== f) return R(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j2(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A2;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A2;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O2 : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S2) {
                  if (j2(e3), e3.lookahead <= S2 && t3 === l) return A2;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S2;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S2 - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A2;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O2 : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O2 && o2 !== B || (n2.status = 666), o2 === A2 || o2 === O2) return 0 === e2.avail_out && (n2.last_flush = -1), m;
            if (o2 === I2 && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D2(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F2(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
          }
          return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U2(n2, 255 & e2.adler), U2(n2, e2.adler >> 8 & 255), U2(n2, e2.adler >> 16 & 255), U2(n2, e2.adler >> 24 & 255), U2(n2, 255 & e2.total_in), U2(n2, e2.total_in >> 8 & 255), U2(n2, e2.total_in >> 16 & 255), U2(n2, e2.total_in >> 24 & 255)) : (P2(n2, e2.adler >>> 16), P2(n2, 65535 & e2.adler)), F2(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _2) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _2;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _2;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _2;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D2(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j2(r2); r2.lookahead >= x; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x - 1, j2(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _2, g2, b2, v, y, w, k2, x, S2, z2, C;
          r2 = e2.state, n = e2.next_in, z2 = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _2 = r2.distcode, g2 = (1 << r2.lenbits) - 1, b2 = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z2[n++] << p, p += 8, d += z2[n++] << p, p += 8), v = m[d & g2];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z2[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z2[n++] << p, p += 8, d += z2[n++] << p, p += 8), v = _2[d & b2];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _2[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k2 = 65535 & v, p < (y &= 15) && (d += z2[n++] << p, (p += 8) < y && (d += z2[n++] << p, p += 8)), h < (k2 += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k2) {
                    if (l < (y = k2 - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S2 = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k2, S2 = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k2, S2 = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k2, S2 = C;
                    }
                    for (; 2 < w; ) C[s++] = S2[x++], C[s++] = S2[x++], C[s++] = S2[x++], w -= 3;
                    w && (C[s++] = S2[x++], 1 < w && (C[s++] = S2[x++]));
                  } else {
                    for (x = s - k2; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I2 = e("../utils/common"), O2 = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T2 = e("./inftrees"), D2 = 1, F2 = 2, N = 0, U2 = -2, P2 = 1, n = 852, i = 592;
        function L2(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P2, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I2.Buf32(n), t2.distcode = t2.distdyn = new I2.Buf32(i), t2.sane = 1, t2.back = -1, N) : U2;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U2;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U2 : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U2;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U2;
        }
        var l, f, c = true;
        function j2(e2) {
          if (c) {
            var t2;
            for (l = new I2.Buf32(512), f = new I2.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T2(D2, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T2(F2, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z2(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I2.Buf8(s2.wsize)), n2 >= s2.wsize ? (I2.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I2.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I2.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _2, g2, b2, v, y, w, k2, x, S2, z2, C = 0, E = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U2;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P2:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k2 = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k2;
              else if (k2 > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k2, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k2 = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I2.arraySet(r2.head.extra, n2, s2, d, k2)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k2 = n2[s2 + d++], r2.head && k2 && r2.length < 65536 && (r2.head.name += String.fromCharCode(k2)), k2 && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k2) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k2 = n2[s2 + d++], r2.head && k2 && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k2)), k2 && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k2) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L2(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j2(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I2.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.lens[A2[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A2[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S2 = { bits: r2.lenbits }, x = T2(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S2), r2.lenbits = S2.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g2 = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C, !((_2 = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (b2 < 16) u2 >>>= _2, l2 -= _2, r2.lens[r2.have++] = b2;
                else {
                  if (16 === b2) {
                    for (z2 = _2 + 2; l2 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _2, l2 -= _2, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k2 = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b2) {
                    for (z2 = _2 + 3; l2 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _2, k2 = 0, d = 3 + (7 & (u2 >>>= _2)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z2 = _2 + 7; l2 < z2; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _2, k2 = 0, d = 11 + (127 & (u2 >>>= _2)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k2;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S2 = { bits: r2.lenbits }, x = T2(D2, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S2), r2.lenbits = S2.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S2 = { bits: r2.distbits }, x = T2(F2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S2), r2.distbits = S2.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g2 = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C, !((_2 = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (g2 && 0 == (240 & g2)) {
                for (v = _2, y = g2, w = b2; g2 = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b2 = 65535 & C, !(v + (_2 = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _2, l2 -= _2, r2.back += _2, r2.length = b2, 0 === g2) {
                r2.mode = 26;
                break;
              }
              if (32 & g2) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g2) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g2, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z2 = r2.extra; l2 < z2; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g2 = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b2 = 65535 & C, !((_2 = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g2)) {
                for (v = _2, y = g2, w = b2; g2 = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b2 = 65535 & C, !(v + (_2 = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _2, l2 -= _2, r2.back += _2, 64 & g2) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b2, r2.extra = 15 & g2, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z2 = r2.extra; l2 < z2; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O2(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L2(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U2;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z2(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O2(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U2;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U2 : ((r2.head = t2).done = false, N) : U2;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U2 : 11 === r2.mode && O2(1, t2, n2, 0) !== r2.check ? -3 : Z2(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U2;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D2 = e("../utils/common"), F2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _2, g2 = o.bits, b2 = 0, v = 0, y = 0, w = 0, k2 = 0, x = 0, S2 = 0, z2 = 0, C = 0, E = 0, A2 = null, I2 = 0, O2 = new D2.Buf16(16), B = new D2.Buf16(16), R = null, T2 = 0;
          for (b2 = 0; b2 <= 15; b2++) O2[b2] = 0;
          for (v = 0; v < n; v++) O2[t2[r2 + v]]++;
          for (k2 = g2, w = 15; 1 <= w && 0 === O2[w]; w--) ;
          if (w < k2 && (k2 = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O2[y]; y++) ;
          for (k2 < y && (k2 = y), b2 = z2 = 1; b2 <= 15; b2++) if (z2 <<= 1, (z2 -= O2[b2]) < 0) return -1;
          if (0 < z2 && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b2 = 1; b2 < 15; b2++) B[b2 + 1] = B[b2] + O2[b2];
          for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A2 = R = a, 19) : 1 === e2 ? (A2 = F2, I2 -= 257, R = N, T2 -= 257, 256) : (A2 = U2, R = P2, -1), b2 = y, c = s, S2 = v = E = 0, l = -1, f = (C = 1 << (x = k2)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b2 - S2, _2 = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T2 + a[v]], A2[I2 + a[v]]) : (m = 96, 0), h = 1 << b2 - S2, y = u = 1 << x; i[c + (E >> S2) + (u -= h)] = p << 24 | m << 16 | _2 | 0, 0 !== u; ) ;
            for (h = 1 << b2 - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O2[b2]) {
              if (b2 === w) break;
              b2 = t2[r2 + a[v]];
            }
            if (k2 < b2 && (E & f) !== l) {
              for (0 === S2 && (S2 = k2), c += y, z2 = 1 << (x = b2 - S2); x + S2 < w && !((z2 -= O2[x + S2]) <= 0); ) x++, z2 <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k2 << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b2 - S2 << 24 | 64 << 16 | 0), o.bits = k2, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _2 = 2 * l + 1, g2 = 15, d = 16, p = 7, m = 256, b2 = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l + 2));
        n(z2);
        var C = new Array(2 * f);
        n(C);
        var E = new Array(512);
        n(E);
        var A2 = new Array(256);
        n(A2);
        var I2 = new Array(a);
        n(I2);
        var O2, B, R, T2 = new Array(f);
        function D2(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F2(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U2(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P2(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U2(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L2(e2, t2, r2) {
          P2(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j2(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z2(e2, t2, r2) {
          var n2, i2, s2 = new Array(g2 + 1), a2 = 0;
          for (n2 = 1; n2 <= g2; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j2(s2[o2]++, o2));
          }
        }
        function W2(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M2(e2) {
          8 < e2.bi_valid ? U2(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H2(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G2(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H2(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H2(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K2(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L2(e2, i2, t2) : (L2(e2, (s2 = A2[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P2(e2, i2 -= I2[s2], a2), L2(e2, s2 = N(--n2), r2), 0 !== (a2 = k2[s2]) && P2(e2, n2 -= T2[s2], a2)), o2 < e2.last_lit; ) ;
          L2(e2, m, t2);
        }
        function Y2(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _2, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G2(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G2(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G2(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g2; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _2; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z2(s2, u2, e2.bl_count);
        }
        function X2(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b2]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V2(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L2(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L2(e2, i2, e2.bl_tree), o2--), L2(e2, b2, e2.bl_tree), P2(e2, o2 - 3, 2)) : o2 <= 10 ? (L2(e2, v, e2.bl_tree), P2(e2, o2 - 3, 3)) : (L2(e2, y, e2.bl_tree), P2(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T2);
        var q2 = false;
        function J2(e2, t2, r2, n2) {
          P2(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M2(e3), n3 && (U2(e3, r3), U2(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q2 || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g2 + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I2[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A2[r2++] = n2;
            for (A2[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T2[n2] = i2, e3 = 0; e3 < 1 << k2[n2]; e3++) E[i2++] = n2;
            for (i2 >>= 7; n2 < f; n2++) for (T2[n2] = i2 << 7, e3 = 0; e3 < 1 << k2[n2] - 7; e3++) E[256 + i2++] = n2;
            for (t2 = 0; t2 <= g2; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z2[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z2[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z2[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z2[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z2(z2, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j2(e3, 5);
            O2 = new D2(z2, w, u + 1, l, g2), B = new D2(C, k2, 0, f, g2), R = new D2(new Array(0), x, 0, c, p);
          })(), q2 = true), e2.l_desc = new F2(e2.dyn_ltree, O2), e2.d_desc = new F2(e2.dyn_dtree, B), e2.bl_desc = new F2(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W2(e2);
        }, r._tr_stored_block = J2, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y2(e2, e2.l_desc), Y2(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X2(e3, e3.dyn_ltree, e3.l_desc.max_code), X2(e3, e3.dyn_dtree, e3.d_desc.max_code), Y2(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S2[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J2(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P2(e2, 2 + (n2 ? 1 : 0), 3), K2(e2, z2, C)) : (P2(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P2(e3, t3 - 257, 5), P2(e3, r3 - 1, 5), P2(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P2(e3, e3.bl_tree[2 * S2[i3] + 1], 3);
            V2(e3, e3.dyn_ltree, t3 - 1), V2(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K2(e2, e2.dyn_ltree, e2.dyn_dtree)), W2(e2), n2 && M2(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A2[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P2(e2, 2, 3), L2(e2, m, z2), (function(e3) {
            16 === e3.bi_valid ? (U2(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// node_modules/@likecoin/epub-ts/dist/epub.js
var import_jszip = __toESM(require_jszip_min(), 1);
function D(a) {
  const t = typeof a == "function" ? a.prototype : a;
  return t.on = function(e, i) {
    return this.__listeners || (this.__listeners = {}), this.__listeners[e] || (this.__listeners[e] = []), this.__listeners[e].push(i), this;
  }, t.off = function(e, i) {
    return !this.__listeners || !this.__listeners[e] ? this : (i ? this.__listeners[e] = this.__listeners[e].filter(function(s) {
      return s !== i;
    }) : delete this.__listeners[e], this);
  }, t.emit = function(e, ...i) {
    if (!this.__listeners || !this.__listeners[e]) return;
    const s = this.__listeners[e].slice();
    for (let n = 0; n < s.length; n++)
      try {
        s[n](...i);
      } catch (r) {
        console.error(r);
      }
  }, a;
}
var Nt = (a) => (queueMicrotask(() => a(performance.now())), 0);
var Vt = typeof window < "u" ? window.requestAnimationFrame.bind(window) : Nt;
var ge = 1;
var me = 3;
var Xt = typeof URL < "u" ? URL : typeof window < "u" ? window.URL : void 0;
var ve = typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID.bind(crypto) : void 0;
var ye = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
  const t = Math.random() * 16 | 0;
  return (a === "x" ? t : t & 3 | 8).toString(16);
});
var at = ve ?? ye;
function we() {
  return Math.max(
    document.documentElement.clientHeight,
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );
}
function Yt(a) {
  return !!(a && a.nodeType === 1);
}
function S(a) {
  return !isNaN(parseFloat(a)) && isFinite(a);
}
function Gt(a) {
  const t = parseFloat(a);
  return S(a) === false ? false : typeof a == "string" && a.includes(".") ? true : Math.floor(t) !== t;
}
function $t(a, ...t) {
  for (let e = 0; e < t.length; e++) {
    const i = t[e];
    for (const s in i)
      a[s] === void 0 && (a[s] = i[s]);
  }
  return a;
}
function L(a, ...t) {
  return t.forEach(function(e) {
    e && Object.getOwnPropertyNames(e).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }), a;
}
function be(a, t, e) {
  const i = X(a, t, e);
  return t.splice(i, 0, a), i;
}
function X(a, t, e, i, s) {
  const n = i || 0, r = s || t.length, o = Math.floor(n + (r - n) / 2);
  if (e || (e = function(l, c) {
    return l > c ? 1 : l < c ? -1 : 0;
  }), r - n <= 0)
    return o;
  const h = e(t[o], a);
  return r - n === 1 ? h >= 0 ? o : o + 1 : h === 0 ? o : h === -1 ? X(a, t, e, o, r) : X(a, t, e, n, o);
}
function st(a, t, e, i, s) {
  const n = i || 0, r = s || t.length, o = Math.floor(n + (r - n) / 2);
  if (e || (e = function(l, c) {
    return l > c ? 1 : l < c ? -1 : 0;
  }), r - n <= 0)
    return -1;
  const h = e(t[o], a);
  return r - n === 1 ? h === 0 ? o : -1 : h === 0 ? o : h === -1 ? st(a, t, e, o, r) : st(a, t, e, n, o);
}
function U(a) {
  const t = window.getComputedStyle(a), e = ["width", "padding-right", "padding-left", "margin-right", "margin-left", "border-right-width", "border-left-width"], i = ["height", "padding-top", "padding-bottom", "margin-top", "margin-bottom", "border-top-width", "border-bottom-width"];
  let s = 0, n = 0;
  return e.forEach(function(r) {
    s += parseFloat(t.getPropertyValue(r)) || 0;
  }), i.forEach(function(r) {
    n += parseFloat(t.getPropertyValue(r)) || 0;
  }), {
    height: n,
    width: s
  };
}
function Y(a) {
  const t = window.getComputedStyle(a), e = ["padding-right", "padding-left", "margin-right", "margin-left", "border-right-width", "border-left-width"], i = ["padding-top", "padding-bottom", "margin-top", "margin-bottom", "border-top-width", "border-bottom-width"];
  let s = 0, n = 0;
  return e.forEach(function(r) {
    s += parseFloat(t.getPropertyValue(r)) || 0;
  }), i.forEach(function(r) {
    n += parseFloat(t.getPropertyValue(r)) || 0;
  }), {
    height: n,
    width: s
  };
}
function et(a) {
  let t;
  const e = a.ownerDocument;
  if (a.nodeType === Node.TEXT_NODE) {
    const i = e.createRange();
    i.selectNodeContents(a), t = i.getBoundingClientRect();
  } else
    t = a.getBoundingClientRect();
  return t;
}
function xt() {
  const a = window.innerWidth, t = window.innerHeight;
  return {
    top: 0,
    left: 0,
    right: a,
    bottom: t,
    width: a,
    height: t
  };
}
function kt(a, t) {
  const i = a.parentNode.childNodes;
  let s, n = -1;
  for (let r = 0; r < i.length && (s = i[r], s.nodeType === t && n++, s !== a); r++)
    ;
  return n;
}
function xe(a) {
  return kt(a, me);
}
function Kt(a) {
  return kt(a, ge);
}
function At(a) {
  return ["xml", "opf", "ncx"].includes(a);
}
function Q(a, t) {
  if (t === "json")
    return JSON.parse(a);
  if (t && At(t))
    return V(a, "text/xml");
  if (t === "xhtml") {
    const e = V(a, "application/xhtml+xml");
    return e.querySelector("parsererror") ? V(a, "text/html") : e;
  }
  return t === "html" || t === "htm" ? V(a, "text/html") : a;
}
function Zt(a) {
  return !!a && (["json", "xhtml", "html", "htm"].includes(a) || At(a));
}
function Jt(a) {
  if (!a) return;
  const t = a.split(";")[0].trim().toLowerCase();
  if (t === "application/xhtml+xml") return "xhtml";
  if (t === "text/html") return "html";
  if (t === "text/xml" || t === "application/xml" || t.endsWith("+xml")) return "xml";
}
var k = class extends Error {
  constructor(t, e, i) {
    super(t), this.name = "EpubError", this.status = e, i !== void 0 && (this.cause = i);
  }
};
function lt(a, t) {
  return new Blob([a], { type: t });
}
function nt(a, t) {
  const e = lt(a, t);
  return Xt.createObjectURL(e);
}
function q(a) {
  return Xt.revokeObjectURL(a);
}
function Et(a, t) {
  if (typeof a != "string")
    return;
  const e = btoa(a);
  return "data:" + t + ";base64," + e;
}
function Qt(a) {
  return Object.prototype.toString.call(a).slice(8, -1);
}
var te;
function ee(a) {
  te = a;
}
function V(a, t) {
  a.charCodeAt(0) === 65279 && (a = a.slice(1));
  const e = te ?? globalThis.DOMParser;
  if (!e)
    throw new k('DOMParser is unavailable in this environment; import from "@likecoin/epub-ts/node" or call setDOMParser() to provide one.');
  return new e().parseFromString(a, t);
}
function ie(a, t) {
  var n;
  if (!/^[A-Za-z]/.test(t))
    return;
  const e = "documentElement" in a ? a : a.ownerDocument, i = (n = e == null ? void 0 : e.documentElement) == null ? void 0 : n.tagName, s = i ? i.indexOf(":") : -1;
  if (!(s <= 0))
    return `${i.slice(0, s)}\\:${t}`;
}
function _(a, t) {
  if (!a)
    throw new Error("No Element Provided");
  const e = a.querySelector(t);
  if (e)
    return e;
  const i = ie(a, t);
  return i ? a.querySelector(i) : null;
}
function W(a, t) {
  const e = a.querySelectorAll(t);
  if (e.length)
    return e;
  const i = ie(a, t);
  return i ? a.querySelectorAll(i) : e;
}
function F(a, t, e) {
  t += "[";
  for (const i in e)
    t += i + "~='" + e[i] + "'";
  return t += "]", _(a, t) ?? void 0;
}
function rt(a, t) {
  se(a, t, NodeFilter.SHOW_TEXT);
}
function se(a, t, e) {
  const i = document.createTreeWalker(a, e, null);
  let s;
  for (; s = i.nextNode(); )
    t(s);
}
function ne(a, t, e) {
  if (t(a))
    return true;
  let i = a.firstChild;
  if (i)
    do {
      if (ne(i, t))
        return true;
      i = i.nextSibling;
    } while (i);
}
function It(a) {
  return new Promise(function(t, e) {
    const i = new FileReader();
    i.onload = function() {
      t(i.result);
    }, i.onerror = i.onabort = function() {
      e(i.error ?? new Error("Failed to read blob"));
    }, i.readAsDataURL(a);
  });
}
var zt = typeof Promise.withResolvers == "function" ? Promise.withResolvers.bind(Promise) : void 0;
var T = class {
  constructor() {
    if (zt) {
      const { promise: t, resolve: e, reject: i } = zt();
      this.promise = t, this.resolve = e, this.reject = i;
      return;
    }
    this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
};
function ot(a, t, e) {
  let i = null;
  try {
    i = a.querySelector(`${t}[*|type="${e}"]`);
  } catch {
  }
  if (i)
    return i;
  const s = a.querySelectorAll(t);
  for (let n = 0; n < s.length; n++)
    if (s[n].getAttributeNS("http://www.idpf.org/2007/ops", "type") === e || s[n].getAttribute("epub:type") === e)
      return s[n];
}
function _t(a) {
  const t = [], e = a.childNodes;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    s.nodeType === 1 && t.push(s);
  }
  return t;
}
function St(a) {
  const t = [];
  for (let e = a ?? null; e; e = e.parentNode)
    t.unshift(e);
  return t;
}
function H(a, t, e) {
  const i = [], s = a.childNodes;
  for (let n = 0; n < s.length; n++) {
    const r = s[n];
    if (r.nodeType === 1 && r.nodeName.toLowerCase() === t) {
      if (e)
        return r;
      i.push(r);
    }
  }
  if (!e)
    return i;
}
function Ee(a, t) {
  let e;
  if (!(a === null || t === ""))
    for (e = a.parentNode; e && e.nodeType === 1; ) {
      if (e.tagName.toLowerCase() === t)
        return e;
      e = e.parentNode;
    }
}
var re = class {
  constructor() {
    this.collapsed = false, this.commonAncestorContainer = void 0, this.endContainer = void 0, this.endOffset = void 0, this.startContainer = void 0, this.startOffset = void 0;
  }
  setStart(t, e) {
    this.startContainer = t, this.startOffset = e, this.endContainer ? this.commonAncestorContainer = this._commonAncestorContainer() : this.collapse(true), this._checkCollapsed();
  }
  setEnd(t, e) {
    this.endContainer = t, this.endOffset = e, this.startContainer ? (this.collapsed = false, this.commonAncestorContainer = this._commonAncestorContainer()) : this.collapse(false), this._checkCollapsed();
  }
  collapse(t) {
    var e, i;
    this.collapsed = true, t ? (this.endContainer = this.startContainer, this.endOffset = this.startOffset, this.commonAncestorContainer = ((e = this.startContainer) == null ? void 0 : e.parentNode) ?? void 0) : (this.startContainer = this.endContainer, this.startOffset = this.endOffset, this.commonAncestorContainer = ((i = this.endContainer) == null ? void 0 : i.parentNode) ?? void 0);
  }
  selectNode(t) {
    const e = t.parentNode, i = Array.from(e.childNodes).indexOf(t);
    this.setStart(e, i), this.setEnd(e, i + 1);
  }
  selectNodeContents(t) {
    const e = t.nodeType === 3 ? (t.textContent ?? "").length : t.childNodes.length;
    this.setStart(t, 0), this.setEnd(t, e);
  }
  _commonAncestorContainer(t, e) {
    const i = St(t ?? this.startContainer), s = St(e ?? this.endContainer);
    if (i[0] === s[0]) {
      for (let n = 0; n < i.length; n++)
        if (i[n] !== s[n])
          return i[n - 1];
    }
  }
  _checkCollapsed() {
    this.startContainer === this.endContainer && this.startOffset === this.endOffset ? this.collapsed = true : this.collapsed = false;
  }
  toString() {
    return "";
  }
};
var _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EpubError: k,
  RangeObject: re,
  blob2base64: It,
  borders: Y,
  bounds: U,
  createBase64Url: Et,
  createBlob: lt,
  createBlobUrl: nt,
  defaults: $t,
  defer: T,
  documentHeight: we,
  extend: L,
  filterChildren: H,
  findChildren: _t,
  getParentByTagName: Ee,
  handleResponse: Q,
  indexOfElementNode: Kt,
  indexOfNode: kt,
  indexOfSorted: st,
  indexOfTextNode: xe,
  insert: be,
  isElement: Yt,
  isFloat: Gt,
  isKnownRequestType: Zt,
  isNumber: S,
  isXml: At,
  locationOf: X,
  mediaTypeToRequestType: Jt,
  microTick: Nt,
  nodeBounds: et,
  parents: St,
  parse: V,
  qs: _,
  qsa: W,
  qsp: F,
  querySelectorByType: ot,
  requestAnimationFrame: Vt,
  revokeBlobUrl: q,
  setDOMParser: ee,
  sprint: rt,
  treeWalker: se,
  type: Qt,
  uuid: at,
  walk: ne,
  windowBounds: xt
}, Symbol.toStringTag, { value: "Module" }));
function G(a) {
  if (typeof a != "string")
    throw new TypeError("Path must be a string. Received " + a);
}
function Se(a, t) {
  let e = "", i = -1, s = 0, n;
  for (let r = 0; r <= a.length; ++r) {
    if (r < a.length)
      n = a.charCodeAt(r);
    else {
      if (n === 47)
        break;
      n = 47;
    }
    if (n === 47) {
      if (!(i === r - 1 || s === 1)) if (i !== r - 1 && s === 2) {
        if (e.length < 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
          if (e.length > 2) {
            const o = e.length - 1;
            let h = o;
            for (; h >= 0 && e.charCodeAt(h) !== 47; --h)
              ;
            if (h !== o) {
              h === -1 ? e = "" : e = e.slice(0, h), i = r, s = 0;
              continue;
            }
          } else if (e.length === 2 || e.length === 1) {
            e = "", i = r, s = 0;
            continue;
          }
        }
        t && (e.length > 0 ? e += "/.." : e = "..");
      } else
        e.length > 0 ? e += "/" + a.slice(i + 1, r) : e = a.slice(i + 1, r);
      i = r, s = 0;
    } else n === 46 && s !== -1 ? ++s : s = -1;
  }
  return e;
}
function Ct(...a) {
  let t = "", e = false;
  for (let i = a.length - 1; i >= -1 && !e; i--) {
    const s = i >= 0 ? a[i] : "/";
    G(s), s.length !== 0 && (t = s + "/" + t, e = s.charCodeAt(0) === 47);
  }
  return t = Se(t, !e), e ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : ".";
}
function Ce(a, t) {
  if (G(a), G(t), a === t || (a = Ct(a), t = Ct(t), a === t))
    return "";
  let e = 1;
  for (; e < a.length && a.charCodeAt(e) === 47; ++e)
    ;
  const i = a.length, s = i - e;
  let n = 1;
  for (; n < t.length && t.charCodeAt(n) === 47; ++n)
    ;
  const o = t.length - n, h = s < o ? s : o;
  let l = -1, c = 0;
  for (; c <= h; ++c) {
    if (c === h) {
      if (o > h) {
        if (t.charCodeAt(n + c) === 47)
          return t.slice(n + c + 1);
        if (c === 0)
          return t.slice(n + c);
      } else s > h && (a.charCodeAt(e + c) === 47 ? l = c : c === 0 && (l = 0));
      break;
    }
    const u = a.charCodeAt(e + c), f = t.charCodeAt(n + c);
    if (u !== f)
      break;
    u === 47 && (l = c);
  }
  let d = "";
  for (c = e + l + 1; c <= i; ++c)
    (c === i || a.charCodeAt(c) === 47) && (d.length === 0 ? d += ".." : d += "/..");
  return d.length > 0 ? d + t.slice(n + l) : (n += l, t.charCodeAt(n) === 47 && ++n, t.slice(n));
}
function Te(a) {
  if (G(a), a.length === 0)
    return ".";
  let t = a.charCodeAt(0);
  const e = t === 47;
  let i = -1, s = true;
  for (let n = a.length - 1; n >= 1; --n)
    if (t = a.charCodeAt(n), t === 47) {
      if (!s) {
        i = n;
        break;
      }
    } else
      s = false;
  return i === -1 ? e ? "/" : "." : e && i === 1 ? "//" : a.slice(0, i);
}
function Re(a) {
  return G(a), a.length > 0 && a.charCodeAt(0) === 47;
}
function Le(a) {
  G(a);
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (a.length === 0)
    return t;
  let e = a.charCodeAt(0);
  const i = e === 47;
  let s;
  i ? (t.root = "/", s = 1) : s = 0;
  let n = -1, r = 0, o = -1, h = true, l = a.length - 1, c = 0;
  for (; l >= s; --l) {
    if (e = a.charCodeAt(l), e === 47) {
      if (!h) {
        r = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (h = false, o = l + 1), e === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
  }
  return n === -1 || o === -1 || c === 0 || c === 1 && n === o - 1 && n === r + 1 ? o !== -1 && (r === 0 && i ? t.base = t.name = a.slice(1, o) : t.base = t.name = a.slice(r, o)) : (r === 0 && i ? (t.name = a.slice(1, n), t.base = a.slice(1, o)) : (t.name = a.slice(r, n), t.base = a.slice(r, o)), t.ext = a.slice(n, o)), r > 0 ? t.dir = a.slice(0, r - 1) : i && (t.dir = "/"), t;
}
var M = { resolve: Ct, relative: Ce, dirname: Te, isAbsolute: Re, parse: Le };
var z = class {
  constructor(t) {
    t.includes("://") && (t = new URL(t).pathname);
    const e = this.parse(t);
    this.path = t, this.isDirectory(t) ? (this.directory = t, this.filename = "", this.extension = "") : (this.directory = e.dir + "/", this.filename = e.base, this.extension = e.ext.slice(1));
  }
  /**
   * Parse the path: https://nodejs.org/api/path.html#path_path_parse_path
   * @param	{string} what
   * @returns {object}
   */
  parse(t) {
    return M.parse(t);
  }
  /**
   * @param	{string} what
   * @returns {boolean}
   */
  isAbsolute(t) {
    return M.isAbsolute(t || this.path);
  }
  /**
   * Check if path ends with a directory
   * @param	{string} what
   * @returns {boolean}
   */
  isDirectory(t) {
    return t.charAt(t.length - 1) === "/";
  }
  /**
   * Resolve a path against the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_resolve_paths
   * @param	{string} what
   * @returns {string} resolved
   */
  resolve(t) {
    return M.resolve(this.directory, t);
  }
  /**
   * Resolve a path relative to the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_relative_from_to
   * @param	{string} what
   * @returns {string} relative
   */
  relative(t) {
    return t && t.includes("://") ? t : M.relative(this.directory, t);
  }
  /**
   * Return the path string
   * @returns {string} path
   */
  toString() {
    return this.path;
  }
};
var P = class {
  constructor(t, e) {
    const i = t.includes("://");
    let s = t, n;
    if (this.Url = void 0, this.href = t, this.protocol = "", this.origin = "", this.hash = "", this.hash = "", this.search = "", this.base = e, !i && e !== false && typeof e != "string" && typeof window < "u" && window.location && (this.base = window.location.href), i || this.base)
      try {
        this.base ? this.Url = new URL(t, this.base) : this.Url = new URL(t), this.href = this.Url.href, this.protocol = this.Url.protocol, this.origin = this.Url.origin, this.origin === "null" && this.protocol === "file:" && (this.origin = "file://"), this.hash = this.Url.hash, this.search = this.Url.search, s = this.Url.pathname + (this.Url.search ? this.Url.search : "");
      } catch {
        this.Url = void 0, this.base && (n = new z(this.base), s = n.resolve(s));
      }
    this.Path = new z(s), this.directory = this.Path.directory, this.filename = this.Path.filename, this.extension = this.Path.extension;
  }
  /**
   * @returns {Path}
   */
  path() {
    return this.Path;
  }
  /**
   * Resolves a relative path to a absolute url
   * @param {string} what
   * @returns {string} url
   */
  resolve(t) {
    if (t.includes("://"))
      return t;
    const i = M.resolve(this.directory, t);
    return this.origin + i;
  }
  /**
   * Resolve a path relative to the url
   * @param {string} what
   * @returns {string} path
   */
  relative(t) {
    return M.relative(t, this.directory);
  }
  /**
   * @returns {string}
   */
  toString() {
    return this.href;
  }
};
var j = 1;
var A = 3;
var Ne = 9;
var b = class _b {
  constructor(t, e, i) {
    if (this.str = "", this.base = {}, this.spinePos = 0, this.range = false, this.path = {}, this.start = null, this.end = null, !(this instanceof _b))
      return new _b(t, e, i);
    typeof e == "string" ? this.base = this.parseComponent(e) : typeof e == "object" && e.steps && (this.base = e);
    const s = this.checkType(t);
    if (s === "string")
      return this.str = t, L(this, this.parse(t));
    if (s === "range")
      return L(this, this.fromRange(t, this.base, i));
    if (s === "node")
      return L(this, this.fromNode(t, this.base, i));
    if (s === "EpubCFI" && t.path)
      return t;
    if (t)
      throw new TypeError("not a valid argument for EpubCFI");
    return this;
  }
  /**
   * Check the type of constructor input
   * @private
   */
  checkType(t) {
    return this.isCfiString(t) ? "string" : t && typeof t == "object" && (Qt(t) === "Range" || typeof t.startContainer < "u") ? "range" : t && typeof t == "object" && typeof t.nodeType < "u" ? "node" : t && typeof t == "object" && t instanceof _b ? "EpubCFI" : false;
  }
  /**
   * Parse a cfi string to a CFI object representation
   * @param {string} cfiStr
   * @returns {object} cfi
   */
  parse(t) {
    const e = {
      spinePos: -1,
      range: false,
      base: {},
      path: {},
      start: null,
      end: null
    };
    if (typeof t != "string")
      return { spinePos: -1 };
    t.startsWith("epubcfi(") && t.endsWith(")") && (t = t.slice(8, -1));
    const i = this.getChapterComponent(t);
    if (!i)
      return { spinePos: -1 };
    e.base = this.parseComponent(i);
    const s = this.getPathComponent(t);
    e.path = this.parseComponent(s);
    const n = this.getRange(t);
    return n && (e.range = true, e.start = this.parseComponent(n[0]), e.end = this.parseComponent(n[1])), e.base.steps.length < 2 ? { spinePos: -1 } : (e.spinePos = e.base.steps[1].index, e);
  }
  parseComponent(t) {
    const e = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    }, i = t.split(":"), s = i[0].split("/");
    let n;
    return i.length > 1 && (n = i[1], e.terminal = this.parseTerminal(n)), s[0] === "" && s.shift(), e.steps = s.map((r) => this.parseStep(r)), e;
  }
  parseStep(t) {
    let e, i, s;
    const n = t.match(/\[(.*)\]/);
    n && n[1] && (s = n[1]);
    const r = parseInt(t);
    if (!isNaN(r))
      return r % 2 === 0 ? (e = "element", i = r / 2 - 1) : (e = "text", i = (r - 1) / 2), {
        type: e,
        index: i,
        id: s || null,
        tagName: ""
      };
  }
  parseTerminal(t) {
    let e, i = null;
    const s = t.match(/\[(.*)\]/);
    return s && s[1] ? (e = parseInt(t.split("[")[0]), i = s[1]) : e = parseInt(t), S(e) || (e = null), {
      offset: e,
      assertion: i
    };
  }
  getChapterComponent(t) {
    return t.split("!")[0];
  }
  getPathComponent(t) {
    const e = t.split("!");
    if (e[1])
      return e[1].split(",")[0];
  }
  getRange(t) {
    const e = t.split(",");
    return e.length === 3 ? [
      e[1],
      e[2]
    ] : false;
  }
  getCharecterOffsetComponent(t) {
    return t.split(":")[1] || "";
  }
  joinSteps(t) {
    return t ? t.map(function(e) {
      let i = "";
      return e.type === "element" && (i += (e.index + 1) * 2), e.type === "text" && (i += 1 + 2 * e.index), e.id && (i += "[" + e.id + "]"), i;
    }).join("/") : "";
  }
  segmentString(t) {
    let e = "/";
    return e += this.joinSteps(t.steps), t.terminal && t.terminal.offset != null && (e += ":" + t.terminal.offset), t.terminal && t.terminal.assertion != null && (e += "[" + t.terminal.assertion + "]"), e;
  }
  /**
   * Convert CFI to a epubcfi(...) string
   * @returns {string} epubcfi
   */
  toString() {
    let t = "epubcfi(";
    return t += this.segmentString(this.base), t += "!", t += this.segmentString(this.path), this.range && this.start && (t += ",", t += this.segmentString(this.start)), this.range && this.end && (t += ",", t += this.segmentString(this.end)), t += ")", t;
  }
  /**
   * Compare which of two CFIs is earlier in the text
   * @returns {number} First is earlier = -1, Second is earlier = 1, They are equal = 0
   */
  compare(t, e) {
    let i, s, n, r;
    if (typeof t == "string" && (t = new _b(t)), typeof e == "string" && (e = new _b(e)), t.spinePos > e.spinePos)
      return 1;
    if (t.spinePos < e.spinePos)
      return -1;
    t.range ? (i = t.path.steps.concat(t.start.steps), n = t.start.terminal) : (i = t.path.steps, n = t.path.terminal), e.range ? (s = e.path.steps.concat(e.start.steps), r = e.start.terminal) : (s = e.path.steps, r = e.path.terminal);
    for (let l = 0; l < i.length; l++) {
      if (!i[l])
        return -1;
      if (!s[l] || i[l].index > s[l].index)
        return 1;
      if (i[l].index < s[l].index)
        return -1;
    }
    if (i.length < s.length)
      return -1;
    const o = n.offset ?? 0, h = r.offset ?? 0;
    return o > h ? 1 : o < h ? -1 : 0;
  }
  step(t) {
    const e = t.nodeType === A ? "text" : "element";
    return {
      id: t.id,
      tagName: t.tagName,
      type: e,
      index: this.position(t)
    };
  }
  filteredStep(t, e) {
    const i = this.filter(t, e);
    if (!i)
      return;
    const s = i.nodeType === A ? "text" : "element";
    return {
      id: i.id,
      tagName: i.tagName,
      type: s,
      index: this.filteredPosition(i, e)
    };
  }
  pathTo(t, e, i) {
    const s = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    };
    let n = t, r;
    for (; n && n.parentNode && n.parentNode.nodeType !== Ne; )
      i ? r = this.filteredStep(n, i) : r = this.step(n), r && s.steps.unshift(r), n = n.parentNode;
    return e != null && e >= 0 && (s.terminal.offset = e, s.steps.length > 0 && s.steps[s.steps.length - 1].type !== "text" && s.steps.push({
      type: "text",
      index: 0,
      id: null,
      tagName: ""
    })), s;
  }
  equalStep(t, e) {
    return !t || !e ? false : t.index === e.index && t.id === e.id && t.type === e.type;
  }
  /**
   * Create a CFI object from a Range
   * @param {Range} range
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromRange(t, e, i) {
    const s = {
      range: false,
      base: {},
      path: {},
      start: null,
      end: null,
      spinePos: 0
    }, n = t.startContainer, r = t.endContainer;
    let o = t.startOffset, h = t.endOffset, l = false;
    if (i && (l = n.ownerDocument.querySelector("." + i) != null), typeof e == "string" ? (s.base = this.parseComponent(e), s.spinePos = s.base.steps[1].index) : typeof e == "object" && (s.base = e), t.collapsed)
      l && (o = this.patchOffset(n, o, i)), s.path = this.pathTo(n, o, i);
    else {
      s.range = true, l && (o = this.patchOffset(n, o, i)), s.start = this.pathTo(n, o, i), l && (h = this.patchOffset(r, h, i)), s.end = this.pathTo(r, h, i), s.path = {
        steps: [],
        terminal: { offset: null, assertion: null }
      };
      const c = s.start.steps.length;
      let d;
      for (d = 0; d < c && this.equalStep(s.start.steps[d], s.end.steps[d]); d++)
        d === c - 1 ? s.start.terminal === s.end.terminal && (s.path.steps.push(s.start.steps[d]), s.range = false) : s.path.steps.push(s.start.steps[d]);
      s.start.steps = s.start.steps.slice(s.path.steps.length), s.end.steps = s.end.steps.slice(s.path.steps.length);
    }
    return s;
  }
  /**
   * Create a CFI object from a Node
   * @param {Node} anchor
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromNode(t, e, i) {
    const s = {
      range: false,
      base: {},
      path: {},
      start: null,
      end: null,
      spinePos: 0
    };
    return typeof e == "string" ? (s.base = this.parseComponent(e), s.spinePos = s.base.steps[1].index) : typeof e == "object" && (s.base = e), s.path = this.pathTo(t, null, i), s;
  }
  filter(t, e) {
    let i, s, n, r, o, h = false;
    return t.nodeType === A ? (h = true, n = t.parentNode, i = t.parentNode.classList.contains(e)) : (h = false, i = t.classList.contains(e)), i && h ? (r = n.previousSibling, o = n.nextSibling, r && r.nodeType === A ? s = r : o && o.nodeType === A && (s = o), s || t) : i && !h ? false : t;
  }
  patchOffset(t, e, i) {
    if (t.nodeType !== A)
      throw new Error("Anchor must be a text node");
    let s = t, n = e;
    for (t.parentNode.classList.contains(i) && (s = t.parentNode); s.previousSibling; ) {
      if (s.previousSibling.nodeType === j)
        if (s.previousSibling.classList.contains(i))
          n += (s.previousSibling.textContent ?? "").length;
        else
          break;
      else
        n += (s.previousSibling.textContent ?? "").length;
      s = s.previousSibling;
    }
    return n;
  }
  normalizedMap(t, e, i) {
    const s = {};
    let n = -1, r;
    const o = t.length;
    let h, l;
    for (r = 0; r < o; r++)
      h = t[r].nodeType, h === j && t[r].classList.contains(i) && (h = A), r > 0 && h === A && l === A ? s[r] = n : e === h && (n = n + 1, s[r] = n), l = h;
    return s;
  }
  position(t) {
    let e, i;
    return t.nodeType === j ? (e = t.parentNode.children, e || (e = _t(t.parentNode)), i = Array.from(e).indexOf(t)) : (e = this.textNodes(t.parentNode), i = e.indexOf(t)), i;
  }
  filteredPosition(t, e) {
    let i, s;
    t.nodeType === j ? (i = t.parentNode.children, s = this.normalizedMap(i, j, e)) : (i = t.parentNode.childNodes, t.parentNode.classList.contains(e) && (t = t.parentNode, i = t.parentNode.childNodes), s = this.normalizedMap(i, A, e));
    const n = Array.from(i).indexOf(t);
    return s[n];
  }
  stepsToXpath(t) {
    const e = [".", "*"];
    return t.forEach(function(i) {
      const s = i.index + 1;
      i.id ? e.push("*[position()=" + s + " and @id='" + i.id + "']") : i.type === "text" ? e.push("text()[" + s + "]") : e.push("*[" + s + "]");
    }), e.join("/");
  }
  /*
  
  	To get the last step if needed:
  
  	// Get the terminal step
  	lastStep = steps[steps.length-1];
  	// Get the query string
  	query = this.stepsToQuery(steps);
  	// Find the containing element
  	startContainerParent = doc.querySelector(query);
  	// Find the text node within that element
  	if(startContainerParent && lastStep.type === "text") {
  		container = startContainerParent.childNodes[lastStep.index];
  	}
  	*/
  stepsToQuerySelector(t) {
    const e = ["html"];
    return t.forEach(function(i) {
      const s = i.index + 1;
      i.id ? e.push("#" + i.id) : i.type === "text" || e.push("*:nth-child(" + s + ")");
    }), e.join(">");
  }
  textNodes(t, e) {
    return Array.from(t.childNodes).filter(function(i) {
      return i.nodeType === A ? true : !!(e && i.classList.contains(e));
    });
  }
  walkToNode(t, e, i) {
    const s = e || document;
    let n = s.documentElement, r, o;
    const h = t.length;
    let l;
    for (l = 0; l < h && (o = t[l], o.type === "element" ? o.id ? n = s.getElementById(o.id) : (r = n.children || _t(n), n = r[o.index]) : o.type === "text" && (n = this.textNodes(n, i)[o.index]), !!n); l++)
      ;
    return n;
  }
  findNode(t, e, i) {
    const s = e || document;
    let n, r;
    return !i && typeof s.evaluate < "u" ? (r = this.stepsToXpath(t), n = s.evaluate(r, s, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue ?? void 0) : i ? n = this.walkToNode(t, s, i) : n = this.walkToNode(t, s), n;
  }
  fixMiss(t, e, i, s) {
    let n = this.findNode(t.slice(0, -1), i, s);
    if (!n)
      return { container: (i ?? document).documentElement, offset: 0 };
    const r = n.childNodes, o = this.normalizedMap(r, A, s);
    let h, l;
    const c = t[t.length - 1].index;
    for (const d in o)
      if (Object.prototype.hasOwnProperty.call(o, d) && o[d] === c)
        if (h = r[d], l = (h.textContent ?? "").length, e > l)
          e = e - l;
        else {
          h.nodeType === j ? n = h.childNodes[0] ?? h : n = h;
          break;
        }
    return {
      container: n,
      offset: e
    };
  }
  /**
   * Creates a DOM range representing a CFI
   * @param {document} _doc document referenced in the base
   * @param {string} [ignoreClass]
   * @return {Range}
   */
  toRange(t, e) {
    const i = t || document;
    let s, n, r, o, h;
    const l = this;
    let c, d;
    const u = e ? i.querySelector("." + e) != null : false;
    let f;
    if (typeof i.createRange < "u" ? s = i.createRange() : s = new re(), l.range ? (n = l.start, c = l.path.steps.concat(n.steps), o = this.findNode(c, i, u ? e : void 0), r = l.end, d = l.path.steps.concat(r.steps), h = this.findNode(d, i, u ? e : void 0)) : (n = l.path, c = l.path.steps, o = this.findNode(l.path.steps, i, u ? e : void 0)), o)
      try {
        n.terminal.offset != null ? s.setStart(o, n.terminal.offset) : s.setStart(o, 0);
      } catch {
        f = this.fixMiss(c, n.terminal.offset, i, u ? e : void 0), s.setStart(f.container, f.offset);
      }
    else
      return console.log("No startContainer found for", this.toString()), null;
    if (h)
      try {
        r.terminal.offset != null ? s.setEnd(h, r.terminal.offset) : s.setEnd(h, 0);
      } catch {
        f = this.fixMiss(d, l.end.terminal.offset, i, u ? e : void 0), s.setEnd(f.container, f.offset);
      }
    return s;
  }
  /**
   * Check if a string is wrapped with "epubcfi()"
   * @param {string} str
   * @returns {boolean}
   */
  isCfiString(t) {
    return !!(typeof t == "string" && t.startsWith("epubcfi(") && t.endsWith(")"));
  }
  generateChapterComponent(t, e, i) {
    const s = parseInt(e);
    let r = "/" + (t + 1) * 2 + "/";
    return r += (s + 1) * 2, i && (r += "[" + i + "]"), r;
  }
  /**
   * Collapse a CFI Range to a single CFI Position
   * @param {boolean} [toStart=false]
   */
  collapse(t) {
    this.range && (this.range = false, t ? (this.path.steps = this.path.steps.concat(this.start.steps), this.path.terminal = this.start.terminal) : (this.path.steps = this.path.steps.concat(this.end.steps), this.path.terminal = this.end.terminal));
  }
};
var O = class {
  constructor(t) {
    this.context = t || this, this.hooks = [];
  }
  /**
   * Adds a function to be run before a hook completes
   * @example this.content.register(function(){...});
   */
  register(...t) {
    for (let e = 0; e < t.length; ++e) {
      const i = t[e];
      if (typeof i == "function")
        this.hooks.push(i);
      else
        for (let s = 0; s < i.length; ++s)
          this.hooks.push(i[s]);
    }
  }
  /**
   * Removes a function
   * @example this.content.deregister(function(){...});
   */
  deregister(t) {
    let e;
    for (let i = 0; i < this.hooks.length; i++)
      if (e = this.hooks[i], e === t) {
        this.hooks.splice(i, 1);
        break;
      }
  }
  /**
   * Triggers a hook to run all functions
   * @example this.content.trigger(args).then(function(){...});
   */
  trigger(...t) {
    const e = this.context, i = [];
    return this.hooks.forEach(function(s) {
      let n;
      try {
        n = s.call(e, ...t);
      } catch (r) {
        console.error(r);
      }
      n && typeof n.then == "function" && i.push(n);
    }), Promise.all(i);
  }
  // Adds a function to be run before a hook completes
  list() {
    return this.hooks;
  }
  clear() {
    return this.hooks = [];
  }
};
function oe(a, t) {
  let e, i = t.url;
  const s = i.includes("://");
  if (!a)
    return;
  const n = _(a, "head");
  e = _(n, "base"), e || (e = a.createElement("base"), n.insertBefore(e, n.firstChild)), !s && typeof window < "u" && window.location && (i = window.location.origin + i), e.setAttribute("href", i);
}
function ke(a, t) {
  let e;
  const i = t.canonical;
  if (!a)
    return;
  const s = _(a, "head");
  e = _(s, "link[rel='canonical']"), e ? e.setAttribute("href", i) : (e = a.createElement("link"), e.setAttribute("rel", "canonical"), e.setAttribute("href", i), s.appendChild(e));
}
function Ae(a, t) {
  let e;
  const i = t.idref;
  if (!a)
    return;
  const s = _(a, "head");
  e = _(s, "link[property='dc.identifier']"), e ? e.setAttribute("content", i) : (e = a.createElement("meta"), e.setAttribute("name", "dc.identifier"), e.setAttribute("content", i), s.appendChild(e));
}
function Ie(a, t) {
  const e = a.querySelectorAll("a[href]");
  if (!e.length)
    return;
  const i = _(a.ownerDocument, "base"), s = i ? i.getAttribute("href") ?? void 0 : void 0, n = function(r) {
    const o = r.getAttribute("href") ?? "";
    if (o.startsWith("mailto:"))
      return;
    const h = o.replace(/[\u0000-\u0020]+/g, "").toLowerCase();
    if (h.startsWith("javascript:") || h.startsWith("data:text/html") || h.startsWith("vbscript:")) {
      r.removeAttribute("href");
      return;
    }
    if (o.includes("://"))
      r.setAttribute("target", "_blank");
    else {
      let c;
      try {
        c = new P(o, s);
      } catch {
      }
      r.onclick = function() {
        return c && c.hash ? t(c.Path.path + c.hash) : t(c ? c.Path.path : o), false;
      };
    }
  };
  for (let r = 0; r < e.length; r++)
    n(e[r]);
}
function Bt(a, t, e) {
  const i = /* @__PURE__ */ new Map(), s = [], n = /[-[\]{}()*+?.,\\^$|#\s]/g;
  for (let o = 0; o < t.length; o++) {
    const h = t[o], l = e[o];
    if (!h || !l) continue;
    const c = h.replace(n, "\\$&");
    i.set(h, l), s.push(c);
    try {
      const d = decodeURIComponent(h);
      if (d !== h) {
        const u = d.replace(n, "\\$&");
        i.set(d, l), s.push(u);
      }
    } catch {
    }
  }
  if (s.length === 0) return a;
  s.sort((o, h) => h.length - o.length);
  const r = new RegExp(s.join("|"), "g");
  return a.replace(r, (o) => i.get(o) ?? o);
}
function he(a) {
  return /^file:/i.test(a);
}
function Pe(a, t, e, i, s) {
  return new Promise((n, r) => {
    if (typeof XMLHttpRequest > "u") {
      r(new k("XMLHttpRequest is unavailable in this environment"));
      return;
    }
    if (s && s.aborted) {
      r(new DOMException("Aborted", "AbortError"));
      return;
    }
    const o = new XMLHttpRequest();
    t === "blob" ? o.responseType = "blob" : t === "binary" && (o.responseType = "arraybuffer");
    let h;
    const l = () => {
      s && h && s.removeEventListener("abort", h);
    };
    if (s && (h = () => {
      o.abort();
    }, s.addEventListener("abort", h)), o.onreadystatechange = () => {
      if (o.readyState !== XMLHttpRequest.DONE || s && s.aborted)
        return;
      if (l(), !(o.status >= 200 && o.status < 300 || o.status === 0 && he(a))) {
        r(new k(o.statusText || "Network Error", o.status));
        return;
      }
      if (t === "blob") {
        const d = o.response;
        n(d instanceof Blob ? d : lt(d, d.type));
        return;
      }
      if (t === "binary") {
        n(o.response);
        return;
      }
      try {
        n(Q(o.responseText, t));
      } catch (d) {
        r(d);
      }
    }, o.onerror = () => {
      l(), r(new k("Network Error", o.status || 0));
    }, o.onabort = () => {
      l(), r(new DOMException("Aborted", "AbortError"));
    }, o.open("GET", a, true), e && (o.withCredentials = true), i)
      for (const [c, d] of Object.entries(i))
        o.setRequestHeader(c, d);
    t === "json" && o.setRequestHeader("Accept", "application/json"), o.send();
  });
}
async function Oe(a, t) {
  try {
    return await fetch(a, t);
  } catch (e) {
    const i = t.signal;
    if (!i || e.name !== "TypeError" || !/signal/i.test(e.message))
      throw e;
    if (i.aborted)
      throw new DOMException("Aborted", "AbortError");
    const { signal: s, ...n } = t;
    return fetch(a, n);
  }
}
async function K(a, t, e, i, s) {
  if (t || (t = new z(a).extension), typeof fetch > "u" || he(a)) {
    if (typeof XMLHttpRequest > "u")
      throw new k(
        "XMLHttpRequest is unavailable in this environment; pass an ArrayBuffer or Blob instead of a file:// URL.",
        0
      );
    return Pe(a, t, e, i, s);
  }
  const n = {};
  if (e && (n.credentials = "include"), i || t === "json") {
    const h = new Headers(i);
    t === "json" && h.set("Accept", "application/json"), n.headers = h;
  }
  s && (n.signal = s);
  let r;
  try {
    r = await Oe(a, n);
  } catch (h) {
    throw h.name === "AbortError" ? h : new k(h.message || "Network Error", 0, h);
  }
  if (!r.ok) {
    const h = await r.text().catch(() => "");
    throw new k(h || r.statusText, r.status);
  }
  if (t === "blob") {
    const h = await r.blob();
    return h instanceof Blob ? h : lt(h, h.type);
  }
  if (t === "binary")
    return r.arrayBuffer();
  if (t === "json")
    return r.json();
  const o = await r.text();
  return Q(o, t);
}
var De = class {
  constructor(t, e) {
    this.idref = t.idref, this.linear = t.linear === "yes", this.properties = t.properties, this.index = t.index, this.href = t.href, this.url = t.url, this.canonical = t.canonical, this.mediaType = t.mediaType, this.next = t.next, this.prev = t.prev, this.cfiBase = t.cfiBase, e ? this.hooks = e : (this.hooks = {}, this.hooks.serialize = new O(this), this.hooks.content = new O(this)), this.document = void 0, this.contents = void 0, this.output = void 0;
  }
  /**
   * Load the section from its url
   * @param  {method} [_request] a request method to use for loading
   * @return {document} a promise with the xml document
   */
  async load(t, e) {
    const i = t || this.request || K;
    if (this.contents)
      return this.contents;
    const s = new z(this.url).extension, n = Jt(this.mediaType), o = n === "xhtml" && (s === "html" || s === "htm") || !Zt(s) ? n : s, h = await i(this.url, o, void 0, void 0, e);
    return this.document = h, this.contents = h.documentElement, await this.hooks.content.trigger(this.document, this), this.contents;
  }
  /**
   * Adds a base tag for resolving urls in the section
   * @private
   */
  base() {
    return oe(this.document, this);
  }
  /**
   * Render the contents of a section
   * @param  {method} [_request] a request method to use for loading
   * @return {string} output a serialized XML Document
   */
  async render(t, e) {
    const i = await this.load(t, e), s = new XMLSerializer();
    return this.output = s.serializeToString(i), await this.hooks.serialize.trigger(this.output, this), this.output;
  }
  /**
   * Find a string in a section
   * @param  {string} _query The query string to find
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */
  find(t) {
    const e = this, i = [], s = t.toLowerCase(), n = function(r) {
      const o = r.textContent.toLowerCase();
      let h, l, c, d = -1, u;
      const f = 150;
      for (; c !== -1; )
        c = o.indexOf(s, d + 1), c !== -1 && (h = e.document.createRange(), h.setStart(r, c), h.setEnd(r, c + s.length), l = e.cfiFromRange(h), r.textContent.length < f ? u = r.textContent : (u = r.textContent.substring(c - f / 2, c + f / 2), u = "..." + u + "..."), i.push({
          cfi: l,
          excerpt: u
        })), d = c;
    };
    return rt(e.document, function(r) {
      n(r);
    }), i;
  }
  /**
   * Search a string in multiple sequential Element of the section.
   * @param  {string} _query The query string to search
   * @param  {int} maxSeqEle The maximum number of Element that are combined for search, default value is 5.
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */
  search(t, e = 5) {
    const i = [], n = this, r = t.toLowerCase(), o = function(d) {
      const m = d.reduce((p, v) => p + (v.textContent ?? ""), "").toLowerCase().indexOf(r);
      if (m !== -1) {
        const v = m + r.length;
        let y = 0, E = 0;
        if (m < d[0].length) {
          for (; y < d.length - 1 && (E += d[y].length, !(v <= E)); )
            y += 1;
          const x = d[0], w = d[y], C = n.document.createRange();
          C.setStart(x, m);
          const R = d.slice(0, y).reduce((ut, ft) => ut + (ft.textContent ?? "").length, 0);
          C.setEnd(w, R > v ? v : v - R);
          const N = n.cfiFromRange(C);
          let B = d.slice(0, y + 1).reduce((ut, ft) => ut + (ft.textContent ?? ""), "");
          B.length > 150 && (B = B.substring(m - 150 / 2, m + 150 / 2), B = "..." + B + "..."), i.push({
            cfi: N,
            excerpt: B
          });
        }
      }
    }, h = document.createTreeWalker(n.document, NodeFilter.SHOW_TEXT, null);
    let l, c = [];
    for (; l = h.nextNode(); )
      c.push(l), c.length === e && (o(c.slice(0, e)), c = c.slice(1, e));
    return c.length > 0 && o(c), i;
  }
  /**
  * Reconciles the current chapters layout properties with
  * the global layout properties.
  * @param {object} globalLayout  The global layout settings object, chapter properties string
  * @return {object} layoutProperties Object with layout properties
  */
  reconcileLayoutSettings(t) {
    const e = {
      layout: t.layout,
      spread: t.spread,
      orientation: t.orientation
    };
    return this.properties.forEach(function(i) {
      const s = i.replace("rendition:", ""), n = s.indexOf("-");
      let r, o;
      n !== -1 && (r = s.slice(0, n), o = s.slice(n + 1), e[r] = o);
    }), e;
  }
  /**
   * Get a CFI from a Range in the Section
   * @param  {range} _range
   * @return {string} cfi an EpubCFI string
   */
  cfiFromRange(t) {
    return new b(t, this.cfiBase).toString();
  }
  /**
   * Get a CFI from an Element in the Section
   * @param  {element} el
   * @return {string} cfi an EpubCFI string
   */
  cfiFromElement(t) {
    return new b(t, this.cfiBase).toString();
  }
  /**
   * Unload the section document
   */
  unload() {
    this.document = void 0, this.contents = void 0, this.output = void 0;
  }
  destroy() {
    this.unload(), this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.idref = void 0, this.linear = void 0, this.properties = void 0, this.index = void 0, this.href = void 0, this.url = void 0, this.next = void 0, this.prev = void 0, this.cfiBase = void 0;
  }
};
var ze = class {
  constructor() {
    this.spineItems = [], this.spineByHref = {}, this.spineById = {}, this.hooks = {}, this.hooks.serialize = new O(), this.hooks.content = new O(), this.hooks.content.register(oe), this.hooks.content.register(ke), this.hooks.content.register(Ae), this.epubcfi = new b(), this.loaded = false, this.items = [], this.manifest = {}, this.spineNodeIndex = 0, this.baseUrl = "", this.length = 0;
  }
  /**
   * Unpack items from a opf into spine items
   * @param  {Packaging} _package
   * @param  {method} resolver URL resolver
   * @param  {method} canonical Resolve canonical url
   */
  unpack(t, e, i) {
    this.items = t.spine, this.manifest = t.manifest, this.spineNodeIndex = t.spineNodeIndex, this.baseUrl = t.baseUrl || t.basePath || "", this.length = this.items.length, this.items.forEach((s, n) => {
      const r = this.manifest[s.idref];
      s.index = n, s.cfiBase = this.epubcfi.generateChapterComponent(this.spineNodeIndex, s.index, s.id), s.href && (s.url = e(s.href, true), s.canonical = i(s.href)), r && (s.href = r.href, s.url = e(s.href, true), s.canonical = i(s.href), s.mediaType = r.type, r.properties.length && s.properties.push(...r.properties)), s.linear === "yes" ? (s.prev = () => {
        let h = s.index;
        for (; h > 0; ) {
          const l = this.get(h - 1);
          if (l && l.linear)
            return l;
          h -= 1;
        }
      }, s.next = () => {
        let h = s.index;
        for (; h < this.spineItems.length - 1; ) {
          const l = this.get(h + 1);
          if (l && l.linear)
            return l;
          h += 1;
        }
      }) : (s.prev = function() {
      }, s.next = function() {
      });
      const o = new De(s, this.hooks);
      this.append(o);
    }), this.loaded = true;
  }
  /**
   * Get an item from the spine
   * @param  {string|number} [target]
   * @return {Section} section
   * @example spine.get();
   * @example spine.get(1);
   * @example spine.get("chap1.html");
   * @example spine.get("#id1234");
   */
  get(t) {
    let e = 0;
    if (typeof t > "u")
      for (; e < this.spineItems.length; ) {
        const i = this.spineItems[e];
        if (i && i.linear)
          break;
        e += 1;
      }
    else this.epubcfi.isCfiString(t) ? e = new b(t).spinePos : typeof t == "number" || isNaN(Number(t)) === false ? e = Number(t) : typeof t == "string" && t.startsWith("#") ? e = this.spineById[t.substring(1)] ?? -1 : typeof t == "string" && (t = t.split("#")[0], e = this.spineByHref[t] ?? this.spineByHref[encodeURI(t)] ?? -1);
    return this.spineItems[e] ?? null;
  }
  /**
   * Append a Section to the Spine
   * @private
   * @param  {Section} section
   */
  append(t) {
    const e = this.spineItems.length;
    return t.index = e, this.spineItems.push(t), this.spineByHref[decodeURI(t.href)] = e, this.spineByHref[encodeURI(t.href)] = e, this.spineByHref[t.href] = e, this.spineById[t.idref] = e, e;
  }
  /**
   * Prepend a Section to the Spine
   * @private
   * @param  {Section} section
   */
  prepend(t) {
    return this.spineItems.unshift(t), this.spineByHref[t.href] = 0, this.spineById[t.idref] = 0, this.spineItems.forEach(function(e, i) {
      e.index = i;
    }), 0;
  }
  // insert(section, index) {
  //
  // };
  /**
   * Remove a Section from the Spine
   * @private
   * @param  {Section} section
   */
  remove(t) {
    const e = this.spineItems.indexOf(t);
    if (e > -1)
      return delete this.spineByHref[t.href], delete this.spineById[t.idref], this.spineItems.splice(e, 1);
  }
  /**
   * Loop over the Sections in the Spine
   * @return {method} forEach
   */
  each(t) {
    return this.spineItems.forEach(t);
  }
  /**
   * Find the first Section in the Spine
   * @return {Section} first section
   */
  first() {
    let t = 0;
    do {
      const e = this.get(t);
      if (e && e.linear)
        return e;
      t += 1;
    } while (t < this.spineItems.length);
  }
  /**
   * Find the last Section in the Spine
   * @return {Section} last section
   */
  last() {
    let t = this.spineItems.length - 1;
    do {
      const e = this.get(t);
      if (e && e.linear)
        return e;
      t -= 1;
    } while (t >= 0);
  }
  destroy() {
    this.each((t) => t.destroy()), this.spineItems = void 0, this.spineByHref = void 0, this.spineById = void 0, this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.epubcfi = void 0, this.loaded = false, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0;
  }
};
var Pt = class {
  constructor(t) {
    this._q = [], this.context = t, this.tick = Vt, this.running = false, this.paused = false;
  }
  enqueue(...t) {
    let e, i, s;
    const [n, ...r] = t;
    if (!n)
      throw new Error("No Task Provided");
    return typeof n == "function" ? (e = new T(), i = e.promise, s = {
      task: n,
      args: r,
      //"context"  : context,
      deferred: e,
      promise: i
    }) : s = {
      args: [],
      promise: n
    }, this._q.push(s), !this.paused && !this.running && this.run(), s.promise;
  }
  /**
   * Run one item
   * @return {Promise}
   */
  dequeue() {
    let t, e, i;
    return this._q.length && !this.paused ? (t = this._q.shift(), e = t.task, e ? (i = e.call(this.context, ...t.args), i && typeof i.then == "function" ? i.then((s) => {
      t.deferred.resolve(s);
    }, (s) => {
      t.deferred.reject(s);
    }) : (t.deferred.resolve(i), t.promise)) : t.promise) : Promise.resolve();
  }
  // Run All Immediately
  dump() {
    for (; this._q.length; )
      this.dequeue();
  }
  /**
   * Run all tasks sequentially, at convince
   * @return {Promise}
   */
  run() {
    (!this.running || !this.defered) && (this.running = true, this.defered = new T());
    const t = () => {
      var e, i;
      this._q.length ? (e = this.dequeue()) == null || e.then(() => {
        this.run();
      }) : ((i = this.defered) == null || i.resolve(), this.running = void 0);
    };
    return this.tick(t), this.paused && (this.paused = false), this.defered.promise;
  }
  /**
   * Flush all, as quickly as possible
   * @return {Promise}
   */
  flush() {
    var t;
    if (this.running)
      return this.running;
    if (this._q.length)
      return this.running = (t = this.dequeue()) == null ? void 0 : t.then(() => (this.running = void 0, this.flush())), this.running;
  }
  /**
   * Clear all items in wait
   */
  clear() {
    var e, i;
    const t = this._q;
    this._q = [];
    for (const s of t)
      (e = s.deferred) == null || e.resolve(void 0);
    (i = this.defered) == null || i.resolve(), this.defered = void 0;
  }
  /**
   * Get the number of tasks in the queue
   * @return {number} tasks
   */
  length() {
    return this._q.length;
  }
  /**
   * Pause a running queue
   */
  pause() {
    this.paused = true;
  }
  /**
   * End the queue
   */
  stop() {
    this.clear(), this.running = false, this.paused = true;
  }
};
var ct = "0.3";
var it = ["keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "click", "dblclick", "touchend", "touchstart", "touchmove"];
var g = {
  BOOK: {
    OPEN_FAILED: "openFailed"
  },
  CONTENTS: {
    EXPAND: "expand",
    RESIZE: "resize",
    SELECTED: "selected",
    SELECTED_RANGE: "selectedRange",
    LINK_CLICKED: "linkClicked"
  },
  LOCATIONS: {
    CHANGED: "changed"
  },
  MANAGERS: {
    RESIZE: "resize",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    ADDED: "added",
    SCROLL: "scroll",
    SCROLLED: "scrolled",
    REMOVED: "removed",
    DISPLAY_ERROR: "displayerror"
  },
  VIEWS: {
    AXIS: "axis",
    WRITING_MODE: "writingMode",
    LOAD_ERROR: "loaderror",
    RENDERED: "rendered",
    RESIZED: "resized",
    DISPLAYED: "displayed",
    SHOWN: "shown",
    HIDDEN: "hidden",
    MARK_CLICKED: "markClicked"
  },
  RENDITION: {
    STARTED: "started",
    ATTACHED: "attached",
    DISPLAYED: "displayed",
    DISPLAY_ERROR: "displayerror",
    RENDERED: "rendered",
    REMOVED: "removed",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    LOCATION_CHANGED: "locationChanged",
    RELOCATED: "relocated",
    MARK_CLICKED: "markClicked",
    SELECTED: "selected",
    LAYOUT: "layout"
  },
  LAYOUT: {
    UPDATED: "updated"
  },
  ANNOTATION: {
    ATTACH: "attach",
    DETACH: "detach"
  }
};
function tt(a, t) {
  const e = (a == null ? void 0 : a.properties) ?? [];
  return e.includes("rendition:layout-pre-paginated") ? "pre-paginated" : e.includes("rendition:layout-reflowable") ? "reflowable" : t;
}
var ae = class {
  constructor(t) {
    this.settings = t, this.name = t.layout || "reflowable", this._spread = t.spread !== "none", this._minSpreadWidth = t.minSpreadWidth || 800, this._evenSpreads = t.evenSpreads || false, t.flow === "scrolled" || t.flow === "scrolled-continuous" || t.flow === "scrolled-doc" ? this._flow = "scrolled" : this._flow = "paginated", this.width = 0, this.height = 0, this.spreadWidth = 0, this.delta = 0, this.columnWidth = 0, this.gap = 0, this.divisor = 1, this.props = {
      name: this.name,
      spread: this._spread,
      flow: this._flow,
      width: 0,
      height: 0,
      spreadWidth: 0,
      delta: 0,
      columnWidth: 0,
      gap: 0,
      divisor: 1
    };
  }
  /**
   * Switch the flow between paginated and scrolled
   * @param  {string} flow paginated | scrolled
   * @return {string} simplified flow
   */
  flow(t) {
    return typeof t < "u" && (t === "scrolled" || t === "scrolled-continuous" || t === "scrolled-doc" ? this._flow = "scrolled" : this._flow = "paginated", this.update({ flow: this._flow })), this._flow;
  }
  /**
   * Switch between using spreads or not, and set the
   * width at which they switch to single.
   * @param  {string} spread "none" | "always" | "auto"
   * @param  {number} min integer in pixels
   * @return {boolean} spread true | false
   */
  spread(t, e) {
    return t && (this._spread = t !== "none", this.update({ spread: this._spread })), e !== void 0 && e >= 0 && (this._minSpreadWidth = e), this._spread;
  }
  /**
   * Calculate the dimensions of the pagination
   * @param  {number} _width  width of the rendering
   * @param  {number} _height height of the rendering
   * @param  {number} _gap    width of the gap between columns
   */
  calculate(t, e, i) {
    let s = 1, n = i || 0, r = t;
    const o = e, h = Math.floor(r / 12);
    let l, c;
    this._spread && r >= this._minSpreadWidth ? s = 2 : s = 1, this.name === "reflowable" && this._flow === "paginated" && !(i !== void 0 && i >= 0) && (n = h % 2 === 0 ? h : h - 1), this.name === "pre-paginated" && (n = 0), s > 1 ? (l = r / s - n, c = l + n) : (l = r, c = r), this.name === "pre-paginated" && s > 1 && (r = l);
    const d = l * s + n, u = r;
    this.width = r, this.height = o, this.spreadWidth = d, this.pageWidth = c, this.delta = u, this.columnWidth = l, this.gap = n, this.divisor = s, this.update({
      width: r,
      height: o,
      spreadWidth: d,
      pageWidth: c,
      delta: u,
      columnWidth: l,
      gap: n,
      divisor: s
    });
  }
  /**
   * Apply Css to a Document
   * @param  {Contents} contents
   * @return {Promise}
   */
  format(t, e, i) {
    let s;
    if (!(tt(e, this.name) === "pre-paginated" && t.fit(this.columnWidth, this.height, e) !== false))
      return this._flow === "paginated" ? s = t.columns(this.width, this.height, this.columnWidth, this.gap, this.settings.direction) : i && i === "horizontal" ? s = t.size(void 0, this.height) : s = t.size(this.width, void 0), s;
  }
  /**
   * Count number of pages
   * @param  {number} totalLength
   * @param  {number} pageLength
   * @return {{spreads: Number, pages: Number}}
   */
  count(t, e) {
    let i, s;
    return this.name === "pre-paginated" ? (i = 1, s = 1) : this._flow === "paginated" ? (e = e || this.delta, i = Math.ceil(t / e), s = i * this.divisor) : (e = e || this.height, i = Math.ceil(t / e), s = i), {
      spreads: i,
      pages: s
    };
  }
  /**
   * Update props that have changed
   * @private
   * @param  {object} props
   */
  update(t) {
    const e = t, i = this.props;
    if (Object.keys(e).forEach((s) => {
      i[s] === e[s] && delete e[s];
    }), Object.keys(e).length > 0) {
      const s = L(this.props, t);
      this.emit(g.LAYOUT.UPDATED, s, t);
    }
  }
};
D(ae.prototype);
var pt = typeof requestIdleCallback == "function" && typeof cancelIdleCallback == "function";
var le = class {
  constructor(t, e, i) {
    this.spine = t, this.request = e, this.pause = i || 0, this.q = new Pt(this), this.q.tick = Nt, this.epubcfi = new b(), this._locations = [], this._locationsWords = [], this.total = 0, this.break = 150, this._current = 0, this._wordCounter = 0, this._currentCfi = "", this.processingTimeout = void 0, this.layout = void 0;
  }
  /**
   * Load all of sections in the book to generate locations
   * @param  {int} chars how many chars to split on
   * @return {Promise<Array<string>>} locations
   */
  generate(t) {
    return t && (this.break = t), this.q.pause(), this.spine.each((e) => {
      e.linear && this.q.enqueue((i) => this.process(i), e);
    }), this.q.run().then(() => (this.total = this._locations.length - 1, this._currentCfi && (this.currentLocation = this._currentCfi), this._locations));
  }
  createRange() {
    return {
      startContainer: void 0,
      startOffset: void 0,
      endContainer: void 0,
      endOffset: void 0
    };
  }
  async process(t) {
    const e = await t.load(this.request), i = this.parse(e, t.cfiBase);
    return this._locations = this._locations.concat(i), t.unload(), new Promise((s) => {
      const n = () => s(i);
      pt ? this.processingTimeout = requestIdleCallback(n, { timeout: (this.pause ?? 0) + 50 }) : this.processingTimeout = setTimeout(n, this.pause);
    });
  }
  parse(t, e, i) {
    const s = [];
    let n;
    const r = t.ownerDocument, o = _(r, "body");
    let h = 0, l;
    const c = i || this.break;
    if (rt(o, (u) => {
      const f = u.length;
      let m, p = 0;
      if (h === 0 && (n = this.createRange(), n.startContainer = u, n.startOffset = 0), (u.textContent ?? "").trim().length === 0)
        return l = u, false;
      for (m = c - h, m > f && (h += f, p = f); p < f; )
        if (m = c - h, h === 0 && (p += 1, n = this.createRange(), n.startContainer = u, n.startOffset = p), p + m >= f)
          h += f - p, p = f;
        else {
          p += m, n.endContainer = u, n.endOffset = p;
          const v = new b(n, e).toString();
          s.push(v), h = 0;
        }
      return l = u, false;
    }), n && n.startContainer && l) {
      n.endContainer = l, n.endOffset = l.length;
      const u = new b(n, e).toString();
      s.push(u), h = 0;
    }
    return s;
  }
  /**
   * Load all of sections in the book to generate locations
   * @param  {string} startCfi start position
   * @param  {int} wordCount how many words to split on
   * @param  {int} count result count
   * @return {object} locations
   */
  generateFromWords(t, e, i) {
    const s = t ? new b(t) : void 0;
    return this.q.pause(), this._locationsWords = [], this._wordCounter = 0, this.spine.each((n) => {
      n.linear && (s ? n.index >= s.spinePos && this.q.enqueue((r, o, h, l) => this.processWords(r, o, h, l), n, e, s, i) : this.q.enqueue((r, o, h, l) => this.processWords(r, o, h, l), n, e, s, i));
    }), this.q.run().then(() => (this._currentCfi && (this.currentLocation = this._currentCfi), this._locationsWords));
  }
  async processWords(t, e, i, s) {
    if (s && this._locationsWords.length >= s)
      return [];
    const n = await t.load(this.request), r = this.parseWords(n, t, e, i), o = s - this._locationsWords.length;
    return this._locationsWords = this._locationsWords.concat(r.length >= s ? r.slice(0, o) : r), t.unload(), new Promise((h) => {
      const l = () => h(r);
      pt ? this.processingTimeout = requestIdleCallback(l, { timeout: (this.pause ?? 0) + 50 }) : this.processingTimeout = setTimeout(l, this.pause);
    });
  }
  //http://stackoverflow.com/questions/18679576/counting-words-in-string
  countWords(t) {
    return t = t.replace(/(^\s*)|(\s*$)/gi, ""), t = t.replace(/[ ]{2,}/gi, " "), t = t.replace(/\n /, `
`), t.split(" ").length;
  }
  parseWords(t, e, i, s) {
    const n = e.cfiBase, r = [], o = t.ownerDocument, h = _(o, "body"), l = i;
    let c = s ? s.spinePos !== e.index : true, d;
    return s && e.index === s.spinePos && (d = s.findNode(s.range ? s.path.steps.concat(s.start.steps) : s.path.steps, t.ownerDocument)), rt(h, (f) => {
      if (!c)
        if (f === d)
          c = true;
        else
          return false;
      if ((f.textContent ?? "").length < 10 && (f.textContent ?? "").trim().length === 0)
        return false;
      const m = this.countWords(f.textContent ?? "");
      let p, v = 0;
      if (m === 0)
        return false;
      for (p = l - this._wordCounter, p > m && (this._wordCounter += m, v = m); v < m; )
        if (p = l - this._wordCounter, v + p >= m)
          this._wordCounter += m - v, v = m;
        else {
          v += p;
          const y = new b(f, n);
          r.push({ cfi: y.toString(), wordCount: this._wordCounter }), this._wordCounter = 0;
        }
      return false;
    }), r;
  }
  /**
   * Get a location from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  locationFromCfi(t) {
    if (b.prototype.isCfiString(t) && (t = new b(t)), this._locations.length === 0)
      return -1;
    const e = X(t, this._locations, this.epubcfi.compare);
    return e > this.total ? this.total : e;
  }
  /**
   * Check if a section is pre-paginated, honoring per-item overrides
   * @private
   * @param {Section} section
   * @return {boolean}
   */
  isPrePaginated(t) {
    return tt(t, this.layout) === "pre-paginated";
  }
  /**
   * Get a location index from a navigation href
   *
   * Resolves to the first location of the section the href points at, so
   * entries sharing a section (`chapter.xhtml#a` and `chapter.xhtml#b`)
   * return the same index. Before locations are generated, pre-paginated
   * sections still resolve, since each one is exactly one page.
   * @param {string} href
   * @return {number} location index, or -1 if it cannot be resolved
   */
  locationFromHref(t) {
    var n;
    const e = (n = this.spine) == null ? void 0 : n.get(t);
    if (!e || e.index === void 0)
      return -1;
    if (!this._locations || this._locations.length === 0)
      return this.isPrePaginated(e) ? e.index : -1;
    if (!e.cfiBase)
      return -1;
    const i = this.locationFromCfi(`epubcfi(${e.cfiBase}!/0)`), s = this._locations[i];
    return !s || this.epubcfi.parse(s).spinePos !== e.index ? -1 : i;
  }
  /**
   * Get a percentage position in locations from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  percentageFromCfi(t) {
    if (this._locations.length === 0)
      return null;
    const e = this.locationFromCfi(t);
    return this.percentageFromLocation(e);
  }
  /**
   * Get a percentage position from a location index
   * @param loc - location index
   * @return percentage
   */
  percentageFromLocation(t) {
    return !t || !this.total ? 0 : t / this.total;
  }
  /**
   * Get an EpubCFI from location index
   * @param {number} loc
   * @return {EpubCFI} cfi
   */
  cfiFromLocation(t) {
    let e = -1;
    return typeof t != "number" && (t = parseInt(t)), t >= 0 && t < this._locations.length && (e = this._locations[t]), e;
  }
  /**
   * Get an EpubCFI from location percentage
   * @param {number} percentage
   * @return {EpubCFI} cfi
   */
  cfiFromPercentage(t) {
    if (t > 1 && console.warn("Normalize cfiFromPercentage value to between 0 - 1"), t >= 1) {
      const i = new b(this._locations[this.total]);
      return i.collapse(), i.toString();
    }
    const e = Math.ceil(this.total * t);
    return this.cfiFromLocation(e);
  }
  /**
   * Load locations from JSON
   * @param {json} locations
   */
  load(t) {
    return typeof t == "string" ? this._locations = JSON.parse(t) : this._locations = t, this.total = this._locations.length - 1, this._locations;
  }
  /**
   * Save locations to JSON
   * @return {json}
   */
  save() {
    return JSON.stringify(this._locations);
  }
  getCurrent() {
    return this._current;
  }
  setCurrent(t) {
    let e;
    if (typeof t == "string")
      this._currentCfi = t;
    else if (typeof t == "number")
      this._current = t;
    else
      return;
    this._locations.length !== 0 && (typeof t == "string" ? (e = this.locationFromCfi(t), this._current = e) : e = t, this.emit(g.LOCATIONS.CHANGED, {
      percentage: this.percentageFromLocation(e)
    }));
  }
  /**
   * Get the current location
   */
  get currentLocation() {
    return this._current;
  }
  /**
   * Set the current location
   */
  set currentLocation(t) {
    this.setCurrent(t);
  }
  /**
   * Locations length
   */
  length() {
    return this._locations.length;
  }
  destroy() {
    var t;
    this.spine = void 0, this.request = void 0, this.pause = void 0, (t = this.q) == null || t.stop(), this.q = void 0, this.epubcfi = void 0, this._locations = void 0, this.total = void 0, this.break = void 0, this._current = void 0, this.layout = void 0, this.currentLocation = void 0, this._currentCfi = void 0, this.processingTimeout !== void 0 && (pt ? cancelIdleCallback(this.processingTimeout) : clearTimeout(this.processingTimeout), this.processingTimeout = void 0);
  }
};
D(le.prototype);
var Be = class {
  constructor(t) {
    this.packagePath = "", this.directory = "", this.encoding = "", t && this.parse(t);
  }
  /**
   * Parse the Container XML
   * @param  {document} containerDocument
   */
  parse(t) {
    if (!t)
      throw new Error("Container File Not Found");
    const e = _(t, "rootfile");
    if (!e)
      throw new Error("No RootFile Found");
    this.packagePath = e.getAttribute("full-path") ?? "", this.directory = M.dirname(this.packagePath), this.encoding = t.xmlEncoding;
  }
  destroy() {
    this.packagePath = void 0, this.directory = void 0, this.encoding = void 0;
  }
};
var Mt = "http://purl.org/dc/elements/1.1/";
var Wt = class {
  constructor(t) {
    this.manifest = {}, this.navPath = "", this.ncxPath = "", this.coverPath = "", this.spineNodeIndex = 0, this.spine = [], this.metadata = {}, t && this.parse(t);
  }
  /**
   * Parse OPF XML
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */
  parse(t) {
    if (!t)
      throw new Error("Package File Not Found");
    const e = _(t, "metadata");
    if (!e)
      throw new Error("No Metadata Found");
    const i = _(t, "manifest");
    if (!i)
      throw new Error("No Manifest Found");
    const s = _(t, "spine");
    if (!s)
      throw new Error("No Spine Found");
    return this.manifest = this.parseManifest(i), this.navPath = this.findNavPath(i), this.ncxPath = this.findNcxPath(i, s), this.coverPath = this.findCoverPath(t), this.spineNodeIndex = Kt(s), this.spine = this.parseSpine(s, this.manifest), this.uniqueIdentifier = this.findUniqueIdentifier(t), this.metadata = this.parseMetadata(e), this.metadata.direction = s.getAttribute("page-progression-direction") ?? "", {
      metadata: this.metadata,
      spine: this.spine,
      manifest: this.manifest,
      navPath: this.navPath,
      ncxPath: this.ncxPath,
      coverPath: this.coverPath,
      spineNodeIndex: this.spineNodeIndex
    };
  }
  /**
   * Parse Metadata
   * @private
   * @param  {node} xml
   * @return {object} metadata
   */
  parseMetadata(t) {
    const e = {};
    return e.title = this.getElementText(t, "title"), e.creator = this.getElementText(t, "creator"), e.description = this.getElementText(t, "description"), e.pubdate = this.getElementText(t, "date"), e.publisher = this.getElementText(t, "publisher"), e.identifier = this.getElementText(t, "identifier"), e.language = this.getElementText(t, "language"), e.rights = this.getElementText(t, "rights"), e.modified_date = this.getPropertyText(t, "dcterms:modified"), e.layout = this.getPropertyText(t, "rendition:layout"), e.orientation = this.getPropertyText(t, "rendition:orientation"), e.flow = this.getPropertyText(t, "rendition:flow"), e.viewport = this.getPropertyText(t, "rendition:viewport"), e.media_active_class = this.getPropertyText(t, "media:active-class"), e.spread = this.getPropertyText(t, "rendition:spread"), e;
  }
  /**
   * Parse Manifest
   * @private
   * @param  {node} manifestXml
   * @return {object} manifest
   */
  parseManifest(t) {
    const e = {}, i = W(t, "item");
    return Array.from(i).forEach(function(n) {
      const r = n.getAttribute("id") ?? "", o = n.getAttribute("href") || "", h = n.getAttribute("media-type") || "", l = n.getAttribute("media-overlay") || "", c = n.getAttribute("properties") || "", d = n.getAttribute("fallback") || "";
      e[r] = {
        href: o,
        // "url" : href,
        type: h,
        overlay: l,
        properties: c.length ? c.split(" ") : [],
        fallback: d
      };
    }), e;
  }
  /**
   * Parse Spine
   * @private
   * @param  {node} spineXml
   * @param  {Packaging.manifest} manifest
   * @return {object} spine
   */
  parseSpine(t, e) {
    const i = [], s = W(t, "itemref");
    return Array.from(s).forEach(function(r, o) {
      const h = r.getAttribute("idref"), l = r.getAttribute("properties") || "", c = l.length ? l.split(" ") : [], d = {
        id: r.getAttribute("id") ?? void 0,
        idref: h,
        linear: r.getAttribute("linear") || "yes",
        properties: c,
        // "href" : manifest[Id].href,
        // "url" :  manifest[Id].url,
        index: o
        // "cfiBase" : cfiBase
      };
      i.push(d);
    }), i;
  }
  /**
   * Find Unique Identifier
   * @private
   * @param  {node} packageXml
   * @return {string} Unique Identifier text
   */
  findUniqueIdentifier(t) {
    const e = t.documentElement.getAttribute("unique-identifier");
    if (!e)
      return "";
    const i = t.getElementById(e);
    if (!i)
      return "";
    const s = i.localName.indexOf(":"), n = s === -1 ? i.localName : i.localName.slice(s + 1), r = i.namespaceURI === Mt || s !== -1 && i.localName.slice(0, s) === "dc";
    return n === "identifier" && r ? (i.textContent ?? "").trim() : "";
  }
  /**
   * Find TOC NAV
   * @private
   * @param {element} manifestNode
   * @return {string}
   */
  findNavPath(t) {
    const e = F(t, "item", { properties: "nav" });
    return e && e.getAttribute("href") || "";
  }
  /**
   * Find TOC NCX
   * media-type="application/x-dtbncx+xml" href="toc.ncx"
   * @private
   * @param {element} manifestNode
   * @param {element} spineNode
   * @return {string}
   */
  findNcxPath(t, e) {
    let i = F(t, "item", { "media-type": "application/x-dtbncx+xml" }), s;
    return i || (s = e.getAttribute("toc"), s && (i = t.querySelector(`#${s}`) ?? void 0)), i && i.getAttribute("href") || "";
  }
  /**
   * Find the Cover Path
   * <item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />
   * Fallback for Epub 2.0
   * @private
   * @param  {node} packageXml
   * @return {string} href
   */
  findCoverPath(t) {
    const e = _(t, "package");
    e == null || e.getAttribute("version");
    const i = F(t, "item", { properties: "cover-image" });
    if (i) return i.getAttribute("href") ?? "";
    const s = F(t, "meta", { name: "cover" });
    if (s) {
      const n = s.getAttribute("content"), r = t.getElementById(n);
      return r ? r.getAttribute("href") ?? "" : "";
    } else
      return "";
  }
  /**
   * Get text of a namespaced element
   * @private
   * @param  {node} xml
   * @param  {string} tag
   * @return {string} text
   */
  getElementText(t, e) {
    let i = t.getElementsByTagNameNS(Mt, e);
    return (!i || i.length === 0) && (i = t.getElementsByTagName(`dc:${e}`)), !i || i.length === 0 ? "" : i[0].textContent ?? "";
  }
  /**
   * Get text by property
   * @private
   * @param  {node} xml
   * @param  {string} property
   * @return {string} text
   */
  getPropertyText(t, e) {
    const i = F(t, "meta", { property: e });
    return (i == null ? void 0 : i.textContent) ?? "";
  }
  /**
   * Load JSON Manifest
   * @param json - JSON manifest data
   * @return parsed package parts
   */
  load(t) {
    this.metadata = t.metadata;
    const e = t.readingOrder || t.spine;
    return this.spine = e.map((i, s) => (i.index = s, i.linear = i.linear || "yes", i)), t.resources.forEach((i, s) => {
      this.manifest[s] = i, i.rel && i.rel[0] === "cover" && (this.coverPath = i.href);
    }), this.spineNodeIndex = 0, this.toc = t.toc.map((i) => (i.label = i.title || i.label, i)), {
      metadata: this.metadata,
      spine: this.spine,
      manifest: this.manifest,
      navPath: this.navPath,
      ncxPath: this.ncxPath,
      coverPath: this.coverPath,
      spineNodeIndex: this.spineNodeIndex,
      toc: this.toc
    };
  }
  destroy() {
    this.manifest = void 0, this.navPath = void 0, this.ncxPath = void 0, this.coverPath = void 0, this.spineNodeIndex = void 0, this.spine = void 0, this.metadata = void 0;
  }
};
var gt = class {
  constructor(t) {
    this.toc = [], this.tocByHref = {}, this.tocById = {}, this.landmarks = [], this.landmarksByType = {}, this.length = 0, t && this.parse(t);
  }
  /**
   * Parse out the navigation items
   * @param {document} xml navigation html / xhtml / ncx
   */
  parse(t) {
    const e = t.nodeType;
    let i, s;
    e && (i = _(t, "html"), s = _(t, "ncx")), e ? i ? (this.toc = this.parseNav(t), this.landmarks = this.parseLandmarks(t)) : s && (this.toc = this.parseNcx(t)) : this.toc = this.load(t), this.length = 0, this.unpack(this.toc);
  }
  /**
   * Unpack navigation items
   * @private
   * @param  {array} toc
   */
  unpack(t) {
    let e;
    for (let i = 0; i < t.length; i++)
      e = t[i], e.href && (this.tocByHref[e.href] = i), e.id && (this.tocById[e.id] = i), this.length++, e.subitems && e.subitems.length && this.unpack(e.subitems);
  }
  /**
   * Get an item from the navigation
   * @param  {string} target
   * @return {object} navItem
   */
  get(t) {
    let e;
    return t ? (t.startsWith("#") ? (t = t.substring(1), e = this.tocById[t]) : t in this.tocByHref && (e = this.tocByHref[t]), this.getByIndex(t, e, this.toc)) : this.toc;
  }
  /**
   * Get an item from navigation subitems recursively by index
   * @param  {string} target
   * @param  {number} index
   * @param  {array} navItems
   * @return {object} navItem
   */
  getByIndex(t, e, i) {
    if (i.length === 0)
      return;
    const s = e !== void 0 ? i[e] : void 0;
    if (s && (t === s.id || t === s.href))
      return s;
    {
      let n;
      for (let r = 0; r < i.length && (n = this.getByIndex(t, e, i[r].subitems ?? []), !n); ++r)
        ;
      return n;
    }
  }
  /**
   * Get a landmark by type
   * List of types: https://idpf.github.io/epub-vocabs/structure/
   * @param  {string} type
   * @return {object} landmarkItem
   */
  landmark(t) {
    if (!t)
      return this.landmarks;
    const e = this.landmarksByType[t];
    return e !== void 0 ? this.landmarks[e] : void 0;
  }
  /**
   * Parse toc from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNav(t) {
    const e = ot(t, "nav", "toc");
    let i = [];
    if (!e) return i;
    const s = H(e, "ol", true);
    return s && (i = this.parseNavList(s)), i;
  }
  /**
   * Parses lists in the toc
   * @param  {document} navListHtml
   * @param  {string} parent id
   * @return {array} navigation list
   */
  parseNavList(t, e) {
    const i = [];
    if (!t || !t.children) return i;
    for (let s = 0; s < t.children.length; s++) {
      const n = this.navItem(t.children[s], e);
      n && i.push(n);
    }
    return i;
  }
  /**
   * Create a navItem
   * @private
   * @param  {element} item
   * @return {object} navItem
   */
  navItem(t, e) {
    let i = t.getAttribute("id") || void 0;
    const s = H(t, "a", true) || H(t, "span", true);
    if (!s)
      return;
    const n = s.getAttribute("href") || "";
    i || (i = n);
    const r = s.textContent || "";
    let o = [];
    const h = H(t, "ol", true);
    return h && (o = this.parseNavList(h, i)), {
      id: i,
      href: n,
      label: r,
      subitems: o,
      parent: e
    };
  }
  /**
   * Parse landmarks from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} landmarks list
   */
  parseLandmarks(t) {
    const e = ot(t, "nav", "landmarks"), i = e ? Array.from(W(e, "li")) : [], s = i.length;
    let n;
    const r = [];
    let o;
    if (!i || s === 0) return r;
    for (n = 0; n < s; ++n)
      o = this.landmarkItem(i[n]), o && (r.push(o), this.landmarksByType[o.type] = n);
    return r;
  }
  /**
   * Create a landmarkItem
   * @private
   * @param  {element} item
   * @return {object} landmarkItem
   */
  landmarkItem(t) {
    const e = H(t, "a", true);
    if (!e)
      return;
    const i = e.getAttributeNS("http://www.idpf.org/2007/ops", "type") || void 0, s = e.getAttribute("href") || "", n = e.textContent || "";
    return {
      href: s,
      label: n,
      type: i
    };
  }
  /**
   * Parse from a Epub > 3.0 NC
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNcx(t) {
    const e = W(t, "navPoint"), i = e.length;
    let s;
    const n = {}, r = [];
    let o, h;
    if (!e || i === 0) return r;
    for (s = 0; s < i; ++s)
      o = this.ncxItem(e[s]), n[o.id] = o, o.parent ? (h = n[o.parent], h ? h.subitems.push(o) : r.push(o)) : r.push(o);
    return r;
  }
  /**
   * Create a ncxItem
   * @private
   * @param  {element} item
   * @return {object} ncxItem
   */
  ncxItem(t) {
    const e = t.getAttribute("id") || "", i = _(t, "content"), s = i ? i.getAttribute("src") ?? "" : "", n = _(t, "navLabel"), r = n != null && n.textContent ? n.textContent : "", o = [], h = t.parentNode;
    let l;
    return h && (h.nodeName === "navPoint" || h.nodeName.split(":").slice(-1)[0] === "navPoint") && (l = h.getAttribute("id") ?? void 0), {
      id: e,
      href: s,
      label: r,
      subitems: o,
      parent: l
    };
  }
  /**
   * Load Spine Items
   * @param  {object} json the items to be loaded
   * @return {Array} navItems
   */
  load(t) {
    return t.map((e) => {
      const i = e;
      return i.label = i.title, i.subitems = i.children ? this.load(i.children) : [], e;
    });
  }
  /**
   * forEach pass through
   * @param  {Function} fn function to run on each item
   * @return {method} forEach loop
   */
  forEach(t) {
    return this.toc.forEach(t);
  }
};
var mt = {
  application: {
    ecmascript: ["es", "ecma"],
    javascript: "js",
    ogg: "ogx",
    pdf: "pdf",
    postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
    "rdf+xml": "rdf",
    smil: ["smi", "smil"],
    "xhtml+xml": ["xhtml", "xht"],
    xml: ["xml", "xsl", "xsd", "opf", "ncx"],
    zip: "zip",
    "x-httpd-eruby": "rhtml",
    "x-latex": "latex",
    "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
    "x-object": "o",
    "x-shockwave-flash": ["swf", "swfl"],
    "x-silverlight": "scr",
    "epub+zip": "epub",
    "font-tdpfr": "pfr",
    "inkml+xml": ["ink", "inkml"],
    json: "json",
    "jsonml+json": "jsonml",
    "mathml+xml": "mathml",
    "metalink+xml": "metalink",
    mp4: "mp4s",
    // "oebps-package+xml" : "opf",
    "omdoc+xml": "omdoc",
    oxps: "oxps",
    "vnd.amazon.ebook": "azw",
    widget: "wgt",
    // "x-dtbncx+xml" : "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-otf": "otf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": ["ttf", "ttc"],
    "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "x-font-woff": "woff",
    "x-mobipocket-ebook": ["prc", "mobi"],
    "x-mspublisher": "pub",
    "x-nzb": "nzb",
    "x-tgif": "obj",
    "xaml+xml": "xaml",
    "xml-dtd": "dtd",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "internet-property-stream": "acx",
    "x-compress": "z",
    "x-compressed": "tgz",
    "x-gzip": "gz"
  },
  audio: {
    flac: "flac",
    midi: ["mid", "midi", "kar", "rmi"],
    mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
    mpegurl: "m3u",
    ogg: ["oga", "ogg", "spx"],
    "x-aiff": ["aif", "aiff", "aifc"],
    "x-ms-wma": "wma",
    "x-wav": "wav",
    adpcm: "adp",
    mp4: "mp4a",
    webm: "weba",
    "x-aac": "aac",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    mid: ["mid", "rmi"]
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: ["jpeg", "jpg", "jpe"],
    pcx: "pcx",
    png: "png",
    "svg+xml": ["svg", "svgz"],
    tiff: ["tiff", "tif"],
    "x-icon": "ico",
    bmp: "bmp",
    webp: "webp",
    "x-pict": ["pic", "pct"],
    "x-tga": "tga",
    "cis-cod": "cod"
  },
  text: {
    "cache-manifest": ["manifest", "appcache"],
    css: "css",
    csv: "csv",
    html: ["html", "htm", "shtml", "stm"],
    mathml: "mml",
    plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
    richtext: "rtx",
    "tab-separated-values": "tsv",
    "x-bibtex": "bib"
  },
  video: {
    mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
    mp4: ["mp4", "mp4v", "mpg4"],
    quicktime: ["qt", "mov"],
    ogg: "ogv",
    "vnd.mpegurl": ["mxu", "m4u"],
    "x-flv": "flv",
    "x-la-asf": ["lsf", "lsx"],
    "x-mng": "mng",
    "x-ms-asf": ["asf", "asx", "asr"],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: ["jpm", "jpgm"],
    mj2: ["mj2", "mjp2"],
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": ["uvu", "uvvu"],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv"
  }
};
var Me = (function() {
  let a, t, e, i;
  const s = {};
  for (a in mt)
    if (Object.prototype.hasOwnProperty.call(mt, a)) {
      const n = mt[a];
      for (t in n)
        if (Object.prototype.hasOwnProperty.call(n, t))
          if (e = n[t], typeof e == "string")
            s[e] = a + "/" + t;
          else
            for (i = 0; i < e.length; i++)
              s[e[i]] = a + "/" + t;
    }
  return s;
})();
var We = "text/plain";
function qe(a) {
  return a && Me[a.split(".").pop().toLowerCase()] || We;
}
var Z = { lookup: qe };
var Ue = class {
  constructor(t, e) {
    this.settings = {
      replacements: e && e.replacements || "base64",
      archive: e && e.archive,
      resolver: e && e.resolver,
      request: e && e.request
    }, this.process(t);
  }
  /**
   * Process resources
   * @param {Manifest} manifest
   */
  process(t) {
    this.manifest = t, this.resources = Object.keys(t).map(function(e) {
      return t[e];
    }), this.replacementUrls = [], this.ownedUrls = [], this.html = [], this.assets = [], this.css = [], this.urls = [], this.cssUrls = [], this.split(), this.splitUrls();
  }
  /**
   * Split resources by type
   * @private
   */
  split() {
    this.html = this.resources.filter(function(t) {
      return t.type === "application/xhtml+xml" || t.type === "text/html";
    }), this.assets = this.resources.filter(function(t) {
      return t.type !== "application/xhtml+xml" && t.type !== "text/html";
    }), this.css = this.resources.filter(function(t) {
      return t.type === "text/css";
    });
  }
  /**
   * Convert split resources into Urls
   * @private
   */
  splitUrls() {
    this.urls = this.assets.map((t) => t.href), this.cssUrls = this.css.map(function(t) {
      return t.href;
    });
  }
  /**
   * Create a url to a resource
   * @param {string} url
   * @return {Promise<string>} Promise resolves with url string
   */
  createUrl(t) {
    const e = new P(t), i = Z.lookup(e.filename);
    return this.settings.archive ? this.settings.archive.createUrl(t, { base64: this.settings.replacements === "base64" }) : this.settings.replacements === "base64" ? this.settings.request(t, "blob").then((s) => It(s)).then((s) => Et(s, i)) : this.settings.request(t, "blob").then((s) => nt(s, i));
  }
  /**
   * Create blob urls for all the assets
   * @return {Promise}         returns replacement urls
   */
  replacements() {
    if (this.settings.replacements === "none")
      return new Promise((e) => {
        e(this.urls);
      });
    const t = this.urls.map((e) => {
      const i = this.settings.resolver(e);
      return this.createUrl(i).catch((s) => (s && s.name !== "AbortError" && console.error(s), null));
    });
    return Promise.all(t).then((e) => this.settings ? (this.replacementUrls = e, e) : (e.forEach((i) => i && q(i)), e));
  }
  /**
   * Replace URLs in CSS resources
   * @private
   * @param  {Archive} [archive]
   * @param  {method} [resolver]
   * @return {Promise}
   */
  replaceCss(t, e) {
    if (!this.settings || this.settings.replacements === "none")
      return Promise.resolve([]);
    const i = [];
    return this.cssUrls.forEach((s) => {
      const n = this.createCssFile(s).then((r) => {
        if (!this.settings) {
          r && q(r);
          return;
        }
        const o = this.urls.indexOf(s);
        if (r && o > -1) {
          const h = this.replacementUrls[o];
          h && h.startsWith("blob:") && this.ownedUrls.push(h), this.replacementUrls[o] = r;
        }
      });
      i.push(n);
    }), Promise.all(i);
  }
  /**
   * Create a new CSS file with the replaced URLs
   * @private
   * @param  {string} href the original css file
   * @return {Promise}  returns a BlobUrl to the new CSS file or a data url
   */
  createCssFile(t) {
    let e;
    if (M.isAbsolute(t))
      return new Promise(function(r) {
        r();
      });
    const i = this.settings.resolver(t);
    let s;
    this.settings.archive ? s = this.settings.archive.getText(i) : s = this.settings.request(i, "text");
    const n = this.urls.map((r) => {
      const o = this.settings.resolver(r);
      return new z(i).relative(o);
    });
    return s ? s.then((r) => {
      if (!this.settings)
        return;
      const o = Bt(r, n, this.replacementUrls);
      return this.settings.replacements === "base64" ? e = Et(o, "text/css") : e = nt(o, "text/css"), e;
    }, (r) => new Promise(function(o) {
      o();
    })) : new Promise(function(r) {
      r();
    });
  }
  /**
   * Resolve all resources URLs relative to an absolute URL
   * @param  {string} absolute to be resolved to
   * @param  {resolver} [resolver]
   * @return {string[]} array with relative Urls
   */
  relativeTo(t, e) {
    return e = e || this.settings.resolver, this.urls.map((i) => {
      const s = e(i);
      return new z(t).relative(s);
    });
  }
  /**
   * Get a URL for a resource
   * @param  {string} path
   * @return {string} url
   */
  get(t) {
    const e = this.urls.indexOf(t);
    if (e === -1)
      return;
    const i = this.replacementUrls[e];
    return i ? new Promise((s, n) => {
      s(i);
    }) : this.createUrl(t).then((s) => (s.startsWith("blob:") && this.ownedUrls.push(s), s));
  }
  /**
   * Substitute urls in content, with replacements,
   * relative to a url if provided
   * @param  {string} content
   * @param  {string} [url]   url to resolve to
   * @return {string}         content with urls substituted
   */
  substitute(t, e) {
    let i;
    return e ? i = this.relativeTo(e) : i = this.urls, Bt(t, i, this.replacementUrls);
  }
  destroy() {
    this.replacementUrls && this.replacementUrls.forEach((t) => {
      t && q(t);
    }), this.ownedUrls && this.ownedUrls.forEach((t) => q(t)), this.settings = void 0, this.manifest = void 0, this.resources = void 0, this.replacementUrls = void 0, this.ownedUrls = void 0, this.html = void 0, this.assets = void 0, this.css = void 0, this.urls = void 0, this.cssUrls = void 0;
  }
};
var vt = class {
  constructor(t) {
    this.pages = [], this.locations = [], this.epubcfi = new b(), this.firstPage = 0, this.lastPage = 0, this.totalPages = 0, this.toc = void 0, this.ncx = void 0, t && (this.pageList = this.parse(t)), this.pageList && this.pageList.length && this.process(this.pageList);
  }
  /**
   * Parse PageList Xml
   * @param  {document} xml
   */
  parse(t) {
    const e = _(t, "html"), i = _(t, "ncx");
    return e ? this.parseNav(t) : i ? this.parseNcx(t) : [];
  }
  /**
   * Parse a Nav PageList
   * @private
   * @param  {node} navHtml
   * @return {PageList.item[]} list
   */
  parseNav(t) {
    const e = ot(t, "nav", "page-list"), i = e ? Array.from(W(e, "li")) : [], s = i.length;
    let n;
    const r = [];
    let o;
    if (!i || s === 0) return r;
    for (n = 0; n < s; ++n)
      o = this.item(i[n]), r.push(o);
    return r;
  }
  parseNcx(t) {
    const e = [];
    let i = 0, s, n = 0;
    const r = _(t, "pageList");
    if (!r) return e;
    const o = W(r, "pageTarget");
    if (n = o.length, !o || o.length === 0)
      return e;
    for (i = 0; i < n; ++i)
      s = this.ncxItem(o[i]), e.push(s);
    return e;
  }
  ncxItem(t) {
    const e = _(t, "navLabel"), s = _(e, "text").textContent ?? "", r = _(t, "content").getAttribute("src") ?? "", o = parseInt(s, 10);
    return {
      href: r,
      page: o
    };
  }
  /**
   * Page List Item
   * @private
   * @param  {node} item
   * @return {object} pageListItem
   */
  item(t) {
    const e = _(t, "a"), i = e.getAttribute("href") || "", s = e.textContent || "", n = parseInt(s), r = i.includes("epubcfi");
    let o, h, l;
    return r ? (o = i.split("#"), h = o[0], l = o.length > 1 ? o[1] : void 0, {
      cfi: l,
      href: i,
      packageUrl: h,
      page: n
    }) : {
      href: i,
      page: n
    };
  }
  /**
   * Process pageList items
   * @private
   * @param  {array} pageList
   */
  process(t) {
    t.forEach((e) => {
      this.pages.push(e.page), e.cfi && this.locations.push(e.cfi);
    }), this.firstPage = this.pages[0], this.lastPage = this.pages[this.pages.length - 1], this.totalPages = this.lastPage - this.firstPage;
  }
  /**
   * Get a PageList result from a EpubCFI
   * @param  {string} cfi EpubCFI String
   * @return {number} page
   */
  pageFromCfi(t) {
    let e = -1;
    if (this.locations.length === 0)
      return -1;
    let i = st(t, this.locations, this.epubcfi.compare);
    return i !== -1 ? e = this.pages[i] : (i = X(t, this.locations, this.epubcfi.compare), e = i - 1 >= 0 ? this.pages[i - 1] : this.pages[0], e !== void 0 || (e = -1)), e;
  }
  /**
   * Get an EpubCFI from a Page List Item
   * @param  {string | number} pg
   * @return {string} cfi
   */
  cfiFromPage(t) {
    let e = -1;
    typeof t != "number" && (t = parseInt(t));
    const i = this.pages.indexOf(t);
    return i !== -1 && i < this.locations.length && (e = this.locations[i]), e;
  }
  /**
   * Get a Page from Book percentage
   * @param  {number} percent
   * @return {number} page
   */
  pageFromPercentage(t) {
    return Math.round(this.totalPages * t);
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a page
   * @param  {number} pg the page
   * @return {number} percentage
   */
  percentageFromPage(t) {
    const e = (t - this.firstPage) / this.totalPages;
    return Math.round(e * 1e3) / 1e3;
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a cfi
   * @param  {string} cfi EpubCFI String
   * @return {number} percentage
   */
  percentageFromCfi(t) {
    const e = this.pageFromCfi(t);
    return this.percentageFromPage(e);
  }
  /**
   * Destroy
   */
  destroy() {
    this.pages = void 0, this.locations = void 0, this.epubcfi = void 0, this.pageList = void 0, this.toc = void 0, this.ncx = void 0;
  }
};
var je = class {
  constructor(t) {
    this.rendition = t, this._themes = {
      default: {
        rules: {},
        url: "",
        serialized: ""
      }
    }, this._overrides = {}, this._current = "default", this._injected = [], this.rendition.hooks.content.register((e) => this.inject(e)), this.rendition.hooks.content.register((e) => this.overrides(e));
  }
  /**
   * Add themes to be used by a rendition
   * @example themes.register("light", "http://example.com/light.css")
   * @example themes.register("light", { "body": { "color": "purple"}})
   * @example themes.register({ "light" : {...}, "dark" : {...}})
   */
  register(...t) {
    if (t.length !== 0) {
      if (t.length === 1 && typeof t[0] == "object")
        return this.registerThemes(t[0]);
      if (t.length === 1 && typeof t[0] == "string")
        return this.default(t[0]);
      if (t.length === 2 && typeof t[1] == "string")
        return this.registerUrl(t[0], t[1]);
      if (t.length === 2 && typeof t[1] == "object")
        return this.registerRules(t[0], t[1]);
    }
  }
  /**
   * Add a default theme to be used by a rendition
   * @param {object | string} theme
   * @example themes.register("http://example.com/default.css")
   * @example themes.register({ "body": { "color": "purple"}})
   */
  default(t) {
    if (t) {
      if (typeof t == "string")
        return this.registerUrl("default", t);
      if (typeof t == "object")
        return this.registerRules("default", t);
    }
  }
  /**
   * Register themes object
   * @param {object} themes
   */
  registerThemes(t) {
    for (const e in t)
      if (Object.prototype.hasOwnProperty.call(t, e)) {
        const i = t[e];
        typeof i == "string" ? this.registerUrl(e, i) : this.registerRules(e, i);
      }
  }
  /**
   * Register a theme by passing its css as string
   * @param {string} name 
   * @param {string} css 
   */
  registerCss(t, e) {
    this._themes[t] = { serialized: e }, (t === "default" || t === this._current || this._injected.includes(t)) && this.update(t);
  }
  /**
   * Register a url
   * @param {string} name
   * @param {string} input
   */
  registerUrl(t, e) {
    const i = new P(e);
    this._themes[t] = { url: i.toString() }, (t === "default" || t === this._current || this._injected.includes(t)) && this.update(t);
  }
  /**
   * Register rule
   * @param {string} name
   * @param {object} rules
   */
  registerRules(t, e) {
    this._themes[t] = { rules: e }, (t === "default" || t === this._current || this._injected.includes(t)) && this.update(t);
  }
  /**
   * Select a theme
   * @param {string} name
   */
  select(t) {
    const e = this._current;
    this._current = t, this.update(t), this.rendition.getContents().forEach((s) => {
      s.removeClass(e), s.addClass(t);
    });
  }
  /**
   * Update a theme
   * @param {string} name
   */
  update(t) {
    this.rendition.getContents().forEach((i) => {
      this.add(t, i);
    });
  }
  /**
   * Inject all themes into contents
   * @param {Contents} contents
   */
  inject(t) {
    const e = [], i = this._themes;
    let s;
    for (const n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (n === this._current || n === "default") && (s = i[n], (s.rules && Object.keys(s.rules).length > 0 || s.url && !e.includes(s.url) || s.serialized) && this.add(n, t), this._injected.includes(n) || this._injected.push(n));
    this._current !== "default" && t.addClass(this._current);
  }
  /**
   * Add Theme to contents
   * @param {string} name
   * @param {Contents} contents
   */
  add(t, e) {
    const i = this._themes[t];
    !i || !e || (i.url ? e.addStylesheet(i.url, t) : i.serialized ? (e.addStylesheetCss(i.serialized, t), i.injected = true) : i.rules && (e.addStylesheetRules(i.rules, t), i.injected = true));
  }
  /**
   * Add override
   * @param {string} name
   * @param {string} value
   * @param {boolean} priority
   */
  override(t, e, i) {
    const s = this.rendition.getContents();
    this._overrides[t] = {
      value: e,
      priority: i === true
    }, s.forEach((n) => {
      n.css(t, this._overrides[t].value, this._overrides[t].priority);
    });
  }
  removeOverride(t) {
    const e = this.rendition.getContents();
    delete this._overrides[t], e.forEach((i) => {
      i.css(t);
    });
  }
  /**
   * Add all overrides
   * @param contents - contents to apply overrides to
   */
  overrides(t) {
    const e = this._overrides;
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && t.css(i, e[i].value, e[i].priority);
  }
  /**
   * Adjust the font size of a rendition
   * @param {number} size
   */
  fontSize(t) {
    this.override("font-size", t);
  }
  /**
   * Adjust the font-family of a rendition
   * @param {string} f
   */
  font(t) {
    this.override("font-family", t, true);
  }
  destroy() {
    this.rendition = void 0, this._themes = void 0, this._overrides = void 0, this._current = void 0, this._injected = void 0;
  }
};
var Fe = class {
  constructor(t) {
    this.rendition = t, this.highlights = [], this.underlines = [], this.marks = [], this._annotations = {}, this._annotationsBySectionIndex = {}, this.rendition.hooks.render.register((e) => this.inject(e)), this.rendition.hooks.unloaded.register((e) => this.clear(e));
  }
  /**
   * Add an annotation to store
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} [cb] Callback after annotation is added
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   * @returns {Annotation} annotation
   */
  add(t, e, i, s, n, r) {
    const o = encodeURI(e + t), l = new b(e).spinePos, c = new ce({
      type: t,
      cfiRange: e,
      data: i,
      sectionIndex: l,
      cb: s,
      className: n,
      styles: r
    });
    return this._annotations[o] = c, l in this._annotationsBySectionIndex ? this._annotationsBySectionIndex[l].push(o) : this._annotationsBySectionIndex[l] = [o], this.rendition.views().forEach((u) => {
      c.sectionIndex === u.index && c.attach(u);
    }), c;
  }
  /**
   * Remove an annotation from store
   * @param {EpubCFI} cfiRange EpubCFI range the annotation is attached to
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   */
  remove(t, e) {
    const i = encodeURI(t + e);
    if (i in this._annotations) {
      const s = this._annotations[i];
      if (e && s.type !== e)
        return;
      this.rendition.views().forEach((r) => {
        this._removeFromAnnotationBySectionIndex(s.sectionIndex, i), s.sectionIndex === r.index && s.detach(r);
      }), delete this._annotations[i];
    }
  }
  /**
   * Remove an annotations by Section Index
   * @private
   */
  _removeFromAnnotationBySectionIndex(t, e) {
    this._annotationsBySectionIndex[t] = this._annotationsAt(t).filter((i) => i !== e);
  }
  /**
   * Get annotations by Section Index
   * @private
   */
  _annotationsAt(t) {
    return this._annotationsBySectionIndex[t] ?? [];
  }
  /**
   * Add a highlight to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  highlight(t, e, i, s, n) {
    return this.add("highlight", t, e, i, s, n);
  }
  /**
   * Add a underline to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  underline(t, e, i, s, n) {
    return this.add("underline", t, e, i, s, n);
  }
  /**
   * Add a mark to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   */
  mark(t, e, i) {
    return this.add("mark", t, e, i);
  }
  /**
   * iterate over annotations in the store
   */
  each(t) {
    Object.keys(this._annotations).forEach((e) => {
      t(this._annotations[e], e);
    });
  }
  /**
   * Hook for injecting annotation into a view
   * @param {View} view
   * @private
   */
  inject(t) {
    const e = t.index;
    e in this._annotationsBySectionIndex && this._annotationsBySectionIndex[e].forEach((s) => {
      const n = this._annotations[s];
      n && n.attach(t);
    });
  }
  /**
   * Hook for removing annotation from a view
   * @param {View} view
   * @private
   */
  clear(t) {
    const e = t.index;
    e in this._annotationsBySectionIndex && this._annotationsBySectionIndex[e].forEach((s) => {
      const n = this._annotations[s];
      n && n.detach(t);
    });
  }
  /**
   * [Not Implemented] Show annotations
   */
  show() {
  }
  /**
   * [Not Implemented] Hide annotations
   */
  hide() {
  }
};
var ce = class {
  constructor({
    type: t,
    cfiRange: e,
    data: i,
    sectionIndex: s,
    cb: n,
    className: r,
    styles: o
  }) {
    this.type = t, this.cfiRange = e, this.data = i ?? {}, this.sectionIndex = s ?? 0, this.mark = void 0, this.cb = n, this.className = r ?? "", this.styles = o ?? {};
  }
  /**
   * Update stored data
   * @param {object} data
   */
  update(t) {
    this.data = t;
  }
  /**
   * Add to a view
   * @param {View} view
   */
  attach(t) {
    const { cfiRange: e, data: i, type: s, mark: n, cb: r, className: o, styles: h } = this;
    let l;
    return s === "highlight" ? l = t.highlight(e, i, r, o, h) : s === "underline" ? l = t.underline(e, i, r, o, h) : s === "mark" && (l = t.mark(e, i, r)), this.mark = l, this.emit(g.ANNOTATION.ATTACH, l), l;
  }
  /**
   * Remove from a view
   * @param {View} view
   */
  detach(t) {
    const { cfiRange: e, type: i } = this;
    t && (i === "highlight" ? t.unhighlight(e) : i === "underline" ? t.ununderline(e) : i === "mark" && t.unmark(e)), this.mark = void 0, this.emit(g.ANNOTATION.DETACH);
  }
  /**
   * [Not Implemented] Get text of an annotation
   */
  text() {
  }
};
D(ce.prototype);
var Tt = /[\u2E80-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F\u{20000}-\u{2FA1F}]/u;
function qt(a) {
  const t = a.letterSpacing;
  if (t && t !== "normal" && t !== "0px") return true;
  const e = a.wordSpacing;
  if (e && e !== "normal" && e !== "0px") return true;
  const i = a.textIndent;
  return !!(i && i !== "0px");
}
var He = 32;
var Ve = class {
  constructor() {
    this._canvas = null, this._ctx = null, this._widthCache = /* @__PURE__ */ new Map(), this._preparedCache = /* @__PURE__ */ new WeakMap(), this._nodeIndex = /* @__PURE__ */ new WeakMap(), this._segmenter = null;
  }
  getCanvas() {
    return this._ctx ? this._ctx : typeof OffscreenCanvas < "u" && (this._canvas = new OffscreenCanvas(1, 1), this._ctx = this._canvas.getContext("2d"), this._ctx) ? this._ctx : (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._ctx);
  }
  getSegmenter() {
    return this._segmenter ? this._segmenter : typeof Intl < "u" && "Segmenter" in Intl ? (this._segmenter = new Intl.Segmenter(void 0, { granularity: "word" }), this._segmenter) : null;
  }
  /**
   * Measure a text string with a given CSS font, returning its width in pixels.
   * Results are cached per font+text pair.
   */
  measureText(t, e) {
    let i = this._widthCache.get(e);
    if (i) {
      const r = i.get(t);
      if (r !== void 0) return r;
    } else {
      if (this._widthCache.size >= He) {
        const r = this._widthCache.keys().next().value;
        r !== void 0 && this._widthCache.delete(r);
      }
      i = /* @__PURE__ */ new Map(), this._widthCache.set(e, i);
    }
    const s = this.getCanvas();
    if (!s) return 0;
    s.font = e;
    const n = s.measureText(t).width;
    return i.set(t, n), n;
  }
  /**
   * Segment text into word-level pieces suitable for measurement.
   * Uses Intl.Segmenter when available, falls back to space-splitting
   * (with per-character splitting for CJK).
   */
  segmentText(t) {
    const e = this.getSegmenter();
    if (e) {
      const o = [];
      for (const h of e.segment(t))
        o.push({ text: h.segment, index: h.index });
      return o;
    }
    const i = [];
    let s = "", n = 0, r = 0;
    for (const o of t)
      o === " " ? (s && i.push({ text: s, index: n }), i.push({ text: " ", index: r }), s = "", n = r + o.length) : Tt.test(o) ? (s && (i.push({ text: s, index: n }), s = ""), i.push({ text: o, index: r }), n = r + o.length) : (s || (n = r), s += o), r += o.length;
    return s && i.push({ text: s, index: n }), i;
  }
  /**
   * Prepare phase: measure all text nodes under a root element.
   * Returns PreparedNode[] with cumulative widths for binary search.
   *
   * Text nodes whose parent has exotic CSS (letter-spacing, word-spacing,
   * text-indent) are skipped — the caller should fall back to DOM Range
   * measurement for those.
   *
   * @param root The container element (usually document.body)
   * @param win The window object for getComputedStyle
   * @returns PreparedNode[] with entries for measurable text nodes (may be empty)
   */
  prepare(t, e) {
    const i = this._preparedCache.get(t);
    if (i) return i;
    const s = [], n = /* @__PURE__ */ new Map(), r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
      acceptNode(l) {
        return l.data.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let o;
    for (; o = r.nextNode(); ) {
      const l = o.parentElement;
      if (!l) continue;
      let c = n.get(l);
      if (c || (c = e.getComputedStyle(l), n.set(l, c)), qt(c)) continue;
      const d = c.font;
      if (!d) continue;
      const u = o.data, f = this.segmentText(u), m = [];
      let p = 0;
      for (const y of f) {
        const E = this.measureText(y.text, d);
        m.push({
          node: o,
          charOffset: y.index,
          text: y.text,
          width: E,
          cumWidth: p + E
        }), p += E;
      }
      const v = {
        node: o,
        segments: m,
        totalWidth: p,
        font: d,
        cumDocWidth: 0
      };
      s.push(v), this._nodeIndex.set(o, v);
    }
    let h = 0;
    for (let l = 0; l < s.length; l++)
      h += s[l].totalWidth, s[l].cumDocWidth = h;
    return this._preparedCache.set(t, s), s;
  }
  /**
   * Clamped lower-bound binary search: returns the first index where
   * getValue(arr[index]) >= target, or the last index when target exceeds
   * all values (callers expect a valid in-range index even for overshoot).
   * Returns 0 for empty arrays.
   */
  _lowerBound(t, e, i) {
    if (t.length === 0) return 0;
    let s = 0, n = t.length - 1;
    for (; s < n; ) {
      const r = s + n >>> 1;
      i(t[r]) < e ? s = r + 1 : n = r;
    }
    return s;
  }
  /**
   * Find the segment index at a given pixel position using binary search
   * on cumulative widths within a text node.
   */
  findSegmentIndex(t, e) {
    return this._lowerBound(t, e, (i) => i.cumWidth);
  }
  /**
   * Find the first PreparedNode index whose cumDocWidth is >= targetWidth.
   */
  findNodeIndex(t, e) {
    return this._lowerBound(t, e, (i) => i.cumDocWidth);
  }
  /**
   * Look up a previously prepared text node in O(1).
   * Returns null if the node was not prepared (exotic CSS, not yet prepared, etc.).
   */
  getPreparedNode(t) {
    return this._nodeIndex.get(t) || null;
  }
  /**
   * Check if a text node's parent has exotic CSS that prevents canvas measurement.
   */
  hasExoticCSS(t, e) {
    const i = t.parentElement;
    return i ? qt(e.getComputedStyle(i)) : true;
  }
  /**
   * Invalidate cached preparation for a root element,
   * including all per-node index entries under it.
   */
  invalidate(t) {
    const e = this._preparedCache.get(t);
    if (e) {
      for (const i of e)
        this._nodeIndex.delete(i.node);
      this._preparedCache.delete(t);
    }
  }
  /**
   * Destroy the measurer, releasing the canvas and all caches.
   */
  destroy() {
    this._widthCache.clear(), this._preparedCache = /* @__PURE__ */ new WeakMap(), this._nodeIndex = /* @__PURE__ */ new WeakMap(), this._ctx = null, this._canvas = null, this._segmenter = null;
  }
};
var Rt = class {
  constructor(t, e, i, s = false, n) {
    this.layout = t, this.horizontal = i === "horizontal", this.direction = e || "ltr", this._dev = s, this._measurer = n || null;
  }
  /**
   * Find CFI pairs for entire section at once
   */
  section(t) {
    const e = this.findRanges(t);
    return this.rangeListToCfiList(t.section.cfiBase, e);
  }
  /**
   * Find CFI pairs for a page
   * @param {Contents} contents Contents from view
   * @param {string} cfiBase string of the base for a cfi
   * @param {number} start position to start at
   * @param {number} end position to end at
   */
  page(t, e, i, s) {
    const n = t && t.document ? t.document.body : false;
    if (!n)
      return;
    let r;
    if (this._measurer) {
      const d = t.document.documentElement;
      r = this.horizontal ? d.scrollWidth : d.scrollHeight;
    }
    const o = this.findStart(n, i, s, r), h = this.findEnd(n, i, s, r);
    let l = false;
    if (this._measurer)
      try {
        l = o.compareBoundaryPoints(Range.END_TO_START, h) > 0;
      } catch {
      }
    const c = l ? this.rangePairToCfiPair(e, {
      start: this.findStart(n, i, s, r, true),
      end: this.findEnd(n, i, s, r, true)
    }) : this.rangePairToCfiPair(e, { start: o, end: h });
    if (this._dev === true) {
      const d = t.document, u = new b(c.start).toRange(d), f = new b(c.end).toRange(d), m = d.defaultView.getSelection(), p = d.createRange();
      m.removeAllRanges(), p.setStart(u.startContainer, u.startOffset), p.setEnd(f.endContainer, f.endOffset), m.addRange(p);
    }
    return c;
  }
  /**
   * Walk a node, preforming a function on each node it finds
   * @private
   * @param {Node} root Node to walkToNode
   * @param {function} func walk function
   * @return {*} returns the result of the walk function
   */
  walk(t, e) {
    const i = {
      acceptNode(o) {
        return o.data.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }, s = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, i);
    let n, r;
    for (; (n = s.nextNode()) && (r = e(n), !r); )
      ;
    return r;
  }
  findRanges(t) {
    const e = [], i = t.contents.scrollWidth(), n = Math.ceil(i / this.layout.spreadWidth) * this.layout.divisor, r = this.layout.columnWidth, o = this.layout.gap, h = this.horizontal ? i : this._measurer ? t.document.documentElement.scrollHeight : void 0;
    let l, c;
    for (let d = 0; d < n; d++)
      l = (r + o) * d, c = r * (d + 1) + o * d, e.push({
        start: this.findStart(t.document.body, l, c, h),
        end: this.findEnd(t.document.body, l, c, h)
      });
    return e;
  }
  /**
   * Find Start Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @param {number} [scrollDimension] total scrollable dimension in CSS pixels
   *   (scrollWidth for horizontal, scrollHeight for vertical). Hoisted reads
   *   avoid forced reflows in the canvas fast path; omit to read lazily.
   * @param {boolean} [noFast] skip the canvas fast path and use the DOM walk
   *   (used to recover from a fast-path-induced start/end inversion)
   * @return {Range}
   */
  findStart(t, e, i, s, n = false) {
    if (!n && t.nodeType === Node.ELEMENT_NODE) {
      const d = this._canvasFindNode(t, e, i, "start", s);
      if (d) return this.findTextStartRange(d.node, e, i, d.nodePos);
    }
    const r = [t];
    let o, h, l = t, c;
    for (; r.length; )
      if (o = r.shift(), h = this.walk(o, (d) => {
        let u, f, m, p;
        const v = et(d);
        if (c = v, this.horizontal && this.direction === "ltr") {
          if (u = v.left, f = v.right, u >= e && u <= i)
            return d;
          if (f > e)
            return d;
          l = d, r.push(d);
        } else if (this.horizontal && this.direction === "rtl") {
          if (u = v.left, f = v.right, f <= i && f >= e)
            return d;
          if (u < i)
            return d;
          l = d, r.push(d);
        } else {
          if (m = v.top, p = v.bottom, m >= e && m <= i)
            return d;
          if (p > e)
            return d;
          l = d, r.push(d);
        }
      }), h)
        return this.findTextStartRange(h, e, i, c);
    return this.findTextStartRange(l, e, i, c);
  }
  /**
   * Find End Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @param {number} [scrollDimension] total scrollable dimension in CSS pixels
   *   (scrollWidth for horizontal, scrollHeight for vertical). Hoisted reads
   *   avoid forced reflows in the canvas fast path; omit to read lazily.
   * @param {boolean} [noFast] skip the canvas fast path and use the DOM walk
   *   (used to recover from a fast-path-induced start/end inversion)
   * @return {Range}
   */
  findEnd(t, e, i, s, n = false) {
    if (!n && t.nodeType === Node.ELEMENT_NODE) {
      const u = this._canvasFindNode(t, e, i, "end", s);
      if (u) return this.findTextEndRange(u.node, e, i, u.nodePos);
    }
    const r = [t];
    let o, h = t, l, c, d;
    for (; r.length; )
      if (o = r.shift(), l = this.walk(o, (u) => {
        let f, m, p, v;
        const y = et(u);
        if (c = y, this.horizontal && this.direction === "ltr") {
          if (f = Math.round(y.left), m = Math.round(y.right), f > i && h)
            return h;
          if (m > i)
            return u;
          h = u, d = y, r.push(u);
        } else if (this.horizontal && this.direction === "rtl") {
          if (f = Math.round(y.left), m = Math.round(y.right), m < e && h)
            return h;
          if (f < e)
            return u;
          h = u, d = y, r.push(u);
        } else {
          if (p = Math.round(y.top), v = Math.round(y.bottom), p > i && h)
            return h;
          if (v > i)
            return u;
          h = u, d = y, r.push(u);
        }
      }), l) {
        const u = l === h ? d : c;
        return this.findTextEndRange(l, e, i, u);
      }
    return this.findTextEndRange(h, e, i, d);
  }
  /**
   * Try to prepare a text node's root for canvas-based measurement.
   * Returns the PreparedNode for this text node, or null if not available.
   * @private
   */
  _canvasPrepare(t) {
    var o;
    if (!this._measurer || t.nodeType !== Node.TEXT_NODE) return null;
    const e = t, i = e.parentElement;
    if (!i) return null;
    const s = (o = i.ownerDocument) == null ? void 0 : o.defaultView;
    if (!s) return null;
    const n = this._measurer.getPreparedNode(e);
    if (n) {
      const h = s.getComputedStyle(i).font;
      if (!h || h === n.font) return n;
      const l = i.ownerDocument.body;
      l && this._measurer.invalidate(l);
    }
    if (this._measurer.hasExoticCSS(e, s)) return null;
    const r = i.ownerDocument.body;
    return r ? (this._measurer.prepare(r, s), this._measurer.getPreparedNode(e)) : null;
  }
  /**
   * Canvas fast path: use binary search on pre-measured cumulative widths
   * to find a Range at the target position, then verify with one getBoundingClientRect.
   * Returns the Range if verification passes, or null to fall through to DOM loop.
   * @private
   */
  _canvasFindRange(t, e, i, s) {
    const n = this._canvasPrepare(t);
    if (!n || n.segments.length === 0) return null;
    const r = t, o = this.horizontal ? this.direction === "rtl" ? e.right : e.left : e.top, h = this.horizontal && this.direction === "rtl" ? o - i : i - o;
    if (h < 0) return null;
    const l = this._measurer.findSegmentIndex(n.segments, h), c = n.segments, d = r.ownerDocument, u = r.data.length;
    for (let f = l; f < c.length && f <= l + 1; f++) {
      const m = c[f], p = c[f + 1], v = d.createRange();
      if (v.setStart(r, Math.min(m.charOffset, u)), v.setEnd(r, Math.min(p ? p.charOffset : u, u)), s(v.getBoundingClientRect())) return v;
    }
    return null;
  }
  /**
   * Canvas fast path for node-level search: binary search on cumulative
   * document-level text widths to estimate which text node falls at a target
   * pixel position, then verify with 1-2 getBoundingClientRect calls.
   * Returns the node and its verified bounds, or null to fall through to the DOM walk.
   * @private
   */
  _canvasFindNode(t, e, i, s, n) {
    var y;
    if (!this._measurer) return null;
    const r = (y = t.ownerDocument) == null ? void 0 : y.defaultView;
    if (!r) return null;
    const o = this._measurer.prepare(t, r);
    if (o.length === 0) return null;
    const h = o[o.length - 1].cumDocWidth;
    if (h === 0) return null;
    if (n === void 0) {
      const E = t.ownerDocument.documentElement;
      n = this.horizontal ? E.scrollWidth : E.scrollHeight;
    }
    if (n === 0) return null;
    let l;
    this.horizontal && this.direction === "rtl" ? l = n - (s === "start" ? i : e) : l = s === "start" ? e : i;
    const c = l / n * h, d = this._measurer.findNodeIndex(o, c), u = 3, f = Math.max(0, d - u), m = Math.min(o.length - 1, d + u);
    let p = null, v = null;
    for (let E = f; E <= m; E++) {
      const x = o[E], w = et(x.node), C = E === f && f > 0;
      if (this.horizontal && this.direction === "ltr")
        if (s === "start") {
          if (w.left >= e && w.left <= i || w.right > e)
            return C ? null : { node: x.node, nodePos: w };
        } else {
          const R = Math.round(w.left), N = Math.round(w.right);
          if (R > i)
            return p && v ? { node: p, nodePos: v } : null;
          if (N > i)
            return C ? null : { node: x.node, nodePos: w };
          p = x.node, v = w;
        }
      else if (this.horizontal && this.direction === "rtl")
        if (s === "start") {
          if (w.right <= i && w.right >= e || w.left < i)
            return C ? null : { node: x.node, nodePos: w };
        } else {
          const R = Math.round(w.left);
          if (Math.round(w.right) < e)
            return p && v ? { node: p, nodePos: v } : null;
          if (R < e)
            return C ? null : { node: x.node, nodePos: w };
          p = x.node, v = w;
        }
      else if (s === "start") {
        if (w.top >= e && w.top <= i || w.bottom > e)
          return C ? null : { node: x.node, nodePos: w };
      } else {
        const R = Math.round(w.top), N = Math.round(w.bottom);
        if (R > i)
          return p && v ? { node: p, nodePos: v } : null;
        if (N > i)
          return C ? null : { node: x.node, nodePos: w };
        p = x.node, v = w;
      }
    }
    return s === "end" && p && v && m === o.length - 1 ? { node: p, nodePos: v } : null;
  }
  /**
   * Find Text Start Range
   * @private
   * @param {Node} node text node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @param {DOMRect} [nodePos] pre-computed node bounds from findStart (avoids redundant reflow)
   * @return {Range}
   */
  findTextStartRange(t, e, i, s) {
    if (s) {
      const d = this.horizontal && this.direction === "rtl" ? i : e, u = this._canvasFindRange(t, s, d, (f) => {
        const m = this.horizontal ? this.direction === "rtl" ? f.right : f.left : f.top;
        return this.horizontal && this.direction === "ltr" ? m >= e : this.horizontal && this.direction === "rtl" ? m <= i : m >= e;
      });
      if (u) return u;
    }
    const n = this.splitTextNodeIntoRanges(t);
    let r, o, h, l, c;
    for (let d = 0; d < n.length; d++)
      if (r = n[d], o = r.getBoundingClientRect(), this.horizontal && this.direction === "ltr") {
        if (h = o.left, h >= e)
          return r;
      } else if (this.horizontal && this.direction === "rtl") {
        if (c = o.right, c <= i)
          return r;
      } else if (l = o.top, l >= e)
        return r;
    return n[0];
  }
  /**
   * Find Text End Range
   * @private
   * @param {Node} node text node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @param {DOMRect} [nodePos] pre-computed node bounds from findEnd (avoids redundant reflow)
   * @return {Range}
   */
  findTextEndRange(t, e, i, s) {
    if (s) {
      const f = this.horizontal && this.direction === "rtl" ? e : i, m = this._canvasFindRange(t, s, f, (p) => this.horizontal && this.direction === "ltr" ? p.left <= i && p.right >= i : this.horizontal && this.direction === "rtl" ? p.right >= e && p.left <= e : p.top <= i && p.bottom >= i);
      if (m) return m;
    }
    const n = this.splitTextNodeIntoRanges(t);
    let r, o, h, l, c, d, u;
    for (let f = 0; f < n.length; f++) {
      if (o = n[f], h = o.getBoundingClientRect(), this.horizontal && this.direction === "ltr") {
        if (l = h.left, c = h.right, l > i && r)
          return r;
        if (c > i)
          return o;
      } else if (this.horizontal && this.direction === "rtl") {
        if (l = h.left, c = h.right, c < e && r)
          return r;
        if (l < e)
          return o;
      } else {
        if (d = h.top, u = h.bottom, d > i && r)
          return r;
        if (u > i)
          return o;
      }
      r = o;
    }
    return n[n.length - 1];
  }
  /**
   * Split up a text node into ranges for each word
   * @private
   * @param {Node} root root node
   * @param {string} [_splitter] what to split on
   * @return {Range[]}
   */
  splitTextNodeIntoRanges(t, e) {
    const i = [], s = t.textContent || "", n = s.trim(), r = s.length - s.trimStart().length;
    let o;
    const h = t.ownerDocument, l = e || " ";
    let c = n.indexOf(l);
    if (c === -1 || t.nodeType !== Node.TEXT_NODE) {
      if (t.nodeType === Node.TEXT_NODE && Tt.test(s)) {
        let u = -1, f = 0;
        for (const m of s)
          Tt.test(m) ? (u !== -1 && (o = h.createRange(), o.setStart(t, u), o.setEnd(t, f), i.push(o), u = -1), o = h.createRange(), o.setStart(t, f), o.setEnd(t, f + m.length), i.push(o)) : u === -1 && (u = f), f += m.length;
        return u !== -1 && (o = h.createRange(), o.setStart(t, u), o.setEnd(t, f), i.push(o)), i;
      }
      return o = h.createRange(), o.selectNodeContents(t), [o];
    }
    let d = 0;
    for (; c !== -1; )
      c > d && (o = h.createRange(), o.setStart(t, r + d), o.setEnd(t, r + c), i.push(o)), d = c + l.length, c = n.indexOf(l, d);
    return d < n.length && (o = h.createRange(), o.setStart(t, r + d), o.setEnd(t, r + n.length), i.push(o)), i;
  }
  /**
   * Turn a pair of ranges into a pair of CFIs
   * @private
   * @param {string} cfiBase base string for an EpubCFI
   * @param {object} rangePair { start: Range, end: Range }
   * @return {object} { start: "epubcfi(...)", end: "epubcfi(...)" }
   */
  rangePairToCfiPair(t, e) {
    const i = e.start, s = e.end;
    i.collapse(true), s.collapse(false);
    const n = new b(i, t).toString(), r = new b(s, t).toString();
    return {
      start: n,
      end: r
    };
  }
  rangeListToCfiList(t, e) {
    const i = [];
    let s;
    for (let n = 0; n < e.length; n++)
      s = this.rangePairToCfiPair(t, e[n]), i.push(s);
    return i;
  }
  /**
   * Set the axis for mapping
   * @param {string} axis horizontal | vertical
   * @return {boolean} is it horizontal?
   */
  axis(t) {
    return t && (this.horizontal = t === "horizontal"), this.horizontal;
  }
};
var Xe = typeof navigator < "u";
var Ut = Xe && !/Chrome/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent);
var Ye = 1;
function jt(a, t) {
  const e = [];
  return a && e.push(["width", a + "px"]), t && e.push(["height", t + "px"]), e;
}
var dt = class {
  constructor(t, e, i, s) {
    this.epubcfi = new b(), this.document = t, this.documentElement = this.document.documentElement, this.content = e || this.document.body, this.window = this.document.defaultView, this._size = {
      width: 0,
      height: 0
    }, this.sectionIndex = s || 0, this.cfiBase = i || "", this._mediaQueryHandlers = [], this.epubReadingSystem("epub.js", ct), this.called = 0, this.active = true, this.listeners();
  }
  /**
  	* Get DOM events that are listened for and passed along
  	*/
  static get listenedEvents() {
    return it;
  }
  /**
  	* Get or Set width
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  width(t) {
    const e = this.content;
    return t && S(t) && (t = t + "px"), t && (e.style.width = t), parseInt(this.window.getComputedStyle(e).width);
  }
  /**
  	* Get or Set height
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  height(t) {
    const e = this.content;
    return t && S(t) && (t = t + "px"), t && (e.style.height = t), parseInt(this.window.getComputedStyle(e).height);
  }
  /**
  	* Get or Set width of the contents
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  contentWidth(t) {
    const e = this.content || this.document.body;
    return t && S(t) && (t = t + "px"), t && (e.style.width = t), parseInt(this.window.getComputedStyle(e).width);
  }
  /**
  	* Get or Set height of the contents
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  contentHeight(t) {
    const e = this.content || this.document.body;
    return t && S(t) && (t = t + "px"), t && (e.style.height = t), parseInt(this.window.getComputedStyle(e).height);
  }
  /**
  	* Get the width of the text using Range
  	* @returns {number} width
  	*/
  textWidth() {
    let t;
    const e = this.document.createRange(), i = this.content || this.document.body, s = Y(i);
    return e.selectNodeContents(i), t = e.getBoundingClientRect().width, s && s.width && (t += s.width), Math.round(t);
  }
  /**
  	* Get the height of the text using Range
  	* @returns {number} height
  	*/
  textHeight() {
    const t = this.document.createRange(), e = this.content || this.document.body;
    t.selectNodeContents(e);
    const s = t.getBoundingClientRect().bottom;
    return Math.round(s);
  }
  /**
  	* Get documentElement scrollWidth
  	* @returns {number} width
  	*/
  scrollWidth() {
    return this.documentElement.scrollWidth;
  }
  /**
  	* Get documentElement scrollHeight
  	* @returns {number} height
  	*/
  scrollHeight() {
    return this.documentElement.scrollHeight;
  }
  /**
  	* Set overflow css style of the contents
  	* @param {string} [overflow]
  	*/
  overflow(t) {
    return t && (this.documentElement.style.overflow = t), this.window.getComputedStyle(this.documentElement).overflow;
  }
  /**
  	* Set overflowX css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowX(t) {
    return t && (this.documentElement.style.overflowX = t), this.window.getComputedStyle(this.documentElement).overflowX;
  }
  /**
  	* Set overflowY css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowY(t) {
    return t && (this.documentElement.style.overflowY = t), this.window.getComputedStyle(this.documentElement).overflowY;
  }
  /**
  	* Set Css styles on the contents element (typically Body)
  	* @param {string} property
  	* @param {string} value
  	* @param {boolean} [priority] set as "important"
  	*/
  css(t, e, i) {
    const s = this.content || this.document.body;
    return e ? s.style.setProperty(t, e, i ? "important" : "") : s.style.removeProperty(t), this.window.getComputedStyle(s)[t] ?? "";
  }
  /**
  	* Set multiple Css properties at once without triggering
  	* intermediate getComputedStyle reads.
  	* @param {Array<[string, string?, boolean?]>} properties
  	* @private
  	*/
  cssBatch(t) {
    const e = this.content || this.document.body;
    for (const [i, s, n] of t)
      s ? e.style.setProperty(i, s, n ? "important" : "") : e.style.removeProperty(i);
  }
  /**
  	* Get or Set the viewport element
  	* @param {object} [options]
  	* @param {string} [options.width]
  	* @param {string} [options.height]
  	* @param {string} [options.scale]
  	* @param {string} [options.minimum]
  	* @param {string} [options.maximum]
  	* @param {string} [options.scalable]
  	*/
  viewport(t) {
    let e = this.document.querySelector("meta[name='viewport']");
    const i = {
      width: void 0,
      height: void 0,
      scale: void 0,
      minimum: void 0,
      maximum: void 0,
      scalable: void 0
    }, s = [];
    let n = {};
    if (e && e.hasAttribute("content")) {
      const r = e.getAttribute("content") ?? "", o = r.match(/width\s*=\s*([^,]*)/), h = r.match(/height\s*=\s*([^,]*)/), l = r.match(/initial-scale\s*=\s*([^,]*)/), c = r.match(/minimum-scale\s*=\s*([^,]*)/), d = r.match(/maximum-scale\s*=\s*([^,]*)/), u = r.match(/user-scalable\s*=\s*([^,]*)/);
      o && o.length && typeof o[1] < "u" && (i.width = o[1]), h && h.length && typeof h[1] < "u" && (i.height = h[1]), l && l.length && typeof l[1] < "u" && (i.scale = l[1]), c && c.length && typeof c[1] < "u" && (i.minimum = c[1]), d && d.length && typeof d[1] < "u" && (i.maximum = d[1]), u && u.length && typeof u[1] < "u" && (i.scalable = u[1]);
    }
    return n = $t(t ?? {}, i), t && (n.width && s.push("width=" + n.width), n.height && s.push("height=" + n.height), n.scale && s.push("initial-scale=" + n.scale), n.scalable === "no" ? (s.push("minimum-scale=" + n.scale), s.push("maximum-scale=" + n.scale), s.push("user-scalable=" + n.scalable)) : (n.scalable && s.push("user-scalable=" + n.scalable), n.minimum && s.push("minimum-scale=" + n.minimum), n.maximum && s.push("minimum-scale=" + n.maximum)), e || (e = this.document.createElement("meta"), e.setAttribute("name", "viewport"), this.document.querySelector("head").appendChild(e)), e.setAttribute("content", s.join(", ")), this.window.scrollTo(0, 0)), n;
  }
  /**
   * Event emitter for when the contents has expanded
   * @private
   */
  expand() {
    this.emit(g.CONTENTS.EXPAND);
  }
  /**
   * Add DOM listeners
   * @private
   */
  listeners() {
    this.imageLoadListeners(), this.mediaQueryListeners(), this.fontLoadListeners(), this.addEventListeners(), this.addSelectionListeners(), this.resizeObservers(), this.linksHandler();
  }
  /**
   * Remove DOM listeners
   * @private
   */
  removeListeners() {
    this.removeEventListeners(), this.removeSelectionListeners(), this._resizeCheck && (this.document.removeEventListener("transitionend", this._resizeCheck), this._resizeCheck = void 0);
    for (const { mql: e, handler: i } of this._mediaQueryHandlers)
      e.removeEventListener("change", i);
    this._mediaQueryHandlers = [], this.observer && this.observer.disconnect();
    const t = this.document.querySelectorAll("img");
    for (let e = 0; e < t.length; e++)
      t[e].onload = null;
  }
  /**
   * Check if size of contents has changed and
   * emit 'resize' event if it has.
   * @private
   */
  resizeCheck() {
    if (!this.active) return;
    const t = this.textWidth(), e = this.textHeight();
    (t !== this._size.width || e !== this._size.height) && (this._size = {
      width: t,
      height: e
    }, this.onResize && this.onResize(this._size), this.emit(g.CONTENTS.RESIZE, this._size));
  }
  /**
   * Use css transitions to detect resize
   * @private
   */
  transitionListeners() {
    const t = this.content;
    t.style.transitionProperty = "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height", t.style.transitionDuration = "0.001ms", t.style.transitionTimingFunction = "linear", t.style.transitionDelay = "0", this._resizeCheck = this.resizeCheck.bind(this), this.document.addEventListener("transitionend", this._resizeCheck);
  }
  /**
   * Listen for media query changes and emit 'expand' event
   * Adapted from: https://github.com/tylergaw/media-query-events/blob/master/js/mq-events.js
   * @private
   */
  mediaQueryListeners() {
    const t = this.document.styleSheets, e = (s) => {
      s.matches && !this._expanding && setTimeout(() => this.expand(), 0);
    }, i = /* @__PURE__ */ new Set();
    for (let s = 0; s < t.length; s += 1) {
      let n;
      try {
        n = t[s].cssRules;
      } catch {
        continue;
      }
      if (n) {
        for (let r = 0; r < n.length; r += 1)
          if (n[r].media) {
            const o = n[r].media.mediaText;
            if (i.has(o)) continue;
            i.add(o);
            const h = this.window.matchMedia(o);
            h.addEventListener("change", e), this._mediaQueryHandlers.push({ mql: h, handler: e });
          }
      }
    }
  }
  /**
   * Use ResizeObserver to listen for changes in the DOM and check for resize
   * @private
   */
  resizeObservers() {
    this.observer = new ResizeObserver((t) => {
      requestAnimationFrame(this.resizeCheck.bind(this));
    }), this.observer.observe(this.document.documentElement);
  }
  /**
   * Use MutationObserver to listen for changes in the DOM and check for resize
   * @private
   */
  mutationObservers() {
    this.observer = new MutationObserver((e) => {
      this.resizeCheck();
    });
    const t = { attributes: true, childList: true, characterData: true, subtree: true };
    this.observer.observe(this.document, t);
  }
  /**
   * Test if images are loaded or add listener for when they load
   * @private
   */
  imageLoadListeners() {
    const t = this.document.querySelectorAll("img");
    let e;
    for (let i = 0; i < t.length; i++)
      e = t[i], typeof e.naturalWidth < "u" && e.naturalWidth === 0 && (e.onload = this.expand.bind(this));
  }
  /**
   * Listen for font load and check for resize when loaded
   * @private
   */
  fontLoadListeners() {
    !this.document || !this.document.fonts || this.document.fonts.ready.then(() => {
      this.resizeCheck();
    });
  }
  /**
   * Get the documentElement
   * @returns {element} documentElement
   */
  root() {
    return this.document ? this.document.documentElement : null;
  }
  /**
   * Get the location offset of a EpubCFI or an #id
   * @param {string | EpubCFI} target
   * @param {string} [ignoreClass] for the cfi
   * @returns { {left: Number, top: Number }
   */
  locationOf(t, e) {
    let i;
    const s = { left: 0, top: 0 };
    if (!this.document) return s;
    if (this.epubcfi.isCfiString(t)) {
      const n = new b(t).toRange(this.document, e);
      if (n) {
        try {
          if (!n.endContainer || n.startContainer === n.endContainer && n.startOffset === n.endOffset) {
            let r = (n.startContainer.textContent ?? "").indexOf(" ", n.startOffset);
            r === -1 && (r = (n.startContainer.textContent ?? "").length), n.setEnd(n.startContainer, r);
          }
        } catch (r) {
          console.error("setting end offset to start container length failed", r);
        }
        if (n.startContainer.nodeType === Node.ELEMENT_NODE)
          i = n.startContainer.getBoundingClientRect(), s.left = i.left, s.top = i.top;
        else if (Ut) {
          const r = n.startContainer, o = new Range();
          try {
            r.nodeType === Ye ? i = r.getBoundingClientRect() : n.startOffset + 2 < r.length ? (o.setStart(r, n.startOffset), o.setEnd(r, n.startOffset + 2), i = o.getBoundingClientRect()) : n.startOffset - 2 > 0 ? (o.setStart(r, n.startOffset - 2), o.setEnd(r, n.startOffset), i = o.getBoundingClientRect()) : i = r.parentNode.getBoundingClientRect();
          } catch (h) {
            console.error(h, h instanceof Error ? h.stack : void 0);
          }
        } else
          i = n.getBoundingClientRect();
      }
    } else if (typeof t == "string") {
      const n = t.indexOf("#");
      if (n !== -1) {
        const r = t.slice(n + 1), o = this.document.getElementById(r);
        if (o)
          if (Ut) {
            const h = new Range();
            h.selectNode(o), i = h.getBoundingClientRect();
          } else
            i = o.getBoundingClientRect();
      }
    }
    return i && (s.left = i.left, s.top = i.top), s;
  }
  /**
   * Append a stylesheet link to the document head
   * @param {string} src url
   * @param {string} key If the key is the same, the link will be replaced instead of inserted
   */
  addStylesheet(t, e) {
    return new Promise((i, s) => {
      let n, r = false;
      if (!this.document) {
        i(false);
        return;
      }
      const o = e ? "epubjs-inserted-link-" + e : void 0;
      if (o) {
        const h = this.document.getElementById(o);
        if (h) {
          if (h.getAttribute("href") === t) {
            i(true);
            return;
          }
          h.remove();
        }
      }
      if (!o && (n = this.document.querySelector("link[href='" + t + "']"), n)) {
        i(true);
        return;
      }
      n = this.document.createElement("link"), o && (n.id = o), n.type = "text/css", n.rel = "stylesheet", n.href = t, n.onload = () => {
        r || (r = true, setTimeout(() => {
          i(true);
        }, 0));
      }, this.document.head.appendChild(n);
    });
  }
  _getStylesheetNode(t) {
    let e;
    return t = "epubjs-inserted-css-" + (t || ""), this.document ? (e = this.document.getElementById(t), e || (e = this.document.createElement("style"), e.id = t, this.document.head.appendChild(e)), e) : false;
  }
  /**
   * Append stylesheet css
   * @param {string} serializedCss
   * @param {string} key If the key is the same, the CSS will be replaced instead of inserted
   */
  addStylesheetCss(t, e) {
    if (!this.document || !t) return false;
    const i = this._getStylesheetNode(e);
    return i ? (i.textContent = t, true) : false;
  }
  /**
   * Append stylesheet rules to a generate stylesheet
   * Array: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
   * Object: https://github.com/desirable-objects/json-to-css
   * @param {array | object} rules
   * @param {string} key If the key is the same, the CSS will be replaced instead of inserted
   */
  addStylesheetRules(t, e) {
    var s;
    if (!this.document || !t || Array.isArray(t) && t.length === 0) return;
    const i = this._getStylesheetNode(e).sheet;
    if (e)
      for (let n = i.cssRules.length - 1; n >= 0; n--)
        i.deleteRule(n);
    if (Array.isArray(t))
      for (let n = 0, r = t.length; n < r; n++) {
        let o = 1, h = t[n], l = "";
        const c = t[n][0];
        Array.isArray((s = h[1]) == null ? void 0 : s[0]) && (h = h[1], o = 0);
        for (let d = h.length; o < d; o++) {
          const u = h[o];
          l += u[0] + ":" + u[1] + (u[2] ? " !important" : "") + `;
`;
        }
        i.insertRule(c + "{" + l + "}", i.cssRules.length);
      }
    else
      Object.keys(t).forEach((r) => {
        const o = t[r];
        if (Array.isArray(o))
          o.forEach((h) => {
            const c = Object.keys(h).map((d) => `${d}:${h[d]}`).join(";");
            i.insertRule(`${r}{${c}}`, i.cssRules.length);
          });
        else {
          const l = Object.keys(o).map((c) => `${c}:${o[c]}`).join(";");
          i.insertRule(`${r}{${l}}`, i.cssRules.length);
        }
      });
  }
  /**
   * Append a script tag to the document head
   * @param {string} src url
   * @returns {Promise} loaded
   */
  addScript(t) {
    return new Promise((e, i) => {
      let s = false;
      if (!this.document) {
        e(false);
        return;
      }
      const n = this.document.createElement("script");
      n.type = "text/javascript", n.async = true, n.src = t, n.onload = () => {
        s || (s = true, setTimeout(() => {
          e(true);
        }, 0));
      }, this.document.head.appendChild(n);
    });
  }
  /**
   * Add a class to the contents container
   * @param {string} className
   */
  addClass(t) {
    if (!this.document) return;
    const e = this.content || this.document.body;
    e && e.classList.add(t);
  }
  /**
   * Remove a class from the contents container
   * @param className - class name to remove
   */
  removeClass(t) {
    if (!this.document) return;
    const e = this.content || this.document.body;
    e && e.classList.remove(t);
  }
  /**
   * Add DOM event listeners
   * @private
   */
  addEventListeners() {
    this.document && (this._triggerEvent = this.triggerEvent.bind(this), it.forEach((t) => {
      this.document.addEventListener(t, this._triggerEvent, { passive: true });
    }));
  }
  /**
   * Remove DOM event listeners
   * @private
   */
  removeEventListeners() {
    this.document && (it.forEach((t) => {
      this.document.removeEventListener(t, this._triggerEvent);
    }), this._triggerEvent = void 0);
  }
  /**
   * Emit passed browser events
   * @private
   */
  triggerEvent(t) {
    this.emit(t.type, t);
  }
  /**
   * Add listener for text selection
   * @private
   */
  addSelectionListeners() {
    this.document && (this._onSelectionChange = this.onSelectionChange.bind(this), this.document.addEventListener("selectionchange", this._onSelectionChange, { passive: true }));
  }
  /**
   * Remove listener for text selection
   * @private
   */
  removeSelectionListeners() {
    clearTimeout(this.selectionEndTimeout), this.selectionEndTimeout = void 0, this.document && (this.document.removeEventListener("selectionchange", this._onSelectionChange), this._onSelectionChange = void 0);
  }
  /**
   * Handle getting text on selection
   * @private
   */
  onSelectionChange(t) {
    this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout), this.selectionEndTimeout = setTimeout(() => {
      const e = this.window.getSelection();
      e && this.triggerSelectedEvent(e);
    }, 250);
  }
  /**
   * Emit event on text selection
   * @private
   */
  triggerSelectedEvent(t) {
    let e, i;
    t && t.rangeCount > 0 && (e = t.getRangeAt(0), e.collapsed || (i = new b(e, this.cfiBase).toString(), this.emit(g.CONTENTS.SELECTED, i), this.emit(g.CONTENTS.SELECTED_RANGE, e)));
  }
  /**
   * Get a Dom Range from EpubCFI
   * @param {EpubCFI} _cfi
   * @param {string} [ignoreClass]
   * @returns {Range} range
   */
  range(t, e) {
    return new b(t).toRange(this.document, e);
  }
  /**
   * Get an EpubCFI from a Dom Range
   * @param {Range} range
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromRange(t, e) {
    return new b(t, this.cfiBase, e).toString();
  }
  /**
   * Get an EpubCFI from a Dom node
   * @param {node} node
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromNode(t, e) {
    return new b(t, this.cfiBase, e).toString();
  }
  /**
   * Size the contents to a given width and height
   * @param {number} [width]
   * @param {number} [height]
   */
  size(t, e) {
    const i = { scale: 1, scalable: "no" };
    this.layoutStyle("scrolling");
    const s = [];
    t !== void 0 && t >= 0 && (t && s.push(["width", t + "px"]), i.width = t, s.push(["padding", "0 " + t / 12 + "px"])), e !== void 0 && e >= 0 && (e && s.push(["height", e + "px"]), i.height = e), s.push(
      ["margin", "0"],
      ["box-sizing", "border-box"]
    ), this.cssBatch(s), this.viewport(i);
  }
  /**
   * Apply columns to the contents for pagination
   * @param {number} width
   * @param {number} height
   * @param {number} columnWidth
   * @param {number} gap
   */
  columns(t, e, i, s, n) {
    const r = "-webkit-column-axis", o = "column-gap", h = "column-width", l = "column-fill", d = this.writingMode().startsWith("vertical") ? "vertical" : "horizontal";
    this.layoutStyle("paginated"), n === "rtl" && d === "horizontal" && this.direction(n), this.cssBatch(jt(t, e)), this.viewport({ width: t, height: e, scale: 1, scalable: "no" });
    const u = [
      // Fixes Safari column cut offs, but causes RTL issues.
      // Required on iOS: block-level body in CSS columns triggers a
      // WKWebView content-size expansion feedback loop where scrollWidth
      // grows toward infinity. inline-block shrink-wraps the body to
      // its explicit width, breaking the cycle.
      ["display", "inline-block"],
      ["overflow-y", "hidden"],
      ["margin", "0", true]
    ];
    d === "vertical" ? u.push(
      ["padding-top", s / 2 + "px", true],
      ["padding-bottom", s / 2 + "px", true],
      ["padding-left", "20px"],
      ["padding-right", "20px"],
      [r, "vertical"]
    ) : u.push(
      ["padding-top", "20px"],
      ["padding-bottom", "20px"],
      ["padding-left", s / 2 + "px", true],
      ["padding-right", s / 2 + "px", true],
      [r, "horizontal"]
    ), u.push(
      ["box-sizing", "border-box"],
      ["max-width", "inherit"],
      [l, "auto"],
      [o, s + "px"],
      [h, i + "px"]
    ), this.cssBatch(u);
  }
  /**
   * Scale contents from center
   * @param {number} scale
   * @param {number} offsetX
   * @param {number} offsetY
   */
  scaler(t, e, i) {
    const s = "scale(" + t + ")";
    let n = "";
    (e !== void 0 && e >= 0 || i !== void 0 && i >= 0) && (n = " translate(" + (e || 0) + "px, " + (i || 0) + "px )"), this.cssBatch([
      ["transform-origin", "top left"],
      ["transform", s + n]
    ]);
  }
  /**
   * Fit contents into a fixed width and height
   * @param {number} width
   * @param {number} height
   * @return {boolean} whether the contents could be fitted
   */
  fit(t, e, i) {
    var d;
    const s = this.viewport(), n = parseInt(s.width), r = parseInt(s.height);
    if (!(n > 0) || !(r > 0))
      return false;
    const o = t / n, h = e / r, l = o < h ? o : h;
    this.layoutStyle("paginated"), this.cssBatch(jt(n, r)), this.documentElement.style.overflow = "hidden", this.scaler(l, 0, 0);
    const c = [
      // background images are not scaled by transform
      ["background-size", n * l + "px " + r * l + "px"],
      ["background-color", "transparent"]
    ];
    if ((d = i == null ? void 0 : i.properties) != null && d.includes("page-spread-left")) {
      const u = t - n * l;
      c.push(["margin-left", u + "px"]);
    }
    return this.cssBatch(c), true;
  }
  /**
   * Set the direction of the text
   * @param {string} [dir="ltr"] "rtl" | "ltr"
   */
  direction(t) {
    this.documentElement && (this.documentElement.style.direction = t);
  }
  mapPage(t, e, i, s, n) {
    return new Rt(e, void 0, void 0, n).page(this, t, i, s);
  }
  /**
   * Emit event when link in content is clicked
   * @private
   */
  linksHandler() {
    Ie(this.content, (t) => {
      this.emit(g.CONTENTS.LINK_CLICKED, t);
    });
  }
  /**
   * Set the writingMode of the text
   * @param {string} [mode="horizontal-tb"] "horizontal-tb" | "vertical-rl" | "vertical-lr"
   */
  writingMode(t) {
    t && this.documentElement && (this.documentElement.style.writingMode = t);
    const e = this.content || this.document.body;
    return this.window.getComputedStyle(e).writingMode || "";
  }
  /**
   * Set the layoutStyle of the content
   * @param {string} [style="paginated"] "scrolling" | "paginated"
   * @private
   */
  layoutStyle(t) {
    return t && (this._layoutStyle = t, navigator.epubReadingSystem.layoutStyle = this._layoutStyle), this._layoutStyle || "paginated";
  }
  /**
   * Add the epubReadingSystem object to the navigator
   * @param {string} name
   * @param {string} version
   * @private
   */
  epubReadingSystem(t, e) {
    navigator.epubReadingSystem = {
      name: t,
      version: e,
      layoutStyle: this.layoutStyle(),
      hasFeature: function(i) {
        switch (i) {
          case "dom-manipulation":
            return true;
          case "layout-changes":
            return true;
          case "touch-events":
            return true;
          case "mouse-events":
            return true;
          case "keyboard-events":
            return true;
          case "spine-scripting":
            return false;
          default:
            return false;
        }
      }
    };
  }
  destroy() {
    this.active = false, this.removeListeners(), this.__listeners = {};
  }
};
D(dt.prototype);
function J(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function Ge(a, t) {
  function e(s) {
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      let o, h;
      if ("touches" in s && s.touches.length ? (o = s.touches[0].clientX, h = s.touches[0].clientY) : (o = s.clientX, h = s.clientY), !!Ke(r, a, o, h)) {
        r.dispatchEvent($e(s));
        break;
      }
    }
  }
  let i;
  if (a.nodeName === "iframe" || a.nodeName === "IFRAME")
    try {
      i = a.contentDocument;
    } catch {
      i = a;
    }
  else
    i = a;
  for (const s of ["mouseup", "mousedown", "click", "touchstart"])
    i.addEventListener(s, (n) => e(n), false);
}
function $e(a) {
  const t = Object.assign({}, a, { bubbles: false });
  return new MouseEvent(a.type, t);
}
function Ke(a, t, e, i) {
  const s = t.getBoundingClientRect();
  function n(h, l, c) {
    const d = h.top - s.top, u = h.left - s.left, f = d + h.height, m = u + h.width;
    return d <= c && u <= l && f > c && m > l;
  }
  const r = a.getBoundingClientRect();
  if (!n(r, e, i))
    return false;
  const o = a.getClientRects();
  for (let h = 0, l = o.length; h < l; h++)
    if (n(o[h], e, i))
      return true;
  return false;
}
function Ze(a, t) {
  const e = t.getBoundingClientRect(), i = a.getBoundingClientRect();
  return {
    top: i.top - e.top,
    left: i.left - e.left,
    height: a.scrollHeight,
    width: a.scrollWidth
  };
}
function Je(a, t) {
  a.style.setProperty("top", `${t.top}px`, "important"), a.style.setProperty("left", `${t.left}px`, "important"), a.style.setProperty("height", `${t.height}px`, "important"), a.style.setProperty("width", `${t.width}px`, "important");
}
function Qe(a, t) {
  return t.right <= a.right && t.left >= a.left && t.top >= a.top && t.bottom <= a.bottom;
}
var Ft = class {
  constructor(t, e = document.body) {
    this.target = t, this.element = J("svg"), this.marks = [], this.element.style.position = "absolute", this.element.setAttribute("pointer-events", "none"), Ge(this.target, this.marks), this.container = e, this.container.appendChild(this.element), this.render();
  }
  addMark(t) {
    const e = J("g");
    return this.element.appendChild(e), t.bind(e, this.container), this.marks.push(t), t.render(), t;
  }
  removeMark(t) {
    const e = this.marks.indexOf(t);
    if (e === -1)
      return;
    const i = t.unbind();
    this.element.removeChild(i), this.marks.splice(e, 1);
  }
  render() {
    Je(this.element, Ze(this.target, this.container));
    for (const t of this.marks)
      t.render();
  }
};
var ti = class {
  constructor() {
    this.element = null;
  }
  bind(t, e) {
    this.element = t, this.container = e;
  }
  unbind() {
    const t = this.element;
    return this.element = null, t;
  }
  render() {
  }
  dispatchEvent(t) {
    this.element && this.element.dispatchEvent(t);
  }
  getBoundingClientRect() {
    return this.element.getBoundingClientRect();
  }
  getClientRects() {
    const t = [];
    let e = this.element.firstChild;
    for (; e; )
      t.push(e.getBoundingClientRect()), e = e.nextSibling;
    return t;
  }
  filteredRanges() {
    const t = Array.from(this.range.getClientRects());
    return t.filter((e) => {
      for (let i = 0; i < t.length; i++) {
        if (t[i] === e)
          return true;
        if (Qe(t[i], e))
          return false;
      }
      return true;
    });
  }
};
var de = class extends ti {
  constructor(t, e, i, s) {
    super(), this.range = t, this.className = e, this.data = i || {}, this.attributes = s || {};
  }
  bind(t, e) {
    super.bind(t, e);
    for (const i in this.data)
      this.data.hasOwnProperty(i) && (this.element.dataset[i] = this.data[i]);
    for (const i in this.attributes)
      this.attributes.hasOwnProperty(i) && this.element.setAttribute(i, this.attributes[i]);
    this.className && this.element.classList.add(this.className);
  }
  render() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
    const t = this.element.ownerDocument.createDocumentFragment(), e = this.filteredRanges(), i = this.element.getBoundingClientRect(), s = this.container.getBoundingClientRect();
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n], h = J("rect");
      h.setAttribute("x", String(o.left - i.left + s.left)), h.setAttribute("y", String(o.top - i.top + s.top)), h.setAttribute("height", String(o.height)), h.setAttribute("width", String(o.width)), t.appendChild(h);
    }
    this.element.appendChild(t);
  }
};
var ei = class extends de {
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  render() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
    const t = this.element.ownerDocument.createDocumentFragment(), e = this.filteredRanges(), i = this.element.getBoundingClientRect(), s = this.container.getBoundingClientRect();
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n], h = J("rect");
      h.setAttribute("x", String(o.left - i.left + s.left)), h.setAttribute("y", String(o.top - i.top + s.top)), h.setAttribute("height", String(o.height)), h.setAttribute("width", String(o.width)), h.setAttribute("fill", this.attributes.fill || "none");
      const l = J("line");
      l.setAttribute("x1", String(o.left - i.left + s.left)), l.setAttribute("x2", String(o.left - i.left + s.left + o.width)), l.setAttribute("y1", String(o.top - i.top + s.top + o.height - 1)), l.setAttribute("y2", String(o.top - i.top + s.top + o.height - 1)), l.setAttribute("stroke-width", this.attributes["stroke-width"] || "1"), l.setAttribute("stroke", this.attributes.stroke || "black"), l.setAttribute("stroke-linecap", this.attributes["stroke-linecap"] || "square"), t.appendChild(h), t.appendChild(l);
    }
    this.element.appendChild(t);
  }
};
var ue = class {
  constructor(t, e) {
    this._contentDirty = true, this._needsReframe = false, this._expanding = false, this.settings = L({
      ignoreClass: "",
      axis: void 0,
      //options.layout && options.layout.props.flow === "scrolled" ? "vertical" : "horizontal",
      direction: void 0,
      width: 0,
      height: 0,
      layout: void 0,
      globalLayoutProperties: {},
      method: void 0,
      forceRight: false,
      allowScriptedContent: false,
      allowPopups: false
    }, e || {}), this.id = "epubjs-view-" + at(), this.section = t, this.index = t.index, this.element = this.container(this.settings.axis), this.added = false, this.displayed = false, this.rendered = false, this.fixedWidth = 0, this.fixedHeight = 0, this.epubcfi = new b(), this.layout = this.settings.layout, this.pane = void 0, this.highlights = {}, this.underlines = {}, this.marks = {};
  }
  get isFixedLayout() {
    return tt(this.section, this.layout.name) === "pre-paginated";
  }
  container(t) {
    const e = document.createElement("div");
    return e.classList.add("epub-view"), e.style.height = "0px", e.style.width = "0px", e.style.overflow = "hidden", e.style.position = "relative", e.style.display = "block", e.style.contain = "layout paint", t && t === "horizontal" ? e.style.flex = "none" : e.style.flex = "initial", e;
  }
  create() {
    return this.iframe ? this.iframe : (this.element || (this.element = this.container()), this.iframe = document.createElement("iframe"), this.iframe.id = this.id, this.iframe.scrolling = "no", this.iframe.style.overflow = "hidden", this.iframe.setAttribute("seamless", "seamless"), this.iframe.style.border = "none", this.iframe.sandbox = "allow-same-origin", this.settings.allowScriptedContent && (this.iframe.sandbox += " allow-scripts"), this.settings.allowPopups && (this.iframe.sandbox += " allow-popups"), this.iframe.setAttribute("enable-annotation", "true"), this.resizing = true, this.element.style.visibility = "hidden", this.iframe.style.visibility = "hidden", this.iframe.style.width = "0", this.iframe.style.height = "0", this._width = 0, this._height = 0, this.element.setAttribute("ref", String(this.index)), this.added = true, this.elementBounds = U(this.element), "srcdoc" in this.iframe ? this.supportsSrcdoc = true : this.supportsSrcdoc = false, this.settings.method || (this.settings.method = this.supportsSrcdoc ? "srcdoc" : "write"), this.iframe);
  }
  render(t, e) {
    var s;
    this.create(), this.size(), typeof AbortController < "u" && !this._abortController && (this._abortController = new AbortController());
    const i = (s = this._abortController) == null ? void 0 : s.signal;
    return this.sectionRender || (this.sectionRender = this.section.render(t, i)), this.sectionRender.then((n) => i != null && i.aborted ? Promise.reject(new DOMException("Aborted", "AbortError")) : this.load(n)).then(() => {
      const n = this.contents.writingMode();
      let r;
      return this.settings.flow === "scrolled" ? r = n.startsWith("vertical") ? "horizontal" : "vertical" : r = n.startsWith("vertical") ? "vertical" : "horizontal", n.startsWith("vertical") && this.settings.flow === "paginated" && (this.layout.delta = this.layout.height), this.setAxis(r), this.emit(g.VIEWS.AXIS, r), this.setWritingMode(n), this.emit(g.VIEWS.WRITING_MODE, n), this.layout.format(this.contents, this.section, this.axis), this.addListeners(), new Promise((o, h) => {
        this.expand(), this.settings.forceRight && (this.element.style.marginLeft = this.width() + "px"), o();
      });
    }, (n) => (this.sectionRender = void 0, i != null && i.aborted || n.name === "AbortError" ? Promise.reject(n) : (this.emit(g.VIEWS.LOAD_ERROR, n), new Promise((r, o) => {
      o(n);
    })))).then(() => {
      this.emit(g.VIEWS.RENDERED, this.section);
    });
  }
  reset() {
    this.iframe && (this.iframe.style.width = "0", this.iframe.style.height = "0", this._width = 0, this._height = 0, this._textWidth = void 0, this._contentWidth = void 0, this._textHeight = void 0, this._contentHeight = void 0), this._contentDirty = true, this._needsReframe = true;
  }
  // Determine locks base on settings
  size(t, e) {
    const i = t || this.settings.width, s = e || this.settings.height;
    this.isFixedLayout ? this.lock("both", i, s) : this.settings.axis === "horizontal" ? this.lock("height", i, s) : this.lock("width", i, s), this.settings.width = i, this.settings.height = s;
  }
  // Lock an axis to element dimensions, taking borders into account
  lock(t, e, i) {
    const s = Y(this.element);
    let n;
    this.iframe ? n = Y(this.iframe) : n = { width: 0, height: 0 }, t === "width" && S(e) && (this.lockedWidth = e - s.width - n.width), t === "height" && S(i) && (this.lockedHeight = i - s.height - n.height), t === "both" && S(e) && S(i) && (this.lockedWidth = e - s.width - n.width, this.lockedHeight = i - s.height - n.height), this.displayed && this.iframe && this.expand();
  }
  // Resize a single axis based on content dimensions
  expand(t) {
    let e = this.lockedWidth, i = this.lockedHeight, s;
    !this.iframe || this._expanding || (this._expanding = true, this.isFixedLayout ? (e = this.layout.columnWidth, i = this.layout.height) : this.settings.axis === "horizontal" ? (!this._contentDirty && this._textWidth !== void 0 ? e = this._textWidth : (e = this.contents.textWidth(), this._textWidth = e, this._contentDirty = false), e % this.layout.pageWidth > 0 && (e = Math.ceil(e / this.layout.pageWidth) * this.layout.pageWidth), this.settings.forceEvenPages && (s = e / this.layout.pageWidth, this.layout.divisor > 1 && this.layout.name === "reflowable" && s % 2 > 0 && (e += this.layout.pageWidth))) : this.settings.axis === "vertical" && (!this._contentDirty && this._textHeight !== void 0 ? i = this._textHeight : (i = this.contents.textHeight(), this._textHeight = i, this._contentDirty = false), this.settings.flow === "paginated" && i % this.layout.height > 0 && (i = Math.ceil(i / this.layout.height) * this.layout.height)), (this._needsReframe || e !== this._width || i !== this._height) && this.reframe(e, i), this._expanding = false);
  }
  reframe(t, e) {
    S(t) && (this.element.style.width = t + "px", this.iframe.style.width = t + "px", this._width = t), S(e) && (this.element.style.height = e + "px", this.iframe.style.height = e + "px", this._height = e);
    const i = this.prevBounds ? t - this.prevBounds.width : t, s = this.prevBounds ? e - this.prevBounds.height : e, n = {
      width: t,
      height: e,
      widthDelta: i,
      heightDelta: s
    };
    this.pane && this.pane.render(), Object.keys(this.marks).length > 0 && requestAnimationFrame(() => {
      let r;
      for (const o in this.marks)
        Object.prototype.hasOwnProperty.call(this.marks, o) && (r = this.marks[o], this.placeMark(r.element, r.range));
    }), this.onResize(this, n), this.emit(g.VIEWS.RESIZED, n), this.prevBounds = n, this.elementBounds = U(this.element);
  }
  load(t) {
    const e = new T(), i = e.promise;
    if (!this.iframe)
      return e.reject(new Error("No Iframe Available")), i;
    this._loading = e;
    const s = (n) => {
      this.onLoad(n, e);
    };
    if (this.settings.method === "blobUrl")
      this.iframe.onload = s, this.blobUrl && q(this.blobUrl), this.blobUrl = nt(t, "application/xhtml+xml"), this.iframe.src = this.blobUrl, this.element.appendChild(this.iframe);
    else if (this.settings.method === "srcdoc")
      this.iframe.onload = s, this.iframe.srcdoc = t, this.element.appendChild(this.iframe);
    else {
      if (this.element.appendChild(this.iframe), this.document = this.iframe.contentDocument, !this.document)
        return this._loading = void 0, e.reject(new Error("No Document Available")), i;
      this.iframe.onload = s, this.document.open(), this.document.write(t), this.document.close();
    }
    return i;
  }
  onLoad(t, e) {
    this.window = this.iframe.contentWindow, this.document = this.iframe.contentDocument, this.contents = new dt(this.document, this.document.body, this.section.cfiBase, this.section.index), this.rendering = false;
    let i = this.document.querySelector("link[rel='canonical']");
    i ? i.setAttribute("href", this.section.canonical) : (i = this.document.createElement("link"), i.setAttribute("rel", "canonical"), i.setAttribute("href", this.section.canonical), this.document.querySelector("head").appendChild(i)), this.contents.on(g.CONTENTS.EXPAND, () => {
      this.displayed && this.iframe && (this._contentDirty = true, this.expand(), this.contents && this.layout.format(this.contents, this.section));
    }), this.contents.on(g.CONTENTS.RESIZE, (s) => {
      this.displayed && this.iframe && (this._textWidth = s.width, this._textHeight = s.height, this._contentDirty = false, this.expand(), this.contents && this.layout.format(this.contents, this.section));
    }), this._loading = void 0, e.resolve(this.contents);
  }
  setLayout(t) {
    this.layout = t, this.contents && (this.layout.format(this.contents, this.section), this._contentDirty = true, this.expand());
  }
  setAxis(t) {
    this.settings.axis = t, t === "horizontal" ? this.element.style.flex = "none" : this.element.style.flex = "initial", this.size();
  }
  setWritingMode(t) {
    this.writingMode = t;
  }
  addListeners() {
  }
  removeListeners() {
    this.contents && (this.contents.off(g.CONTENTS.EXPAND), this.contents.off(g.CONTENTS.RESIZE));
  }
  /** True while a display() is in flight — rendered but not yet displayed. */
  get displaying() {
    return this._displaying !== void 0;
  }
  display(t) {
    if (this.displayed)
      return Promise.resolve(this);
    if (this._displaying)
      return this._displaying;
    const e = new T();
    return this._displaying = e.promise, this.render(t).then(() => {
      this.displayed = true, this._displaying = void 0, e.resolve(this), this.emit(g.VIEWS.DISPLAYED, this), this.onDisplayed(this);
    }).catch((i) => {
      this._displaying = void 0, e.reject(i);
    }), e.promise;
  }
  show() {
    this.element.style.visibility = "visible", this.iframe && (this.iframe.style.visibility = "visible", this.iframe.style.transform = "translateZ(0)", this.iframe.offsetWidth, this.iframe.style.transform = ""), this.emit(g.VIEWS.SHOWN, this);
  }
  hide() {
    this.element.style.visibility = "hidden", this.iframe.style.visibility = "hidden", this.stopExpanding = true, this.emit(g.VIEWS.HIDDEN, this);
  }
  offset() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }
  width() {
    return this._width;
  }
  height() {
    return this._height;
  }
  position() {
    return this.element.getBoundingClientRect();
  }
  locationOf(t) {
    this.iframe.getBoundingClientRect();
    const e = this.contents.locationOf(t, this.settings.ignoreClass);
    return {
      left: e.left,
      top: e.top
    };
  }
  onDisplayed(t) {
  }
  onResize(t, e) {
  }
  bounds(t) {
    return (t || !this.elementBounds) && (this.elementBounds = U(this.element)), this.elementBounds;
  }
  highlight(t, e = {}, i, s = "epubjs-hl", n = {}) {
    if (!this.contents)
      return;
    const r = Object.assign({ fill: "yellow", "fill-opacity": "0.3", "mix-blend-mode": "multiply" }, n), o = this.contents.range(t), h = (d) => {
      this.emit(g.VIEWS.MARK_CLICKED, t, e);
    };
    e.epubcfi = t, this.pane || (this.pane = new Ft(this.iframe, this.element));
    const l = new de(o, s, e, r);
    let c;
    try {
      c = this.pane.addMark(l);
    } catch (d) {
      console.error("Failed to add highlight for", t, d);
      return;
    }
    return this.highlights[t] = { mark: c, element: c.element, listeners: [h, i] }, c.element.setAttribute("ref", s), c.element.addEventListener("click", h), c.element.addEventListener("touchstart", h), i && (c.element.addEventListener("click", i), c.element.addEventListener("touchstart", i)), c;
  }
  underline(t, e = {}, i, s = "epubjs-ul", n = {}) {
    if (!this.contents)
      return;
    const r = Object.assign({ stroke: "black", "stroke-opacity": "0.3", "mix-blend-mode": "multiply" }, n), o = this.contents.range(t), h = (d) => {
      this.emit(g.VIEWS.MARK_CLICKED, t, e);
    };
    e.epubcfi = t, this.pane || (this.pane = new Ft(this.iframe, this.element));
    const l = new ei(o, s, e, r);
    let c;
    try {
      c = this.pane.addMark(l);
    } catch (d) {
      console.error("Failed to add underline for", t, d);
      return;
    }
    return this.underlines[t] = { mark: c, element: c.element, listeners: [h, i] }, c.element.setAttribute("ref", s), c.element.addEventListener("click", h), c.element.addEventListener("touchstart", h), i && (c.element.addEventListener("click", i), c.element.addEventListener("touchstart", i)), c;
  }
  mark(t, e = {}, i) {
    if (!this.contents)
      return;
    if (t in this.marks)
      return this.marks[t];
    let s = this.contents.range(t);
    if (!s)
      return;
    const n = s.commonAncestorContainer, r = n.nodeType === 1 ? n : n.parentNode, o = (l) => {
      this.emit(g.VIEWS.MARK_CLICKED, t, e);
    };
    s.collapsed && n.nodeType === 1 ? (s = new Range(), s.selectNodeContents(n)) : s.collapsed && (s = new Range(), s.selectNodeContents(r));
    const h = this.document.createElement("a");
    return h.setAttribute("ref", "epubjs-mk"), h.style.position = "absolute", h.dataset.epubcfi = t, e && Object.keys(e).forEach((l) => {
      h.dataset[l] = e[l];
    }), i && (h.addEventListener("click", i), h.addEventListener("touchstart", i)), h.addEventListener("click", o), h.addEventListener("touchstart", o), this.placeMark(h, s), this.element.appendChild(h), this.marks[t] = { element: h, range: s, listeners: [o, i] }, r;
  }
  placeMark(t, e) {
    let i, s, n;
    if (this.isFixedLayout || this.settings.axis !== "horizontal") {
      const r = e.getBoundingClientRect();
      i = r.top, s = r.right;
    } else {
      const r = e.getClientRects();
      let o;
      for (let h = 0; h !== r.length; h++)
        o = r[h], (!n || o.left < n) && (n = o.left, s = Math.ceil(n / this.layout.props.pageWidth) * this.layout.props.pageWidth - this.layout.gap / 2, i = o.top);
    }
    t.style.top = `${i}px`, t.style.left = `${s}px`;
  }
  unhighlight(t) {
    if (t in this.highlights) {
      const e = this.highlights[t];
      this.pane.removeMark(e.mark), e.listeners.forEach((i) => {
        i && (e.element.removeEventListener("click", i), e.element.removeEventListener("touchstart", i));
      }), delete this.highlights[t];
    }
  }
  ununderline(t) {
    if (t in this.underlines) {
      const e = this.underlines[t];
      this.pane.removeMark(e.mark), e.listeners.forEach((i) => {
        i && (e.element.removeEventListener("click", i), e.element.removeEventListener("touchstart", i));
      }), delete this.underlines[t];
    }
  }
  unmark(t) {
    if (t in this.marks) {
      const e = this.marks[t];
      this.element.removeChild(e.element), e.listeners.forEach((i) => {
        i && (e.element.removeEventListener("click", i), e.element.removeEventListener("touchstart", i));
      }), delete this.marks[t];
    }
  }
  destroy() {
    this._abortController && (this._abortController.abort(), this._abortController = void 0), this.iframe && (this.iframe.onload = null), this._loading && (this._loading.reject(new DOMException("Aborted", "AbortError")), this._loading = void 0), this._displaying = void 0, this.sectionRender = void 0;
    for (const t in this.highlights)
      this.unhighlight(t);
    for (const t in this.underlines)
      this.ununderline(t);
    for (const t in this.marks)
      this.unmark(t);
    this.blobUrl && (q(this.blobUrl), this.blobUrl = void 0), this.displayed && (this.displayed = false, this.removeListeners(), this.contents.destroy(), this.stopExpanding = true, this.element.removeChild(this.iframe), this.pane && (this.pane.element.remove(), this.pane = void 0), this.iframe = void 0, this.contents = void 0, this.section.unload(), this._textWidth = void 0, this._textHeight = void 0, this._width = void 0, this._height = void 0), this.__listeners = {};
  }
};
D(ue.prototype);
function ii() {
  let a = "reverse";
  const t = si();
  return document.body.appendChild(t), t.scrollLeft > 0 ? a = "default" : typeof Element < "u" && typeof Element.prototype.scrollIntoView == "function" ? (t.children[0].children[1].scrollIntoView(), t.scrollLeft < 0 && (a = "negative")) : (t.scrollLeft = 1, t.scrollLeft === 0 && (a = "negative")), document.body.removeChild(t), a;
}
function si() {
  const a = document.createElement("div");
  a.dir = "rtl", a.style.position = "fixed", a.style.width = "1px", a.style.height = "1px", a.style.top = "0px", a.style.left = "0px", a.style.overflow = "hidden";
  const t = document.createElement("div");
  t.style.width = "2px";
  const e = document.createElement("span");
  e.style.width = "1px", e.style.display = "inline-block";
  const i = document.createElement("span");
  return i.style.width = "1px", i.style.display = "inline-block", t.appendChild(e), t.appendChild(i), a.appendChild(t), a;
}
function ni(a, t) {
  let e = null, i = 0;
  return function(...s) {
    const n = Date.now(), r = t - (n - i);
    r <= 0 || r > t ? (e && (clearTimeout(e), e = null), i = n, a.call(this, ...s)) : e || (e = setTimeout(() => {
      i = Date.now(), e = null, a.call(this, ...s);
    }, r));
  };
}
var ri = class {
  constructor(t) {
    this.settings = t || {}, this.id = "epubjs-container-" + at(), this.container = this.create(this.settings), this.settings.hidden && (this.wrapper = this.wrap(this.container));
  }
  /*
  * Creates an element to render to.
  * Resizes to passed width and height or to the elements size
  */
  create(t) {
    let e = t.height, i = t.width;
    const s = t.overflow || false, n = t.axis || "vertical", r = t.direction;
    L(this.settings, t), t.height && S(t.height) && (e = t.height + "px"), t.width && S(t.width) && (i = t.width + "px");
    const o = document.createElement("div");
    return o.id = this.id, o.classList.add("epub-container"), o.style.wordSpacing = "0", o.style.lineHeight = "0", o.style.verticalAlign = "top", o.style.position = "relative", o.style.overflowAnchor = "none", n === "horizontal" && (o.style.display = "flex", o.style.flexDirection = "row", o.style.flexWrap = "nowrap"), i && (o.style.width = i), e && (o.style.height = e), s && (s === "scroll" && n === "vertical" ? (o.style.overflowY = s, o.style.overflowX = "hidden") : s === "scroll" && n === "horizontal" ? (o.style.overflowY = "hidden", o.style.overflowX = s) : o.style.overflow = s), r && (o.dir = r, o.style.direction = r), r && this.settings.fullsize && (document.body.style.direction = r), o;
  }
  wrap(t) {
    const e = document.createElement("div");
    return e.style.visibility = "hidden", e.style.overflow = "hidden", e.style.width = "0", e.style.height = "0", e.appendChild(t), e;
  }
  getElement(t) {
    let e = null;
    if (Yt(t) ? e = t : typeof t == "string" && (e = document.getElementById(t)), !e)
      throw new Error("Not an Element");
    return e;
  }
  attachTo(t) {
    const e = this.getElement(t);
    let i;
    if (e)
      return this.settings.hidden ? i = this.wrapper : i = this.container, e.appendChild(i), this.element = e, e;
  }
  getContainer() {
    return this.container;
  }
  onResize(t) {
    (!S(this.settings.width) || !S(this.settings.height)) && (this.resizeFunc = ni(t, 50), window.addEventListener("resize", this.resizeFunc, false));
  }
  onOrientationChange(t) {
    this.orientationChangeFunc = t, window.addEventListener("orientationchange", this.orientationChangeFunc, false);
  }
  size(t, e) {
    let i;
    const s = t || this.settings.width, n = e || this.settings.height;
    t === null ? (i = this.element.getBoundingClientRect(), i.width && (t = Math.floor(i.width), this.container.style.width = t + "px")) : S(t) ? this.container.style.width = t + "px" : t && (this.container.style.width = t), e === null ? (i = i || this.element.getBoundingClientRect(), i.height && (e = i.height, this.container.style.height = e + "px")) : S(e) ? this.container.style.height = e + "px" : e && (this.container.style.height = e), S(t) || (t = this.container.clientWidth), S(e) || (e = this.container.clientHeight), this.containerStyles = window.getComputedStyle(this.container), this.containerPadding = {
      left: parseFloat(this.containerStyles.paddingLeft) || 0,
      right: parseFloat(this.containerStyles.paddingRight) || 0,
      top: parseFloat(this.containerStyles.paddingTop) || 0,
      bottom: parseFloat(this.containerStyles.paddingBottom) || 0
    };
    const r = xt(), o = window.getComputedStyle(document.body), h = {
      left: parseFloat(o.paddingLeft) || 0,
      right: parseFloat(o.paddingRight) || 0,
      top: parseFloat(o.paddingTop) || 0,
      bottom: parseFloat(o.paddingBottom) || 0
    };
    return s || (t = r.width - h.left - h.right), (this.settings.fullsize && !n || !n) && (e = r.height - h.top - h.bottom), {
      width: t - this.containerPadding.left - this.containerPadding.right,
      height: e - this.containerPadding.top - this.containerPadding.bottom
    };
  }
  bounds() {
    let t;
    return this.container.style.overflow !== "visible" && (t = this.container && this.container.getBoundingClientRect()), !t || !t.width || !t.height ? xt() : t;
  }
  getSheet() {
    const t = document.createElement("style");
    return t.appendChild(document.createTextNode("")), document.head.appendChild(t), t.sheet;
  }
  addStyleRules(t, e) {
    const i = "#" + this.id + " ";
    let s = "";
    this.sheet || (this.sheet = this.getSheet()), e.forEach(function(n) {
      for (const r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (s += r + ":" + n[r] + ";");
    }), this.sheet.insertRule(i + t + " {" + s + "}", 0);
  }
  axis(t) {
    t === "horizontal" ? (this.container.style.display = "flex", this.container.style.flexDirection = "row", this.container.style.flexWrap = "nowrap") : this.container.style.display = "block", this.settings.axis = t;
  }
  // orientation(orientation) {
  // 	if (orientation === "landscape") {
  //
  // 	} else {
  //
  // 	}
  //
  // 	this.orientation = orientation;
  // }
  direction(t) {
    this.container && (this.container.dir = t, this.container.style.direction = t), this.settings.fullsize && (document.body.style.direction = t), this.settings.dir = t;
  }
  overflow(t) {
    this.container && (t === "scroll" && this.settings.axis === "vertical" ? (this.container.style.overflowY = t, this.container.style.overflowX = "hidden") : t === "scroll" && this.settings.axis === "horizontal" ? (this.container.style.overflowY = "hidden", this.container.style.overflowX = t) : this.container.style.overflow = t), this.settings.overflow = t;
  }
  destroy() {
    this.element && (this.settings.hidden ? this.wrapper : this.container, this.element.contains(this.container) && this.element.removeChild(this.container), window.removeEventListener("resize", this.resizeFunc), window.removeEventListener("orientationchange", this.orientationChangeFunc));
  }
};
var oi = class {
  constructor(t) {
    this.container = t, this._views = [], this.length = 0, this.hidden = false;
  }
  all() {
    return this._views;
  }
  first() {
    return this._views[0];
  }
  last() {
    return this._views[this._views.length - 1];
  }
  indexOf(t) {
    return this._views.indexOf(t);
  }
  slice(...t) {
    return this._views.slice(...t);
  }
  get(t) {
    return this._views[t];
  }
  append(t) {
    return this._views.push(t), this.container && this.container.appendChild(t.element), this.length++, t;
  }
  prepend(t) {
    return this._views.unshift(t), this.container && this.container.insertBefore(t.element, this.container.firstChild), this.length++, t;
  }
  insert(t, e) {
    return this._views.splice(e, 0, t), this.container && (e < this.container.children.length ? this.container.insertBefore(t.element, this.container.children[e]) : this.container.appendChild(t.element)), this.length++, t;
  }
  remove(t) {
    const e = this._views.indexOf(t);
    e !== -1 && (this._views.splice(e, 1), this.destroy(t), this.length--);
  }
  destroy(t) {
    t.destroy(), this.container && this.container.removeChild(t.element);
  }
  // Iterators
  forEach(t) {
    return this._views.forEach(t);
  }
  clear() {
    let t;
    const e = this.length;
    if (this.length) {
      for (let i = 0; i < e; i++)
        t = this._views[i], this.destroy(t);
      this._views = [], this.length = 0;
    }
  }
  find(t) {
    let e;
    const i = this.length;
    for (let s = 0; s < i; s++)
      if (e = this._views[s], e.displayed && e.section.index === t.index)
        return e;
  }
  displayed() {
    const t = [];
    let e;
    const i = this.length;
    for (let s = 0; s < i; s++)
      e = this._views[s], e.displayed && t.push(e);
    return t;
  }
  show() {
    let t;
    const e = this.length;
    for (let i = 0; i < e; i++)
      t = this._views[i], t.displayed && t.show();
    this.hidden = false;
  }
  hide() {
    let t;
    const e = this.length;
    for (let i = 0; i < e; i++)
      t = this._views[i], t.displayed && t.hide();
    this.hidden = true;
  }
};
var ht = class {
  constructor(t) {
    this.name = "default", this.optsSettings = t.settings, this.View = t.view, this.request = t.request, this.renditionQueue = t.queue, this.q = new Pt(this), this.settings = L({}, {
      infinite: true,
      hidden: false,
      width: void 0,
      height: void 0,
      axis: void 0,
      writingMode: void 0,
      flow: "scrolled",
      ignoreClass: "",
      fullsize: void 0,
      allowScriptedContent: false,
      allowPopups: false
    }), L(this.settings, t.settings || {}), this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      method: this.settings.method,
      // srcdoc, blobUrl, write
      width: 0,
      height: 0,
      forceEvenPages: true,
      allowScriptedContent: this.settings.allowScriptedContent,
      allowPopups: this.settings.allowPopups
    }, this._measurer = new Ve(), this.rendered = false;
  }
  render(t, e) {
    const i = t.tagName;
    typeof this.settings.fullsize > "u" && i && (i.toLowerCase() === "body" || i.toLowerCase() === "html") && (this.settings.fullsize = true), this.settings.fullsize && (this.settings.overflow = "visible", this.overflow = this.settings.overflow), this.settings.size = e, this.settings.rtlScrollType = ii(), this.stage = new ri({
      width: e.width,
      height: e.height,
      overflow: this.overflow,
      hidden: this.settings.hidden,
      axis: this.settings.axis,
      fullsize: this.settings.fullsize,
      direction: this.settings.direction
    }), this.stage.attachTo(t), this.container = this.stage.getContainer(), this.views = new oi(this.container), this._bounds = this.bounds(), this._stageSize = this.stage.size(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.stage.onResize(() => this.onResized()), this.stage.onOrientationChange((s) => this.onOrientationChange(s)), this.addEventListeners(), this.layout && this.updateLayout(), this.rendered = true;
  }
  addEventListeners() {
    let t;
    this._onPageHide = (e) => {
      e.persisted || this.destroy();
    }, window.addEventListener("pagehide", this._onPageHide), this.settings.fullsize ? t = window : t = this.container, this._onScroll = this.onScroll.bind(this), t.addEventListener("scroll", this._onScroll, { passive: true }), typeof window < "u" && "onscrollend" in window && (this._onScrollEnd = () => {
      if (this.ignore) {
        this.ignore = false;
        return;
      }
      this.emit(g.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }, t.addEventListener("scrollend", this._onScrollEnd));
  }
  removeEventListeners() {
    let t;
    this.settings.fullsize ? t = window : t = this.container, t.removeEventListener("scroll", this._onScroll), this._onScroll = void 0, this._onScrollEnd && (t.removeEventListener("scrollend", this._onScrollEnd), this._onScrollEnd = void 0), window.removeEventListener("pagehide", this._onPageHide), this._onPageHide = void 0;
  }
  destroy() {
    clearTimeout(this.resizeTimeout), clearTimeout(this.afterScrolled), this.q.stop(), this.container && (this.clear(), this.removeEventListeners()), this.stage && this.stage.destroy(), this._measurer && this._measurer.destroy(), this.rendered = false, this.__listeners = {};
  }
  onOrientationChange(t) {
    var i;
    const { orientation: e } = window;
    (i = this.optsSettings) != null && i.resizeOnOrientationChange && this.resize(), this.emit(g.MANAGERS.ORIENTATION_CHANGE, e);
  }
  onResized(t) {
    this.resize();
  }
  resize(t, e, i) {
    const s = this.stage.size(t, e);
    this._stageSize && this._stageSize.width === s.width && this._stageSize.height === s.height || (this._stageSize = s, this._bounds = this.bounds(), this.clear(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.updateLayout(), this.emit(g.MANAGERS.RESIZED, {
      width: this._stageSize.width,
      height: this._stageSize.height
    }, i));
  }
  createView(t, e) {
    return new this.View(t, L(this.viewSettings, { forceRight: e }));
  }
  handleNextPrePaginated(t, e, i) {
    var n;
    let s;
    if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
      if (t || e.index === 0)
        return;
      if (s = (n = e.next) == null ? void 0 : n.call(e), s && !s.properties.includes("page-spread-left"))
        return i.call(this, s);
    }
  }
  display(t, e) {
    const i = new T(), s = i.promise;
    (e === t.href || S(e)) && (e = void 0);
    const n = this.views.find(t);
    if (n && t && this.layout.name !== "pre-paginated") {
      const o = n.offset();
      if (this.settings.direction === "ltr")
        this.scrollTo(o.left, o.top, true);
      else {
        const h = n.width();
        this.scrollTo(o.left + h, o.top, true);
      }
      if (e) {
        const h = n.locationOf(e), l = n.width();
        this.moveTo(h, l);
      }
      return i.resolve(), s;
    }
    this.clear();
    let r = false;
    return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && t.properties.includes("page-spread-right") && (r = true), this.add(t, r).then((o) => {
      if (e) {
        const h = o.locationOf(e), l = o.width();
        this.moveTo(h, l);
      }
    }).then(() => this.handleNextPrePaginated(r, t, this.add)).then(() => {
      this.views.show(), i.resolve();
    }).catch((o) => {
      i.reject(o);
    }), s;
  }
  /**
   * Report a display failure without letting it escape.
   * emit() runs listeners bare, so a throwing one would reject the very
   * promise this reporting exists to keep resolved.
   */
  reportDisplayError(t) {
    try {
      this.emit(g.MANAGERS.DISPLAY_ERROR, t);
    } catch {
    }
  }
  afterDisplayed(t) {
    this.emit(g.MANAGERS.ADDED, t);
  }
  afterResized(t) {
    this.emit(g.MANAGERS.RESIZE, t.section);
  }
  moveTo(t, e) {
    let i = 0, s = 0;
    this.isPaginated ? (i = Math.floor(t.left / this.layout.delta) * this.layout.delta, i + this.layout.delta > this.container.scrollWidth && (i = this.container.scrollWidth - this.layout.delta), s = Math.floor(t.top / this.layout.height) * this.layout.height, s + this.layout.height > this.container.scrollHeight && (s = this.container.scrollHeight - this.layout.height)) : s = t.top, this.settings.direction === "rtl" && (i = i + this.layout.delta, i = i - e), this.scrollTo(i, s, true);
  }
  add(t, e) {
    const i = this.createView(t, e);
    return this.views.append(i), i.onDisplayed = (s) => this.afterDisplayed(s), i.onResize = (s) => this.afterResized(s), i.on(g.VIEWS.AXIS, (s) => {
      this.updateAxis(s);
    }), i.on(g.VIEWS.WRITING_MODE, (s) => {
      this.updateWritingMode(s);
    }), i.display(this.request);
  }
  append(t, e) {
    const i = this.createView(t, e);
    return this.views.append(i), i.onDisplayed = (s) => this.afterDisplayed(s), i.onResize = (s) => this.afterResized(s), i.on(g.VIEWS.AXIS, (s) => {
      this.updateAxis(s);
    }), i.on(g.VIEWS.WRITING_MODE, (s) => {
      this.updateWritingMode(s);
    }), i.display(this.request);
  }
  prepend(t, e) {
    const i = this.createView(t, e);
    return i.on(g.VIEWS.RESIZED, (s) => {
      this.counter(s);
    }), this.views.prepend(i), i.onDisplayed = (s) => this.afterDisplayed(s), i.onResize = (s) => this.afterResized(s), i.on(g.VIEWS.AXIS, (s) => {
      this.updateAxis(s);
    }), i.on(g.VIEWS.WRITING_MODE, (s) => {
      this.updateWritingMode(s);
    }), i.display(this.request);
  }
  counter(t) {
    this.settings.axis === "vertical" ? this.scrollBy(0, t.heightDelta, true) : this.scrollBy(t.widthDelta, 0, true);
  }
  // resizeView(view) {
  //
  // 	if(this.settings.globalLayoutProperties.layout === "pre-paginated") {
  // 		view.lock("both", this.bounds.width, this.bounds.height);
  // 	} else {
  // 		view.lock("width", this.bounds.width, this.bounds.height);
  // 	}
  //
  // };
  next() {
    var s, n, r, o, h, l, c, d, u, f;
    let t, e;
    const i = this.settings.direction;
    if (this.views.length) {
      if (this.isPaginated && this.settings.axis === "horizontal" && (!i || i === "ltr"))
        if (this.scrollLeft = this.container.scrollLeft, e = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta, e <= this.container.scrollWidth)
          this.scrollBy(this.layout.delta, 0, true);
        else {
          const m = this.views.last();
          m && m.expand(), e = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta, e <= this.container.scrollWidth ? this.scrollBy(this.layout.delta, 0, true) : t = (n = m == null ? void 0 : (s = m.section).next) == null ? void 0 : n.call(s);
        }
      else if (this.isPaginated && this.settings.axis === "horizontal" && i === "rtl")
        if (this.scrollLeft = this.container.scrollLeft, this.settings.rtlScrollType === "default")
          if (e = this.container.scrollLeft, e > 0)
            this.scrollBy(this.layout.delta, 0, true);
          else {
            const m = this.views.last();
            m && m.expand(), e = this.container.scrollLeft, e > 0 ? this.scrollBy(this.layout.delta, 0, true) : t = (o = m == null ? void 0 : (r = m.section).next) == null ? void 0 : o.call(r);
          }
        else if (e = this.container.scrollLeft + this.layout.delta * -1, e > this.container.scrollWidth * -1)
          this.scrollBy(this.layout.delta, 0, true);
        else {
          const m = this.views.last();
          m && m.expand(), e = this.container.scrollLeft + this.layout.delta * -1, e > this.container.scrollWidth * -1 ? this.scrollBy(this.layout.delta, 0, true) : t = (l = m == null ? void 0 : (h = m.section).next) == null ? void 0 : l.call(h);
        }
      else if (this.isPaginated && this.settings.axis === "vertical")
        if (this.scrollTop = this.container.scrollTop, !(Math.abs(this.container.scrollHeight - this.container.clientHeight - this.container.scrollTop) < 1))
          this.scrollBy(0, this.layout.height, true);
        else {
          const p = this.views.last();
          p && p.expand(), Math.abs(this.container.scrollHeight - this.container.clientHeight - this.container.scrollTop) < 1 ? t = (d = p == null ? void 0 : (c = p.section).next) == null ? void 0 : d.call(c) : this.scrollBy(0, this.layout.height, true);
        }
      else
        t = (f = (u = this.views.last().section).next) == null ? void 0 : f.call(u);
      if (t) {
        this.clear(), this.updateLayout();
        let m = false;
        return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && t.properties.includes("page-spread-right") && (m = true), this.append(t, m).then(() => this.handleNextPrePaginated(m, t, this.append)).then(() => {
          !this.isPaginated && this.settings.axis === "horizontal" && this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" && this.scrollTo(this.container.scrollWidth, 0, true), this.views.show();
        }).catch((p) => this.reportDisplayError(p));
      }
    }
  }
  prev() {
    var s, n, r, o, h, l, c, d, u, f, m;
    let t, e;
    const i = this.settings.direction;
    if (this.views.length) {
      if (this.isPaginated && this.settings.axis === "horizontal" && (!i || i === "ltr"))
        if (this.scrollLeft = this.container.scrollLeft, e = this.container.scrollLeft, e > 0)
          this.scrollBy(-this.layout.delta, 0, true);
        else {
          const p = this.views.first();
          p && p.expand(), e = this.container.scrollLeft, e > 0 ? this.scrollBy(-this.layout.delta, 0, true) : t = (n = p == null ? void 0 : (s = p.section).prev) == null ? void 0 : n.call(s);
        }
      else if (this.isPaginated && this.settings.axis === "horizontal" && i === "rtl")
        if (this.scrollLeft = this.container.scrollLeft, this.settings.rtlScrollType === "default")
          if (e = this.container.scrollLeft + this.container.offsetWidth, e < this.container.scrollWidth)
            this.scrollBy(-this.layout.delta, 0, true);
          else {
            const p = this.views.first();
            p && p.expand(), e = this.container.scrollLeft + this.container.offsetWidth, e < this.container.scrollWidth ? this.scrollBy(-this.layout.delta, 0, true) : t = (o = p == null ? void 0 : (r = p.section).prev) == null ? void 0 : o.call(r);
          }
        else if (e = this.container.scrollLeft, e < 0)
          this.scrollBy(-this.layout.delta, 0, true);
        else {
          const p = this.views.first();
          p && p.expand(), e = this.container.scrollLeft, e < 0 ? this.scrollBy(-this.layout.delta, 0, true) : t = (l = p == null ? void 0 : (h = p.section).prev) == null ? void 0 : l.call(h);
        }
      else if (this.isPaginated && this.settings.axis === "vertical")
        if (this.scrollTop = this.container.scrollTop, this.container.scrollTop > 0)
          this.scrollBy(0, -this.layout.height, true);
        else {
          const v = this.views.first();
          v && v.expand(), this.container.scrollTop > 0 ? this.scrollBy(0, -this.layout.height, true) : t = (d = v == null ? void 0 : (c = v.section).prev) == null ? void 0 : d.call(c);
        }
      else
        t = (f = (u = this.views.first().section).prev) == null ? void 0 : f.call(u);
      if (t) {
        this.clear(), this.updateLayout();
        let p = false;
        return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && typeof ((m = t.prev) == null ? void 0 : m.call(t)) != "object" && (p = true), this.prepend(t, p).then(() => {
          var v;
          if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
            const y = (v = t.prev) == null ? void 0 : v.call(t);
            if (y)
              return this.prepend(y);
          }
        }).then(() => {
          this.isPaginated && this.settings.axis === "horizontal" && (this.settings.direction === "rtl" ? this.settings.rtlScrollType === "default" ? this.scrollTo(0, 0, true) : this.scrollTo(this.container.scrollWidth * -1 + this.layout.delta, 0, true) : this.scrollTo(this.container.scrollWidth - this.layout.delta, 0, true)), this.views.show();
        }).catch((v) => this.reportDisplayError(v));
      }
    }
  }
  current() {
    const t = this.visible();
    return t.length ? t[t.length - 1] : null;
  }
  clear() {
    this.views && (this._measurer && this.views.forEach((t) => {
      var e;
      (e = t == null ? void 0 : t.document) != null && e.body && this._measurer.invalidate(t.document.body);
    }), this.views.hide(), this.scrollTo(0, 0, true), this.views.clear());
  }
  currentLocation() {
    return this.updateLayout(), this.isPaginated && this.settings.axis === "horizontal" ? this.location = this.paginatedLocation() : this.location = this.scrolledLocation(), this.location;
  }
  scrolledLocation() {
    const t = this.visible(), e = this.container.getBoundingClientRect(), i = e.height < window.innerHeight ? e.height : window.innerHeight, s = e.width < window.innerWidth ? e.width : window.innerWidth, n = this.settings.axis === "vertical";
    this.settings.direction;
    let r = 0;
    const o = 0;
    return this.settings.fullsize && (r = n ? window.scrollY : window.scrollX), t.map((l) => {
      const c = l.section.index, d = l.section.href, u = l.position(), f = l.width(), m = l.height();
      let p, v, y, E;
      n ? (p = r + e.top - u.top + o, v = p + i - o, E = this.layout.count(m, i).pages, y = i) : (p = r + e.left - u.left + o, v = p + s - o, E = this.layout.count(f, s).pages, y = s);
      let x = Math.ceil(p / y), w = [], C = Math.ceil(v / y);
      if (this.settings.direction === "rtl" && !n) {
        const N = x;
        x = E - C, C = E - N;
      }
      w = [];
      for (let N = x; N <= C; N++) {
        const B = N + 1;
        w.push(B);
      }
      const R = this.mapping.page(l.contents, l.section.cfiBase, p, v);
      return {
        index: c,
        href: d,
        pages: w,
        totalPages: E,
        mapping: R
      };
    });
  }
  paginatedLocation() {
    const t = this.visible(), e = this.container.getBoundingClientRect();
    let i = 0, s = 0;
    return this.settings.fullsize && (i = window.scrollX), t.map((r) => {
      const o = r.section.index, h = r.section.href;
      let l;
      const c = r.position(), d = r.width();
      let u, f, m;
      this.settings.direction === "rtl" ? (l = e.right - i, m = Math.min(Math.abs(l - c.left), this.layout.width) - s, f = c.width - (c.right - l) - s, u = f - m) : (l = e.left + i, m = Math.min(c.right - l, this.layout.width) - s, u = l - c.left + s, f = u + m), s += m;
      const p = this.mapping.page(r.contents, r.section.cfiBase, u, f), v = this.layout.count(d).pages;
      let y = Math.floor(u / this.layout.pageWidth);
      const E = [];
      let x = Math.floor(f / this.layout.pageWidth);
      if (y < 0 && (y = 0, x = x + 1), this.settings.direction === "rtl") {
        const w = y;
        y = v - x, x = v - w;
      }
      for (let w = y + 1; w <= x; w++) {
        const C = w;
        E.push(C);
      }
      return {
        index: o,
        href: h,
        pages: E,
        totalPages: v,
        mapping: p
      };
    });
  }
  isVisible(t, e, i, s) {
    const n = t.position(), r = s || this.bounds();
    return this.settings.axis === "horizontal" && n.right > r.left - e && n.left < r.right + i ? true : this.settings.axis === "vertical" && n.bottom > r.top - e && n.top < r.bottom + i;
  }
  visible() {
    const t = this.bounds(), e = this.views.displayed(), i = e.length, s = [];
    let n, r;
    for (let o = 0; o < i; o++)
      r = e[o], n = this.isVisible(r, 0, 0, t), n === true && s.push(r);
    return s;
  }
  scrollBy(t, e, i) {
    const s = this.settings.direction === "rtl" ? -1 : 1;
    i && (this.ignore = true), this.settings.fullsize ? window.scrollBy(t * s, e * s) : (t && (this.container.scrollLeft += t * s), e && (this.container.scrollTop += e)), this._hasScrolled = true;
  }
  scrollTo(t, e, i) {
    i && (this.ignore = true), this.settings.fullsize ? window.scrollTo(t, e) : (this.container.scrollLeft = t, this.container.scrollTop = e), this._hasScrolled = true;
  }
  onScroll() {
    let t, e;
    this.settings.fullsize ? (t = window.scrollY, e = window.scrollX) : (t = this.container.scrollTop, e = this.container.scrollLeft), this.scrollTop = t, this.scrollLeft = e, this.ignore ? this._onScrollEnd || (this.ignore = false) : (this.emit(g.MANAGERS.SCROLL, {
      top: t,
      left: e
    }), this._onScrollEnd || (clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout(() => {
      this.emit(g.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }, 20)));
  }
  bounds() {
    return this.stage.bounds();
  }
  applyLayout(t) {
    this.layout = t, this.updateLayout(), this.views && this.views.length > 0 && this.layout.name === "pre-paginated" && this.display(this.views.first().section).catch(() => {
    });
  }
  updateLayout() {
    this.stage && (this._stageSize = this.stage.size(), this.isPaginated ? (this.layout.calculate(
      this._stageSize.width,
      this._stageSize.height,
      this.settings.gap
    ), this.settings.offset = this.layout.delta / this.layout.divisor) : this.layout.calculate(this._stageSize.width, this._stageSize.height), this.viewSettings.width = this.layout.width, this.viewSettings.height = this.layout.height, this.setLayout(this.layout));
  }
  setLayout(t) {
    this.viewSettings.layout = t, this.mapping = new Rt(t.props, this.settings.direction, this.settings.axis, false, this._measurer), this.views && this.views.forEach((e) => {
      e && e.setLayout(t);
    });
  }
  updateWritingMode(t) {
    this.writingMode = t;
  }
  updateAxis(t, e) {
    !e && t === this.settings.axis || (this.settings.axis = t, this.stage && this.stage.axis(t), this.viewSettings.axis = t, this.mapping && (this.mapping = new Rt(this.layout.props, this.settings.direction, this.settings.axis, false, this._measurer)), this.layout && (t === "vertical" ? this.layout.spread("none") : this.layout.spread(this.layout.settings.spread)));
  }
  updateFlow(t, e = "auto") {
    const i = t === "paginated" || t === "auto";
    this.isPaginated = i, t === "scrolled-doc" || t === "scrolled-continuous" || t === "scrolled" ? this.updateAxis("vertical") : this.updateAxis("horizontal"), this.viewSettings.flow = t, this.settings.overflow ? this.overflow = this.settings.overflow : this.overflow = i ? "hidden" : e, this.stage && this.stage.overflow(this.overflow), this.updateLayout();
  }
  getContents() {
    const t = [];
    return this.views && this.views.forEach((e) => {
      const i = e && e.contents;
      i && t.push(i);
    }), t;
  }
  direction(t = "ltr") {
    this.settings.direction = t, this.stage && this.stage.direction(t), this.viewSettings.direction = t, this.updateLayout();
  }
  isRendered() {
    return this.rendered;
  }
};
D(ht.prototype);
var hi = {
  easeInCubic: function(a) {
    return Math.pow(a, 3);
  }
};
var Lt = class {
  constructor(t, e) {
    this.settings = L({
      duration: 80,
      minVelocity: 0.2,
      minDistance: 10,
      easing: hi.easeInCubic
    }, e || {}), this._supportsTouch = this.supportsTouch(), this._supportsTouch && this.setup(t);
  }
  setup(t) {
    this.manager = t, this.layout = this.manager.layout, this.fullsize = this.manager.settings.fullsize ?? false, this.fullsize ? (this.element = this.manager.stage.element, this.scroller = window, this.disableScroll()) : (this.element = this.manager.stage.container, this.scroller = this.element), this.manager.settings.offset = this.layout.width, this.manager.settings.afterScrolledTimeout = this.settings.duration * 2, this.isVertical = this.manager.settings.axis === "vertical", !(!this.manager.isPaginated || this.isVertical) && (this.touchCanceler = false, this.resizeCanceler = false, this.snapping = false, this.scrollLeft, this.scrollTop, this.startTouchX = void 0, this.startTouchY = void 0, this.startTime = void 0, this.endTouchX = void 0, this.endTouchY = void 0, this.endTime = void 0, this.addListeners());
  }
  supportsTouch() {
    return "ontouchstart" in window || "DocumentTouch" in window;
  }
  disableScroll() {
    this.element.style.overflow = "hidden";
  }
  enableScroll() {
    this.element.style.overflow = "";
  }
  addListeners() {
    this._onResize = this.onResize.bind(this), window.addEventListener("resize", this._onResize), this._onScroll = this.onScroll.bind(this), this.scroller.addEventListener("scroll", this._onScroll, { passive: true }), this._onTouchStart = this.onTouchStart.bind(this), this.scroller.addEventListener("touchstart", this._onTouchStart, { passive: true }), this.on("touchstart", this._onTouchStart), this._onTouchMove = this.onTouchMove.bind(this), this.scroller.addEventListener("touchmove", this._onTouchMove, { passive: true }), this.on("touchmove", this._onTouchMove), this._onTouchEnd = this.onTouchEnd.bind(this), this.scroller.addEventListener("touchend", this._onTouchEnd, { passive: true }), this.on("touchend", this._onTouchEnd), this._afterDisplayed = this.afterDisplayed.bind(this), this.manager.on(g.MANAGERS.ADDED, this._afterDisplayed);
  }
  removeListeners() {
    window.removeEventListener("resize", this._onResize), this._onResize = void 0, this.scroller.removeEventListener("scroll", this._onScroll), this._onScroll = void 0, this.scroller.removeEventListener("touchstart", this._onTouchStart, { passive: true }), this.off("touchstart", this._onTouchStart), this._onTouchStart = void 0, this.scroller.removeEventListener("touchmove", this._onTouchMove, { passive: true }), this.off("touchmove", this._onTouchMove), this._onTouchMove = void 0, this.scroller.removeEventListener("touchend", this._onTouchEnd, { passive: true }), this.off("touchend", this._onTouchEnd), this._onTouchEnd = void 0, this.manager.off(g.MANAGERS.ADDED, this._afterDisplayed), this._afterDisplayed = void 0;
  }
  afterDisplayed(t) {
    const e = t.contents;
    if (!e) return;
    const i = e;
    ["touchstart", "touchmove", "touchend"].forEach((s) => {
      i.on(s, (n) => this.triggerViewEvent(n, i));
    });
  }
  triggerViewEvent(t, e) {
    this.emit(t.type, t, e);
  }
  onScroll(t) {
    this.scrollLeft = this.fullsize ? window.scrollX : this.scroller.scrollLeft, this.scrollTop = this.fullsize ? window.scrollY : this.scroller.scrollTop;
  }
  onResize(t) {
    this.resizeCanceler = true;
  }
  onTouchStart(t) {
    const { screenX: e, screenY: i } = t.touches[0];
    this.fullsize && this.enableScroll(), this.touchCanceler = true, this.startTouchX || (this.startTouchX = e, this.startTouchY = i, this.startTime = this.now()), this.endTouchX = e, this.endTouchY = i, this.endTime = this.now();
  }
  onTouchMove(t) {
    const { screenX: e, screenY: i } = t.touches[0], s = Math.abs(i - this.endTouchY);
    this.touchCanceler = true, !this.fullsize && s < 10 && (this.element.scrollLeft -= e - this.endTouchX), this.endTouchX = e, this.endTouchY = i, this.endTime = this.now();
  }
  onTouchEnd(t) {
    this.fullsize && this.disableScroll(), this.touchCanceler = false;
    const e = this.wasSwiped();
    e !== 0 ? this.snap(e) : this.snap(), this.startTouchX = void 0, this.startTouchY = void 0, this.startTime = void 0, this.endTouchX = void 0, this.endTouchY = void 0, this.endTime = void 0;
  }
  wasSwiped() {
    const t = this.layout.pageWidth * this.layout.divisor, e = this.endTouchX - this.startTouchX, i = Math.abs(e), s = this.endTime - this.startTime, n = e / s, r = this.settings.minVelocity;
    return i <= this.settings.minDistance || i >= t ? 0 : n > r ? -1 : n < -r ? 1 : 0;
  }
  needsSnap() {
    const t = this.scrollLeft, e = this.layout.pageWidth * this.layout.divisor;
    return t % e !== 0;
  }
  snap(t = 0) {
    const e = this.scrollLeft, i = this.layout.pageWidth * this.layout.divisor;
    let s = Math.round(e / i) * i;
    return t && (s += t * i), this.smoothScrollTo(s);
  }
  smoothScrollTo(t) {
    const e = this.scrollLeft, i = this.now(), s = this.settings.duration, n = this.settings.easing;
    return this.snapping = true, new Promise((r) => {
      const o = () => {
        const h = this.now(), l = Math.min(1, (h - i) / s), c = n(l);
        if (this.touchCanceler || this.resizeCanceler) {
          this.resizeCanceler = false, this.snapping = false, r();
          return;
        }
        l < 1 ? (window.requestAnimationFrame(o), this.scrollTo(e + (t - e) * c, 0)) : (this.scrollTo(t, 0), this.snapping = false, r());
      };
      o();
    });
  }
  scrollTo(t = 0, e = 0) {
    this.fullsize ? window.scroll(t, e) : (this.scroller.scrollLeft = t, this.scroller.scrollTop = e);
  }
  now() {
    return performance.now();
  }
  destroy() {
    this.scroller && (this.fullsize && this.enableScroll(), this.removeListeners(), this.scroller = void 0);
  }
};
D(Lt.prototype);
function ai(a, t) {
  let e;
  return function(...i) {
    clearTimeout(e), e = setTimeout(() => {
      a.call(this, ...i);
    }, t);
  };
}
var li = class extends ht {
  constructor(t) {
    var i;
    super(t), this._filling = false, this.name = "continuous", this.settings = L({}, {
      infinite: true,
      overflow: void 0,
      axis: void 0,
      writingMode: void 0,
      flow: "scrolled",
      offset: 500,
      offsetDelta: 250,
      width: void 0,
      height: void 0,
      snap: false,
      afterScrolledTimeout: 10,
      allowScriptedContent: false,
      allowPopups: false
    }), L(this.settings, t.settings || {});
    const e = (i = t.settings) == null ? void 0 : i.gap;
    e !== void 0 && e === 0 && (this.settings.gap = e), this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      method: this.settings.method,
      // srcdoc, blobUrl, write
      width: 0,
      height: 0,
      forceEvenPages: false,
      allowScriptedContent: this.settings.allowScriptedContent,
      allowPopups: this.settings.allowPopups
    }, this.scrollTop = 0, this.scrollLeft = 0;
  }
  display(t, e) {
    return ht.prototype.display.call(this, t, e).then(() => this.fill());
  }
  async fill() {
    this._filling = true;
    let t = true;
    for (; t; )
      t = await this.q.enqueue(() => this.check());
    this._filling = false;
  }
  moveTo(t) {
    let e = 0, i = 0;
    this.isPaginated ? (e = Math.floor(t.left / this.layout.delta) * this.layout.delta, e + (this.settings.offsetDelta ?? 0)) : (i = t.top, t.top + (this.settings.offsetDelta ?? 0)), (e > 0 || i > 0) && this.scrollBy(e, i, true);
  }
  afterResized(t) {
    this.emit(g.MANAGERS.RESIZE, t.section);
  }
  // Remove Previous Listeners if present
  removeShownListeners(t) {
    t.onDisplayed = function() {
    };
  }
  setupViewListeners(t) {
    t.on(g.VIEWS.RESIZED, (e) => {
      t.expanded = true;
    }), t.on(g.VIEWS.AXIS, (e) => {
      this.updateAxis(e);
    }), t.on(g.VIEWS.WRITING_MODE, (e) => {
      this.updateWritingMode(e);
    }), t.onDisplayed = (e) => this.afterDisplayed(e);
  }
  add(t) {
    const e = this.createView(t);
    return this.views.append(e), this.setupViewListeners(e), e.onResize = (i) => this.afterResized(i), e.display(this.request);
  }
  append(t) {
    const e = this.createView(t);
    return this.setupViewListeners(e), this.views.append(e), Promise.resolve(e);
  }
  prepend(t) {
    const e = this.createView(t);
    return e.on(g.VIEWS.RESIZED, (i) => this.counter(i)), this.setupViewListeners(e), this.views.prepend(e), Promise.resolve(e);
  }
  counter(t) {
    if (this.settings.axis === "vertical" ? this.scrollBy(0, t.heightDelta, true) : this.scrollBy(t.widthDelta, 0, true), !this.settings.fullsize)
      this.scrollTop = this.container.scrollTop, this.scrollLeft = this.container.scrollLeft;
    else {
      const e = this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" ? -1 : 1;
      this.scrollTop = window.scrollY * e, this.scrollLeft = window.scrollX * e;
    }
  }
  update(t) {
    const e = this.bounds(), i = this.views.all(), s = i.length, n = typeof t < "u" ? t : this.settings.offset || 0, r = /* @__PURE__ */ new Set();
    for (let d = 0; d < s; d++)
      this.isVisible(i[d], n, n, e) && r.add(d);
    const o = new Set(r);
    r.forEach((d) => {
      o.add(d - 1), o.add(d + 1);
    });
    const h = new T(), l = [];
    let c = false;
    for (let d = 0; d < s; d++) {
      const u = i[d];
      r.has(d) ? u.displayed ? u.show() : l.push(
        u.display(this.request).then((f) => f.show(), (f) => {
          this.views.remove(u), f && f.name !== "AbortError" && this.reportDisplayError(f);
        })
      ) : o.has(d) ? u.displayed && u.hide() : !this._filling && (u.displayed || u.displaying) && (this.q.enqueue(() => u.destroy()), c = true);
    }
    return c && (clearTimeout(this.trimTimeout), this.trimTimeout = setTimeout(() => {
      this.q.enqueue(() => this.trim());
    }, 250)), l.length ? Promise.all(l).catch(() => {
    }) : (h.resolve(), h.promise);
  }
  check(t, e) {
    var y, E, x, w;
    const i = new T(), s = [], n = this.settings.axis === "horizontal";
    let r = this.settings.offset || 0;
    t && n && (r = t), e && !n && (r = e);
    const o = this._bounds;
    let h = n ? this.scrollLeft : this.scrollTop;
    const l = n ? Math.floor(o.width) : o.height, c = n ? this.container.scrollWidth : this.container.scrollHeight, d = this.writingMode && this.writingMode.startsWith("vertical") ? "vertical" : "horizontal", u = this.settings.rtlScrollType, f = this.settings.direction === "rtl";
    this.settings.fullsize ? (n && f && u === "negative" || !n && f && u === "default") && (h = h * -1) : (f && u === "default" && d === "horizontal" && (h = c - l - h), f && u === "negative" && d === "horizontal" && (h = h * -1));
    const m = h + l + r, p = h - r;
    if (m >= c) {
      const C = this.views.last(), R = C && ((E = (y = C.section).next) == null ? void 0 : E.call(y));
      R && s.push(this.append(R));
    }
    if (p < 0) {
      const C = this.views.first(), R = C && ((w = (x = C.section).prev) == null ? void 0 : w.call(x));
      R && s.push(this.prepend(R));
    }
    const v = s.map((C) => C.then((R) => R.display(this.request).catch((N) => {
      throw this.views.remove(R), N;
    })));
    return s.length ? Promise.all(v).then(() => this.check()).then(() => this.update(r), (C) => (this.reportDisplayError(C), false)) : (this.q.enqueue(() => {
      this.update();
    }), i.resolve(false), i.promise);
  }
  trim() {
    var p, v, y, E;
    const t = new T(), e = this.views.displayed();
    if (!e.length)
      return t.resolve(), t.promise;
    const i = e[0], s = e[e.length - 1], n = this.views.indexOf(i), r = this.views.indexOf(s), o = this.views.slice(0, n), h = this.views.slice(r + 1), l = this.views.last(), c = this.views.first(), d = l && !((v = (p = l.section).next) != null && v.call(p)), u = c && !((E = (y = c.section).prev) != null && E.call(y)), f = d ? 2 : 1, m = u ? 2 : 1;
    for (let x = 0; x < o.length - f; x++)
      this.erase(o[x], o);
    for (let x = m; x < h.length; x++)
      this.erase(h[x]);
    return t.resolve(), t.promise;
  }
  erase(t, e) {
    let i, s;
    this.settings.fullsize ? (i = window.scrollY, s = window.scrollX) : (i = this.container.scrollTop, s = this.container.scrollLeft);
    const n = t.bounds();
    this.views.remove(t), e && (this.settings.axis === "vertical" ? this.scrollTo(0, i - n.height, true) : this.settings.direction === "rtl" ? this.settings.fullsize ? this.scrollTo(s + Math.floor(n.width), 0, true) : this.scrollTo(s, 0, true) : this.scrollTo(s - Math.floor(n.width), 0, true));
  }
  addEventListeners(t) {
    this._onPageHide = (e) => {
      e.persisted || (this.ignore = true, this.destroy());
    }, window.addEventListener("pagehide", this._onPageHide), this.addScrollListeners(), this.isPaginated && this.settings.snap && (this.snapper = new Lt(this, typeof this.settings.snap == "object" ? this.settings.snap : void 0));
  }
  addScrollListeners() {
    let t;
    const e = this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" ? -1 : 1;
    this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0, this.settings.fullsize ? (t = window, this.scrollTop = window.scrollY * e, this.scrollLeft = window.scrollX * e) : (t = this.container, this.scrollTop = this.container.scrollTop, this.scrollLeft = this.container.scrollLeft), this._onScroll = this.onScroll.bind(this), t.addEventListener("scroll", this._onScroll, { passive: true }), this._scrolled = ai(() => this.scrolled(), 30), typeof window < "u" && "onscrollend" in window && (this._onScrollEnd = () => {
      this.snapper && this.snapper.supportsTouch() && this.snapper.needsSnap() || this.emit(g.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }, t.addEventListener("scrollend", this._onScrollEnd)), this.didScroll = false;
  }
  removeEventListeners() {
    let t;
    this.settings.fullsize ? t = window : t = this.container, t.removeEventListener("scroll", this._onScroll), this._onScroll = void 0, this._onScrollEnd && (t.removeEventListener("scrollend", this._onScrollEnd), this._onScrollEnd = void 0), window.removeEventListener("pagehide", this._onPageHide), this._onPageHide = void 0;
  }
  onScroll() {
    let t, e;
    const i = this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" ? -1 : 1;
    this.settings.fullsize ? (t = window.scrollY * i, e = window.scrollX * i) : (t = this.container.scrollTop, e = this.container.scrollLeft), this.scrollTop = t, this.scrollLeft = e, this.ignore ? this.ignore = false : this._scrolled(), this.scrollDeltaVert += Math.abs(t - this.prevScrollTop), this.scrollDeltaHorz += Math.abs(e - this.prevScrollLeft), this.prevScrollTop = t, this.prevScrollLeft = e, clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
      this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0;
    }, 150), clearTimeout(this.afterScrolled), this.didScroll = false;
  }
  scrolled() {
    this.q.enqueue(() => this.check()), this.emit(g.MANAGERS.SCROLL, {
      top: this.scrollTop,
      left: this.scrollLeft
    }), !this._onScrollEnd && (clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout(() => {
      this.snapper && this.snapper.supportsTouch() && this.snapper.needsSnap() || this.emit(g.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }, this.settings.afterScrolledTimeout));
  }
  next() {
    const t = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    this.views.length && (this.isPaginated && this.settings.axis === "horizontal" ? this.scrollBy(t, 0, true) : this.scrollBy(0, this.layout.height, true), this.q.enqueue(() => this.check()));
  }
  prev() {
    const t = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    this.views.length && (this.isPaginated && this.settings.axis === "horizontal" ? this.scrollBy(-t, 0, true) : this.scrollBy(0, -this.layout.height, true), this.q.enqueue(() => this.check()));
  }
  updateFlow(t) {
    this.rendered && this.snapper && (this.snapper.destroy(), this.snapper = void 0), super.updateFlow(t, "scroll"), this.rendered && this.isPaginated && this.settings.snap && (this.snapper = new Lt(this, typeof this.settings.snap == "object" ? this.settings.snap : void 0));
  }
  destroy() {
    clearTimeout(this.scrollTimeout), clearTimeout(this.trimTimeout), super.destroy(), this.snapper && this.snapper.destroy();
  }
};
var ci = 2500;
var di = 50;
var Ot = class {
  constructor(t, e) {
    this._reanchorUntil = 0, this._reanchoring = false, this.settings = L({}, {
      width: null,
      height: null,
      ignoreClass: "",
      manager: "default",
      view: "iframe",
      flow: null,
      layout: null,
      spread: null,
      minSpreadWidth: 800,
      stylesheet: null,
      resizeOnOrientationChange: true,
      script: null,
      snap: false,
      defaultDirection: "ltr",
      allowScriptedContent: false,
      allowPopups: false
    }), L(this.settings, e), typeof this.settings.manager == "object" && (this.manager = this.settings.manager), this.book = t, this.hooks = {}, this.hooks.display = new O(this), this.hooks.serialize = new O(this), this.hooks.content = new O(this), this.hooks.unloaded = new O(this), this.hooks.layout = new O(this), this.hooks.render = new O(this), this.hooks.show = new O(this), this.hooks.content.register((i) => this.handleLinks(i)), this.hooks.content.register((i) => this.passEvents(i)), this.hooks.content.register((i) => this.adjustImages(i)), this.book.spine.hooks.content.register((i, s) => this.injectIdentifier(i, s)), this.settings.stylesheet && this.book.spine.hooks.content.register((i, s) => this.injectStylesheet(i, s)), this.settings.script && this.book.spine.hooks.content.register((i, s) => this.injectScript(i, s)), this.themes = new je(this), this.annotations = new Fe(this), this.epubcfi = new b(), this.q = new Pt(this), this.location = void 0, this.q.enqueue(this.book.opened), this.starting = new T(), this.started = this.starting.promise, this.q.enqueue(this.start);
  }
  /**
   * Set the manager function
   * @param {function} manager
   */
  setManager(t) {
    this.manager = t;
  }
  /**
   * Require the manager from passed string, or as a class function
   * @param  {string|object} manager [description]
   * @return {method}
   */
  requireManager(t) {
    let e;
    return typeof t == "string" && t === "default" ? e = ht : typeof t == "string" && t === "continuous" ? e = li : e = t, e;
  }
  /**
   * Require the view from passed string, or as a class function
   * @param  {string|object} view
   * @return {view}
   */
  requireView(t) {
    let e;
    return typeof t == "string" && t === "iframe" ? e = ue : e = t, e;
  }
  /**
   * Start the rendering
   * @return {Promise} rendering has started
   */
  start() {
    switch (!this.settings.layout && (this.book.package.metadata.layout === "pre-paginated" || this.book.displayOptions.fixedLayout === "true") && (this.settings.layout = "pre-paginated"), this.book.package.metadata.spread) {
      case "none":
        this.settings.spread = "none";
        break;
      case "both":
        this.settings.spread = true;
        break;
    }
    this.manager || (this.ViewManager = this.requireManager(this.settings.manager), this.View = this.requireView(this.settings.view), this.manager = new this.ViewManager({
      view: this.View,
      queue: this.q,
      request: this.book.load.bind(this.book),
      settings: this.settings
    })), this.direction(this.book.package.metadata.direction || this.settings.defaultDirection), this.settings.globalLayoutProperties = this.determineLayoutProperties(this.book.package.metadata), this.flow(this.settings.globalLayoutProperties.flow), this.layout(this.settings.globalLayoutProperties), this.manager.on(g.MANAGERS.ADDED, (t) => this.afterDisplayed(t)), this.manager.on(g.MANAGERS.REMOVED, (t) => this.afterRemoved(t)), this.manager.on(g.MANAGERS.RESIZED, (t, e) => this.onResized(t, e)), this.manager.on(g.MANAGERS.RESIZE, () => this.onContentReflow()), this.manager.on(g.MANAGERS.SCROLL, () => {
      this._reanchorCfi && this._disarmReanchor();
    }), this.manager.on(g.MANAGERS.ORIENTATION_CHANGE, (t) => this.onOrientationChange(t)), this.manager.on(g.MANAGERS.SCROLLED, () => this.reportLocation()), this.manager.on(g.MANAGERS.DISPLAY_ERROR, (t) => this.emit(g.RENDITION.DISPLAY_ERROR, t)), this.emit(g.RENDITION.STARTED), this.starting.resolve();
  }
  /**
   * Call to attach the container to an element in the dom
   * Container must be attached before rendering can begin
   * @param  {element} element to attach to
   * @return {Promise}
   */
  attachTo(t) {
    return this.q.enqueue(() => {
      this.manager.render(t, {
        width: this.settings.width,
        height: this.settings.height
      }), this._observeContainerResize(), this.emit(g.RENDITION.ATTACHED);
    });
  }
  /**
   * Display a point in the book
   * The request will be added to the rendering Queue,
   * so it will wait until book is opened, rendering started
   * and all other rendering tasks have finished to be called.
   * @param  {string} target Url or EpubCFI
   * @return {Promise} resolves the displayed section, or undefined if this
   * display was superseded by a later one or aborted
   */
  display(t) {
    return this.displaying && this.displaying.resolve(void 0), this.q.enqueue(this._display, t);
  }
  /**
   * Tells the manager what to display immediately
   * @private
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */
  _display(t) {
    if (!this.book)
      return;
    const e = new T(), i = e.promise;
    this.displaying = e, this.book.locations.length() && Gt(t) && (t = this.book.locations.cfiFromPercentage(parseFloat(t)));
    const s = this.book.spine.get(t);
    return s ? (this.epubcfi.isCfiString(t) ? this._armReanchor(t) : this._disarmReanchor(), this.manager.display(s, t).then(() => {
      e.resolve(s), this.displaying === e && (this.displaying = void 0), this.emit(g.RENDITION.DISPLAYED, s), this.reportLocation();
    }, (n) => {
      this.displaying === e && (this.displaying = void 0), n && n.name === "AbortError" ? e.resolve(void 0) : e.reject(n), this.emit(g.RENDITION.DISPLAY_ERROR, n);
    }).catch(() => {
    }), i) : (this.displaying = void 0, e.reject(new Error("No Section Found")), i);
  }
  /*
  	render(view, show) {
  
  		// view.onLayout = this.layout.format.bind(this.layout);
  		view.create();
  
  		// Fit to size of the container, apply padding
  		this.manager.resizeView(view);
  
  		// Render Chain
  		return view.section.render(this.book.request)
  			.then(function(contents){
  				return view.load(contents);
  			}.bind(this))
  			.then(function(doc){
  				return this.hooks.content.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				this.layout.format(view.contents);
  				return this.hooks.layout.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				return view.display();
  			}.bind(this))
  			.then(function(){
  				return this.hooks.render.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				if(show !== false) {
  					this.q.enqueue(function(view){
  						view.show();
  					}, view);
  				}
  				// this.map = new Map(view, this.layout);
  				this.hooks.show.trigger(view, this);
  				this.trigger("rendered", view.section);
  
  			}.bind(this))
  			.catch(function(e){
  				this.trigger("loaderror", e);
  			}.bind(this));
  
  	}
  	*/
  /**
   * Report what section has been displayed
   * @private
   * @param  {*} view
   */
  afterDisplayed(t) {
    t.on(g.VIEWS.MARK_CLICKED, (e, i) => {
      t.contents && this.triggerMarkEvent(e, i, t.contents);
    }), this.hooks.render.trigger(t, this).then(() => {
      t.contents ? this.hooks.content.trigger(t.contents, this).then(() => {
        this.emit(g.RENDITION.RENDERED, t.section, t);
      }) : this.emit(g.RENDITION.RENDERED, t.section, t);
    });
  }
  /**
   * Report what has been removed
   * @private
   * @param  {*} view
   */
  afterRemoved(t) {
    this.hooks.unloaded.trigger(t, this).then(() => {
      this.emit(g.RENDITION.REMOVED, t.section, t);
    });
  }
  /**
   * Remember a CFI target so content reflows can re-anchor to it. Opens a
   * short window after the display call during which onContentReflow() acts.
   * @private
   */
  _armReanchor(t) {
    this._reanchorCfi = t, this._reanchorUntil = Date.now() + ci, clearTimeout(this._reanchorTimer);
  }
  /**
   * Cancel a pending re-anchor — e.g. the user turned the page, taking over
   * navigation, so we must not yank them back to the previous target.
   * @private
   */
  _disarmReanchor() {
    this._reanchorCfi = void 0, this._reanchorUntil = 0, clearTimeout(this._reanchorTimer);
  }
  /**
   * Content (not the viewport) reflowed. The first display anchored against an
   * under-measured layout, so a deep CFI may have been clamped to an earlier
   * page; re-apply the original target and re-report so consumers persist the
   * corrected location rather than the clamped one.
   * @private
   */
  onContentReflow() {
    const t = this._reanchorCfi;
    if (t) {
      if (Date.now() > this._reanchorUntil) {
        this._disarmReanchor();
        return;
      }
      this._layout && this._layout.name === "pre-paginated" || (clearTimeout(this._reanchorTimer), this._reanchorTimer = setTimeout(() => {
        if (this._reanchorCfi !== t || Date.now() > this._reanchorUntil || this.displaying || this._reanchoring) return;
        const e = this.book && this.book.spine.get(t);
        e && (this._reanchoring = true, this.manager.display(e, t).then(() => this.reportLocation()).catch((i) => this.emit(g.RENDITION.DISPLAY_ERROR, i)).finally(() => {
          this._reanchoring = false;
        }));
      }, di));
    }
  }
  /**
   * Report resize events and display the last seen location
   * @private
   */
  onResized(t, e) {
    this.emit(g.RENDITION.RESIZED, {
      width: t.width,
      height: t.height
    }, e), this.location && this.location.start && this.display(e || this.location.start.cfi).catch(() => {
    });
  }
  /**
   * Watch the container so a rendition displayed into a hidden/zero-size
   * element re-reports its location once the element becomes measurable.
   * Only acts before the first location is established; once a location
   * exists the observer disconnects on its next callback and the normal
   * resize path handles subsequent changes.
   * @private
   */
  _observeContainerResize() {
    if (typeof ResizeObserver > "u" || this._containerResizeObserver || !this.manager || !this.manager.container)
      return;
    const t = this.manager.container;
    let e = false;
    this._containerResizeObserver = new ResizeObserver((i) => {
      if (!this.manager || !this.manager.isRendered())
        return;
      if (this.location) {
        this._disconnectContainerObserver();
        return;
      }
      const s = i[i.length - 1];
      if (!s)
        return;
      if (!(s.contentRect.width > 0 && s.contentRect.height > 0)) {
        e = true;
        return;
      }
      e && this.reportLocation();
    }), this._containerResizeObserver.observe(t);
  }
  /**
   * Disconnect and clear the container resize observer.
   * @private
   */
  _disconnectContainerObserver() {
    this._containerResizeObserver && (this._containerResizeObserver.disconnect(), this._containerResizeObserver = void 0);
  }
  /**
   * Report orientation events and display the last seen location
   * @private
   */
  onOrientationChange(t) {
    this.emit(g.RENDITION.ORIENTATION_CHANGE, t);
  }
  /**
   * Move the Rendition to a specific offset
   * Usually you would be better off calling display()
   * @param {object} offset
   */
  moveTo(t) {
    this.manager.moveTo(t);
  }
  /**
   * Trigger a resize of the views
   * @param {number} [width]
   * @param {number} [height]
   * @param {string} [epubcfi] (optional)
   */
  resize(t, e, i) {
    t && (this.settings.width = t), e && (this.settings.height = e), this.manager.resize(t, e, i);
  }
  /**
   * Clear all rendered views
   */
  clear() {
    this.manager.clear();
  }
  /**
   * Go to the next "page" in the rendition
   * @return {Promise}
   */
  next() {
    return this._disarmReanchor(), this.q.enqueue(() => this.manager.next()).then(() => this.reportLocation());
  }
  /**
   * Go to the previous "page" in the rendition
   * @return {Promise}
   */
  prev() {
    return this._disarmReanchor(), this.q.enqueue(() => this.manager.prev()).then(() => this.reportLocation());
  }
  //-- http://www.idpf.org/epub/301/spec/epub-publications.html#meta-properties-rendering
  /**
   * Determine the Layout properties from metadata and settings
   * @private
   * @param  {object} metadata
   * @return {object} properties
   */
  determineLayoutProperties(t) {
    const e = this.settings.layout || t.layout || "reflowable", i = this.settings.spread || t.spread || "auto", s = this.settings.orientation || t.orientation || "auto", n = this.settings.flow || t.flow || "auto", r = t.viewport || "", o = this.settings.minSpreadWidth || t.minSpreadWidth || 800, h = this.settings.direction || t.direction || "ltr";
    return (this.settings.width === 0 || this.settings.width > 0) && (this.settings.height === 0 || this.settings.height > 0), {
      layout: e,
      spread: i,
      orientation: s,
      flow: n,
      viewport: r,
      minSpreadWidth: o,
      direction: h
    };
  }
  /**
   * Adjust the flow of the rendition to paginated or scrolled
   * (scrolled-continuous vs scrolled-doc are handled by different view managers)
   * @param  {string} flow
   */
  flow(t) {
    let e = t;
    (t === "scrolled" || t === "scrolled-doc" || t === "scrolled-continuous") && (e = "scrolled"), (t === "auto" || t === "paginated") && (e = "paginated"), this.settings.flow = t, this._layout && this._layout.flow(e), this.manager && this._layout && this.manager.applyLayout(this._layout), this.manager && this.manager.updateFlow(e), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi).catch(() => {
    }));
  }
  /**
   * Adjust the layout of the rendition to reflowable or pre-paginated
   * @param  {object} settings
   */
  layout(t) {
    return t && (this._layout = new ae(t), this._layout.spread(t.spread, this.settings.minSpreadWidth), this._layout.on(g.LAYOUT.UPDATED, (e, i) => {
      this.emit(g.RENDITION.LAYOUT, e, i);
    })), this.manager && this._layout && this.manager.applyLayout(this._layout), this._layout;
  }
  /**
   * Adjust if the rendition uses spreads
   * @param  {string} spread none | auto
   * @param  {int} [min] min width to use spreads at
   */
  spread(t, e) {
    this.settings.spread = t, e && (this.settings.minSpreadWidth = e), this._layout && this._layout.spread(t, e), this.manager && this.manager.isRendered() && this.manager.updateLayout();
  }
  /**
   * Adjust the direction of the rendition
   * @param  {string} dir
   */
  direction(t) {
    this.settings.direction = t || "ltr", this.manager && this.manager.direction(this.settings.direction), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi).catch(() => {
    }));
  }
  /**
   * Report the current location.
   * Emits "relocated" and "locationChanged" events.
   */
  reportLocation() {
    return this.q.enqueue(() => {
      requestAnimationFrame(() => {
        if (!this.manager)
          return;
        const t = this.manager.currentLocation();
        if (t && "then" in t && typeof t.then == "function")
          t.then((e) => {
            const i = this.located(e);
            !i || !i.start || !i.end || (this.location = i, this.emit(g.RENDITION.LOCATION_CHANGED, {
              index: this.location.start.index,
              href: this.location.start.href,
              start: this.location.start.cfi,
              end: this.location.end.cfi,
              percentage: this.location.start.percentage
            }), this.emit(g.RENDITION.RELOCATED, this.location));
          });
        else if (t) {
          const e = this.located(t);
          if (!e || !e.start || !e.end)
            return;
          this.location = e, this.emit(g.RENDITION.LOCATION_CHANGED, {
            index: this.location.start.index,
            href: this.location.start.href,
            start: this.location.start.cfi,
            end: this.location.end.cfi,
            percentage: this.location.start.percentage
          }), this.emit(g.RENDITION.RELOCATED, this.location);
        }
      });
    });
  }
  /**
   * Get the Current Location object
   * @return {displayedLocation | promise} location (may be a promise)
   */
  currentLocation() {
    if (!this.manager)
      return;
    const t = this.manager.currentLocation();
    if (t && "then" in t && typeof t.then == "function")
      t.then((e) => this.located(e));
    else if (t)
      return this.located(t);
  }
  /**
   * Creates a Rendition#locationRange from location
   * passed by the Manager
   * @returns {displayedLocation}
   * @private
   */
  located(t) {
    if (!t.length)
      return;
    const e = t[0], i = t[t.length - 1], s = {
      start: {
        index: e.index,
        href: e.href,
        cfi: e.mapping.start,
        displayed: {
          page: e.pages[0] || 1,
          total: e.totalPages
        }
      },
      end: {
        index: i.index,
        href: i.href,
        cfi: i.mapping.end,
        displayed: {
          page: i.pages[i.pages.length - 1] || 1,
          total: i.totalPages
        }
      }
    }, n = this.book.locations.locationFromCfi(e.mapping.start), r = this.book.locations.locationFromCfi(i.mapping.end);
    n != null && (s.start.location = n, s.start.percentage = this.book.locations.percentageFromLocation(n)), r != null && (s.end.location = r, s.end.percentage = this.book.locations.percentageFromLocation(r));
    const o = this.book.pageList.pageFromCfi(e.mapping.start), h = this.book.pageList.pageFromCfi(i.mapping.end);
    return o !== -1 && (s.start.page = o), h !== -1 && (s.end.page = h), i.index === this.book.spine.last().index && s.end.displayed.page >= s.end.displayed.total && (s.atEnd = true), e.index === this.book.spine.first().index && s.start.displayed.page === 1 && (s.atStart = true), s;
  }
  /**
   * Remove and Clean Up the Rendition
   */
  destroy() {
    var t;
    this.q.clear(), this._disarmReanchor(), (t = this.displaying) == null || t.resolve(void 0), this.displaying = void 0, this._disconnectContainerObserver(), this.manager && (this.manager.off(g.MANAGERS.ADDED), this.manager.off(g.MANAGERS.REMOVED), this.manager.off(g.MANAGERS.RESIZED), this.manager.off(g.MANAGERS.RESIZE), this.manager.off(g.MANAGERS.SCROLL), this.manager.off(g.MANAGERS.ORIENTATION_CHANGE), this.manager.off(g.MANAGERS.SCROLLED), this.manager.off(g.MANAGERS.DISPLAY_ERROR), this.manager.destroy(), this.manager = void 0), this.book = void 0, this.hooks.display.clear(), this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks.unloaded.clear(), this.hooks.layout.clear(), this.hooks.render.clear(), this.hooks.show.clear(), this.themes.destroy(), this._layout && this._layout.off(g.LAYOUT.UPDATED), this._layout = void 0, this.location = void 0;
  }
  /**
   * Pass the events from a view's Contents
   * @private
   * @param  {Contents} view contents
   */
  passEvents(t) {
    it.forEach((e) => {
      t.on(e, (i) => this.triggerViewEvent(i, t));
    }), t.on(g.CONTENTS.SELECTED, (e) => this.triggerSelectedEvent(e, t));
  }
  /**
   * Emit events passed by a view
   * @private
   * @param  {event} e
   */
  triggerViewEvent(t, e) {
    this.emit(t.type, t, e);
  }
  /**
   * Emit a selection event's CFI Range passed from a a view
   * @private
   * @param  {string} cfirange
   */
  triggerSelectedEvent(t, e) {
    this.emit(g.RENDITION.SELECTED, t, e);
  }
  /**
   * Emit a markClicked event with the cfiRange and data from a mark
   * @private
   * @param  {EpubCFI} cfirange
   */
  triggerMarkEvent(t, e, i) {
    this.emit(g.RENDITION.MARK_CLICKED, t, e, i);
  }
  /**
   * Get a Range from a Visible CFI
   * @param  {string} cfi EpubCfi String
   * @param  {string} ignoreClass
   * @return {range}
   */
  getRange(t, e) {
    const i = new b(t), s = this.manager.visible().filter(function(n) {
      return i.spinePos === n.index;
    });
    if (s.length)
      return s[0].contents.range(i.toString(), e);
  }
  /**
   * Hook to adjust images to fit in columns
   * @param  {Contents} contents
   * @private
   */
  adjustImages(t) {
    const e = this.book.spine.get(t.sectionIndex);
    if (tt(e, this._layout.name) === "pre-paginated")
      return new Promise(function(r) {
        r();
      });
    const i = t.window.getComputedStyle(t.content, null), s = (t.content.offsetHeight - (parseFloat(i.paddingTop) + parseFloat(i.paddingBottom))) * 0.95, n = parseFloat(i.paddingLeft) + parseFloat(i.paddingRight);
    return t.addStylesheetRules({
      img: {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth - n + "px" : "100%") + "!important",
        "max-height": s + "px!important",
        "object-fit": "contain",
        "page-break-inside": "avoid",
        "break-inside": "avoid",
        "box-sizing": "border-box"
      },
      svg: {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth - n + "px" : "100%") + "!important",
        "max-height": s + "px!important",
        "page-break-inside": "avoid",
        "break-inside": "avoid"
      }
    }), new Promise(function(r) {
      setTimeout(r, 0);
    });
  }
  /**
   * Get the Contents object of each rendered view
   * @returns {Contents[]}
   */
  getContents() {
    return this.manager ? this.manager.getContents() : [];
  }
  /**
   * Get the views member from the manager
   * @returns {Views}
   */
  views() {
    return (this.manager ? this.manager.views : void 0) || [];
  }
  /**
   * Hook to handle link clicks in rendered content
   * @param  {Contents} contents
   * @private
   */
  handleLinks(t) {
    t && t.on(g.CONTENTS.LINK_CLICKED, (e) => {
      const i = this.book.path.relative(e);
      this.display(i).catch((s) => this.emit(g.RENDITION.DISPLAY_ERROR, s));
    });
  }
  /**
   * Hook to handle injecting stylesheet before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectStylesheet(t, e) {
    const i = t.createElement("link");
    i.setAttribute("type", "text/css"), i.setAttribute("rel", "stylesheet"), i.setAttribute("href", this.settings.stylesheet), t.getElementsByTagName("head")[0].appendChild(i);
  }
  /**
   * Hook to handle injecting scripts before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectScript(t, e) {
    const i = t.createElement("script");
    i.setAttribute("type", "text/javascript"), i.setAttribute("src", this.settings.script), i.textContent = " ", t.getElementsByTagName("head")[0].appendChild(i);
  }
  /**
   * Hook to handle the document identifier before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectIdentifier(t, e) {
    const i = this.book.packaging.metadata.identifier, s = t.createElement("meta");
    s.setAttribute("name", "dc.relation.ispartof"), i && s.setAttribute("content", i), t.getElementsByTagName("head")[0].appendChild(s);
  }
};
D(Ot.prototype);
var yt = typeof window < "u" ? window.URL : URL;
var ui = class {
  constructor() {
    this.zip = void 0, this.urlCache = {}, this.checkRequirements();
  }
  /**
   * Checks to see if JSZip exists in global namspace,
   * Requires JSZip if it isn't there
   * @private
   */
  checkRequirements() {
    try {
      this.zip = new import_jszip.default();
    } catch {
      throw new Error("JSZip lib not loaded");
    }
  }
  /**
   * Open an archive
   * @param  {binary} input
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  open(t, e) {
    return this.zip.loadAsync(t, { base64: e });
  }
  /**
   * Load and Open an archive
   * @param  {string} zipUrl
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  openUrl(t, e) {
    return K(t, "binary").then((i) => this.zip.loadAsync(i, { base64: e }));
  }
  /**
   * Request a url from the archive
   * @param  {string} url  a url to request from the archive
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  async request(t, e) {
    const i = new z(t);
    e || (e = i.extension);
    const s = e === "blob" ? this.getBlob(t) : this.getText(t);
    if (!s)
      throw new k("File not found in the epub: " + t);
    const n = await s;
    return this.handleResponse(n, e);
  }
  /**
   * Handle the response from request
   * @private
   * @param  {any} response
   * @param  {string} [type]
   * @return {any} the parsed result
   */
  handleResponse(t, e) {
    return Q(t, e);
  }
  /**
   * Get a Blob from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */
  getBlob(t, e) {
    const i = decodeURIComponent(t.substr(1)), s = this.zip.file(i);
    if (s)
      return e = e || Z.lookup(s.name), s.async("uint8array").then(function(n) {
        return new Blob([n], { type: e });
      });
  }
  /**
   * Get Text from Archive by Url
   * @param url
   * @param _encoding
   * @return text content
   */
  getText(t, e) {
    const i = decodeURIComponent(t.substr(1)), s = this.zip.file(i);
    if (s)
      return s.async("string").then(function(n) {
        return n;
      });
  }
  /**
   * Get a base64 encoded result from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */
  getBase64(t, e) {
    const i = decodeURIComponent(t.substr(1)), s = this.zip.file(i);
    if (s)
      return e = e || Z.lookup(s.name), s.async("base64").then(function(n) {
        return "data:" + e + ";base64," + n;
      });
  }
  /**
   * Create a Url from an unarchived item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */
  async createUrl(t, e) {
    if (t in this.urlCache)
      return this.urlCache[t];
    if (e && e.base64) {
      const s = this.getBase64(t);
      if (s) {
        const n = await s;
        return this.urlCache[t] = n, n;
      }
    } else {
      const s = this.getBlob(t);
      if (s) {
        const n = await s, r = yt.createObjectURL(n);
        return this.urlCache[t] = r, r;
      }
    }
    throw new k("File not found in the epub: " + t);
  }
  /**
   * Revoke Temp Url for a archive item
   * @param  {string} url url of the item in the archive
   */
  revokeUrl(t) {
    const e = this.urlCache[t];
    e && yt.revokeObjectURL(e);
  }
  destroy() {
    for (const t in this.urlCache) {
      const e = this.urlCache[t];
      e && yt.revokeObjectURL(e);
    }
    this.zip = void 0, this.urlCache = {};
  }
};
function fi(a) {
  return new Promise((t, e) => {
    const i = indexedDB.open(a, 1);
    i.onupgradeneeded = () => {
      i.result.createObjectStore("data");
    }, i.onsuccess = () => t(i.result), i.onerror = () => e(i.error);
  });
}
function pi(a) {
  const t = fi(a);
  return {
    getItem(e) {
      return t.then((i) => new Promise((s, n) => {
        const o = i.transaction("data", "readonly").objectStore("data").get(e);
        o.onsuccess = () => s(o.result ?? null), o.onerror = () => n(o.error);
      }));
    },
    setItem(e, i) {
      return t.then((s) => new Promise((n, r) => {
        const h = s.transaction("data", "readwrite").objectStore("data").put(i, e);
        h.onsuccess = () => n(i), h.onerror = () => r(h.error);
      }));
    }
  };
}
var wt = typeof window < "u" ? window.URL : void 0;
var fe = class {
  constructor(t, e, i) {
    this.urlCache = {}, this.name = t, this.requester = e || K, this.resolver = i, this.online = true, this.checkRequirements(), this.addListeners();
  }
  /**
   * Checks that IndexedDB is available and creates the storage instance
   * @private
   */
  checkRequirements() {
    try {
      if (typeof indexedDB > "u")
        throw new Error("IndexedDB not available");
      this.storage = pi(this.name);
    } catch {
      throw new Error("IndexedDB not available");
    }
  }
  /**
   * Add online and offline event listeners
   * @private
   */
  addListeners() {
    this._status = this.status.bind(this), window.addEventListener("online", this._status), window.addEventListener("offline", this._status);
  }
  /**
   * Remove online and offline event listeners
   * @private
   */
  removeListeners() {
    window.removeEventListener("online", this._status), window.removeEventListener("offline", this._status), this._status = void 0;
  }
  /**
   * Update the online / offline status
   * @private
   */
  status(t) {
    const e = navigator.onLine;
    this.online = e, e ? this.emit("online", this) : this.emit("offline", this);
  }
  /**
   * Add all of a book resources to the store
   * @param  {Resources} resources  book resources
   * @param  {boolean} [force] force resaving resources
   * @return {Promise<object>} store objects
   */
  add(t, e) {
    const i = t.resources.map((s) => {
      const { href: n } = s, r = this.resolver(n), o = encodeURIComponent(r);
      return this.storage.getItem(o).then((h) => !h || e ? this.requester(r, "binary").then((l) => this.storage.setItem(o, l)) : h);
    });
    return Promise.all(i);
  }
  /**
   * Put binary data from a url to storage
   * @param  {string} url  a url to request from storage
   * @param  {boolean} [withCredentials]
   * @param  {object} [headers]
   * @param  {AbortSignal} [signal]
   * @return {Promise<Uint8Array | null>}
   */
  put(t, e, i, s) {
    const n = encodeURIComponent(t);
    return this.storage.getItem(n).then((r) => r || this.requester(t, "binary", e, i, s).then((o) => this.storage.setItem(n, o)));
  }
  /**
   * Request a url
   * @param  {string} url  a url to request from storage
   * @param  {string} [type] specify the type of the returned result
   * @param  {boolean} [withCredentials]
   * @param  {object} [headers]
   * @param  {AbortSignal} [signal]
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  request(t, e, i, s, n) {
    return this.online ? this.requester(t, e, i, s, n).then((r) => (this.put(t, i, s, n).catch(() => {
    }), r)) : this.retrieve(t, e);
  }
  /**
   * Request a url from storage
   * @param  {string} url  a url to request from storage
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  async retrieve(t, e) {
    const i = new z(t);
    e || (e = i.extension);
    const s = e === "blob" ? await this.getBlob(t) : await this.getText(t);
    if (s)
      return this.handleResponse(s, e);
    throw new k("File not found in storage: " + t);
  }
  /**
   * Handle the response from request
   * @private
   * @param  {string | Blob} response
   * @param  {string} [type]
   * @return {string | Document | Blob | object} the parsed result
   */
  handleResponse(t, e) {
    return Q(t, e);
  }
  /**
   * Get a Blob from Storage by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */
  getBlob(t, e) {
    const i = encodeURIComponent(t);
    return this.storage.getItem(i).then(function(s) {
      if (s)
        return e = e || Z.lookup(t), new Blob([s], { type: e });
    });
  }
  /**
   * Get Text from Storage by Url
   * @param  {string} url
   * @return {string}
   */
  getText(t, e) {
    const i = encodeURIComponent(t);
    return this.storage.getItem(i).then(function(s) {
      if (s)
        return new TextDecoder().decode(s);
    });
  }
  /**
   * Get a base64 encoded result from Storage by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */
  async getBase64(t, e) {
    const i = encodeURIComponent(t);
    e = e || Z.lookup(t);
    const s = await this.storage.getItem(i);
    if (!s) return;
    const n = new Blob([s], { type: e });
    return It(n);
  }
  /**
   * Create a Url from a stored item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */
  async createUrl(t, e) {
    if (t in this.urlCache)
      return this.urlCache[t];
    if (e && e.base64) {
      const s = await this.getBase64(t);
      if (s)
        return this.urlCache[t] = s, s;
    } else {
      const s = await this.getBlob(t);
      if (s) {
        const n = wt.createObjectURL(s);
        return this.urlCache[t] = n, n;
      }
    }
    throw new k("File not found in storage: " + t);
  }
  /**
   * Revoke Temp Url for a archive item
   * @param  {string} url url of the item in the store
   */
  revokeUrl(t) {
    const e = this.urlCache[t];
    e && wt.revokeObjectURL(e);
  }
  destroy() {
    for (const t in this.urlCache) {
      const e = this.urlCache[t];
      e && wt.revokeObjectURL(e);
    }
    this.urlCache = {}, this.removeListeners();
  }
};
D(fe.prototype);
var bt = class {
  constructor(t) {
    this.interactive = "", this.fixedLayout = "", this.openToSpread = "", this.orientationLock = "", t && this.parse(t);
  }
  /**
   * Parse XML
   * @param  {document} displayOptionsDocument XML
   * @return {DisplayOptions} self
   */
  parse(t) {
    if (!t)
      return this;
    const e = _(t, "display_options");
    return e ? (W(e, "option").forEach((s) => {
      let n = "";
      switch (s.childNodes.length && (n = s.childNodes[0].nodeValue ?? ""), s.getAttribute("name") ?? "") {
        case "interactive":
          this.interactive = n;
          break;
        case "fixed-layout":
          this.fixedLayout = n;
          break;
        case "open-to-spread":
          this.openToSpread = n;
          break;
        case "orientation-lock":
          this.orientationLock = n;
          break;
      }
    }), this) : this;
  }
  destroy() {
    this.interactive = void 0, this.fixedLayout = void 0, this.openToSpread = void 0, this.orientationLock = void 0;
  }
};
var Ht = "META-INF/container.xml";
var gi = "META-INF/com.apple.ibooks.display-options.xml";
var I = {
  BINARY: "binary",
  BASE64: "base64",
  EPUB: "epub",
  OPF: "opf",
  MANIFEST: "json",
  DIRECTORY: "directory"
};
var Dt = class {
  constructor(t, e) {
    typeof e > "u" && typeof t != "string" && !(t instanceof Blob) && !(t instanceof ArrayBuffer) && (e = t, t = void 0), this.settings = L({}, {
      requestMethod: void 0,
      requestCredentials: void 0,
      requestHeaders: void 0,
      encoding: void 0,
      replacements: void 0,
      canonical: void 0,
      openAs: void 0,
      store: void 0,
      domParser: void 0
    }), L(this.settings, e), this.settings.domParser && ee(this.settings.domParser), this.opening = new T(), this.opened = this.opening.promise, this.isOpen = false, this.loading = {
      manifest: new T(),
      spine: new T(),
      metadata: new T(),
      cover: new T(),
      navigation: new T(),
      pageList: new T(),
      resources: new T(),
      displayOptions: new T()
    }, this.loaded = {
      manifest: this.loading.manifest.promise,
      spine: this.loading.spine.promise,
      metadata: this.loading.metadata.promise,
      cover: this.loading.cover.promise,
      navigation: this.loading.navigation.promise,
      pageList: this.loading.pageList.promise,
      resources: this.loading.resources.promise,
      displayOptions: this.loading.displayOptions.promise
    }, this.ready = Promise.all([
      this.loaded.manifest,
      this.loaded.spine,
      this.loaded.metadata,
      this.loaded.cover,
      this.loaded.navigation,
      this.loaded.resources,
      this.loaded.displayOptions
    ]), this.isRendered = false, this.request = this.settings.requestMethod || K, this.spine = new ze(), this.locations = new le(this.spine, (i) => this.load(i)), this.navigation = void 0, this.pageList = void 0, this.url = void 0, this.path = void 0, this.archived = false, this.archive = void 0, this.storage = void 0, this.resources = void 0, this.rendition = void 0, this.container = void 0, this.packaging = void 0, this.displayOptions = void 0, this.settings.store && this.store(this.settings.store), t && this.open(t, this.settings.openAs).catch(() => {
    });
  }
  /**
   * Open a epub or url
   * @param {string | ArrayBuffer} input Url, Path or ArrayBuffer
   * @param {string} [what="binary", "base64", "epub", "opf", "json", "directory"] force opening as a certain type
   * @returns {Promise} of when the book has been loaded
   * @example book.open("/path/to/book.epub")
   */
  open(t, e) {
    const i = (n) => {
      const r = n instanceof Error ? n : new Error(String(n)), o = r instanceof k ? r.status : void 0;
      let h;
      typeof t == "string" ? h = t.length > 200 ? t.slice(0, 200) + "\u2026" : t : t instanceof ArrayBuffer ? h = "ArrayBuffer(" + t.byteLength + " bytes)" : h = "Blob(" + (t.type || "application/octet-stream") + ", " + t.size + " bytes)";
      const l = new k("Cannot load book at " + h + ": " + r.message, o, r);
      return this.opening.reject(l), Object.keys(this.loading).forEach((c) => {
        this.loading[c].reject(l);
      }), this.emit(g.BOOK.OPEN_FAILED, l), l;
    };
    let s;
    try {
      const n = e || this.determineType(t);
      n === I.BINARY ? (this.archived = true, this.url = new P("/", ""), s = this.openEpub(t)) : n === I.BASE64 ? (this.archived = true, this.url = new P("/", ""), s = this.openEpub(t, n)) : n === I.EPUB ? (this.archived = true, this.url = new P("/", ""), s = this.request(t, "binary", this.settings.requestCredentials, this.settings.requestHeaders).then((r) => this.openEpub(r))) : n === I.OPF ? (this.url = new P(t), s = this.openPackaging(this.url.Path.toString())) : n === I.MANIFEST ? (this.url = new P(t), s = this.openManifest(this.url.Path.toString())) : (this.url = new P(t), s = this.openContainer(Ht).then((r) => this.openPackaging(r)));
    } catch (n) {
      return Promise.reject(i(n));
    }
    return s.catch((n) => {
      throw i(n);
    });
  }
  /**
   * Open an archived epub
   * @private
   * @param  {binary} data
   * @param  {string} [encoding]
   * @return {Promise}
   */
  openEpub(t, e) {
    return this.unarchive(t, e || this.settings.encoding).then(() => this.openContainer(Ht)).then((i) => this.openPackaging(i));
  }
  /**
   * Open the epub container
   * @private
   * @param  {string} url
   * @return {string} packagePath
   */
  openContainer(t) {
    return this.load(t).then((e) => (this.container = new Be(e), this.resolve(this.container.packagePath)));
  }
  /**
   * Open the Open Packaging Format Xml
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openPackaging(t) {
    return this.path = new z(t), this.load(t).then((e) => (this.packaging = new Wt(e), this.unpack(this.packaging)));
  }
  /**
   * Open the manifest JSON
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openManifest(t) {
    return this.path = new z(t), this.load(t).then((e) => (this.packaging = new Wt(), this.packaging.load(e), this.unpack(this.packaging)));
  }
  /**
   * Load a resource from the Book
   * @param  {string} path path to the resource to load
   * @param  {string} [type] parse type to use, overriding the path extension
   * @param  {boolean} [withCredentials] overrides the book's requestCredentials setting
   * @param  {object} [headers] overrides the book's requestHeaders setting
   * @param  {AbortSignal} [signal] cancels the in-flight request
   * @return {Promise}     returns a promise with the requested resource
   *
   * These apply to the network path only: an archived book reads from the zip,
   * and a configured store issues its own requests.
   */
  load(t, e, i, s, n) {
    const r = this.resolve(t);
    return this.archived ? this.archive.request(r, e) : this.request(
      r,
      e,
      i ?? this.settings.requestCredentials,
      s ?? this.settings.requestHeaders,
      n
    );
  }
  /**
   * Resolve a path to it's absolute position in the Book
   * @param  {string} path
   * @param  {boolean} [absolute] force resolving the full URL
   * @return {string}          the resolved path string
   */
  resolve(t, e) {
    if (!t)
      return "";
    let i = t;
    return t.includes("://") ? t : (this.path && (i = this.path.resolve(t)), e !== false && this.url && (i = this.url.resolve(i)), i);
  }
  /**
   * Get a canonical link to a path
   * @param  {string} path
   * @return {string} the canonical path string
   */
  canonical(t) {
    let e = t;
    return t ? (this.settings.canonical ? e = this.settings.canonical(t) : e = this.resolve(t, true), e) : "";
  }
  /**
   * Determine the type of they input passed to open
   * @private
   * @param  {string} input
   * @return {string}  binary | directory | epub | opf
   */
  determineType(t) {
    let e;
    if (this.settings.encoding === "base64")
      return I.BASE64;
    if (typeof t != "string")
      return I.BINARY;
    if (e = new P(t).path().extension, e && (e = e.replace(/\?.*$/, "")), !e)
      return I.DIRECTORY;
    if (e === "epub")
      return I.EPUB;
    if (e === "opf")
      return I.OPF;
    if (e === "json")
      return I.MANIFEST;
  }
  /**
   * unpack the contents of the Books packaging
   * @private
   * @param {Packaging} packaging object
   */
  unpack(t) {
    this.package = t, this.packaging.metadata.layout === "" ? this.load(this.url.resolve(gi)).then((s) => {
      this.displayOptions = new bt(s), this.loading.displayOptions.resolve(this.displayOptions);
    }).catch((s) => {
      this.displayOptions = new bt(), this.loading.displayOptions.resolve(this.displayOptions);
    }) : (this.displayOptions = new bt(), this.loading.displayOptions.resolve(this.displayOptions)), this.spine.unpack(this.packaging, (s, n) => this.resolve(s, n), (s) => this.canonical(s)), this.loaded.displayOptions.then((s) => {
      this.locations.layout = s.fixedLayout === "true" ? "pre-paginated" : this.packaging.metadata.layout;
    }), this.resourcesAbort && this.resourcesAbort.abort();
    const e = typeof AbortController < "u" ? new AbortController() : void 0;
    this.resourcesAbort = e, this.resources = new Ue(this.packaging.manifest, {
      archive: this.archive,
      resolver: (s, n) => this.resolve(s, n),
      // load() rather than request(): asset fetches need the book's
      // credentials and headers, and have to stop when it is destroyed.
      request: (s, n) => this.load(s, n, void 0, void 0, e && e.signal),
      replacements: this.settings.replacements || (this.archived ? "blobUrl" : "base64")
    }), this.loadNavigation(this.packaging).then(() => {
      this.loading.navigation.resolve(this.navigation);
    }), this.packaging.coverPath && (this.cover = this.resolve(this.packaging.coverPath)), this.loading.manifest.resolve(this.packaging.manifest), this.loading.metadata.resolve(this.packaging.metadata), this.loading.spine.resolve(this.spine), this.loading.cover.resolve(this.cover), this.loading.resources.resolve(this.resources), this.loading.pageList.resolve(this.pageList), this.isOpen = true, (this.settings.replacements || (this.archived ? "blobUrl" : "none")) !== "none" && (this.replacementsReady = this.replacements().catch((s) => {
      console.error(s);
    })), Promise.all([this.loaded.displayOptions, this.loaded.navigation]).then(() => {
      this.opening.resolve(this);
    });
  }
  /**
   * Load Navigation and PageList from package
   * @private
   * @param {Packaging} packaging
   */
  loadNavigation(t) {
    const e = t.navPath || t.ncxPath, i = t.toc;
    return i ? new Promise((s, n) => {
      this.navigation = new gt(i), "pageList" in t && t.pageList && (this.pageList = new vt(t.pageList)), s(this.navigation);
    }) : e ? this.load(e).then((s) => (this.navigation = new gt(s), this.pageList = new vt(s), this.navigation)) : new Promise((s, n) => {
      this.navigation = new gt(), this.pageList = new vt(), s(this.navigation);
    });
  }
  /**
   * Gets a Section of the Book from the Spine
   * Alias for `book.spine.get`
   * @param {string} target
   * @return {Section}
   */
  section(t) {
    return this.spine.get(t);
  }
  /**
   * Sugar to render a book to an element
   * @param  {element | string} element element or string to add a rendition to
   * @param  {object} [options]
   * @return {Rendition}
   */
  renderTo(t, e) {
    return this.rendition = new Ot(this, e), this.rendition.attachTo(t), this.rendition;
  }
  /**
   * Set if request should use withCredentials
   * @param {boolean} credentials
   */
  setRequestCredentials(t) {
    this.settings.requestCredentials = t;
  }
  /**
   * Set headers request should use
   * @param {object} headers
   */
  setRequestHeaders(t) {
    this.settings.requestHeaders = t;
  }
  /**
   * Unarchive a zipped epub
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Archive}
   */
  unarchive(t, e) {
    return this.archive = new ui(), this.archive.open(t, e === "base64");
  }
  /**
   * Store the epubs contents
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Store}
   */
  store(t) {
    const e = this.settings.replacements && this.settings.replacements !== "none" ? this.settings.replacements : void 0, i = this.url, s = this.settings.requestMethod || K, n = (o, h, l, c, d) => s(
      o,
      h,
      l ?? this.settings.requestCredentials,
      c ?? this.settings.requestHeaders,
      d
    ), r = !this.isOpen;
    return this.storage = new fe(t, n, (o, h) => this.resolve(o, h)), this.request = this.storage.request.bind(this.storage), this.opened.then(() => {
      if (!this.resources)
        return;
      this.archived && (this.storage.requester = (d, u) => this.archive.request(d, u));
      const o = (d, u) => {
        u.output = this.resources.substitute(d, u.url);
      }, h = this.resources.settings.replacements, l = e || "blobUrl";
      this.resources.settings.replacements = l, r && this.replacementsReady && h === l || this.resources.replacements().then(() => this.resources && this.resources.replaceCss()), this.storage.on("offline", () => {
        this.url = new P("/", ""), this.spine.hooks.serialize.register(o);
      }), this.storage.on("online", () => {
        this.url = i, this.spine.hooks.serialize.deregister(o);
      });
    }), this.storage;
  }
  /**
   * Get the cover url
   * @return {Promise<?string>} coverUrl
   */
  coverUrl() {
    return this.loaded.cover.then(() => this.cover ? this.archived ? this.archive.createUrl(this.cover) : this.cover : null);
  }
  /**
   * Load replacement urls
   * @private
   * @return {Promise} completed loading urls
   */
  replacements() {
    const t = this.resources.replacements().then(() => this.resources && this.resources.replaceCss()).then(() => {
    });
    return this.spine.hooks.serialize.register((e, i) => t.then(() => {
      this.resources && (i.output = this.resources.substitute(e, i.url));
    })), t;
  }
  /**
   * Find a DOM Range for a given CFI Range
   * @param  {EpubCFI} cfiRange a epub cfi range
   * @return {Promise}
   */
  getRange(t) {
    const e = new b(t), i = this.spine.get(e.spinePos), s = (n) => this.load(n);
    return i ? i.load(s).then(function(n) {
      return e.toRange(i.document);
    }) : new Promise((n, r) => {
      r("CFI could not be found");
    });
  }
  /**
   * Generates the Book Key using the identifier in the manifest or other string provided
   * @param  {string} [identifier] to use instead of metadata identifier
   * @return {string} key
   */
  key(t) {
    const e = t || this.packaging.metadata.identifier || this.url.filename;
    return `epubjs:${ct}:${e}`;
  }
  /**
   * Destroy the Book and all associated objects
   */
  destroy() {
    this.opened = void 0, this.loading = void 0, this.loaded = void 0, this.ready = void 0, this.replacementsReady = void 0, this.isOpen = false, this.isRendered = false, this.resourcesAbort && (this.resourcesAbort.abort(), this.resourcesAbort = void 0), this.spine && this.spine.destroy(), this.locations && this.locations.destroy(), this.pageList && this.pageList.destroy(), this.archive && this.archive.destroy(), this.resources && this.resources.destroy(), this.container && this.container.destroy(), this.packaging && this.packaging.destroy(), this.rendition && this.rendition.destroy(), this.displayOptions && this.displayOptions.destroy(), this.storage && (this.storage.destroy(), this.storage = void 0), this.spine = void 0, this.locations = void 0, this.pageList = void 0, this.archive = void 0, this.resources = void 0, this.container = void 0, this.packaging = void 0, this.rendition = void 0, this.navigation = void 0, this.url = void 0, this.path = void 0, this.archived = false;
  }
};
D(Dt.prototype);
var mi = class {
  constructor(t, e) {
    this.settings = L({
      ignoreClass: "",
      axis: "vertical",
      width: 0,
      height: 0,
      layout: void 0,
      globalLayoutProperties: {}
    }, e || {}), this.id = "epubjs-view:" + at(), this.section = t, this.index = t.index, this.element = this.container(this.settings.axis), this.added = false, this.displayed = false, this.rendered = false, this.width = this.settings.width, this.height = this.settings.height, this.fixedWidth = 0, this.fixedHeight = 0, this.epubcfi = new b(), this.layout = this.settings.layout;
  }
  container(t) {
    const e = document.createElement("div");
    return e.classList.add("epub-view"), e.style.overflow = "hidden", t && t === "horizontal" ? e.style.display = "inline-block" : e.style.display = "block", e;
  }
  create() {
    return this.frame ? this.frame : (this.element || (this.element = this.container()), this.frame = document.createElement("div"), this.frame.id = this.id, this.frame.style.overflow = "hidden", this.frame.style.wordSpacing = "initial", this.frame.style.lineHeight = "initial", this.resizing = true, this.element.style.visibility = "hidden", this.frame.style.visibility = "hidden", this.settings.axis === "horizontal" ? (this.frame.style.width = "auto", this.frame.style.height = "0") : (this.frame.style.width = "0", this.frame.style.height = "auto"), this._width = 0, this._height = 0, this.element.appendChild(this.frame), this.added = true, this.elementBounds = U(this.element), this.frame);
  }
  render(t, e) {
    return this.create(), this.size(), this.section.render(t).then((i) => this.load(i)).then(() => {
    }).then(() => {
      this.settings.layout.format(this.contents, this.section), this.addListeners(), e !== false && this.show(), this.emit(g.VIEWS.RENDERED, this.section);
    }).catch((i) => {
      this.emit(g.VIEWS.LOAD_ERROR, i);
    });
  }
  // Determine locks base on settings
  size(t, e) {
    const i = t || this.settings.width, s = e || this.settings.height;
    tt(this.section, this.layout.name) === "pre-paginated" ? this.lock("both", i, s) : this.settings.axis === "horizontal" ? this.lock("height", i, s) : this.lock("width", i, s);
  }
  // Lock an axis to element dimensions, taking borders into account
  lock(t, e, i) {
    const s = Y(this.element);
    let n;
    this.frame ? n = Y(this.frame) : n = { width: 0, height: 0 }, t === "width" && S(e) && (this.lockedWidth = e - s.width - n.width, this.resize(this.lockedWidth, false)), t === "height" && S(i) && (this.lockedHeight = i - s.height - n.height, this.resize(false, this.lockedHeight)), t === "both" && S(e) && S(i) && (this.lockedWidth = e - s.width - n.width, this.lockedHeight = i - s.height - n.height, this.resize(this.lockedWidth, this.lockedHeight));
  }
  // Resize a single axis based on content dimensions
  expand(t) {
    let e = this.lockedWidth, i = this.lockedHeight, s, n;
    !this.frame || this._expanding || (this._expanding = true, this.settings.axis === "horizontal" ? e = this.contentWidth(s) : this.settings.axis === "vertical" && (i = this.contentHeight(n)), (this._needsReframe || e !== this._width || i !== this._height) && this.resize(e, i), this._expanding = false);
  }
  contentWidth(t) {
    return this.frame.scrollWidth;
  }
  contentHeight(t) {
    return this.frame.scrollHeight;
  }
  resize(t, e) {
    if (!this.frame) return;
    S(t) && (this.frame.style.width = t + "px", this._width = t), S(e) && (this.frame.style.height = e + "px", this._height = e), this.prevBounds = this.elementBounds, this.elementBounds = U(this.element);
    const i = {
      width: this.elementBounds.width,
      height: this.elementBounds.height,
      widthDelta: this.elementBounds.width - this.prevBounds.width,
      heightDelta: this.elementBounds.height - this.prevBounds.height
    };
    this.onResize(this, i), this.emit(g.VIEWS.RESIZED, i);
  }
  load(t) {
    const e = new T(), i = e.promise, s = V(t, "text/html"), n = _(s, "body");
    return this.frame.innerHTML = n.innerHTML, this.document = this.frame.ownerDocument, this.window = this.document.defaultView, this.contents = new dt(this.document, this.frame, this.section.cfiBase, this.section.index), this.rendering = false, e.resolve(this.contents), i;
  }
  setLayout(t) {
    this.layout = t;
  }
  resizeListenters() {
  }
  addListeners() {
  }
  removeListeners() {
  }
  display(t) {
    const e = new T();
    return this.displayed ? e.resolve(this) : this.render(t).then(() => {
      this.displayed = true, e.resolve(this), this.emit(g.VIEWS.DISPLAYED, this), this.onDisplayed(this);
    }).catch((i) => {
      e.reject(i);
    }), e.promise;
  }
  show() {
    this.element.style.visibility = "visible", this.frame && (this.frame.style.visibility = "visible"), this.emit(g.VIEWS.SHOWN, this);
  }
  hide() {
    this.element.style.visibility = "hidden", this.frame.style.visibility = "hidden", this.stopExpanding = true, this.emit(g.VIEWS.HIDDEN, this);
  }
  position() {
    return this.element.getBoundingClientRect();
  }
  locationOf(t) {
    const e = this.frame.getBoundingClientRect(), i = this.contents.locationOf(t, this.settings.ignoreClass);
    return {
      left: window.scrollX + e.left + i.left,
      top: window.scrollY + e.top + i.top
    };
  }
  onDisplayed(t) {
  }
  onResize(t, e) {
  }
  bounds() {
    return this.elementBounds || (this.elementBounds = U(this.element)), this.elementBounds;
  }
  destroy() {
    this.displayed && (this.displayed = false, this.removeListeners(), this.stopExpanding = true, this.element.removeChild(this.frame), this.displayed = false, this.frame = void 0, this._textWidth = void 0, this._textHeight = void 0, this._width = void 0, this._height = void 0);
  }
};
D(mi.prototype);
function $(a, t) {
  return new Dt(a, t);
}
$.VERSION = ct;
typeof global < "u" && (globalThis.EPUBJS_VERSION = ct);
$.Book = Dt;
$.Rendition = Ot;
$.Contents = dt;
$.CFI = b;
$.utils = _e;

// entry.js
var entry_default = $;
export {
  entry_default as default
};
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
