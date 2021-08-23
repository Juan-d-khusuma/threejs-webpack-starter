"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    "use strict";
    var t = 100, e = 1e3, n = 1001, i = 1002, r = 1003, o = 1006, s = 1008, a = 1012, l = 1014, c = 1015, h = 1016, u = 1020, d = 1022, p = 1023, f = 1026, m = 1027, g = 2300, v = 2301, _ = 2302, y = 2400, x = 2401, b = 2402, w = 3e3, M = 7680, S = 35044, E = 35048, T = "300 es";
    function A() { }
    Object.assign(A.prototype, { addEventListener: function (t, e) { void 0 === this._listeners && (this._listeners = {}); var n = this._listeners; void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e); }, hasEventListener: function (t, e) { if (void 0 === this._listeners)
            return !1; var n = this._listeners; return void 0 !== n[t] && -1 !== n[t].indexOf(e); }, removeEventListener: function (t, e) { if (void 0 === this._listeners)
            return; var n = this._listeners[t]; if (void 0 !== n) {
            var t_1 = n.indexOf(e);
            -1 !== t_1 && n.splice(t_1, 1);
        } }, dispatchEvent: function (t) { if (void 0 === this._listeners)
            return; var e = this._listeners[t.type]; if (void 0 !== e) {
            t.target = this;
            var n_1 = e.slice(0);
            for (var e_1 = 0, i_1 = n_1.length; e_1 < i_1; e_1++)
                n_1[e_1].call(this, t);
        } } });
    var L = [];
    for (var t_2 = 0; t_2 < 256; t_2++)
        L[t_2] = (t_2 < 16 ? "0" : "") + t_2.toString(16);
    var C = 1234567;
    var R = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () { var t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0; return (L[255 & t] + L[t >> 8 & 255] + L[t >> 16 & 255] + L[t >> 24 & 255] + "-" + L[255 & e] + L[e >> 8 & 255] + "-" + L[e >> 16 & 15 | 64] + L[e >> 24 & 255] + "-" + L[63 & n | 128] + L[n >> 8 & 255] + "-" + L[n >> 16 & 255] + L[n >> 24 & 255] + L[255 & i] + L[i >> 8 & 255] + L[i >> 16 & 255] + L[i >> 24 & 255]).toUpperCase(); }, clamp: function (t, e, n) { return Math.max(e, Math.min(n, t)); }, euclideanModulo: function (t, e) { return (t % e + e) % e; }, mapLinear: function (t, e, n, i, r) { return i + (t - e) * (r - i) / (n - e); }, lerp: function (t, e, n) { return (1 - n) * t + n * e; }, damp: function (t, e, n, i) { return R.lerp(t, e, 1 - Math.exp(-n * i)); }, pingpong: function (t, e) {
            if (e === void 0) { e = 1; }
            return e - Math.abs(R.euclideanModulo(t, 2 * e) - e);
        }, smoothstep: function (t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t); }, smootherstep: function (t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10); }, randInt: function (t, e) { return t + Math.floor(Math.random() * (e - t + 1)); }, randFloat: function (t, e) { return t + Math.random() * (e - t); }, randFloatSpread: function (t) { return t * (.5 - Math.random()); }, seededRandom: function (t) { return void 0 !== t && (C = t % 2147483647), C = 16807 * C % 2147483647, (C - 1) / 2147483646; }, degToRad: function (t) { return t * R.DEG2RAD; }, radToDeg: function (t) { return t * R.RAD2DEG; }, isPowerOfTwo: function (t) { return 0 == (t & t - 1) && 0 !== t; }, ceilPowerOfTwo: function (t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)); }, floorPowerOfTwo: function (t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)); }, setQuaternionFromProperEuler: function (t, e, n, i, r) { var o = Math.cos, s = Math.sin, a = o(n / 2), l = s(n / 2), c = o((e + i) / 2), h = s((e + i) / 2), u = o((e - i) / 2), d = s((e - i) / 2), p = o((i - e) / 2), f = s((i - e) / 2); switch (r) {
            case "XYX":
                t.set(a * h, l * u, l * d, a * c);
                break;
            case "YZY":
                t.set(l * d, a * h, l * u, a * c);
                break;
            case "ZXZ":
                t.set(l * u, l * d, a * h, a * c);
                break;
            case "XZX":
                t.set(a * h, l * f, l * p, a * c);
                break;
            case "YXY":
                t.set(l * p, a * h, l * f, a * c);
                break;
            case "ZYZ":
                t.set(l * f, l * p, a * h, a * c);
                break;
            default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
        } } };
    var P = /** @class */ (function () {
        function P(t, e) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            this.x = t, this.y = e;
        }
        Object.defineProperty(P.prototype, "width", {
            get: function () { return this.x; },
            set: function (t) { this.x = t; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(P.prototype, "height", {
            get: function () { return this.y; },
            set: function (t) { this.y = t; },
            enumerable: false,
            configurable: true
        });
        P.prototype.set = function (t, e) { return this.x = t, this.y = e, this; };
        P.prototype.setScalar = function (t) { return this.x = t, this.y = t, this; };
        P.prototype.setX = function (t) { return this.x = t, this; };
        P.prototype.setY = function (t) { return this.y = t, this; };
        P.prototype.setComponent = function (t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; };
        P.prototype.getComponent = function (t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            default: throw new Error("index is out of range: " + t);
        } };
        P.prototype.clone = function () { return new this.constructor(this.x, this.y); };
        P.prototype.copy = function (t) { return this.x = t.x, this.y = t.y, this; };
        P.prototype.add = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this); };
        P.prototype.addScalar = function (t) { return this.x += t, this.y += t, this; };
        P.prototype.addVectors = function (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this; };
        P.prototype.addScaledVector = function (t, e) { return this.x += t.x * e, this.y += t.y * e, this; };
        P.prototype.sub = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this); };
        P.prototype.subScalar = function (t) { return this.x -= t, this.y -= t, this; };
        P.prototype.subVectors = function (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this; };
        P.prototype.multiply = function (t) { return this.x *= t.x, this.y *= t.y, this; };
        P.prototype.multiplyScalar = function (t) { return this.x *= t, this.y *= t, this; };
        P.prototype.divide = function (t) { return this.x /= t.x, this.y /= t.y, this; };
        P.prototype.divideScalar = function (t) { return this.multiplyScalar(1 / t); };
        P.prototype.applyMatrix3 = function (t) { var e = this.x, n = this.y, i = t.elements; return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this; };
        P.prototype.min = function (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this; };
        P.prototype.max = function (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this; };
        P.prototype.clamp = function (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this; };
        P.prototype.clampScalar = function (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this; };
        P.prototype.clampLength = function (t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))); };
        P.prototype.floor = function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this; };
        P.prototype.ceil = function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this; };
        P.prototype.round = function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this; };
        P.prototype.roundToZero = function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this; };
        P.prototype.negate = function () { return this.x = -this.x, this.y = -this.y, this; };
        P.prototype.dot = function (t) { return this.x * t.x + this.y * t.y; };
        P.prototype.cross = function (t) { return this.x * t.y - this.y * t.x; };
        P.prototype.lengthSq = function () { return this.x * this.x + this.y * this.y; };
        P.prototype.length = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
        P.prototype.manhattanLength = function () { return Math.abs(this.x) + Math.abs(this.y); };
        P.prototype.normalize = function () { return this.divideScalar(this.length() || 1); };
        P.prototype.angle = function () { return Math.atan2(-this.y, -this.x) + Math.PI; };
        P.prototype.distanceTo = function (t) { return Math.sqrt(this.distanceToSquared(t)); };
        P.prototype.distanceToSquared = function (t) { var e = this.x - t.x, n = this.y - t.y; return e * e + n * n; };
        P.prototype.manhattanDistanceTo = function (t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y); };
        P.prototype.setLength = function (t) { return this.normalize().multiplyScalar(t); };
        P.prototype.lerp = function (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this; };
        P.prototype.lerpVectors = function (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this; };
        P.prototype.equals = function (t) { return t.x === this.x && t.y === this.y; };
        P.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            return this.x = t[e], this.y = t[e + 1], this;
        };
        P.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this.x, t[e + 1] = this.y, t;
        };
        P.prototype.fromBufferAttribute = function (t, e, n) { return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this; };
        P.prototype.rotateAround = function (t, e) { var n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, o = this.y - t.y; return this.x = r * n - o * i + t.x, this.y = r * i + o * n + t.y, this; };
        P.prototype.random = function () { return this.x = Math.random(), this.y = Math.random(), this; };
        return P;
    }());
    P.prototype.isVector2 = !0;
    var D = /** @class */ (function () {
        function D() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        D.prototype.set = function (t, e, n, i, r, o, s, a, l) { var c = this.elements; return c[0] = t, c[1] = i, c[2] = s, c[3] = e, c[4] = r, c[5] = a, c[6] = n, c[7] = o, c[8] = l, this; };
        D.prototype.identity = function () { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this; };
        D.prototype.copy = function (t) { var e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this; };
        D.prototype.extractBasis = function (t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this; };
        D.prototype.setFromMatrix4 = function (t) { var e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this; };
        D.prototype.multiply = function (t) { return this.multiplyMatrices(this, t); };
        D.prototype.premultiply = function (t) { return this.multiplyMatrices(t, this); };
        D.prototype.multiplyMatrices = function (t, e) { var n = t.elements, i = e.elements, r = this.elements, o = n[0], s = n[3], a = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], f = i[0], m = i[3], g = i[6], v = i[1], _ = i[4], y = i[7], x = i[2], b = i[5], w = i[8]; return r[0] = o * f + s * v + a * x, r[3] = o * m + s * _ + a * b, r[6] = o * g + s * y + a * w, r[1] = l * f + c * v + h * x, r[4] = l * m + c * _ + h * b, r[7] = l * g + c * y + h * w, r[2] = u * f + d * v + p * x, r[5] = u * m + d * _ + p * b, r[8] = u * g + d * y + p * w, this; };
        D.prototype.multiplyScalar = function (t) { var e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this; };
        D.prototype.determinant = function () { var t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], a = t[6], l = t[7], c = t[8]; return e * o * c - e * s * l - n * r * c + n * s * a + i * r * l - i * o * a; };
        D.prototype.invert = function () { var t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], a = t[6], l = t[7], c = t[8], h = c * o - s * l, u = s * a - c * r, d = l * r - o * a, p = e * h + n * u + i * d; if (0 === p)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); var f = 1 / p; return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (s * n - i * o) * f, t[3] = u * f, t[4] = (c * e - i * a) * f, t[5] = (i * r - s * e) * f, t[6] = d * f, t[7] = (n * a - l * e) * f, t[8] = (o * e - n * r) * f, this; };
        D.prototype.transpose = function () { var t; var e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this; };
        D.prototype.getNormalMatrix = function (t) { return this.setFromMatrix4(t).invert().transpose(); };
        D.prototype.transposeIntoArray = function (t) { var e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this; };
        D.prototype.setUvTransform = function (t, e, n, i, r, o, s) { var a = Math.cos(r), l = Math.sin(r); return this.set(n * a, n * l, -n * (a * o + l * s) + o + t, -i * l, i * a, -i * (-l * o + a * s) + s + e, 0, 0, 1), this; };
        D.prototype.scale = function (t, e) { var n = this.elements; return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this; };
        D.prototype.rotate = function (t) { var e = Math.cos(t), n = Math.sin(t), i = this.elements, r = i[0], o = i[3], s = i[6], a = i[1], l = i[4], c = i[7]; return i[0] = e * r + n * a, i[3] = e * o + n * l, i[6] = e * s + n * c, i[1] = -n * r + e * a, i[4] = -n * o + e * l, i[7] = -n * s + e * c, this; };
        D.prototype.translate = function (t, e) { var n = this.elements; return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this; };
        D.prototype.equals = function (t) { var e = this.elements, n = t.elements; for (var t_3 = 0; t_3 < 9; t_3++)
            if (e[t_3] !== n[t_3])
                return !1; return !0; };
        D.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            for (var n_2 = 0; n_2 < 9; n_2++)
                this.elements[n_2] = t[n_2 + e];
            return this;
        };
        D.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
        };
        D.prototype.clone = function () { return (new this.constructor).fromArray(this.elements); };
        return D;
    }());
    var I;
    D.prototype.isMatrix3 = !0;
    var N = { getDataURL: function (t) { if (/^data:/i.test(t.src))
            return t.src; if ("undefined" == typeof HTMLCanvasElement)
            return t.src; var e; if (t instanceof HTMLCanvasElement)
            e = t;
        else {
            void 0 === I && (I = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), I.width = t.width, I.height = t.height;
            var n_3 = I.getContext("2d");
            t instanceof ImageData ? n_3.putImageData(t, 0, 0) : n_3.drawImage(t, 0, 0, t.width, t.height), e = I;
        } return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png"); } };
    var O = 0;
    var z = /** @class */ (function (_super) {
        __extends(z, _super);
        function z(t, e, n, i, r, o, s, a, l, c) {
            if (t === void 0) { t = z.DEFAULT_IMAGE; }
            if (e === void 0) { e = z.DEFAULT_MAPPING; }
            if (n === void 0) { n = 1001; }
            if (i === void 0) { i = 1001; }
            if (r === void 0) { r = 1006; }
            if (o === void 0) { o = 1008; }
            if (s === void 0) { s = 1023; }
            if (a === void 0) { a = 1009; }
            if (l === void 0) { l = 1; }
            if (c === void 0) { c = 3e3; }
            var _this = this;
            _this = _super.call(this) || this, Object.defineProperty(_this, "id", { value: O++ }), _this.uuid = R.generateUUID(), _this.name = "", _this.image = t, _this.mipmaps = [], _this.mapping = e, _this.wrapS = n, _this.wrapT = i, _this.magFilter = r, _this.minFilter = o, _this.anisotropy = l, _this.format = s, _this.internalFormat = null, _this.type = a, _this.offset = new P(0, 0), _this.repeat = new P(1, 1), _this.center = new P(0, 0), _this.rotation = 0, _this.matrixAutoUpdate = !0, _this.matrix = new D, _this.generateMipmaps = !0, _this.premultiplyAlpha = !1, _this.flipY = !0, _this.unpackAlignment = 4, _this.encoding = c, _this.version = 0, _this.onUpdate = null;
            return _this;
        }
        z.prototype.updateMatrix = function () { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y); };
        z.prototype.clone = function () { return (new this.constructor).copy(this); };
        z.prototype.copy = function (t) { return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this; };
        z.prototype.toJSON = function (t) { var e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid]; var n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; if (void 0 !== this.image) {
            var i_2 = this.image;
            if (void 0 === i_2.uuid && (i_2.uuid = R.generateUUID()), !e && void 0 === t.images[i_2.uuid]) {
                var e_2;
                if (Array.isArray(i_2)) {
                    e_2 = [];
                    for (var t_4 = 0, n_4 = i_2.length; t_4 < n_4; t_4++)
                        i_2[t_4].isDataTexture ? e_2.push(B(i_2[t_4].image)) : e_2.push(B(i_2[t_4]));
                }
                else
                    e_2 = B(i_2);
                t.images[i_2.uuid] = { uuid: i_2.uuid, url: e_2 };
            }
            n.image = i_2.uuid;
        } return e || (t.textures[this.uuid] = n), n; };
        z.prototype.dispose = function () { this.dispatchEvent({ type: "dispose" }); };
        z.prototype.transformUv = function (t) { if (300 !== this.mapping)
            return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
            switch (this.wrapS) {
                case e:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case n:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case i: 1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            } if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
                case e:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case n:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case i: 1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            } return this.flipY && (t.y = 1 - t.y), t; };
        Object.defineProperty(z.prototype, "needsUpdate", {
            set: function (t) { !0 === t && this.version++; },
            enumerable: false,
            configurable: true
        });
        return z;
    }(A));
    function B(t) { return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? N.getDataURL(t) : t.data ? { data: Array.prototype.slice.call(t.data), width: t.width, height: t.height, type: t.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}); }
    z.DEFAULT_IMAGE = void 0, z.DEFAULT_MAPPING = 300, z.prototype.isTexture = !0;
    var H = /** @class */ (function () {
        function H(t, e, n, i) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = 0; }
            if (i === void 0) { i = 1; }
            this.x = t, this.y = e, this.z = n, this.w = i;
        }
        Object.defineProperty(H.prototype, "width", {
            get: function () { return this.z; },
            set: function (t) { this.z = t; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(H.prototype, "height", {
            get: function () { return this.w; },
            set: function (t) { this.w = t; },
            enumerable: false,
            configurable: true
        });
        H.prototype.set = function (t, e, n, i) { return this.x = t, this.y = e, this.z = n, this.w = i, this; };
        H.prototype.setScalar = function (t) { return this.x = t, this.y = t, this.z = t, this.w = t, this; };
        H.prototype.setX = function (t) { return this.x = t, this; };
        H.prototype.setY = function (t) { return this.y = t, this; };
        H.prototype.setZ = function (t) { return this.z = t, this; };
        H.prototype.setW = function (t) { return this.w = t, this; };
        H.prototype.setComponent = function (t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; };
        H.prototype.getComponent = function (t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            case 3: return this.w;
            default: throw new Error("index is out of range: " + t);
        } };
        H.prototype.clone = function () { return new this.constructor(this.x, this.y, this.z, this.w); };
        H.prototype.copy = function (t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this; };
        H.prototype.add = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this); };
        H.prototype.addScalar = function (t) { return this.x += t, this.y += t, this.z += t, this.w += t, this; };
        H.prototype.addVectors = function (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this; };
        H.prototype.addScaledVector = function (t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this; };
        H.prototype.sub = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this); };
        H.prototype.subScalar = function (t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this; };
        H.prototype.subVectors = function (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this; };
        H.prototype.multiply = function (t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this; };
        H.prototype.multiplyScalar = function (t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this; };
        H.prototype.applyMatrix4 = function (t) { var e = this.x, n = this.y, i = this.z, r = this.w, o = t.elements; return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r, this; };
        H.prototype.divideScalar = function (t) { return this.multiplyScalar(1 / t); };
        H.prototype.setAxisAngleFromQuaternion = function (t) { this.w = 2 * Math.acos(t.w); var e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this; };
        H.prototype.setAxisAngleFromRotationMatrix = function (t) { var e, n, i, r; var o = .01, s = .1, a = t.elements, l = a[0], c = a[4], h = a[8], u = a[1], d = a[5], p = a[9], f = a[2], m = a[6], g = a[10]; if (Math.abs(c - u) < o && Math.abs(h - f) < o && Math.abs(p - m) < o) {
            if (Math.abs(c + u) < s && Math.abs(h + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s)
                return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            var t_5 = (l + 1) / 2, a_1 = (d + 1) / 2, v_1 = (g + 1) / 2, _1 = (c + u) / 4, y_1 = (h + f) / 4, x_1 = (p + m) / 4;
            return t_5 > a_1 && t_5 > v_1 ? t_5 < o ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t_5), i = _1 / n, r = y_1 / n) : a_1 > v_1 ? a_1 < o ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(a_1), n = _1 / i, r = x_1 / i) : v_1 < o ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v_1), n = y_1 / r, i = x_1 / r), this.set(n, i, r, e), this;
        } var v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)); return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this; };
        H.prototype.min = function (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this; };
        H.prototype.max = function (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this; };
        H.prototype.clamp = function (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this; };
        H.prototype.clampScalar = function (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this; };
        H.prototype.clampLength = function (t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))); };
        H.prototype.floor = function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this; };
        H.prototype.ceil = function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this; };
        H.prototype.round = function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this; };
        H.prototype.roundToZero = function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this; };
        H.prototype.negate = function () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this; };
        H.prototype.dot = function (t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w; };
        H.prototype.lengthSq = function () { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; };
        H.prototype.length = function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); };
        H.prototype.manhattanLength = function () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); };
        H.prototype.normalize = function () { return this.divideScalar(this.length() || 1); };
        H.prototype.setLength = function (t) { return this.normalize().multiplyScalar(t); };
        H.prototype.lerp = function (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this; };
        H.prototype.lerpVectors = function (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this; };
        H.prototype.equals = function (t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w; };
        H.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        };
        H.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        };
        H.prototype.fromBufferAttribute = function (t, e, n) { return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this; };
        H.prototype.random = function () { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this; };
        return H;
    }());
    H.prototype.isVector4 = !0;
    var F = /** @class */ (function (_super) {
        __extends(F, _super);
        function F(t, e, n) {
            var _this = this;
            _this = _super.call(this) || this, _this.width = t, _this.height = e, _this.depth = 1, _this.scissor = new H(0, 0, t, e), _this.scissorTest = !1, _this.viewport = new H(0, 0, t, e), n = n || {}, _this.texture = new z(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), _this.texture.image = {}, _this.texture.image.width = t, _this.texture.image.height = e, _this.texture.image.depth = 1, _this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, _this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : o, _this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, _this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, _this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
            return _this;
        }
        F.prototype.setTexture = function (t) { t.image = { width: this.width, height: this.height, depth: this.depth }, this.texture = t; };
        F.prototype.setSize = function (t, e, n) {
            if (n === void 0) { n = 1; }
            this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        };
        F.prototype.clone = function () { return (new this.constructor).copy(this); };
        F.prototype.copy = function (t) { return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this; };
        F.prototype.dispose = function () { this.dispatchEvent({ type: "dispose" }); };
        return F;
    }(A));
    F.prototype.isWebGLRenderTarget = !0, /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(t, e, n) {
            var _this = this;
            _this = _super.call(this, t, e, n) || this, _this.samples = 4;
            return _this;
        }
        class_1.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.samples = t.samples, this; };
        return class_1;
    }(F)).prototype.isWebGLMultisampleRenderTarget = !0;
    var U = /** @class */ (function () {
        function U(t, e, n, i) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = 0; }
            if (i === void 0) { i = 1; }
            this._x = t, this._y = e, this._z = n, this._w = i;
        }
        U.slerp = function (t, e, n, i) { return n.copy(t).slerp(e, i); };
        U.slerpFlat = function (t, e, n, i, r, o, s) { var a = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3]; var u = r[o + 0], d = r[o + 1], p = r[o + 2], f = r[o + 3]; if (0 === s)
            return t[e + 0] = a, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h); if (1 === s)
            return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = f); if (h !== f || a !== u || l !== d || c !== p) {
            var t_6 = 1 - s;
            var e_3 = a * u + l * d + c * p + h * f, n_5 = e_3 >= 0 ? 1 : -1, i_3 = 1 - e_3 * e_3;
            if (i_3 > Number.EPSILON) {
                var r_1 = Math.sqrt(i_3), o_1 = Math.atan2(r_1, e_3 * n_5);
                t_6 = Math.sin(t_6 * o_1) / r_1, s = Math.sin(s * o_1) / r_1;
            }
            var r_2 = s * n_5;
            if (a = a * t_6 + u * r_2, l = l * t_6 + d * r_2, c = c * t_6 + p * r_2, h = h * t_6 + f * r_2, t_6 === 1 - s) {
                var t_7 = 1 / Math.sqrt(a * a + l * l + c * c + h * h);
                a *= t_7, l *= t_7, c *= t_7, h *= t_7;
            }
        } t[e] = a, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h; };
        U.multiplyQuaternionsFlat = function (t, e, n, i, r, o) { var s = n[i], a = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[o], u = r[o + 1], d = r[o + 2], p = r[o + 3]; return t[e] = s * p + c * h + a * d - l * u, t[e + 1] = a * p + c * u + l * h - s * d, t[e + 2] = l * p + c * d + s * u - a * h, t[e + 3] = c * p - s * h - a * u - l * d, t; };
        Object.defineProperty(U.prototype, "x", {
            get: function () { return this._x; },
            set: function (t) { this._x = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(U.prototype, "y", {
            get: function () { return this._y; },
            set: function (t) { this._y = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(U.prototype, "z", {
            get: function () { return this._z; },
            set: function (t) { this._z = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(U.prototype, "w", {
            get: function () { return this._w; },
            set: function (t) { this._w = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        U.prototype.set = function (t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this; };
        U.prototype.clone = function () { return new this.constructor(this._x, this._y, this._z, this._w); };
        U.prototype.copy = function (t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this; };
        U.prototype.setFromEuler = function (t, e) { if (!t || !t.isEuler)
            throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); var n = t._x, i = t._y, r = t._z, o = t._order, s = Math.cos, a = Math.sin, l = s(n / 2), c = s(i / 2), h = s(r / 2), u = a(n / 2), d = a(i / 2), p = a(r / 2); switch (o) {
            case "XYZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                break;
            default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
        } return !1 !== e && this._onChangeCallback(), this; };
        U.prototype.setFromAxisAngle = function (t, e) { var n = e / 2, i = Math.sin(n); return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this; };
        U.prototype.setFromRotationMatrix = function (t) { var e = t.elements, n = e[0], i = e[4], r = e[8], o = e[1], s = e[5], a = e[9], l = e[2], c = e[6], h = e[10], u = n + s + h; if (u > 0) {
            var t_8 = .5 / Math.sqrt(u + 1);
            this._w = .25 / t_8, this._x = (c - a) * t_8, this._y = (r - l) * t_8, this._z = (o - i) * t_8;
        }
        else if (n > s && n > h) {
            var t_9 = 2 * Math.sqrt(1 + n - s - h);
            this._w = (c - a) / t_9, this._x = .25 * t_9, this._y = (i + o) / t_9, this._z = (r + l) / t_9;
        }
        else if (s > h) {
            var t_10 = 2 * Math.sqrt(1 + s - n - h);
            this._w = (r - l) / t_10, this._x = (i + o) / t_10, this._y = .25 * t_10, this._z = (a + c) / t_10;
        }
        else {
            var t_11 = 2 * Math.sqrt(1 + h - n - s);
            this._w = (o - i) / t_11, this._x = (r + l) / t_11, this._y = (a + c) / t_11, this._z = .25 * t_11;
        } return this._onChangeCallback(), this; };
        U.prototype.setFromUnitVectors = function (t, e) { var n = t.dot(e) + 1; return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize(); };
        U.prototype.angleTo = function (t) { return 2 * Math.acos(Math.abs(R.clamp(this.dot(t), -1, 1))); };
        U.prototype.rotateTowards = function (t, e) { var n = this.angleTo(t); if (0 === n)
            return this; var i = Math.min(1, e / n); return this.slerp(t, i), this; };
        U.prototype.identity = function () { return this.set(0, 0, 0, 1); };
        U.prototype.invert = function () { return this.conjugate(); };
        U.prototype.conjugate = function () { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this; };
        U.prototype.dot = function (t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w; };
        U.prototype.lengthSq = function () { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; };
        U.prototype.length = function () { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); };
        U.prototype.normalize = function () { var t = this.length(); return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this; };
        U.prototype.multiply = function (t, e) { return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t); };
        U.prototype.premultiply = function (t) { return this.multiplyQuaternions(t, this); };
        U.prototype.multiplyQuaternions = function (t, e) { var n = t._x, i = t._y, r = t._z, o = t._w, s = e._x, a = e._y, l = e._z, c = e._w; return this._x = n * c + o * s + i * l - r * a, this._y = i * c + o * a + r * s - n * l, this._z = r * c + o * l + n * a - i * s, this._w = o * c - n * s - i * a - r * l, this._onChangeCallback(), this; };
        U.prototype.slerp = function (t, e) { if (0 === e)
            return this; if (1 === e)
            return this.copy(t); var n = this._x, i = this._y, r = this._z, o = this._w; var s = o * t._w + n * t._x + i * t._y + r * t._z; if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1)
            return this._w = o, this._x = n, this._y = i, this._z = r, this; var a = 1 - s * s; if (a <= Number.EPSILON) {
            var t_12 = 1 - e;
            return this._w = t_12 * o + e * this._w, this._x = t_12 * n + e * this._x, this._y = t_12 * i + e * this._y, this._z = t_12 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
        } var l = Math.sqrt(a), c = Math.atan2(l, s), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l; return this._w = o * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this; };
        U.prototype.equals = function (t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w; };
        U.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        };
        U.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        };
        U.prototype.fromBufferAttribute = function (t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this; };
        U.prototype._onChange = function (t) { return this._onChangeCallback = t, this; };
        U.prototype._onChangeCallback = function () { };
        return U;
    }());
    U.prototype.isQuaternion = !0;
    var k = /** @class */ (function () {
        function k(t, e, n) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = 0; }
            this.x = t, this.y = e, this.z = n;
        }
        k.prototype.set = function (t, e, n) { return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this; };
        k.prototype.setScalar = function (t) { return this.x = t, this.y = t, this.z = t, this; };
        k.prototype.setX = function (t) { return this.x = t, this; };
        k.prototype.setY = function (t) { return this.y = t, this; };
        k.prototype.setZ = function (t) { return this.z = t, this; };
        k.prototype.setComponent = function (t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; };
        k.prototype.getComponent = function (t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            default: throw new Error("index is out of range: " + t);
        } };
        k.prototype.clone = function () { return new this.constructor(this.x, this.y, this.z); };
        k.prototype.copy = function (t) { return this.x = t.x, this.y = t.y, this.z = t.z, this; };
        k.prototype.add = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this); };
        k.prototype.addScalar = function (t) { return this.x += t, this.y += t, this.z += t, this; };
        k.prototype.addVectors = function (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this; };
        k.prototype.addScaledVector = function (t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this; };
        k.prototype.sub = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this); };
        k.prototype.subScalar = function (t) { return this.x -= t, this.y -= t, this.z -= t, this; };
        k.prototype.subVectors = function (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this; };
        k.prototype.multiply = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this); };
        k.prototype.multiplyScalar = function (t) { return this.x *= t, this.y *= t, this.z *= t, this; };
        k.prototype.multiplyVectors = function (t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this; };
        k.prototype.applyEuler = function (t) { return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(V.setFromEuler(t)); };
        k.prototype.applyAxisAngle = function (t, e) { return this.applyQuaternion(V.setFromAxisAngle(t, e)); };
        k.prototype.applyMatrix3 = function (t) { var e = this.x, n = this.y, i = this.z, r = t.elements; return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this; };
        k.prototype.applyNormalMatrix = function (t) { return this.applyMatrix3(t).normalize(); };
        k.prototype.applyMatrix4 = function (t) { var e = this.x, n = this.y, i = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o, this; };
        k.prototype.applyQuaternion = function (t) { var e = this.x, n = this.y, i = this.z, r = t.x, o = t.y, s = t.z, a = t.w, l = a * e + o * i - s * n, c = a * n + s * e - r * i, h = a * i + r * n - o * e, u = -r * e - o * n - s * i; return this.x = l * a + u * -r + c * -s - h * -o, this.y = c * a + u * -o + h * -r - l * -s, this.z = h * a + u * -s + l * -o - c * -r, this; };
        k.prototype.project = function (t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix); };
        k.prototype.unproject = function (t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld); };
        k.prototype.transformDirection = function (t) { var e = this.x, n = this.y, i = this.z, r = t.elements; return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize(); };
        k.prototype.divide = function (t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this; };
        k.prototype.divideScalar = function (t) { return this.multiplyScalar(1 / t); };
        k.prototype.min = function (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this; };
        k.prototype.max = function (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this; };
        k.prototype.clamp = function (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this; };
        k.prototype.clampScalar = function (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this; };
        k.prototype.clampLength = function (t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))); };
        k.prototype.floor = function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this; };
        k.prototype.ceil = function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this; };
        k.prototype.round = function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this; };
        k.prototype.roundToZero = function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this; };
        k.prototype.negate = function () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this; };
        k.prototype.dot = function (t) { return this.x * t.x + this.y * t.y + this.z * t.z; };
        k.prototype.lengthSq = function () { return this.x * this.x + this.y * this.y + this.z * this.z; };
        k.prototype.length = function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); };
        k.prototype.manhattanLength = function () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z); };
        k.prototype.normalize = function () { return this.divideScalar(this.length() || 1); };
        k.prototype.setLength = function (t) { return this.normalize().multiplyScalar(t); };
        k.prototype.lerp = function (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this; };
        k.prototype.lerpVectors = function (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this; };
        k.prototype.cross = function (t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t); };
        k.prototype.crossVectors = function (t, e) { var n = t.x, i = t.y, r = t.z, o = e.x, s = e.y, a = e.z; return this.x = i * a - r * s, this.y = r * o - n * a, this.z = n * s - i * o, this; };
        k.prototype.projectOnVector = function (t) { var e = t.lengthSq(); if (0 === e)
            return this.set(0, 0, 0); var n = t.dot(this) / e; return this.copy(t).multiplyScalar(n); };
        k.prototype.projectOnPlane = function (t) { return G.copy(this).projectOnVector(t), this.sub(G); };
        k.prototype.reflect = function (t) { return this.sub(G.copy(t).multiplyScalar(2 * this.dot(t))); };
        k.prototype.angleTo = function (t) { var e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (0 === e)
            return Math.PI / 2; var n = this.dot(t) / e; return Math.acos(R.clamp(n, -1, 1)); };
        k.prototype.distanceTo = function (t) { return Math.sqrt(this.distanceToSquared(t)); };
        k.prototype.distanceToSquared = function (t) { var e = this.x - t.x, n = this.y - t.y, i = this.z - t.z; return e * e + n * n + i * i; };
        k.prototype.manhattanDistanceTo = function (t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z); };
        k.prototype.setFromSpherical = function (t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta); };
        k.prototype.setFromSphericalCoords = function (t, e, n) { var i = Math.sin(e) * t; return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this; };
        k.prototype.setFromCylindrical = function (t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y); };
        k.prototype.setFromCylindricalCoords = function (t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this; };
        k.prototype.setFromMatrixPosition = function (t) { var e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this; };
        k.prototype.setFromMatrixScale = function (t) { var e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = i, this; };
        k.prototype.setFromMatrixColumn = function (t, e) { return this.fromArray(t.elements, 4 * e); };
        k.prototype.setFromMatrix3Column = function (t, e) { return this.fromArray(t.elements, 3 * e); };
        k.prototype.equals = function (t) { return t.x === this.x && t.y === this.y && t.z === this.z; };
        k.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        };
        k.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        };
        k.prototype.fromBufferAttribute = function (t, e, n) { return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this; };
        k.prototype.random = function () { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this; };
        return k;
    }());
    k.prototype.isVector3 = !0;
    var G = new k, V = new U;
    var W = /** @class */ (function () {
        function W(t, e) {
            if (t === void 0) { t = new k(1 / 0, 1 / 0, 1 / 0); }
            if (e === void 0) { e = new k(-1 / 0, -1 / 0, -1 / 0); }
            this.min = t, this.max = e;
        }
        W.prototype.set = function (t, e) { return this.min.copy(t), this.max.copy(e), this; };
        W.prototype.setFromArray = function (t) { var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, s = -1 / 0; for (var a_2 = 0, l_1 = t.length; a_2 < l_1; a_2 += 3) {
            var l_2 = t[a_2], c_1 = t[a_2 + 1], h_1 = t[a_2 + 2];
            l_2 < e && (e = l_2), c_1 < n && (n = c_1), h_1 < i && (i = h_1), l_2 > r && (r = l_2), c_1 > o && (o = c_1), h_1 > s && (s = h_1);
        } return this.min.set(e, n, i), this.max.set(r, o, s), this; };
        W.prototype.setFromBufferAttribute = function (t) { var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, s = -1 / 0; for (var a_3 = 0, l_3 = t.count; a_3 < l_3; a_3++) {
            var l_4 = t.getX(a_3), c_2 = t.getY(a_3), h_2 = t.getZ(a_3);
            l_4 < e && (e = l_4), c_2 < n && (n = c_2), h_2 < i && (i = h_2), l_4 > r && (r = l_4), c_2 > o && (o = c_2), h_2 > s && (s = h_2);
        } return this.min.set(e, n, i), this.max.set(r, o, s), this; };
        W.prototype.setFromPoints = function (t) { this.makeEmpty(); for (var e_4 = 0, n_6 = t.length; e_4 < n_6; e_4++)
            this.expandByPoint(t[e_4]); return this; };
        W.prototype.setFromCenterAndSize = function (t, e) { var n = q.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this; };
        W.prototype.setFromObject = function (t) { return this.makeEmpty(), this.expandByObject(t); };
        W.prototype.clone = function () { return (new this.constructor).copy(this); };
        W.prototype.copy = function (t) { return this.min.copy(t.min), this.max.copy(t.max), this; };
        W.prototype.makeEmpty = function () { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this; };
        W.prototype.isEmpty = function () { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; };
        W.prototype.getCenter = function (t) { return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new k), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5); };
        W.prototype.getSize = function (t) { return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new k), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min); };
        W.prototype.expandByPoint = function (t) { return this.min.min(t), this.max.max(t), this; };
        W.prototype.expandByVector = function (t) { return this.min.sub(t), this.max.add(t), this; };
        W.prototype.expandByScalar = function (t) { return this.min.addScalar(-t), this.max.addScalar(t), this; };
        W.prototype.expandByObject = function (t) { t.updateWorldMatrix(!1, !1); var e = t.geometry; void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), X.copy(e.boundingBox), X.applyMatrix4(t.matrixWorld), this.union(X)); var n = t.children; for (var t_13 = 0, e_5 = n.length; t_13 < e_5; t_13++)
            this.expandByObject(n[t_13]); return this; };
        W.prototype.containsPoint = function (t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z); };
        W.prototype.containsBox = function (t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z; };
        W.prototype.getParameter = function (t, e) { return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new k), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)); };
        W.prototype.intersectsBox = function (t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z); };
        W.prototype.intersectsSphere = function (t) { return this.clampPoint(t.center, q), q.distanceToSquared(t.center) <= t.radius * t.radius; };
        W.prototype.intersectsPlane = function (t) { var e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant; };
        W.prototype.intersectsTriangle = function (t) { if (this.isEmpty())
            return !1; this.getCenter(tt), et.subVectors(this.max, tt), Y.subVectors(t.a, tt), J.subVectors(t.b, tt), Z.subVectors(t.c, tt), Q.subVectors(J, Y), K.subVectors(Z, J), $.subVectors(Y, Z); var e = [0, -Q.z, Q.y, 0, -K.z, K.y, 0, -$.z, $.y, Q.z, 0, -Q.x, K.z, 0, -K.x, $.z, 0, -$.x, -Q.y, Q.x, 0, -K.y, K.x, 0, -$.y, $.x, 0]; return !!rt(e, Y, J, Z, et) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!rt(e, Y, J, Z, et) && (nt.crossVectors(Q, K), e = [nt.x, nt.y, nt.z], rt(e, Y, J, Z, et))); };
        W.prototype.clampPoint = function (t, e) { return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new k), e.copy(t).clamp(this.min, this.max); };
        W.prototype.distanceToPoint = function (t) { return q.copy(t).clamp(this.min, this.max).sub(t).length(); };
        W.prototype.getBoundingSphere = function (t) { return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(q).length(), t; };
        W.prototype.intersect = function (t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this; };
        W.prototype.union = function (t) { return this.min.min(t.min), this.max.max(t.max), this; };
        W.prototype.applyMatrix4 = function (t) { return this.isEmpty() || (j[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), j[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), j[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), j[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), j[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), j[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), j[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), j[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(j)), this; };
        W.prototype.translate = function (t) { return this.min.add(t), this.max.add(t), this; };
        W.prototype.equals = function (t) { return t.min.equals(this.min) && t.max.equals(this.max); };
        return W;
    }());
    W.prototype.isBox3 = !0;
    var j = [new k, new k, new k, new k, new k, new k, new k, new k], q = new k, X = new W, Y = new k, J = new k, Z = new k, Q = new k, K = new k, $ = new k, tt = new k, et = new k, nt = new k, it = new k;
    function rt(t, e, n, i, r) { for (var o_2 = 0, s_1 = t.length - 3; o_2 <= s_1; o_2 += 3) {
        it.fromArray(t, o_2);
        var s_2 = r.x * Math.abs(it.x) + r.y * Math.abs(it.y) + r.z * Math.abs(it.z), a_4 = e.dot(it), l_5 = n.dot(it), c_3 = i.dot(it);
        if (Math.max(-Math.max(a_4, l_5, c_3), Math.min(a_4, l_5, c_3)) > s_2)
            return !1;
    } return !0; }
    var ot = new W;
    var st = /** @class */ (function () {
        function st(t, e) {
            if (t === void 0) { t = new k; }
            if (e === void 0) { e = -1; }
            this.center = t, this.radius = e;
        }
        st.prototype.set = function (t, e) { return this.center.copy(t), this.radius = e, this; };
        st.prototype.setFromPoints = function (t, e) { var n = this.center; void 0 !== e ? n.copy(e) : ot.setFromPoints(t).getCenter(n); var i = 0; for (var e_6 = 0, r_3 = t.length; e_6 < r_3; e_6++)
            i = Math.max(i, n.distanceToSquared(t[e_6])); return this.radius = Math.sqrt(i), this; };
        st.prototype.copy = function (t) { return this.center.copy(t.center), this.radius = t.radius, this; };
        st.prototype.isEmpty = function () { return this.radius < 0; };
        st.prototype.makeEmpty = function () { return this.center.set(0, 0, 0), this.radius = -1, this; };
        st.prototype.containsPoint = function (t) { return t.distanceToSquared(this.center) <= this.radius * this.radius; };
        st.prototype.distanceToPoint = function (t) { return t.distanceTo(this.center) - this.radius; };
        st.prototype.intersectsSphere = function (t) { var e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e; };
        st.prototype.intersectsBox = function (t) { return t.intersectsSphere(this); };
        st.prototype.intersectsPlane = function (t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius; };
        st.prototype.clampPoint = function (t, e) { var n = this.center.distanceToSquared(t); return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new k), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e; };
        st.prototype.getBoundingBox = function (t) { return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new W), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t); };
        st.prototype.applyMatrix4 = function (t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this; };
        st.prototype.translate = function (t) { return this.center.add(t), this; };
        st.prototype.equals = function (t) { return t.center.equals(this.center) && t.radius === this.radius; };
        st.prototype.clone = function () { return (new this.constructor).copy(this); };
        return st;
    }());
    var at = new k, lt = new k, ct = new k, ht = new k, ut = new k, dt = new k, pt = new k;
    var ft = /** @class */ (function () {
        function ft(t, e) {
            if (t === void 0) { t = new k; }
            if (e === void 0) { e = new k(0, 0, -1); }
            this.origin = t, this.direction = e;
        }
        ft.prototype.set = function (t, e) { return this.origin.copy(t), this.direction.copy(e), this; };
        ft.prototype.copy = function (t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this; };
        ft.prototype.at = function (t, e) { return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new k), e.copy(this.direction).multiplyScalar(t).add(this.origin); };
        ft.prototype.lookAt = function (t) { return this.direction.copy(t).sub(this.origin).normalize(), this; };
        ft.prototype.recast = function (t) { return this.origin.copy(this.at(t, at)), this; };
        ft.prototype.closestPointToPoint = function (t, e) { void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new k), e.subVectors(t, this.origin); var n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin); };
        ft.prototype.distanceToPoint = function (t) { return Math.sqrt(this.distanceSqToPoint(t)); };
        ft.prototype.distanceSqToPoint = function (t) { var e = at.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (at.copy(this.direction).multiplyScalar(e).add(this.origin), at.distanceToSquared(t)); };
        ft.prototype.distanceSqToSegment = function (t, e, n, i) { lt.copy(t).add(e).multiplyScalar(.5), ct.copy(e).sub(t).normalize(), ht.copy(this.origin).sub(lt); var r = .5 * t.distanceTo(e), o = -this.direction.dot(ct), s = ht.dot(this.direction), a = -ht.dot(ct), l = ht.lengthSq(), c = Math.abs(1 - o * o); var h, u, d, p; if (c > 0)
            if (h = o * a - s, u = o * s - a, p = r * c, h >= 0)
                if (u >= -p)
                    if (u <= p) {
                        var t_14 = 1 / c;
                        h *= t_14, u *= t_14, d = h * (h + o * u + 2 * s) + u * (o * h + u + 2 * a) + l;
                    }
                    else
                        u = r, h = Math.max(0, -(o * u + s)), d = -h * h + u * (u + 2 * a) + l;
                else
                    u = -r, h = Math.max(0, -(o * u + s)), d = -h * h + u * (u + 2 * a) + l;
            else
                u <= -p ? (h = Math.max(0, -(-o * r + s)), u = h > 0 ? -r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -a), r), d = u * (u + 2 * a) + l) : (h = Math.max(0, -(o * r + s)), u = h > 0 ? r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + l);
        else
            u = o > 0 ? -r : r, h = Math.max(0, -(o * u + s)), d = -h * h + u * (u + 2 * a) + l; return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(ct).multiplyScalar(u).add(lt), d; };
        ft.prototype.intersectSphere = function (t, e) { at.subVectors(t.center, this.origin); var n = at.dot(this.direction), i = at.dot(at) - n * n, r = t.radius * t.radius; if (i > r)
            return null; var o = Math.sqrt(r - i), s = n - o, a = n + o; return s < 0 && a < 0 ? null : s < 0 ? this.at(a, e) : this.at(s, e); };
        ft.prototype.intersectsSphere = function (t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius; };
        ft.prototype.distanceToPlane = function (t) { var e = t.normal.dot(this.direction); if (0 === e)
            return 0 === t.distanceToPoint(this.origin) ? 0 : null; var n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null; };
        ft.prototype.intersectPlane = function (t, e) { var n = this.distanceToPlane(t); return null === n ? null : this.at(n, e); };
        ft.prototype.intersectsPlane = function (t) { var e = t.distanceToPoint(this.origin); return 0 === e || t.normal.dot(this.direction) * e < 0; };
        ft.prototype.intersectBox = function (t, e) { var n, i, r, o, s, a; var l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin; return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, o = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, o = (t.min.y - u.y) * c), n > o || r > i ? null : ((r > n || n != n) && (n = r), (o < i || i != i) && (i = o), h >= 0 ? (s = (t.min.z - u.z) * h, a = (t.max.z - u.z) * h) : (s = (t.max.z - u.z) * h, a = (t.min.z - u.z) * h), n > a || s > i ? null : ((s > n || n != n) && (n = s), (a < i || i != i) && (i = a), i < 0 ? null : this.at(n >= 0 ? n : i, e))); };
        ft.prototype.intersectsBox = function (t) { return null !== this.intersectBox(t, at); };
        ft.prototype.intersectTriangle = function (t, e, n, i, r) { ut.subVectors(e, t), dt.subVectors(n, t), pt.crossVectors(ut, dt); var o, s = this.direction.dot(pt); if (s > 0) {
            if (i)
                return null;
            o = 1;
        }
        else {
            if (!(s < 0))
                return null;
            o = -1, s = -s;
        } ht.subVectors(this.origin, t); var a = o * this.direction.dot(dt.crossVectors(ht, dt)); if (a < 0)
            return null; var l = o * this.direction.dot(ut.cross(ht)); if (l < 0)
            return null; if (a + l > s)
            return null; var c = -o * ht.dot(pt); return c < 0 ? null : this.at(c / s, r); };
        ft.prototype.applyMatrix4 = function (t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this; };
        ft.prototype.equals = function (t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction); };
        ft.prototype.clone = function () { return (new this.constructor).copy(this); };
        return ft;
    }());
    var mt = /** @class */ (function () {
        function mt() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        mt.prototype.set = function (t, e, n, i, r, o, s, a, l, c, h, u, d, p, f, m) { var g = this.elements; return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = o, g[9] = s, g[13] = a, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this; };
        mt.prototype.identity = function () { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; };
        mt.prototype.clone = function () { return (new mt).fromArray(this.elements); };
        mt.prototype.copy = function (t) { var e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this; };
        mt.prototype.copyPosition = function (t) { var e = this.elements, n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this; };
        mt.prototype.setFromMatrix3 = function (t) { var e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this; };
        mt.prototype.extractBasis = function (t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this; };
        mt.prototype.makeBasis = function (t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this; };
        mt.prototype.extractRotation = function (t) { var e = this.elements, n = t.elements, i = 1 / gt.setFromMatrixColumn(t, 0).length(), r = 1 / gt.setFromMatrixColumn(t, 1).length(), o = 1 / gt.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; };
        mt.prototype.makeRotationFromEuler = function (t) { t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); var e = this.elements, n = t.x, i = t.y, r = t.z, o = Math.cos(n), s = Math.sin(n), a = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r); if ("XYZ" === t.order) {
            var t_15 = o * c, n_7 = o * h, i_4 = s * c, r_4 = s * h;
            e[0] = a * c, e[4] = -a * h, e[8] = l, e[1] = n_7 + i_4 * l, e[5] = t_15 - r_4 * l, e[9] = -s * a, e[2] = r_4 - t_15 * l, e[6] = i_4 + n_7 * l, e[10] = o * a;
        }
        else if ("YXZ" === t.order) {
            var t_16 = a * c, n_8 = a * h, i_5 = l * c, r_5 = l * h;
            e[0] = t_16 + r_5 * s, e[4] = i_5 * s - n_8, e[8] = o * l, e[1] = o * h, e[5] = o * c, e[9] = -s, e[2] = n_8 * s - i_5, e[6] = r_5 + t_16 * s, e[10] = o * a;
        }
        else if ("ZXY" === t.order) {
            var t_17 = a * c, n_9 = a * h, i_6 = l * c, r_6 = l * h;
            e[0] = t_17 - r_6 * s, e[4] = -o * h, e[8] = i_6 + n_9 * s, e[1] = n_9 + i_6 * s, e[5] = o * c, e[9] = r_6 - t_17 * s, e[2] = -o * l, e[6] = s, e[10] = o * a;
        }
        else if ("ZYX" === t.order) {
            var t_18 = o * c, n_10 = o * h, i_7 = s * c, r_7 = s * h;
            e[0] = a * c, e[4] = i_7 * l - n_10, e[8] = t_18 * l + r_7, e[1] = a * h, e[5] = r_7 * l + t_18, e[9] = n_10 * l - i_7, e[2] = -l, e[6] = s * a, e[10] = o * a;
        }
        else if ("YZX" === t.order) {
            var t_19 = o * a, n_11 = o * l, i_8 = s * a, r_8 = s * l;
            e[0] = a * c, e[4] = r_8 - t_19 * h, e[8] = i_8 * h + n_11, e[1] = h, e[5] = o * c, e[9] = -s * c, e[2] = -l * c, e[6] = n_11 * h + i_8, e[10] = t_19 - r_8 * h;
        }
        else if ("XZY" === t.order) {
            var t_20 = o * a, n_12 = o * l, i_9 = s * a, r_9 = s * l;
            e[0] = a * c, e[4] = -h, e[8] = l * c, e[1] = t_20 * h + r_9, e[5] = o * c, e[9] = n_12 * h - i_9, e[2] = i_9 * h - n_12, e[6] = s * c, e[10] = r_9 * h + t_20;
        } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; };
        mt.prototype.makeRotationFromQuaternion = function (t) { return this.compose(_t, t, yt); };
        mt.prototype.lookAt = function (t, e, n) { var i = this.elements; return wt.subVectors(t, e), 0 === wt.lengthSq() && (wt.z = 1), wt.normalize(), xt.crossVectors(n, wt), 0 === xt.lengthSq() && (1 === Math.abs(n.z) ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), xt.crossVectors(n, wt)), xt.normalize(), bt.crossVectors(wt, xt), i[0] = xt.x, i[4] = bt.x, i[8] = wt.x, i[1] = xt.y, i[5] = bt.y, i[9] = wt.y, i[2] = xt.z, i[6] = bt.z, i[10] = wt.z, this; };
        mt.prototype.multiply = function (t, e) { return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t); };
        mt.prototype.premultiply = function (t) { return this.multiplyMatrices(t, this); };
        mt.prototype.multiplyMatrices = function (t, e) { var n = t.elements, i = e.elements, r = this.elements, o = n[0], s = n[4], a = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], f = n[6], m = n[10], g = n[14], v = n[3], _ = n[7], y = n[11], x = n[15], b = i[0], w = i[4], M = i[8], S = i[12], E = i[1], T = i[5], A = i[9], L = i[13], C = i[2], R = i[6], P = i[10], D = i[14], I = i[3], N = i[7], O = i[11], z = i[15]; return r[0] = o * b + s * E + a * C + l * I, r[4] = o * w + s * T + a * R + l * N, r[8] = o * M + s * A + a * P + l * O, r[12] = o * S + s * L + a * D + l * z, r[1] = c * b + h * E + u * C + d * I, r[5] = c * w + h * T + u * R + d * N, r[9] = c * M + h * A + u * P + d * O, r[13] = c * S + h * L + u * D + d * z, r[2] = p * b + f * E + m * C + g * I, r[6] = p * w + f * T + m * R + g * N, r[10] = p * M + f * A + m * P + g * O, r[14] = p * S + f * L + m * D + g * z, r[3] = v * b + _ * E + y * C + x * I, r[7] = v * w + _ * T + y * R + x * N, r[11] = v * M + _ * A + y * P + x * O, r[15] = v * S + _ * L + y * D + x * z, this; };
        mt.prototype.multiplyScalar = function (t) { var e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this; };
        mt.prototype.determinant = function () { var t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], o = t[1], s = t[5], a = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14]; return t[3] * (+r * a * h - i * l * h - r * s * u + n * l * u + i * s * d - n * a * d) + t[7] * (+e * a * d - e * l * u + r * o * u - i * o * d + i * l * c - r * a * c) + t[11] * (+e * l * h - e * s * d - r * o * h + n * o * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * a * h + e * s * u + i * o * h - n * o * u + n * a * c); };
        mt.prototype.transpose = function () { var t = this.elements; var e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this; };
        mt.prototype.setPosition = function (t, e, n) { var i = this.elements; return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this; };
        mt.prototype.invert = function () { var t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], a = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], f = t[13], m = t[14], g = t[15], v = h * m * l - f * u * l + f * a * d - s * m * d - h * a * g + s * u * g, _ = p * u * l - c * m * l - p * a * d + o * m * d + c * a * g - o * u * g, y = c * f * l - p * h * l + p * s * d - o * f * d - c * s * g + o * h * g, x = p * h * a - c * f * a - p * s * u + o * f * u + c * s * m - o * h * m, b = e * v + n * _ + i * y + r * x; if (0 === b)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); var w = 1 / b; return t[0] = v * w, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * w, t[2] = (s * m * r - f * a * r + f * i * l - n * m * l - s * i * g + n * a * g) * w, t[3] = (h * a * r - s * u * r - h * i * l + n * u * l + s * i * d - n * a * d) * w, t[4] = _ * w, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * w, t[6] = (p * a * r - o * m * r - p * i * l + e * m * l + o * i * g - e * a * g) * w, t[7] = (o * u * r - c * a * r + c * i * l - e * u * l - o * i * d + e * a * d) * w, t[8] = y * w, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * w, t[10] = (o * f * r - p * s * r + p * n * l - e * f * l - o * n * g + e * s * g) * w, t[11] = (c * s * r - o * h * r - c * n * l + e * h * l + o * n * d - e * s * d) * w, t[12] = x * w, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * w, t[14] = (p * s * i - o * f * i - p * n * a + e * f * a + o * n * m - e * s * m) * w, t[15] = (o * h * i - c * s * i + c * n * a - e * h * a - o * n * u + e * s * u) * w, this; };
        mt.prototype.scale = function (t) { var e = this.elements, n = t.x, i = t.y, r = t.z; return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this; };
        mt.prototype.getMaxScaleOnAxis = function () { var t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, i)); };
        mt.prototype.makeTranslation = function (t, e, n) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this; };
        mt.prototype.makeRotationX = function (t) { var e = Math.cos(t), n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this; };
        mt.prototype.makeRotationY = function (t) { var e = Math.cos(t), n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this; };
        mt.prototype.makeRotationZ = function (t) { var e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; };
        mt.prototype.makeRotationAxis = function (t, e) { var n = Math.cos(e), i = Math.sin(e), r = 1 - n, o = t.x, s = t.y, a = t.z, l = r * o, c = r * s; return this.set(l * o + n, l * s - i * a, l * a + i * s, 0, l * s + i * a, c * s + n, c * a - i * o, 0, l * a - i * s, c * a + i * o, r * a * a + n, 0, 0, 0, 0, 1), this; };
        mt.prototype.makeScale = function (t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this; };
        mt.prototype.makeShear = function (t, e, n) { return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this; };
        mt.prototype.compose = function (t, e, n) { var i = this.elements, r = e._x, o = e._y, s = e._z, a = e._w, l = r + r, c = o + o, h = s + s, u = r * l, d = r * c, p = r * h, f = o * c, m = o * h, g = s * h, v = a * l, _ = a * c, y = a * h, x = n.x, b = n.y, w = n.z; return i[0] = (1 - (f + g)) * x, i[1] = (d + y) * x, i[2] = (p - _) * x, i[3] = 0, i[4] = (d - y) * b, i[5] = (1 - (u + g)) * b, i[6] = (m + v) * b, i[7] = 0, i[8] = (p + _) * w, i[9] = (m - v) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this; };
        mt.prototype.decompose = function (t, e, n) { var i = this.elements; var r = gt.set(i[0], i[1], i[2]).length(); var o = gt.set(i[4], i[5], i[6]).length(), s = gt.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], vt.copy(this); var a = 1 / r, l = 1 / o, c = 1 / s; return vt.elements[0] *= a, vt.elements[1] *= a, vt.elements[2] *= a, vt.elements[4] *= l, vt.elements[5] *= l, vt.elements[6] *= l, vt.elements[8] *= c, vt.elements[9] *= c, vt.elements[10] *= c, e.setFromRotationMatrix(vt), n.x = r, n.y = o, n.z = s, this; };
        mt.prototype.makePerspective = function (t, e, n, i, r, o) { void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); var s = this.elements, a = 2 * r / (e - t), l = 2 * r / (n - i), c = (e + t) / (e - t), h = (n + i) / (n - i), u = -(o + r) / (o - r), d = -2 * o * r / (o - r); return s[0] = a, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = h, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = u, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this; };
        mt.prototype.makeOrthographic = function (t, e, n, i, r, o) { var s = this.elements, a = 1 / (e - t), l = 1 / (n - i), c = 1 / (o - r), h = (e + t) * a, u = (n + i) * l, d = (o + r) * c; return s[0] = 2 * a, s[4] = 0, s[8] = 0, s[12] = -h, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -u, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this; };
        mt.prototype.equals = function (t) { var e = this.elements, n = t.elements; for (var t_21 = 0; t_21 < 16; t_21++)
            if (e[t_21] !== n[t_21])
                return !1; return !0; };
        mt.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            for (var n_13 = 0; n_13 < 16; n_13++)
                this.elements[n_13] = t[n_13 + e];
            return this;
        };
        mt.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
        };
        return mt;
    }());
    mt.prototype.isMatrix4 = !0;
    var gt = new k, vt = new mt, _t = new k(0, 0, 0), yt = new k(1, 1, 1), xt = new k, bt = new k, wt = new k, Mt = new mt, St = new U;
    var Et = /** @class */ (function () {
        function Et(t, e, n, i) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = 0; }
            if (i === void 0) { i = Et.DefaultOrder; }
            this._x = t, this._y = e, this._z = n, this._order = i;
        }
        Object.defineProperty(Et.prototype, "x", {
            get: function () { return this._x; },
            set: function (t) { this._x = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et.prototype, "y", {
            get: function () { return this._y; },
            set: function (t) { this._y = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et.prototype, "z", {
            get: function () { return this._z; },
            set: function (t) { this._z = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et.prototype, "order", {
            get: function () { return this._order; },
            set: function (t) { this._order = t, this._onChangeCallback(); },
            enumerable: false,
            configurable: true
        });
        Et.prototype.set = function (t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this; };
        Et.prototype.clone = function () { return new this.constructor(this._x, this._y, this._z, this._order); };
        Et.prototype.copy = function (t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this; };
        Et.prototype.setFromRotationMatrix = function (t, e, n) { var i = R.clamp, r = t.elements, o = r[0], s = r[4], a = r[8], l = r[1], c = r[5], h = r[9], u = r[2], d = r[6], p = r[10]; switch (e = e || this._order) {
            case "XYZ":
                this._y = Math.asin(i(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(d, c), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, o), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, o));
                break;
            case "ZYX":
                this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, o)) : (this._x = 0, this._z = Math.atan2(-s, c));
                break;
            case "YZX":
                this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, o)) : (this._x = 0, this._y = Math.atan2(a, p));
                break;
            case "XZY":
                this._z = Math.asin(-i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, o)) : (this._x = Math.atan2(-h, p), this._y = 0);
                break;
            default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        } return this._order = e, !1 !== n && this._onChangeCallback(), this; };
        Et.prototype.setFromQuaternion = function (t, e, n) { return Mt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Mt, e, n); };
        Et.prototype.setFromVector3 = function (t, e) { return this.set(t.x, t.y, t.z, e || this._order); };
        Et.prototype.reorder = function (t) { return St.setFromEuler(this), this.setFromQuaternion(St, t); };
        Et.prototype.equals = function (t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order; };
        Et.prototype.fromArray = function (t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this; };
        Et.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        };
        Et.prototype.toVector3 = function (t) { return t ? t.set(this._x, this._y, this._z) : new k(this._x, this._y, this._z); };
        Et.prototype._onChange = function (t) { return this._onChangeCallback = t, this; };
        Et.prototype._onChangeCallback = function () { };
        return Et;
    }());
    Et.prototype.isEuler = !0, Et.DefaultOrder = "XYZ", Et.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    var Tt = /** @class */ (function () {
        function Tt() {
            this.mask = 1;
        }
        Tt.prototype.set = function (t) { this.mask = 1 << t | 0; };
        Tt.prototype.enable = function (t) { this.mask |= 1 << t | 0; };
        Tt.prototype.enableAll = function () { this.mask = -1; };
        Tt.prototype.toggle = function (t) { this.mask ^= 1 << t | 0; };
        Tt.prototype.disable = function (t) { this.mask &= ~(1 << t | 0); };
        Tt.prototype.disableAll = function () { this.mask = 0; };
        Tt.prototype.test = function (t) { return 0 != (this.mask & t.mask); };
        return Tt;
    }());
    var At = 0;
    var Lt = new k, Ct = new U, Rt = new mt, Pt = new k, Dt = new k, It = new k, Nt = new U, Ot = new k(1, 0, 0), zt = new k(0, 1, 0), Bt = new k(0, 0, 1), Ht = { type: "added" }, Ft = { type: "removed" };
    function Ut() { Object.defineProperty(this, "id", { value: At++ }), this.uuid = R.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ut.DefaultUp.clone(); var t = new k, e = new Et, n = new U, i = new k(1, 1, 1); e._onChange((function () { n.setFromEuler(e, !1); })), n._onChange((function () { e.setFromQuaternion(n, void 0, !1); })), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new mt }, normalMatrix: { value: new D } }), this.matrix = new mt, this.matrixWorld = new mt, this.matrixAutoUpdate = Ut.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Tt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}; }
    Ut.DefaultUp = new k(0, 1, 0), Ut.DefaultMatrixAutoUpdate = !0, Ut.prototype = Object.assign(Object.create(A.prototype), { constructor: Ut, isObject3D: !0, onBeforeRender: function () { }, onAfterRender: function () { }, applyMatrix4: function (t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale); }, applyQuaternion: function (t) { return this.quaternion.premultiply(t), this; }, setRotationFromAxisAngle: function (t, e) { this.quaternion.setFromAxisAngle(t, e); }, setRotationFromEuler: function (t) { this.quaternion.setFromEuler(t, !0); }, setRotationFromMatrix: function (t) { this.quaternion.setFromRotationMatrix(t); }, setRotationFromQuaternion: function (t) { this.quaternion.copy(t); }, rotateOnAxis: function (t, e) { return Ct.setFromAxisAngle(t, e), this.quaternion.multiply(Ct), this; }, rotateOnWorldAxis: function (t, e) { return Ct.setFromAxisAngle(t, e), this.quaternion.premultiply(Ct), this; }, rotateX: function (t) { return this.rotateOnAxis(Ot, t); }, rotateY: function (t) { return this.rotateOnAxis(zt, t); }, rotateZ: function (t) { return this.rotateOnAxis(Bt, t); }, translateOnAxis: function (t, e) { return Lt.copy(t).applyQuaternion(this.quaternion), this.position.add(Lt.multiplyScalar(e)), this; }, translateX: function (t) { return this.translateOnAxis(Ot, t); }, translateY: function (t) { return this.translateOnAxis(zt, t); }, translateZ: function (t) { return this.translateOnAxis(Bt, t); }, localToWorld: function (t) { return t.applyMatrix4(this.matrixWorld); }, worldToLocal: function (t) { return t.applyMatrix4(Rt.copy(this.matrixWorld).invert()); }, lookAt: function (t, e, n) { t.isVector3 ? Pt.copy(t) : Pt.set(t, e, n); var i = this.parent; this.updateWorldMatrix(!0, !1), Dt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Rt.lookAt(Dt, Pt, this.up) : Rt.lookAt(Pt, Dt, this.up), this.quaternion.setFromRotationMatrix(Rt), i && (Rt.extractRotation(i.matrixWorld), Ct.setFromRotationMatrix(Rt), this.quaternion.premultiply(Ct.invert())); }, add: function (t) { if (arguments.length > 1) {
            for (var t_22 = 0; t_22 < arguments.length; t_22++)
                this.add(arguments[t_22]);
            return this;
        } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Ht)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this); }, remove: function (t) { if (arguments.length > 1) {
            for (var t_23 = 0; t_23 < arguments.length; t_23++)
                this.remove(arguments[t_23]);
            return this;
        } var e = this.children.indexOf(t); return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ft)), this; }, clear: function () { for (var t_24 = 0; t_24 < this.children.length; t_24++) {
            var e_7 = this.children[t_24];
            e_7.parent = null, e_7.dispatchEvent(Ft);
        } return this.children.length = 0, this; }, attach: function (t) { return this.updateWorldMatrix(!0, !1), Rt.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Rt.multiply(t.parent.matrixWorld)), t.applyMatrix4(Rt), this.add(t), t.updateWorldMatrix(!1, !0), this; }, getObjectById: function (t) { return this.getObjectByProperty("id", t); }, getObjectByName: function (t) { return this.getObjectByProperty("name", t); }, getObjectByProperty: function (t, e) { if (this[t] === e)
            return this; for (var n_14 = 0, i_10 = this.children.length; n_14 < i_10; n_14++) {
            var i_11 = this.children[n_14].getObjectByProperty(t, e);
            if (void 0 !== i_11)
                return i_11;
        } }, getWorldPosition: function (t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new k), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld); }, getWorldQuaternion: function (t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new U), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dt, t, It), t; }, getWorldScale: function (t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new k), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dt, Nt, t), t; }, getWorldDirection: function (t) { void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new k), this.updateWorldMatrix(!0, !1); var e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize(); }, raycast: function () { }, traverse: function (t) { t(this); var e = this.children; for (var n_15 = 0, i_12 = e.length; n_15 < i_12; n_15++)
            e[n_15].traverse(t); }, traverseVisible: function (t) { if (!1 === this.visible)
            return; t(this); var e = this.children; for (var n_16 = 0, i_13 = e.length; n_16 < i_13; n_16++)
            e[n_16].traverseVisible(t); }, traverseAncestors: function (t) { var e = this.parent; null !== e && (t(e), e.traverseAncestors(t)); }, updateMatrix: function () { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0; }, updateMatrixWorld: function (t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); var e = this.children; for (var n_17 = 0, i_14 = e.length; n_17 < i_14; n_17++)
            e[n_17].updateMatrixWorld(t); }, updateWorldMatrix: function (t, e) { var n = this.parent; if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            var t_25 = this.children;
            for (var e_8 = 0, n_18 = t_25.length; e_8 < n_18; e_8++)
                t_25[e_8].updateWorldMatrix(!1, !0);
        } }, toJSON: function (t) { var e = void 0 === t || "string" == typeof t, n = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); var i = {}; function r(e, n) { return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid; } if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            var e_9 = this.geometry.parameters;
            if (void 0 !== e_9 && void 0 !== e_9.shapes) {
                var n_19 = e_9.shapes;
                if (Array.isArray(n_19))
                    for (var e_10 = 0, i_15 = n_19.length; e_10 < i_15; e_10++) {
                        var i_16 = n_19[e_10];
                        r(t.shapes, i_16);
                    }
                else
                    r(t.shapes, n_19);
            }
        } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
                var e_11 = [];
                for (var n_20 = 0, i_17 = this.material.length; n_20 < i_17; n_20++)
                    e_11.push(r(t.materials, this.material[n_20]));
                i.material = e_11;
            }
            else
                i.material = r(t.materials, this.material); if (this.children.length > 0) {
            i.children = [];
            for (var e_12 = 0; e_12 < this.children.length; e_12++)
                i.children.push(this.children[e_12].toJSON(t).object);
        } if (this.animations.length > 0) {
            i.animations = [];
            for (var e_13 = 0; e_13 < this.animations.length; e_13++) {
                var n_21 = this.animations[e_13];
                i.animations.push(r(t.animations, n_21));
            }
        } if (e) {
            var e_14 = o(t.geometries), i_18 = o(t.materials), r_10 = o(t.textures), s_3 = o(t.images), a_5 = o(t.shapes), l_6 = o(t.skeletons), c_4 = o(t.animations);
            e_14.length > 0 && (n.geometries = e_14), i_18.length > 0 && (n.materials = i_18), r_10.length > 0 && (n.textures = r_10), s_3.length > 0 && (n.images = s_3), a_5.length > 0 && (n.shapes = a_5), l_6.length > 0 && (n.skeletons = l_6), c_4.length > 0 && (n.animations = c_4);
        } return n.object = i, n; function o(t) { var e = []; for (var n_22 in t) {
            var i_19 = t[n_22];
            delete i_19.metadata, e.push(i_19);
        } return e; } }, clone: function (t) { return (new this.constructor).copy(this, t); }, copy: function (t, e) {
            if (e === void 0) { e = !0; }
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var e_15 = 0; e_15 < t.children.length; e_15++) {
                    var n_23 = t.children[e_15];
                    this.add(n_23.clone());
                }
            return this;
        } });
    var kt = new k, Gt = new k, Vt = new D;
    var Wt = /** @class */ (function () {
        function Wt(t, e) {
            if (t === void 0) { t = new k(1, 0, 0); }
            if (e === void 0) { e = 0; }
            this.normal = t, this.constant = e;
        }
        Wt.prototype.set = function (t, e) { return this.normal.copy(t), this.constant = e, this; };
        Wt.prototype.setComponents = function (t, e, n, i) { return this.normal.set(t, e, n), this.constant = i, this; };
        Wt.prototype.setFromNormalAndCoplanarPoint = function (t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this; };
        Wt.prototype.setFromCoplanarPoints = function (t, e, n) { var i = kt.subVectors(n, e).cross(Gt.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(i, t), this; };
        Wt.prototype.copy = function (t) { return this.normal.copy(t.normal), this.constant = t.constant, this; };
        Wt.prototype.normalize = function () { var t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this; };
        Wt.prototype.negate = function () { return this.constant *= -1, this.normal.negate(), this; };
        Wt.prototype.distanceToPoint = function (t) { return this.normal.dot(t) + this.constant; };
        Wt.prototype.distanceToSphere = function (t) { return this.distanceToPoint(t.center) - t.radius; };
        Wt.prototype.projectPoint = function (t, e) { return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new k), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t); };
        Wt.prototype.intersectLine = function (t, e) { void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new k); var n = t.delta(kt), i = this.normal.dot(n); if (0 === i)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0; var r = -(t.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start); };
        Wt.prototype.intersectsLine = function (t) { var e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0; };
        Wt.prototype.intersectsBox = function (t) { return t.intersectsPlane(this); };
        Wt.prototype.intersectsSphere = function (t) { return t.intersectsPlane(this); };
        Wt.prototype.coplanarPoint = function (t) { return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new k), t.copy(this.normal).multiplyScalar(-this.constant); };
        Wt.prototype.applyMatrix4 = function (t, e) { var n = e || Vt.getNormalMatrix(t), i = this.coplanarPoint(kt).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this; };
        Wt.prototype.translate = function (t) { return this.constant -= t.dot(this.normal), this; };
        Wt.prototype.equals = function (t) { return t.normal.equals(this.normal) && t.constant === this.constant; };
        Wt.prototype.clone = function () { return (new this.constructor).copy(this); };
        return Wt;
    }());
    Wt.prototype.isPlane = !0;
    var jt = new k, qt = new k, Xt = new k, Yt = new k, Jt = new k, Zt = new k, Qt = new k, Kt = new k, $t = new k, te = new k;
    var ee = /** @class */ (function () {
        function ee(t, e, n) {
            if (t === void 0) { t = new k; }
            if (e === void 0) { e = new k; }
            if (n === void 0) { n = new k; }
            this.a = t, this.b = e, this.c = n;
        }
        ee.getNormal = function (t, e, n, i) { void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new k), i.subVectors(n, e), jt.subVectors(t, e), i.cross(jt); var r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0); };
        ee.getBarycoord = function (t, e, n, i, r) { jt.subVectors(i, e), qt.subVectors(n, e), Xt.subVectors(t, e); var o = jt.dot(jt), s = jt.dot(qt), a = jt.dot(Xt), l = qt.dot(qt), c = qt.dot(Xt), h = o * l - s * s; if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new k), 0 === h)
            return r.set(-2, -1, -1); var u = 1 / h, d = (l * a - s * c) * u, p = (o * c - s * a) * u; return r.set(1 - d - p, p, d); };
        ee.containsPoint = function (t, e, n, i) { return this.getBarycoord(t, e, n, i, Yt), Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1; };
        ee.getUV = function (t, e, n, i, r, o, s, a) { return this.getBarycoord(t, e, n, i, Yt), a.set(0, 0), a.addScaledVector(r, Yt.x), a.addScaledVector(o, Yt.y), a.addScaledVector(s, Yt.z), a; };
        ee.isFrontFacing = function (t, e, n, i) { return jt.subVectors(n, e), qt.subVectors(t, e), jt.cross(qt).dot(i) < 0; };
        ee.prototype.set = function (t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this; };
        ee.prototype.setFromPointsAndIndices = function (t, e, n, i) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this; };
        ee.prototype.clone = function () { return (new this.constructor).copy(this); };
        ee.prototype.copy = function (t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this; };
        ee.prototype.getArea = function () { return jt.subVectors(this.c, this.b), qt.subVectors(this.a, this.b), .5 * jt.cross(qt).length(); };
        ee.prototype.getMidpoint = function (t) { return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new k), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3); };
        ee.prototype.getNormal = function (t) { return ee.getNormal(this.a, this.b, this.c, t); };
        ee.prototype.getPlane = function (t) { return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Wt), t.setFromCoplanarPoints(this.a, this.b, this.c); };
        ee.prototype.getBarycoord = function (t, e) { return ee.getBarycoord(t, this.a, this.b, this.c, e); };
        ee.prototype.getUV = function (t, e, n, i, r) { return ee.getUV(t, this.a, this.b, this.c, e, n, i, r); };
        ee.prototype.containsPoint = function (t) { return ee.containsPoint(t, this.a, this.b, this.c); };
        ee.prototype.isFrontFacing = function (t) { return ee.isFrontFacing(this.a, this.b, this.c, t); };
        ee.prototype.intersectsBox = function (t) { return t.intersectsTriangle(this); };
        ee.prototype.closestPointToPoint = function (t, e) { void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new k); var n = this.a, i = this.b, r = this.c; var o, s; Jt.subVectors(i, n), Zt.subVectors(r, n), Kt.subVectors(t, n); var a = Jt.dot(Kt), l = Zt.dot(Kt); if (a <= 0 && l <= 0)
            return e.copy(n); $t.subVectors(t, i); var c = Jt.dot($t), h = Zt.dot($t); if (c >= 0 && h <= c)
            return e.copy(i); var u = a * h - c * l; if (u <= 0 && a >= 0 && c <= 0)
            return o = a / (a - c), e.copy(n).addScaledVector(Jt, o); te.subVectors(t, r); var d = Jt.dot(te), p = Zt.dot(te); if (p >= 0 && d <= p)
            return e.copy(r); var f = d * l - a * p; if (f <= 0 && l >= 0 && p <= 0)
            return s = l / (l - p), e.copy(n).addScaledVector(Zt, s); var m = c * p - d * h; if (m <= 0 && h - c >= 0 && d - p >= 0)
            return Qt.subVectors(r, i), s = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(Qt, s); var g = 1 / (m + f + u); return o = f * g, s = u * g, e.copy(n).addScaledVector(Jt, o).addScaledVector(Zt, s); };
        ee.prototype.equals = function (t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c); };
        return ee;
    }());
    var ne = 0;
    function ie() { Object.defineProperty(this, "id", { value: ne++ }), this.uuid = R.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = t, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = M, this.stencilZFail = M, this.stencilZPass = M, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0; }
    ie.prototype = Object.assign(Object.create(A.prototype), { constructor: ie, isMaterial: !0, onBeforeCompile: function () { }, customProgramCacheKey: function () { return this.onBeforeCompile.toString(); }, setValues: function (t) { if (void 0 !== t)
            for (var e_16 in t) {
                var n_24 = t[e_16];
                if (void 0 === n_24) {
                    console.warn("THREE.Material: '" + e_16 + "' parameter is undefined.");
                    continue;
                }
                if ("shading" === e_16) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n_24;
                    continue;
                }
                var i_20 = this[e_16];
                void 0 !== i_20 ? i_20 && i_20.isColor ? i_20.set(n_24) : i_20 && i_20.isVector3 && n_24 && n_24.isVector3 ? i_20.copy(n_24) : this[e_16] = n_24 : console.warn("THREE." + this.type + ": '" + e_16 + "' is not a property of this material.");
            } }, toJSON: function (t) { var e = void 0 === t || "string" == typeof t; e && (t = { textures: {}, images: {} }); var n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } }; function i(t) { var e = []; for (var n_25 in t) {
            var i_21 = t[n_25];
            delete i_21.metadata, e.push(i_21);
        } return e; } if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
            var e_17 = i(t.textures), r_11 = i(t.images);
            e_17.length > 0 && (n.textures = e_17), r_11.length > 0 && (n.images = r_11);
        } return n; }, clone: function () { return (new this.constructor).copy(this); }, copy: function (t) { this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; var e = t.clippingPlanes; var n = null; if (null !== e) {
            var t_26 = e.length;
            n = new Array(t_26);
            for (var i_22 = 0; i_22 !== t_26; ++i_22)
                n[i_22] = e[i_22].clone();
        } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } }), Object.defineProperty(ie.prototype, "needsUpdate", { set: function (t) { !0 === t && this.version++; } });
    var re = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, oe = { h: 0, s: 0, l: 0 }, se = { h: 0, s: 0, l: 0 };
    function ae(t, e, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t; }
    function le(t) { return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4); }
    function ce(t) { return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055; }
    var he = /** @class */ (function () {
        function he(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
        }
        he.prototype.set = function (t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this; };
        he.prototype.setScalar = function (t) { return this.r = t, this.g = t, this.b = t, this; };
        he.prototype.setHex = function (t) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this; };
        he.prototype.setRGB = function (t, e, n) { return this.r = t, this.g = e, this.b = n, this; };
        he.prototype.setHSL = function (t, e, n) { if (t = R.euclideanModulo(t, 1), e = R.clamp(e, 0, 1), n = R.clamp(n, 0, 1), 0 === e)
            this.r = this.g = this.b = n;
        else {
            var i_23 = n <= .5 ? n * (1 + e) : n + e - n * e, r_12 = 2 * n - i_23;
            this.r = ae(r_12, i_23, t + 1 / 3), this.g = ae(r_12, i_23, t), this.b = ae(r_12, i_23, t - 1 / 3);
        } return this; };
        he.prototype.setStyle = function (t) { function e(e) { void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored."); } var n; if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            var t_27;
            var i_24 = n[1], r_13 = n[2];
            switch (i_24) {
                case "rgb":
                case "rgba":
                    if (t_27 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r_13))
                        return this.r = Math.min(255, parseInt(t_27[1], 10)) / 255, this.g = Math.min(255, parseInt(t_27[2], 10)) / 255, this.b = Math.min(255, parseInt(t_27[3], 10)) / 255, e(t_27[4]), this;
                    if (t_27 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r_13))
                        return this.r = Math.min(100, parseInt(t_27[1], 10)) / 100, this.g = Math.min(100, parseInt(t_27[2], 10)) / 100, this.b = Math.min(100, parseInt(t_27[3], 10)) / 100, e(t_27[4]), this;
                    break;
                case "hsl":
                case "hsla": if (t_27 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r_13)) {
                    var n_26 = parseFloat(t_27[1]) / 360, i_25 = parseInt(t_27[2], 10) / 100, r_14 = parseInt(t_27[3], 10) / 100;
                    return e(t_27[4]), this.setHSL(n_26, i_25, r_14);
                }
            }
        }
        else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            var t_28 = n[1], e_18 = t_28.length;
            if (3 === e_18)
                return this.r = parseInt(t_28.charAt(0) + t_28.charAt(0), 16) / 255, this.g = parseInt(t_28.charAt(1) + t_28.charAt(1), 16) / 255, this.b = parseInt(t_28.charAt(2) + t_28.charAt(2), 16) / 255, this;
            if (6 === e_18)
                return this.r = parseInt(t_28.charAt(0) + t_28.charAt(1), 16) / 255, this.g = parseInt(t_28.charAt(2) + t_28.charAt(3), 16) / 255, this.b = parseInt(t_28.charAt(4) + t_28.charAt(5), 16) / 255, this;
        } return t && t.length > 0 ? this.setColorName(t) : this; };
        he.prototype.setColorName = function (t) { var e = re[t]; return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this; };
        he.prototype.clone = function () { return new this.constructor(this.r, this.g, this.b); };
        he.prototype.copy = function (t) { return this.r = t.r, this.g = t.g, this.b = t.b, this; };
        he.prototype.copyGammaToLinear = function (t, e) {
            if (e === void 0) { e = 2; }
            return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
        };
        he.prototype.copyLinearToGamma = function (t, e) {
            if (e === void 0) { e = 2; }
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
        };
        he.prototype.convertGammaToLinear = function (t) { return this.copyGammaToLinear(this, t), this; };
        he.prototype.convertLinearToGamma = function (t) { return this.copyLinearToGamma(this, t), this; };
        he.prototype.copySRGBToLinear = function (t) { return this.r = le(t.r), this.g = le(t.g), this.b = le(t.b), this; };
        he.prototype.copyLinearToSRGB = function (t) { return this.r = ce(t.r), this.g = ce(t.g), this.b = ce(t.b), this; };
        he.prototype.convertSRGBToLinear = function () { return this.copySRGBToLinear(this), this; };
        he.prototype.convertLinearToSRGB = function () { return this.copyLinearToSRGB(this), this; };
        he.prototype.getHex = function () { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0; };
        he.prototype.getHexString = function () { return ("000000" + this.getHex().toString(16)).slice(-6); };
        he.prototype.getHSL = function (t) { void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = { h: 0, s: 0, l: 0 }); var e = this.r, n = this.g, i = this.b, r = Math.max(e, n, i), o = Math.min(e, n, i); var s, a; var l = (o + r) / 2; if (o === r)
            s = 0, a = 0;
        else {
            var t_29 = r - o;
            switch (a = l <= .5 ? t_29 / (r + o) : t_29 / (2 - r - o), r) {
                case e:
                    s = (n - i) / t_29 + (n < i ? 6 : 0);
                    break;
                case n:
                    s = (i - e) / t_29 + 2;
                    break;
                case i: s = (e - n) / t_29 + 4;
            }
            s /= 6;
        } return t.h = s, t.s = a, t.l = l, t; };
        he.prototype.getStyle = function () { return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"; };
        he.prototype.offsetHSL = function (t, e, n) { return this.getHSL(oe), oe.h += t, oe.s += e, oe.l += n, this.setHSL(oe.h, oe.s, oe.l), this; };
        he.prototype.add = function (t) { return this.r += t.r, this.g += t.g, this.b += t.b, this; };
        he.prototype.addColors = function (t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this; };
        he.prototype.addScalar = function (t) { return this.r += t, this.g += t, this.b += t, this; };
        he.prototype.sub = function (t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this; };
        he.prototype.multiply = function (t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this; };
        he.prototype.multiplyScalar = function (t) { return this.r *= t, this.g *= t, this.b *= t, this; };
        he.prototype.lerp = function (t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this; };
        he.prototype.lerpColors = function (t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this; };
        he.prototype.lerpHSL = function (t, e) { this.getHSL(oe), t.getHSL(se); var n = R.lerp(oe.h, se.h, e), i = R.lerp(oe.s, se.s, e), r = R.lerp(oe.l, se.l, e); return this.setHSL(n, i, r), this; };
        he.prototype.equals = function (t) { return t.r === this.r && t.g === this.g && t.b === this.b; };
        he.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        };
        he.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        };
        he.prototype.fromBufferAttribute = function (t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this; };
        he.prototype.toJSON = function () { return this.getHex(); };
        return he;
    }());
    he.NAMES = re, he.prototype.isColor = !0, he.prototype.r = 1, he.prototype.g = 1, he.prototype.b = 1;
    var ue = /** @class */ (function (_super) {
        __extends(ue, _super);
        function ue(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshBasicMaterial", _this.color = new he(16777215), _this.map = null, _this.lightMap = null, _this.lightMapIntensity = 1, _this.aoMap = null, _this.aoMapIntensity = 1, _this.specularMap = null, _this.alphaMap = null, _this.envMap = null, _this.combine = 0, _this.reflectivity = 1, _this.refractionRatio = .98, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.wireframeLinecap = "round", _this.wireframeLinejoin = "round", _this.skinning = !1, _this.morphTargets = !1, _this.setValues(t);
            return _this;
        }
        ue.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this; };
        return ue;
    }(ie));
    ue.prototype.isMeshBasicMaterial = !0;
    var de = new k, pe = new P;
    function fe(t, e, n) { if (Array.isArray(t))
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = S, this.updateRange = { offset: 0, count: -1 }, this.version = 0; }
    function me(t, e, n) { fe.call(this, new Int8Array(t), e, n); }
    function ge(t, e, n) { fe.call(this, new Uint8Array(t), e, n); }
    function ve(t, e, n) { fe.call(this, new Uint8ClampedArray(t), e, n); }
    function _e(t, e, n) { fe.call(this, new Int16Array(t), e, n); }
    function ye(t, e, n) { fe.call(this, new Uint16Array(t), e, n); }
    function xe(t, e, n) { fe.call(this, new Int32Array(t), e, n); }
    function be(t, e, n) { fe.call(this, new Uint32Array(t), e, n); }
    function we(t, e, n) { fe.call(this, new Uint16Array(t), e, n); }
    function Me(t, e, n) { fe.call(this, new Float32Array(t), e, n); }
    function Se(t, e, n) { fe.call(this, new Float64Array(t), e, n); }
    function Ee(t) { if (0 === t.length)
        return -1 / 0; var e = t[0]; for (var n_27 = 1, i_26 = t.length; n_27 < i_26; ++n_27)
        t[n_27] > e && (e = t[n_27]); return e; }
    Object.defineProperty(fe.prototype, "needsUpdate", { set: function (t) { !0 === t && this.version++; } }), Object.assign(fe.prototype, { isBufferAttribute: !0, onUploadCallback: function () { }, setUsage: function (t) { return this.usage = t, this; }, copy: function (t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this; }, copyAt: function (t, e, n) { t *= this.itemSize, n *= e.itemSize; for (var i_27 = 0, r_15 = this.itemSize; i_27 < r_15; i_27++)
            this.array[t + i_27] = e.array[n + i_27]; return this; }, copyArray: function (t) { return this.array.set(t), this; }, copyColorsArray: function (t) { var e = this.array; var n = 0; for (var i_28 = 0, r_16 = t.length; i_28 < r_16; i_28++) {
            var r_17 = t[i_28];
            void 0 === r_17 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i_28), r_17 = new he), e[n++] = r_17.r, e[n++] = r_17.g, e[n++] = r_17.b;
        } return this; }, copyVector2sArray: function (t) { var e = this.array; var n = 0; for (var i_29 = 0, r_18 = t.length; i_29 < r_18; i_29++) {
            var r_19 = t[i_29];
            void 0 === r_19 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i_29), r_19 = new P), e[n++] = r_19.x, e[n++] = r_19.y;
        } return this; }, copyVector3sArray: function (t) { var e = this.array; var n = 0; for (var i_30 = 0, r_20 = t.length; i_30 < r_20; i_30++) {
            var r_21 = t[i_30];
            void 0 === r_21 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i_30), r_21 = new k), e[n++] = r_21.x, e[n++] = r_21.y, e[n++] = r_21.z;
        } return this; }, copyVector4sArray: function (t) { var e = this.array; var n = 0; for (var i_31 = 0, r_22 = t.length; i_31 < r_22; i_31++) {
            var r_23 = t[i_31];
            void 0 === r_23 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i_31), r_23 = new H), e[n++] = r_23.x, e[n++] = r_23.y, e[n++] = r_23.z, e[n++] = r_23.w;
        } return this; }, applyMatrix3: function (t) { if (2 === this.itemSize)
            for (var e_19 = 0, n_28 = this.count; e_19 < n_28; e_19++)
                pe.fromBufferAttribute(this, e_19), pe.applyMatrix3(t), this.setXY(e_19, pe.x, pe.y);
        else if (3 === this.itemSize)
            for (var e_20 = 0, n_29 = this.count; e_20 < n_29; e_20++)
                de.fromBufferAttribute(this, e_20), de.applyMatrix3(t), this.setXYZ(e_20, de.x, de.y, de.z); return this; }, applyMatrix4: function (t) { for (var e_21 = 0, n_30 = this.count; e_21 < n_30; e_21++)
            de.x = this.getX(e_21), de.y = this.getY(e_21), de.z = this.getZ(e_21), de.applyMatrix4(t), this.setXYZ(e_21, de.x, de.y, de.z); return this; }, applyNormalMatrix: function (t) { for (var e_22 = 0, n_31 = this.count; e_22 < n_31; e_22++)
            de.x = this.getX(e_22), de.y = this.getY(e_22), de.z = this.getZ(e_22), de.applyNormalMatrix(t), this.setXYZ(e_22, de.x, de.y, de.z); return this; }, transformDirection: function (t) { for (var e_23 = 0, n_32 = this.count; e_23 < n_32; e_23++)
            de.x = this.getX(e_23), de.y = this.getY(e_23), de.z = this.getZ(e_23), de.transformDirection(t), this.setXYZ(e_23, de.x, de.y, de.z); return this; }, set: function (t, e) {
            if (e === void 0) { e = 0; }
            return this.array.set(t, e), this;
        }, getX: function (t) { return this.array[t * this.itemSize]; }, setX: function (t, e) { return this.array[t * this.itemSize] = e, this; }, getY: function (t) { return this.array[t * this.itemSize + 1]; }, setY: function (t, e) { return this.array[t * this.itemSize + 1] = e, this; }, getZ: function (t) { return this.array[t * this.itemSize + 2]; }, setZ: function (t, e) { return this.array[t * this.itemSize + 2] = e, this; }, getW: function (t) { return this.array[t * this.itemSize + 3]; }, setW: function (t, e) { return this.array[t * this.itemSize + 3] = e, this; }, setXY: function (t, e, n) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this; }, setXYZ: function (t, e, n, i) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this; }, setXYZW: function (t, e, n, i, r) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this; }, onUpload: function (t) { return this.onUploadCallback = t, this; }, clone: function () { return new this.constructor(this.array, this.itemSize).copy(this); }, toJSON: function () { return { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized }; } }), me.prototype = Object.create(fe.prototype), me.prototype.constructor = me, ge.prototype = Object.create(fe.prototype), ge.prototype.constructor = ge, ve.prototype = Object.create(fe.prototype), ve.prototype.constructor = ve, _e.prototype = Object.create(fe.prototype), _e.prototype.constructor = _e, ye.prototype = Object.create(fe.prototype), ye.prototype.constructor = ye, xe.prototype = Object.create(fe.prototype), xe.prototype.constructor = xe, be.prototype = Object.create(fe.prototype), be.prototype.constructor = be, we.prototype = Object.create(fe.prototype), we.prototype.constructor = we, we.prototype.isFloat16BufferAttribute = !0, Me.prototype = Object.create(fe.prototype), Me.prototype.constructor = Me, Se.prototype = Object.create(fe.prototype), Se.prototype.constructor = Se, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
    var Te = 0;
    var Ae = new mt, Le = new Ut, Ce = new k, Re = new W, Pe = new W, De = new k;
    function Ie() { Object.defineProperty(this, "id", { value: Te++ }), this.uuid = R.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}; }
    Ie.prototype = Object.assign(Object.create(A.prototype), { constructor: Ie, isBufferGeometry: !0, getIndex: function () { return this.index; }, setIndex: function (t) { return Array.isArray(t) ? this.index = new (Ee(t) > 65535 ? be : ye)(t, 1) : this.index = t, this; }, getAttribute: function (t) { return this.attributes[t]; }, setAttribute: function (t, e) { return this.attributes[t] = e, this; }, deleteAttribute: function (t) { return delete this.attributes[t], this; }, hasAttribute: function (t) { return void 0 !== this.attributes[t]; }, addGroup: function (t, e, n) {
            if (n === void 0) { n = 0; }
            this.groups.push({ start: t, count: e, materialIndex: n });
        }, clearGroups: function () { this.groups = []; }, setDrawRange: function (t, e) { this.drawRange.start = t, this.drawRange.count = e; }, applyMatrix4: function (t) { var e = this.attributes.position; void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0); var n = this.attributes.normal; if (void 0 !== n) {
            var e_24 = (new D).getNormalMatrix(t);
            n.applyNormalMatrix(e_24), n.needsUpdate = !0;
        } var i = this.attributes.tangent; return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this; }, rotateX: function (t) { return Ae.makeRotationX(t), this.applyMatrix4(Ae), this; }, rotateY: function (t) { return Ae.makeRotationY(t), this.applyMatrix4(Ae), this; }, rotateZ: function (t) { return Ae.makeRotationZ(t), this.applyMatrix4(Ae), this; }, translate: function (t, e, n) { return Ae.makeTranslation(t, e, n), this.applyMatrix4(Ae), this; }, scale: function (t, e, n) { return Ae.makeScale(t, e, n), this.applyMatrix4(Ae), this; }, lookAt: function (t) { return Le.lookAt(t), Le.updateMatrix(), this.applyMatrix4(Le.matrix), this; }, center: function () { return this.computeBoundingBox(), this.boundingBox.getCenter(Ce).negate(), this.translate(Ce.x, Ce.y, Ce.z), this; }, setFromPoints: function (t) { var e = []; for (var n_33 = 0, i_32 = t.length; n_33 < i_32; n_33++) {
            var i_33 = t[n_33];
            e.push(i_33.x, i_33.y, i_33.z || 0);
        } return this.setAttribute("position", new Me(e, 3)), this; }, computeBoundingBox: function () { null === this.boundingBox && (this.boundingBox = new W); var t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0)); if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
                for (var t_30 = 0, n_34 = e.length; t_30 < n_34; t_30++) {
                    var n_35 = e[t_30];
                    Re.setFromBufferAttribute(n_35), this.morphTargetsRelative ? (De.addVectors(this.boundingBox.min, Re.min), this.boundingBox.expandByPoint(De), De.addVectors(this.boundingBox.max, Re.max), this.boundingBox.expandByPoint(De)) : (this.boundingBox.expandByPoint(Re.min), this.boundingBox.expandByPoint(Re.max));
                }
        }
        else
            this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this); }, computeBoundingSphere: function () { null === this.boundingSphere && (this.boundingSphere = new st); var t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new k, 1 / 0); if (t) {
            var n_36 = this.boundingSphere.center;
            if (Re.setFromBufferAttribute(t), e)
                for (var t_31 = 0, n_37 = e.length; t_31 < n_37; t_31++) {
                    var n_38 = e[t_31];
                    Pe.setFromBufferAttribute(n_38), this.morphTargetsRelative ? (De.addVectors(Re.min, Pe.min), Re.expandByPoint(De), De.addVectors(Re.max, Pe.max), Re.expandByPoint(De)) : (Re.expandByPoint(Pe.min), Re.expandByPoint(Pe.max));
                }
            Re.getCenter(n_36);
            var i_34 = 0;
            for (var e_25 = 0, r_24 = t.count; e_25 < r_24; e_25++)
                De.fromBufferAttribute(t, e_25), i_34 = Math.max(i_34, n_36.distanceToSquared(De));
            if (e)
                for (var r_25 = 0, o_3 = e.length; r_25 < o_3; r_25++) {
                    var o_4 = e[r_25], s_4 = this.morphTargetsRelative;
                    for (var e_26 = 0, r_26 = o_4.count; e_26 < r_26; e_26++)
                        De.fromBufferAttribute(o_4, e_26), s_4 && (Ce.fromBufferAttribute(t, e_26), De.add(Ce)), i_34 = Math.max(i_34, n_36.distanceToSquared(De));
                }
            this.boundingSphere.radius = Math.sqrt(i_34), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        } }, computeFaceNormals: function () { }, computeTangents: function () { var t = this.index, e = this.attributes; if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
            return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); var n = t.array, i = e.position.array, r = e.normal.array, o = e.uv.array, s = i.length / 3; void 0 === e.tangent && this.setAttribute("tangent", new fe(new Float32Array(4 * s), 4)); var a = e.tangent.array, l = [], c = []; for (var t_32 = 0; t_32 < s; t_32++)
            l[t_32] = new k, c[t_32] = new k; var h = new k, u = new k, d = new k, p = new P, f = new P, m = new P, g = new k, v = new k; function _(t, e, n) { h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(o, 2 * t), f.fromArray(o, 2 * e), m.fromArray(o, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p); var r = 1 / (f.x * m.y - m.x * f.y); isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v)); } var y = this.groups; 0 === y.length && (y = [{ start: 0, count: n.length }]); for (var t_33 = 0, e_27 = y.length; t_33 < e_27; ++t_33) {
            var e_28 = y[t_33], i_35 = e_28.start;
            for (var t_34 = i_35, r_27 = i_35 + e_28.count; t_34 < r_27; t_34 += 3)
                _(n[t_34 + 0], n[t_34 + 1], n[t_34 + 2]);
        } var x = new k, b = new k, w = new k, M = new k; function S(t) { w.fromArray(r, 3 * t), M.copy(w); var e = l[t]; x.copy(e), x.sub(w.multiplyScalar(w.dot(e))).normalize(), b.crossVectors(M, e); var n = b.dot(c[t]) < 0 ? -1 : 1; a[4 * t] = x.x, a[4 * t + 1] = x.y, a[4 * t + 2] = x.z, a[4 * t + 3] = n; } for (var t_35 = 0, e_29 = y.length; t_35 < e_29; ++t_35) {
            var e_30 = y[t_35], i_36 = e_30.start;
            for (var t_36 = i_36, r_28 = i_36 + e_30.count; t_36 < r_28; t_36 += 3)
                S(n[t_36 + 0]), S(n[t_36 + 1]), S(n[t_36 + 2]);
        } }, computeVertexNormals: function () { var t = this.index, e = this.getAttribute("position"); if (void 0 !== e) {
            var n_39 = this.getAttribute("normal");
            if (void 0 === n_39)
                n_39 = new fe(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n_39);
            else
                for (var t_37 = 0, e_31 = n_39.count; t_37 < e_31; t_37++)
                    n_39.setXYZ(t_37, 0, 0, 0);
            var i_37 = new k, r_29 = new k, o_5 = new k, s_5 = new k, a_6 = new k, l_7 = new k, c_5 = new k, h_3 = new k;
            if (t)
                for (var u_1 = 0, d_1 = t.count; u_1 < d_1; u_1 += 3) {
                    var d_2 = t.getX(u_1 + 0), p_1 = t.getX(u_1 + 1), f_1 = t.getX(u_1 + 2);
                    i_37.fromBufferAttribute(e, d_2), r_29.fromBufferAttribute(e, p_1), o_5.fromBufferAttribute(e, f_1), c_5.subVectors(o_5, r_29), h_3.subVectors(i_37, r_29), c_5.cross(h_3), s_5.fromBufferAttribute(n_39, d_2), a_6.fromBufferAttribute(n_39, p_1), l_7.fromBufferAttribute(n_39, f_1), s_5.add(c_5), a_6.add(c_5), l_7.add(c_5), n_39.setXYZ(d_2, s_5.x, s_5.y, s_5.z), n_39.setXYZ(p_1, a_6.x, a_6.y, a_6.z), n_39.setXYZ(f_1, l_7.x, l_7.y, l_7.z);
                }
            else
                for (var t_38 = 0, s_6 = e.count; t_38 < s_6; t_38 += 3)
                    i_37.fromBufferAttribute(e, t_38 + 0), r_29.fromBufferAttribute(e, t_38 + 1), o_5.fromBufferAttribute(e, t_38 + 2), c_5.subVectors(o_5, r_29), h_3.subVectors(i_37, r_29), c_5.cross(h_3), n_39.setXYZ(t_38 + 0, c_5.x, c_5.y, c_5.z), n_39.setXYZ(t_38 + 1, c_5.x, c_5.y, c_5.z), n_39.setXYZ(t_38 + 2, c_5.x, c_5.y, c_5.z);
            this.normalizeNormals(), n_39.needsUpdate = !0;
        } }, merge: function (t, e) { if (!t || !t.isBufferGeometry)
            return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t); void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); var n = this.attributes; for (var i_38 in n) {
            if (void 0 === t.attributes[i_38])
                continue;
            var r_30 = n[i_38].array, o_6 = t.attributes[i_38], s_7 = o_6.array, a_7 = o_6.itemSize * e, l_8 = Math.min(s_7.length, r_30.length - a_7);
            for (var t_39 = 0, e_32 = a_7; t_39 < l_8; t_39++, e_32++)
                r_30[e_32] = s_7[t_39];
        } return this; }, normalizeNormals: function () { var t = this.attributes.normal; for (var e_33 = 0, n_40 = t.count; e_33 < n_40; e_33++)
            De.fromBufferAttribute(t, e_33), De.normalize(), t.setXYZ(e_33, De.x, De.y, De.z); }, toNonIndexed: function () { function t(t, e) { var n = t.array, i = t.itemSize, r = t.normalized, o = new n.constructor(e.length * i); var s = 0, a = 0; for (var t_40 = 0, r_31 = e.length; t_40 < r_31; t_40++) {
            s = e[t_40] * i;
            for (var t_41 = 0; t_41 < i; t_41++)
                o[a++] = n[s++];
        } return new fe(o, i, r); } if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; var e = new Ie, n = this.index.array, i = this.attributes; for (var r_32 in i) {
            var o_7 = t(i[r_32], n);
            e.setAttribute(r_32, o_7);
        } var r = this.morphAttributes; for (var i_39 in r) {
            var o_8 = [], s_8 = r[i_39];
            for (var e_34 = 0, i_40 = s_8.length; e_34 < i_40; e_34++) {
                var i_41 = t(s_8[e_34], n);
                o_8.push(i_41);
            }
            e.morphAttributes[i_39] = o_8;
        } e.morphTargetsRelative = this.morphTargetsRelative; var o = this.groups; for (var t_42 = 0, n_41 = o.length; t_42 < n_41; t_42++) {
            var n_42 = o[t_42];
            e.addGroup(n_42.start, n_42.count, n_42.materialIndex);
        } return e; }, toJSON: function () { var t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            var e_35 = this.parameters;
            for (var n_43 in e_35)
                void 0 !== e_35[n_43] && (t[n_43] = e_35[n_43]);
            return t;
        } t.data = { attributes: {} }; var e = this.index; null !== e && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); var n = this.attributes; for (var e_36 in n) {
            var i_42 = n[e_36], r_33 = i_42.toJSON(t.data);
            "" !== i_42.name && (r_33.name = i_42.name), t.data.attributes[e_36] = r_33;
        } var i = {}; var r = !1; for (var e_37 in this.morphAttributes) {
            var n_44 = this.morphAttributes[e_37], o_9 = [];
            for (var e_38 = 0, i_43 = n_44.length; e_38 < i_43; e_38++) {
                var i_44 = n_44[e_38], r_34 = i_44.toJSON(t.data);
                "" !== i_44.name && (r_34.name = i_44.name), o_9.push(r_34);
            }
            o_9.length > 0 && (i[e_37] = o_9, r = !0);
        } r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative); var o = this.groups; o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o))); var s = this.boundingSphere; return null !== s && (t.data.boundingSphere = { center: s.center.toArray(), radius: s.radius }), t; }, clone: function () { return (new Ie).copy(this); }, copy: function (t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; var e = {}; this.name = t.name; var n = t.index; null !== n && this.setIndex(n.clone(e)); var i = t.attributes; for (var t_43 in i) {
            var n_45 = i[t_43];
            this.setAttribute(t_43, n_45.clone(e));
        } var r = t.morphAttributes; for (var t_44 in r) {
            var n_46 = [], i_45 = r[t_44];
            for (var t_45 = 0, r_35 = i_45.length; t_45 < r_35; t_45++)
                n_46.push(i_45[t_45].clone(e));
            this.morphAttributes[t_44] = n_46;
        } this.morphTargetsRelative = t.morphTargetsRelative; var o = t.groups; for (var t_46 = 0, e_39 = o.length; t_46 < e_39; t_46++) {
            var e_40 = o[t_46];
            this.addGroup(e_40.start, e_40.count, e_40.materialIndex);
        } var s = t.boundingBox; null !== s && (this.boundingBox = s.clone()); var a = t.boundingSphere; return null !== a && (this.boundingSphere = a.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
    var Ne = new mt, Oe = new ft, ze = new st, Be = new k, He = new k, Fe = new k, Ue = new k, ke = new k, Ge = new k, Ve = new k, We = new k, je = new k, qe = new P, Xe = new P, Ye = new P, Je = new k, Ze = new k;
    function Qe(t, e) {
        if (t === void 0) { t = new Ie; }
        if (e === void 0) { e = new ue; }
        Ut.call(this), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
    }
    function Ke(t, e, n, i, r, o, s, a, l, c, h, u) { Be.fromBufferAttribute(r, c), He.fromBufferAttribute(r, h), Fe.fromBufferAttribute(r, u); var d = t.morphTargetInfluences; if (e.morphTargets && o && d) {
        Ve.set(0, 0, 0), We.set(0, 0, 0), je.set(0, 0, 0);
        for (var t_47 = 0, e_41 = o.length; t_47 < e_41; t_47++) {
            var e_42 = d[t_47], n_47 = o[t_47];
            0 !== e_42 && (Ue.fromBufferAttribute(n_47, c), ke.fromBufferAttribute(n_47, h), Ge.fromBufferAttribute(n_47, u), s ? (Ve.addScaledVector(Ue, e_42), We.addScaledVector(ke, e_42), je.addScaledVector(Ge, e_42)) : (Ve.addScaledVector(Ue.sub(Be), e_42), We.addScaledVector(ke.sub(He), e_42), je.addScaledVector(Ge.sub(Fe), e_42)));
        }
        Be.add(Ve), He.add(We), Fe.add(je);
    } t.isSkinnedMesh && e.skinning && (t.boneTransform(c, Be), t.boneTransform(h, He), t.boneTransform(u, Fe)); var p = function (t, e, n, i, r, o, s, a) { var l; if (l = 1 === e.side ? i.intersectTriangle(s, o, r, !0, a) : i.intersectTriangle(r, o, s, 2 !== e.side, a), null === l)
        return null; Ze.copy(a), Ze.applyMatrix4(t.matrixWorld); var c = n.ray.origin.distanceTo(Ze); return c < n.near || c > n.far ? null : { distance: c, point: Ze.clone(), object: t }; }(t, e, n, i, Be, He, Fe, Je); if (p) {
        a && (qe.fromBufferAttribute(a, c), Xe.fromBufferAttribute(a, h), Ye.fromBufferAttribute(a, u), p.uv = ee.getUV(Je, Be, He, Fe, qe, Xe, Ye, new P)), l && (qe.fromBufferAttribute(l, c), Xe.fromBufferAttribute(l, h), Ye.fromBufferAttribute(l, u), p.uv2 = ee.getUV(Je, Be, He, Fe, qe, Xe, Ye, new P));
        var t_48 = { a: c, b: h, c: u, normal: new k, materialIndex: 0 };
        ee.getNormal(Be, He, Fe, t_48.normal), p.face = t_48;
    } return p; }
    Qe.prototype = Object.assign(Object.create(Ut.prototype), { constructor: Qe, isMesh: !0, copy: function (t) { return Ut.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this; }, updateMorphTargets: function () { var t = this.geometry; if (t.isBufferGeometry) {
            var e_43 = t.morphAttributes, n_48 = Object.keys(e_43);
            if (n_48.length > 0) {
                var t_49 = e_43[n_48[0]];
                if (void 0 !== t_49) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (var e_44 = 0, n_49 = t_49.length; e_44 < n_49; e_44++) {
                        var n_50 = t_49[e_44].name || String(e_44);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n_50] = e_44;
                    }
                }
            }
        }
        else {
            var e_45 = t.morphTargets;
            void 0 !== e_45 && e_45.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        } }, raycast: function (t, e) { var n = this.geometry, i = this.material, r = this.matrixWorld; if (void 0 === i)
            return; if (null === n.boundingSphere && n.computeBoundingSphere(), ze.copy(n.boundingSphere), ze.applyMatrix4(r), !1 === t.ray.intersectsSphere(ze))
            return; if (Ne.copy(r).invert(), Oe.copy(t.ray).applyMatrix4(Ne), null !== n.boundingBox && !1 === Oe.intersectsBox(n.boundingBox))
            return; var o; if (n.isBufferGeometry) {
            var r_36 = n.index, s_9 = n.attributes.position, a_8 = n.morphAttributes.position, l_9 = n.morphTargetsRelative, c_6 = n.attributes.uv, h_4 = n.attributes.uv2, u_2 = n.groups, d_3 = n.drawRange;
            if (null !== r_36)
                if (Array.isArray(i))
                    for (var n_51 = 0, p_2 = u_2.length; n_51 < p_2; n_51++) {
                        var p_3 = u_2[n_51], f_2 = i[p_3.materialIndex];
                        for (var n_52 = Math.max(p_3.start, d_3.start), i_46 = Math.min(p_3.start + p_3.count, d_3.start + d_3.count); n_52 < i_46; n_52 += 3) {
                            var i_47 = r_36.getX(n_52), u_3 = r_36.getX(n_52 + 1), d_4 = r_36.getX(n_52 + 2);
                            o = Ke(this, f_2, t, Oe, s_9, a_8, l_9, c_6, h_4, i_47, u_3, d_4), o && (o.faceIndex = Math.floor(n_52 / 3), o.face.materialIndex = p_3.materialIndex, e.push(o));
                        }
                    }
                else
                    for (var n_53 = Math.max(0, d_3.start), u_4 = Math.min(r_36.count, d_3.start + d_3.count); n_53 < u_4; n_53 += 3) {
                        var u_5 = r_36.getX(n_53), d_5 = r_36.getX(n_53 + 1), p_4 = r_36.getX(n_53 + 2);
                        o = Ke(this, i, t, Oe, s_9, a_8, l_9, c_6, h_4, u_5, d_5, p_4), o && (o.faceIndex = Math.floor(n_53 / 3), e.push(o));
                    }
            else if (void 0 !== s_9)
                if (Array.isArray(i))
                    for (var n_54 = 0, r_37 = u_2.length; n_54 < r_37; n_54++) {
                        var r_38 = u_2[n_54], p_5 = i[r_38.materialIndex];
                        for (var n_55 = Math.max(r_38.start, d_3.start), i_48 = Math.min(r_38.start + r_38.count, d_3.start + d_3.count); n_55 < i_48; n_55 += 3)
                            o = Ke(this, p_5, t, Oe, s_9, a_8, l_9, c_6, h_4, n_55, n_55 + 1, n_55 + 2), o && (o.faceIndex = Math.floor(n_55 / 3), o.face.materialIndex = r_38.materialIndex, e.push(o));
                    }
                else
                    for (var n_56 = Math.max(0, d_3.start), r_39 = Math.min(s_9.count, d_3.start + d_3.count); n_56 < r_39; n_56 += 3)
                        o = Ke(this, i, t, Oe, s_9, a_8, l_9, c_6, h_4, n_56, n_56 + 1, n_56 + 2), o && (o.faceIndex = Math.floor(n_56 / 3), e.push(o));
        }
        else
            n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); } });
    var $e = /** @class */ (function (_super) {
        __extends($e, _super);
        function $e(t, e, n, i, r, o) {
            if (t === void 0) { t = 1; }
            if (e === void 0) { e = 1; }
            if (n === void 0) { n = 1; }
            if (i === void 0) { i = 1; }
            if (r === void 0) { r = 1; }
            if (o === void 0) { o = 1; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "BoxGeometry", _this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
            var s = _this;
            i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
            var a = [], l = [], c = [], h = [];
            var u = 0, d = 0;
            function p(t, e, n, i, r, o, p, f, m, g, v) { var _ = o / m, y = p / g, x = o / 2, b = p / 2, w = f / 2, M = m + 1, S = g + 1; var E = 0, T = 0; var A = new k; for (var o_10 = 0; o_10 < S; o_10++) {
                var s_10 = o_10 * y - b;
                for (var a_9 = 0; a_9 < M; a_9++) {
                    var u_6 = a_9 * _ - x;
                    A[t] = u_6 * i, A[e] = s_10 * r, A[n] = w, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(a_9 / m), h.push(1 - o_10 / g), E += 1;
                }
            } for (var t_50 = 0; t_50 < g; t_50++)
                for (var e_46 = 0; e_46 < m; e_46++) {
                    var n_57 = u + e_46 + M * t_50, i_49 = u + e_46 + M * (t_50 + 1), r_40 = u + (e_46 + 1) + M * (t_50 + 1), o_11 = u + (e_46 + 1) + M * t_50;
                    a.push(n_57, i_49, o_11), a.push(i_49, r_40, o_11), T += 6;
                } s.addGroup(d, T, v), d += T, u += E; }
            p("z", "y", "x", -1, -1, n, e, t, o, r, 0), p("z", "y", "x", 1, -1, n, e, -t, o, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, o, 2), p("x", "z", "y", 1, -1, t, n, -e, i, o, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), _this.setIndex(a), _this.setAttribute("position", new Me(l, 3)), _this.setAttribute("normal", new Me(c, 3)), _this.setAttribute("uv", new Me(h, 2));
            return _this;
        }
        return $e;
    }(Ie));
    function tn(t) { var e = {}; for (var n_58 in t) {
        e[n_58] = {};
        for (var i_50 in t[n_58]) {
            var r_41 = t[n_58][i_50];
            r_41 && (r_41.isColor || r_41.isMatrix3 || r_41.isMatrix4 || r_41.isVector2 || r_41.isVector3 || r_41.isVector4 || r_41.isTexture || r_41.isQuaternion) ? e[n_58][i_50] = r_41.clone() : Array.isArray(r_41) ? e[n_58][i_50] = r_41.slice() : e[n_58][i_50] = r_41;
        }
    } return e; }
    function en(t) { var e = {}; for (var n_59 = 0; n_59 < t.length; n_59++) {
        var i_51 = tn(t[n_59]);
        for (var t_51 in i_51)
            e[t_51] = i_51[t_51];
    } return e; }
    var nn = { clone: tn, merge: en };
    function rn(t) { ie.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t)); }
    function on() { Ut.call(this), this.type = "Camera", this.matrixWorldInverse = new mt, this.projectionMatrix = new mt, this.projectionMatrixInverse = new mt; }
    function sn(t, e, n, i) {
        if (t === void 0) { t = 50; }
        if (e === void 0) { e = 1; }
        if (n === void 0) { n = .1; }
        if (i === void 0) { i = 2e3; }
        on.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    rn.prototype = Object.create(ie.prototype), rn.prototype.constructor = rn, rn.prototype.isShaderMaterial = !0, rn.prototype.copy = function (t) { return ie.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = tn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this; }, rn.prototype.toJSON = function (t) { var e = ie.prototype.toJSON.call(this, t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (var n_60 in this.uniforms) {
        var i_52 = this.uniforms[n_60].value;
        i_52 && i_52.isTexture ? e.uniforms[n_60] = { type: "t", value: i_52.toJSON(t).uuid } : i_52 && i_52.isColor ? e.uniforms[n_60] = { type: "c", value: i_52.getHex() } : i_52 && i_52.isVector2 ? e.uniforms[n_60] = { type: "v2", value: i_52.toArray() } : i_52 && i_52.isVector3 ? e.uniforms[n_60] = { type: "v3", value: i_52.toArray() } : i_52 && i_52.isVector4 ? e.uniforms[n_60] = { type: "v4", value: i_52.toArray() } : i_52 && i_52.isMatrix3 ? e.uniforms[n_60] = { type: "m3", value: i_52.toArray() } : i_52 && i_52.isMatrix4 ? e.uniforms[n_60] = { type: "m4", value: i_52.toArray() } : e.uniforms[n_60] = { value: i_52 };
    } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader; var n = {}; for (var t_52 in this.extensions)
        !0 === this.extensions[t_52] && (n[t_52] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e; }, on.prototype = Object.assign(Object.create(Ut.prototype), { constructor: on, isCamera: !0, copy: function (t, e) { return Ut.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this; }, getWorldDirection: function (t) { void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new k), this.updateWorldMatrix(!0, !1); var e = this.matrixWorld.elements; return t.set(-e[8], -e[9], -e[10]).normalize(); }, updateMatrixWorld: function (t) { Ut.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }, updateWorldMatrix: function (t, e) { Ut.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }, clone: function () { return (new this.constructor).copy(this); } }), sn.prototype = Object.assign(Object.create(on.prototype), { constructor: sn, isPerspectiveCamera: !0, copy: function (t, e) { return on.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this; }, setFocalLength: function (t) { var e = .5 * this.getFilmHeight() / t; this.fov = 2 * R.RAD2DEG * Math.atan(e), this.updateProjectionMatrix(); }, getFocalLength: function () { var t = Math.tan(.5 * R.DEG2RAD * this.fov); return .5 * this.getFilmHeight() / t; }, getEffectiveFOV: function () { return 2 * R.RAD2DEG * Math.atan(Math.tan(.5 * R.DEG2RAD * this.fov) / this.zoom); }, getFilmWidth: function () { return this.filmGauge * Math.min(this.aspect, 1); }, getFilmHeight: function () { return this.filmGauge / Math.max(this.aspect, 1); }, setViewOffset: function (t, e, n, i, r, o) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix(); }, clearViewOffset: function () { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix(); }, updateProjectionMatrix: function () { var t = this.near; var e = t * Math.tan(.5 * R.DEG2RAD * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -.5 * i; var o = this.view; if (null !== this.view && this.view.enabled) {
            var t_53 = o.fullWidth, s_11 = o.fullHeight;
            r += o.offsetX * i / t_53, e -= o.offsetY * n / s_11, i *= o.width / t_53, n *= o.height / s_11;
        } var s = this.filmOffset; 0 !== s && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); }, toJSON: function (t) { var e = Ut.prototype.toJSON.call(this, t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e; } });
    var an = 90;
    var ln = /** @class */ (function (_super) {
        __extends(ln, _super);
        function ln(t, e, n) {
            var _this = this;
            if (_this = _super.call(this) || this, _this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget)
                return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            _this.renderTarget = n;
            var i = new sn(an, 1, t, e);
            i.layers = _this.layers, i.up.set(0, -1, 0), i.lookAt(new k(1, 0, 0)), _this.add(i);
            var r = new sn(an, 1, t, e);
            r.layers = _this.layers, r.up.set(0, -1, 0), r.lookAt(new k(-1, 0, 0)), _this.add(r);
            var o = new sn(an, 1, t, e);
            o.layers = _this.layers, o.up.set(0, 0, 1), o.lookAt(new k(0, 1, 0)), _this.add(o);
            var s = new sn(an, 1, t, e);
            s.layers = _this.layers, s.up.set(0, 0, -1), s.lookAt(new k(0, -1, 0)), _this.add(s);
            var a = new sn(an, 1, t, e);
            a.layers = _this.layers, a.up.set(0, -1, 0), a.lookAt(new k(0, 0, 1)), _this.add(a);
            var l = new sn(an, 1, t, e);
            l.layers = _this.layers, l.up.set(0, -1, 0), l.lookAt(new k(0, 0, -1)), _this.add(l);
            return _this;
        }
        ln.prototype.update = function (t, e) { null === this.parent && this.updateMatrixWorld(); var n = this.renderTarget, _b = this.children, i = _b[0], r = _b[1], o = _b[2], s = _b[3], a = _b[4], l = _b[5], c = t.xr.enabled, h = t.getRenderTarget(); t.xr.enabled = !1; var u = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, o), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, a), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c; };
        return ln;
    }(Ut));
    var cn = /** @class */ (function (_super) {
        __extends(cn, _super);
        function cn(t, e, n, i, r, o, s, a, l, c) {
            var _this = this;
            _this = _super.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, n, i, r, o, s = void 0 !== s ? s : d, a, l, c) || this, _this._needsFlipEnvMap = !0, _this.flipY = !1;
            return _this;
        }
        Object.defineProperty(cn.prototype, "images", {
            get: function () { return this.image; },
            set: function (t) { this.image = t; },
            enumerable: false,
            configurable: true
        });
        return cn;
    }(z));
    cn.prototype.isCubeTexture = !0;
    var hn = /** @class */ (function (_super) {
        __extends(hn, _super);
        function hn(t, e, n) {
            var _this = this;
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), _this = _super.call(this, t, t, e) || this, e = e || {}, _this.texture = new cn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), _this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, _this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : o, _this.texture._needsFlipEnvMap = !1;
            return _this;
        }
        hn.prototype.fromEquirectangularTexture = function (t, e) { this.texture.type = e.type, this.texture.format = p, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; var n = { tEquirect: { value: null } }, i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t", r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t", a = new $e(5, 5, 5), l = new rn({ name: "CubemapFromEquirect", uniforms: tn(n), vertexShader: i, fragmentShader: r, side: 1, blending: 0 }); l.uniforms.tEquirect.value = e; var c = new Qe(a, l), h = e.minFilter; return e.minFilter === s && (e.minFilter = o), new ln(1, 10, this).update(t, c), e.minFilter = h, c.geometry.dispose(), c.material.dispose(), this; };
        hn.prototype.clear = function (t, e, n, i) { var r = t.getRenderTarget(); for (var r_42 = 0; r_42 < 6; r_42++)
            t.setRenderTarget(this, r_42), t.clear(e, n, i); t.setRenderTarget(r); };
        return hn;
    }(F));
    hn.prototype.isWebGLCubeRenderTarget = !0;
    var un = /** @class */ (function (_super) {
        __extends(un, _super);
        function un(t, e, n, i, o, s, a, l, c, h, u, d) {
            var _this = this;
            _this = _super.call(this, null, s, a, l, c, h, i, o, u, d) || this, _this.image = { data: t || null, width: e || 1, height: n || 1 }, _this.magFilter = void 0 !== c ? c : r, _this.minFilter = void 0 !== h ? h : r, _this.generateMipmaps = !1, _this.flipY = !1, _this.unpackAlignment = 1, _this.needsUpdate = !0;
            return _this;
        }
        return un;
    }(z));
    un.prototype.isDataTexture = !0;
    var dn = new st, pn = new k;
    var fn = /** @class */ (function () {
        function fn(t, e, n, i, r, o) {
            if (t === void 0) { t = new Wt; }
            if (e === void 0) { e = new Wt; }
            if (n === void 0) { n = new Wt; }
            if (i === void 0) { i = new Wt; }
            if (r === void 0) { r = new Wt; }
            if (o === void 0) { o = new Wt; }
            this.planes = [t, e, n, i, r, o];
        }
        fn.prototype.set = function (t, e, n, i, r, o) { var s = this.planes; return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(o), this; };
        fn.prototype.copy = function (t) { var e = this.planes; for (var n_61 = 0; n_61 < 6; n_61++)
            e[n_61].copy(t.planes[n_61]); return this; };
        fn.prototype.setFromProjectionMatrix = function (t) { var e = this.planes, n = t.elements, i = n[0], r = n[1], o = n[2], s = n[3], a = n[4], l = n[5], c = n[6], h = n[7], u = n[8], d = n[9], p = n[10], f = n[11], m = n[12], g = n[13], v = n[14], _ = n[15]; return e[0].setComponents(s - i, h - a, f - u, _ - m).normalize(), e[1].setComponents(s + i, h + a, f + u, _ + m).normalize(), e[2].setComponents(s + r, h + l, f + d, _ + g).normalize(), e[3].setComponents(s - r, h - l, f - d, _ - g).normalize(), e[4].setComponents(s - o, h - c, f - p, _ - v).normalize(), e[5].setComponents(s + o, h + c, f + p, _ + v).normalize(), this; };
        fn.prototype.intersectsObject = function (t) { var e = t.geometry; return null === e.boundingSphere && e.computeBoundingSphere(), dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(dn); };
        fn.prototype.intersectsSprite = function (t) { return dn.center.set(0, 0, 0), dn.radius = .7071067811865476, dn.applyMatrix4(t.matrixWorld), this.intersectsSphere(dn); };
        fn.prototype.intersectsSphere = function (t) { var e = this.planes, n = t.center, i = -t.radius; for (var t_54 = 0; t_54 < 6; t_54++)
            if (e[t_54].distanceToPoint(n) < i)
                return !1; return !0; };
        fn.prototype.intersectsBox = function (t) { var e = this.planes; for (var n_62 = 0; n_62 < 6; n_62++) {
            var i_53 = e[n_62];
            if (pn.x = i_53.normal.x > 0 ? t.max.x : t.min.x, pn.y = i_53.normal.y > 0 ? t.max.y : t.min.y, pn.z = i_53.normal.z > 0 ? t.max.z : t.min.z, i_53.distanceToPoint(pn) < 0)
                return !1;
        } return !0; };
        fn.prototype.containsPoint = function (t) { var e = this.planes; for (var n_63 = 0; n_63 < 6; n_63++)
            if (e[n_63].distanceToPoint(t) < 0)
                return !1; return !0; };
        fn.prototype.clone = function () { return (new this.constructor).copy(this); };
        return fn;
    }());
    function mn() { var t = null, e = !1, n = null, i = null; function r(e, o) { n(e, o), i = t.requestAnimationFrame(r); } return { start: function () { !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0); }, stop: function () { t.cancelAnimationFrame(i), e = !1; }, setAnimationLoop: function (t) { n = t; }, setContext: function (e) { t = e; } }; }
    function gn(t, e) { var n = e.isWebGL2, i = new WeakMap; return { get: function (t) { return t.isInterleavedBufferAttribute && (t = t.data), i.get(t); }, remove: function (e) { e.isInterleavedBufferAttribute && (e = e.data); var n = i.get(e); n && (t.deleteBuffer(n.buffer), i.delete(e)); }, update: function (e, r) { if (e.isGLBufferAttribute) {
            var t_55 = i.get(e);
            return void ((!t_55 || t_55.version < e.version) && i.set(e, { buffer: e.buffer, type: e.type, bytesPerElement: e.elementSize, version: e.version }));
        } e.isInterleavedBufferAttribute && (e = e.data); var o = i.get(e); void 0 === o ? i.set(e, function (e, i) { var r = e.array, o = e.usage, s = t.createBuffer(); t.bindBuffer(i, s), t.bufferData(i, r, o), e.onUploadCallback(); var a = 5126; return r instanceof Float32Array ? a = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? a = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : a = 5123 : r instanceof Int16Array ? a = 5122 : r instanceof Uint32Array ? a = 5125 : r instanceof Int32Array ? a = 5124 : r instanceof Int8Array ? a = 5120 : r instanceof Uint8Array && (a = 5121), { buffer: s, type: a, bytesPerElement: r.BYTES_PER_ELEMENT, version: e.version }; }(e, r)) : o.version < e.version && (function (e, i, r) { var o = i.array, s = i.updateRange; t.bindBuffer(r, e), -1 === s.count ? t.bufferSubData(r, 0, o) : (n ? t.bufferSubData(r, s.offset * o.BYTES_PER_ELEMENT, o, s.offset, s.count) : t.bufferSubData(r, s.offset * o.BYTES_PER_ELEMENT, o.subarray(s.offset, s.offset + s.count)), s.count = -1); }(o.buffer, e, r), o.version = e.version); } }; }
    var vn = /** @class */ (function (_super) {
        __extends(vn, _super);
        function vn(t, e, n, i) {
            if (t === void 0) { t = 1; }
            if (e === void 0) { e = 1; }
            if (n === void 0) { n = 1; }
            if (i === void 0) { i = 1; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "PlaneGeometry", _this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i };
            var r = t / 2, o = e / 2, s = Math.floor(n), a = Math.floor(i), l = s + 1, c = a + 1, h = t / s, u = e / a, d = [], p = [], f = [], m = [];
            for (var t_56 = 0; t_56 < c; t_56++) {
                var e_47 = t_56 * u - o;
                for (var n_64 = 0; n_64 < l; n_64++) {
                    var i_54 = n_64 * h - r;
                    p.push(i_54, -e_47, 0), f.push(0, 0, 1), m.push(n_64 / s), m.push(1 - t_56 / a);
                }
            }
            for (var t_57 = 0; t_57 < a; t_57++)
                for (var e_48 = 0; e_48 < s; e_48++) {
                    var n_65 = e_48 + l * t_57, i_55 = e_48 + l * (t_57 + 1), r_43 = e_48 + 1 + l * (t_57 + 1), o_12 = e_48 + 1 + l * t_57;
                    d.push(n_65, i_55, o_12), d.push(i_55, r_43, o_12);
                }
            _this.setIndex(d), _this.setAttribute("position", new Me(p, 3)), _this.setAttribute("normal", new Me(f, 3)), _this.setAttribute("uv", new Me(m, 2));
            return _this;
        }
        return vn;
    }(Ie));
    var _n = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif", transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif", uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}", normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}" }, yn = { common: { diffuse: { value: new he(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new D }, uv2Transform: { value: new D }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new P(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new he(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new he(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new D } }, sprite: { diffuse: { value: new he(15658734) }, opacity: { value: 1 }, center: { value: new P(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new D } } }, xn = { basic: { uniforms: en([yn.common, yn.specularmap, yn.envmap, yn.aomap, yn.lightmap, yn.fog]), vertexShader: _n.meshbasic_vert, fragmentShader: _n.meshbasic_frag }, lambert: { uniforms: en([yn.common, yn.specularmap, yn.envmap, yn.aomap, yn.lightmap, yn.emissivemap, yn.fog, yn.lights, { emissive: { value: new he(0) } }]), vertexShader: _n.meshlambert_vert, fragmentShader: _n.meshlambert_frag }, phong: { uniforms: en([yn.common, yn.specularmap, yn.envmap, yn.aomap, yn.lightmap, yn.emissivemap, yn.bumpmap, yn.normalmap, yn.displacementmap, yn.fog, yn.lights, { emissive: { value: new he(0) }, specular: { value: new he(1118481) }, shininess: { value: 30 } }]), vertexShader: _n.meshphong_vert, fragmentShader: _n.meshphong_frag }, standard: { uniforms: en([yn.common, yn.envmap, yn.aomap, yn.lightmap, yn.emissivemap, yn.bumpmap, yn.normalmap, yn.displacementmap, yn.roughnessmap, yn.metalnessmap, yn.fog, yn.lights, { emissive: { value: new he(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: _n.meshphysical_vert, fragmentShader: _n.meshphysical_frag }, toon: { uniforms: en([yn.common, yn.aomap, yn.lightmap, yn.emissivemap, yn.bumpmap, yn.normalmap, yn.displacementmap, yn.gradientmap, yn.fog, yn.lights, { emissive: { value: new he(0) } }]), vertexShader: _n.meshtoon_vert, fragmentShader: _n.meshtoon_frag }, matcap: { uniforms: en([yn.common, yn.bumpmap, yn.normalmap, yn.displacementmap, yn.fog, { matcap: { value: null } }]), vertexShader: _n.meshmatcap_vert, fragmentShader: _n.meshmatcap_frag }, points: { uniforms: en([yn.points, yn.fog]), vertexShader: _n.points_vert, fragmentShader: _n.points_frag }, dashed: { uniforms: en([yn.common, yn.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: _n.linedashed_vert, fragmentShader: _n.linedashed_frag }, depth: { uniforms: en([yn.common, yn.displacementmap]), vertexShader: _n.depth_vert, fragmentShader: _n.depth_frag }, normal: { uniforms: en([yn.common, yn.bumpmap, yn.normalmap, yn.displacementmap, { opacity: { value: 1 } }]), vertexShader: _n.normal_vert, fragmentShader: _n.normal_frag }, sprite: { uniforms: en([yn.sprite, yn.fog]), vertexShader: _n.sprite_vert, fragmentShader: _n.sprite_frag }, background: { uniforms: { uvTransform: { value: new D }, t2D: { value: null } }, vertexShader: _n.background_vert, fragmentShader: _n.background_frag }, cube: { uniforms: en([yn.envmap, { opacity: { value: 1 } }]), vertexShader: _n.cube_vert, fragmentShader: _n.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: _n.equirect_vert, fragmentShader: _n.equirect_frag }, distanceRGBA: { uniforms: en([yn.common, yn.displacementmap, { referencePosition: { value: new k }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: _n.distanceRGBA_vert, fragmentShader: _n.distanceRGBA_frag }, shadow: { uniforms: en([yn.lights, yn.fog, { color: { value: new he(0) }, opacity: { value: 1 } }]), vertexShader: _n.shadow_vert, fragmentShader: _n.shadow_frag } };
    function bn(t, e, n, i, r) { var o = new he(0); var s, a, l = 0, c = null, h = 0, u = null; function d(t, e) { n.buffers.color.setClear(t.r, t.g, t.b, e, r); } return { getClearColor: function () { return o; }, setClearColor: function (t, e) {
            if (e === void 0) { e = 1; }
            o.set(t), l = e, d(o, l);
        }, getClearAlpha: function () { return l; }, setClearAlpha: function (t) { l = t, d(o, l); }, render: function (n, r, p, f) { var m = !0 === r.isScene ? r.background : null; m && m.isTexture && (m = e.get(m)); var g = t.xr, v = g.getSession && g.getSession(); v && "additive" === v.environmentBlendMode && (m = null), null === m ? d(o, l) : m && m.isColor && (d(m, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping) ? (void 0 === a && (a = new Qe(new $e(1, 1, 1), new rn({ name: "BackgroundCubeMaterial", uniforms: tn(xn.cube.uniforms), vertexShader: xn.cube.vertexShader, fragmentShader: xn.cube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function (t, e, n) { this.matrixWorld.copyPosition(n.matrixWorld); }, Object.defineProperty(a.material, "envMap", { get: function () { return this.uniforms.envMap.value; } }), i.update(a)), m.isWebGLCubeRenderTarget && (m = m.texture), a.material.uniforms.envMap.value = m, a.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, c === m && h === m.version && u === t.toneMapping || (a.material.needsUpdate = !0, c = m, h = m.version, u = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null)) : m && m.isTexture && (void 0 === s && (s = new Qe(new vn(2, 2), new rn({ name: "BackgroundMaterial", uniforms: tn(xn.background.uniforms), vertexShader: xn.background.vertexShader, fragmentShader: xn.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), s.geometry.deleteAttribute("normal"), Object.defineProperty(s.material, "map", { get: function () { return this.uniforms.t2D.value; } }), i.update(s)), s.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), s.material.uniforms.uvTransform.value.copy(m.matrix), c === m && h === m.version && u === t.toneMapping || (s.material.needsUpdate = !0, c = m, h = m.version, u = t.toneMapping), n.unshift(s, s.geometry, s.material, 0, 0, null)); } }; }
    function wn(t, e, n, i) { var r = t.getParameter(34921), o = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), s = i.isWebGL2 || null !== o, a = {}, l = d(null); var c = l; function h(e) { return i.isWebGL2 ? t.bindVertexArray(e) : o.bindVertexArrayOES(e); } function u(e) { return i.isWebGL2 ? t.deleteVertexArray(e) : o.deleteVertexArrayOES(e); } function d(t) { var e = [], n = [], i = []; for (var t_58 = 0; t_58 < r; t_58++)
        e[t_58] = 0, n[t_58] = 0, i[t_58] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: e, enabledAttributes: n, attributeDivisors: i, object: t, attributes: {}, index: null }; } function p() { var t = c.newAttributes; for (var e_49 = 0, n_66 = t.length; e_49 < n_66; e_49++)
        t[e_49] = 0; } function f(t) { m(t, 0); } function m(n, r) { var o = c.newAttributes, s = c.enabledAttributes, a = c.attributeDivisors; o[n] = 1, 0 === s[n] && (t.enableVertexAttribArray(n), s[n] = 1), a[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), a[n] = r); } function g() { var e = c.newAttributes, n = c.enabledAttributes; for (var i_56 = 0, r_44 = n.length; i_56 < r_44; i_56++)
        n[i_56] !== e[i_56] && (t.disableVertexAttribArray(i_56), n[i_56] = 0); } function v(e, n, r, o, s, a) { !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, o, s, a) : t.vertexAttribIPointer(e, n, r, s, a); } function _() { y(), c !== l && (c = l, h(c.object)); } function y() { l.geometry = null, l.program = null, l.wireframe = !1; } return { setup: function (r, l, u, _, y) { var x = !1; if (s) {
            var e_50 = function (e, n, r) { var s = !0 === r.wireframe; var l = a[e.id]; void 0 === l && (l = {}, a[e.id] = l); var c = l[n.id]; void 0 === c && (c = {}, l[n.id] = c); var h = c[s]; return void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : o.createVertexArrayOES()), c[s] = h), h; }(_, u, l);
            c !== e_50 && (c = e_50, h(c.object)), x = function (t, e) { var n = c.attributes, i = t.attributes; var r = 0; for (var t_59 in i) {
                var e_51 = n[t_59], o_13 = i[t_59];
                if (void 0 === e_51)
                    return !0;
                if (e_51.attribute !== o_13)
                    return !0;
                if (e_51.data !== o_13.data)
                    return !0;
                r++;
            } return c.attributesNum !== r || c.index !== e; }(_, y), x && function (t, e) { var n = {}, i = t.attributes; var r = 0; for (var t_60 in i) {
                var e_52 = i[t_60], o_14 = {};
                o_14.attribute = e_52, e_52.data && (o_14.data = e_52.data), n[t_60] = o_14, r++;
            } c.attributes = n, c.attributesNum = r, c.index = e; }(_, y);
        }
        else {
            var t_61 = !0 === l.wireframe;
            c.geometry === _.id && c.program === u.id && c.wireframe === t_61 || (c.geometry = _.id, c.program = u.id, c.wireframe = t_61, x = !0);
        } !0 === r.isInstancedMesh && (x = !0), null !== y && n.update(y, 34963), x && (function (r, o, s, a) { if (!1 === i.isWebGL2 && (r.isInstancedMesh || a.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
            return; p(); var l = a.attributes, c = s.getAttributes(), h = o.defaultAttributeValues; for (var e_53 in c) {
            var i_57 = c[e_53];
            if (i_57 >= 0) {
                var o_15 = l[e_53];
                if (void 0 !== o_15) {
                    var e_54 = o_15.normalized, r_45 = o_15.itemSize, s_12 = n.get(o_15);
                    if (void 0 === s_12)
                        continue;
                    var l_10 = s_12.buffer, c_7 = s_12.type, h_5 = s_12.bytesPerElement;
                    if (o_15.isInterleavedBufferAttribute) {
                        var n_67 = o_15.data, s_13 = n_67.stride, u_7 = o_15.offset;
                        n_67 && n_67.isInstancedInterleavedBuffer ? (m(i_57, n_67.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = n_67.meshPerAttribute * n_67.count)) : f(i_57), t.bindBuffer(34962, l_10), v(i_57, r_45, c_7, e_54, s_13 * h_5, u_7 * h_5);
                    }
                    else
                        o_15.isInstancedBufferAttribute ? (m(i_57, o_15.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = o_15.meshPerAttribute * o_15.count)) : f(i_57), t.bindBuffer(34962, l_10), v(i_57, r_45, c_7, e_54, 0, 0);
                }
                else if ("instanceMatrix" === e_53) {
                    var e_55 = n.get(r.instanceMatrix);
                    if (void 0 === e_55)
                        continue;
                    var o_16 = e_55.buffer, s_14 = e_55.type;
                    m(i_57 + 0, 1), m(i_57 + 1, 1), m(i_57 + 2, 1), m(i_57 + 3, 1), t.bindBuffer(34962, o_16), t.vertexAttribPointer(i_57 + 0, 4, s_14, !1, 64, 0), t.vertexAttribPointer(i_57 + 1, 4, s_14, !1, 64, 16), t.vertexAttribPointer(i_57 + 2, 4, s_14, !1, 64, 32), t.vertexAttribPointer(i_57 + 3, 4, s_14, !1, 64, 48);
                }
                else if ("instanceColor" === e_53) {
                    var e_56 = n.get(r.instanceColor);
                    if (void 0 === e_56)
                        continue;
                    var o_17 = e_56.buffer, s_15 = e_56.type;
                    m(i_57, 1), t.bindBuffer(34962, o_17), t.vertexAttribPointer(i_57, 3, s_15, !1, 12, 0);
                }
                else if (void 0 !== h) {
                    var n_68 = h[e_53];
                    if (void 0 !== n_68)
                        switch (n_68.length) {
                            case 2:
                                t.vertexAttrib2fv(i_57, n_68);
                                break;
                            case 3:
                                t.vertexAttrib3fv(i_57, n_68);
                                break;
                            case 4:
                                t.vertexAttrib4fv(i_57, n_68);
                                break;
                            default: t.vertexAttrib1fv(i_57, n_68);
                        }
                }
            }
        } g(); }(r, l, u, _), null !== y && t.bindBuffer(34963, n.get(y).buffer)); }, reset: _, resetDefaultState: y, dispose: function () { _(); for (var t_62 in a) {
            var e_57 = a[t_62];
            for (var t_63 in e_57) {
                var n_69 = e_57[t_63];
                for (var t_64 in n_69)
                    u(n_69[t_64].object), delete n_69[t_64];
                delete e_57[t_63];
            }
            delete a[t_62];
        } }, releaseStatesOfGeometry: function (t) { if (void 0 === a[t.id])
            return; var e = a[t.id]; for (var t_65 in e) {
            var n_70 = e[t_65];
            for (var t_66 in n_70)
                u(n_70[t_66].object), delete n_70[t_66];
            delete e[t_65];
        } delete a[t.id]; }, releaseStatesOfProgram: function (t) { for (var e_58 in a) {
            var n_71 = a[e_58];
            if (void 0 === n_71[t.id])
                continue;
            var i_58 = n_71[t.id];
            for (var t_67 in i_58)
                u(i_58[t_67].object), delete i_58[t_67];
            delete n_71[t.id];
        } }, initAttributes: p, enableAttribute: f, disableUnusedAttributes: g }; }
    function Mn(t, e, n, i) { var r = i.isWebGL2; var o; this.setMode = function (t) { o = t; }, this.render = function (e, i) { t.drawArrays(o, e, i), n.update(i, o, 1); }, this.renderInstances = function (i, s, a) { if (0 === a)
        return; var l, c; if (r)
        l = t, c = "drawArraysInstanced";
    else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l)
        return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); l[c](o, i, s, a), n.update(s, o, a); }; }
    function Sn(t, e, n) { var i; function r(e) { if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0)
            return "highp";
        e = "mediump";
    } return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"; } var o = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext; var s = void 0 !== n.precision ? n.precision : "highp"; var a = r(s); a !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", a, "instead."), s = a); var l = !0 === n.logarithmicDepthBuffer, c = t.getParameter(34930), h = t.getParameter(35660), u = t.getParameter(3379), d = t.getParameter(34076), p = t.getParameter(34921), f = t.getParameter(36347), m = t.getParameter(36348), g = t.getParameter(36349), v = h > 0, _ = o || e.has("OES_texture_float"); return { isWebGL2: o, getMaxAnisotropy: function () { if (void 0 !== i)
            return i; if (!0 === e.has("EXT_texture_filter_anisotropic")) {
            var n_72 = e.get("EXT_texture_filter_anisotropic");
            i = t.getParameter(n_72.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }
        else
            i = 0; return i; }, getMaxPrecision: r, precision: s, logarithmicDepthBuffer: l, maxTextures: c, maxVertexTextures: h, maxTextureSize: u, maxCubemapSize: d, maxAttributes: p, maxVertexUniforms: f, maxVaryings: m, maxFragmentUniforms: g, vertexTextures: v, floatFragmentTextures: _, floatVertexTextures: v && _, maxSamples: o ? t.getParameter(36183) : 0 }; }
    function En(t) { var e = this; var n = null, i = 0, r = !1, o = !1; var s = new Wt, a = new D, l = { value: null, needsUpdate: !1 }; function c() { l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0; } function h(t, n, i, r) { var o = null !== t ? t.length : 0; var c = null; if (0 !== o) {
        if (c = l.value, !0 !== r || null === c) {
            var e_59 = i + 4 * o, r_46 = n.matrixWorldInverse;
            a.getNormalMatrix(r_46), (null === c || c.length < e_59) && (c = new Float32Array(e_59));
            for (var e_60 = 0, n_73 = i; e_60 !== o; ++e_60, n_73 += 4)
                s.copy(t[e_60]).applyMatrix4(r_46, a), s.normal.toArray(c, n_73), c[n_73 + 3] = s.constant;
        }
        l.value = c, l.needsUpdate = !0;
    } return e.numPlanes = o, e.numIntersection = 0, c; } this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, o) { var s = 0 !== t.length || e || 0 !== i || r; return r = e, n = h(t, o, 0), i = t.length, s; }, this.beginShadows = function () { o = !0, h(null); }, this.endShadows = function () { o = !1, c(); }, this.setState = function (e, s, a) { var u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, f = t.get(e); if (!r || null === u || 0 === u.length || o && !p)
        o ? h(null) : c();
    else {
        var t_68 = o ? 0 : i, e_61 = 4 * t_68;
        var r_47 = f.clippingState || null;
        l.value = r_47, r_47 = h(u, s, e_61, a);
        for (var t_69 = 0; t_69 !== e_61; ++t_69)
            r_47[t_69] = n[t_69];
        f.clippingState = r_47, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t_68;
    } }; }
    function Tn(t) { var e = new WeakMap; function n(t, e) { return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t; } function i(t) { var n = t.target; n.removeEventListener("dispose", i); var r = e.get(n); void 0 !== r && (e.delete(n), r.dispose()); } return { get: function (r) { if (r && r.isTexture) {
            var o_18 = r.mapping;
            if (303 === o_18 || 304 === o_18) {
                if (e.has(r))
                    return n(e.get(r).texture, r.mapping);
                {
                    var o_19 = r.image;
                    if (o_19 && o_19.height > 0) {
                        var s_16 = t.getRenderTarget(), a_10 = new hn(o_19.height / 2);
                        return a_10.fromEquirectangularTexture(t, r), e.set(r, a_10), t.setRenderTarget(s_16), r.addEventListener("dispose", i), n(a_10.texture, r.mapping);
                    }
                    return null;
                }
            }
        } return r; }, dispose: function () { e = new WeakMap; } }; }
    function An(t) { var e = {}; function n(n) { if (void 0 !== e[n])
        return e[n]; var i; switch (n) {
        case "WEBGL_depth_texture":
            i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default: i = t.getExtension(n);
    } return e[n] = i, i; } return { has: function (t) { return null !== n(t); }, init: function (t) { t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"); }, get: function (t) { var e = n(t); return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e; } }; }
    function Ln(t, e, n, i) { var r = {}, o = new WeakMap; function s(t) { var a = t.target; null !== a.index && e.remove(a.index); for (var t_70 in a.attributes)
        e.remove(a.attributes[t_70]); a.removeEventListener("dispose", s), delete r[a.id]; var l = o.get(a); l && (e.remove(l), o.delete(a)), i.releaseStatesOfGeometry(a), !0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount, n.memory.geometries--; } function a(t) { var n = [], i = t.index, r = t.attributes.position; var s = 0; if (null !== i) {
        var t_71 = i.array;
        s = i.version;
        for (var e_62 = 0, i_59 = t_71.length; e_62 < i_59; e_62 += 3) {
            var i_60 = t_71[e_62 + 0], r_48 = t_71[e_62 + 1], o_20 = t_71[e_62 + 2];
            n.push(i_60, r_48, r_48, o_20, o_20, i_60);
        }
    }
    else {
        var t_72 = r.array;
        s = r.version;
        for (var e_63 = 0, i_61 = t_72.length / 3 - 1; e_63 < i_61; e_63 += 3) {
            var t_73 = e_63 + 0, i_62 = e_63 + 1, r_49 = e_63 + 2;
            n.push(t_73, i_62, i_62, r_49, r_49, t_73);
        }
    } var a = new (Ee(n) > 65535 ? be : ye)(n, 1); a.version = s; var l = o.get(t); l && e.remove(l), o.set(t, a); } return { get: function (t, e) { return !0 === r[e.id] || (e.addEventListener("dispose", s), r[e.id] = !0, n.memory.geometries++), e; }, update: function (t) { var n = t.attributes; for (var t_74 in n)
            e.update(n[t_74], 34962); var i = t.morphAttributes; for (var t_75 in i) {
            var n_74 = i[t_75];
            for (var t_76 = 0, i_63 = n_74.length; t_76 < i_63; t_76++)
                e.update(n_74[t_76], 34962);
        } }, getWireframeAttribute: function (t) { var e = o.get(t); if (e) {
            var n_75 = t.index;
            null !== n_75 && e.version < n_75.version && a(t);
        }
        else
            a(t); return o.get(t); } }; }
    function Cn(t, e, n, i) { var r = i.isWebGL2; var o, s, a; this.setMode = function (t) { o = t; }, this.setIndex = function (t) { s = t.type, a = t.bytesPerElement; }, this.render = function (e, i) { t.drawElements(o, i, s, e * a), n.update(i, o, 1); }, this.renderInstances = function (i, l, c) { if (0 === c)
        return; var h, u; if (r)
        h = t, u = "drawElementsInstanced";
    else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h)
        return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); h[u](o, l, s, i * a, c), n.update(l, o, c); }; }
    function Rn(t) { var e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: !0, reset: function () { e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0; }, update: function (t, n, i) { switch (e.calls++, n) {
            case 4:
                e.triangles += i * (t / 3);
                break;
            case 1:
                e.lines += i * (t / 2);
                break;
            case 3:
                e.lines += i * (t - 1);
                break;
            case 2:
                e.lines += i * t;
                break;
            case 0:
                e.points += i * t;
                break;
            default: console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        } } }; }
    function Pn(t, e) { return t[0] - e[0]; }
    function Dn(t, e) { return Math.abs(e[1]) - Math.abs(t[1]); }
    function In(t) { var e = {}, n = new Float32Array(8), i = []; for (var t_77 = 0; t_77 < 8; t_77++)
        i[t_77] = [t_77, 0]; return { update: function (r, o, s, a) { var l = r.morphTargetInfluences, c = void 0 === l ? 0 : l.length; var h = e[o.id]; if (void 0 === h) {
            h = [];
            for (var t_78 = 0; t_78 < c; t_78++)
                h[t_78] = [t_78, 0];
            e[o.id] = h;
        } for (var t_79 = 0; t_79 < c; t_79++) {
            var e_64 = h[t_79];
            e_64[0] = t_79, e_64[1] = l[t_79];
        } h.sort(Dn); for (var t_80 = 0; t_80 < 8; t_80++)
            t_80 < c && h[t_80][1] ? (i[t_80][0] = h[t_80][0], i[t_80][1] = h[t_80][1]) : (i[t_80][0] = Number.MAX_SAFE_INTEGER, i[t_80][1] = 0); i.sort(Pn); var u = s.morphTargets && o.morphAttributes.position, d = s.morphNormals && o.morphAttributes.normal; var p = 0; for (var t_81 = 0; t_81 < 8; t_81++) {
            var e_65 = i[t_81], r_50 = e_65[0], s_17 = e_65[1];
            r_50 !== Number.MAX_SAFE_INTEGER && s_17 ? (u && o.getAttribute("morphTarget" + t_81) !== u[r_50] && o.setAttribute("morphTarget" + t_81, u[r_50]), d && o.getAttribute("morphNormal" + t_81) !== d[r_50] && o.setAttribute("morphNormal" + t_81, d[r_50]), n[t_81] = s_17, p += s_17) : (u && !0 === o.hasAttribute("morphTarget" + t_81) && o.deleteAttribute("morphTarget" + t_81), d && !0 === o.hasAttribute("morphNormal" + t_81) && o.deleteAttribute("morphNormal" + t_81), n[t_81] = 0);
        } var f = o.morphTargetsRelative ? 1 : 1 - p; a.getUniforms().setValue(t, "morphTargetBaseInfluence", f), a.getUniforms().setValue(t, "morphTargetInfluences", n); } }; }
    function Nn(t, e, n, i) { var r = new WeakMap; function o(t) { var e = t.target; e.removeEventListener("dispose", o), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor); } return { update: function (t) { var s = i.render.frame, a = t.geometry, l = e.get(t, a); return r.get(l) !== s && (e.update(l), r.set(l, s)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", o) && t.addEventListener("dispose", o), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l; }, dispose: function () { r = new WeakMap; } }; }
    xn.physical = { uniforms: en([xn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new P(1, 1) }, clearcoatNormalMap: { value: null }, sheen: { value: new he(0) }, transmission: { value: 0 }, transmissionMap: { value: null } }]), vertexShader: _n.meshphysical_vert, fragmentShader: _n.meshphysical_frag };
    var On = /** @class */ (function (_super) {
        __extends(On, _super);
        function On(t, e, i, o) {
            if (t === void 0) { t = null; }
            if (e === void 0) { e = 1; }
            if (i === void 0) { i = 1; }
            if (o === void 0) { o = 1; }
            var _this = this;
            _this = _super.call(this, null) || this, _this.image = { data: t, width: e, height: i, depth: o }, _this.magFilter = r, _this.minFilter = r, _this.wrapR = n, _this.generateMipmaps = !1, _this.flipY = !1, _this.needsUpdate = !0;
            return _this;
        }
        return On;
    }(z));
    On.prototype.isDataTexture2DArray = !0;
    var zn = /** @class */ (function (_super) {
        __extends(zn, _super);
        function zn(t, e, i, o) {
            if (t === void 0) { t = null; }
            if (e === void 0) { e = 1; }
            if (i === void 0) { i = 1; }
            if (o === void 0) { o = 1; }
            var _this = this;
            _this = _super.call(this, null) || this, _this.image = { data: t, width: e, height: i, depth: o }, _this.magFilter = r, _this.minFilter = r, _this.wrapR = n, _this.generateMipmaps = !1, _this.flipY = !1, _this.needsUpdate = !0;
            return _this;
        }
        return zn;
    }(z));
    zn.prototype.isDataTexture3D = !0;
    var Bn = new z, Hn = new On, Fn = new zn, Un = new cn, kn = [], Gn = [], Vn = new Float32Array(16), Wn = new Float32Array(9), jn = new Float32Array(4);
    function qn(t, e, n) { var i = t[0]; if (i <= 0 || i > 0)
        return t; var r = e * n; var o = kn[r]; if (void 0 === o && (o = new Float32Array(r), kn[r] = o), 0 !== e) {
        i.toArray(o, 0);
        for (var i_64 = 1, r_51 = 0; i_64 !== e; ++i_64)
            r_51 += n, t[i_64].toArray(o, r_51);
    } return o; }
    function Xn(t, e) { if (t.length !== e.length)
        return !1; for (var n_76 = 0, i_65 = t.length; n_76 < i_65; n_76++)
        if (t[n_76] !== e[n_76])
            return !1; return !0; }
    function Yn(t, e) { for (var n_77 = 0, i_66 = e.length; n_77 < i_66; n_77++)
        t[n_77] = e[n_77]; }
    function Jn(t, e) { var n = Gn[e]; void 0 === n && (n = new Int32Array(e), Gn[e] = n); for (var i_67 = 0; i_67 !== e; ++i_67)
        n[i_67] = t.allocateTextureUnit(); return n; }
    function Zn(t, e) { var n = this.cache; n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e); }
    function Qn(t, e) { var n = this.cache; if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
        if (Xn(n, e))
            return;
        t.uniform2fv(this.addr, e), Yn(n, e);
    } }
    function Kn(t, e) { var n = this.cache; if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r)
        n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else {
        if (Xn(n, e))
            return;
        t.uniform3fv(this.addr, e), Yn(n, e);
    } }
    function $n(t, e) { var n = this.cache; if (void 0 !== e.x)
        n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
        if (Xn(n, e))
            return;
        t.uniform4fv(this.addr, e), Yn(n, e);
    } }
    function ti(t, e) { var n = this.cache, i = e.elements; if (void 0 === i) {
        if (Xn(n, e))
            return;
        t.uniformMatrix2fv(this.addr, !1, e), Yn(n, e);
    }
    else {
        if (Xn(n, i))
            return;
        jn.set(i), t.uniformMatrix2fv(this.addr, !1, jn), Yn(n, i);
    } }
    function ei(t, e) { var n = this.cache, i = e.elements; if (void 0 === i) {
        if (Xn(n, e))
            return;
        t.uniformMatrix3fv(this.addr, !1, e), Yn(n, e);
    }
    else {
        if (Xn(n, i))
            return;
        Wn.set(i), t.uniformMatrix3fv(this.addr, !1, Wn), Yn(n, i);
    } }
    function ni(t, e) { var n = this.cache, i = e.elements; if (void 0 === i) {
        if (Xn(n, e))
            return;
        t.uniformMatrix4fv(this.addr, !1, e), Yn(n, e);
    }
    else {
        if (Xn(n, i))
            return;
        Vn.set(i), t.uniformMatrix4fv(this.addr, !1, Vn), Yn(n, i);
    } }
    function ii(t, e, n) { var i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || Bn, r); }
    function ri(t, e, n) { var i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Hn, r); }
    function oi(t, e, n) { var i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Fn, r); }
    function si(t, e, n) { var i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Un, r); }
    function ai(t, e) { var n = this.cache; n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e); }
    function li(t, e) { var n = this.cache; Xn(n, e) || (t.uniform2iv(this.addr, e), Yn(n, e)); }
    function ci(t, e) { var n = this.cache; Xn(n, e) || (t.uniform3iv(this.addr, e), Yn(n, e)); }
    function hi(t, e) { var n = this.cache; Xn(n, e) || (t.uniform4iv(this.addr, e), Yn(n, e)); }
    function ui(t, e) { var n = this.cache; n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e); }
    function di(t, e) { t.uniform1fv(this.addr, e); }
    function pi(t, e) { t.uniform1iv(this.addr, e); }
    function fi(t, e) { t.uniform2iv(this.addr, e); }
    function mi(t, e) { t.uniform3iv(this.addr, e); }
    function gi(t, e) { t.uniform4iv(this.addr, e); }
    function vi(t, e) { var n = qn(e, this.size, 2); t.uniform2fv(this.addr, n); }
    function _i(t, e) { var n = qn(e, this.size, 3); t.uniform3fv(this.addr, n); }
    function yi(t, e) { var n = qn(e, this.size, 4); t.uniform4fv(this.addr, n); }
    function xi(t, e) { var n = qn(e, this.size, 4); t.uniformMatrix2fv(this.addr, !1, n); }
    function bi(t, e) { var n = qn(e, this.size, 9); t.uniformMatrix3fv(this.addr, !1, n); }
    function wi(t, e) { var n = qn(e, this.size, 16); t.uniformMatrix4fv(this.addr, !1, n); }
    function Mi(t, e, n) { var i = e.length, r = Jn(n, i); t.uniform1iv(this.addr, r); for (var t_82 = 0; t_82 !== i; ++t_82)
        n.safeSetTexture2D(e[t_82] || Bn, r[t_82]); }
    function Si(t, e, n) { var i = e.length, r = Jn(n, i); t.uniform1iv(this.addr, r); for (var t_83 = 0; t_83 !== i; ++t_83)
        n.safeSetTextureCube(e[t_83] || Un, r[t_83]); }
    function Ei(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) { switch (t) {
        case 5126: return Zn;
        case 35664: return Qn;
        case 35665: return Kn;
        case 35666: return $n;
        case 35674: return ti;
        case 35675: return ei;
        case 35676: return ni;
        case 5124:
        case 35670: return ai;
        case 35667:
        case 35671: return li;
        case 35668:
        case 35672: return ci;
        case 35669:
        case 35673: return hi;
        case 5125: return ui;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682: return ii;
        case 35679:
        case 36299:
        case 36307: return oi;
        case 35680:
        case 36300:
        case 36308:
        case 36293: return si;
        case 36289:
        case 36303:
        case 36311:
        case 36292: return ri;
    } }(e.type); }
    function Ti(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) { switch (t) {
        case 5126: return di;
        case 35664: return vi;
        case 35665: return _i;
        case 35666: return yi;
        case 35674: return xi;
        case 35675: return bi;
        case 35676: return wi;
        case 5124:
        case 35670: return pi;
        case 35667:
        case 35671: return fi;
        case 35668:
        case 35672: return mi;
        case 35669:
        case 35673: return gi;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682: return Mi;
        case 35680:
        case 36300:
        case 36308:
        case 36293: return Si;
    } }(e.type); }
    function Ai(t) { this.id = t, this.seq = [], this.map = {}; }
    Ti.prototype.updateCache = function (t) { var e = this.cache; t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Yn(e, t); }, Ai.prototype.setValue = function (t, e, n) { var i = this.seq; for (var r_52 = 0, o_21 = i.length; r_52 !== o_21; ++r_52) {
        var o_22 = i[r_52];
        o_22.setValue(t, e[o_22.id], n);
    } };
    var Li = /(\w+)(\])?(\[|\.)?/g;
    function Ci(t, e) { t.seq.push(e), t.map[e.id] = e; }
    function Ri(t, e, n) { var i = t.name, r = i.length; for (Li.lastIndex = 0;;) {
        var o_23 = Li.exec(i), s_18 = Li.lastIndex;
        var a_11 = o_23[1];
        var l_11 = "]" === o_23[2], c_8 = o_23[3];
        if (l_11 && (a_11 |= 0), void 0 === c_8 || "[" === c_8 && s_18 + 2 === r) {
            Ci(n, void 0 === c_8 ? new Ei(a_11, t, e) : new Ti(a_11, t, e));
            break;
        }
        {
            var t_84 = n.map[a_11];
            void 0 === t_84 && (t_84 = new Ai(a_11), Ci(n, t_84)), n = t_84;
        }
    } }
    function Pi(t, e) { this.seq = [], this.map = {}; var n = t.getProgramParameter(e, 35718); for (var i_68 = 0; i_68 < n; ++i_68) {
        var n_78 = t.getActiveUniform(e, i_68);
        Ri(n_78, t.getUniformLocation(e, n_78.name), this);
    } }
    function Di(t, e, n) { var i = t.createShader(e); return t.shaderSource(i, n), t.compileShader(i), i; }
    Pi.prototype.setValue = function (t, e, n, i) { var r = this.map[e]; void 0 !== r && r.setValue(t, n, i); }, Pi.prototype.setOptional = function (t, e, n) { var i = e[n]; void 0 !== i && this.setValue(t, n, i); }, Pi.upload = function (t, e, n, i) { for (var r_53 = 0, o_24 = e.length; r_53 !== o_24; ++r_53) {
        var o_25 = e[r_53], s_19 = n[o_25.id];
        !1 !== s_19.needsUpdate && o_25.setValue(t, s_19.value, i);
    } }, Pi.seqWithValue = function (t, e) { var n = []; for (var i_69 = 0, r_54 = t.length; i_69 !== r_54; ++i_69) {
        var r_55 = t[i_69];
        r_55.id in e && n.push(r_55);
    } return n; };
    var Ii = 0;
    function Ni(t) { switch (t) {
        case w: return ["Linear", "( value )"];
        case 3001: return ["sRGB", "( value )"];
        case 3002: return ["RGBE", "( value )"];
        case 3004: return ["RGBM", "( value, 7.0 )"];
        case 3005: return ["RGBM", "( value, 16.0 )"];
        case 3006: return ["RGBD", "( value, 256.0 )"];
        case 3007: return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003: return ["LogLuv", "( value )"];
        default: return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    } }
    function Oi(t, e, n) { var i = t.getShaderParameter(e, 35713), r = t.getShaderInfoLog(e).trim(); return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (t) { var e = t.split("\n"); for (var t_85 = 0; t_85 < e.length; t_85++)
        e[t_85] = t_85 + 1 + ": " + e[t_85]; return e.join("\n"); }(t.getShaderSource(e)); }
    function zi(t, e) { var n = Ni(e); return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"; }
    function Bi(t, e) { var n = Ni(e); return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"; }
    function Hi(t, e) { var n; switch (e) {
        case 1:
            n = "Linear";
            break;
        case 2:
            n = "Reinhard";
            break;
        case 3:
            n = "OptimizedCineon";
            break;
        case 4:
            n = "ACESFilmic";
            break;
        case 5:
            n = "Custom";
            break;
        default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    } return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"; }
    function Fi(t) { return "" !== t; }
    function Ui(t, e) { return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows); }
    function ki(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection); }
    var Gi = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function Vi(t) { return t.replace(Gi, Wi); }
    function Wi(t, e) { var n = _n[e]; if (void 0 === n)
        throw new Error("Can not resolve #include <" + e + ">"); return Vi(n); }
    var ji = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, qi = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Xi(t) { return t.replace(qi, Ji).replace(ji, Yi); }
    function Yi(t, e, n, i) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ji(0, e, n, i); }
    function Ji(t, e, n, i) { var r = ""; for (var t_86 = parseInt(e); t_86 < parseInt(n); t_86++)
        r += i.replace(/\[\s*i\s*\]/g, "[ " + t_86 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t_86); return r; }
    function Zi(t) { var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;"; return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e; }
    function Qi(t, e, n, i) { var r = t.getContext(), o = n.defines; var s = n.vertexShader, a = n.fragmentShader; var l = function (t) { var e = "SHADOWMAP_TYPE_BASIC"; return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e; }(n), c = function (t) { var e = "ENVMAP_TYPE_CUBE"; if (t.envMap)
        switch (t.envMapMode) {
            case 301:
            case 302:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307: e = "ENVMAP_TYPE_CUBE_UV";
        } return e; }(n), h = function (t) { var e = "ENVMAP_MODE_REFLECTION"; if (t.envMap)
        switch (t.envMapMode) {
            case 302:
            case 307: e = "ENVMAP_MODE_REFRACTION";
        } return e; }(n), u = function (t) { var e = "ENVMAP_BLENDING_NONE"; if (t.envMap)
        switch (t.combine) {
            case 0:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case 2: e = "ENVMAP_BLENDING_ADD";
        } return e; }(n), d = t.gammaFactor > 0 ? t.gammaFactor : 1, p = n.isWebGL2 ? "" : function (t) { return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Fi).join("\n"); }(n), f = function (t) { var e = []; for (var n_79 in t) {
        var i_70 = t[n_79];
        !1 !== i_70 && e.push("#define " + n_79 + " " + i_70);
    } return e.join("\n"); }(o), m = r.createProgram(); var g, v, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : ""; n.isRawShaderMaterial ? (g = [f].filter(Fi).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(Fi).join("\n"), v.length > 0 && (v += "\n")) : (g = [Zi(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Fi).join("\n"), v = [p, Zi(n), "#define SHADER_NAME " + n.shaderName, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? _n.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Hi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", _n.encodings_pars_fragment, n.map ? zi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? zi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? zi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? zi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? zi("lightMapTexelToLinear", n.lightMapEncoding) : "", Bi("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Fi).join("\n")), s = Vi(s), s = Ui(s, n), s = ki(s, n), a = Vi(a), a = Ui(a, n), a = ki(a, n), s = Xi(s), a = Xi(a), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (_ = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === T ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === T ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v); var y = _ + v + a, x = Di(r, 35633, _ + g + s), b = Di(r, 35632, y); if (r.attachShader(m, x), r.attachShader(m, b), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), t.debug.checkShaderErrors) {
        var t_87 = r.getProgramInfoLog(m).trim(), e_66 = r.getShaderInfoLog(x).trim(), n_80 = r.getShaderInfoLog(b).trim();
        var i_71 = !0, o_26 = !0;
        if (!1 === r.getProgramParameter(m, 35714)) {
            i_71 = !1;
            var e_67 = Oi(r, x, "vertex"), n_81 = Oi(r, b, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", t_87, e_67, n_81);
        }
        else
            "" !== t_87 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t_87) : "" !== e_66 && "" !== n_80 || (o_26 = !1);
        o_26 && (this.diagnostics = { runnable: i_71, programLog: t_87, vertexShader: { log: e_66, prefix: g }, fragmentShader: { log: n_80, prefix: v } });
    } var w, M; return r.deleteShader(x), r.deleteShader(b), this.getUniforms = function () { return void 0 === w && (w = new Pi(r, m)), w; }, this.getAttributes = function () { return void 0 === M && (M = function (t, e) { var n = {}, i = t.getProgramParameter(e, 35721); for (var r_56 = 0; r_56 < i; r_56++) {
        var i_72 = t.getActiveAttrib(e, r_56).name;
        n[i_72] = t.getAttribLocation(e, i_72);
    } return n; }(r, m)), M; }, this.destroy = function () { i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0; }, this.name = n.shaderName, this.id = Ii++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = x, this.fragmentShader = b, this; }
    function Ki(t, e, n, i, r, o) { var s = [], a = i.isWebGL2, l = i.logarithmicDepthBuffer, c = i.floatVertexTextures, h = i.maxVertexUniforms, u = i.vertexTextures; var d = i.precision; var p = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }, f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"]; function m(t) { var e; return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = w, e; } return { getParameters: function (r, s, f, g, v) { var _ = g.fog, y = r.isMeshStandardMaterial ? g.environment : null, x = e.get(r.envMap || y), b = p[r.type], w = v.isSkinnedMesh ? function (t) { var e = t.skeleton.bones; if (c)
            return 1024; {
            var t_88 = h, n_82 = Math.floor((t_88 - 20) / 4), i_73 = Math.min(n_82, e.length);
            return i_73 < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i_73 + "."), 0) : i_73;
        } }(v) : 0; var M, S; if (null !== r.precision && (d = i.getMaxPrecision(r.precision), d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")), b) {
            var t_89 = xn[b];
            M = t_89.vertexShader, S = t_89.fragmentShader;
        }
        else
            M = r.vertexShader, S = r.fragmentShader; var E = t.getRenderTarget(); return { isWebGL2: a, shaderID: b, shaderName: r.type, vertexShader: M, fragmentShader: S, defines: r.defines, isRawShaderMaterial: !0 === r.isRawShaderMaterial, glslVersion: r.glslVersion, precision: d, instancing: !0 === v.isInstancedMesh, instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor, supportsVertexTextures: u, outputEncoding: null !== E ? m(E.texture) : t.outputEncoding, map: !!r.map, mapEncoding: m(r.map), matcap: !!r.matcap, matcapEncoding: m(r.matcap), envMap: !!x, envMapMode: x && x.mapping, envMapEncoding: m(x), envMapCubeUV: !!x && (306 === x.mapping || 307 === x.mapping), lightMap: !!r.lightMap, lightMapEncoding: m(r.lightMap), aoMap: !!r.aoMap, emissiveMap: !!r.emissiveMap, emissiveMapEncoding: m(r.emissiveMap), bumpMap: !!r.bumpMap, normalMap: !!r.normalMap, objectSpaceNormalMap: 1 === r.normalMapType, tangentSpaceNormalMap: 0 === r.normalMapType, clearcoatMap: !!r.clearcoatMap, clearcoatRoughnessMap: !!r.clearcoatRoughnessMap, clearcoatNormalMap: !!r.clearcoatNormalMap, displacementMap: !!r.displacementMap, roughnessMap: !!r.roughnessMap, metalnessMap: !!r.metalnessMap, specularMap: !!r.specularMap, alphaMap: !!r.alphaMap, gradientMap: !!r.gradientMap, sheen: !!r.sheen, transmissionMap: !!r.transmissionMap, combine: r.combine, vertexTangents: r.normalMap && r.vertexTangents, vertexColors: r.vertexColors, vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap), uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap), fog: !!_, useFog: r.fog, fogExp2: _ && _.isFogExp2, flatShading: !!r.flatShading, sizeAttenuation: r.sizeAttenuation, logarithmicDepthBuffer: l, skinning: r.skinning && w > 0, maxBones: w, useVertexTexture: c, morphTargets: r.morphTargets, morphNormals: r.morphNormals, maxMorphTargets: t.maxMorphTargets, maxMorphNormals: t.maxMorphNormals, numDirLights: s.directional.length, numPointLights: s.point.length, numSpotLights: s.spot.length, numRectAreaLights: s.rectArea.length, numHemiLights: s.hemi.length, numDirLightShadows: s.directionalShadowMap.length, numPointLightShadows: s.pointShadowMap.length, numSpotLightShadows: s.spotShadowMap.length, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: r.dithering, shadowMapEnabled: t.shadowMap.enabled && f.length > 0, shadowMapType: t.shadowMap.type, toneMapping: r.toneMapped ? t.toneMapping : 0, physicallyCorrectLights: t.physicallyCorrectLights, premultipliedAlpha: r.premultipliedAlpha, alphaTest: r.alphaTest, doubleSided: 2 === r.side, flipSided: 1 === r.side, depthPacking: void 0 !== r.depthPacking && r.depthPacking, index0AttributeName: r.index0AttributeName, extensionDerivatives: r.extensions && r.extensions.derivatives, extensionFragDepth: r.extensions && r.extensions.fragDepth, extensionDrawBuffers: r.extensions && r.extensions.drawBuffers, extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD, rendererExtensionFragDepth: a || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: a || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: a || n.has("EXT_shader_texture_lod"), customProgramCacheKey: r.customProgramCacheKey() }; }, getProgramCacheKey: function (e) { var n = []; if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
            for (var t_90 in e.defines)
                n.push(t_90), n.push(e.defines[t_90]); if (!1 === e.isRawShaderMaterial) {
            for (var t_91 = 0; t_91 < f.length; t_91++)
                n.push(e[f[t_91]]);
            n.push(t.outputEncoding), n.push(t.gammaFactor);
        } return n.push(e.customProgramCacheKey), n.join(); }, getUniforms: function (t) { var e = p[t.type]; var n; if (e) {
            var t_92 = xn[e];
            n = nn.clone(t_92.uniforms);
        }
        else
            n = t.uniforms; return n; }, acquireProgram: function (e, n) { var i; for (var t_93 = 0, e_68 = s.length; t_93 < e_68; t_93++) {
            var e_69 = s[t_93];
            if (e_69.cacheKey === n) {
                i = e_69, ++i.usedTimes;
                break;
            }
        } return void 0 === i && (i = new Qi(t, n, e, r), s.push(i)), i; }, releaseProgram: function (t) { if (0 == --t.usedTimes) {
            var e_70 = s.indexOf(t);
            s[e_70] = s[s.length - 1], s.pop(), t.destroy();
        } }, programs: s }; }
    function $i() { var t = new WeakMap; return { get: function (e) { var n = t.get(e); return void 0 === n && (n = {}, t.set(e, n)), n; }, remove: function (e) { t.delete(e); }, update: function (e, n, i) { t.get(e)[n] = i; }, dispose: function () { t = new WeakMap; } }; }
    function tr(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id; }
    function er(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id; }
    function nr(t) { var e = []; var n = 0; var i = [], r = [], o = { id: -1 }; function s(i, r, s, a, l, c) { var h = e[n]; var u = t.get(s); return void 0 === h ? (h = { id: i.id, object: i, geometry: r, material: s, program: u.program || o, groupOrder: a, renderOrder: i.renderOrder, z: l, group: c }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = s, h.program = u.program || o, h.groupOrder = a, h.renderOrder = i.renderOrder, h.z = l, h.group = c), n++, h; } return { opaque: i, transparent: r, init: function () { n = 0, i.length = 0, r.length = 0; }, push: function (t, e, n, o, a, l) { var c = s(t, e, n, o, a, l); (!0 === n.transparent ? r : i).push(c); }, unshift: function (t, e, n, o, a, l) { var c = s(t, e, n, o, a, l); (!0 === n.transparent ? r : i).unshift(c); }, finish: function () { for (var t_94 = n, i_74 = e.length; t_94 < i_74; t_94++) {
            var n_83 = e[t_94];
            if (null === n_83.id)
                break;
            n_83.id = null, n_83.object = null, n_83.geometry = null, n_83.material = null, n_83.program = null, n_83.group = null;
        } }, sort: function (t, e) { i.length > 1 && i.sort(t || tr), r.length > 1 && r.sort(e || er); } }; }
    function ir(t) { var e = new WeakMap; return { get: function (n, i) { var r; return !1 === e.has(n) ? (r = new nr(t), e.set(n, [r])) : i >= e.get(n).length ? (r = new nr(t), e.get(n).push(r)) : r = e.get(n)[i], r; }, dispose: function () { e = new WeakMap; } }; }
    function rr() { var t = {}; return { get: function (e) { if (void 0 !== t[e.id])
            return t[e.id]; var n; switch (e.type) {
            case "DirectionalLight":
                n = { direction: new k, color: new he };
                break;
            case "SpotLight":
                n = { position: new k, direction: new k, color: new he, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                break;
            case "PointLight":
                n = { position: new k, color: new he, distance: 0, decay: 0 };
                break;
            case "HemisphereLight":
                n = { direction: new k, skyColor: new he, groundColor: new he };
                break;
            case "RectAreaLight": n = { color: new he, position: new k, halfWidth: new k, halfHeight: new k };
        } return t[e.id] = n, n; } }; }
    var or = 0;
    function sr(t, e) { return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0); }
    function ar(t, e) { var n = new rr, i = function () { var t = {}; return { get: function (e) { if (void 0 !== t[e.id])
            return t[e.id]; var n; switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
                n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new P };
                break;
            case "PointLight": n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new P, shadowCameraNear: 1, shadowCameraFar: 1e3 };
        } return t[e.id] = n, n; } }; }(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] }; for (var t_95 = 0; t_95 < 9; t_95++)
        r.probe.push(new k); var o = new k, s = new mt, a = new mt; return { setup: function (o) { var s = 0, a = 0, l = 0; for (var t_96 = 0; t_96 < 9; t_96++)
            r.probe[t_96].set(0, 0, 0); var c = 0, h = 0, u = 0, d = 0, p = 0, f = 0, m = 0, g = 0; o.sort(sr); for (var t_97 = 0, e_71 = o.length; t_97 < e_71; t_97++) {
            var e_72 = o[t_97], v_2 = e_72.color, _2 = e_72.intensity, y_2 = e_72.distance, x_2 = e_72.shadow && e_72.shadow.map ? e_72.shadow.map.texture : null;
            if (e_72.isAmbientLight)
                s += v_2.r * _2, a += v_2.g * _2, l += v_2.b * _2;
            else if (e_72.isLightProbe)
                for (var t_98 = 0; t_98 < 9; t_98++)
                    r.probe[t_98].addScaledVector(e_72.sh.coefficients[t_98], _2);
            else if (e_72.isDirectionalLight) {
                var t_99 = n.get(e_72);
                if (t_99.color.copy(e_72.color).multiplyScalar(e_72.intensity), e_72.castShadow) {
                    var t_100 = e_72.shadow, n_84 = i.get(e_72);
                    n_84.shadowBias = t_100.bias, n_84.shadowNormalBias = t_100.normalBias, n_84.shadowRadius = t_100.radius, n_84.shadowMapSize = t_100.mapSize, r.directionalShadow[c] = n_84, r.directionalShadowMap[c] = x_2, r.directionalShadowMatrix[c] = e_72.shadow.matrix, f++;
                }
                r.directional[c] = t_99, c++;
            }
            else if (e_72.isSpotLight) {
                var t_101 = n.get(e_72);
                if (t_101.position.setFromMatrixPosition(e_72.matrixWorld), t_101.color.copy(v_2).multiplyScalar(_2), t_101.distance = y_2, t_101.coneCos = Math.cos(e_72.angle), t_101.penumbraCos = Math.cos(e_72.angle * (1 - e_72.penumbra)), t_101.decay = e_72.decay, e_72.castShadow) {
                    var t_102 = e_72.shadow, n_85 = i.get(e_72);
                    n_85.shadowBias = t_102.bias, n_85.shadowNormalBias = t_102.normalBias, n_85.shadowRadius = t_102.radius, n_85.shadowMapSize = t_102.mapSize, r.spotShadow[u] = n_85, r.spotShadowMap[u] = x_2, r.spotShadowMatrix[u] = e_72.shadow.matrix, g++;
                }
                r.spot[u] = t_101, u++;
            }
            else if (e_72.isRectAreaLight) {
                var t_103 = n.get(e_72);
                t_103.color.copy(v_2).multiplyScalar(_2), t_103.halfWidth.set(.5 * e_72.width, 0, 0), t_103.halfHeight.set(0, .5 * e_72.height, 0), r.rectArea[d] = t_103, d++;
            }
            else if (e_72.isPointLight) {
                var t_104 = n.get(e_72);
                if (t_104.color.copy(e_72.color).multiplyScalar(e_72.intensity), t_104.distance = e_72.distance, t_104.decay = e_72.decay, e_72.castShadow) {
                    var t_105 = e_72.shadow, n_86 = i.get(e_72);
                    n_86.shadowBias = t_105.bias, n_86.shadowNormalBias = t_105.normalBias, n_86.shadowRadius = t_105.radius, n_86.shadowMapSize = t_105.mapSize, n_86.shadowCameraNear = t_105.camera.near, n_86.shadowCameraFar = t_105.camera.far, r.pointShadow[h] = n_86, r.pointShadowMap[h] = x_2, r.pointShadowMatrix[h] = e_72.shadow.matrix, m++;
                }
                r.point[h] = t_104, h++;
            }
            else if (e_72.isHemisphereLight) {
                var t_106 = n.get(e_72);
                t_106.skyColor.copy(e_72.color).multiplyScalar(_2), t_106.groundColor.copy(e_72.groundColor).multiplyScalar(_2), r.hemi[p] = t_106, p++;
            }
        } d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = yn.LTC_FLOAT_1, r.rectAreaLTC2 = yn.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = yn.LTC_HALF_1, r.rectAreaLTC2 = yn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = s, r.ambient[1] = a, r.ambient[2] = l; var v = r.hash; v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = or++); }, setupView: function (t, e) { var n = 0, i = 0, l = 0, c = 0, h = 0; var u = e.matrixWorldInverse; for (var e_73 = 0, d_6 = t.length; e_73 < d_6; e_73++) {
            var d_7 = t[e_73];
            if (d_7.isDirectionalLight) {
                var t_107 = r.directional[n];
                t_107.direction.setFromMatrixPosition(d_7.matrixWorld), o.setFromMatrixPosition(d_7.target.matrixWorld), t_107.direction.sub(o), t_107.direction.transformDirection(u), n++;
            }
            else if (d_7.isSpotLight) {
                var t_108 = r.spot[l];
                t_108.position.setFromMatrixPosition(d_7.matrixWorld), t_108.position.applyMatrix4(u), t_108.direction.setFromMatrixPosition(d_7.matrixWorld), o.setFromMatrixPosition(d_7.target.matrixWorld), t_108.direction.sub(o), t_108.direction.transformDirection(u), l++;
            }
            else if (d_7.isRectAreaLight) {
                var t_109 = r.rectArea[c];
                t_109.position.setFromMatrixPosition(d_7.matrixWorld), t_109.position.applyMatrix4(u), a.identity(), s.copy(d_7.matrixWorld), s.premultiply(u), a.extractRotation(s), t_109.halfWidth.set(.5 * d_7.width, 0, 0), t_109.halfHeight.set(0, .5 * d_7.height, 0), t_109.halfWidth.applyMatrix4(a), t_109.halfHeight.applyMatrix4(a), c++;
            }
            else if (d_7.isPointLight) {
                var t_110 = r.point[i];
                t_110.position.setFromMatrixPosition(d_7.matrixWorld), t_110.position.applyMatrix4(u), i++;
            }
            else if (d_7.isHemisphereLight) {
                var t_111 = r.hemi[h];
                t_111.direction.setFromMatrixPosition(d_7.matrixWorld), t_111.direction.transformDirection(u), t_111.direction.normalize(), h++;
            }
        } }, state: r }; }
    function lr(t, e) { var n = new ar(t, e), i = [], r = []; return { init: function () { i.length = 0, r.length = 0; }, state: { lightsArray: i, shadowsArray: r, lights: n }, setupLights: function () { n.setup(i); }, setupLightsView: function (t) { n.setupView(i, t); }, pushLight: function (t) { i.push(t); }, pushShadow: function (t) { r.push(t); } }; }
    function cr(t, e) { var n = new WeakMap; return { get: function (i, r) {
            if (r === void 0) { r = 0; }
            var o;
            return !1 === n.has(i) ? (o = new lr(t, e), n.set(i, [o])) : r >= n.get(i).length ? (o = new lr(t, e), n.get(i).push(o)) : o = n.get(i)[r], o;
        }, dispose: function () { n = new WeakMap; } }; }
    var hr = /** @class */ (function (_super) {
        __extends(hr, _super);
        function hr(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshDepthMaterial", _this.depthPacking = 3200, _this.skinning = !1, _this.morphTargets = !1, _this.map = null, _this.alphaMap = null, _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.fog = !1, _this.setValues(t);
            return _this;
        }
        hr.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this; };
        return hr;
    }(ie));
    hr.prototype.isMeshDepthMaterial = !0;
    var ur = /** @class */ (function (_super) {
        __extends(ur, _super);
        function ur(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshDistanceMaterial", _this.referencePosition = new k, _this.nearDistance = 1, _this.farDistance = 1e3, _this.skinning = !1, _this.morphTargets = !1, _this.map = null, _this.alphaMap = null, _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.fog = !1, _this.setValues(t);
            return _this;
        }
        ur.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this; };
        return ur;
    }(ie));
    function dr(t, e, n) { var i = new fn; var s = new P, a = new P, l = new H, c = [], h = [], u = {}, d = { 0: 1, 1: 0, 2: 2 }, f = new rn({ defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new P }, radius: { value: 4 } }, vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), m = f.clone(); m.defines.HORIZONTAL_PASS = 1; var g = new Ie; g.setAttribute("position", new fe(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); var v = new Qe(g, f), _ = this; function y(n, i) { var r = e.update(v); f.uniforms.shadow_pass.value = n.map.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, f, v, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, m, v, null); } function x(t, e, n) { var i = t << 0 | e << 1 | n << 2; var r = c[i]; return void 0 === r && (r = new hr({ depthPacking: 3201, morphTargets: t, skinning: e }), c[i] = r), r; } function b(t, e, n) { var i = t << 0 | e << 1 | n << 2; var r = h[i]; return void 0 === r && (r = new ur({ morphTargets: t, skinning: e }), h[i] = r), r; } function w(e, n, i, r, o, s, a) { var l = null, c = x, h = e.customDepthMaterial; if (!0 === r.isPointLight && (c = b, h = e.customDistanceMaterial), void 0 === h) {
        var t_112 = !1;
        !0 === i.morphTargets && (t_112 = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
        var r_57 = !1;
        !0 === e.isSkinnedMesh && (!0 === i.skinning ? r_57 = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), l = c(t_112, r_57, !0 === e.isInstancedMesh);
    }
    else
        l = h; if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var t_113 = l.uuid, e_74 = i.uuid;
        var n_87 = u[t_113];
        void 0 === n_87 && (n_87 = {}, u[t_113] = n_87);
        var r_58 = n_87[e_74];
        void 0 === r_58 && (r_58 = l.clone(), n_87[e_74] = r_58), l = r_58;
    } return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : d[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = o, l.farDistance = s), l; } function M(n, r, o, s, a) { if (!1 === n.visible)
        return; if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === a) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, n.matrixWorld);
        var i_75 = e.update(n), r_59 = n.material;
        if (Array.isArray(r_59)) {
            var e_75 = i_75.groups;
            for (var l_12 = 0, c_9 = e_75.length; l_12 < c_9; l_12++) {
                var c_10 = e_75[l_12], h_6 = r_59[c_10.materialIndex];
                if (h_6 && h_6.visible) {
                    var e_76 = w(n, i_75, h_6, s, o.near, o.far, a);
                    t.renderBufferDirect(o, null, i_75, e_76, n, c_10);
                }
            }
        }
        else if (r_59.visible) {
            var e_77 = w(n, i_75, r_59, s, o.near, o.far, a);
            t.renderBufferDirect(o, null, i_75, e_77, n, null);
        }
    } var l = n.children; for (var t_114 = 0, e_78 = l.length; t_114 < e_78; t_114++)
        M(l[t_114], r, o, s, a); } this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, c, h) { if (!1 === _.enabled)
        return; if (!1 === _.autoUpdate && !1 === _.needsUpdate)
        return; if (0 === e.length)
        return; var u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), m = t.state; m.setBlending(0), m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1); for (var u_8 = 0, d_8 = e.length; u_8 < d_8; u_8++) {
        var d_9 = e[u_8], f_3 = d_9.shadow;
        if (void 0 === f_3) {
            console.warn("THREE.WebGLShadowMap:", d_9, "has no shadow.");
            continue;
        }
        if (!1 === f_3.autoUpdate && !1 === f_3.needsUpdate)
            continue;
        s.copy(f_3.mapSize);
        var g_1 = f_3.getFrameExtents();
        if (s.multiply(g_1), a.copy(f_3.mapSize), (s.x > n || s.y > n) && (s.x > n && (a.x = Math.floor(n / g_1.x), s.x = a.x * g_1.x, f_3.mapSize.x = a.x), s.y > n && (a.y = Math.floor(n / g_1.y), s.y = a.y * g_1.y, f_3.mapSize.y = a.y)), null === f_3.map && !f_3.isPointLightShadow && 3 === this.type) {
            var t_115 = { minFilter: o, magFilter: o, format: p };
            f_3.map = new F(s.x, s.y, t_115), f_3.map.texture.name = d_9.name + ".shadowMap", f_3.mapPass = new F(s.x, s.y, t_115), f_3.camera.updateProjectionMatrix();
        }
        if (null === f_3.map) {
            var t_116 = { minFilter: r, magFilter: r, format: p };
            f_3.map = new F(s.x, s.y, t_116), f_3.map.texture.name = d_9.name + ".shadowMap", f_3.camera.updateProjectionMatrix();
        }
        t.setRenderTarget(f_3.map), t.clear();
        var v_3 = f_3.getViewportCount();
        for (var t_117 = 0; t_117 < v_3; t_117++) {
            var e_79 = f_3.getViewport(t_117);
            l.set(a.x * e_79.x, a.y * e_79.y, a.x * e_79.z, a.y * e_79.w), m.viewport(l), f_3.updateMatrices(d_9, t_117), i = f_3.getFrustum(), M(c, h, f_3.camera, d_9, this.type);
        }
        f_3.isPointLightShadow || 3 !== this.type || y(f_3, h), f_3.needsUpdate = !1;
    } _.needsUpdate = !1, t.setRenderTarget(u, d, f); }; }
    function pr(e, n, i) {
        var _b;
        var r = i.isWebGL2, o = new function () { var t = !1; var n = new H; var i = null; var r = new H(0, 0, 0, 0); return { setMask: function (n) { i === n || t || (e.colorMask(n, n, n, n), i = n); }, setLocked: function (e) { t = e; }, setClear: function (t, i, o, s, a) { !0 === a && (t *= s, i *= s, o *= s), n.set(t, i, o, s), !1 === r.equals(n) && (e.clearColor(t, i, o, s), r.copy(n)); }, reset: function () { t = !1, i = null, r.set(-1, 0, 0, 0); } }; }, s = new function () { var t = !1, n = null, i = null, r = null; return { setTest: function (t) { t ? N(2929) : O(2929); }, setMask: function (i) { n === i || t || (e.depthMask(i), n = i); }, setFunc: function (t) { if (i !== t) {
                if (t)
                    switch (t) {
                        case 0:
                            e.depthFunc(512);
                            break;
                        case 1:
                            e.depthFunc(519);
                            break;
                        case 2:
                            e.depthFunc(513);
                            break;
                        case 3:
                            e.depthFunc(515);
                            break;
                        case 4:
                            e.depthFunc(514);
                            break;
                        case 5:
                            e.depthFunc(518);
                            break;
                        case 6:
                            e.depthFunc(516);
                            break;
                        case 7:
                            e.depthFunc(517);
                            break;
                        default: e.depthFunc(515);
                    }
                else
                    e.depthFunc(515);
                i = t;
            } }, setLocked: function (e) { t = e; }, setClear: function (t) { r !== t && (e.clearDepth(t), r = t); }, reset: function () { t = !1, n = null, i = null, r = null; } }; }, a = new function () { var t = !1, n = null, i = null, r = null, o = null, s = null, a = null, l = null, c = null; return { setTest: function (e) { t || (e ? N(2960) : O(2960)); }, setMask: function (i) { n === i || t || (e.stencilMask(i), n = i); }, setFunc: function (t, n, s) { i === t && r === n && o === s || (e.stencilFunc(t, n, s), i = t, r = n, o = s); }, setOp: function (t, n, i) { s === t && a === n && l === i || (e.stencilOp(t, n, i), s = t, a = n, l = i); }, setLocked: function (e) { t = e; }, setClear: function (t) { c !== t && (e.clearStencil(t), c = t); }, reset: function () { t = !1, n = null, i = null, r = null, o = null, s = null, a = null, l = null, c = null; } }; };
        var l = {}, c = null, h = !1, u = null, d = null, p = null, f = null, m = null, g = null, v = null, _ = !1, y = null, x = null, b = null, w = null, M = null;
        var S = e.getParameter(35661);
        var E = !1, T = 0;
        var A = e.getParameter(7938);
        -1 !== A.indexOf("WebGL") ? (T = parseFloat(/^WebGL (\d)/.exec(A)[1]), E = T >= 1) : -1 !== A.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL ES (\d)/.exec(A)[1]), E = T >= 2);
        var L = null, C = {};
        var R = new H, P = new H;
        function D(t, n, i) { var r = new Uint8Array(4), o = e.createTexture(); e.bindTexture(t, o), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728); for (var t_118 = 0; t_118 < i; t_118++)
            e.texImage2D(n + t_118, 0, 6408, 1, 1, 0, 6408, 5121, r); return o; }
        var I = {};
        function N(t) { !0 !== l[t] && (e.enable(t), l[t] = !0); }
        function O(t) { !1 !== l[t] && (e.disable(t), l[t] = !1); }
        I[3553] = D(3553, 3553, 1), I[34067] = D(34067, 34069, 6), o.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), N(2929), s.setFunc(3), U(!1), k(1), N(2884), F(0);
        var z = (_b = {}, _b[t] = 32774, _b[101] = 32778, _b[102] = 32779, _b);
        if (r)
            z[103] = 32775, z[104] = 32776;
        else {
            var t_119 = n.get("EXT_blend_minmax");
            null !== t_119 && (z[103] = t_119.MIN_EXT, z[104] = t_119.MAX_EXT);
        }
        var B = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };
        function F(n, i, r, o, s, a, l, c) { if (0 !== n) {
            if (!1 === h && (N(3042), h = !0), 5 === n)
                s = s || i, a = a || r, l = l || o, i === d && s === m || (e.blendEquationSeparate(z[i], z[s]), d = i, m = s), r === p && o === f && a === g && l === v || (e.blendFuncSeparate(B[r], B[o], B[a], B[l]), p = r, f = o, g = a, v = l), u = n, _ = null;
            else if (n !== u || c !== _) {
                if (d === t && m === t || (e.blendEquation(32774), d = t, m = t), c)
                    switch (n) {
                        case 1:
                            e.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(1, 1);
                            break;
                        case 3:
                            e.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            e.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default: console.error("THREE.WebGLState: Invalid blending: ", n);
                    }
                else
                    switch (n) {
                        case 1:
                            e.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            e.blendFunc(770, 1);
                            break;
                        case 3:
                            e.blendFunc(0, 769);
                            break;
                        case 4:
                            e.blendFunc(0, 768);
                            break;
                        default: console.error("THREE.WebGLState: Invalid blending: ", n);
                    }
                p = null, f = null, g = null, v = null, u = n, _ = c;
            }
        }
        else
            !0 === h && (O(3042), h = !1); }
        function U(t) { y !== t && (t ? e.frontFace(2304) : e.frontFace(2305), y = t); }
        function k(t) { 0 !== t ? (N(2884), t !== x && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : O(2884), x = t; }
        function G(t, n, i) { t ? (N(32823), w === n && M === i || (e.polygonOffset(n, i), w = n, M = i)) : O(32823); }
        function V(t) { void 0 === t && (t = 33984 + S - 1), L !== t && (e.activeTexture(t), L = t); }
        return { buffers: { color: o, depth: s, stencil: a }, enable: N, disable: O, useProgram: function (t) { return c !== t && (e.useProgram(t), c = t, !0); }, setBlending: F, setMaterial: function (t, e) { 2 === t.side ? O(2884) : N(2884); var n = 1 === t.side; e && (n = !n), U(n), 1 === t.blending && !1 === t.transparent ? F(0) : F(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), o.setMask(t.colorWrite); var i = t.stencilWrite; a.setTest(i), i && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), G(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits); }, setFlipSided: U, setCullFace: k, setLineWidth: function (t) { t !== b && (E && e.lineWidth(t), b = t); }, setPolygonOffset: G, setScissorTest: function (t) { t ? N(3089) : O(3089); }, activeTexture: V, bindTexture: function (t, n) { null === L && V(); var i = C[L]; void 0 === i && (i = { type: void 0, texture: void 0 }, C[L] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || I[t]), i.type = t, i.texture = n); }, unbindTexture: function () { var t = C[L]; void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0); }, compressedTexImage2D: function () { try {
                e.compressedTexImage2D.apply(e, arguments);
            }
            catch (t) {
                console.error("THREE.WebGLState:", t);
            } }, texImage2D: function () { try {
                e.texImage2D.apply(e, arguments);
            }
            catch (t) {
                console.error("THREE.WebGLState:", t);
            } }, texImage3D: function () { try {
                e.texImage3D.apply(e, arguments);
            }
            catch (t) {
                console.error("THREE.WebGLState:", t);
            } }, scissor: function (t) { !1 === R.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), R.copy(t)); }, viewport: function (t) { !1 === P.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), P.copy(t)); }, reset: function () { e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), l = {}, L = null, C = {}, c = null, h = !1, u = null, d = null, p = null, f = null, m = null, g = null, v = null, _ = !1, y = null, x = null, b = null, w = null, M = null, o.reset(), s.reset(), a.reset(); } };
    }
    function fr(t, g, v, _, y, x, b) {
        var _b, _c;
        var w = y.isWebGL2, M = y.maxTextures, S = y.maxCubemapSize, E = y.maxTextureSize, T = y.maxSamples, A = new WeakMap;
        var L, C = !1;
        try {
            C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        }
        catch (t) { }
        function P(t, e) { return C ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); }
        function D(t, e, n, i) { var r = 1; if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                var i_76 = e ? R.floorPowerOfTwo : Math.floor, o_27 = i_76(r * t.width), s_20 = i_76(r * t.height);
                void 0 === L && (L = P(o_27, s_20));
                var a_12 = n ? P(o_27, s_20) : L;
                return a_12.width = o_27, a_12.height = s_20, a_12.getContext("2d").drawImage(t, 0, 0, o_27, s_20), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o_27 + "x" + s_20 + ")."), a_12;
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
        } return t; }
        function I(t) { return R.isPowerOfTwo(t.width) && R.isPowerOfTwo(t.height); }
        function N(t, e) { return t.generateMipmaps && e && t.minFilter !== r && t.minFilter !== o; }
        function O(e, n, i, r) { t.generateMipmap(e), _.get(n).__maxMipLevel = Math.log2(Math.max(i, r)); }
        function z(e, n, i) { if (!1 === w)
            return n; if (null !== e) {
            if (void 0 !== t[e])
                return t[e];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + e + "'");
        } var r = n; return 6403 === n && (5126 === i && (r = 33326), 5131 === i && (r = 33325), 5121 === i && (r = 33321)), 6407 === n && (5126 === i && (r = 34837), 5131 === i && (r = 34843), 5121 === i && (r = 32849)), 6408 === n && (5126 === i && (r = 34836), 5131 === i && (r = 34842), 5121 === i && (r = 32856)), 33325 !== r && 33326 !== r && 34842 !== r && 34836 !== r || g.get("EXT_color_buffer_float"), r; }
        function B(t) { return t === r || 1004 === t || 1005 === t ? 9728 : 9729; }
        function H(e) { var n = e.target; n.removeEventListener("dispose", H), function (e) { var n = _.get(e); void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture), _.remove(e)); }(n), n.isVideoTexture && A.delete(n), b.memory.textures--; }
        function F(e) { var n = e.target; n.removeEventListener("dispose", F), function (e) { var n = e.texture, i = _.get(e), r = _.get(n); if (e) {
            if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
                for (var e_80 = 0; e_80 < 6; e_80++)
                    t.deleteFramebuffer(i.__webglFramebuffer[e_80]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[e_80]);
            else
                t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && t.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer && t.deleteRenderbuffer(i.__webglColorRenderbuffer), i.__webglDepthRenderbuffer && t.deleteRenderbuffer(i.__webglDepthRenderbuffer);
            _.remove(n), _.remove(e);
        } }(n), b.memory.textures--; }
        var U = 0;
        function k(t, e) { var n = _.get(t); if (t.isVideoTexture && function (t) { var e = b.render.frame; A.get(t) !== e && (A.set(t, e), t.update()); }(t), t.version > 0 && n.__version !== t.version) {
            var i_77 = t.image;
            if (void 0 === i_77)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else {
                if (!1 !== i_77.complete)
                    return void X(n, t, e);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            }
        } v.activeTexture(33984 + e), v.bindTexture(3553, n.__webglTexture); }
        function G(e, n) { var i = _.get(e); e.version > 0 && i.__version !== e.version ? function (e, n, i) { if (6 !== n.image.length)
            return; q(e, n), v.activeTexture(33984 + i), v.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0); var r = n && (n.isCompressedTexture || n.image[0].isCompressedTexture), o = n.image[0] && n.image[0].isDataTexture, s = []; for (var t_120 = 0; t_120 < 6; t_120++)
            s[t_120] = r || o ? o ? n.image[t_120].image : n.image[t_120] : D(n.image[t_120], !1, !0, S); var a = s[0], l = I(a) || w, c = x.convert(n.format), h = x.convert(n.type), u = z(n.internalFormat, c, h); var f; if (j(34067, n, l), r) {
            for (var t_121 = 0; t_121 < 6; t_121++) {
                f = s[t_121].mipmaps;
                for (var e_81 = 0; e_81 < f.length; e_81++) {
                    var i_78 = f[e_81];
                    n.format !== p && n.format !== d ? null !== c ? v.compressedTexImage2D(34069 + t_121, e_81, u, i_78.width, i_78.height, 0, i_78.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v.texImage2D(34069 + t_121, e_81, u, i_78.width, i_78.height, 0, c, h, i_78.data);
                }
            }
            e.__maxMipLevel = f.length - 1;
        }
        else {
            f = n.mipmaps;
            for (var t_122 = 0; t_122 < 6; t_122++)
                if (o) {
                    v.texImage2D(34069 + t_122, 0, u, s[t_122].width, s[t_122].height, 0, c, h, s[t_122].data);
                    for (var e_82 = 0; e_82 < f.length; e_82++) {
                        var n_88 = f[e_82].image[t_122].image;
                        v.texImage2D(34069 + t_122, e_82 + 1, u, n_88.width, n_88.height, 0, c, h, n_88.data);
                    }
                }
                else {
                    v.texImage2D(34069 + t_122, 0, u, c, h, s[t_122]);
                    for (var e_83 = 0; e_83 < f.length; e_83++) {
                        var n_89 = f[e_83];
                        v.texImage2D(34069 + t_122, e_83 + 1, u, c, h, n_89.image[t_122]);
                    }
                }
            e.__maxMipLevel = f.length;
        } N(n, l) && O(34067, n, a.width, a.height), e.__version = n.version, n.onUpdate && n.onUpdate(n); }(i, e, n) : (v.activeTexture(33984 + n), v.bindTexture(34067, i.__webglTexture)); }
        var V = (_b = {}, _b[e] = 10497, _b[n] = 33071, _b[i] = 33648, _b), W = (_c = {}, _c[r] = 9728, _c[1004] = 9984, _c[1005] = 9986, _c[o] = 9729, _c[1007] = 9985, _c[s] = 9987, _c);
        function j(e, i, s) { if (s ? (t.texParameteri(e, 10242, V[i.wrapS]), t.texParameteri(e, 10243, V[i.wrapT]), 32879 !== e && 35866 !== e || t.texParameteri(e, 32882, V[i.wrapR]), t.texParameteri(e, 10240, W[i.magFilter]), t.texParameteri(e, 10241, W[i.minFilter])) : (t.texParameteri(e, 10242, 33071), t.texParameteri(e, 10243, 33071), 32879 !== e && 35866 !== e || t.texParameteri(e, 32882, 33071), i.wrapS === n && i.wrapT === n || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(e, 10240, B(i.magFilter)), t.texParameteri(e, 10241, B(i.minFilter)), i.minFilter !== r && i.minFilter !== o && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === g.has("EXT_texture_filter_anisotropic")) {
            var n_90 = g.get("EXT_texture_filter_anisotropic");
            if (i.type === c && !1 === g.has("OES_texture_float_linear"))
                return;
            if (!1 === w && i.type === h && !1 === g.has("OES_texture_half_float_linear"))
                return;
            (i.anisotropy > 1 || _.get(i).__currentAnisotropy) && (t.texParameterf(e, n_90.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(i.anisotropy, y.getMaxAnisotropy())), _.get(i).__currentAnisotropy = i.anisotropy);
        } }
        function q(e, n) { void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", H), e.__webglTexture = t.createTexture(), b.memory.textures++); }
        function X(e, i, s) { var h = 3553; i.isDataTexture2DArray && (h = 35866), i.isDataTexture3D && (h = 32879), q(e, i), v.activeTexture(33984 + s), v.bindTexture(h, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0); var g = function (t) { return !w && (t.wrapS !== n || t.wrapT !== n || t.minFilter !== r && t.minFilter !== o); }(i) && !1 === I(i.image), _ = D(i.image, g, !1, E), y = I(_) || w, b = x.convert(i.format); var M, S = x.convert(i.type), T = z(i.internalFormat, b, S); j(h, i, y); var A = i.mipmaps; if (i.isDepthTexture)
            T = 6402, w ? T = i.type === c ? 36012 : i.type === l ? 33190 : i.type === u ? 35056 : 33189 : i.type === c && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === f && 6402 === T && i.type !== a && i.type !== l && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = a, S = x.convert(i.type)), i.format === m && 6402 === T && (T = 34041, i.type !== u && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = u, S = x.convert(i.type))), v.texImage2D(3553, 0, T, _.width, _.height, 0, b, S, null);
        else if (i.isDataTexture)
            if (A.length > 0 && y) {
                for (var t_123 = 0, e_84 = A.length; t_123 < e_84; t_123++)
                    M = A[t_123], v.texImage2D(3553, t_123, T, M.width, M.height, 0, b, S, M.data);
                i.generateMipmaps = !1, e.__maxMipLevel = A.length - 1;
            }
            else
                v.texImage2D(3553, 0, T, _.width, _.height, 0, b, S, _.data), e.__maxMipLevel = 0;
        else if (i.isCompressedTexture) {
            for (var t_124 = 0, e_85 = A.length; t_124 < e_85; t_124++)
                M = A[t_124], i.format !== p && i.format !== d ? null !== b ? v.compressedTexImage2D(3553, t_124, T, M.width, M.height, 0, M.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v.texImage2D(3553, t_124, T, M.width, M.height, 0, b, S, M.data);
            e.__maxMipLevel = A.length - 1;
        }
        else if (i.isDataTexture2DArray)
            v.texImage3D(35866, 0, T, _.width, _.height, _.depth, 0, b, S, _.data), e.__maxMipLevel = 0;
        else if (i.isDataTexture3D)
            v.texImage3D(32879, 0, T, _.width, _.height, _.depth, 0, b, S, _.data), e.__maxMipLevel = 0;
        else if (A.length > 0 && y) {
            for (var t_125 = 0, e_86 = A.length; t_125 < e_86; t_125++)
                M = A[t_125], v.texImage2D(3553, t_125, T, b, S, M);
            i.generateMipmaps = !1, e.__maxMipLevel = A.length - 1;
        }
        else
            v.texImage2D(3553, 0, T, b, S, _), e.__maxMipLevel = 0; N(i, y) && O(h, i, _.width, _.height), e.__version = i.version, i.onUpdate && i.onUpdate(i); }
        function Y(e, n, i, r) { var o = n.texture, s = x.convert(o.format), a = x.convert(o.type), l = z(o.internalFormat, s, a); 32879 === r || 35866 === r ? v.texImage3D(r, 0, l, n.width, n.height, n.depth, 0, s, a, null) : v.texImage2D(r, 0, l, n.width, n.height, 0, s, a, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, i, r, _.get(o).__webglTexture, 0), t.bindFramebuffer(36160, null); }
        function J(e, n, i) { if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
            var r_60 = 33189;
            if (i) {
                var e_87 = n.depthTexture;
                e_87 && e_87.isDepthTexture && (e_87.type === c ? r_60 = 36012 : e_87.type === l && (r_60 = 33190));
                var i_79 = Z(n);
                t.renderbufferStorageMultisample(36161, i_79, r_60, n.width, n.height);
            }
            else
                t.renderbufferStorage(36161, r_60, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e);
        }
        else if (n.depthBuffer && n.stencilBuffer) {
            if (i) {
                var e_88 = Z(n);
                t.renderbufferStorageMultisample(36161, e_88, 35056, n.width, n.height);
            }
            else
                t.renderbufferStorage(36161, 34041, n.width, n.height);
            t.framebufferRenderbuffer(36160, 33306, 36161, e);
        }
        else {
            var e_89 = n.texture, r_61 = x.convert(e_89.format), o_28 = x.convert(e_89.type), s_21 = z(e_89.internalFormat, r_61, o_28);
            if (i) {
                var e_90 = Z(n);
                t.renderbufferStorageMultisample(36161, e_90, s_21, n.width, n.height);
            }
            else
                t.renderbufferStorage(36161, s_21, n.width, n.height);
        } t.bindRenderbuffer(36161, null); }
        function Z(t) { return w && t.isWebGLMultisampleRenderTarget ? Math.min(T, t.samples) : 0; }
        var Q = !1, K = !1;
        this.allocateTextureUnit = function () { var t = U; return t >= M && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + M), U += 1, t; }, this.resetTextureUnits = function () { U = 0; }, this.setTexture2D = k, this.setTexture2DArray = function (t, e) { var n = _.get(t); t.version > 0 && n.__version !== t.version ? X(n, t, e) : (v.activeTexture(33984 + e), v.bindTexture(35866, n.__webglTexture)); }, this.setTexture3D = function (t, e) { var n = _.get(t); t.version > 0 && n.__version !== t.version ? X(n, t, e) : (v.activeTexture(33984 + e), v.bindTexture(32879, n.__webglTexture)); }, this.setTextureCube = G, this.setupRenderTarget = function (e) { var n = e.texture, i = _.get(e), r = _.get(n); e.addEventListener("dispose", F), r.__webglTexture = t.createTexture(), b.memory.textures++; var o = !0 === e.isWebGLCubeRenderTarget, s = !0 === e.isWebGLMultisampleRenderTarget, a = n.isDataTexture3D || n.isDataTexture2DArray, l = I(e) || w; if (!w || n.format !== d || n.type !== c && n.type !== h || (n.format = p, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), o) {
            i.__webglFramebuffer = [];
            for (var e_91 = 0; e_91 < 6; e_91++)
                i.__webglFramebuffer[e_91] = t.createFramebuffer();
        }
        else if (i.__webglFramebuffer = t.createFramebuffer(), s)
            if (w) {
                i.__webglMultisampledFramebuffer = t.createFramebuffer(), i.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, i.__webglColorRenderbuffer);
                var r_62 = x.convert(n.format), o_29 = x.convert(n.type), s_22 = z(n.internalFormat, r_62, o_29), a_13 = Z(e);
                t.renderbufferStorageMultisample(36161, a_13, s_22, e.width, e.height), t.bindFramebuffer(36160, i.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, i.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (i.__webglDepthRenderbuffer = t.createRenderbuffer(), J(i.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null);
            }
            else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."); if (o) {
            v.bindTexture(34067, r.__webglTexture), j(34067, n, l);
            for (var t_126 = 0; t_126 < 6; t_126++)
                Y(i.__webglFramebuffer[t_126], e, 36064, 34069 + t_126);
            N(n, l) && O(34067, n, e.width, e.height), v.bindTexture(34067, null);
        }
        else {
            var t_127 = 3553;
            a && (w ? t_127 = n.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), v.bindTexture(t_127, r.__webglTexture), j(t_127, n, l), Y(i.__webglFramebuffer, e, 36064, t_127), N(n, l) && O(3553, n, e.width, e.height), v.bindTexture(3553, null);
        } e.depthBuffer && function (e) { var n = _.get(e), i = !0 === e.isWebGLCubeRenderTarget; if (e.depthTexture) {
            if (i)
                throw new Error("target.depthTexture not supported in Cube render targets");
            !function (e, n) { if (n && n.isWebGLCubeRenderTarget)
                throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture)
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); _.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), k(n.depthTexture, 0); var i = _.get(n.depthTexture).__webglTexture; if (n.depthTexture.format === f)
                t.framebufferTexture2D(36160, 36096, 3553, i, 0);
            else {
                if (n.depthTexture.format !== m)
                    throw new Error("Unknown depthTexture format");
                t.framebufferTexture2D(36160, 33306, 3553, i, 0);
            } }(n.__webglFramebuffer, e);
        }
        else if (i) {
            n.__webglDepthbuffer = [];
            for (var i_80 = 0; i_80 < 6; i_80++)
                t.bindFramebuffer(36160, n.__webglFramebuffer[i_80]), n.__webglDepthbuffer[i_80] = t.createRenderbuffer(), J(n.__webglDepthbuffer[i_80], e, !1);
        }
        else
            t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), J(n.__webglDepthbuffer, e, !1); t.bindFramebuffer(36160, null); }(e); }, this.updateRenderTargetMipmap = function (t) { var e = t.texture; if (N(e, I(t) || w)) {
            var n_91 = t.isWebGLCubeRenderTarget ? 34067 : 3553, i_81 = _.get(e).__webglTexture;
            v.bindTexture(n_91, i_81), O(n_91, e, t.width, t.height), v.bindTexture(n_91, null);
        } }, this.updateMultisampleRenderTarget = function (e) { if (e.isWebGLMultisampleRenderTarget)
            if (w) {
                var n_92 = _.get(e);
                t.bindFramebuffer(36008, n_92.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n_92.__webglFramebuffer);
                var i_82 = e.width, r_63 = e.height;
                var o_30 = 16384;
                e.depthBuffer && (o_30 |= 256), e.stencilBuffer && (o_30 |= 1024), t.blitFramebuffer(0, 0, i_82, r_63, 0, 0, i_82, r_63, o_30, 9728), t.bindFramebuffer(36160, n_92.__webglMultisampledFramebuffer);
            }
            else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."); }, this.safeSetTexture2D = function (t, e) { t && t.isWebGLRenderTarget && (!1 === Q && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Q = !0), t = t.texture), k(t, e); }, this.safeSetTextureCube = function (t, e) { t && t.isWebGLCubeRenderTarget && (!1 === K && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), K = !0), t = t.texture), G(t, e); };
    }
    function mr(t, e, n) { var i = n.isWebGL2; return { convert: function (t) { var n; if (1009 === t)
            return 5121; if (1017 === t)
            return 32819; if (1018 === t)
            return 32820; if (1019 === t)
            return 33635; if (1010 === t)
            return 5120; if (1011 === t)
            return 5122; if (t === a)
            return 5123; if (1013 === t)
            return 5124; if (t === l)
            return 5125; if (t === c)
            return 5126; if (t === h)
            return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null); if (1021 === t)
            return 6406; if (t === d)
            return 6407; if (t === p)
            return 6408; if (1024 === t)
            return 6409; if (1025 === t)
            return 6410; if (t === f)
            return 6402; if (t === m)
            return 34041; if (1028 === t)
            return 6403; if (1029 === t)
            return 36244; if (1030 === t)
            return 33319; if (1031 === t)
            return 33320; if (1032 === t)
            return 36248; if (1033 === t)
            return 36249; if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
            if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n)
                return null;
            if (33776 === t)
                return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (33777 === t)
                return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (33778 === t)
                return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (33779 === t)
                return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
            if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n)
                return null;
            if (35840 === t)
                return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (35841 === t)
                return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (35842 === t)
                return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (35843 === t)
                return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } if (36196 === t)
            return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null; if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
            if (37492 === t)
                return n.COMPRESSED_RGB8_ETC2;
            if (37496 === t)
                return n.COMPRESSED_RGBA8_ETC2_EAC;
        } return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === u ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0; } }; }
    function gr(t) {
        if (t === void 0) { t = []; }
        sn.call(this), this.cameras = t;
    }
    ur.prototype.isMeshDistanceMaterial = !0, gr.prototype = Object.assign(Object.create(sn.prototype), { constructor: gr, isArrayCamera: !0 });
    var vr = /** @class */ (function (_super) {
        __extends(vr, _super);
        function vr() {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "Group";
            return _this;
        }
        return vr;
    }(Ut));
    function _r() { this._targetRay = null, this._grip = null, this._hand = null; }
    function yr(t, e) { var n = this; var i = null, r = 1, o = null, s = "local-floor", a = null; var l = [], c = new Map, h = new sn; h.layers.enable(1), h.viewport = new H; var u = new sn; u.layers.enable(2), u.viewport = new H; var d = [h, u], p = new gr; p.layers.enable(1), p.layers.enable(2); var f = null, m = null; function g(t) { var e = c.get(t.inputSource); e && e.dispatchEvent({ type: t.type, data: t.inputSource }); } function v() { c.forEach((function (t, e) { t.disconnect(e); })), c.clear(), f = null, m = null, t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), M.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }); } function _(t) { var e = i.inputSources; for (var t_128 = 0; t_128 < l.length; t_128++)
        c.set(e[t_128], l[t_128]); for (var e_92 = 0; e_92 < t.removed.length; e_92++) {
        var n_93 = t.removed[e_92], i_83 = c.get(n_93);
        i_83 && (i_83.dispatchEvent({ type: "disconnected", data: n_93 }), c.delete(n_93));
    } for (var e_93 = 0; e_93 < t.added.length; e_93++) {
        var n_94 = t.added[e_93], i_84 = c.get(n_94);
        i_84 && i_84.dispatchEvent({ type: "connected", data: n_94 });
    } } this.enabled = !1, this.isPresenting = !1, this.getController = function (t) { var e = l[t]; return void 0 === e && (e = new _r, l[t] = e), e.getTargetRaySpace(); }, this.getControllerGrip = function (t) { var e = l[t]; return void 0 === e && (e = new _r, l[t] = e), e.getGripSpace(); }, this.getHand = function (t) { var e = l[t]; return void 0 === e && (e = new _r, l[t] = e), e.getHandSpace(); }, this.setFramebufferScaleFactor = function (t) { r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting."); }, this.setReferenceSpaceType = function (t) { s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting."); }, this.getReferenceSpace = function () { return o; }, this.getSession = function () { return i; }, this.setSession = function (t) {
        return __awaiter(this, void 0, void 0, function () { var t_129, _b, a_14, l_13; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(i = t, null !== i)) return [3 /*break*/, 4];
                    i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", v), i.addEventListener("inputsourceschange", _);
                    t_129 = e.getContextAttributes();
                    _b = !0 !== t_129.xrCompatible;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, e.makeXRCompatible()];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2:
                    _b;
                    a_14 = { antialias: t_129.antialias, alpha: t_129.alpha, depth: t_129.depth, stencil: t_129.stencil, framebufferScaleFactor: r }, l_13 = new XRWebGLLayer(i, e, a_14);
                    i.updateRenderState({ baseLayer: l_13 });
                    return [4 /*yield*/, i.requestReferenceSpace(s)];
                case 3:
                    o = _c.sent(), M.setContext(i), M.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
                    _c.label = 4;
                case 4: return [2 /*return*/];
            }
        }); });
    }; var y = new k, x = new k; function b(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert(); } this.getCamera = function (t) { p.near = u.near = h.near = t.near, p.far = u.far = h.far = t.far, f === p.near && m === p.far || (i.updateRenderState({ depthNear: p.near, depthFar: p.far }), f = p.near, m = p.far); var e = t.parent, n = p.cameras; b(p, e); for (var t_130 = 0; t_130 < n.length; t_130++)
        b(n[t_130], e); t.matrixWorld.copy(p.matrixWorld), t.matrix.copy(p.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale); var r = t.children; for (var t_131 = 0, e_94 = r.length; t_131 < e_94; t_131++)
        r[t_131].updateMatrixWorld(!0); return 2 === n.length ? function (t, e, n) { y.setFromMatrixPosition(e.matrixWorld), x.setFromMatrixPosition(n.matrixWorld); var i = y.distanceTo(x), r = e.projectionMatrix.elements, o = n.projectionMatrix.elements, s = r[14] / (r[10] - 1), a = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (o[8] + 1) / o[0], d = s * h, p = s * u, f = i / (-h + u), m = f * -h; e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert(); var g = s + f, v = a + f, _ = d - m, b = p + (i - m), w = l * a / v * g, M = c * a / v * g; t.projectionMatrix.makePerspective(_, b, w, M, g, v); }(p, h, u) : p.projectionMatrix.copy(h.projectionMatrix), p; }; var w = null; var M = new mn; M.setAnimationLoop((function (e, n) { if (a = n.getViewerPose(o), null !== a) {
        var e_95 = a.views, n_95 = i.renderState.baseLayer;
        t.setFramebuffer(n_95.framebuffer);
        var r_64 = !1;
        e_95.length !== p.cameras.length && (p.cameras.length = 0, r_64 = !0);
        for (var t_132 = 0; t_132 < e_95.length; t_132++) {
            var i_85 = e_95[t_132], o_31 = n_95.getViewport(i_85), s_23 = d[t_132];
            s_23.matrix.fromArray(i_85.transform.matrix), s_23.projectionMatrix.fromArray(i_85.projectionMatrix), s_23.viewport.set(o_31.x, o_31.y, o_31.width, o_31.height), 0 === t_132 && p.matrix.copy(s_23.matrix), !0 === r_64 && p.cameras.push(s_23);
        }
    } var r = i.inputSources; for (var t_133 = 0; t_133 < l.length; t_133++) {
        var e_96 = l[t_133], i_86 = r[t_133];
        e_96.update(i_86, n, o);
    } w && w(e, n); })), this.setAnimationLoop = function (t) { w = t; }, this.dispose = function () { }; }
    function xr(t) { function e(e, n) { e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap); var i = t.get(n).envMap; if (i) {
        e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;
        var r_65 = t.get(i).__maxMipLevel;
        void 0 !== r_65 && (e.maxMipLevel.value = r_65);
    } var r, o; n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? o = n.aoMap : n.lightMap && (o = n.lightMap), void 0 !== o && (o.isWebGLRenderTarget && (o = o.texture), !0 === o.matrixAutoUpdate && o.updateMatrix(), e.uv2Transform.value.copy(o.matrix)); } function n(e, n) { e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias), t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity); } return { refreshFogUniforms: function (t, e) { t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density); }, refreshMaterialUniforms: function (t, i, r, o) { i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function (t, e) { e.emissiveMap && (t.emissiveMap.value = e.emissiveMap); }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function (t, e) { e.gradientMap && (t.gradientMap.value = e.gradientMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias); }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function (t, e) { t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias); }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function (t, e) { n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen), e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()), t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap); }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function (t, e) { e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias); }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function (t, e) { e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias); }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function (t, e) { e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance; }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function (t, e) { e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias); }(t, i)) : i.isLineBasicMaterial ? (function (t, e) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity; }(t, i), i.isLineDashedMaterial && function (t, e) { t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale; }(t, i)) : i.isPointsMaterial ? function (t, e, n, i) { var r; t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix)); }(t, i, r, o) : i.isSpriteMaterial ? function (t, e) { var n; t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix)); }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1); } }; }
    function br(t) { var e = void 0 !== (t = t || {}).canvas ? t.canvas : function () { var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); return t.style.display = "block", t; }(), n = void 0 !== t.context ? t.context : null, i = void 0 !== t.alpha && t.alpha, r = void 0 === t.depth || t.depth, o = void 0 === t.stencil || t.stencil, s = void 0 !== t.antialias && t.antialias, a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, u = void 0 !== t.powerPreference ? t.powerPreference : "default", d = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat; var f = null, m = null; var g = [], v = []; this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = w, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4; var _ = this; var y = !1, x = null, b = 0, M = 0, S = null, E = null, T = -1, A = null; var L = new H, C = new H; var D = null, I = e.width, N = e.height, O = 1, z = null, B = null; var F = new H(0, 0, I, N), U = new H(0, 0, I, N); var G = !1; var V = new fn; var W = !1, j = !1; var q = new mt, X = new k, Y = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function J() { return null === S ? O : 1; } var Z, Q, K, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, dt, pt, ft, gt, vt, _t = n; function yt(t, n) { for (var i_87 = 0; i_87 < t.length; i_87++) {
        var r_66 = t[i_87], o_32 = e.getContext(r_66, n);
        if (null !== o_32)
            return o_32;
    } return null; } try {
        var t_134 = { alpha: i, depth: r, stencil: o, antialias: s, premultipliedAlpha: a, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: d };
        if (e.addEventListener("webglcontextlost", Mt, !1), e.addEventListener("webglcontextrestored", St, !1), null === _t) {
            var e_97 = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === _.isWebGL1Renderer && e_97.shift(), _t = yt(e_97, t_134), null === _t)
                throw yt(e_97) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        void 0 === _t.getShaderPrecisionFormat && (_t.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 }; });
    }
    catch (t) {
        throw console.error("THREE.WebGLRenderer: " + t.message), t;
    } function xt() { Z = new An(_t), Q = new Sn(_t, Z, t), Z.init(Q), gt = new mr(_t, Z, Q), K = new pr(_t, Z, Q), K.scissor(C.copy(U).multiplyScalar(O).floor()), K.viewport(L.copy(F).multiplyScalar(O).floor()), $ = new Rn(_t), tt = new $i, et = new fr(_t, Z, K, tt, Q, gt, $), nt = new Tn(_), it = new gn(_t, Q), vt = new wn(_t, Z, it, Q), rt = new Ln(_t, it, $, vt), ot = new Nn(_t, rt, it, $), dt = new In(_t), ht = new En(tt), st = new Ki(_, nt, Z, Q, vt, ht), at = new xr(tt), lt = new ir(tt), ct = new cr(Z, Q), ut = new bn(_, nt, K, ot, a), pt = new Mn(_t, Z, $, Q), ft = new Cn(_t, Z, $, Q), $.programs = st.programs, _.capabilities = Q, _.extensions = Z, _.properties = tt, _.renderLists = lt, _.state = K, _.info = $; } xt(); var bt = new yr(_, _t); this.xr = bt; var wt = new dr(_, ot, Q.maxTextureSize); function Mt(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0; } function St() { console.log("THREE.WebGLRenderer: Context Restored."), y = !1, xt(); } function Et(t) { var e = t.target; e.removeEventListener("dispose", Et), function (t) { Tt(t), tt.remove(t); }(e); } function Tt(t) { var e = tt.get(t).program; void 0 !== e && st.releaseProgram(e); } this.shadowMap = wt, this.getContext = function () { return _t; }, this.getContextAttributes = function () { return _t.getContextAttributes(); }, this.forceContextLoss = function () { var t = Z.get("WEBGL_lose_context"); t && t.loseContext(); }, this.forceContextRestore = function () { var t = Z.get("WEBGL_lose_context"); t && t.restoreContext(); }, this.getPixelRatio = function () { return O; }, this.setPixelRatio = function (t) { void 0 !== t && (O = t, this.setSize(I, N, !1)); }, this.getSize = function (t) { return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new P), t.set(I, N); }, this.setSize = function (t, n, i) { bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (I = t, N = n, e.width = Math.floor(t * O), e.height = Math.floor(n * O), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n)); }, this.getDrawingBufferSize = function (t) { return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new P), t.set(I * O, N * O).floor(); }, this.setDrawingBufferSize = function (t, n, i) { I = t, N = n, O = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n); }, this.getCurrentViewport = function (t) { return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new H), t.copy(L); }, this.getViewport = function (t) { return t.copy(F); }, this.setViewport = function (t, e, n, i) { t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), K.viewport(L.copy(F).multiplyScalar(O).floor()); }, this.getScissor = function (t) { return t.copy(U); }, this.setScissor = function (t, e, n, i) { t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i), K.scissor(C.copy(U).multiplyScalar(O).floor()); }, this.getScissorTest = function () { return G; }, this.setScissorTest = function (t) { K.setScissorTest(G = t); }, this.setOpaqueSort = function (t) { z = t; }, this.setTransparentSort = function (t) { B = t; }, this.getClearColor = function (t) { return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), t = new he), t.copy(ut.getClearColor()); }, this.setClearColor = function () { ut.setClearColor.apply(ut, arguments); }, this.getClearAlpha = function () { return ut.getClearAlpha(); }, this.setClearAlpha = function () { ut.setClearAlpha.apply(ut, arguments); }, this.clear = function (t, e, n) { var i = 0; (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), _t.clear(i); }, this.clearColor = function () { this.clear(!0, !1, !1); }, this.clearDepth = function () { this.clear(!1, !0, !1); }, this.clearStencil = function () { this.clear(!1, !1, !0); }, this.dispose = function () { e.removeEventListener("webglcontextlost", Mt, !1), e.removeEventListener("webglcontextrestored", St, !1), lt.dispose(), ct.dispose(), tt.dispose(), nt.dispose(), ot.dispose(), vt.dispose(), bt.dispose(), Lt.stop(); }, this.renderBufferImmediate = function (t, e) { vt.initAttributes(); var n = tt.get(t); t.hasPositions && !n.position && (n.position = _t.createBuffer()), t.hasNormals && !n.normal && (n.normal = _t.createBuffer()), t.hasUvs && !n.uv && (n.uv = _t.createBuffer()), t.hasColors && !n.color && (n.color = _t.createBuffer()); var i = e.getAttributes(); t.hasPositions && (_t.bindBuffer(34962, n.position), _t.bufferData(34962, t.positionArray, 35048), vt.enableAttribute(i.position), _t.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (_t.bindBuffer(34962, n.normal), _t.bufferData(34962, t.normalArray, 35048), vt.enableAttribute(i.normal), _t.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (_t.bindBuffer(34962, n.uv), _t.bufferData(34962, t.uvArray, 35048), vt.enableAttribute(i.uv), _t.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (_t.bindBuffer(34962, n.color), _t.bufferData(34962, t.colorArray, 35048), vt.enableAttribute(i.color), _t.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), vt.disableUnusedAttributes(), _t.drawArrays(4, 0, t.count), t.count = 0; }, this.renderBufferDirect = function (t, e, n, i, r, o) { null === e && (e = Y); var s = r.isMesh && r.matrixWorld.determinant() < 0, a = It(t, e, i, r); K.setMaterial(i, s); var l = n.index; var c = n.attributes.position; if (null === l) {
        if (void 0 === c || 0 === c.count)
            return;
    }
    else if (0 === l.count)
        return; var h, u = 1; !0 === i.wireframe && (l = rt.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && dt.update(r, n, i, a), vt.setup(r, i, a, n, l); var d = pt; null !== l && (h = it.get(l), d = ft, d.setIndex(h)); var p = null !== l ? l.count : c.count, f = n.drawRange.start * u, m = n.drawRange.count * u, g = null !== o ? o.start * u : 0, v = null !== o ? o.count * u : 1 / 0, _ = Math.max(f, g), y = Math.min(p, f + m, g + v) - 1, x = Math.max(0, y - _ + 1); if (0 !== x) {
        if (r.isMesh)
            !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * J()), d.setMode(1)) : d.setMode(4);
        else if (r.isLine) {
            var t_135 = i.linewidth;
            void 0 === t_135 && (t_135 = 1), K.setLineWidth(t_135 * J()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
        }
        else
            r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        if (r.isInstancedMesh)
            d.renderInstances(_, x, r.count);
        else if (n.isInstancedBufferGeometry) {
            var t_136 = Math.min(n.instanceCount, n._maxInstanceCount);
            d.renderInstances(_, x, t_136);
        }
        else
            d.render(_, x);
    } }, this.compile = function (t, e) { m = ct.get(t), m.init(), t.traverseVisible((function (t) { t.isLight && t.layers.test(e.layers) && (m.pushLight(t), t.castShadow && m.pushShadow(t)); })), m.setupLights(); var n = new WeakMap; t.traverse((function (e) { var i = e.material; if (i)
        if (Array.isArray(i))
            for (var r_67 = 0; r_67 < i.length; r_67++) {
                var o_33 = i[r_67];
                !1 === n.has(o_33) && (Dt(o_33, t, e), n.set(o_33));
            }
        else
            !1 === n.has(i) && (Dt(i, t, e), n.set(i)); })); }; var At = null; var Lt = new mn; function Ct(t, e, n, i) { if (!1 === t.visible)
        return; if (t.layers.test(e.layers))
        if (t.isGroup)
            n = t.renderOrder;
        else if (t.isLOD)
            !0 === t.autoUpdate && t.update(e);
        else if (t.isLight)
            m.pushLight(t), t.castShadow && m.pushShadow(t);
        else if (t.isSprite) {
            if (!t.frustumCulled || V.intersectsSprite(t)) {
                i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                var e_98 = ot.update(t), r_68 = t.material;
                r_68.visible && f.push(t, e_98, r_68, n, X.z, null);
            }
        }
        else if (t.isImmediateRenderObject)
            i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q), f.push(t, null, t.material, n, X.z, null);
        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== $.render.frame && (t.skeleton.update(), t.skeleton.frame = $.render.frame), !t.frustumCulled || V.intersectsObject(t))) {
            i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
            var e_99 = ot.update(t), r_69 = t.material;
            if (Array.isArray(r_69)) {
                var i_88 = e_99.groups;
                for (var o_34 = 0, s_24 = i_88.length; o_34 < s_24; o_34++) {
                    var s_25 = i_88[o_34], a_15 = r_69[s_25.materialIndex];
                    a_15 && a_15.visible && f.push(t, e_99, a_15, n, X.z, s_25);
                }
            }
            else
                r_69.visible && f.push(t, e_99, r_69, n, X.z, null);
        } var r = t.children; for (var t_137 = 0, o_35 = r.length; t_137 < o_35; t_137++)
        Ct(r[t_137], e, n, i); } function Rt(t, e, n) { var i = !0 === e.isScene ? e.overrideMaterial : null; for (var r_70 = 0, o_36 = t.length; r_70 < o_36; r_70++) {
        var o_37 = t[r_70], s_26 = o_37.object, a_16 = o_37.geometry, l_14 = null === i ? o_37.material : i, c_11 = o_37.group;
        if (n.isArrayCamera) {
            var t_138 = n.cameras;
            for (var n_96 = 0, i_89 = t_138.length; n_96 < i_89; n_96++) {
                var i_90 = t_138[n_96];
                s_26.layers.test(i_90.layers) && (K.viewport(L.copy(i_90.viewport)), m.setupLightsView(i_90), Pt(s_26, e, i_90, a_16, l_14, c_11));
            }
        }
        else
            Pt(s_26, e, n, a_16, l_14, c_11);
    } } function Pt(t, e, n, i, r, o) { if (t.onBeforeRender(_, e, n, i, r, o), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var i_91 = It(n, e, r, t);
        K.setMaterial(r), vt.reset(), function (t, e) { t.render((function (t) { _.renderBufferImmediate(t, e); })); }(t, i_91);
    }
    else
        _.renderBufferDirect(n, e, i, r, t, o); t.onAfterRender(_, e, n, i, r, o); } function Dt(t, e, n) { !0 !== e.isScene && (e = Y); var i = tt.get(t), r = m.state.lights, o = m.state.shadowsArray, s = r.state.version, a = st.getParameters(t, r.state, o, e, n), l = st.getProgramCacheKey(a); var c = i.program, h = !0; if (i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = nt.get(t.envMap || i.environment), void 0 === c)
        t.addEventListener("dispose", Et);
    else if (c.cacheKey !== l)
        Tt(t);
    else if (i.lightsStateVersion !== s)
        h = !1;
    else {
        if (void 0 !== a.shaderID)
            return;
        h = !1;
    } h && (a.uniforms = st.getUniforms(t), t.onBeforeCompile(a, _), c = st.acquireProgram(a, l), i.program = c, i.uniforms = a.uniforms, i.outputEncoding = a.outputEncoding); var u = i.uniforms; (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = ht.numPlanes, i.numIntersection = ht.numIntersection, u.clippingPlanes = ht.uniform), i.needsLights = function (t) { return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights; }(t), i.lightsStateVersion = s, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix); var d = i.program.getUniforms(), p = Pi.seqWithValue(d.seq, u); i.uniformsList = p; } function It(t, e, n, i) { !0 !== e.isScene && (e = Y), et.resetTextureUnits(); var r = e.fog, o = n.isMeshStandardMaterial ? e.environment : null, s = null === S ? _.outputEncoding : S.texture.encoding, a = nt.get(n.envMap || o), l = tt.get(n), h = m.state.lights; if (!0 === W && (!0 === j || t !== A)) {
        var e_100 = t === A && n.id === T;
        ht.setState(n, t, e_100);
    } n.version === l.__version ? n.fog && l.fog !== r || l.environment !== o || l.needsLights && l.lightsStateVersion !== h.state.version ? Dt(n, e, i) : void 0 === l.numClippingPlanes || l.numClippingPlanes === ht.numPlanes && l.numIntersection === ht.numIntersection ? (l.outputEncoding !== s || l.envMap !== a) && Dt(n, e, i) : Dt(n, e, i) : (Dt(n, e, i), l.__version = n.version); var u = !1, d = !1, f = !1; var g = l.program, v = g.getUniforms(), y = l.uniforms; if (K.useProgram(g.program) && (u = !0, d = !0, f = !0), n.id !== T && (T = n.id, d = !0), u || A !== t) {
        if (v.setValue(_t, "projectionMatrix", t.projectionMatrix), Q.logarithmicDepthBuffer && v.setValue(_t, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), A !== t && (A = t, d = !0, f = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
            var e_101 = v.map.cameraPosition;
            void 0 !== e_101 && e_101.setValue(_t, X.setFromMatrixPosition(t.matrixWorld));
        }
        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && v.setValue(_t, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && v.setValue(_t, "viewMatrix", t.matrixWorldInverse);
    } if (n.skinning) {
        v.setOptional(_t, i, "bindMatrix"), v.setOptional(_t, i, "bindMatrixInverse");
        var t_139 = i.skeleton;
        if (t_139) {
            var e_102 = t_139.bones;
            if (Q.floatVertexTextures) {
                if (null === t_139.boneTexture) {
                    var n_97 = Math.sqrt(4 * e_102.length);
                    n_97 = R.ceilPowerOfTwo(n_97), n_97 = Math.max(n_97, 4);
                    var i_92 = new Float32Array(n_97 * n_97 * 4);
                    i_92.set(t_139.boneMatrices);
                    var r_71 = new un(i_92, n_97, n_97, p, c);
                    t_139.boneMatrices = i_92, t_139.boneTexture = r_71, t_139.boneTextureSize = n_97;
                }
                v.setValue(_t, "boneTexture", t_139.boneTexture, et), v.setValue(_t, "boneTextureSize", t_139.boneTextureSize);
            }
            else
                v.setOptional(_t, t_139, "boneMatrices");
        }
    } var x, b; return (d || l.receiveShadow !== i.receiveShadow) && (l.receiveShadow = i.receiveShadow, v.setValue(_t, "receiveShadow", i.receiveShadow)), d && (v.setValue(_t, "toneMappingExposure", _.toneMappingExposure), l.needsLights && (b = f, (x = y).ambientLightColor.needsUpdate = b, x.lightProbe.needsUpdate = b, x.directionalLights.needsUpdate = b, x.directionalLightShadows.needsUpdate = b, x.pointLights.needsUpdate = b, x.pointLightShadows.needsUpdate = b, x.spotLights.needsUpdate = b, x.spotLightShadows.needsUpdate = b, x.rectAreaLights.needsUpdate = b, x.hemisphereLights.needsUpdate = b), r && n.fog && at.refreshFogUniforms(y, r), at.refreshMaterialUniforms(y, n, O, N), Pi.upload(_t, l.uniformsList, y, et)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Pi.upload(_t, l.uniformsList, y, et), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && v.setValue(_t, "center", i.center), v.setValue(_t, "modelViewMatrix", i.modelViewMatrix), v.setValue(_t, "normalMatrix", i.normalMatrix), v.setValue(_t, "modelMatrix", i.matrixWorld), g; } Lt.setAnimationLoop((function (t) { bt.isPresenting || At && At(t); })), "undefined" != typeof window && Lt.setContext(window), this.setAnimationLoop = function (t) { At = t, bt.setAnimationLoop(t), null === t ? Lt.stop() : Lt.start(); }, this.render = function (t, e) { var n, i; if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== e && !0 !== e.isCamera)
        return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); if (!0 === y)
        return; vt.resetDefaultState(), T = -1, A = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === bt.enabled && !0 === bt.isPresenting && (e = bt.getCamera(e)), !0 === t.isScene && t.onBeforeRender(_, t, e, n || S), m = ct.get(t, v.length), m.init(), v.push(m), q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), V.setFromProjectionMatrix(q), j = this.localClippingEnabled, W = ht.init(this.clippingPlanes, j, e), f = lt.get(t, g.length), f.init(), g.push(f), Ct(t, e, 0, _.sortObjects), f.finish(), !0 === _.sortObjects && f.sort(z, B), !0 === W && ht.beginShadows(); var r = m.state.shadowsArray; wt.render(r, t, e), m.setupLights(), m.setupLightsView(e), !0 === W && ht.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), ut.render(f, t, e, i); var o = f.opaque, s = f.transparent; o.length > 0 && Rt(o, t, e), s.length > 0 && Rt(s, t, e), !0 === t.isScene && t.onAfterRender(_, t, e), null !== S && (et.updateRenderTargetMipmap(S), et.updateMultisampleRenderTarget(S)), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), v.pop(), m = v.length > 0 ? v[v.length - 1] : null, g.pop(), f = g.length > 0 ? g[g.length - 1] : null; }, this.setFramebuffer = function (t) { x !== t && null === S && _t.bindFramebuffer(36160, t), x = t; }, this.getActiveCubeFace = function () { return b; }, this.getActiveMipmapLevel = function () { return M; }, this.getRenderTarget = function () { return S; }, this.setRenderTarget = function (t, e, n) {
        if (e === void 0) { e = 0; }
        if (n === void 0) { n = 0; }
        S = t, b = e, M = n, t && void 0 === tt.get(t).__webglFramebuffer && et.setupRenderTarget(t);
        var i = x, r = !1, o = !1;
        if (t) {
            var n_98 = t.texture;
            (n_98.isDataTexture3D || n_98.isDataTexture2DArray) && (o = !0);
            var s_27 = tt.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (i = s_27[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? tt.get(t).__webglMultisampledFramebuffer : s_27, L.copy(t.viewport), C.copy(t.scissor), D = t.scissorTest;
        }
        else
            L.copy(F).multiplyScalar(O).floor(), C.copy(U).multiplyScalar(O).floor(), D = G;
        if (E !== i && (_t.bindFramebuffer(36160, i), E = i), K.viewport(L), K.scissor(C), K.setScissorTest(D), r) {
            var i_93 = tt.get(t.texture);
            _t.framebufferTexture2D(36160, 36064, 34069 + e, i_93.__webglTexture, n);
        }
        else if (o) {
            var i_94 = tt.get(t.texture), r_72 = e || 0;
            _t.framebufferTextureLayer(36160, 36064, i_94.__webglTexture, n || 0, r_72);
        }
    }, this.readRenderTargetPixels = function (t, e, n, i, r, o, s) { if (!t || !t.isWebGLRenderTarget)
        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); var a = tt.get(t).__webglFramebuffer; if (t.isWebGLCubeRenderTarget && void 0 !== s && (a = a[s]), a) {
        var s_28 = !1;
        a !== E && (_t.bindFramebuffer(36160, a), s_28 = !0);
        try {
            var a_17 = t.texture, l_15 = a_17.format, u_9 = a_17.type;
            if (l_15 !== p && gt.convert(l_15) !== _t.getParameter(35739))
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            var d_10 = u_9 === h && (Z.has("EXT_color_buffer_half_float") || Q.isWebGL2 && Z.has("EXT_color_buffer_float"));
            if (!(1009 === u_9 || gt.convert(u_9) === _t.getParameter(35738) || u_9 === c && (Q.isWebGL2 || Z.has("OES_texture_float") || Z.has("WEBGL_color_buffer_float")) || d_10))
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            36053 === _t.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && _t.readPixels(e, n, i, r, gt.convert(l_15), gt.convert(u_9), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        }
        finally {
            s_28 && _t.bindFramebuffer(36160, E);
        }
    } }, this.copyFramebufferToTexture = function (t, e, n) {
        if (n === void 0) { n = 0; }
        var i = Math.pow(2, -n), r = Math.floor(e.image.width * i), o = Math.floor(e.image.height * i), s = gt.convert(e.format);
        et.setTexture2D(e, 0), _t.copyTexImage2D(3553, n, s, t.x, t.y, r, o, 0), K.unbindTexture();
    }, this.copyTextureToTexture = function (t, e, n, i) {
        if (i === void 0) { i = 0; }
        var r = e.image.width, o = e.image.height, s = gt.convert(n.format), a = gt.convert(n.type);
        et.setTexture2D(n, 0), _t.pixelStorei(37440, n.flipY), _t.pixelStorei(37441, n.premultiplyAlpha), _t.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? _t.texSubImage2D(3553, i, t.x, t.y, r, o, s, a, e.image.data) : e.isCompressedTexture ? _t.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : _t.texSubImage2D(3553, i, t.x, t.y, s, a, e.image), 0 === i && n.generateMipmaps && _t.generateMipmap(3553), K.unbindTexture();
    }, this.copyTextureToTexture3D = function (t, e, n, i, r) {
        if (r === void 0) { r = 0; }
        if (_.isWebGL1Renderer)
            return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        var _b = n.image, o = _b.width, s = _b.height, a = _b.data, l = gt.convert(i.format), c = gt.convert(i.type);
        var h;
        if (i.isDataTexture3D)
            et.setTexture3D(i, 0), h = 32879;
        else {
            if (!i.isDataTexture2DArray)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            et.setTexture2DArray(i, 0), h = 35866;
        }
        _t.pixelStorei(37440, i.flipY), _t.pixelStorei(37441, i.premultiplyAlpha), _t.pixelStorei(3317, i.unpackAlignment);
        var u = _t.getParameter(3314), d = _t.getParameter(32878), p = _t.getParameter(3316), f = _t.getParameter(3315), m = _t.getParameter(32877);
        _t.pixelStorei(3314, o), _t.pixelStorei(32878, s), _t.pixelStorei(3316, t.min.x), _t.pixelStorei(3315, t.min.y), _t.pixelStorei(32877, t.min.z), _t.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, a), _t.pixelStorei(3314, u), _t.pixelStorei(32878, d), _t.pixelStorei(3316, p), _t.pixelStorei(3315, f), _t.pixelStorei(32877, m), 0 === r && i.generateMipmaps && _t.generateMipmap(h), K.unbindTexture();
    }, this.initTexture = function (t) { et.setTexture2D(t, 0), K.unbindTexture(); }, this.resetState = function () { K.reset(), vt.reset(); }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
    vr.prototype.isGroup = !0, Object.assign(_r.prototype, { constructor: _r, getHandSpace: function () { return null === this._hand && (this._hand = new vr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand; }, getTargetRaySpace: function () { return null === this._targetRay && (this._targetRay = new vr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay; }, getGripSpace: function () { return null === this._grip && (this._grip = new vr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip; }, dispatchEvent: function (t) { return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this; }, disconnect: function (t) { return this.dispatchEvent({ type: "disconnected", data: t }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this; }, update: function (t, e, n) { var i = null, r = null, o = null; var s = this._targetRay, a = this._grip, l = this._hand; if (t && "visible-blurred" !== e.session.visibilityState)
            if (l && t.hand) {
                o = !0;
                for (var _b = 0, _c = t.hand.values(); _b < _c.length; _b++) {
                    var i_95 = _c[_b];
                    var t_140 = e.getJointPose(i_95, n);
                    if (void 0 === l.joints[i_95.jointName]) {
                        var t_141 = new vr;
                        t_141.matrixAutoUpdate = !1, t_141.visible = !1, l.joints[i_95.jointName] = t_141, l.add(t_141);
                    }
                    var r_73 = l.joints[i_95.jointName];
                    null !== t_140 && (r_73.matrix.fromArray(t_140.transform.matrix), r_73.matrix.decompose(r_73.position, r_73.rotation, r_73.scale), r_73.jointRadius = t_140.radius), r_73.visible = null !== t_140;
                }
                var i_96 = l.joints["index-finger-tip"], r_74 = l.joints["thumb-tip"], s_29 = i_96.position.distanceTo(r_74.position), a_18 = .02, c_12 = .005;
                l.inputState.pinching && s_29 > a_18 + c_12 ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && s_29 <= a_18 - c_12 && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
            }
            else
                null !== s && (i = e.getPose(t.targetRaySpace, n), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale))), null !== a && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale))); return null !== s && (s.visible = null !== i), null !== a && (a.visible = null !== r), null !== l && (l.visible = null !== o), this; } }), Object.assign(yr.prototype, A.prototype), /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_2;
    }(br)).prototype.isWebGL1Renderer = !0;
    var wr = /** @class */ (function () {
        function wr(t, e) {
            this.name = "", this.color = new he(t), this.density = void 0 !== e ? e : 25e-5;
        }
        wr.prototype.clone = function () { return new wr(this.color, this.density); };
        wr.prototype.toJSON = function () { return { type: "FogExp2", color: this.color.getHex(), density: this.density }; };
        return wr;
    }());
    wr.prototype.isFogExp2 = !0;
    var Mr = /** @class */ (function () {
        function Mr(t, e, n) {
            this.name = "", this.color = new he(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3;
        }
        Mr.prototype.clone = function () { return new Mr(this.color, this.near, this.far); };
        Mr.prototype.toJSON = function () { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far }; };
        return Mr;
    }());
    Mr.prototype.isFog = !0;
    var Sr = /** @class */ (function (_super) {
        __extends(Sr, _super);
        function Sr() {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "Scene", _this.background = null, _this.environment = null, _this.fog = null, _this.overrideMaterial = null, _this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: _this }));
            return _this;
        }
        Sr.prototype.copy = function (t, e) { return _super.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this; };
        Sr.prototype.toJSON = function (t) { var e = _super.prototype.toJSON.call(this, t); return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e; };
        return Sr;
    }(Ut));
    function Er(t, e) { this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = S, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = R.generateUUID(); }
    Sr.prototype.isScene = !0, Object.defineProperty(Er.prototype, "needsUpdate", { set: function (t) { !0 === t && this.version++; } }), Object.assign(Er.prototype, { isInterleavedBuffer: !0, onUploadCallback: function () { }, setUsage: function (t) { return this.usage = t, this; }, copy: function (t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this; }, copyAt: function (t, e, n) { t *= this.stride, n *= e.stride; for (var i_97 = 0, r_75 = this.stride; i_97 < r_75; i_97++)
            this.array[t + i_97] = e.array[n + i_97]; return this; }, set: function (t, e) {
            if (e === void 0) { e = 0; }
            return this.array.set(t, e), this;
        }, clone: function (t) { void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = R.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); var e = new Er(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride); return e.setUsage(this.usage), e; }, onUpload: function (t) { return this.onUploadCallback = t, this; }, toJSON: function (t) { return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = R.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride }; } });
    var Tr = new k;
    function Ar(t, e, n, i) { this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i; }
    Object.defineProperties(Ar.prototype, { count: { get: function () { return this.data.count; } }, array: { get: function () { return this.data.array; } }, needsUpdate: { set: function (t) { this.data.needsUpdate = t; } } }), Object.assign(Ar.prototype, { isInterleavedBufferAttribute: !0, applyMatrix4: function (t) { for (var e_103 = 0, n_99 = this.data.count; e_103 < n_99; e_103++)
            Tr.x = this.getX(e_103), Tr.y = this.getY(e_103), Tr.z = this.getZ(e_103), Tr.applyMatrix4(t), this.setXYZ(e_103, Tr.x, Tr.y, Tr.z); return this; }, setX: function (t, e) { return this.data.array[t * this.data.stride + this.offset] = e, this; }, setY: function (t, e) { return this.data.array[t * this.data.stride + this.offset + 1] = e, this; }, setZ: function (t, e) { return this.data.array[t * this.data.stride + this.offset + 2] = e, this; }, setW: function (t, e) { return this.data.array[t * this.data.stride + this.offset + 3] = e, this; }, getX: function (t) { return this.data.array[t * this.data.stride + this.offset]; }, getY: function (t) { return this.data.array[t * this.data.stride + this.offset + 1]; }, getZ: function (t) { return this.data.array[t * this.data.stride + this.offset + 2]; }, getW: function (t) { return this.data.array[t * this.data.stride + this.offset + 3]; }, setXY: function (t, e, n) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this; }, setXYZ: function (t, e, n, i) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this; }, setXYZW: function (t, e, n, i, r) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this; }, clone: function (t) { if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            var t_142 = [];
            for (var e_104 = 0; e_104 < this.count; e_104++) {
                var n_100 = e_104 * this.data.stride + this.offset;
                for (var e_105 = 0; e_105 < this.itemSize; e_105++)
                    t_142.push(this.data.array[n_100 + e_105]);
            }
            return new fe(new this.array.constructor(t_142), this.itemSize, this.normalized);
        } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ar(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized); }, toJSON: function (t) { if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            var t_143 = [];
            for (var e_106 = 0; e_106 < this.count; e_106++) {
                var n_101 = e_106 * this.data.stride + this.offset;
                for (var e_107 = 0; e_107 < this.itemSize; e_107++)
                    t_143.push(this.data.array[n_101 + e_107]);
            }
            return { itemSize: this.itemSize, type: this.array.constructor.name, array: t_143, normalized: this.normalized };
        } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized }; } });
    var Lr = /** @class */ (function (_super) {
        __extends(Lr, _super);
        function Lr(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "SpriteMaterial", _this.color = new he(16777215), _this.map = null, _this.alphaMap = null, _this.rotation = 0, _this.sizeAttenuation = !0, _this.transparent = !0, _this.setValues(t);
            return _this;
        }
        Lr.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this; };
        return Lr;
    }(ie));
    var Cr;
    Lr.prototype.isSpriteMaterial = !0;
    var Rr = new k, Pr = new k, Dr = new k, Ir = new P, Nr = new P, Or = new mt, zr = new k, Br = new k, Hr = new k, Fr = new P, Ur = new P, kr = new P;
    function Gr(t, e, n, i, r, o) { Ir.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Nr.x = o * Ir.x - r * Ir.y, Nr.y = r * Ir.x + o * Ir.y) : Nr.copy(Ir), t.copy(e), t.x += Nr.x, t.y += Nr.y, t.applyMatrix4(Or); }
    (/** @class */ (function (_super) {
        __extends(class_3, _super);
        function class_3(t) {
            var _this = this;
            if (_this = _super.call(this) || this, _this.type = "Sprite", void 0 === Cr) {
                Cr = new Ie;
                var t_144 = new Er(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
                Cr.setIndex([0, 1, 2, 0, 2, 3]), Cr.setAttribute("position", new Ar(t_144, 3, 0, !1)), Cr.setAttribute("uv", new Ar(t_144, 2, 3, !1));
            }
            _this.geometry = Cr, _this.material = void 0 !== t ? t : new Lr, _this.center = new P(.5, .5);
            return _this;
        }
        class_3.prototype.raycast = function (t, e) { null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Pr.setFromMatrixScale(this.matrixWorld), Or.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Dr.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Pr.multiplyScalar(-Dr.z); var n = this.material.rotation; var i, r; 0 !== n && (r = Math.cos(n), i = Math.sin(n)); var o = this.center; Gr(zr.set(-.5, -.5, 0), Dr, o, Pr, i, r), Gr(Br.set(.5, -.5, 0), Dr, o, Pr, i, r), Gr(Hr.set(.5, .5, 0), Dr, o, Pr, i, r), Fr.set(0, 0), Ur.set(1, 0), kr.set(1, 1); var s = t.ray.intersectTriangle(zr, Br, Hr, !1, Rr); if (null === s && (Gr(Br.set(-.5, .5, 0), Dr, o, Pr, i, r), Ur.set(0, 1), s = t.ray.intersectTriangle(zr, Hr, Br, !1, Rr), null === s))
            return; var a = t.ray.origin.distanceTo(Rr); a < t.near || a > t.far || e.push({ distance: a, point: Rr.clone(), uv: ee.getUV(Rr, zr, Br, Hr, Fr, Ur, kr, new P), face: null, object: this }); };
        class_3.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this; };
        return class_3;
    }(Ut))).prototype.isSprite = !0;
    var Vr = new k, Wr = new k;
    var jr = new k, qr = new H, Xr = new H, Yr = new k, Jr = new mt;
    function Zr(t, e) { Qe.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new mt, this.bindMatrixInverse = new mt; }
    function Qr() { Ut.call(this), this.type = "Bone"; }
    Zr.prototype = Object.assign(Object.create(Qe.prototype), { constructor: Zr, isSkinnedMesh: !0, copy: function (t) { return Qe.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this; }, bind: function (t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert(); }, pose: function () { this.skeleton.pose(); }, normalizeSkinWeights: function () { var t = new H, e = this.geometry.attributes.skinWeight; for (var n_102 = 0, i_98 = e.count; n_102 < i_98; n_102++) {
            t.x = e.getX(n_102), t.y = e.getY(n_102), t.z = e.getZ(n_102), t.w = e.getW(n_102);
            var i_99 = 1 / t.manhattanLength();
            i_99 !== 1 / 0 ? t.multiplyScalar(i_99) : t.set(1, 0, 0, 0), e.setXYZW(n_102, t.x, t.y, t.z, t.w);
        } }, updateMatrixWorld: function (t) { Qe.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode); }, boneTransform: function (t, e) { var n = this.skeleton, i = this.geometry; qr.fromBufferAttribute(i.attributes.skinIndex, t), Xr.fromBufferAttribute(i.attributes.skinWeight, t), jr.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0); for (var t_145 = 0; t_145 < 4; t_145++) {
            var i_100 = Xr.getComponent(t_145);
            if (0 !== i_100) {
                var r_76 = qr.getComponent(t_145);
                Jr.multiplyMatrices(n.bones[r_76].matrixWorld, n.boneInverses[r_76]), e.addScaledVector(Yr.copy(jr).applyMatrix4(Jr), i_100);
            }
        } return e.applyMatrix4(this.bindMatrixInverse); } }), Qr.prototype = Object.assign(Object.create(Ut.prototype), { constructor: Qr, isBone: !0 });
    var Kr = new mt, $r = new mt;
    var to = /** @class */ (function () {
        function to(t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = []; }
            this.uuid = R.generateUUID(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        to.prototype.init = function () { var t = this.bones, e = this.boneInverses; if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length)
            this.calculateInverses();
        else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (var t_146 = 0, e_108 = this.bones.length; t_146 < e_108; t_146++)
                this.boneInverses.push(new mt);
        } };
        to.prototype.calculateInverses = function () { this.boneInverses.length = 0; for (var t_147 = 0, e_109 = this.bones.length; t_147 < e_109; t_147++) {
            var e_110 = new mt;
            this.bones[t_147] && e_110.copy(this.bones[t_147].matrixWorld).invert(), this.boneInverses.push(e_110);
        } };
        to.prototype.pose = function () { for (var t_148 = 0, e_111 = this.bones.length; t_148 < e_111; t_148++) {
            var e_112 = this.bones[t_148];
            e_112 && e_112.matrixWorld.copy(this.boneInverses[t_148]).invert();
        } for (var t_149 = 0, e_113 = this.bones.length; t_149 < e_113; t_149++) {
            var e_114 = this.bones[t_149];
            e_114 && (e_114.parent && e_114.parent.isBone ? (e_114.matrix.copy(e_114.parent.matrixWorld).invert(), e_114.matrix.multiply(e_114.matrixWorld)) : e_114.matrix.copy(e_114.matrixWorld), e_114.matrix.decompose(e_114.position, e_114.quaternion, e_114.scale));
        } };
        to.prototype.update = function () { var t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (var i_101 = 0, r_77 = t.length; i_101 < r_77; i_101++) {
            var r_78 = t[i_101] ? t[i_101].matrixWorld : $r;
            Kr.multiplyMatrices(r_78, e[i_101]), Kr.toArray(n, 16 * i_101);
        } null !== i && (i.needsUpdate = !0); };
        to.prototype.clone = function () { return new to(this.bones, this.boneInverses); };
        to.prototype.getBoneByName = function (t) { for (var e_115 = 0, n_103 = this.bones.length; e_115 < n_103; e_115++) {
            var n_104 = this.bones[e_115];
            if (n_104.name === t)
                return n_104;
        } };
        to.prototype.dispose = function () { null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null); };
        to.prototype.fromJSON = function (t, e) { this.uuid = t.uuid; for (var n_105 = 0, i_102 = t.bones.length; n_105 < i_102; n_105++) {
            var i_103 = t.bones[n_105];
            var r_79 = e[i_103];
            void 0 === r_79 && (console.warn("THREE.Skeleton: No bone found with UUID:", i_103), r_79 = new Qr), this.bones.push(r_79), this.boneInverses.push((new mt).fromArray(t.boneInverses[n_105]));
        } return this.init(), this; };
        to.prototype.toJSON = function () { var t = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; t.uuid = this.uuid; var e = this.bones, n = this.boneInverses; for (var i_104 = 0, r_80 = e.length; i_104 < r_80; i_104++) {
            var r_81 = e[i_104];
            t.bones.push(r_81.uuid);
            var o_38 = n[i_104];
            t.boneInverses.push(o_38.toArray());
        } return t; };
        return to;
    }());
    var eo = new mt, no = new mt, io = [], ro = new Qe;
    function oo(t, e, n) { Qe.call(this, t, e), this.instanceMatrix = new fe(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1; }
    oo.prototype = Object.assign(Object.create(Qe.prototype), { constructor: oo, isInstancedMesh: !0, copy: function (t) { return Qe.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this; }, getColorAt: function (t, e) { e.fromArray(this.instanceColor.array, 3 * t); }, getMatrixAt: function (t, e) { e.fromArray(this.instanceMatrix.array, 16 * t); }, raycast: function (t, e) { var n = this.matrixWorld, i = this.count; if (ro.geometry = this.geometry, ro.material = this.material, void 0 !== ro.material)
            for (var r_82 = 0; r_82 < i; r_82++) {
                this.getMatrixAt(r_82, eo), no.multiplyMatrices(n, eo), ro.matrixWorld = no, ro.raycast(t, io);
                for (var t_150 = 0, n_106 = io.length; t_150 < n_106; t_150++) {
                    var n_107 = io[t_150];
                    n_107.instanceId = r_82, n_107.object = this, e.push(n_107);
                }
                io.length = 0;
            } }, setColorAt: function (t, e) { null === this.instanceColor && (this.instanceColor = new fe(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t); }, setMatrixAt: function (t, e) { e.toArray(this.instanceMatrix.array, 16 * t); }, updateMorphTargets: function () { }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
    var so = /** @class */ (function (_super) {
        __extends(so, _super);
        function so(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "LineBasicMaterial", _this.color = new he(16777215), _this.linewidth = 1, _this.linecap = "round", _this.linejoin = "round", _this.morphTargets = !1, _this.setValues(t);
            return _this;
        }
        so.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this; };
        return so;
    }(ie));
    so.prototype.isLineBasicMaterial = !0;
    var ao = new k, lo = new k, co = new mt, ho = new ft, uo = new st;
    function po(t, e) {
        if (t === void 0) { t = new Ie; }
        if (e === void 0) { e = new so; }
        Ut.call(this), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
    }
    po.prototype = Object.assign(Object.create(Ut.prototype), { constructor: po, isLine: !0, copy: function (t) { return Ut.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this; }, computeLineDistances: function () { var t = this.geometry; if (t.isBufferGeometry)
            if (null === t.index) {
                var e_116 = t.attributes.position, n_108 = [0];
                for (var t_151 = 1, i_105 = e_116.count; t_151 < i_105; t_151++)
                    ao.fromBufferAttribute(e_116, t_151 - 1), lo.fromBufferAttribute(e_116, t_151), n_108[t_151] = n_108[t_151 - 1], n_108[t_151] += ao.distanceTo(lo);
                t.setAttribute("lineDistance", new Me(n_108, 1));
            }
            else
                console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else
            t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this; }, raycast: function (t, e) { var n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold; if (null === n.boundingSphere && n.computeBoundingSphere(), uo.copy(n.boundingSphere), uo.applyMatrix4(i), uo.radius += r, !1 === t.ray.intersectsSphere(uo))
            return; co.copy(i).invert(), ho.copy(t.ray).applyMatrix4(co); var o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, a = new k, l = new k, c = new k, h = new k, u = this.isLineSegments ? 2 : 1; if (n.isBufferGeometry) {
            var i_106 = n.index, r_83 = n.attributes.position;
            if (null !== i_106) {
                var n_109 = i_106.array;
                for (var i_107 = 0, o_39 = n_109.length - 1; i_107 < o_39; i_107 += u) {
                    var o_40 = n_109[i_107], u_10 = n_109[i_107 + 1];
                    if (a.fromBufferAttribute(r_83, o_40), l.fromBufferAttribute(r_83, u_10), ho.distanceSqToSegment(a, l, h, c) > s)
                        continue;
                    h.applyMatrix4(this.matrixWorld);
                    var d_11 = t.ray.origin.distanceTo(h);
                    d_11 < t.near || d_11 > t.far || e.push({ distance: d_11, point: c.clone().applyMatrix4(this.matrixWorld), index: i_107, face: null, faceIndex: null, object: this });
                }
            }
            else
                for (var n_110 = 0, i_108 = r_83.count - 1; n_110 < i_108; n_110 += u) {
                    if (a.fromBufferAttribute(r_83, n_110), l.fromBufferAttribute(r_83, n_110 + 1), ho.distanceSqToSegment(a, l, h, c) > s)
                        continue;
                    h.applyMatrix4(this.matrixWorld);
                    var i_109 = t.ray.origin.distanceTo(h);
                    i_109 < t.near || i_109 > t.far || e.push({ distance: i_109, point: c.clone().applyMatrix4(this.matrixWorld), index: n_110, face: null, faceIndex: null, object: this });
                }
        }
        else
            n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); }, updateMorphTargets: function () { var t = this.geometry; if (t.isBufferGeometry) {
            var e_117 = t.morphAttributes, n_111 = Object.keys(e_117);
            if (n_111.length > 0) {
                var t_152 = e_117[n_111[0]];
                if (void 0 !== t_152) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (var e_118 = 0, n_112 = t_152.length; e_118 < n_112; e_118++) {
                        var n_113 = t_152[e_118].name || String(e_118);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n_113] = e_118;
                    }
                }
            }
        }
        else {
            var e_119 = t.morphTargets;
            void 0 !== e_119 && e_119.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        } } });
    var fo = new k, mo = new k;
    function go(t, e) { po.call(this, t, e), this.type = "LineSegments"; }
    go.prototype = Object.assign(Object.create(po.prototype), { constructor: go, isLineSegments: !0, computeLineDistances: function () { var t = this.geometry; if (t.isBufferGeometry)
            if (null === t.index) {
                var e_120 = t.attributes.position, n_114 = [];
                for (var t_153 = 0, i_110 = e_120.count; t_153 < i_110; t_153 += 2)
                    fo.fromBufferAttribute(e_120, t_153), mo.fromBufferAttribute(e_120, t_153 + 1), n_114[t_153] = 0 === t_153 ? 0 : n_114[t_153 - 1], n_114[t_153 + 1] = n_114[t_153] + fo.distanceTo(mo);
                t.setAttribute("lineDistance", new Me(n_114, 1));
            }
            else
                console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else
            t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this; } });
    (/** @class */ (function (_super) {
        __extends(class_4, _super);
        function class_4(t, e) {
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "LineLoop";
            return _this;
        }
        return class_4;
    }(po))).prototype.isLineLoop = !0;
    var vo = /** @class */ (function (_super) {
        __extends(vo, _super);
        function vo(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "PointsMaterial", _this.color = new he(16777215), _this.map = null, _this.alphaMap = null, _this.size = 1, _this.sizeAttenuation = !0, _this.morphTargets = !1, _this.setValues(t);
            return _this;
        }
        vo.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this; };
        return vo;
    }(ie));
    vo.prototype.isPointsMaterial = !0;
    var _o = new mt, yo = new ft, xo = new st, bo = new k;
    function wo(t, e) {
        if (t === void 0) { t = new Ie; }
        if (e === void 0) { e = new vo; }
        Ut.call(this), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
    }
    function Mo(t, e, n, i, r, o, s) { var a = yo.distanceSqToPoint(t); if (a < n) {
        var n_115 = new k;
        yo.closestPointToPoint(t, n_115), n_115.applyMatrix4(i);
        var l_16 = r.ray.origin.distanceTo(n_115);
        if (l_16 < r.near || l_16 > r.far)
            return;
        o.push({ distance: l_16, distanceToRay: Math.sqrt(a), point: n_115, index: e, face: null, object: s });
    } }
    wo.prototype = Object.assign(Object.create(Ut.prototype), { constructor: wo, isPoints: !0, copy: function (t) { return Ut.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this; }, raycast: function (t, e) { var n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold; if (null === n.boundingSphere && n.computeBoundingSphere(), xo.copy(n.boundingSphere), xo.applyMatrix4(i), xo.radius += r, !1 === t.ray.intersectsSphere(xo))
            return; _o.copy(i).invert(), yo.copy(t.ray).applyMatrix4(_o); var o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o; if (n.isBufferGeometry) {
            var r_84 = n.index, o_41 = n.attributes.position;
            if (null !== r_84) {
                var n_116 = r_84.array;
                for (var r_85 = 0, a_19 = n_116.length; r_85 < a_19; r_85++) {
                    var a_20 = n_116[r_85];
                    bo.fromBufferAttribute(o_41, a_20), Mo(bo, a_20, s, i, t, e, this);
                }
            }
            else
                for (var n_117 = 0, r_86 = o_41.count; n_117 < r_86; n_117++)
                    bo.fromBufferAttribute(o_41, n_117), Mo(bo, n_117, s, i, t, e, this);
        }
        else
            console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); }, updateMorphTargets: function () { var t = this.geometry; if (t.isBufferGeometry) {
            var e_121 = t.morphAttributes, n_118 = Object.keys(e_121);
            if (n_118.length > 0) {
                var t_154 = e_121[n_118[0]];
                if (void 0 !== t_154) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (var e_122 = 0, n_119 = t_154.length; e_122 < n_119; e_122++) {
                        var n_120 = t_154[e_122].name || String(e_122);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n_120] = e_122;
                    }
                }
            }
        }
        else {
            var e_123 = t.morphTargets;
            void 0 !== e_123 && e_123.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        } } }), /** @class */ (function (_super) {
        __extends(class_5, _super);
        function class_5(t, e, n, i, r, s, a, l, c) {
            var _this = this;
            _this = _super.call(this, t, e, n, i, r, s, a, l, c) || this, _this.format = void 0 !== a ? a : d, _this.minFilter = void 0 !== s ? s : o, _this.magFilter = void 0 !== r ? r : o, _this.generateMipmaps = !1;
            var h = _this;
            "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() { h.needsUpdate = !0, t.requestVideoFrameCallback(e); }));
            return _this;
        }
        class_5.prototype.clone = function () { return new this.constructor(this.image).copy(this); };
        class_5.prototype.update = function () { var t = this.image; !1 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0); };
        return class_5;
    }(z)).prototype.isVideoTexture = !0;
    var So = /** @class */ (function (_super) {
        __extends(So, _super);
        function So(t, e, n, i, r, o, s, a, l, c, h, u) {
            var _this = this;
            _this = _super.call(this, null, o, s, a, l, c, i, r, h, u) || this, _this.image = { width: e, height: n }, _this.mipmaps = t, _this.flipY = !1, _this.generateMipmaps = !1;
            return _this;
        }
        return So;
    }(z));
    So.prototype.isCompressedTexture = !0, /** @class */ (function (_super) {
        __extends(class_6, _super);
        function class_6(t, e, n, i, r, o, s, a, l) {
            var _this = this;
            _this = _super.call(this, t, e, n, i, r, o, s, a, l) || this, _this.needsUpdate = !0;
            return _this;
        }
        return class_6;
    }(z)).prototype.isCanvasTexture = !0, /** @class */ (function (_super) {
        __extends(class_7, _super);
        function class_7(t, e, n, i, o, s, l, c, h, d) {
            var _this = this;
            if ((d = void 0 !== d ? d : f) !== f && d !== m)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && d === f && (n = a), void 0 === n && d === m && (n = u), _this = _super.call(this, null, i, o, s, l, c, d, n, h) || this, _this.image = { width: t, height: e }, _this.magFilter = void 0 !== l ? l : r, _this.minFilter = void 0 !== c ? c : r, _this.flipY = !1, _this.generateMipmaps = !1;
            return _this;
        }
        return class_7;
    }(z)).prototype.isDepthTexture = !0, new k, new k, new k, new ee;
    function Eo(t, e, n, i, r) { var o, s; if (r === function (t, e, n, i) { var r = 0; for (var o_42 = e, s_30 = n - i; o_42 < n; o_42 += i)
        r += (t[s_30] - t[o_42]) * (t[o_42 + 1] + t[s_30 + 1]), s_30 = o_42; return r; }(t, e, n, i) > 0)
        for (o = e; o < n; o += i)
            s = qo(o, t[o], t[o + 1], s);
    else
        for (o = n - i; o >= e; o -= i)
            s = qo(o, t[o], t[o + 1], s); return s && Uo(s, s.next) && (Xo(s), s = s.next), s; }
    function To(t, e) { if (!t)
        return t; e || (e = t); var n, i = t; do {
        if (n = !1, i.steiner || !Uo(i, i.next) && 0 !== Fo(i.prev, i, i.next))
            i = i.next;
        else {
            if (Xo(i), i = e = i.prev, i === i.next)
                break;
            n = !0;
        }
    } while (n || i !== e); return e; }
    function Ao(t, e, n, i, r, o, s) { if (!t)
        return; !s && o && function (t, e, n, i) { var r = t; do {
        null === r.z && (r.z = Oo(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
    } while (r !== t); r.prevZ.nextZ = null, r.prevZ = null, function (t) { var e, n, i, r, o, s, a, l, c = 1; do {
        for (n = t, t = null, o = null, s = 0; n;) {
            for (s++, i = n, a = 0, e = 0; e < c && (a++, i = i.nextZ, i); e++)
                ;
            for (l = c; a > 0 || l > 0 && i;)
                0 !== a && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, a--) : (r = i, i = i.nextZ, l--), o ? o.nextZ = r : t = r, r.prevZ = o, o = r;
            n = i;
        }
        o.nextZ = null, c *= 2;
    } while (s > 1); }(r); }(t, i, r, o); var a, l, c = t; for (; t.prev !== t.next;)
        if (a = t.prev, l = t.next, o ? Co(t, i, r, o) : Lo(t))
            e.push(a.i / n), e.push(t.i / n), e.push(l.i / n), Xo(t), t = l.next, c = l.next;
        else if ((t = l) === c) {
            s ? 1 === s ? Ao(t = Ro(To(t), e, n), e, n, i, r, o, 2) : 2 === s && Po(t, e, n, i, r, o) : Ao(To(t), e, n, i, r, o, 1);
            break;
        } }
    function Lo(t) { var e = t.prev, n = t, i = t.next; if (Fo(e, n, i) >= 0)
        return !1; var r = t.next.next; for (; r !== t.prev;) {
        if (Bo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Fo(r.prev, r, r.next) >= 0)
            return !1;
        r = r.next;
    } return !0; }
    function Co(t, e, n, i) { var r = t.prev, o = t, s = t.next; if (Fo(r, o, s) >= 0)
        return !1; var a = r.x < o.x ? r.x < s.x ? r.x : s.x : o.x < s.x ? o.x : s.x, l = r.y < o.y ? r.y < s.y ? r.y : s.y : o.y < s.y ? o.y : s.y, c = r.x > o.x ? r.x > s.x ? r.x : s.x : o.x > s.x ? o.x : s.x, h = r.y > o.y ? r.y > s.y ? r.y : s.y : o.y > s.y ? o.y : s.y, u = Oo(a, l, e, n, i), d = Oo(c, h, e, n, i); var p = t.prevZ, f = t.nextZ; for (; p && p.z >= u && f && f.z <= d;) {
        if (p !== t.prev && p !== t.next && Bo(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) && Fo(p.prev, p, p.next) >= 0)
            return !1;
        if (p = p.prevZ, f !== t.prev && f !== t.next && Bo(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && Fo(f.prev, f, f.next) >= 0)
            return !1;
        f = f.nextZ;
    } for (; p && p.z >= u;) {
        if (p !== t.prev && p !== t.next && Bo(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) && Fo(p.prev, p, p.next) >= 0)
            return !1;
        p = p.prevZ;
    } for (; f && f.z <= d;) {
        if (f !== t.prev && f !== t.next && Bo(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && Fo(f.prev, f, f.next) >= 0)
            return !1;
        f = f.nextZ;
    } return !0; }
    function Ro(t, e, n) { var i = t; do {
        var r_87 = i.prev, o_43 = i.next.next;
        !Uo(r_87, o_43) && ko(r_87, i, i.next, o_43) && Wo(r_87, o_43) && Wo(o_43, r_87) && (e.push(r_87.i / n), e.push(i.i / n), e.push(o_43.i / n), Xo(i), Xo(i.next), i = t = o_43), i = i.next;
    } while (i !== t); return To(i); }
    function Po(t, e, n, i, r, o) { var s = t; do {
        var t_155 = s.next.next;
        for (; t_155 !== s.prev;) {
            if (s.i !== t_155.i && Ho(s, t_155)) {
                var a_21 = jo(s, t_155);
                return s = To(s, s.next), a_21 = To(a_21, a_21.next), Ao(s, e, n, i, r, o), void Ao(a_21, e, n, i, r, o);
            }
            t_155 = t_155.next;
        }
        s = s.next;
    } while (s !== t); }
    function Do(t, e) { return t.x - e.x; }
    function Io(t, e) { if (e = function (t, e) { var n = e; var i = t.x, r = t.y; var o, s = -1 / 0; do {
        if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
            var t_156 = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (t_156 <= i && t_156 > s) {
                if (s = t_156, t_156 === i) {
                    if (r === n.y)
                        return n;
                    if (r === n.next.y)
                        return n.next;
                }
                o = n.x < n.next.x ? n : n.next;
            }
        }
        n = n.next;
    } while (n !== e); if (!o)
        return null; if (i === s)
        return o; var a = o, l = o.x, c = o.y; var h, u = 1 / 0; n = o; do {
        i >= n.x && n.x >= l && i !== n.x && Bo(r < c ? i : s, r, l, c, r < c ? s : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), Wo(n, t) && (h < u || h === u && (n.x > o.x || n.x === o.x && No(o, n))) && (o = n, u = h)), n = n.next;
    } while (n !== a); return o; }(t, e)) {
        var n_121 = jo(e, t);
        To(e, e.next), To(n_121, n_121.next);
    } }
    function No(t, e) { return Fo(t.prev, t, e.prev) < 0 && Fo(e.next, t, t.next) < 0; }
    function Oo(t, e, n, i, r) { return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1; }
    function zo(t) { var e = t, n = t; do {
        (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t); return n; }
    function Bo(t, e, n, i, r, o, s, a) { return (r - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (n - s) * (e - a) >= 0 && (n - s) * (o - a) - (r - s) * (i - a) >= 0; }
    function Ho(t, e) { return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) { var n = t; do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && ko(n, n.next, t, e))
            return !0;
        n = n.next;
    } while (n !== t); return !1; }(t, e) && (Wo(t, e) && Wo(e, t) && function (t, e) { var n = t, i = !1; var r = (t.x + e.x) / 2, o = (t.y + e.y) / 2; do {
        n.y > o != n.next.y > o && n.next.y !== n.y && r < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
    } while (n !== t); return i; }(t, e) && (Fo(t.prev, t, e.prev) || Fo(t, e.prev, e)) || Uo(t, e) && Fo(t.prev, t, t.next) > 0 && Fo(e.prev, e, e.next) > 0); }
    function Fo(t, e, n) { return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y); }
    function Uo(t, e) { return t.x === e.x && t.y === e.y; }
    function ko(t, e, n, i) { var r = Vo(Fo(t, e, n)), o = Vo(Fo(t, e, i)), s = Vo(Fo(n, i, t)), a = Vo(Fo(n, i, e)); return r !== o && s !== a || !(0 !== r || !Go(t, n, e)) || !(0 !== o || !Go(t, i, e)) || !(0 !== s || !Go(n, t, i)) || !(0 !== a || !Go(n, e, i)); }
    function Go(t, e, n) { return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y); }
    function Vo(t) { return t > 0 ? 1 : t < 0 ? -1 : 0; }
    function Wo(t, e) { return Fo(t.prev, t, t.next) < 0 ? Fo(t, e, t.next) >= 0 && Fo(t, t.prev, e) >= 0 : Fo(t, e, t.prev) < 0 || Fo(t, t.next, e) < 0; }
    function jo(t, e) { var n = new Yo(t.i, t.x, t.y), i = new Yo(e.i, e.x, e.y), r = t.next, o = e.prev; return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, o.next = i, i.prev = o, i; }
    function qo(t, e, n, i) { var r = new Yo(t, e, n); return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r; }
    function Xo(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ); }
    function Yo(t, e, n) { this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1; }
    var Jo = { area: function (t) { var e = t.length; var n = 0; for (var i_111 = e - 1, r_88 = 0; r_88 < e; i_111 = r_88++)
            n += t[i_111].x * t[r_88].y - t[r_88].x * t[i_111].y; return .5 * n; }, isClockWise: function (t) { return Jo.area(t) < 0; }, triangulateShape: function (t, e) { var n = [], i = [], r = []; Zo(t), Qo(n, t); var o = t.length; e.forEach(Zo); for (var t_157 = 0; t_157 < e.length; t_157++)
            i.push(o), o += e[t_157].length, Qo(n, e[t_157]); var s = function (t, e, n) { n = n || 2; var i = e && e.length, r = i ? e[0] * n : t.length; var o = Eo(t, 0, r, n, !0); var s = []; if (!o || o.next === o.prev)
            return s; var a, l, c, h, u, d, p; if (i && (o = function (t, e, n, i) { var r = []; var o, s, a, l, c; for (o = 0, s = e.length; o < s; o++)
            a = e[o] * i, l = o < s - 1 ? e[o + 1] * i : t.length, c = Eo(t, a, l, i, !1), c === c.next && (c.steiner = !0), r.push(zo(c)); for (r.sort(Do), o = 0; o < r.length; o++)
            Io(r[o], n), n = To(n, n.next); return n; }(t, e, o, n)), t.length > 80 * n) {
            a = c = t[0], l = h = t[1];
            for (var e_124 = n; e_124 < r; e_124 += n)
                u = t[e_124], d = t[e_124 + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = Math.max(c - a, h - l), p = 0 !== p ? 1 / p : 0;
        } return Ao(o, s, n, a, l, p), s; }(n, i); for (var t_158 = 0; t_158 < s.length; t_158 += 3)
            r.push(s.slice(t_158, t_158 + 3)); return r; } };
    function Zo(t) { var e = t.length; e > 2 && t[e - 1].equals(t[0]) && t.pop(); }
    function Qo(t, e) { for (var n_122 = 0; n_122 < e.length; n_122++)
        t.push(e[n_122].x), t.push(e[n_122].y); }
    var Ko = /** @class */ (function (_super) {
        __extends(Ko, _super);
        function Ko(t, e) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "ExtrudeGeometry", _this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
            var n = _this, i = [], r = [];
            for (var e_125 = 0, n_123 = t.length; e_125 < n_123; e_125++)
                o(t[e_125]);
            function o(t) { var o = [], s = void 0 !== e.curveSegments ? e.curveSegments : 12, a = void 0 !== e.steps ? e.steps : 1; var l = void 0 !== e.depth ? e.depth : 100, c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : 6, u = void 0 !== e.bevelSize ? e.bevelSize : h - 2, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3; var f = e.extrudePath, m = void 0 !== e.UVGenerator ? e.UVGenerator : $o; void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount); var g, v, _, y, x, b = !1; f && (g = f.getSpacedPoints(a), b = !0, c = !1, v = f.computeFrenetFrames(a, !1), _ = new k, y = new k, x = new k), c || (p = 0, h = 0, u = 0, d = 0); var w = t.extractPoints(s); var M = w.shape; var S = w.holes; if (!Jo.isClockWise(M)) {
                M = M.reverse();
                for (var t_159 = 0, e_126 = S.length; t_159 < e_126; t_159++) {
                    var e_127 = S[t_159];
                    Jo.isClockWise(e_127) && (S[t_159] = e_127.reverse());
                }
            } var E = Jo.triangulateShape(M, S), T = M; for (var t_160 = 0, e_128 = S.length; t_160 < e_128; t_160++) {
                var e_129 = S[t_160];
                M = M.concat(e_129);
            } function A(t, e, n) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t); } var L = M.length, C = E.length; function R(t, e, n) { var i, r, o; var s = t.x - e.x, a = t.y - e.y, l = n.x - t.x, c = n.y - t.y, h = s * s + a * a, u = s * c - a * l; if (Math.abs(u) > Number.EPSILON) {
                var u_11 = Math.sqrt(h), d_12 = Math.sqrt(l * l + c * c), p_6 = e.x - a / u_11, f_4 = e.y + s / u_11, m_1 = ((n.x - c / d_12 - p_6) * c - (n.y + l / d_12 - f_4) * l) / (s * c - a * l);
                i = p_6 + s * m_1 - t.x, r = f_4 + a * m_1 - t.y;
                var g_2 = i * i + r * r;
                if (g_2 <= 2)
                    return new P(i, r);
                o = Math.sqrt(g_2 / 2);
            }
            else {
                var t_161 = !1;
                s > Number.EPSILON ? l > Number.EPSILON && (t_161 = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (t_161 = !0) : Math.sign(a) === Math.sign(c) && (t_161 = !0), t_161 ? (i = -a, r = s, o = Math.sqrt(h)) : (i = s, r = a, o = Math.sqrt(h / 2));
            } return new P(i / o, r / o); } var D = []; for (var t_162 = 0, e_130 = T.length, n_124 = e_130 - 1, i_112 = t_162 + 1; t_162 < e_130; t_162++, n_124++, i_112++)
                n_124 === e_130 && (n_124 = 0), i_112 === e_130 && (i_112 = 0), D[t_162] = R(T[t_162], T[n_124], T[i_112]); var I = []; var N, O = D.concat(); for (var t_163 = 0, e_131 = S.length; t_163 < e_131; t_163++) {
                var e_132 = S[t_163];
                N = [];
                for (var t_164 = 0, n_125 = e_132.length, i_113 = n_125 - 1, r_89 = t_164 + 1; t_164 < n_125; t_164++, i_113++, r_89++)
                    i_113 === n_125 && (i_113 = 0), r_89 === n_125 && (r_89 = 0), N[t_164] = R(e_132[t_164], e_132[i_113], e_132[r_89]);
                I.push(N), O = O.concat(N);
            } for (var t_165 = 0; t_165 < p; t_165++) {
                var e_133 = t_165 / p, n_126 = h * Math.cos(e_133 * Math.PI / 2), i_114 = u * Math.sin(e_133 * Math.PI / 2) + d;
                for (var t_166 = 0, e_134 = T.length; t_166 < e_134; t_166++) {
                    var e_135 = A(T[t_166], D[t_166], i_114);
                    H(e_135.x, e_135.y, -n_126);
                }
                for (var t_167 = 0, e_136 = S.length; t_167 < e_136; t_167++) {
                    var e_137 = S[t_167];
                    N = I[t_167];
                    for (var t_168 = 0, r_90 = e_137.length; t_168 < r_90; t_168++) {
                        var r_91 = A(e_137[t_168], N[t_168], i_114);
                        H(r_91.x, r_91.y, -n_126);
                    }
                }
            } var z = u + d; for (var t_169 = 0; t_169 < L; t_169++) {
                var e_138 = c ? A(M[t_169], O[t_169], z) : M[t_169];
                b ? (y.copy(v.normals[0]).multiplyScalar(e_138.x), _.copy(v.binormals[0]).multiplyScalar(e_138.y), x.copy(g[0]).add(y).add(_), H(x.x, x.y, x.z)) : H(e_138.x, e_138.y, 0);
            } for (var t_170 = 1; t_170 <= a; t_170++)
                for (var e_139 = 0; e_139 < L; e_139++) {
                    var n_127 = c ? A(M[e_139], O[e_139], z) : M[e_139];
                    b ? (y.copy(v.normals[t_170]).multiplyScalar(n_127.x), _.copy(v.binormals[t_170]).multiplyScalar(n_127.y), x.copy(g[t_170]).add(y).add(_), H(x.x, x.y, x.z)) : H(n_127.x, n_127.y, l / a * t_170);
                } for (var t_171 = p - 1; t_171 >= 0; t_171--) {
                var e_140 = t_171 / p, n_128 = h * Math.cos(e_140 * Math.PI / 2), i_115 = u * Math.sin(e_140 * Math.PI / 2) + d;
                for (var t_172 = 0, e_141 = T.length; t_172 < e_141; t_172++) {
                    var e_142 = A(T[t_172], D[t_172], i_115);
                    H(e_142.x, e_142.y, l + n_128);
                }
                for (var t_173 = 0, e_143 = S.length; t_173 < e_143; t_173++) {
                    var e_144 = S[t_173];
                    N = I[t_173];
                    for (var t_174 = 0, r_92 = e_144.length; t_174 < r_92; t_174++) {
                        var r_93 = A(e_144[t_174], N[t_174], i_115);
                        b ? H(r_93.x, r_93.y + g[a - 1].y, g[a - 1].x + n_128) : H(r_93.x, r_93.y, l + n_128);
                    }
                }
            } function B(t, e) { var n = t.length; for (; --n >= 0;) {
                var i_116 = n;
                var r_94 = n - 1;
                r_94 < 0 && (r_94 = t.length - 1);
                for (var t_175 = 0, n_129 = a + 2 * p; t_175 < n_129; t_175++) {
                    var n_130 = L * t_175, o_44 = L * (t_175 + 1);
                    U(e + i_116 + n_130, e + r_94 + n_130, e + r_94 + o_44, e + i_116 + o_44);
                }
            } } function H(t, e, n) { o.push(t), o.push(e), o.push(n); } function F(t, e, r) { G(t), G(e), G(r); var o = i.length / 3, s = m.generateTopUV(n, i, o - 3, o - 2, o - 1); V(s[0]), V(s[1]), V(s[2]); } function U(t, e, r, o) { G(t), G(e), G(o), G(e), G(r), G(o); var s = i.length / 3, a = m.generateSideWallUV(n, i, s - 6, s - 3, s - 2, s - 1); V(a[0]), V(a[1]), V(a[3]), V(a[1]), V(a[2]), V(a[3]); } function G(t) { i.push(o[3 * t + 0]), i.push(o[3 * t + 1]), i.push(o[3 * t + 2]); } function V(t) { r.push(t.x), r.push(t.y); } !function () { var t = i.length / 3; if (c) {
                var t_176 = 0, e_145 = L * t_176;
                for (var t_177 = 0; t_177 < C; t_177++) {
                    var n_131 = E[t_177];
                    F(n_131[2] + e_145, n_131[1] + e_145, n_131[0] + e_145);
                }
                t_176 = a + 2 * p, e_145 = L * t_176;
                for (var t_178 = 0; t_178 < C; t_178++) {
                    var n_132 = E[t_178];
                    F(n_132[0] + e_145, n_132[1] + e_145, n_132[2] + e_145);
                }
            }
            else {
                for (var t_179 = 0; t_179 < C; t_179++) {
                    var e_146 = E[t_179];
                    F(e_146[2], e_146[1], e_146[0]);
                }
                for (var t_180 = 0; t_180 < C; t_180++) {
                    var e_147 = E[t_180];
                    F(e_147[0] + L * a, e_147[1] + L * a, e_147[2] + L * a);
                }
            } n.addGroup(t, i.length / 3 - t, 0); }(), function () { var t = i.length / 3; var e = 0; B(T, e), e += T.length; for (var t_181 = 0, n_133 = S.length; t_181 < n_133; t_181++) {
                var n_134 = S[t_181];
                B(n_134, e), e += n_134.length;
            } n.addGroup(t, i.length / 3 - t, 1); }(); }
            _this.setAttribute("position", new Me(i, 3)), _this.setAttribute("uv", new Me(r, 2)), _this.computeVertexNormals();
            return _this;
        }
        Ko.prototype.toJSON = function () { var t = Ie.prototype.toJSON.call(this); return function (t, e, n) { if (n.shapes = [], Array.isArray(t))
            for (var e_148 = 0, i_117 = t.length; e_148 < i_117; e_148++) {
                var i_118 = t[e_148];
                n.shapes.push(i_118.uuid);
            }
        else
            n.shapes.push(t.uuid); return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n; }(this.parameters.shapes, this.parameters.options, t); };
        return Ko;
    }(Ie));
    var $o = { generateTopUV: function (t, e, n, i, r) { var o = e[3 * n], s = e[3 * n + 1], a = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1]; return [new P(o, s), new P(a, l), new P(c, h)]; }, generateSideWallUV: function (t, e, n, i, r, o) { var s = e[3 * n], a = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2], d = e[3 * r], p = e[3 * r + 1], f = e[3 * r + 2], m = e[3 * o], g = e[3 * o + 1], v = e[3 * o + 2]; return Math.abs(a - h) < .01 ? [new P(s, 1 - l), new P(c, 1 - u), new P(d, 1 - f), new P(m, 1 - v)] : [new P(a, 1 - l), new P(h, 1 - u), new P(p, 1 - f), new P(g, 1 - v)]; } };
    function ts(t, e, n) { Ie.call(this), this.type = "ParametricGeometry", this.parameters = { func: t, slices: e, stacks: n }; var i = [], r = [], o = [], s = [], a = 1e-5, l = new k, c = new k, h = new k, u = new k, d = new k; t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."); var p = e + 1; for (var i_119 = 0; i_119 <= n; i_119++) {
        var p_7 = i_119 / n;
        for (var n_135 = 0; n_135 <= e; n_135++) {
            var i_120 = n_135 / e;
            t(i_120, p_7, c), r.push(c.x, c.y, c.z), i_120 - a >= 0 ? (t(i_120 - a, p_7, h), u.subVectors(c, h)) : (t(i_120 + a, p_7, h), u.subVectors(h, c)), p_7 - a >= 0 ? (t(i_120, p_7 - a, h), d.subVectors(c, h)) : (t(i_120, p_7 + a, h), d.subVectors(h, c)), l.crossVectors(u, d).normalize(), o.push(l.x, l.y, l.z), s.push(i_120, p_7);
        }
    } for (var t_182 = 0; t_182 < n; t_182++)
        for (var n_136 = 0; n_136 < e; n_136++) {
            var e_149 = t_182 * p + n_136, r_95 = t_182 * p + n_136 + 1, o_45 = (t_182 + 1) * p + n_136 + 1, s_31 = (t_182 + 1) * p + n_136;
            i.push(e_149, r_95, s_31), i.push(r_95, o_45, s_31);
        } this.setIndex(i), this.setAttribute("position", new Me(r, 3)), this.setAttribute("normal", new Me(o, 3)), this.setAttribute("uv", new Me(s, 2)); }
    ts.prototype = Object.create(Ie.prototype), ts.prototype.constructor = ts;
    var es = /** @class */ (function (_super) {
        __extends(es, _super);
        function es(t, e) {
            if (e === void 0) { e = 12; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "ShapeGeometry", _this.parameters = { shapes: t, curveSegments: e };
            var n = [], i = [], r = [], o = [];
            var s = 0, a = 0;
            if (!1 === Array.isArray(t))
                l(t);
            else
                for (var e_150 = 0; e_150 < t.length; e_150++)
                    l(t[e_150]), _this.addGroup(s, a, e_150), s += a, a = 0;
            function l(t) { var s = i.length / 3, l = t.extractPoints(e); var c = l.shape; var h = l.holes; !1 === Jo.isClockWise(c) && (c = c.reverse()); for (var t_183 = 0, e_151 = h.length; t_183 < e_151; t_183++) {
                var e_152 = h[t_183];
                !0 === Jo.isClockWise(e_152) && (h[t_183] = e_152.reverse());
            } var u = Jo.triangulateShape(c, h); for (var t_184 = 0, e_153 = h.length; t_184 < e_153; t_184++) {
                var e_154 = h[t_184];
                c = c.concat(e_154);
            } for (var t_185 = 0, e_155 = c.length; t_185 < e_155; t_185++) {
                var e_156 = c[t_185];
                i.push(e_156.x, e_156.y, 0), r.push(0, 0, 1), o.push(e_156.x, e_156.y);
            } for (var t_186 = 0, e_157 = u.length; t_186 < e_157; t_186++) {
                var e_158 = u[t_186], i_121 = e_158[0] + s, r_96 = e_158[1] + s, o_46 = e_158[2] + s;
                n.push(i_121, r_96, o_46), a += 3;
            } }
            _this.setIndex(n), _this.setAttribute("position", new Me(i, 3)), _this.setAttribute("normal", new Me(r, 3)), _this.setAttribute("uv", new Me(o, 2));
            return _this;
        }
        es.prototype.toJSON = function () { var t = Ie.prototype.toJSON.call(this); return function (t, e) { if (e.shapes = [], Array.isArray(t))
            for (var n_137 = 0, i_122 = t.length; n_137 < i_122; n_137++) {
                var i_123 = t[n_137];
                e.shapes.push(i_123.uuid);
            }
        else
            e.shapes.push(t.uuid); return e; }(this.parameters.shapes, t); };
        return es;
    }(Ie));
    (/** @class */ (function (_super) {
        __extends(class_8, _super);
        function class_8(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "ShadowMaterial", _this.color = new he(0), _this.transparent = !0, _this.setValues(t);
            return _this;
        }
        class_8.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this; };
        return class_8;
    }(ie))).prototype.isShadowMaterial = !0;
    function ns(t) { ie.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new he(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new P(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(t); }
    function is(t) { ns.call(this), this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new P(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", { get: function () { return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity); }, set: function (t) { this.reflectivity = R.clamp(2.5 * (t - 1) / (t + 1), 0, 1); } }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t); }
    (/** @class */ (function (_super) {
        __extends(class_9, _super);
        function class_9(t) {
            var _this = this;
            _this = _super.call(this, t) || this, _this.type = "RawShaderMaterial";
            return _this;
        }
        return class_9;
    }(rn))).prototype.isRawShaderMaterial = !0, ns.prototype = Object.create(ie.prototype), ns.prototype.constructor = ns, ns.prototype.isMeshStandardMaterial = !0, ns.prototype.copy = function (t) { return ie.prototype.copy.call(this, t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this; }, is.prototype = Object.create(ns.prototype), is.prototype.constructor = is, is.prototype.isMeshPhysicalMaterial = !0, is.prototype.copy = function (t) { return ns.prototype.copy.call(this, t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new he).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this; };
    var rs = /** @class */ (function (_super) {
        __extends(rs, _super);
        function rs(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshPhongMaterial", _this.color = new he(16777215), _this.specular = new he(1118481), _this.shininess = 30, _this.map = null, _this.lightMap = null, _this.lightMapIntensity = 1, _this.aoMap = null, _this.aoMapIntensity = 1, _this.emissive = new he(0), _this.emissiveIntensity = 1, _this.emissiveMap = null, _this.bumpMap = null, _this.bumpScale = 1, _this.normalMap = null, _this.normalMapType = 0, _this.normalScale = new P(1, 1), _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.specularMap = null, _this.alphaMap = null, _this.envMap = null, _this.combine = 0, _this.reflectivity = 1, _this.refractionRatio = .98, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.wireframeLinecap = "round", _this.wireframeLinejoin = "round", _this.skinning = !1, _this.morphTargets = !1, _this.morphNormals = !1, _this.flatShading = !1, _this.setValues(t);
            return _this;
        }
        rs.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this; };
        return rs;
    }(ie));
    rs.prototype.isMeshPhongMaterial = !0;
    (/** @class */ (function (_super) {
        __extends(class_10, _super);
        function class_10(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.defines = { TOON: "" }, _this.type = "MeshToonMaterial", _this.color = new he(16777215), _this.map = null, _this.gradientMap = null, _this.lightMap = null, _this.lightMapIntensity = 1, _this.aoMap = null, _this.aoMapIntensity = 1, _this.emissive = new he(0), _this.emissiveIntensity = 1, _this.emissiveMap = null, _this.bumpMap = null, _this.bumpScale = 1, _this.normalMap = null, _this.normalMapType = 0, _this.normalScale = new P(1, 1), _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.alphaMap = null, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.wireframeLinecap = "round", _this.wireframeLinejoin = "round", _this.skinning = !1, _this.morphTargets = !1, _this.morphNormals = !1, _this.setValues(t);
            return _this;
        }
        class_10.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this; };
        return class_10;
    }(ie))).prototype.isMeshToonMaterial = !0;
    (/** @class */ (function (_super) {
        __extends(class_11, _super);
        function class_11(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshNormalMaterial", _this.bumpMap = null, _this.bumpScale = 1, _this.normalMap = null, _this.normalMapType = 0, _this.normalScale = new P(1, 1), _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.fog = !1, _this.skinning = !1, _this.morphTargets = !1, _this.morphNormals = !1, _this.flatShading = !1, _this.setValues(t);
            return _this;
        }
        class_11.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this; };
        return class_11;
    }(ie))).prototype.isMeshNormalMaterial = !0;
    (/** @class */ (function (_super) {
        __extends(class_12, _super);
        function class_12(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "MeshLambertMaterial", _this.color = new he(16777215), _this.map = null, _this.lightMap = null, _this.lightMapIntensity = 1, _this.aoMap = null, _this.aoMapIntensity = 1, _this.emissive = new he(0), _this.emissiveIntensity = 1, _this.emissiveMap = null, _this.specularMap = null, _this.alphaMap = null, _this.envMap = null, _this.combine = 0, _this.reflectivity = 1, _this.refractionRatio = .98, _this.wireframe = !1, _this.wireframeLinewidth = 1, _this.wireframeLinecap = "round", _this.wireframeLinejoin = "round", _this.skinning = !1, _this.morphTargets = !1, _this.morphNormals = !1, _this.setValues(t);
            return _this;
        }
        class_12.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this; };
        return class_12;
    }(ie))).prototype.isMeshLambertMaterial = !0;
    (/** @class */ (function (_super) {
        __extends(class_13, _super);
        function class_13(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.defines = { MATCAP: "" }, _this.type = "MeshMatcapMaterial", _this.color = new he(16777215), _this.matcap = null, _this.map = null, _this.bumpMap = null, _this.bumpScale = 1, _this.normalMap = null, _this.normalMapType = 0, _this.normalScale = new P(1, 1), _this.displacementMap = null, _this.displacementScale = 1, _this.displacementBias = 0, _this.alphaMap = null, _this.skinning = !1, _this.morphTargets = !1, _this.morphNormals = !1, _this.flatShading = !1, _this.setValues(t);
            return _this;
        }
        class_13.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this; };
        return class_13;
    }(ie))).prototype.isMeshMatcapMaterial = !0;
    (/** @class */ (function (_super) {
        __extends(class_14, _super);
        function class_14(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "LineDashedMaterial", _this.scale = 1, _this.dashSize = 3, _this.gapSize = 1, _this.setValues(t);
            return _this;
        }
        class_14.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this; };
        return class_14;
    }(so))).prototype.isLineDashedMaterial = !0;
    var os = { arraySlice: function (t, e, n) { return os.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n); }, convertArray: function (t, e, n) { return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t); }, isTypedArray: function (t) { return ArrayBuffer.isView(t) && !(t instanceof DataView); }, getKeyframeOrder: function (t) { var e = t.length, n = new Array(e); for (var t_187 = 0; t_187 !== e; ++t_187)
            n[t_187] = t_187; return n.sort((function (e, n) { return t[e] - t[n]; })), n; }, sortedArray: function (t, e, n) { var i = t.length, r = new t.constructor(i); for (var o_47 = 0, s_32 = 0; s_32 !== i; ++o_47) {
            var i_124 = n[o_47] * e;
            for (var n_138 = 0; n_138 !== e; ++n_138)
                r[s_32++] = t[i_124 + n_138];
        } return r; }, flattenJSON: function (t, e, n, i) { var r = 1, o = t[0]; for (; void 0 !== o && void 0 === o[i];)
            o = t[r++]; if (void 0 === o)
            return; var s = o[i]; if (void 0 !== s)
            if (Array.isArray(s))
                do {
                    s = o[i], void 0 !== s && (e.push(o.time), n.push.apply(n, s)), o = t[r++];
                } while (void 0 !== o);
            else if (void 0 !== s.toArray)
                do {
                    s = o[i], void 0 !== s && (e.push(o.time), s.toArray(n, n.length)), o = t[r++];
                } while (void 0 !== o);
            else
                do {
                    s = o[i], void 0 !== s && (e.push(o.time), n.push(s)), o = t[r++];
                } while (void 0 !== o); }, subclip: function (t, e, n, i, r) {
            if (r === void 0) { r = 30; }
            var o = t.clone();
            o.name = e;
            var s = [];
            for (var t_188 = 0; t_188 < o.tracks.length; ++t_188) {
                var e_159 = o.tracks[t_188], a_22 = e_159.getValueSize(), l_17 = [], c_13 = [];
                for (var t_189 = 0; t_189 < e_159.times.length; ++t_189) {
                    var o_48 = e_159.times[t_189] * r;
                    if (!(o_48 < n || o_48 >= i)) {
                        l_17.push(e_159.times[t_189]);
                        for (var n_139 = 0; n_139 < a_22; ++n_139)
                            c_13.push(e_159.values[t_189 * a_22 + n_139]);
                    }
                }
                0 !== l_17.length && (e_159.times = os.convertArray(l_17, e_159.times.constructor), e_159.values = os.convertArray(c_13, e_159.values.constructor), s.push(e_159));
            }
            o.tracks = s;
            var a = 1 / 0;
            for (var t_190 = 0; t_190 < o.tracks.length; ++t_190)
                a > o.tracks[t_190].times[0] && (a = o.tracks[t_190].times[0]);
            for (var t_191 = 0; t_191 < o.tracks.length; ++t_191)
                o.tracks[t_191].shift(-1 * a);
            return o.resetDuration(), o;
        }, makeClipAdditive: function (t, e, n, i) {
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = t; }
            if (i === void 0) { i = 30; }
            i <= 0 && (i = 30);
            var r = n.tracks.length, o = e / i;
            var _loop_1 = function (e_160) {
                var i_125 = n.tracks[e_160], r_97 = i_125.ValueTypeName;
                if ("bool" === r_97 || "string" === r_97)
                    return "continue";
                var s_33 = t.tracks.find((function (t) { return t.name === i_125.name && t.ValueTypeName === r_97; }));
                if (void 0 === s_33)
                    return "continue";
                var a_23 = 0;
                var l_18 = i_125.getValueSize();
                i_125.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (a_23 = l_18 / 3);
                var c_14 = 0;
                var h_7 = s_33.getValueSize();
                s_33.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c_14 = h_7 / 3);
                var u_12 = i_125.times.length - 1;
                var d_13 = void 0;
                if (o <= i_125.times[0]) {
                    var t_192 = a_23, e_161 = l_18 - a_23;
                    d_13 = os.arraySlice(i_125.values, t_192, e_161);
                }
                else if (o >= i_125.times[u_12]) {
                    var t_193 = u_12 * l_18 + a_23, e_162 = t_193 + l_18 - a_23;
                    d_13 = os.arraySlice(i_125.values, t_193, e_162);
                }
                else {
                    var t_194 = i_125.createInterpolant(), e_163 = a_23, n_140 = l_18 - a_23;
                    t_194.evaluate(o), d_13 = os.arraySlice(t_194.resultBuffer, e_163, n_140);
                }
                "quaternion" === r_97 && (new U).fromArray(d_13).normalize().conjugate().toArray(d_13);
                var p_8 = s_33.times.length;
                for (var t_195 = 0; t_195 < p_8; ++t_195) {
                    var e_164 = t_195 * h_7 + c_14;
                    if ("quaternion" === r_97)
                        U.multiplyQuaternionsFlat(s_33.values, e_164, d_13, 0, s_33.values, e_164);
                    else {
                        var t_196 = h_7 - 2 * c_14;
                        for (var n_141 = 0; n_141 < t_196; ++n_141)
                            s_33.values[e_164 + n_141] -= d_13[n_141];
                    }
                }
            };
            for (var e_160 = 0; e_160 < r; ++e_160) {
                _loop_1(e_160);
            }
            return t.blendMode = 2501, t;
        } };
    function ss(t, e, n, i) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n; }
    function as(t, e, n, i) { ss.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0; }
    function ls(t, e, n, i) { ss.call(this, t, e, n, i); }
    function cs(t, e, n, i) { ss.call(this, t, e, n, i); }
    Object.assign(ss.prototype, { evaluate: function (t) { var e = this.parameterPositions; var n = this._cachedIndex, i = e[n], r = e[n - 1]; t: {
            e: {
                var o_49;
                n: {
                    i: if (!(t < i)) {
                        for (var o_50 = n + 2;;) {
                            if (void 0 === i) {
                                if (t < r)
                                    break i;
                                return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r);
                            }
                            if (n === o_50)
                                break;
                            if (r = i, i = e[++n], t < i)
                                break e;
                        }
                        o_49 = e.length;
                        break n;
                    }
                    if (t >= r)
                        break t;
                    {
                        var s_34 = e[1];
                        t < s_34 && (n = 2, r = s_34);
                        for (var o_51 = n - 2;;) {
                            if (void 0 === r)
                                return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                            if (n === o_51)
                                break;
                            if (i = r, r = e[--n - 1], t >= r)
                                break e;
                        }
                        o_49 = n, n = 0;
                    }
                }
                for (; n < o_49;) {
                    var i_126 = n + o_49 >>> 1;
                    t < e[i_126] ? o_49 = i_126 : n = i_126 + 1;
                }
                if (i = e[n], r = e[n - 1], void 0 === r)
                    return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                if (void 0 === i)
                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t);
            }
            this._cachedIndex = n, this.intervalChanged_(n, r, i);
        } return this.interpolate_(n, r, t, i); }, settings: null, DefaultSettings_: {}, getSettings_: function () { return this.settings || this.DefaultSettings_; }, copySampleValue_: function (t) { var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i; for (var t_197 = 0; t_197 !== i; ++t_197)
            e[t_197] = n[r + t_197]; return e; }, interpolate_: function () { throw new Error("call to abstract method"); }, intervalChanged_: function () { } }), Object.assign(ss.prototype, { beforeStart_: ss.prototype.copySampleValue_, afterEnd_: ss.prototype.copySampleValue_ }), as.prototype = Object.assign(Object.create(ss.prototype), { constructor: as, DefaultSettings_: { endingStart: y, endingEnd: y }, intervalChanged_: function (t, e, n) { var i = this.parameterPositions; var r = t - 2, o = t + 1, s = i[r], a = i[o]; if (void 0 === s)
            switch (this.getSettings_().endingStart) {
                case x:
                    r = t, s = 2 * e - n;
                    break;
                case b:
                    r = i.length - 2, s = e + i[r] - i[r + 1];
                    break;
                default: r = t, s = n;
            } if (void 0 === a)
            switch (this.getSettings_().endingEnd) {
                case x:
                    o = t, a = 2 * n - e;
                    break;
                case b:
                    o = 1, a = n + i[1] - i[0];
                    break;
                default: o = t - 1, a = e;
            } var l = .5 * (n - e), c = this.valueSize; this._weightPrev = l / (e - s), this._weightNext = l / (a - n), this._offsetPrev = r * c, this._offsetNext = o * c; }, interpolate_: function (t, e, n, i) { var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, a = t * s, l = a - s, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, _ = (-1 - d) * m + (1.5 + d) * f + .5 * p, y = d * m - d * f; for (var t_198 = 0; t_198 !== s; ++t_198)
            r[t_198] = g * o[c + t_198] + v * o[l + t_198] + _ * o[a + t_198] + y * o[h + t_198]; return r; } }), ls.prototype = Object.assign(Object.create(ss.prototype), { constructor: ls, interpolate_: function (t, e, n, i) { var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, a = t * s, l = a - s, c = (n - e) / (i - e), h = 1 - c; for (var t_199 = 0; t_199 !== s; ++t_199)
            r[t_199] = o[l + t_199] * h + o[a + t_199] * c; return r; } }), cs.prototype = Object.assign(Object.create(ss.prototype), { constructor: cs, interpolate_: function (t) { return this.copySampleValue_(t - 1); } });
    var hs = /** @class */ (function () {
        function hs(t, e, n, i) {
            if (void 0 === t)
                throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length)
                throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = os.convertArray(e, this.TimeBufferType), this.values = os.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        hs.toJSON = function (t) { var e = t.constructor; var n; if (e.toJSON !== this.toJSON)
            n = e.toJSON(t);
        else {
            n = { name: t.name, times: os.convertArray(t.times, Array), values: os.convertArray(t.values, Array) };
            var e_165 = t.getInterpolation();
            e_165 !== t.DefaultInterpolation && (n.interpolation = e_165);
        } return n.type = t.ValueTypeName, n; };
        hs.prototype.InterpolantFactoryMethodDiscrete = function (t) { return new cs(this.times, this.values, this.getValueSize(), t); };
        hs.prototype.InterpolantFactoryMethodLinear = function (t) { return new ls(this.times, this.values, this.getValueSize(), t); };
        hs.prototype.InterpolantFactoryMethodSmooth = function (t) { return new as(this.times, this.values, this.getValueSize(), t); };
        hs.prototype.setInterpolation = function (t) { var e; switch (t) {
            case g:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case v:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case _: e = this.InterpolantFactoryMethodSmooth;
        } if (void 0 === e) {
            var e_166 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation)
                    throw new Error(e_166);
                this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", e_166), this;
        } return this.createInterpolant = e, this; };
        hs.prototype.getInterpolation = function () { switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete: return g;
            case this.InterpolantFactoryMethodLinear: return v;
            case this.InterpolantFactoryMethodSmooth: return _;
        } };
        hs.prototype.getValueSize = function () { return this.values.length / this.times.length; };
        hs.prototype.shift = function (t) { if (0 !== t) {
            var e_167 = this.times;
            for (var n_142 = 0, i_127 = e_167.length; n_142 !== i_127; ++n_142)
                e_167[n_142] += t;
        } return this; };
        hs.prototype.scale = function (t) { if (1 !== t) {
            var e_168 = this.times;
            for (var n_143 = 0, i_128 = e_168.length; n_143 !== i_128; ++n_143)
                e_168[n_143] *= t;
        } return this; };
        hs.prototype.trim = function (t, e) { var n = this.times, i = n.length; var r = 0, o = i - 1; for (; r !== i && n[r] < t;)
            ++r; for (; -1 !== o && n[o] > e;)
            --o; if (++o, 0 !== r || o !== i) {
            r >= o && (o = Math.max(o, 1), r = o - 1);
            var t_200 = this.getValueSize();
            this.times = os.arraySlice(n, r, o), this.values = os.arraySlice(this.values, r * t_200, o * t_200);
        } return this; };
        hs.prototype.validate = function () { var t = !0; var e = this.getValueSize(); e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); var n = this.times, i = this.values, r = n.length; 0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); var o = null; for (var e_169 = 0; e_169 !== r; e_169++) {
            var i_129 = n[e_169];
            if ("number" == typeof i_129 && isNaN(i_129)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e_169, i_129), t = !1;
                break;
            }
            if (null !== o && o > i_129) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, e_169, i_129, o), t = !1;
                break;
            }
            o = i_129;
        } if (void 0 !== i && os.isTypedArray(i))
            for (var e_170 = 0, n_144 = i.length; e_170 !== n_144; ++e_170) {
                var n_145 = i[e_170];
                if (isNaN(n_145)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e_170, n_145), t = !1;
                    break;
                }
            } return t; };
        hs.prototype.optimize = function () { var t = os.arraySlice(this.times), e = os.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === _, r = t.length - 1; var o = 1; for (var s_35 = 1; s_35 < r; ++s_35) {
            var r_98 = !1;
            var a_24 = t[s_35];
            if (a_24 !== t[s_35 + 1] && (1 !== s_35 || a_24 !== t[0]))
                if (i)
                    r_98 = !0;
                else {
                    var t_201 = s_35 * n, i_130 = t_201 - n, o_52 = t_201 + n;
                    for (var s_36 = 0; s_36 !== n; ++s_36) {
                        var n_146 = e[t_201 + s_36];
                        if (n_146 !== e[i_130 + s_36] || n_146 !== e[o_52 + s_36]) {
                            r_98 = !0;
                            break;
                        }
                    }
                }
            if (r_98) {
                if (s_35 !== o) {
                    t[o] = t[s_35];
                    var i_131 = s_35 * n, r_99 = o * n;
                    for (var t_202 = 0; t_202 !== n; ++t_202)
                        e[r_99 + t_202] = e[i_131 + t_202];
                }
                ++o;
            }
        } if (r > 0) {
            t[o] = t[r];
            for (var t_203 = r * n, i_132 = o * n, s_37 = 0; s_37 !== n; ++s_37)
                e[i_132 + s_37] = e[t_203 + s_37];
            ++o;
        } return o !== t.length ? (this.times = os.arraySlice(t, 0, o), this.values = os.arraySlice(e, 0, o * n)) : (this.times = t, this.values = e), this; };
        hs.prototype.clone = function () { var t = os.arraySlice(this.times, 0), e = os.arraySlice(this.values, 0), n = new (0, this.constructor)(this.name, t, e); return n.createInterpolant = this.createInterpolant, n; };
        return hs;
    }());
    hs.prototype.TimeBufferType = Float32Array, hs.prototype.ValueBufferType = Float32Array, hs.prototype.DefaultInterpolation = v;
    var us = /** @class */ (function (_super) {
        __extends(us, _super);
        function us() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return us;
    }(hs));
    us.prototype.ValueTypeName = "bool", us.prototype.ValueBufferType = Array, us.prototype.DefaultInterpolation = g, us.prototype.InterpolantFactoryMethodLinear = void 0, us.prototype.InterpolantFactoryMethodSmooth = void 0;
    var ds = /** @class */ (function (_super) {
        __extends(ds, _super);
        function ds() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ds;
    }(hs));
    ds.prototype.ValueTypeName = "color";
    var ps = /** @class */ (function (_super) {
        __extends(ps, _super);
        function ps() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ps;
    }(hs));
    function fs(t, e, n, i) { ss.call(this, t, e, n, i); }
    ps.prototype.ValueTypeName = "number", fs.prototype = Object.assign(Object.create(ss.prototype), { constructor: fs, interpolate_: function (t, e, n, i) { var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, a = (n - e) / (i - e); var l = t * s; for (var t_204 = l + s; l !== t_204; l += 4)
            U.slerpFlat(r, 0, o, l - s, o, l, a); return r; } });
    var ms = /** @class */ (function (_super) {
        __extends(ms, _super);
        function ms() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ms.prototype.InterpolantFactoryMethodLinear = function (t) { return new fs(this.times, this.values, this.getValueSize(), t); };
        return ms;
    }(hs));
    ms.prototype.ValueTypeName = "quaternion", ms.prototype.DefaultInterpolation = v, ms.prototype.InterpolantFactoryMethodSmooth = void 0;
    var gs = /** @class */ (function (_super) {
        __extends(gs, _super);
        function gs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return gs;
    }(hs));
    gs.prototype.ValueTypeName = "string", gs.prototype.ValueBufferType = Array, gs.prototype.DefaultInterpolation = g, gs.prototype.InterpolantFactoryMethodLinear = void 0, gs.prototype.InterpolantFactoryMethodSmooth = void 0;
    var vs = /** @class */ (function (_super) {
        __extends(vs, _super);
        function vs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return vs;
    }(hs));
    vs.prototype.ValueTypeName = "vector";
    var _s = /** @class */ (function () {
        function _s(t, e, n, i) {
            if (e === void 0) { e = -1; }
            if (i === void 0) { i = 2500; }
            this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = R.generateUUID(), this.duration < 0 && this.resetDuration();
        }
        _s.parse = function (t) { var e = [], n = t.tracks, i = 1 / (t.fps || 1); for (var t_205 = 0, r_100 = n.length; t_205 !== r_100; ++t_205)
            e.push(ys(n[t_205]).scale(i)); var r = new this(t.name, t.duration, e, t.blendMode); return r.uuid = t.uuid, r; };
        _s.toJSON = function (t) { var e = [], n = t.tracks, i = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode }; for (var t_206 = 0, i_133 = n.length; t_206 !== i_133; ++t_206)
            e.push(hs.toJSON(n[t_206])); return i; };
        _s.CreateFromMorphTargetSequence = function (t, e, n, i) { var r = e.length, o = []; for (var t_207 = 0; t_207 < r; t_207++) {
            var s_38 = [], a_25 = [];
            s_38.push((t_207 + r - 1) % r, t_207, (t_207 + 1) % r), a_25.push(0, 1, 0);
            var l_19 = os.getKeyframeOrder(s_38);
            s_38 = os.sortedArray(s_38, 1, l_19), a_25 = os.sortedArray(a_25, 1, l_19), i || 0 !== s_38[0] || (s_38.push(r), a_25.push(a_25[0])), o.push(new ps(".morphTargetInfluences[" + e[t_207].name + "]", s_38, a_25).scale(1 / n));
        } return new this(t, -1, o); };
        _s.findByName = function (t, e) { var n = t; if (!Array.isArray(t)) {
            var e_171 = t;
            n = e_171.geometry && e_171.geometry.animations || e_171.animations;
        } for (var t_208 = 0; t_208 < n.length; t_208++)
            if (n[t_208].name === e)
                return n[t_208]; return null; };
        _s.CreateClipsFromMorphTargetSequences = function (t, e, n) { var i = {}, r = /^([\w-]*?)([\d]+)$/; for (var e_172 = 0, n_147 = t.length; e_172 < n_147; e_172++) {
            var n_148 = t[e_172], o_53 = n_148.name.match(r);
            if (o_53 && o_53.length > 1) {
                var t_209 = o_53[1];
                var e_173 = i[t_209];
                e_173 || (i[t_209] = e_173 = []), e_173.push(n_148);
            }
        } var o = []; for (var t_210 in i)
            o.push(this.CreateFromMorphTargetSequence(t_210, i[t_210], e, n)); return o; };
        _s.parseAnimation = function (t, e) { if (!t)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; var n = function (t, e, n, i, r) { if (0 !== n.length) {
            var o_54 = [], s_39 = [];
            os.flattenJSON(n, o_54, s_39, i), 0 !== o_54.length && r.push(new t(e, o_54, s_39));
        } }, i = [], r = t.name || "default", o = t.fps || 30, s = t.blendMode; var a = t.length || -1; var l = t.hierarchy || []; for (var t_211 = 0; t_211 < l.length; t_211++) {
            var r_101 = l[t_211].keys;
            if (r_101 && 0 !== r_101.length)
                if (r_101[0].morphTargets) {
                    var t_212 = {};
                    var e_174 = void 0;
                    for (e_174 = 0; e_174 < r_101.length; e_174++)
                        if (r_101[e_174].morphTargets)
                            for (var n_149 = 0; n_149 < r_101[e_174].morphTargets.length; n_149++)
                                t_212[r_101[e_174].morphTargets[n_149]] = -1;
                    for (var n_150 in t_212) {
                        var t_213 = [], o_55 = [];
                        for (var i_134 = 0; i_134 !== r_101[e_174].morphTargets.length; ++i_134) {
                            var i_135 = r_101[e_174];
                            t_213.push(i_135.time), o_55.push(i_135.morphTarget === n_150 ? 1 : 0);
                        }
                        i.push(new ps(".morphTargetInfluence[" + n_150 + "]", t_213, o_55));
                    }
                    a = t_212.length * (o || 1);
                }
                else {
                    var o_56 = ".bones[" + e[t_211].name + "]";
                    n(vs, o_56 + ".position", r_101, "pos", i), n(ms, o_56 + ".quaternion", r_101, "rot", i), n(vs, o_56 + ".scale", r_101, "scl", i);
                }
        } return 0 === i.length ? null : new this(r, a, i, s); };
        _s.prototype.resetDuration = function () { var t = 0; for (var e_175 = 0, n_151 = this.tracks.length; e_175 !== n_151; ++e_175) {
            var n_152 = this.tracks[e_175];
            t = Math.max(t, n_152.times[n_152.times.length - 1]);
        } return this.duration = t, this; };
        _s.prototype.trim = function () { for (var t_214 = 0; t_214 < this.tracks.length; t_214++)
            this.tracks[t_214].trim(0, this.duration); return this; };
        _s.prototype.validate = function () { var t = !0; for (var e_176 = 0; e_176 < this.tracks.length; e_176++)
            t = t && this.tracks[e_176].validate(); return t; };
        _s.prototype.optimize = function () { for (var t_215 = 0; t_215 < this.tracks.length; t_215++)
            this.tracks[t_215].optimize(); return this; };
        _s.prototype.clone = function () { var t = []; for (var e_177 = 0; e_177 < this.tracks.length; e_177++)
            t.push(this.tracks[e_177].clone()); return new this.constructor(this.name, this.duration, t, this.blendMode); };
        _s.prototype.toJSON = function () { return this.constructor.toJSON(this); };
        return _s;
    }());
    function ys(t) { if (void 0 === t.type)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); var e = function (t) { switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer": return ps;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4": return vs;
        case "color": return ds;
        case "quaternion": return ms;
        case "bool":
        case "boolean": return us;
        case "string": return gs;
    } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t); }(t.type); if (void 0 === t.times) {
        var e_178 = [], n_153 = [];
        os.flattenJSON(t.keys, e_178, n_153, "value"), t.times = e_178, t.values = n_153;
    } return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation); }
    var xs = { enabled: !1, files: {}, add: function (t, e) { !1 !== this.enabled && (this.files[t] = e); }, get: function (t) { if (!1 !== this.enabled)
            return this.files[t]; }, remove: function (t) { delete this.files[t]; }, clear: function () { this.files = {}; } };
    var bs = new function (t, e, n) { var i = this; var r, o = !1, s = 0, a = 0; var l = []; this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) { a++, !1 === o && void 0 !== i.onStart && i.onStart(t, s, a), o = !0; }, this.itemEnd = function (t) { s++, void 0 !== i.onProgress && i.onProgress(t, s, a), s === a && (o = !1, void 0 !== i.onLoad && i.onLoad()); }, this.itemError = function (t) { void 0 !== i.onError && i.onError(t); }, this.resolveURL = function (t) { return r ? r(t) : t; }, this.setURLModifier = function (t) { return r = t, this; }, this.addHandler = function (t, e) { return l.push(t, e), this; }, this.removeHandler = function (t) { var e = l.indexOf(t); return -1 !== e && l.splice(e, 2), this; }, this.getHandler = function (t) { for (var e_179 = 0, n_154 = l.length; e_179 < n_154; e_179 += 2) {
        var n_155 = l[e_179], i_136 = l[e_179 + 1];
        if (n_155.global && (n_155.lastIndex = 0), n_155.test(t))
            return i_136;
    } return null; }; };
    function ws(t) { this.manager = void 0 !== t ? t : bs, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}; }
    Object.assign(ws.prototype, { load: function () { }, loadAsync: function (t, e) { var n = this; return new Promise((function (i, r) { n.load(t, i, e, r); })); }, parse: function () { }, setCrossOrigin: function (t) { return this.crossOrigin = t, this; }, setWithCredentials: function (t) { return this.withCredentials = t, this; }, setPath: function (t) { return this.path = t, this; }, setResourcePath: function (t) { return this.resourcePath = t, this; }, setRequestHeader: function (t) { return this.requestHeader = t, this; } });
    var Ms = {};
    function Ss(t) { ws.call(this, t); }
    function Es(t) { ws.call(this, t); }
    Ss.prototype = Object.assign(Object.create(ws.prototype), { constructor: Ss, load: function (t, e, n, i) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this, o = xs.get(t); if (void 0 !== o)
            return r.manager.itemStart(t), setTimeout((function () { e && e(o), r.manager.itemEnd(t); }), 0), o; if (void 0 !== Ms[t])
            return void Ms[t].push({ onLoad: e, onProgress: n, onError: i }); var s = t.match(/^data:(.*?)(;base64)?,(.*)$/); var a; if (s) {
            var n_156 = s[1], o_57 = !!s[2];
            var a_26 = s[3];
            a_26 = decodeURIComponent(a_26), o_57 && (a_26 = atob(a_26));
            try {
                var i_137;
                var o_58 = (this.responseType || "").toLowerCase();
                switch (o_58) {
                    case "arraybuffer":
                    case "blob":
                        var t_216 = new Uint8Array(a_26.length);
                        for (var e_180 = 0; e_180 < a_26.length; e_180++)
                            t_216[e_180] = a_26.charCodeAt(e_180);
                        i_137 = "blob" === o_58 ? new Blob([t_216.buffer], { type: n_156 }) : t_216.buffer;
                        break;
                    case "document":
                        var e_181 = new DOMParser;
                        i_137 = e_181.parseFromString(a_26, n_156);
                        break;
                    case "json":
                        i_137 = JSON.parse(a_26);
                        break;
                    default: i_137 = a_26;
                }
                setTimeout((function () { e && e(i_137), r.manager.itemEnd(t); }), 0);
            }
            catch (e) {
                setTimeout((function () { i && i(e), r.manager.itemError(t), r.manager.itemEnd(t); }), 0);
            }
        }
        else {
            Ms[t] = [], Ms[t].push({ onLoad: e, onProgress: n, onError: i }), a = new XMLHttpRequest, a.open("GET", t, !0), a.addEventListener("load", (function (e) { var n = this.response, i = Ms[t]; if (delete Ms[t], 200 === this.status || 0 === this.status) {
                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), xs.add(t, n);
                for (var t_217 = 0, e_182 = i.length; t_217 < e_182; t_217++) {
                    var e_183 = i[t_217];
                    e_183.onLoad && e_183.onLoad(n);
                }
                r.manager.itemEnd(t);
            }
            else {
                for (var t_218 = 0, n_157 = i.length; t_218 < n_157; t_218++) {
                    var n_158 = i[t_218];
                    n_158.onError && n_158.onError(e);
                }
                r.manager.itemError(t), r.manager.itemEnd(t);
            } }), !1), a.addEventListener("progress", (function (e) { var n = Ms[t]; for (var t_219 = 0, i_138 = n.length; t_219 < i_138; t_219++) {
                var i_139 = n[t_219];
                i_139.onProgress && i_139.onProgress(e);
            } }), !1), a.addEventListener("error", (function (e) { var n = Ms[t]; delete Ms[t]; for (var t_220 = 0, i_140 = n.length; t_220 < i_140; t_220++) {
                var i_141 = n[t_220];
                i_141.onError && i_141.onError(e);
            } r.manager.itemError(t), r.manager.itemEnd(t); }), !1), a.addEventListener("abort", (function (e) { var n = Ms[t]; delete Ms[t]; for (var t_221 = 0, i_142 = n.length; t_221 < i_142; t_221++) {
                var i_143 = n[t_221];
                i_143.onError && i_143.onError(e);
            } r.manager.itemError(t), r.manager.itemEnd(t); }), !1), void 0 !== this.responseType && (a.responseType = this.responseType), void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials), a.overrideMimeType && a.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
            for (var t_222 in this.requestHeader)
                a.setRequestHeader(t_222, this.requestHeader[t_222]);
            a.send(null);
        } return r.manager.itemStart(t), a; }, setResponseType: function (t) { return this.responseType = t, this; }, setMimeType: function (t) { return this.mimeType = t, this; } }), Es.prototype = Object.assign(Object.create(ws.prototype), { constructor: Es, load: function (t, e, n, i) { var r = this, s = [], a = new So, l = new Ss(this.manager); l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(r.withCredentials); var c = 0; function h(h) { l.load(t[h], (function (t) { var n = r.parse(t, !0); s[h] = { width: n.width, height: n.height, format: n.format, mipmaps: n.mipmaps }, c += 1, 6 === c && (1 === n.mipmapCount && (a.minFilter = o), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a)); }), n, i); } if (Array.isArray(t))
            for (var e_184 = 0, n_159 = t.length; e_184 < n_159; ++e_184)
                h(e_184);
        else
            l.load(t, (function (t) { var n = r.parse(t, !0); if (n.isCubemap) {
                var t_223 = n.mipmaps.length / n.mipmapCount;
                for (var e_185 = 0; e_185 < t_223; e_185++) {
                    s[e_185] = { mipmaps: [] };
                    for (var t_224 = 0; t_224 < n.mipmapCount; t_224++)
                        s[e_185].mipmaps.push(n.mipmaps[e_185 * n.mipmapCount + t_224]), s[e_185].format = n.format, s[e_185].width = n.width, s[e_185].height = n.height;
                }
                a.image = s;
            }
            else
                a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps; 1 === n.mipmapCount && (a.minFilter = o), a.format = n.format, a.needsUpdate = !0, e && e(a); }), n, i); return a; } });
    var Ts = /** @class */ (function (_super) {
        __extends(Ts, _super);
        function Ts(t) {
            return _super.call(this, t) || this;
        }
        Ts.prototype.load = function (t, e, n, i) { void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this, o = xs.get(t); if (void 0 !== o)
            return r.manager.itemStart(t), setTimeout((function () { e && e(o), r.manager.itemEnd(t); }), 0), o; var s = document.createElementNS("http://www.w3.org/1999/xhtml", "img"); function a() { s.removeEventListener("load", a, !1), s.removeEventListener("error", l, !1), xs.add(t, this), e && e(this), r.manager.itemEnd(t); } function l(e) { s.removeEventListener("load", a, !1), s.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t); } return s.addEventListener("load", a, !1), s.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(t), s.src = t, s; };
        return Ts;
    }(ws));
    var As = /** @class */ (function (_super) {
        __extends(As, _super);
        function As(t) {
            return _super.call(this, t) || this;
        }
        As.prototype.load = function (t, e, n, i) { var r = new cn, o = new Ts(this.manager); o.setCrossOrigin(this.crossOrigin), o.setPath(this.path); var s = 0; function a(n) { o.load(t[n], (function (t) { r.images[n] = t, s++, 6 === s && (r.needsUpdate = !0, e && e(r)); }), void 0, i); } for (var e_186 = 0; e_186 < t.length; ++e_186)
            a(e_186); return r; };
        return As;
    }(ws));
    function Ls(t) { ws.call(this, t); }
    function Cs(t) { ws.call(this, t); }
    function Rs() { this.type = "Curve", this.arcLengthDivisions = 200; }
    Ls.prototype = Object.assign(Object.create(ws.prototype), { constructor: Ls, load: function (t, e, i, r) { var a = this, l = new un, c = new Ss(this.manager); return c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setPath(this.path), c.setWithCredentials(a.withCredentials), c.load(t, (function (t) { var i = a.parse(t); i && (void 0 !== i.image ? l.image = i.image : void 0 !== i.data && (l.image.width = i.width, l.image.height = i.height, l.image.data = i.data), l.wrapS = void 0 !== i.wrapS ? i.wrapS : n, l.wrapT = void 0 !== i.wrapT ? i.wrapT : n, l.magFilter = void 0 !== i.magFilter ? i.magFilter : o, l.minFilter = void 0 !== i.minFilter ? i.minFilter : o, l.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (l.encoding = i.encoding), void 0 !== i.flipY && (l.flipY = i.flipY), void 0 !== i.format && (l.format = i.format), void 0 !== i.type && (l.type = i.type), void 0 !== i.mipmaps && (l.mipmaps = i.mipmaps, l.minFilter = s), 1 === i.mipmapCount && (l.minFilter = o), l.needsUpdate = !0, e && e(l, i)); }), i, r), l; } }), Cs.prototype = Object.assign(Object.create(ws.prototype), { constructor: Cs, load: function (t, e, n, i) { var r = new z, o = new Ts(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, (function (n) { r.image = n; var i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/); r.format = i ? d : p, r.needsUpdate = !0, void 0 !== e && e(r); }), n, i), r; } }), Object.assign(Rs.prototype, { getPoint: function () { return console.warn("THREE.Curve: .getPoint() not implemented."), null; }, getPointAt: function (t, e) { var n = this.getUtoTmapping(t); return this.getPoint(n, e); }, getPoints: function (t) {
            if (t === void 0) { t = 5; }
            var e = [];
            for (var n_160 = 0; n_160 <= t; n_160++)
                e.push(this.getPoint(n_160 / t));
            return e;
        }, getSpacedPoints: function (t) {
            if (t === void 0) { t = 5; }
            var e = [];
            for (var n_161 = 0; n_161 <= t; n_161++)
                e.push(this.getPointAt(n_161 / t));
            return e;
        }, getLength: function () { var t = this.getLengths(); return t[t.length - 1]; }, getLengths: function (t) { if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
            return this.cacheArcLengths; this.needsUpdate = !1; var e = []; var n, i = this.getPoint(0), r = 0; e.push(0); for (var o_59 = 1; o_59 <= t; o_59++)
            n = this.getPoint(o_59 / t), r += n.distanceTo(i), e.push(r), i = n; return this.cacheArcLengths = e, e; }, updateArcLengths: function () { this.needsUpdate = !0, this.getLengths(); }, getUtoTmapping: function (t, e) { var n = this.getLengths(); var i = 0; var r = n.length; var o; o = e || t * n[r - 1]; var s, a = 0, l = r - 1; for (; a <= l;)
            if (i = Math.floor(a + (l - a) / 2), s = n[i] - o, s < 0)
                a = i + 1;
            else {
                if (!(s > 0)) {
                    l = i;
                    break;
                }
                l = i - 1;
            } if (i = l, n[i] === o)
            return i / (r - 1); var c = n[i]; return (i + (o - c) / (n[i + 1] - c)) / (r - 1); }, getTangent: function (t, e) { var n = 1e-4; var i = t - n, r = t + n; i < 0 && (i = 0), r > 1 && (r = 1); var o = this.getPoint(i), s = this.getPoint(r), a = e || (o.isVector2 ? new P : new k); return a.copy(s).sub(o).normalize(), a; }, getTangentAt: function (t, e) { var n = this.getUtoTmapping(t); return this.getTangent(n, e); }, computeFrenetFrames: function (t, e) { var n = new k, i = [], r = [], o = [], s = new k, a = new mt; for (var e_187 = 0; e_187 <= t; e_187++) {
            var n_162 = e_187 / t;
            i[e_187] = this.getTangentAt(n_162, new k), i[e_187].normalize();
        } r[0] = new k, o[0] = new k; var l = Number.MAX_VALUE; var c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z); c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), s.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], s), o[0].crossVectors(i[0], r[0]); for (var e_188 = 1; e_188 <= t; e_188++) {
            if (r[e_188] = r[e_188 - 1].clone(), o[e_188] = o[e_188 - 1].clone(), s.crossVectors(i[e_188 - 1], i[e_188]), s.length() > Number.EPSILON) {
                s.normalize();
                var t_225 = Math.acos(R.clamp(i[e_188 - 1].dot(i[e_188]), -1, 1));
                r[e_188].applyMatrix4(a.makeRotationAxis(s, t_225));
            }
            o[e_188].crossVectors(i[e_188], r[e_188]);
        } if (!0 === e) {
            var e_189 = Math.acos(R.clamp(r[0].dot(r[t]), -1, 1));
            e_189 /= t, i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (e_189 = -e_189);
            for (var n_163 = 1; n_163 <= t; n_163++)
                r[n_163].applyMatrix4(a.makeRotationAxis(i[n_163], e_189 * n_163)), o[n_163].crossVectors(i[n_163], r[n_163]);
        } return { tangents: i, normals: r, binormals: o }; }, clone: function () { return (new this.constructor).copy(this); }, copy: function (t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; }, toJSON: function () { var t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t; }, fromJSON: function (t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; } });
    var Ps = /** @class */ (function (_super) {
        __extends(Ps, _super);
        function Ps(t, e, n, i, r, o, s, a) {
            if (t === void 0) { t = 0; }
            if (e === void 0) { e = 0; }
            if (n === void 0) { n = 1; }
            if (i === void 0) { i = 1; }
            if (r === void 0) { r = 0; }
            if (o === void 0) { o = 2 * Math.PI; }
            if (s === void 0) { s = !1; }
            if (a === void 0) { a = 0; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "EllipseCurve", _this.aX = t, _this.aY = e, _this.xRadius = n, _this.yRadius = i, _this.aStartAngle = r, _this.aEndAngle = o, _this.aClockwise = s, _this.aRotation = a;
            return _this;
        }
        Ps.prototype.getPoint = function (t, e) { var n = e || new P, i = 2 * Math.PI; var r = this.aEndAngle - this.aStartAngle; var o = Math.abs(r) < Number.EPSILON; for (; r < 0;)
            r += i; for (; r > i;)
            r -= i; r < Number.EPSILON && (r = o ? 0 : i), !0 !== this.aClockwise || o || (r === i ? r = -i : r -= i); var s = this.aStartAngle + t * r; var a = this.aX + this.xRadius * Math.cos(s), l = this.aY + this.yRadius * Math.sin(s); if (0 !== this.aRotation) {
            var t_226 = Math.cos(this.aRotation), e_190 = Math.sin(this.aRotation), n_164 = a - this.aX, i_144 = l - this.aY;
            a = n_164 * t_226 - i_144 * e_190 + this.aX, l = n_164 * e_190 + i_144 * t_226 + this.aY;
        } return n.set(a, l); };
        Ps.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; };
        Ps.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t; };
        Ps.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; };
        return Ps;
    }(Rs));
    Ps.prototype.isEllipseCurve = !0;
    var Ds = /** @class */ (function (_super) {
        __extends(Ds, _super);
        function Ds(t, e, n, i, r, o) {
            var _this = this;
            _this = _super.call(this, t, e, n, n, i, r, o) || this, _this.type = "ArcCurve";
            return _this;
        }
        return Ds;
    }(Ps));
    function Is() { var t = 0, e = 0, n = 0, i = 0; function r(r, o, s, a) { t = r, e = s, n = -3 * r + 3 * o - 2 * s - a, i = 2 * r - 2 * o + s + a; } return { initCatmullRom: function (t, e, n, i, o) { r(e, n, o * (n - t), o * (i - e)); }, initNonuniformCatmullRom: function (t, e, n, i, o, s, a) { var l = (e - t) / o - (n - t) / (o + s) + (n - e) / s, c = (n - e) / s - (i - e) / (s + a) + (i - n) / a; l *= s, c *= s, r(e, n, l, c); }, calc: function (r) { var o = r * r; return t + e * r + n * o + i * (o * r); } }; }
    Ds.prototype.isArcCurve = !0;
    var Ns = new k, Os = new Is, zs = new Is, Bs = new Is;
    var Hs = /** @class */ (function (_super) {
        __extends(Hs, _super);
        function Hs(t, e, n, i) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = !1; }
            if (n === void 0) { n = "centripetal"; }
            if (i === void 0) { i = .5; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "CatmullRomCurve3", _this.points = t, _this.closed = e, _this.curveType = n, _this.tension = i;
            return _this;
        }
        Hs.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new k; }
            var n = e, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * t;
            var s, a, l = Math.floor(o), c = o - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? s = i[(l - 1) % r] : (Ns.subVectors(i[0], i[1]).add(i[0]), s = Ns);
            var h = i[l % r], u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? a = i[(l + 2) % r] : (Ns.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), a = Ns), "centripetal" === this.curveType || "chordal" === this.curveType) {
                var t_227 = "chordal" === this.curveType ? .5 : .25;
                var e_191 = Math.pow(s.distanceToSquared(h), t_227), n_165 = Math.pow(h.distanceToSquared(u), t_227), i_145 = Math.pow(u.distanceToSquared(a), t_227);
                n_165 < 1e-4 && (n_165 = 1), e_191 < 1e-4 && (e_191 = n_165), i_145 < 1e-4 && (i_145 = n_165), Os.initNonuniformCatmullRom(s.x, h.x, u.x, a.x, e_191, n_165, i_145), zs.initNonuniformCatmullRom(s.y, h.y, u.y, a.y, e_191, n_165, i_145), Bs.initNonuniformCatmullRom(s.z, h.z, u.z, a.z, e_191, n_165, i_145);
            }
            else
                "catmullrom" === this.curveType && (Os.initCatmullRom(s.x, h.x, u.x, a.x, this.tension), zs.initCatmullRom(s.y, h.y, u.y, a.y, this.tension), Bs.initCatmullRom(s.z, h.z, u.z, a.z, this.tension));
            return n.set(Os.calc(c), zs.calc(c), Bs.calc(c)), n;
        };
        Hs.prototype.copy = function (t) { _super.prototype.copy.call(this, t), this.points = []; for (var e_192 = 0, n_166 = t.points.length; e_192 < n_166; e_192++) {
            var n_167 = t.points[e_192];
            this.points.push(n_167.clone());
        } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; };
        Hs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); t.points = []; for (var e_193 = 0, n_168 = this.points.length; e_193 < n_168; e_193++) {
            var n_169 = this.points[e_193];
            t.points.push(n_169.toArray());
        } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t; };
        Hs.prototype.fromJSON = function (t) { _super.prototype.fromJSON.call(this, t), this.points = []; for (var e_194 = 0, n_170 = t.points.length; e_194 < n_170; e_194++) {
            var n_171 = t.points[e_194];
            this.points.push((new k).fromArray(n_171));
        } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; };
        return Hs;
    }(Rs));
    function Fs(t, e, n, i, r) { var o = .5 * (i - e), s = .5 * (r - n), a = t * t; return (2 * n - 2 * i + o + s) * (t * a) + (-3 * n + 3 * i - 2 * o - s) * a + o * t + n; }
    function Us(t, e, n, i) { return function (t, e) { var n = 1 - t; return n * n * e; }(t, e) + function (t, e) { return 2 * (1 - t) * t * e; }(t, n) + function (t, e) { return t * t * e; }(t, i); }
    function ks(t, e, n, i, r) { return function (t, e) { var n = 1 - t; return n * n * n * e; }(t, e) + function (t, e) { var n = 1 - t; return 3 * n * n * t * e; }(t, n) + function (t, e) { return 3 * (1 - t) * t * t * e; }(t, i) + function (t, e) { return t * t * t * e; }(t, r); }
    Hs.prototype.isCatmullRomCurve3 = !0;
    var Gs = /** @class */ (function (_super) {
        __extends(Gs, _super);
        function Gs(t, e, n, i) {
            if (t === void 0) { t = new P; }
            if (e === void 0) { e = new P; }
            if (n === void 0) { n = new P; }
            if (i === void 0) { i = new P; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "CubicBezierCurve", _this.v0 = t, _this.v1 = e, _this.v2 = n, _this.v3 = i;
            return _this;
        }
        Gs.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new P; }
            var n = e, i = this.v0, r = this.v1, o = this.v2, s = this.v3;
            return n.set(ks(t, i.x, r.x, o.x, s.x), ks(t, i.y, r.y, o.y, s.y)), n;
        };
        Gs.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; };
        Gs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; };
        Gs.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; };
        return Gs;
    }(Rs));
    Gs.prototype.isCubicBezierCurve = !0;
    var Vs = /** @class */ (function (_super) {
        __extends(Vs, _super);
        function Vs(t, e, n, i) {
            if (t === void 0) { t = new k; }
            if (e === void 0) { e = new k; }
            if (n === void 0) { n = new k; }
            if (i === void 0) { i = new k; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "CubicBezierCurve3", _this.v0 = t, _this.v1 = e, _this.v2 = n, _this.v3 = i;
            return _this;
        }
        Vs.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new k; }
            var n = e, i = this.v0, r = this.v1, o = this.v2, s = this.v3;
            return n.set(ks(t, i.x, r.x, o.x, s.x), ks(t, i.y, r.y, o.y, s.y), ks(t, i.z, r.z, o.z, s.z)), n;
        };
        Vs.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; };
        Vs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; };
        Vs.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; };
        return Vs;
    }(Rs));
    Vs.prototype.isCubicBezierCurve3 = !0;
    var Ws = /** @class */ (function (_super) {
        __extends(Ws, _super);
        function Ws(t, e) {
            if (t === void 0) { t = new P; }
            if (e === void 0) { e = new P; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "LineCurve", _this.v1 = t, _this.v2 = e;
            return _this;
        }
        Ws.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new P; }
            var n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        };
        Ws.prototype.getPointAt = function (t, e) { return this.getPoint(t, e); };
        Ws.prototype.getTangent = function (t, e) { var n = e || new P; return n.copy(this.v2).sub(this.v1).normalize(), n; };
        Ws.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; };
        Ws.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; };
        Ws.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; };
        return Ws;
    }(Rs));
    Ws.prototype.isLineCurve = !0;
    var js = /** @class */ (function (_super) {
        __extends(js, _super);
        function js(t, e, n) {
            if (t === void 0) { t = new P; }
            if (e === void 0) { e = new P; }
            if (n === void 0) { n = new P; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "QuadraticBezierCurve", _this.v0 = t, _this.v1 = e, _this.v2 = n;
            return _this;
        }
        js.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new P; }
            var n = e, i = this.v0, r = this.v1, o = this.v2;
            return n.set(Us(t, i.x, r.x, o.x), Us(t, i.y, r.y, o.y)), n;
        };
        js.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; };
        js.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; };
        js.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; };
        return js;
    }(Rs));
    js.prototype.isQuadraticBezierCurve = !0;
    var qs = /** @class */ (function (_super) {
        __extends(qs, _super);
        function qs(t, e, n) {
            if (t === void 0) { t = new k; }
            if (e === void 0) { e = new k; }
            if (n === void 0) { n = new k; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "QuadraticBezierCurve3", _this.v0 = t, _this.v1 = e, _this.v2 = n;
            return _this;
        }
        qs.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new k; }
            var n = e, i = this.v0, r = this.v1, o = this.v2;
            return n.set(Us(t, i.x, r.x, o.x), Us(t, i.y, r.y, o.y), Us(t, i.z, r.z, o.z)), n;
        };
        qs.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; };
        qs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; };
        qs.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; };
        return qs;
    }(Rs));
    qs.prototype.isQuadraticBezierCurve3 = !0;
    var Xs = /** @class */ (function (_super) {
        __extends(Xs, _super);
        function Xs(t) {
            if (t === void 0) { t = []; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "SplineCurve", _this.points = t;
            return _this;
        }
        Xs.prototype.getPoint = function (t, e) {
            if (e === void 0) { e = new P; }
            var n = e, i = this.points, r = (i.length - 1) * t, o = Math.floor(r), s = r - o, a = i[0 === o ? o : o - 1], l = i[o], c = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2];
            return n.set(Fs(s, a.x, l.x, c.x, h.x), Fs(s, a.y, l.y, c.y, h.y)), n;
        };
        Xs.prototype.copy = function (t) { _super.prototype.copy.call(this, t), this.points = []; for (var e_195 = 0, n_172 = t.points.length; e_195 < n_172; e_195++) {
            var n_173 = t.points[e_195];
            this.points.push(n_173.clone());
        } return this; };
        Xs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); t.points = []; for (var e_196 = 0, n_174 = this.points.length; e_196 < n_174; e_196++) {
            var n_175 = this.points[e_196];
            t.points.push(n_175.toArray());
        } return t; };
        Xs.prototype.fromJSON = function (t) { _super.prototype.fromJSON.call(this, t), this.points = []; for (var e_197 = 0, n_176 = t.points.length; e_197 < n_176; e_197++) {
            var n_177 = t.points[e_197];
            this.points.push((new P).fromArray(n_177));
        } return this; };
        return Xs;
    }(Rs));
    Xs.prototype.isSplineCurve = !0;
    var Ys = Object.freeze({ __proto__: null, ArcCurve: Ds, CatmullRomCurve3: Hs, CubicBezierCurve: Gs, CubicBezierCurve3: Vs, EllipseCurve: Ps, LineCurve: Ws, LineCurve3: /** @class */ (function (_super) {
            __extends(LineCurve3, _super);
            function LineCurve3(t, e) {
                if (t === void 0) { t = new k; }
                if (e === void 0) { e = new k; }
                var _this = this;
                _this = _super.call(this) || this, _this.type = "LineCurve3", _this.isLineCurve3 = !0, _this.v1 = t, _this.v2 = e;
                return _this;
            }
            LineCurve3.prototype.getPoint = function (t, e) {
                if (e === void 0) { e = new k; }
                var n = e;
                return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
            };
            LineCurve3.prototype.getPointAt = function (t, e) { return this.getPoint(t, e); };
            LineCurve3.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; };
            LineCurve3.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; };
            LineCurve3.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; };
            return LineCurve3;
        }(Rs)), QuadraticBezierCurve: js, QuadraticBezierCurve3: qs, SplineCurve: Xs });
    var Js = /** @class */ (function (_super) {
        __extends(Js, _super);
        function Js() {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "CurvePath", _this.curves = [], _this.autoClose = !1;
            return _this;
        }
        Js.prototype.add = function (t) { this.curves.push(t); };
        Js.prototype.closePath = function () { var t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1); t.equals(e) || this.curves.push(new Ws(e, t)); };
        Js.prototype.getPoint = function (t) { var e = t * this.getLength(), n = this.getCurveLengths(); var i = 0; for (; i < n.length;) {
            if (n[i] >= e) {
                var t_228 = n[i] - e, r_102 = this.curves[i], o_60 = r_102.getLength(), s_40 = 0 === o_60 ? 0 : 1 - t_228 / o_60;
                return r_102.getPointAt(s_40);
            }
            i++;
        } return null; };
        Js.prototype.getLength = function () { var t = this.getCurveLengths(); return t[t.length - 1]; };
        Js.prototype.updateArcLengths = function () { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths(); };
        Js.prototype.getCurveLengths = function () { if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
            return this.cacheLengths; var t = []; var e = 0; for (var n_178 = 0, i_146 = this.curves.length; n_178 < i_146; n_178++)
            e += this.curves[n_178].getLength(), t.push(e); return this.cacheLengths = t, t; };
        Js.prototype.getSpacedPoints = function (t) {
            if (t === void 0) { t = 40; }
            var e = [];
            for (var n_179 = 0; n_179 <= t; n_179++)
                e.push(this.getPoint(n_179 / t));
            return this.autoClose && e.push(e[0]), e;
        };
        Js.prototype.getPoints = function (t) {
            if (t === void 0) { t = 12; }
            var e = [];
            var n;
            for (var i_147 = 0, r_103 = this.curves; i_147 < r_103.length; i_147++) {
                var o_61 = r_103[i_147], s_41 = o_61 && o_61.isEllipseCurve ? 2 * t : o_61 && (o_61.isLineCurve || o_61.isLineCurve3) ? 1 : o_61 && o_61.isSplineCurve ? t * o_61.points.length : t, a_27 = o_61.getPoints(s_41);
                for (var t_229 = 0; t_229 < a_27.length; t_229++) {
                    var i_148 = a_27[t_229];
                    n && n.equals(i_148) || (e.push(i_148), n = i_148);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        };
        Js.prototype.copy = function (t) { _super.prototype.copy.call(this, t), this.curves = []; for (var e_198 = 0, n_180 = t.curves.length; e_198 < n_180; e_198++) {
            var n_181 = t.curves[e_198];
            this.curves.push(n_181.clone());
        } return this.autoClose = t.autoClose, this; };
        Js.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); t.autoClose = this.autoClose, t.curves = []; for (var e_199 = 0, n_182 = this.curves.length; e_199 < n_182; e_199++) {
            var n_183 = this.curves[e_199];
            t.curves.push(n_183.toJSON());
        } return t; };
        Js.prototype.fromJSON = function (t) { _super.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = []; for (var e_200 = 0, n_184 = t.curves.length; e_200 < n_184; e_200++) {
            var n_185 = t.curves[e_200];
            this.curves.push((new Ys[n_185.type]).fromJSON(n_185));
        } return this; };
        return Js;
    }(Rs));
    var Zs = /** @class */ (function (_super) {
        __extends(Zs, _super);
        function Zs(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "Path", _this.currentPoint = new P, t && _this.setFromPoints(t);
            return _this;
        }
        Zs.prototype.setFromPoints = function (t) { this.moveTo(t[0].x, t[0].y); for (var e_201 = 1, n_186 = t.length; e_201 < n_186; e_201++)
            this.lineTo(t[e_201].x, t[e_201].y); return this; };
        Zs.prototype.moveTo = function (t, e) { return this.currentPoint.set(t, e), this; };
        Zs.prototype.lineTo = function (t, e) { var n = new Ws(this.currentPoint.clone(), new P(t, e)); return this.curves.push(n), this.currentPoint.set(t, e), this; };
        Zs.prototype.quadraticCurveTo = function (t, e, n, i) { var r = new js(this.currentPoint.clone(), new P(t, e), new P(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this; };
        Zs.prototype.bezierCurveTo = function (t, e, n, i, r, o) { var s = new Gs(this.currentPoint.clone(), new P(t, e), new P(n, i), new P(r, o)); return this.curves.push(s), this.currentPoint.set(r, o), this; };
        Zs.prototype.splineThru = function (t) { var e = [this.currentPoint.clone()].concat(t), n = new Xs(e); return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this; };
        Zs.prototype.arc = function (t, e, n, i, r, o) { var s = this.currentPoint.x, a = this.currentPoint.y; return this.absarc(t + s, e + a, n, i, r, o), this; };
        Zs.prototype.absarc = function (t, e, n, i, r, o) { return this.absellipse(t, e, n, n, i, r, o), this; };
        Zs.prototype.ellipse = function (t, e, n, i, r, o, s, a) { var l = this.currentPoint.x, c = this.currentPoint.y; return this.absellipse(t + l, e + c, n, i, r, o, s, a), this; };
        Zs.prototype.absellipse = function (t, e, n, i, r, o, s, a) { var l = new Ps(t, e, n, i, r, o, s, a); if (this.curves.length > 0) {
            var t_230 = l.getPoint(0);
            t_230.equals(this.currentPoint) || this.lineTo(t_230.x, t_230.y);
        } this.curves.push(l); var c = l.getPoint(1); return this.currentPoint.copy(c), this; };
        Zs.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this; };
        Zs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.currentPoint = this.currentPoint.toArray(), t; };
        Zs.prototype.fromJSON = function (t) { return _super.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this; };
        return Zs;
    }(Js));
    var Qs = /** @class */ (function (_super) {
        __extends(Qs, _super);
        function Qs(t) {
            var _this = this;
            _this = _super.call(this, t) || this, _this.uuid = R.generateUUID(), _this.type = "Shape", _this.holes = [];
            return _this;
        }
        Qs.prototype.getPointsHoles = function (t) { var e = []; for (var n_187 = 0, i_149 = this.holes.length; n_187 < i_149; n_187++)
            e[n_187] = this.holes[n_187].getPoints(t); return e; };
        Qs.prototype.extractPoints = function (t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) }; };
        Qs.prototype.copy = function (t) { _super.prototype.copy.call(this, t), this.holes = []; for (var e_202 = 0, n_188 = t.holes.length; e_202 < n_188; e_202++) {
            var n_189 = t.holes[e_202];
            this.holes.push(n_189.clone());
        } return this; };
        Qs.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); t.uuid = this.uuid, t.holes = []; for (var e_203 = 0, n_190 = this.holes.length; e_203 < n_190; e_203++) {
            var n_191 = this.holes[e_203];
            t.holes.push(n_191.toJSON());
        } return t; };
        Qs.prototype.fromJSON = function (t) { _super.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = []; for (var e_204 = 0, n_192 = t.holes.length; e_204 < n_192; e_204++) {
            var n_193 = t.holes[e_204];
            this.holes.push((new Zs).fromJSON(n_193));
        } return this; };
        return Qs;
    }(Zs));
    var Ks = /** @class */ (function (_super) {
        __extends(Ks, _super);
        function Ks(t, e) {
            if (e === void 0) { e = 1; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "Light", _this.color = new he(t), _this.intensity = e;
            return _this;
        }
        Ks.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this; };
        Ks.prototype.toJSON = function (t) { var e = _super.prototype.toJSON.call(this, t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e; };
        return Ks;
    }(Ut));
    Ks.prototype.isLight = !0;
    (/** @class */ (function (_super) {
        __extends(class_15, _super);
        function class_15(t, e, n) {
            var _this = this;
            _this = _super.call(this, t, n) || this, _this.type = "HemisphereLight", _this.position.copy(Ut.DefaultUp), _this.updateMatrix(), _this.groundColor = new he(e);
            return _this;
        }
        class_15.prototype.copy = function (t) { return Ks.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this; };
        return class_15;
    }(Ks))).prototype.isHemisphereLight = !0;
    var $s = new mt, ta = new k, ea = new k;
    var na = /** @class */ (function () {
        function na(t) {
            this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new P(512, 512), this.map = null, this.mapPass = null, this.matrix = new mt, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new fn, this._frameExtents = new P(1, 1), this._viewportCount = 1, this._viewports = [new H(0, 0, 1, 1)];
        }
        na.prototype.getViewportCount = function () { return this._viewportCount; };
        na.prototype.getFrustum = function () { return this._frustum; };
        na.prototype.updateMatrices = function (t) { var e = this.camera, n = this.matrix; ta.setFromMatrixPosition(t.matrixWorld), e.position.copy(ta), ea.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ea), e.updateMatrixWorld(), $s.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix($s), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse); };
        na.prototype.getViewport = function (t) { return this._viewports[t]; };
        na.prototype.getFrameExtents = function () { return this._frameExtents; };
        na.prototype.copy = function (t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this; };
        na.prototype.clone = function () { return (new this.constructor).copy(this); };
        na.prototype.toJSON = function () { var t = {}; return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t; };
        return na;
    }());
    var ia = /** @class */ (function (_super) {
        __extends(ia, _super);
        function ia() {
            var _this = this;
            _this = _super.call(this, new sn(50, 1, .5, 500)) || this, _this.focus = 1;
            return _this;
        }
        ia.prototype.updateMatrices = function (t) { var e = this.camera, n = 2 * R.RAD2DEG * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far; n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), _super.prototype.updateMatrices.call(this, t); };
        return ia;
    }(na));
    ia.prototype.isSpotLightShadow = !0;
    (/** @class */ (function (_super) {
        __extends(class_16, _super);
        function class_16(t, e, n, i, r, o) {
            if (n === void 0) { n = 0; }
            if (i === void 0) { i = Math.PI / 3; }
            if (r === void 0) { r = 0; }
            if (o === void 0) { o = 1; }
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "SpotLight", _this.position.copy(Ut.DefaultUp), _this.updateMatrix(), _this.target = new Ut, _this.distance = n, _this.angle = i, _this.penumbra = r, _this.decay = o, _this.shadow = new ia;
            return _this;
        }
        Object.defineProperty(class_16.prototype, "power", {
            get: function () { return this.intensity * Math.PI; },
            set: function (t) { this.intensity = t / Math.PI; },
            enumerable: false,
            configurable: true
        });
        class_16.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this; };
        return class_16;
    }(Ks))).prototype.isSpotLight = !0;
    var ra = new mt, oa = new k, sa = new k;
    var aa = /** @class */ (function (_super) {
        __extends(aa, _super);
        function aa() {
            var _this = this;
            _this = _super.call(this, new sn(90, 1, .5, 500)) || this, _this._frameExtents = new P(4, 2), _this._viewportCount = 6, _this._viewports = [new H(2, 1, 1, 1), new H(0, 1, 1, 1), new H(3, 1, 1, 1), new H(1, 1, 1, 1), new H(3, 0, 1, 1), new H(1, 0, 1, 1)], _this._cubeDirections = [new k(1, 0, 0), new k(-1, 0, 0), new k(0, 0, 1), new k(0, 0, -1), new k(0, 1, 0), new k(0, -1, 0)], _this._cubeUps = [new k(0, 1, 0), new k(0, 1, 0), new k(0, 1, 0), new k(0, 1, 0), new k(0, 0, 1), new k(0, 0, -1)];
            return _this;
        }
        aa.prototype.updateMatrices = function (t, e) {
            if (e === void 0) { e = 0; }
            var n = this.camera, i = this.matrix;
            oa.setFromMatrixPosition(t.matrixWorld), n.position.copy(oa), sa.copy(n.position), sa.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(sa), n.updateMatrixWorld(), i.makeTranslation(-oa.x, -oa.y, -oa.z), ra.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ra);
        };
        return aa;
    }(na));
    aa.prototype.isPointLightShadow = !0;
    var la = /** @class */ (function (_super) {
        __extends(la, _super);
        function la(t, e, n, i) {
            if (n === void 0) { n = 0; }
            if (i === void 0) { i = 1; }
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "PointLight", _this.distance = n, _this.decay = i, _this.shadow = new aa;
            return _this;
        }
        Object.defineProperty(la.prototype, "power", {
            get: function () { return 4 * this.intensity * Math.PI; },
            set: function (t) { this.intensity = t / (4 * Math.PI); },
            enumerable: false,
            configurable: true
        });
        la.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this; };
        return la;
    }(Ks));
    la.prototype.isPointLight = !0;
    var ca = /** @class */ (function (_super) {
        __extends(ca, _super);
        function ca(t, e, n, i, r, o) {
            if (t === void 0) { t = -1; }
            if (e === void 0) { e = 1; }
            if (n === void 0) { n = 1; }
            if (i === void 0) { i = -1; }
            if (r === void 0) { r = .1; }
            if (o === void 0) { o = 2e3; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "OrthographicCamera", _this.zoom = 1, _this.view = null, _this.left = t, _this.right = e, _this.top = n, _this.bottom = i, _this.near = r, _this.far = o, _this.updateProjectionMatrix();
            return _this;
        }
        ca.prototype.copy = function (t, e) { return _super.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this; };
        ca.prototype.setViewOffset = function (t, e, n, i, r, o) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix(); };
        ca.prototype.clearViewOffset = function () { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix(); };
        ca.prototype.updateProjectionMatrix = function () { var t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; var r = n - t, o = n + t, s = i + e, a = i - e; if (null !== this.view && this.view.enabled) {
            var t_231 = (this.right - this.left) / this.view.fullWidth / this.zoom, e_205 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t_231 * this.view.offsetX, o = r + t_231 * this.view.width, s -= e_205 * this.view.offsetY, a = s - e_205 * this.view.height;
        } this.projectionMatrix.makeOrthographic(r, o, s, a, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); };
        ca.prototype.toJSON = function (t) { var e = Ut.prototype.toJSON.call(this, t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e; };
        return ca;
    }(on));
    ca.prototype.isOrthographicCamera = !0;
    var ha = /** @class */ (function (_super) {
        __extends(ha, _super);
        function ha() {
            return _super.call(this, new ca(-5, 5, 5, -5, .5, 500)) || this;
        }
        return ha;
    }(na));
    ha.prototype.isDirectionalLightShadow = !0;
    (/** @class */ (function (_super) {
        __extends(class_17, _super);
        function class_17(t, e) {
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "DirectionalLight", _this.position.copy(Ut.DefaultUp), _this.updateMatrix(), _this.target = new Ut, _this.shadow = new ha;
            return _this;
        }
        class_17.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this; };
        return class_17;
    }(Ks))).prototype.isDirectionalLight = !0;
    (/** @class */ (function (_super) {
        __extends(class_18, _super);
        function class_18(t, e) {
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "AmbientLight";
            return _this;
        }
        return class_18;
    }(Ks))).prototype.isAmbientLight = !0;
    (/** @class */ (function (_super) {
        __extends(class_19, _super);
        function class_19(t, e, n, i) {
            if (n === void 0) { n = 10; }
            if (i === void 0) { i = 10; }
            var _this = this;
            _this = _super.call(this, t, e) || this, _this.type = "RectAreaLight", _this.width = n, _this.height = i;
            return _this;
        }
        class_19.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this; };
        class_19.prototype.toJSON = function (t) { var e = _super.prototype.toJSON.call(this, t); return e.object.width = this.width, e.object.height = this.height, e; };
        return class_19;
    }(Ks))).prototype.isRectAreaLight = !0;
    var ua = /** @class */ (function () {
        function ua() {
            this.coefficients = [];
            for (var t_232 = 0; t_232 < 9; t_232++)
                this.coefficients.push(new k);
        }
        ua.prototype.set = function (t) { for (var e_206 = 0; e_206 < 9; e_206++)
            this.coefficients[e_206].copy(t[e_206]); return this; };
        ua.prototype.zero = function () { for (var t_233 = 0; t_233 < 9; t_233++)
            this.coefficients[t_233].set(0, 0, 0); return this; };
        ua.prototype.getAt = function (t, e) { var n = t.x, i = t.y, r = t.z, o = this.coefficients; return e.copy(o[0]).multiplyScalar(.282095), e.addScaledVector(o[1], .488603 * i), e.addScaledVector(o[2], .488603 * r), e.addScaledVector(o[3], .488603 * n), e.addScaledVector(o[4], n * i * 1.092548), e.addScaledVector(o[5], i * r * 1.092548), e.addScaledVector(o[6], .315392 * (3 * r * r - 1)), e.addScaledVector(o[7], n * r * 1.092548), e.addScaledVector(o[8], .546274 * (n * n - i * i)), e; };
        ua.prototype.getIrradianceAt = function (t, e) { var n = t.x, i = t.y, r = t.z, o = this.coefficients; return e.copy(o[0]).multiplyScalar(.886227), e.addScaledVector(o[1], 1.023328 * i), e.addScaledVector(o[2], 1.023328 * r), e.addScaledVector(o[3], 1.023328 * n), e.addScaledVector(o[4], .858086 * n * i), e.addScaledVector(o[5], .858086 * i * r), e.addScaledVector(o[6], .743125 * r * r - .247708), e.addScaledVector(o[7], .858086 * n * r), e.addScaledVector(o[8], .429043 * (n * n - i * i)), e; };
        ua.prototype.add = function (t) { for (var e_207 = 0; e_207 < 9; e_207++)
            this.coefficients[e_207].add(t.coefficients[e_207]); return this; };
        ua.prototype.addScaledSH = function (t, e) { for (var n_194 = 0; n_194 < 9; n_194++)
            this.coefficients[n_194].addScaledVector(t.coefficients[n_194], e); return this; };
        ua.prototype.scale = function (t) { for (var e_208 = 0; e_208 < 9; e_208++)
            this.coefficients[e_208].multiplyScalar(t); return this; };
        ua.prototype.lerp = function (t, e) { for (var n_195 = 0; n_195 < 9; n_195++)
            this.coefficients[n_195].lerp(t.coefficients[n_195], e); return this; };
        ua.prototype.equals = function (t) { for (var e_209 = 0; e_209 < 9; e_209++)
            if (!this.coefficients[e_209].equals(t.coefficients[e_209]))
                return !1; return !0; };
        ua.prototype.copy = function (t) { return this.set(t.coefficients); };
        ua.prototype.clone = function () { return (new this.constructor).copy(this); };
        ua.prototype.fromArray = function (t, e) {
            if (e === void 0) { e = 0; }
            var n = this.coefficients;
            for (var i_150 = 0; i_150 < 9; i_150++)
                n[i_150].fromArray(t, e + 3 * i_150);
            return this;
        };
        ua.prototype.toArray = function (t, e) {
            if (t === void 0) { t = []; }
            if (e === void 0) { e = 0; }
            var n = this.coefficients;
            for (var i_151 = 0; i_151 < 9; i_151++)
                n[i_151].toArray(t, e + 3 * i_151);
            return t;
        };
        ua.getBasisAt = function (t, e) { var n = t.x, i = t.y, r = t.z; e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i); };
        return ua;
    }());
    ua.prototype.isSphericalHarmonics3 = !0;
    var da = /** @class */ (function (_super) {
        __extends(da, _super);
        function da(t, e) {
            if (t === void 0) { t = new ua; }
            if (e === void 0) { e = 1; }
            var _this = this;
            _this = _super.call(this, void 0, e) || this, _this.sh = t;
            return _this;
        }
        da.prototype.copy = function (t) { return _super.prototype.copy.call(this, t), this.sh.copy(t.sh), this; };
        da.prototype.fromJSON = function (t) { return this.intensity = t.intensity, this.sh.fromArray(t.sh), this; };
        da.prototype.toJSON = function (t) { var e = _super.prototype.toJSON.call(this, t); return e.object.sh = this.sh.toArray(), e; };
        return da;
    }(Ks));
    da.prototype.isLightProbe = !0;
    function pa() { Ie.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0; }
    function fa(t, e, n, i) { "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), fe.call(this, t, e, n), this.meshPerAttribute = i || 1; }
    function ma(t) { "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), ws.call(this, t), this.options = { premultiplyAlpha: "none" }; }
    pa.prototype = Object.assign(Object.create(Ie.prototype), { constructor: pa, isInstancedBufferGeometry: !0, copy: function (t) { return Ie.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this; }, clone: function () { return (new this.constructor).copy(this); }, toJSON: function () { var t = Ie.prototype.toJSON.call(this); return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t; } }), fa.prototype = Object.assign(Object.create(fe.prototype), { constructor: fa, isInstancedBufferAttribute: !0, copy: function (t) { return fe.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this; }, toJSON: function () { var t = fe.prototype.toJSON.call(this); return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t; } }), ma.prototype = Object.assign(Object.create(ws.prototype), { constructor: ma, isImageBitmapLoader: !0, setOptions: function (t) { return this.options = t, this; }, load: function (t, e, n, i) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); var r = this, o = xs.get(t); if (void 0 !== o)
            return r.manager.itemStart(t), setTimeout((function () { e && e(o), r.manager.itemEnd(t); }), 0), o; var s = {}; s.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", s.headers = this.requestHeader, fetch(t, s).then((function (t) { return t.blob(); })).then((function (t) { return createImageBitmap(t, Object.assign(r.options, { colorSpaceConversion: "none" })); })).then((function (n) { xs.add(t, n), e && e(n), r.manager.itemEnd(t); })).catch((function (e) { i && i(e), r.manager.itemError(t), r.manager.itemEnd(t); })), r.manager.itemStart(t); } });
    var ga;
    var va = /** @class */ (function (_super) {
        __extends(va, _super);
        function va(t) {
            return _super.call(this, t) || this;
        }
        va.prototype.load = function (t, e, n, i) { var r = this, o = new Ss(this.manager); o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, (function (n) { try {
            var t_234 = n.slice(0);
            (void 0 === ga && (ga = new (window.AudioContext || window.webkitAudioContext)), ga).decodeAudioData(t_234, (function (t) { e(t); }));
        }
        catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
        } }), n, i); };
        return va;
    }(ws));
    (/** @class */ (function (_super) {
        __extends(class_20, _super);
        function class_20(t, e, n) {
            if (n === void 0) { n = 1; }
            var _this = _super.call(this, void 0, n) || this;
            var i = (new he).set(t), r = (new he).set(e), o = new k(i.r, i.g, i.b), s = new k(r.r, r.g, r.b), a = Math.sqrt(Math.PI), l = a * Math.sqrt(.75);
            _this.sh.coefficients[0].copy(o).add(s).multiplyScalar(a), _this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(l);
            return _this;
        }
        return class_20;
    }(da))).prototype.isHemisphereLightProbe = !0, /** @class */ (function (_super) {
        __extends(class_21, _super);
        function class_21(t, e) {
            if (e === void 0) { e = 1; }
            var _this = _super.call(this, void 0, e) || this;
            var n = (new he).set(t);
            _this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
            return _this;
        }
        return class_21;
    }(da)).prototype.isAmbientLightProbe = !0, new mt, new mt;
    function _a() { return ("undefined" == typeof performance ? Date : performance).now(); }
    var ya = /** @class */ (function () {
        function ya(t, e, n) {
            var i, r, o;
            switch (this.binding = t, this.valueSize = n, e) {
                case "quaternion":
                    i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
                    break;
                default: i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
            }
            this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        ya.prototype.accumulate = function (t, e) { var n = this.buffer, i = this.valueSize, r = t * i + i; var o = this.cumulativeWeight; if (0 === o) {
            for (var t_235 = 0; t_235 !== i; ++t_235)
                n[r + t_235] = n[t_235];
            o = e;
        }
        else {
            o += e;
            var t_236 = e / o;
            this._mixBufferRegion(n, r, 0, t_236, i);
        } this.cumulativeWeight = o; };
        ya.prototype.accumulateAdditive = function (t) { var e = this.buffer, n = this.valueSize, i = n * this._addIndex; 0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t; };
        ya.prototype.apply = function (t) { var e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, s = this.binding; if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            var t_237 = e * this._origIndex;
            this._mixBufferRegion(n, i, t_237, 1 - r, e);
        } o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e); for (var t_238 = e, r_104 = e + e; t_238 !== r_104; ++t_238)
            if (n[t_238] !== n[t_238 + e]) {
                s.setValue(n, i);
                break;
            } };
        ya.prototype.saveOriginalState = function () { var t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex; t.getValue(e, i); for (var t_239 = n, r_105 = i; t_239 !== r_105; ++t_239)
            e[t_239] = e[i + t_239 % n]; this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0; };
        ya.prototype.restoreOriginalState = function () { var t = 3 * this.valueSize; this.binding.setValue(this.buffer, t); };
        ya.prototype._setAdditiveIdentityNumeric = function () { var t = this._addIndex * this.valueSize, e = t + this.valueSize; for (var n_196 = t; n_196 < e; n_196++)
            this.buffer[n_196] = 0; };
        ya.prototype._setAdditiveIdentityQuaternion = function () { this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1; };
        ya.prototype._setAdditiveIdentityOther = function () { var t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize; for (var n_197 = 0; n_197 < this.valueSize; n_197++)
            this.buffer[e + n_197] = this.buffer[t + n_197]; };
        ya.prototype._select = function (t, e, n, i, r) { if (i >= .5)
            for (var i_152 = 0; i_152 !== r; ++i_152)
                t[e + i_152] = t[n + i_152]; };
        ya.prototype._slerp = function (t, e, n, i) { U.slerpFlat(t, e, t, e, t, n, i); };
        ya.prototype._slerpAdditive = function (t, e, n, i, r) { var o = this._workIndex * r; U.multiplyQuaternionsFlat(t, o, t, e, t, n), U.slerpFlat(t, e, t, e, t, o, i); };
        ya.prototype._lerp = function (t, e, n, i, r) { var o = 1 - i; for (var s_42 = 0; s_42 !== r; ++s_42) {
            var r_106 = e + s_42;
            t[r_106] = t[r_106] * o + t[n + s_42] * i;
        } };
        ya.prototype._lerpAdditive = function (t, e, n, i, r) { for (var o_62 = 0; o_62 !== r; ++o_62) {
            var r_107 = e + o_62;
            t[r_107] = t[r_107] + t[n + o_62] * i;
        } };
        return ya;
    }());
    var xa = new RegExp("[\\[\\]\\.:\\/]", "g"), ba = "[^\\[\\]\\.:\\/]", wa = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Ma = /((?:WC+[\/:])*)/.source.replace("WC", ba), Sa = /(WCOD+)?/.source.replace("WCOD", wa), Ea = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ba), Ta = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ba), Aa = new RegExp("^" + Ma + Sa + Ea + Ta + "$"), La = ["material", "materials", "bones"];
    function Ca(t, e, n) { var i = n || Ra.parseTrackName(e); this._targetGroup = t, this._bindings = t.subscribe_(e, i); }
    function Ra(t, e, n) { this.path = e, this.parsedPath = n || Ra.parseTrackName(e), this.node = Ra.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t; }
    Object.assign(Ca.prototype, { getValue: function (t, e) { this.bind(); var n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; void 0 !== i && i.getValue(t, e); }, setValue: function (t, e) { var n = this._bindings; for (var i_153 = this._targetGroup.nCachedObjects_, r_108 = n.length; i_153 !== r_108; ++i_153)
            n[i_153].setValue(t, e); }, bind: function () { var t = this._bindings; for (var e_210 = this._targetGroup.nCachedObjects_, n_198 = t.length; e_210 !== n_198; ++e_210)
            t[e_210].bind(); }, unbind: function () { var t = this._bindings; for (var e_211 = this._targetGroup.nCachedObjects_, n_199 = t.length; e_211 !== n_199; ++e_211)
            t[e_211].unbind(); } }), Object.assign(Ra, { Composite: Ca, create: function (t, e, n) { return t && t.isAnimationObjectGroup ? new Ra.Composite(t, e, n) : new Ra(t, e, n); }, sanitizeNodeName: function (t) { return t.replace(/\s/g, "_").replace(xa, ""); }, parseTrackName: function (t) { var e = Aa.exec(t); if (!e)
            throw new Error("PropertyBinding: Cannot parse trackName: " + t); var n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (void 0 !== i && -1 !== i) {
            var t_240 = n.nodeName.substring(i + 1);
            -1 !== La.indexOf(t_240) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t_240);
        } if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return n; }, findNode: function (t, e) { if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid)
            return t; if (t.skeleton) {
            var n_200 = t.skeleton.getBoneByName(e);
            if (void 0 !== n_200)
                return n_200;
        } if (t.children) {
            var n_201 = function (t) { for (var i_154 = 0; i_154 < t.length; i_154++) {
                var r_109 = t[i_154];
                if (r_109.name === e || r_109.uuid === e)
                    return r_109;
                var o_63 = n_201(r_109.children);
                if (o_63)
                    return o_63;
            } return null; }, i_155 = n_201(t.children);
            if (i_155)
                return i_155;
        } return null; } }), Object.assign(Ra.prototype, { _getValue_unavailable: function () { }, _setValue_unavailable: function () { }, BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, GetterByBindingType: [function (t, e) { t[e] = this.node[this.propertyName]; }, function (t, e) { var n = this.resolvedProperty; for (var i_156 = 0, r_110 = n.length; i_156 !== r_110; ++i_156)
                t[e++] = n[i_156]; }, function (t, e) { t[e] = this.resolvedProperty[this.propertyIndex]; }, function (t, e) { this.resolvedProperty.toArray(t, e); }], SetterByBindingTypeAndVersioning: [[function (t, e) { this.targetObject[this.propertyName] = t[e]; }, function (t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0; }, function (t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, e) { var n = this.resolvedProperty; for (var i_157 = 0, r_111 = n.length; i_157 !== r_111; ++i_157)
                    n[i_157] = t[e++]; }, function (t, e) { var n = this.resolvedProperty; for (var i_158 = 0, r_112 = n.length; i_158 !== r_112; ++i_158)
                    n[i_158] = t[e++]; this.targetObject.needsUpdate = !0; }, function (t, e) { var n = this.resolvedProperty; for (var i_159 = 0, r_113 = n.length; i_159 !== r_113; ++i_159)
                    n[i_159] = t[e++]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, e) { this.resolvedProperty[this.propertyIndex] = t[e]; }, function (t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0; }, function (t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, e) { this.resolvedProperty.fromArray(t, e); }, function (t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0; }, function (t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0; }]], getValue: function (t, e) { this.bind(), this.getValue(t, e); }, setValue: function (t, e) { this.bind(), this.setValue(t, e); }, bind: function () { var t = this.node; var e = this.parsedPath, n = e.objectName, i = e.propertyName; var r = e.propertyIndex; if (t || (t = Ra.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t)
            return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."); if (n) {
            var i_160 = e.objectIndex;
            switch (n) {
                case "materials":
                    if (!t.material)
                        return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    if (!t.material.materials)
                        return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton)
                        return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    t = t.skeleton.bones;
                    for (var e_212 = 0; e_212 < t.length; e_212++)
                        if (t[e_212].name === i_160) {
                            i_160 = e_212;
                            break;
                        }
                    break;
                default:
                    if (void 0 === t[n])
                        return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    t = t[n];
            }
            if (void 0 !== i_160) {
                if (void 0 === t[i_160])
                    return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                t = t[i_160];
            }
        } var o = t[i]; if (void 0 === o) {
            var n_202 = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n_202 + "." + i + " but it wasn't found.", t);
        } var s = this.Versioning.None; this.targetObject = t, void 0 !== t.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate); var a = this.BindingType.Direct; if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
                if (!t.geometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!t.geometry.isBufferGeometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                if (!t.geometry.morphAttributes)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
            }
            a = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
        }
        else
            void 0 !== o.fromArray && void 0 !== o.toArray ? (a = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (a = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i; this.getValue = this.GetterByBindingType[a], this.setValue = this.SetterByBindingTypeAndVersioning[a][s]; }, unbind: function () { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound; } }), Object.assign(Ra.prototype, { _getValue_unbound: Ra.prototype.getValue, _setValue_unbound: Ra.prototype.setValue });
    var Pa = /** @class */ (function () {
        function Pa(t, e, n, i) {
            if (n === void 0) { n = null; }
            if (i === void 0) { i = e.blendMode; }
            this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
            var r = e.tracks, o = r.length, s = new Array(o), a = { endingStart: y, endingEnd: y };
            for (var t_241 = 0; t_241 !== o; ++t_241) {
                var e_213 = r[t_241].createInterpolant(null);
                s[t_241] = e_213, e_213.settings = a;
            }
            this._interpolantSettings = a, this._interpolants = s, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        Pa.prototype.play = function () { return this._mixer._activateAction(this), this; };
        Pa.prototype.stop = function () { return this._mixer._deactivateAction(this), this.reset(); };
        Pa.prototype.reset = function () { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping(); };
        Pa.prototype.isRunning = function () { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this); };
        Pa.prototype.isScheduled = function () { return this._mixer._isActiveAction(this); };
        Pa.prototype.startAt = function (t) { return this._startTime = t, this; };
        Pa.prototype.setLoop = function (t, e) { return this.loop = t, this.repetitions = e, this; };
        Pa.prototype.setEffectiveWeight = function (t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading(); };
        Pa.prototype.getEffectiveWeight = function () { return this._effectiveWeight; };
        Pa.prototype.fadeIn = function (t) { return this._scheduleFading(t, 0, 1); };
        Pa.prototype.fadeOut = function (t) { return this._scheduleFading(t, 1, 0); };
        Pa.prototype.crossFadeFrom = function (t, e, n) { if (t.fadeOut(e), this.fadeIn(e), n) {
            var n_203 = this._clip.duration, i_161 = t._clip.duration, r_114 = i_161 / n_203, o_64 = n_203 / i_161;
            t.warp(1, r_114, e), this.warp(o_64, 1, e);
        } return this; };
        Pa.prototype.crossFadeTo = function (t, e, n) { return t.crossFadeFrom(this, e, n); };
        Pa.prototype.stopFading = function () { var t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this; };
        Pa.prototype.setEffectiveTimeScale = function (t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping(); };
        Pa.prototype.getEffectiveTimeScale = function () { return this._effectiveTimeScale; };
        Pa.prototype.setDuration = function (t) { return this.timeScale = this._clip.duration / t, this.stopWarping(); };
        Pa.prototype.syncWith = function (t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping(); };
        Pa.prototype.halt = function (t) { return this.warp(this._effectiveTimeScale, 0, t); };
        Pa.prototype.warp = function (t, e, n) { var i = this._mixer, r = i.time, o = this.timeScale; var s = this._timeScaleInterpolant; null === s && (s = i._lendControlInterpolant(), this._timeScaleInterpolant = s); var a = s.parameterPositions, l = s.sampleValues; return a[0] = r, a[1] = r + n, l[0] = t / o, l[1] = e / o, this; };
        Pa.prototype.stopWarping = function () { var t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this; };
        Pa.prototype.getMixer = function () { return this._mixer; };
        Pa.prototype.getClip = function () { return this._clip; };
        Pa.prototype.getRoot = function () { return this._localRoot || this._mixer._root; };
        Pa.prototype._update = function (t, e, n, i) { if (!this.enabled)
            return void this._updateWeight(t); var r = this._startTime; if (null !== r) {
            var i_162 = (t - r) * n;
            if (i_162 < 0 || 0 === n)
                return;
            this._startTime = null, e = n * i_162;
        } e *= this._updateTimeScale(t); var o = this._updateTime(e), s = this._updateWeight(t); if (s > 0) {
            var t_242 = this._interpolants, e_214 = this._propertyBindings;
            switch (this.blendMode) {
                case 2501:
                    for (var n_204 = 0, i_163 = t_242.length; n_204 !== i_163; ++n_204)
                        t_242[n_204].evaluate(o), e_214[n_204].accumulateAdditive(s);
                    break;
                case 2500:
                default: for (var n_205 = 0, r_115 = t_242.length; n_205 !== r_115; ++n_205)
                    t_242[n_205].evaluate(o), e_214[n_205].accumulate(i, s);
            }
        } };
        Pa.prototype._updateWeight = function (t) { var e = 0; if (this.enabled) {
            e = this.weight;
            var n_206 = this._weightInterpolant;
            if (null !== n_206) {
                var i_164 = n_206.evaluate(t)[0];
                e *= i_164, t > n_206.parameterPositions[1] && (this.stopFading(), 0 === i_164 && (this.enabled = !1));
            }
        } return this._effectiveWeight = e, e; };
        Pa.prototype._updateTimeScale = function (t) { var e = 0; if (!this.paused) {
            e = this.timeScale;
            var n_207 = this._timeScaleInterpolant;
            null !== n_207 && (e *= n_207.evaluate(t)[0], t > n_207.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e));
        } return this._effectiveTimeScale = e, e; };
        Pa.prototype._updateTime = function (t) { var e = this._clip.duration, n = this.loop; var i = this.time + t, r = this._loopCount; var o = 2202 === n; if (0 === t)
            return -1 === r ? i : o && 1 == (1 & r) ? e - i : i; if (2200 === n) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: {
                if (i >= e)
                    i = e;
                else {
                    if (!(i < 0)) {
                        this.time = i;
                        break t;
                    }
                    i = 0;
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 });
            }
        }
        else {
            if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), i >= e || i < 0) {
                var n_208 = Math.floor(i / e);
                i -= e * n_208, r += Math.abs(n_208);
                var s_43 = this.repetitions - r;
                if (s_43 <= 0)
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
                else {
                    if (1 === s_43) {
                        var e_215 = t < 0;
                        this._setEndings(e_215, !e_215, o);
                    }
                    else
                        this._setEndings(!1, !1, o);
                    this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: n_208 });
                }
            }
            else
                this.time = i;
            if (o && 1 == (1 & r))
                return e - i;
        } return i; };
        Pa.prototype._setEndings = function (t, e, n) { var i = this._interpolantSettings; n ? (i.endingStart = x, i.endingEnd = x) : (i.endingStart = t ? this.zeroSlopeAtStart ? x : y : b, i.endingEnd = e ? this.zeroSlopeAtEnd ? x : y : b); };
        Pa.prototype._scheduleFading = function (t, e, n) { var i = this._mixer, r = i.time; var o = this._weightInterpolant; null === o && (o = i._lendControlInterpolant(), this._weightInterpolant = o); var s = o.parameterPositions, a = o.sampleValues; return s[0] = r, a[0] = e, s[1] = r + t, a[1] = n, this; };
        return Pa;
    }());
    (/** @class */ (function (_super) {
        __extends(class_22, _super);
        function class_22(t) {
            var _this = this;
            _this = _super.call(this) || this, _this._root = t, _this._initMemoryManager(), _this._accuIndex = 0, _this.time = 0, _this.timeScale = 1;
            return _this;
        }
        class_22.prototype._bindAction = function (t, e) { var n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, o = t._propertyBindings, s = t._interpolants, a = n.uuid, l = this._bindingsByRootAndName; var c = l[a]; void 0 === c && (c = {}, l[a] = c); for (var t_243 = 0; t_243 !== r; ++t_243) {
            var r_116 = i[t_243], l_20 = r_116.name;
            var h_8 = c[l_20];
            if (void 0 !== h_8)
                o[t_243] = h_8;
            else {
                if (h_8 = o[t_243], void 0 !== h_8) {
                    null === h_8._cacheIndex && (++h_8.referenceCount, this._addInactiveBinding(h_8, a, l_20));
                    continue;
                }
                var i_165 = e && e._propertyBindings[t_243].binding.parsedPath;
                h_8 = new ya(Ra.create(n, l_20, i_165), r_116.ValueTypeName, r_116.getValueSize()), ++h_8.referenceCount, this._addInactiveBinding(h_8, a, l_20), o[t_243] = h_8;
            }
            s[t_243].resultBuffer = h_8.buffer;
        } };
        class_22.prototype._activateAction = function (t) { if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
                var e_216 = (t._localRoot || this._root).uuid, n_209 = t._clip.uuid, i_166 = this._actionsByClip[n_209];
                this._bindAction(t, i_166 && i_166.knownActions[0]), this._addInactiveAction(t, n_209, e_216);
            }
            var e_217 = t._propertyBindings;
            for (var t_244 = 0, n_210 = e_217.length; t_244 !== n_210; ++t_244) {
                var n_211 = e_217[t_244];
                0 == n_211.useCount++ && (this._lendBinding(n_211), n_211.saveOriginalState());
            }
            this._lendAction(t);
        } };
        class_22.prototype._deactivateAction = function (t) { if (this._isActiveAction(t)) {
            var e_218 = t._propertyBindings;
            for (var t_245 = 0, n_212 = e_218.length; t_245 !== n_212; ++t_245) {
                var n_213 = e_218[t_245];
                0 == --n_213.useCount && (n_213.restoreOriginalState(), this._takeBackBinding(n_213));
            }
            this._takeBackAction(t);
        } };
        class_22.prototype._initMemoryManager = function () { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; var t = this; this.stats = { actions: { get total() { return t._actions.length; }, get inUse() { return t._nActiveActions; } }, bindings: { get total() { return t._bindings.length; }, get inUse() { return t._nActiveBindings; } }, controlInterpolants: { get total() { return t._controlInterpolants.length; }, get inUse() { return t._nActiveControlInterpolants; } } }; };
        class_22.prototype._isActiveAction = function (t) { var e = t._cacheIndex; return null !== e && e < this._nActiveActions; };
        class_22.prototype._addInactiveAction = function (t, e, n) { var i = this._actions, r = this._actionsByClip; var o = r[e]; if (void 0 === o)
            o = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = o;
        else {
            var e_219 = o.knownActions;
            t._byClipCacheIndex = e_219.length, e_219.push(t);
        } t._cacheIndex = i.length, i.push(t), o.actionByRoot[n] = t; };
        class_22.prototype._removeInactiveAction = function (t) { var e = this._actions, n = e[e.length - 1], i = t._cacheIndex; n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null; var r = t._clip.uuid, o = this._actionsByClip, s = o[r], a = s.knownActions, l = a[a.length - 1], c = t._byClipCacheIndex; l._byClipCacheIndex = c, a[c] = l, a.pop(), t._byClipCacheIndex = null, delete s.actionByRoot[(t._localRoot || this._root).uuid], 0 === a.length && delete o[r], this._removeInactiveBindingsForAction(t); };
        class_22.prototype._removeInactiveBindingsForAction = function (t) { var e = t._propertyBindings; for (var t_246 = 0, n_214 = e.length; t_246 !== n_214; ++t_246) {
            var n_215 = e[t_246];
            0 == --n_215.referenceCount && this._removeInactiveBinding(n_215);
        } };
        class_22.prototype._lendAction = function (t) { var e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i]; t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r; };
        class_22.prototype._takeBackAction = function (t) { var e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i]; t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r; };
        class_22.prototype._addInactiveBinding = function (t, e, n) { var i = this._bindingsByRootAndName, r = this._bindings; var o = i[e]; void 0 === o && (o = {}, i[e] = o), o[n] = t, t._cacheIndex = r.length, r.push(t); };
        class_22.prototype._removeInactiveBinding = function (t) { var e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, s = o[i], a = e[e.length - 1], l = t._cacheIndex; a._cacheIndex = l, e[l] = a, e.pop(), delete s[r], 0 === Object.keys(s).length && delete o[i]; };
        class_22.prototype._lendBinding = function (t) { var e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i]; t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r; };
        class_22.prototype._takeBackBinding = function (t) { var e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i]; t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r; };
        class_22.prototype._lendControlInterpolant = function () { var t = this._controlInterpolants, e = this._nActiveControlInterpolants++; var n = t[e]; return void 0 === n && (n = new ls(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n; };
        class_22.prototype._takeBackControlInterpolant = function (t) { var e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i]; t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r; };
        class_22.prototype.clipAction = function (t, e, n) { var i = e || this._root, r = i.uuid; var o = "string" == typeof t ? _s.findByName(i, t) : t; var s = null !== o ? o.uuid : t, a = this._actionsByClip[s]; var l = null; if (void 0 === n && (n = null !== o ? o.blendMode : 2500), void 0 !== a) {
            var t_247 = a.actionByRoot[r];
            if (void 0 !== t_247 && t_247.blendMode === n)
                return t_247;
            l = a.knownActions[0], null === o && (o = l._clip);
        } if (null === o)
            return null; var c = new Pa(this, o, e, n); return this._bindAction(c, l), this._addInactiveAction(c, s, r), c; };
        class_22.prototype.existingAction = function (t, e) { var n = e || this._root, i = n.uuid, r = "string" == typeof t ? _s.findByName(n, t) : t, o = r ? r.uuid : t, s = this._actionsByClip[o]; return void 0 !== s && s.actionByRoot[i] || null; };
        class_22.prototype.stopAllAction = function () { var t = this._actions; for (var e_220 = this._nActiveActions - 1; e_220 >= 0; --e_220)
            t[e_220].stop(); return this; };
        class_22.prototype.update = function (t) { t *= this.timeScale; var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1; for (var s_44 = 0; s_44 !== n; ++s_44)
            e[s_44]._update(i, t, r, o); var s = this._bindings, a = this._nActiveBindings; for (var t_248 = 0; t_248 !== a; ++t_248)
            s[t_248].apply(o); return this; };
        class_22.prototype.setTime = function (t) { this.time = 0; for (var t_249 = 0; t_249 < this._actions.length; t_249++)
            this._actions[t_249].time = 0; return this.update(t); };
        class_22.prototype.getRoot = function () { return this._root; };
        class_22.prototype.uncacheClip = function (t) { var e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n]; if (void 0 !== r) {
            var t_250 = r.knownActions;
            for (var n_216 = 0, i_167 = t_250.length; n_216 !== i_167; ++n_216) {
                var i_168 = t_250[n_216];
                this._deactivateAction(i_168);
                var r_117 = i_168._cacheIndex, o_65 = e[e.length - 1];
                i_168._cacheIndex = null, i_168._byClipCacheIndex = null, o_65._cacheIndex = r_117, e[r_117] = o_65, e.pop(), this._removeInactiveBindingsForAction(i_168);
            }
            delete i[n];
        } };
        class_22.prototype.uncacheRoot = function (t) { var e = t.uuid, n = this._actionsByClip; for (var t_251 in n) {
            var i_169 = n[t_251].actionByRoot[e];
            void 0 !== i_169 && (this._deactivateAction(i_169), this._removeInactiveAction(i_169));
        } var i = this._bindingsByRootAndName[e]; if (void 0 !== i)
            for (var t_252 in i) {
                var e_221 = i[t_252];
                e_221.restoreOriginalState(), this._removeInactiveBinding(e_221);
            } };
        class_22.prototype.uncacheAction = function (t, e) { var n = this.existingAction(t, e); null !== n && (this._deactivateAction(n), this._removeInactiveAction(n)); };
        return class_22;
    }(A))).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
    var Da = /** @class */ (function () {
        function Da(t) {
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
        }
        Da.prototype.clone = function () { return new Da(void 0 === this.value.clone ? this.value : this.value.clone()); };
        return Da;
    }());
    function Ia(t, e, n) { Er.call(this, t, e), this.meshPerAttribute = n || 1; }
    function Na(t, e, n, i, r) { this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0; }
    function Oa(t, e, n, i) {
        if (n === void 0) { n = 0; }
        if (i === void 0) { i = 1 / 0; }
        this.ray = new ft(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new Tt, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function () { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points; } } });
    }
    function za(t, e) { return t.distance - e.distance; }
    function Ba(t, e, n, i) { if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
        var i_170 = t.children;
        for (var t_253 = 0, r_118 = i_170.length; t_253 < r_118; t_253++)
            Ba(i_170[t_253], e, n, !0);
    } }
    Ia.prototype = Object.assign(Object.create(Er.prototype), { constructor: Ia, isInstancedInterleavedBuffer: !0, copy: function (t) { return Er.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this; }, clone: function (t) { var e = Er.prototype.clone.call(this, t); return e.meshPerAttribute = this.meshPerAttribute, e; }, toJSON: function (t) { var e = Er.prototype.toJSON.call(this, t); return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e; } }), Object.defineProperty(Na.prototype, "needsUpdate", { set: function (t) { !0 === t && this.version++; } }), Object.assign(Na.prototype, { isGLBufferAttribute: !0, setBuffer: function (t) { return this.buffer = t, this; }, setType: function (t, e) { return this.type = t, this.elementSize = e, this; }, setItemSize: function (t) { return this.itemSize = t, this; }, setCount: function (t) { return this.count = t, this; } }), Object.assign(Oa.prototype, { set: function (t, e) { this.ray.set(t, e); }, setFromCamera: function (t, e) { e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type); }, intersectObject: function (t, e, n) {
            if (e === void 0) { e = !1; }
            if (n === void 0) { n = []; }
            return Ba(t, this, n, e), n.sort(za), n;
        }, intersectObjects: function (t, e, n) {
            if (e === void 0) { e = !1; }
            if (n === void 0) { n = []; }
            for (var i_171 = 0, r_119 = t.length; i_171 < r_119; i_171++)
                Ba(t[i_171], this, n, e);
            return n.sort(za), n;
        } });
    var Ha = new P;
    var Fa = /** @class */ (function () {
        function Fa(t, e) {
            if (t === void 0) { t = new P(1 / 0, 1 / 0); }
            if (e === void 0) { e = new P(-1 / 0, -1 / 0); }
            this.min = t, this.max = e;
        }
        Fa.prototype.set = function (t, e) { return this.min.copy(t), this.max.copy(e), this; };
        Fa.prototype.setFromPoints = function (t) { this.makeEmpty(); for (var e_222 = 0, n_217 = t.length; e_222 < n_217; e_222++)
            this.expandByPoint(t[e_222]); return this; };
        Fa.prototype.setFromCenterAndSize = function (t, e) { var n = Ha.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this; };
        Fa.prototype.clone = function () { return (new this.constructor).copy(this); };
        Fa.prototype.copy = function (t) { return this.min.copy(t.min), this.max.copy(t.max), this; };
        Fa.prototype.makeEmpty = function () { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this; };
        Fa.prototype.isEmpty = function () { return this.max.x < this.min.x || this.max.y < this.min.y; };
        Fa.prototype.getCenter = function (t) { return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new P), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5); };
        Fa.prototype.getSize = function (t) { return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new P), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min); };
        Fa.prototype.expandByPoint = function (t) { return this.min.min(t), this.max.max(t), this; };
        Fa.prototype.expandByVector = function (t) { return this.min.sub(t), this.max.add(t), this; };
        Fa.prototype.expandByScalar = function (t) { return this.min.addScalar(-t), this.max.addScalar(t), this; };
        Fa.prototype.containsPoint = function (t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y); };
        Fa.prototype.containsBox = function (t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y; };
        Fa.prototype.getParameter = function (t, e) { return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new P), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)); };
        Fa.prototype.intersectsBox = function (t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y); };
        Fa.prototype.clampPoint = function (t, e) { return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new P), e.copy(t).clamp(this.min, this.max); };
        Fa.prototype.distanceToPoint = function (t) { return Ha.copy(t).clamp(this.min, this.max).sub(t).length(); };
        Fa.prototype.intersect = function (t) { return this.min.max(t.min), this.max.min(t.max), this; };
        Fa.prototype.union = function (t) { return this.min.min(t.min), this.max.max(t.max), this; };
        Fa.prototype.translate = function (t) { return this.min.add(t), this.max.add(t), this; };
        Fa.prototype.equals = function (t) { return t.min.equals(this.min) && t.max.equals(this.max); };
        return Fa;
    }());
    function Ua(t) { Ut.call(this), this.material = t, this.render = function () { }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0; }
    Fa.prototype.isBox2 = !0, Ua.prototype = Object.create(Ut.prototype), Ua.prototype.constructor = Ua, Ua.prototype.isImmediateRenderObject = !0;
    var ka = new k, Ga = new mt, Va = new mt;
    function Wa(t) { var e = []; t && t.isBone && e.push(t); for (var n_218 = 0; n_218 < t.children.length; n_218++)
        e.push.apply(e, Wa(t.children[n_218])); return e; }
    var ja = new Float32Array(1), qa = (new Int32Array(ja.buffer), Math.pow(2, 8), [.125, .215, .35, .446, .526, .582]), Xa = 5 + qa.length, Ya = new ue({ side: 1, depthWrite: !1, depthTest: !1 }), _b = (new Qe(new $e, Ya), Ka()), Ja = _b._lodPlanes, Za = _b._sizeLods, Qa = _b._sigmas;
    function Ka() { var t = [], e = [], n = []; var i = 8; for (var r_120 = 0; r_120 < Xa; r_120++) {
        var o_66 = Math.pow(2, i);
        e.push(o_66);
        var s_45 = 1 / o_66;
        r_120 > 4 ? s_45 = qa[r_120 - 8 + 4 - 1] : 0 == r_120 && (s_45 = 0), n.push(s_45);
        var a_28 = 1 / (o_66 - 1), l_21 = -a_28 / 2, c_15 = 1 + a_28 / 2, h_9 = [l_21, l_21, c_15, l_21, c_15, c_15, l_21, l_21, c_15, c_15, l_21, c_15], u_13 = 6, d_14 = 6, p_9 = 3, f_5 = 2, m_2 = 1, g_3 = new Float32Array(p_9 * d_14 * u_13), v_4 = new Float32Array(f_5 * d_14 * u_13), _3 = new Float32Array(m_2 * d_14 * u_13);
        for (var t_254 = 0; t_254 < u_13; t_254++) {
            var e_223 = t_254 % 3 * 2 / 3 - 1, n_219 = t_254 > 2 ? 0 : -1, i_172 = [e_223, n_219, 0, e_223 + 2 / 3, n_219, 0, e_223 + 2 / 3, n_219 + 1, 0, e_223, n_219, 0, e_223 + 2 / 3, n_219 + 1, 0, e_223, n_219 + 1, 0];
            g_3.set(i_172, p_9 * d_14 * t_254), v_4.set(h_9, f_5 * d_14 * t_254);
            var r_121 = [t_254, t_254, t_254, t_254, t_254, t_254];
            _3.set(r_121, m_2 * d_14 * t_254);
        }
        var y_3 = new Ie;
        y_3.setAttribute("position", new fe(g_3, p_9)), y_3.setAttribute("uv", new fe(v_4, f_5)), y_3.setAttribute("faceIndex", new fe(_3, m_2)), t.push(y_3), i > 4 && i--;
    } return { _lodPlanes: t, _sizeLods: e, _sigmas: n }; }
    function $a(t, e) { var n = t.__state.conversionName.toString(), i = Math.round(t.r), r = Math.round(t.g), o = Math.round(t.b), s = t.a, a = Math.round(t.h), l = t.s.toFixed(1), c = t.v.toFixed(1); if (e || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
        for (var h = t.hex.toString(16); h.length < 6;)
            h = "0" + h;
        return "#" + h;
    } return "CSS_RGB" === n ? "rgb(" + i + "," + r + "," + o + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + r + "," + o + "," + s + ")" : "HEX" === n ? "0x" + t.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + r + "," + o + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + r + "," + o + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + r + ",b:" + o + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + r + ",b:" + o + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + c + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + c + ",a:" + s + "}" : "unknown format"; }
    Math.sqrt(5), Rs.create = function (t, e) { return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Rs.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t; }, Zs.prototype.fromPoints = function (t) { return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t); }, /** @class */ (function (_super) {
        __extends(class_23, _super);
        function class_23(t, e, n, i) {
            if (t === void 0) { t = 10; }
            if (e === void 0) { e = 10; }
            if (n === void 0) { n = 4473924; }
            if (i === void 0) { i = 8947848; }
            var _this = this;
            n = new he(n), i = new he(i);
            var r = e / 2, o = t / e, s = t / 2, a = [], l = [];
            for (var t_255 = 0, c_16 = 0, h_10 = -s; t_255 <= e; t_255++, h_10 += o) {
                a.push(-s, 0, h_10, s, 0, h_10), a.push(h_10, 0, -s, h_10, 0, s);
                var e_224 = t_255 === r ? n : i;
                e_224.toArray(l, c_16), c_16 += 3, e_224.toArray(l, c_16), c_16 += 3, e_224.toArray(l, c_16), c_16 += 3, e_224.toArray(l, c_16), c_16 += 3;
            }
            var c = new Ie;
            c.setAttribute("position", new Me(a, 3)), c.setAttribute("color", new Me(l, 3)), _this = _super.call(this, c, new so({ vertexColors: !0, toneMapped: !1 })) || this, _this.type = "GridHelper";
            return _this;
        }
        return class_23;
    }(go)).prototype.setColors = function () { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."); }, /** @class */ (function (_super) {
        __extends(class_24, _super);
        function class_24(t) {
            var _this = this;
            var e = Wa(t), n = new Ie, i = [], r = [], o = new he(0, 0, 1), s = new he(0, 1, 0);
            for (var t_256 = 0; t_256 < e.length; t_256++) {
                var n_220 = e[t_256];
                n_220.parent && n_220.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(s.r, s.g, s.b));
            }
            n.setAttribute("position", new Me(i, 3)), n.setAttribute("color", new Me(r, 3)), _this = _super.call(this, n, new so({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 })) || this, _this.type = "SkeletonHelper", _this.isSkeletonHelper = !0, _this.root = t, _this.bones = e, _this.matrix = t.matrixWorld, _this.matrixAutoUpdate = !1;
            return _this;
        }
        class_24.prototype.updateMatrixWorld = function (t) { var e = this.bones, n = this.geometry, i = n.getAttribute("position"); Va.copy(this.root.matrixWorld).invert(); for (var t_257 = 0, n_221 = 0; t_257 < e.length; t_257++) {
            var r_122 = e[t_257];
            r_122.parent && r_122.parent.isBone && (Ga.multiplyMatrices(Va, r_122.matrixWorld), ka.setFromMatrixPosition(Ga), i.setXYZ(n_221, ka.x, ka.y, ka.z), Ga.multiplyMatrices(Va, r_122.parent.matrixWorld), ka.setFromMatrixPosition(Ga), i.setXYZ(n_221 + 1, ka.x, ka.y, ka.z), n_221 += 2);
        } n.getAttribute("position").needsUpdate = !0, _super.prototype.updateMatrixWorld.call(this, t); };
        return class_24;
    }(go)).prototype.update = function () { console.error("THREE.SkeletonHelper: update() no longer needs to be called."); }, ws.prototype.extractUrlBase = function (t) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), function (t) { var e = t.lastIndexOf("/"); return -1 === e ? "./" : t.substr(0, e + 1); }(t); }, ws.Handlers = { add: function () { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."); }, get: function () { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."); } }, Fa.prototype.center = function (t) { return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t); }, Fa.prototype.empty = function () { return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty(); }, Fa.prototype.isIntersectionBox = function (t) { return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t); }, Fa.prototype.size = function (t) { return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t); }, W.prototype.center = function (t) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t); }, W.prototype.empty = function () { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty(); }, W.prototype.isIntersectionBox = function (t) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t); }, W.prototype.isIntersectionSphere = function (t) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t); }, W.prototype.size = function (t) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t); }, st.prototype.empty = function () { return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty(); }, fn.prototype.setFromMatrix = function (t) { return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t); }, R.random16 = function () { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random(); }, R.nearestPowerOfTwo = function (t) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), R.floorPowerOfTwo(t); }, R.nextPowerOfTwo = function (t) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), R.ceilPowerOfTwo(t); }, D.prototype.flattenToArrayOffset = function (t, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e); }, D.prototype.multiplyVector3 = function (t) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this); }, D.prototype.multiplyVector3Array = function () { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed."); }, D.prototype.applyToBufferAttribute = function (t) { return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this); }, D.prototype.applyToVector3Array = function () { console.error("THREE.Matrix3: .applyToVector3Array() has been removed."); }, D.prototype.getInverse = function (t) { return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert(); }, mt.prototype.extractPosition = function (t) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t); }, mt.prototype.flattenToArrayOffset = function (t, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e); }, mt.prototype.getPosition = function () { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new k).setFromMatrixColumn(this, 3); }, mt.prototype.setRotationFromQuaternion = function (t) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t); }, mt.prototype.multiplyToArray = function () { console.warn("THREE.Matrix4: .multiplyToArray() has been removed."); }, mt.prototype.multiplyVector3 = function (t) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this); }, mt.prototype.multiplyVector4 = function (t) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this); }, mt.prototype.multiplyVector3Array = function () { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed."); }, mt.prototype.rotateAxis = function (t) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this); }, mt.prototype.crossVector = function (t) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this); }, mt.prototype.translate = function () { console.error("THREE.Matrix4: .translate() has been removed."); }, mt.prototype.rotateX = function () { console.error("THREE.Matrix4: .rotateX() has been removed."); }, mt.prototype.rotateY = function () { console.error("THREE.Matrix4: .rotateY() has been removed."); }, mt.prototype.rotateZ = function () { console.error("THREE.Matrix4: .rotateZ() has been removed."); }, mt.prototype.rotateByAxis = function () { console.error("THREE.Matrix4: .rotateByAxis() has been removed."); }, mt.prototype.applyToBufferAttribute = function (t) { return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this); }, mt.prototype.applyToVector3Array = function () { console.error("THREE.Matrix4: .applyToVector3Array() has been removed."); }, mt.prototype.makeFrustum = function (t, e, n, i, r, o) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, o); }, mt.prototype.getInverse = function (t) { return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert(); }, Wt.prototype.isIntersectionLine = function (t) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t); }, U.prototype.multiplyVector3 = function (t) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this); }, U.prototype.inverse = function () { return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert(); }, ft.prototype.isIntersectionBox = function (t) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t); }, ft.prototype.isIntersectionPlane = function (t) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t); }, ft.prototype.isIntersectionSphere = function (t) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t); }, ee.prototype.area = function () { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea(); }, ee.prototype.barycoordFromPoint = function (t, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e); }, ee.prototype.midpoint = function (t) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t); }, ee.prototypenormal = function (t) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t); }, ee.prototype.plane = function (t) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t); }, ee.barycoordFromPoint = function (t, e, n, i, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), ee.getBarycoord(t, e, n, i, r); }, ee.normal = function (t, e, n, i) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), ee.getNormal(t, e, n, i); }, Qs.prototype.extractAllPoints = function (t) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t); }, Qs.prototype.extrude = function (t) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ko(this, t); }, Qs.prototype.makeGeometry = function (t) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new es(this, t); }, P.prototype.fromAttribute = function (t, e, n) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n); }, P.prototype.distanceToManhattan = function (t) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t); }, P.prototype.lengthManhattan = function () { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); }, k.prototype.setEulerFromRotationMatrix = function () { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."); }, k.prototype.setEulerFromQuaternion = function () { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."); }, k.prototype.getPositionFromMatrix = function (t) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t); }, k.prototype.getScaleFromMatrix = function (t) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t); }, k.prototype.getColumnFromMatrix = function (t, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t); }, k.prototype.applyProjection = function (t) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t); }, k.prototype.fromAttribute = function (t, e, n) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n); }, k.prototype.distanceToManhattan = function (t) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t); }, k.prototype.lengthManhattan = function () { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); }, H.prototype.fromAttribute = function (t, e, n) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n); }, H.prototype.lengthManhattan = function () { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); }, Ut.prototype.getChildByName = function (t) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t); }, Ut.prototype.renderDepth = function () { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."); }, Ut.prototype.translate = function (t, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t); }, Ut.prototype.getWorldRotation = function () { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."); }, Ut.prototype.applyMatrix = function (t) { return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t); }, Object.defineProperties(Ut.prototype, { eulerOrder: { get: function () { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order; }, set: function (t) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t; } }, useQuaternion: { get: function () { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."); }, set: function () { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."); } } }), Qe.prototype.setDrawMode = function () { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."); }, Object.defineProperties(Qe.prototype, { drawMode: { get: function () { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0; }, set: function () { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."); } } }), Object.defineProperties(/** @class */ (function (_super) {
        __extends(class_25, _super);
        function class_25() {
            var _this = this;
            _this = _super.call(this) || this, _this._currentLevel = 0, _this.type = "LOD", Object.defineProperties(_this, { levels: { enumerable: !0, value: [] }, isLOD: { value: !0 } }), _this.autoUpdate = !0;
            return _this;
        }
        class_25.prototype.copy = function (t) { _super.prototype.copy.call(this, t, !1); var e = t.levels; for (var t_258 = 0, n_222 = e.length; t_258 < n_222; t_258++) {
            var n_223 = e[t_258];
            this.addLevel(n_223.object.clone(), n_223.distance);
        } return this.autoUpdate = t.autoUpdate, this; };
        class_25.prototype.addLevel = function (t, e) {
            if (e === void 0) { e = 0; }
            e = Math.abs(e);
            var n = this.levels;
            var i;
            for (i = 0; i < n.length && !(e < n[i].distance); i++)
                ;
            return n.splice(i, 0, { distance: e, object: t }), this.add(t), this;
        };
        class_25.prototype.getCurrentLevel = function () { return this._currentLevel; };
        class_25.prototype.getObjectForDistance = function (t) { var e = this.levels; if (e.length > 0) {
            var n_224, i_173;
            for (n_224 = 1, i_173 = e.length; n_224 < i_173 && !(t < e[n_224].distance); n_224++)
                ;
            return e[n_224 - 1].object;
        } return null; };
        class_25.prototype.raycast = function (t, e) { if (this.levels.length > 0) {
            Vr.setFromMatrixPosition(this.matrixWorld);
            var n_225 = t.ray.origin.distanceTo(Vr);
            this.getObjectForDistance(n_225).raycast(t, e);
        } };
        class_25.prototype.update = function (t) { var e = this.levels; if (e.length > 1) {
            Vr.setFromMatrixPosition(t.matrixWorld), Wr.setFromMatrixPosition(this.matrixWorld);
            var n_226 = Vr.distanceTo(Wr) / t.zoom;
            var i_174, r_123;
            for (e[0].object.visible = !0, i_174 = 1, r_123 = e.length; i_174 < r_123 && n_226 >= e[i_174].distance; i_174++)
                e[i_174 - 1].object.visible = !1, e[i_174].object.visible = !0;
            for (this._currentLevel = i_174 - 1; i_174 < r_123; i_174++)
                e[i_174].object.visible = !1;
        } };
        class_25.prototype.toJSON = function (t) { var e = _super.prototype.toJSON.call(this, t); !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = []; var n = this.levels; for (var t_259 = 0, i_175 = n.length; t_259 < i_175; t_259++) {
            var i_176 = n[t_259];
            e.object.levels.push({ object: i_176.object.uuid, distance: i_176.distance });
        } return e; };
        return class_25;
    }(Ut)).prototype, { objects: { get: function () { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels; } } }), Object.defineProperty(to.prototype, "useVertexTexture", { get: function () { console.warn("THREE.Skeleton: useVertexTexture has been removed."); }, set: function () { console.warn("THREE.Skeleton: useVertexTexture has been removed."); } }), Zr.prototype.initBones = function () { console.error("THREE.SkinnedMesh: initBones() has been removed."); }, Object.defineProperty(Rs.prototype, "__arcLengthDivisions", { get: function () { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions; }, set: function (t) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t; } }), sn.prototype.setLens = function (t, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t); }, Object.defineProperties(Ks.prototype, { onlyShadow: { set: function () { console.warn("THREE.Light: .onlyShadow has been removed."); } }, shadowCameraFov: { set: function (t) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t; } }, shadowCameraLeft: { set: function (t) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t; } }, shadowCameraRight: { set: function (t) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t; } }, shadowCameraTop: { set: function (t) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t; } }, shadowCameraBottom: { set: function (t) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t; } }, shadowCameraNear: { set: function (t) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t; } }, shadowCameraFar: { set: function (t) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t; } }, shadowCameraVisible: { set: function () { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."); } }, shadowBias: { set: function (t) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t; } }, shadowDarkness: { set: function () { console.warn("THREE.Light: .shadowDarkness has been removed."); } }, shadowMapWidth: { set: function (t) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t; } }, shadowMapHeight: { set: function (t) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t; } } }), Object.defineProperties(fe.prototype, { length: { get: function () { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length; } }, dynamic: { get: function () { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === E; }, set: function () { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(E); } } }), fe.prototype.setDynamic = function (t) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? E : S), this; }, fe.prototype.copyIndicesArray = function () { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed."); }, fe.prototype.setArray = function () { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"); }, Ie.prototype.addIndex = function (t) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t); }, Ie.prototype.addAttribute = function (t, e) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new fe(arguments[1], arguments[2]))); }, Ie.prototype.addDrawCall = function (t, e, n) { void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e); }, Ie.prototype.clearDrawCalls = function () { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups(); }, Ie.prototype.computeOffsets = function () { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed."); }, Ie.prototype.removeAttribute = function (t) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t); }, Ie.prototype.applyMatrix = function (t) { return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t); }, Object.defineProperties(Ie.prototype, { drawcalls: { get: function () { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups; } }, offsets: { get: function () { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups; } } }), Object.defineProperties(pa.prototype, { maxInstancedCount: { get: function () { return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount; }, set: function (t) { console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = t; } } }), Object.defineProperties(Oa.prototype, { linePrecision: { get: function () { return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold; }, set: function (t) { console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t; } } }), Object.defineProperties(Er.prototype, { dynamic: { get: function () { return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === E; }, set: function (t) { console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t); } } }), Er.prototype.setDynamic = function (t) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? E : S), this; }, Er.prototype.setArray = function () { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"); }, Ko.prototype.getArrays = function () { console.error("THREE.ExtrudeGeometry: .getArrays() has been removed."); }, Ko.prototype.addShapeList = function () { console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed."); }, Ko.prototype.addShape = function () { console.error("THREE.ExtrudeGeometry: .addShape() has been removed."); }, Sr.prototype.dispose = function () { console.error("THREE.Scene: .dispose() has been removed."); }, Object.defineProperties(Da.prototype, { dynamic: { set: function () { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."); } }, onUpdate: { value: function () { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this; } } }), Object.defineProperties(ie.prototype, { wrapAround: { get: function () { console.warn("THREE.Material: .wrapAround has been removed."); }, set: function () { console.warn("THREE.Material: .wrapAround has been removed."); } }, overdraw: { get: function () { console.warn("THREE.Material: .overdraw has been removed."); }, set: function () { console.warn("THREE.Material: .overdraw has been removed."); } }, wrapRGB: { get: function () { return console.warn("THREE.Material: .wrapRGB has been removed."), new he; } }, shading: { get: function () { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."); }, set: function (t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t; } }, stencilMask: { get: function () { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask; }, set: function (t) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t; } } }), Object.defineProperties(rs.prototype, { metal: { get: function () { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1; }, set: function () { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"); } } }), Object.defineProperties(is.prototype, { transparency: { get: function () { return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission; }, set: function (t) { console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = t; } } }), Object.defineProperties(rn.prototype, { derivatives: { get: function () { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives; }, set: function (t) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t; } } }), br.prototype.clearTarget = function (t, e, n, i) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i); }, br.prototype.animate = function (t) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t); }, br.prototype.getCurrentRenderTarget = function () { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget(); }, br.prototype.getMaxAnisotropy = function () { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy(); }, br.prototype.getPrecision = function () { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision; }, br.prototype.resetGLState = function () { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset(); }, br.prototype.supportsFloatTextures = function () { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float"); }, br.prototype.supportsHalfFloatTextures = function () { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float"); }, br.prototype.supportsStandardDerivatives = function () { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives"); }, br.prototype.supportsCompressedTextureS3TC = function () { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc"); }, br.prototype.supportsCompressedTexturePVRTC = function () { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc"); }, br.prototype.supportsBlendMinMax = function () { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax"); }, br.prototype.supportsVertexTextures = function () { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures; }, br.prototype.supportsInstancedArrays = function () { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays"); }, br.prototype.enableScissorTest = function (t) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t); }, br.prototype.initMaterial = function () { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed."); }, br.prototype.addPrePlugin = function () { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed."); }, br.prototype.addPostPlugin = function () { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed."); }, br.prototype.updateShadowMap = function () { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed."); }, br.prototype.setFaceCulling = function () { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed."); }, br.prototype.allocTextureUnit = function () { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed."); }, br.prototype.setTexture = function () { console.warn("THREE.WebGLRenderer: .setTexture() has been removed."); }, br.prototype.setTexture2D = function () { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed."); }, br.prototype.setTextureCube = function () { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed."); }, br.prototype.getActiveMipMapLevel = function () { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel(); }, Object.defineProperties(br.prototype, { shadowMapEnabled: { get: function () { return this.shadowMap.enabled; }, set: function (t) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t; } }, shadowMapType: { get: function () { return this.shadowMap.type; }, set: function (t) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t; } }, shadowMapCullFace: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."); } }, context: { get: function () { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext(); } }, vr: { get: function () { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr; } }, gammaInput: { get: function () { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1; }, set: function () { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."); } }, gammaOutput: { get: function () { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1; }, set: function (t) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? 3001 : w; } }, toneMappingWhitePoint: { get: function () { return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1; }, set: function () { console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."); } } }), Object.defineProperties(dr.prototype, { cullFace: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."); } }, renderReverseSided: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."); } }, renderSingleSided: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."); } } }), Object.defineProperties(F.prototype, { wrapS: { get: function () { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t; } }, wrapT: { get: function () { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t; } }, magFilter: { get: function () { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t; } }, minFilter: { get: function () { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t; } }, anisotropy: { get: function () { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t; } }, offset: { get: function () { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t; } }, repeat: { get: function () { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t; } }, format: { get: function () { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t; } }, type: { get: function () { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t; } }, generateMipmaps: { get: function () { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps; }, set: function (t) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t; } } }), Object.defineProperties(/** @class */ (function (_super) {
        __extends(class_26, _super);
        function class_26(t) {
            var _this = this;
            _this = _super.call(this) || this, _this.type = "Audio", _this.listener = t, _this.context = t.context, _this.gain = _this.context.createGain(), _this.gain.connect(t.getInput()), _this.autoplay = !1, _this.buffer = null, _this.detune = 0, _this.loop = !1, _this.loopStart = 0, _this.loopEnd = 0, _this.offset = 0, _this.duration = void 0, _this.playbackRate = 1, _this.isPlaying = !1, _this.hasPlaybackControl = !0, _this.source = null, _this.sourceType = "empty", _this._startedAt = 0, _this._progress = 0, _this._connected = !1, _this.filters = [];
            return _this;
        }
        class_26.prototype.getOutput = function () { return this.gain; };
        class_26.prototype.setNodeSource = function (t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this; };
        class_26.prototype.setMediaElementSource = function (t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this; };
        class_26.prototype.setMediaStreamSource = function (t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this; };
        class_26.prototype.setBuffer = function (t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this; };
        class_26.prototype.play = function (t) {
            if (t === void 0) { t = 0; }
            if (!0 === this.isPlaying)
                return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl)
                return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            var e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        };
        class_26.prototype.pause = function () { if (!1 !== this.hasPlaybackControl)
            return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this; console.warn("THREE.Audio: this Audio has no playback control."); };
        class_26.prototype.stop = function () { if (!1 !== this.hasPlaybackControl)
            return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this; console.warn("THREE.Audio: this Audio has no playback control."); };
        class_26.prototype.connect = function () { if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (var t_260 = 1, e_225 = this.filters.length; t_260 < e_225; t_260++)
                this.filters[t_260 - 1].connect(this.filters[t_260]);
            this.filters[this.filters.length - 1].connect(this.getOutput());
        }
        else
            this.source.connect(this.getOutput()); return this._connected = !0, this; };
        class_26.prototype.disconnect = function () { if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (var t_261 = 1, e_226 = this.filters.length; t_261 < e_226; t_261++)
                this.filters[t_261 - 1].disconnect(this.filters[t_261]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput());
        }
        else
            this.source.disconnect(this.getOutput()); return this._connected = !1, this; };
        class_26.prototype.getFilters = function () { return this.filters; };
        class_26.prototype.setFilters = function (t) { return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this; };
        class_26.prototype.setDetune = function (t) { if (this.detune = t, void 0 !== this.source.detune)
            return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this; };
        class_26.prototype.getDetune = function () { return this.detune; };
        class_26.prototype.getFilter = function () { return this.getFilters()[0]; };
        class_26.prototype.setFilter = function (t) { return this.setFilters(t ? [t] : []); };
        class_26.prototype.setPlaybackRate = function (t) { if (!1 !== this.hasPlaybackControl)
            return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this; console.warn("THREE.Audio: this Audio has no playback control."); };
        class_26.prototype.getPlaybackRate = function () { return this.playbackRate; };
        class_26.prototype.onEnded = function () { this.isPlaying = !1; };
        class_26.prototype.getLoop = function () { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop; };
        class_26.prototype.setLoop = function (t) { if (!1 !== this.hasPlaybackControl)
            return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this; console.warn("THREE.Audio: this Audio has no playback control."); };
        class_26.prototype.setLoopStart = function (t) { return this.loopStart = t, this; };
        class_26.prototype.setLoopEnd = function (t) { return this.loopEnd = t, this; };
        class_26.prototype.getVolume = function () { return this.gain.gain.value; };
        class_26.prototype.setVolume = function (t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this; };
        return class_26;
    }(Ut)).prototype, { load: { value: function (t) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); var e = this; return (new va).load(t, (function (t) { e.setBuffer(t); })), this; } }, startTime: { set: function () { console.warn("THREE.Audio: .startTime is now .play( delay )."); } } }), ln.prototype.updateCubeMap = function (t, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e); }, ln.prototype.clear = function (t, e, n, i) { return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i); }, N.crossOrigin = void 0, N.loadTexture = function (t, e, n, i) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); var r = new Cs; r.setCrossOrigin(this.crossOrigin); var o = r.load(t, n, void 0, i); return e && (o.mapping = e), o; }, N.loadTextureCube = function (t, e, n, i) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); var r = new As; r.setCrossOrigin(this.crossOrigin); var o = r.load(t, n, void 0, i); return e && (o.mapping = e), o; }, N.loadCompressedTexture = function () { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."); }, N.loadCompressedTextureCube = function () { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."); }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "126" } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "126");
    var tl = Array.prototype.forEach, el = Array.prototype.slice, nl = { BREAK: {}, extend: function (t) { return this.each(el.call(arguments, 1), (function (e) { (this.isObject(e) ? Object.keys(e) : []).forEach(function (n) { this.isUndefined(e[n]) || (t[n] = e[n]); }.bind(this)); }), this), t; }, defaults: function (t) { return this.each(el.call(arguments, 1), (function (e) { (this.isObject(e) ? Object.keys(e) : []).forEach(function (n) { this.isUndefined(t[n]) && (t[n] = e[n]); }.bind(this)); }), this), t; }, compose: function () { var t = el.call(arguments); return function () { for (var e = el.call(arguments), n = t.length - 1; n >= 0; n--)
            e = [t[n].apply(this, e)]; return e[0]; }; }, each: function (t, e, n) { if (t)
            if (tl && t.forEach && t.forEach === tl)
                t.forEach(e, n);
            else if (t.length === t.length + 0) {
                var i, r = void 0;
                for (r = 0, i = t.length; r < i; r++)
                    if (r in t && e.call(n, t[r], r) === this.BREAK)
                        return;
            }
            else
                for (var o in t)
                    if (e.call(n, t[o], o) === this.BREAK)
                        return; }, defer: function (t) { setTimeout(t, 0); }, debounce: function (t, e, n) { var i = void 0; return function () { var r = this, o = arguments; function s() { i = null, n || t.apply(r, o); } var a = n || !i; clearTimeout(i), i = setTimeout(s, e), a && t.apply(r, o); }; }, toArray: function (t) { return t.toArray ? t.toArray() : el.call(t); }, isUndefined: function (t) { return void 0 === t; }, isNull: function (t) { return null === t; }, isNaN: function (t) { function e(e) { return t.apply(this, arguments); } return e.toString = function () { return t.toString(); }, e; }((function (t) { return isNaN(t); })), isArray: Array.isArray || function (t) { return t.constructor === Array; }, isObject: function (t) { return t === Object(t); }, isNumber: function (t) { return t === t + 0; }, isString: function (t) { return t === t + ""; }, isBoolean: function (t) { return !1 === t || !0 === t; }, isFunction: function (t) { return t instanceof Function; } }, il = [{ litmus: nl.isString, conversions: { THREE_CHAR_HEX: { read: function (t) { var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return null !== e && { space: "HEX", hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0) }; }, write: $a }, SIX_CHAR_HEX: { read: function (t) { var e = t.match(/^#([A-F0-9]{6})$/i); return null !== e && { space: "HEX", hex: parseInt("0x" + e[1].toString(), 0) }; }, write: $a }, CSS_RGB: { read: function (t) { var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== e && { space: "RGB", r: parseFloat(e[1]), g: parseFloat(e[2]), b: parseFloat(e[3]) }; }, write: $a }, CSS_RGBA: { read: function (t) { var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== e && { space: "RGB", r: parseFloat(e[1]), g: parseFloat(e[2]), b: parseFloat(e[3]), a: parseFloat(e[4]) }; }, write: $a } } }, { litmus: nl.isNumber, conversions: { HEX: { read: function (t) { return { space: "HEX", hex: t, conversionName: "HEX" }; }, write: function (t) { return t.hex; } } } }, { litmus: nl.isArray, conversions: { RGB_ARRAY: { read: function (t) { return 3 === t.length && { space: "RGB", r: t[0], g: t[1], b: t[2] }; }, write: function (t) { return [t.r, t.g, t.b]; } }, RGBA_ARRAY: { read: function (t) { return 4 === t.length && { space: "RGB", r: t[0], g: t[1], b: t[2], a: t[3] }; }, write: function (t) { return [t.r, t.g, t.b, t.a]; } } } }, { litmus: nl.isObject, conversions: { RGBA_OBJ: { read: function (t) { return !!(nl.isNumber(t.r) && nl.isNumber(t.g) && nl.isNumber(t.b) && nl.isNumber(t.a)) && { space: "RGB", r: t.r, g: t.g, b: t.b, a: t.a }; }, write: function (t) { return { r: t.r, g: t.g, b: t.b, a: t.a }; } }, RGB_OBJ: { read: function (t) { return !!(nl.isNumber(t.r) && nl.isNumber(t.g) && nl.isNumber(t.b)) && { space: "RGB", r: t.r, g: t.g, b: t.b }; }, write: function (t) { return { r: t.r, g: t.g, b: t.b }; } }, HSVA_OBJ: { read: function (t) { return !!(nl.isNumber(t.h) && nl.isNumber(t.s) && nl.isNumber(t.v) && nl.isNumber(t.a)) && { space: "HSV", h: t.h, s: t.s, v: t.v, a: t.a }; }, write: function (t) { return { h: t.h, s: t.s, v: t.v, a: t.a }; } }, HSV_OBJ: { read: function (t) { return !!(nl.isNumber(t.h) && nl.isNumber(t.s) && nl.isNumber(t.v)) && { space: "HSV", h: t.h, s: t.s, v: t.v }; }, write: function (t) { return { h: t.h, s: t.s, v: t.v }; } } } }], rl = void 0, ol = void 0, sl = function () { ol = !1; var t = arguments.length > 1 ? nl.toArray(arguments) : arguments[0]; return nl.each(il, (function (e) { if (e.litmus(t))
        return nl.each(e.conversions, (function (e, n) { if (rl = e.read(t), !1 === ol && !1 !== rl)
            return ol = rl, rl.conversionName = n, rl.conversion = e, nl.BREAK; })), nl.BREAK; })), ol; }, al = void 0, ll = { hsv_to_rgb: function (t, e, n) { var i = Math.floor(t / 60) % 6, r = t / 60 - Math.floor(t / 60), o = n * (1 - e), s = n * (1 - r * e), a = n * (1 - (1 - r) * e), l = [[n, a, o], [s, n, o], [o, n, a], [o, s, n], [a, o, n], [n, o, s]][i]; return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] }; }, rgb_to_hsv: function (t, e, n) { var i = Math.min(t, e, n), r = Math.max(t, e, n), o = r - i, s = void 0; return 0 === r ? { h: NaN, s: 0, v: 0 } : (s = t === r ? (e - n) / o : e === r ? 2 + (n - t) / o : 4 + (t - e) / o, (s /= 6) < 0 && (s += 1), { h: 360 * s, s: o / r, v: r / 255 }); }, rgb_to_hex: function (t, e, n) { var i = this.hex_with_component(0, 2, t); return i = this.hex_with_component(i, 1, e), this.hex_with_component(i, 0, n); }, component_from_hex: function (t, e) { return t >> 8 * e & 255; }, hex_with_component: function (t, e, n) { return n << (al = 8 * e) | t & ~(255 << al); } }, cl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, hl = function (t, e) { if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function"); }, ul = function () { function t(t, e) { for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (e, n, i) { return n && t(e.prototype, n), i && t(e, i), e; }; }(), dl = function t(e, n, i) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, n); if (void 0 === r) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, n, i);
    } if ("value" in r)
        return r.value; var s = r.get; return void 0 !== s ? s.call(i) : void 0; }, pl = function (t, e) { if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e); }, fl = function (t, e) { if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }, ml = function () { function t() { if (hl(this, t), this.__state = sl.apply(this, arguments), !1 === this.__state)
        throw new Error("Failed to interpret color arguments"); this.__state.a = this.__state.a || 1; } return ul(t, [{ key: "toString", value: function () { return $a(this); } }, { key: "toHexString", value: function () { return $a(this, !0); } }, { key: "toOriginal", value: function () { return this.__state.conversion.write(this); } }]), t; }();
    function gl(t, e, n) { Object.defineProperty(t, e, { get: function () { return "RGB" === this.__state.space || ml.recalculateRGB(this, e, n), this.__state[e]; }, set: function (t) { "RGB" !== this.__state.space && (ml.recalculateRGB(this, e, n), this.__state.space = "RGB"), this.__state[e] = t; } }); }
    function vl(t, e) { Object.defineProperty(t, e, { get: function () { return "HSV" === this.__state.space || ml.recalculateHSV(this), this.__state[e]; }, set: function (t) { "HSV" !== this.__state.space && (ml.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = t; } }); }
    ml.recalculateRGB = function (t, e, n) { if ("HEX" === t.__state.space)
        t.__state[e] = ll.component_from_hex(t.__state.hex, n);
    else {
        if ("HSV" !== t.__state.space)
            throw new Error("Corrupted color state");
        nl.extend(t.__state, ll.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v));
    } }, ml.recalculateHSV = function (t) { var e = ll.rgb_to_hsv(t.r, t.g, t.b); nl.extend(t.__state, { s: e.s, v: e.v }), nl.isNaN(e.h) ? nl.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = e.h; }, ml.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], gl(ml.prototype, "r", 2), gl(ml.prototype, "g", 1), gl(ml.prototype, "b", 0), vl(ml.prototype, "h"), vl(ml.prototype, "s"), vl(ml.prototype, "v"), Object.defineProperty(ml.prototype, "a", { get: function () { return this.__state.a; }, set: function (t) { this.__state.a = t; } }), Object.defineProperty(ml.prototype, "hex", { get: function () { return "HEX" !== this.__state.space && (this.__state.hex = ll.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex; }, set: function (t) { this.__state.space = "HEX", this.__state.hex = t; } });
    var _l = function () { function t(e, n) { hl(this, t), this.initialValue = e[n], this.domElement = document.createElement("div"), this.object = e, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0; } return ul(t, [{ key: "onChange", value: function (t) { return this.__onChange = t, this; } }, { key: "onFinishChange", value: function (t) { return this.__onFinishChange = t, this; } }, { key: "setValue", value: function (t) { return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this; } }, { key: "getValue", value: function () { return this.object[this.property]; } }, { key: "updateDisplay", value: function () { return this; } }, { key: "isModified", value: function () { return this.initialValue !== this.getValue(); } }]), t; }(), yl = {};
    nl.each({ HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, (function (t, e) { nl.each(t, (function (t) { yl[t] = e; })); }));
    var xl = /(\d+(\.\d+)?)px/;
    function bl(t) { if ("0" === t || nl.isUndefined(t))
        return 0; var e = t.match(xl); return nl.isNull(e) ? 0 : parseFloat(e[1]); }
    var wl = { makeSelectable: function (t, e) { void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () { return !1; } : function () { }, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off"); }, makeFullscreen: function (t, e, n) { var i = n, r = e; nl.isUndefined(r) && (r = !0), nl.isUndefined(i) && (i = !0), t.style.position = "absolute", r && (t.style.left = 0, t.style.right = 0), i && (t.style.top = 0, t.style.bottom = 0); }, fakeEvent: function (t, e, n, i) { var r = n || {}, o = yl[e]; if (!o)
            throw new Error("Event type " + e + " not supported."); var s = document.createEvent(o); switch (o) {
            case "MouseEvents":
                var a = r.x || r.clientX || 0, l = r.y || r.clientY || 0;
                s.initMouseEvent(e, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, a, l, !1, !1, !1, !1, 0, null);
                break;
            case "KeyboardEvents":
                var c = s.initKeyboardEvent || s.initKeyEvent;
                nl.defaults(r, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), c(e, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                break;
            default: s.initEvent(e, r.bubbles || !1, r.cancelable || !0);
        } nl.defaults(s, i), t.dispatchEvent(s); }, bind: function (t, e, n, i) { var r = i || !1; return t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent && t.attachEvent("on" + e, n), wl; }, unbind: function (t, e, n, i) { var r = i || !1; return t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent && t.detachEvent("on" + e, n), wl; }, addClass: function (t, e) { if (void 0 === t.className)
            t.className = e;
        else if (t.className !== e) {
            var n = t.className.split(/ +/);
            -1 === n.indexOf(e) && (n.push(e), t.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
        } return wl; }, removeClass: function (t, e) { if (e)
            if (t.className === e)
                t.removeAttribute("class");
            else {
                var n = t.className.split(/ +/), i = n.indexOf(e);
                -1 !== i && (n.splice(i, 1), t.className = n.join(" "));
            }
        else
            t.className = void 0; return wl; }, hasClass: function (t, e) { return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1; }, getWidth: function (t) { var e = getComputedStyle(t); return bl(e["border-left-width"]) + bl(e["border-right-width"]) + bl(e["padding-left"]) + bl(e["padding-right"]) + bl(e.width); }, getHeight: function (t) { var e = getComputedStyle(t); return bl(e["border-top-width"]) + bl(e["border-bottom-width"]) + bl(e["padding-top"]) + bl(e["padding-bottom"]) + bl(e.height); }, getOffset: function (t) { var e = t, n = { left: 0, top: 0 }; if (e.offsetParent)
            do {
                n.left += e.offsetLeft, n.top += e.offsetTop, e = e.offsetParent;
            } while (e); return n; }, isActive: function (t) { return t === document.activeElement && (t.type || t.href); } }, Ml = function (t) { function e(t, n) { hl(this, e); var i = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i; return i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox"), wl.bind(i.__checkbox, "change", (function () { r.setValue(!r.__prev); }), !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i; } return pl(e, t), ul(e, [{ key: "setValue", value: function (t) { var n = dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n; } }, { key: "updateDisplay", value: function () { return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this); } }]), e; }(_l), Sl = function (t) { function e(t, n, i) { hl(this, e); var r = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i, s = r; if (r.__select = document.createElement("select"), nl.isArray(o)) {
        var a = {};
        nl.each(o, (function (t) { a[t] = t; })), o = a;
    } return nl.each(o, (function (t, e) { var n = document.createElement("option"); n.innerHTML = e, n.setAttribute("value", t), s.__select.appendChild(n); })), r.updateDisplay(), wl.bind(r.__select, "change", (function () { var t = this.options[this.selectedIndex].value; s.setValue(t); })), r.domElement.appendChild(r.__select), r; } return pl(e, t), ul(e, [{ key: "setValue", value: function (t) { var n = dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n; } }, { key: "updateDisplay", value: function () { return wl.isActive(this.__select) ? this : (this.__select.value = this.getValue(), dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)); } }]), e; }(_l), El = function (t) { function e(t, n) { hl(this, e); var i = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i; function o() { r.setValue(r.__input.value); } return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), wl.bind(i.__input, "keyup", o), wl.bind(i.__input, "change", o), wl.bind(i.__input, "blur", (function () { r.__onFinishChange && r.__onFinishChange.call(r, r.getValue()); })), wl.bind(i.__input, "keydown", (function (t) { 13 === t.keyCode && this.blur(); })), i.updateDisplay(), i.domElement.appendChild(i.__input), i; } return pl(e, t), ul(e, [{ key: "updateDisplay", value: function () { return wl.isActive(this.__input) || (this.__input.value = this.getValue()), dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this); } }]), e; }(_l);
    function Tl(t) { var e = t.toString(); return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0; }
    var Al = function (t) { function e(t, n, i) { hl(this, e); var r = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i || {}; return r.__min = o.min, r.__max = o.max, r.__step = o.step, nl.isUndefined(r.__step) ? 0 === r.initialValue ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = Tl(r.__impliedStep), r; } return pl(e, t), ul(e, [{ key: "setValue", value: function (t) { var n = t; return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n); } }, { key: "min", value: function (t) { return this.__min = t, this; } }, { key: "max", value: function (t) { return this.__max = t, this; } }, { key: "step", value: function (t) { return this.__step = t, this.__impliedStep = t, this.__precision = Tl(t), this; } }]), e; }(_l), Ll = function (t) { function e(t, n, i) { hl(this, e); var r = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i)); r.__truncationSuspended = !1; var o = r, s = void 0; function a() { o.__onFinishChange && o.__onFinishChange.call(o, o.getValue()); } function l(t) { var e = s - t.clientY; o.setValue(o.getValue() + e * o.__impliedStep), s = t.clientY; } function c() { wl.unbind(window, "mousemove", l), wl.unbind(window, "mouseup", c), a(); } return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), wl.bind(r.__input, "change", (function () { var t = parseFloat(o.__input.value); nl.isNaN(t) || o.setValue(t); })), wl.bind(r.__input, "blur", (function () { a(); })), wl.bind(r.__input, "mousedown", (function (t) { wl.bind(window, "mousemove", l), wl.bind(window, "mouseup", c), s = t.clientY; })), wl.bind(r.__input, "keydown", (function (t) { 13 === t.keyCode && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1, a()); })), r.updateDisplay(), r.domElement.appendChild(r.__input), r; } return pl(e, t), ul(e, [{ key: "updateDisplay", value: function () { var t, n, i; return this.__input.value = this.__truncationSuspended ? this.getValue() : (t = this.getValue(), n = this.__precision, i = Math.pow(10, n), Math.round(t * i) / i), dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this); } }]), e; }(Al);
    function Cl(t, e, n, i, r) { return i + (t - e) / (n - e) * (r - i); }
    var Rl = function (t) { function e(t, n, i, r, o) { hl(this, e); var s = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: i, max: r, step: o })), a = s; function l(t) { t.preventDefault(); var e = a.__background.getBoundingClientRect(); return a.setValue(Cl(t.clientX, e.left, e.right, a.__min, a.__max)), !1; } function c() { wl.unbind(window, "mousemove", l), wl.unbind(window, "mouseup", c), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue()); } function h(t) { var e = t.touches[0].clientX, n = a.__background.getBoundingClientRect(); a.setValue(Cl(e, n.left, n.right, a.__min, a.__max)); } function u() { wl.unbind(window, "touchmove", h), wl.unbind(window, "touchend", u), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue()); } return s.__background = document.createElement("div"), s.__foreground = document.createElement("div"), wl.bind(s.__background, "mousedown", (function (t) { document.activeElement.blur(), wl.bind(window, "mousemove", l), wl.bind(window, "mouseup", c), l(t); })), wl.bind(s.__background, "touchstart", (function (t) { 1 === t.touches.length && (wl.bind(window, "touchmove", h), wl.bind(window, "touchend", u), h(t)); })), wl.addClass(s.__background, "slider"), wl.addClass(s.__foreground, "slider-fg"), s.updateDisplay(), s.__background.appendChild(s.__foreground), s.domElement.appendChild(s.__background), s; } return pl(e, t), ul(e, [{ key: "updateDisplay", value: function () { var t = (this.getValue() - this.__min) / (this.__max - this.__min); return this.__foreground.style.width = 100 * t + "%", dl(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this); } }]), e; }(Al), Pl = function (t) { function e(t, n, i) { hl(this, e); var r = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = r; return r.__button = document.createElement("div"), r.__button.innerHTML = void 0 === i ? "Fire" : i, wl.bind(r.__button, "click", (function (t) { return t.preventDefault(), o.fire(), !1; })), wl.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r; } return pl(e, t), ul(e, [{ key: "fire", value: function () { this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()); } }]), e; }(_l), Dl = function (t) { function e(t, n) { hl(this, e); var i = fl(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); i.__color = new ml(i.getValue()), i.__temp = new ml(0); var r = i; i.domElement = document.createElement("div"), wl.makeSelectable(i.domElement, !1), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", wl.bind(i.__input, "keydown", (function (t) { 13 === t.keyCode && u.call(this); })), wl.bind(i.__input, "blur", u), wl.bind(i.__selector, "mousedown", (function () { wl.addClass(this, "drag").bind(window, "mouseup", (function () { wl.removeClass(r.__selector, "drag"); })); })), wl.bind(i.__selector, "touchstart", (function () { wl.addClass(this, "drag").bind(window, "touchend", (function () { wl.removeClass(r.__selector, "drag"); })); })); var o, s = document.createElement("div"); function a(t) { p(t), wl.bind(window, "mousemove", p), wl.bind(window, "touchmove", p), wl.bind(window, "mouseup", c), wl.bind(window, "touchend", c); } function l(t) { f(t), wl.bind(window, "mousemove", f), wl.bind(window, "touchmove", f), wl.bind(window, "mouseup", h), wl.bind(window, "touchend", h); } function c() { wl.unbind(window, "mousemove", p), wl.unbind(window, "touchmove", p), wl.unbind(window, "mouseup", c), wl.unbind(window, "touchend", c), d(); } function h() { wl.unbind(window, "mousemove", f), wl.unbind(window, "touchmove", f), wl.unbind(window, "mouseup", h), wl.unbind(window, "touchend", h), d(); } function u() { var t = sl(this.value); !1 !== t ? (r.__color.__state = t, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString(); } function d() { r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal()); } function p(t) { -1 === t.type.indexOf("touch") && t.preventDefault(); var e = r.__saturation_field.getBoundingClientRect(), n = t.touches && t.touches[0] || t, i = n.clientX, o = n.clientY, s = (i - e.left) / (e.right - e.left), a = 1 - (o - e.top) / (e.bottom - e.top); return a > 1 ? a = 1 : a < 0 && (a = 0), s > 1 ? s = 1 : s < 0 && (s = 0), r.__color.v = a, r.__color.s = s, r.setValue(r.__color.toOriginal()), !1; } function f(t) { -1 === t.type.indexOf("touch") && t.preventDefault(); var e = r.__hue_field.getBoundingClientRect(), n = 1 - ((t.touches && t.touches[0] || t).clientY - e.top) / (e.bottom - e.top); return n > 1 ? n = 1 : n < 0 && (n = 0), r.__color.h = 360 * n, r.setValue(r.__color.toOriginal()), !1; } return nl.extend(i.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), nl.extend(i.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), nl.extend(i.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), nl.extend(i.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), nl.extend(s.style, { width: "100%", height: "100%", background: "none" }), Nl(s, "top", "rgba(0,0,0,0)", "#000"), nl.extend(i.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), (o = i.__hue_field).style.background = "", o.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", o.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", nl.extend(i.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)" }), wl.bind(i.__saturation_field, "mousedown", a), wl.bind(i.__saturation_field, "touchstart", a), wl.bind(i.__field_knob, "mousedown", a), wl.bind(i.__field_knob, "touchstart", a), wl.bind(i.__hue_field, "mousedown", l), wl.bind(i.__hue_field, "touchstart", l), i.__saturation_field.appendChild(s), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(), i; } return pl(e, t), ul(e, [{ key: "updateDisplay", value: function () { var t = sl(this.getValue()); if (!1 !== t) {
                var e = !1;
                nl.each(ml.COMPONENTS, (function (n) { if (!nl.isUndefined(t[n]) && !nl.isUndefined(this.__color.__state[n]) && t[n] !== this.__color.__state[n])
                    return e = !0, {}; }), this), e && nl.extend(this.__color.__state, t);
            } nl.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1; var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, i = 255 - n; nl.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, Nl(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), nl.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)" }); } }]), e; }(_l), Il = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    function Nl(t, e, n, i) { t.style.background = "", nl.each(Il, (function (r) { t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + n + " 0%, " + i + " 100%); "; })); }
    var Ol = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>', zl = function (t, e) { var n = t[e]; return nl.isArray(arguments[2]) || nl.isObject(arguments[2]) ? new Sl(t, e, arguments[2]) : nl.isNumber(n) ? nl.isNumber(arguments[2]) && nl.isNumber(arguments[3]) ? nl.isNumber(arguments[4]) ? new Rl(t, e, arguments[2], arguments[3], arguments[4]) : new Rl(t, e, arguments[2], arguments[3]) : nl.isNumber(arguments[4]) ? new Ll(t, e, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Ll(t, e, { min: arguments[2], max: arguments[3] }) : nl.isString(n) ? new El(t, e) : nl.isFunction(n) ? new Pl(t, e, "") : nl.isBoolean(n) ? new Ml(t, e) : null; }, Bl = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) { setTimeout(t, 1e3 / 60); }, Hl = function () { function t() { hl(this, t), this.backgroundElement = document.createElement("div"), nl.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), wl.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), nl.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement); var e = this; wl.bind(this.backgroundElement, "click", (function () { e.hide(); })); } return ul(t, [{ key: "show", value: function () { var t = this; this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), nl.defer((function () { t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"; })); } }, { key: "hide", value: function () { var t = this, e = function e() { t.domElement.style.display = "none", t.backgroundElement.style.display = "none", wl.unbind(t.domElement, "webkitTransitionEnd", e), wl.unbind(t.domElement, "transitionend", e), wl.unbind(t.domElement, "oTransitionEnd", e); }; wl.bind(this.domElement, "webkitTransitionEnd", e), wl.bind(this.domElement, "transitionend", e), wl.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"; } }, { key: "layout", value: function () { this.domElement.style.left = window.innerWidth / 2 - wl.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - wl.getHeight(this.domElement) / 2 + "px"; } }]), t; }();
    !function (t, e) { var n = e || document, i = document.createElement("style"); i.type = "text/css", i.innerHTML = t; var r = n.getElementsByTagName("head")[0]; try {
        r.appendChild(i);
    }
    catch (t) { } }(function (t) { if ("undefined" != typeof window) {
        var e = document.createElement("style");
        return e.setAttribute("type", "text/css"), e.innerHTML = t, document.head.appendChild(e), t;
    } }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
    var Fl = "Default", Ul = function () { try {
        return !!window.localStorage;
    }
    catch (t) {
        return !1;
    } }(), kl = void 0, Gl = !0, Vl = void 0, Wl = !1, jl = [], ql = function t(e) { var n = this, i = e || {}; this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), wl.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = nl.defaults(i, { closeOnTop: !1, autoPlace: !0, width: t.DEFAULT_WIDTH }), i = nl.defaults(i, { resizable: i.autoPlace, hideable: i.autoPlace }), nl.isUndefined(i.load) ? i.load = { preset: Fl } : i.preset && (i.load.preset = i.preset), nl.isUndefined(i.parent) && i.hideable && jl.push(this), i.resizable = nl.isUndefined(i.parent) && i.resizable, i.autoPlace && nl.isUndefined(i.scrollable) && (i.scrollable = !0); var r, o = Ul && "true" === localStorage.getItem(Kl(0, "isLocal")), s = void 0, a = void 0; if (Object.defineProperties(this, { parent: { get: function () { return i.parent; } }, scrollable: { get: function () { return i.scrollable; } }, autoPlace: { get: function () { return i.autoPlace; } }, closeOnTop: { get: function () { return i.closeOnTop; } }, preset: { get: function () { return n.parent ? n.getRoot().preset : i.load.preset; }, set: function (t) { n.parent ? n.getRoot().preset = t : i.load.preset = t, function (t) { for (var e = 0; e < t.__preset_select.length; e++)
                t.__preset_select[e].value === t.preset && (t.__preset_select.selectedIndex = e); }(this), n.revert(); } }, width: { get: function () { return i.width; }, set: function (t) { i.width = t, ic(n, t); } }, name: { get: function () { return i.name; }, set: function (t) { i.name = t, a && (a.innerHTML = i.name); } }, closed: { get: function () { return i.closed; }, set: function (e) { i.closed = e, i.closed ? wl.addClass(n.__ul, t.CLASS_CLOSED) : wl.removeClass(n.__ul, t.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED); } }, load: { get: function () { return i.load; } }, useLocalStorage: { get: function () { return o; }, set: function (t) { Ul && (o = t, t ? wl.bind(window, "unload", s) : wl.unbind(window, "unload", s), localStorage.setItem(Kl(0, "isLocal"), t)); } } }), nl.isUndefined(i.parent)) {
        if (this.closed = i.closed || !1, wl.addClass(this.domElement, t.CLASS_MAIN), wl.makeSelectable(this.domElement, !1), Ul && o) {
            n.useLocalStorage = !0;
            var l = localStorage.getItem(Kl(0, "gui"));
            l && (i.load = JSON.parse(l));
        }
        this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = t.TEXT_CLOSED, wl.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON), i.closeOnTop ? (wl.addClass(this.__closeButton, t.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (wl.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), wl.bind(this.__closeButton, "click", (function () { n.closed = !n.closed; }));
    }
    else {
        void 0 === i.closed && (i.closed = !0);
        var c = document.createTextNode(i.name);
        wl.addClass(c, "controller-name"), a = Xl(n, c), wl.addClass(this.__ul, t.CLASS_CLOSED), wl.addClass(a, "title"), wl.bind(a, "click", (function (t) { return t.preventDefault(), n.closed = !n.closed, !1; })), i.closed || (this.closed = !1);
    } i.autoPlace && (nl.isUndefined(i.parent) && (Gl && (Vl = document.createElement("div"), wl.addClass(Vl, "dg"), wl.addClass(Vl, t.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Vl), Gl = !1), Vl.appendChild(this.domElement), wl.addClass(this.domElement, t.CLASS_AUTO_PLACE)), this.parent || ic(n, i.width)), this.__resizeHandler = function () { n.onResizeDebounced(); }, wl.bind(window, "resize", this.__resizeHandler), wl.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), wl.bind(this.__ul, "transitionend", this.__resizeHandler), wl.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && nc(this), s = function () { Ul && "true" === localStorage.getItem(Kl(0, "isLocal")) && localStorage.setItem(Kl(0, "gui"), JSON.stringify(n.getSaveObject())); }, this.saveToLocalStorageIfPossible = s, i.parent || ((r = n.getRoot()).width += 1, nl.defer((function () { r.width -= 1; }))); };
    function Xl(t, e, n) { var i = document.createElement("li"); return e && i.appendChild(e), n ? t.__ul.insertBefore(i, n) : t.__ul.appendChild(i), t.onResize(), i; }
    function Yl(t) { wl.unbind(window, "resize", t.__resizeHandler), t.saveToLocalStorageIfPossible && wl.unbind(window, "unload", t.saveToLocalStorageIfPossible); }
    function Jl(t, e) { var n = t.__preset_select[t.__preset_select.selectedIndex]; n.innerHTML = e ? n.value + "*" : n.value; }
    function Zl(t, e) { var n = t.getRoot(), i = n.__rememberedObjects.indexOf(e.object); if (-1 !== i) {
        var r = n.__rememberedObjectIndecesToControllers[i];
        if (void 0 === r && (r = {}, n.__rememberedObjectIndecesToControllers[i] = r), r[e.property] = e, n.load && n.load.remembered) {
            var o = n.load.remembered, s = void 0;
            if (o[t.preset])
                s = o[t.preset];
            else {
                if (!o.Default)
                    return;
                s = o.Default;
            }
            if (s[i] && void 0 !== s[i][e.property]) {
                var a = s[i][e.property];
                e.initialValue = a, e.setValue(a);
            }
        }
    } }
    function Ql(t, e, n, i) { if (void 0 === e[n])
        throw new Error('Object "' + e + '" has no property "' + n + '"'); var r = void 0; if (i.color)
        r = new Dl(e, n);
    else {
        var o = [e, n].concat(i.factoryArgs);
        r = zl.apply(t, o);
    } i.before instanceof _l && (i.before = i.before.__li), Zl(t, r), wl.addClass(r.domElement, "c"); var s = document.createElement("span"); wl.addClass(s, "property-name"), s.innerHTML = r.property; var a = document.createElement("div"); a.appendChild(s), a.appendChild(r.domElement); var l = Xl(t, a, i.before); return wl.addClass(l, ql.CLASS_CONTROLLER_ROW), r instanceof Dl ? wl.addClass(l, "color") : wl.addClass(l, cl(r.getValue())), function (t, e, n) { if (n.__li = e, n.__gui = t, nl.extend(n, { options: function (e) { if (arguments.length > 1) {
            var i = n.__li.nextElementSibling;
            return n.remove(), Ql(t, n.object, n.property, { before: i, factoryArgs: [nl.toArray(arguments)] });
        } if (nl.isArray(e) || nl.isObject(e)) {
            var r = n.__li.nextElementSibling;
            return n.remove(), Ql(t, n.object, n.property, { before: r, factoryArgs: [e] });
        } }, name: function (t) { return n.__li.firstElementChild.firstElementChild.innerHTML = t, n; }, listen: function () { return n.__gui.listen(n), n; }, remove: function () { return n.__gui.remove(n), n; } }), n instanceof Rl) {
        var i = new Ll(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });
        nl.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function (t) { var e = n[t], r = i[t]; n[t] = i[t] = function () { var t = Array.prototype.slice.call(arguments); return r.apply(i, t), e.apply(n, t); }; })), wl.addClass(e, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild);
    }
    else if (n instanceof Ll) {
        var r = function (e) { if (nl.isNumber(n.__min) && nl.isNumber(n.__max)) {
            var i = n.__li.firstElementChild.firstElementChild.innerHTML, r = n.__gui.__listening.indexOf(n) > -1;
            n.remove();
            var o = Ql(t, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] });
            return o.name(i), r && o.listen(), o;
        } return e; };
        n.min = nl.compose(r, n.min), n.max = nl.compose(r, n.max);
    }
    else
        n instanceof Ml ? (wl.bind(e, "click", (function () { wl.fakeEvent(n.__checkbox, "click"); })), wl.bind(n.__checkbox, "click", (function (t) { t.stopPropagation(); }))) : n instanceof Pl ? (wl.bind(e, "click", (function () { wl.fakeEvent(n.__button, "click"); })), wl.bind(e, "mouseover", (function () { wl.addClass(n.__button, "hover"); })), wl.bind(e, "mouseout", (function () { wl.removeClass(n.__button, "hover"); }))) : n instanceof Dl && (wl.addClass(e, "color"), n.updateDisplay = nl.compose((function (t) { return e.style.borderLeftColor = n.__color.toString(), t; }), n.updateDisplay), n.updateDisplay()); n.setValue = nl.compose((function (e) { return t.getRoot().__preset_select && n.isModified() && Jl(t.getRoot(), !0), e; }), n.setValue); }(t, l, r), t.__controllers.push(r), r; }
    function Kl(t, e) { return document.location.href + "." + e; }
    function $l(t, e, n) { var i = document.createElement("option"); i.innerHTML = e, i.value = e, t.__preset_select.appendChild(i), n && (t.__preset_select.selectedIndex = t.__preset_select.length - 1); }
    function tc(t, e) { e.style.display = t.useLocalStorage ? "block" : "none"; }
    function ec(t) { var e = t.__save_row = document.createElement("li"); wl.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), wl.addClass(e, "save-row"); var n = document.createElement("span"); n.innerHTML = "&nbsp;", wl.addClass(n, "button gears"); var i = document.createElement("span"); i.innerHTML = "Save", wl.addClass(i, "button"), wl.addClass(i, "save"); var r = document.createElement("span"); r.innerHTML = "New", wl.addClass(r, "button"), wl.addClass(r, "save-as"); var o = document.createElement("span"); o.innerHTML = "Revert", wl.addClass(o, "button"), wl.addClass(o, "revert"); var s = t.__preset_select = document.createElement("select"); if (t.load && t.load.remembered ? nl.each(t.load.remembered, (function (e, n) { $l(t, n, n === t.preset); })) : $l(t, Fl, !1), wl.bind(s, "change", (function () { for (var e = 0; e < t.__preset_select.length; e++)
        t.__preset_select[e].innerHTML = t.__preset_select[e].value; t.preset = this.value; })), e.appendChild(s), e.appendChild(n), e.appendChild(i), e.appendChild(r), e.appendChild(o), Ul) {
        var a = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage");
        document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(Kl(0, "isLocal")) && l.setAttribute("checked", "checked"), tc(t, a), wl.bind(l, "change", (function () { t.useLocalStorage = !t.useLocalStorage, tc(t, a); }));
    } var c = document.getElementById("dg-new-constructor"); wl.bind(c, "keydown", (function (t) { !t.metaKey || 67 !== t.which && 67 !== t.keyCode || kl.hide(); })), wl.bind(n, "click", (function () { c.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), kl.show(), c.focus(), c.select(); })), wl.bind(i, "click", (function () { t.save(); })), wl.bind(r, "click", (function () { var e = prompt("Enter a new preset name."); e && t.saveAs(e); })), wl.bind(o, "click", (function () { t.revert(); })); }
    function nc(t) { var e = void 0; function n(n) { return n.preventDefault(), t.width += e - n.clientX, t.onResize(), e = n.clientX, !1; } function i() { wl.removeClass(t.__closeButton, ql.CLASS_DRAG), wl.unbind(window, "mousemove", n), wl.unbind(window, "mouseup", i); } function r(r) { return r.preventDefault(), e = r.clientX, wl.addClass(t.__closeButton, ql.CLASS_DRAG), wl.bind(window, "mousemove", n), wl.bind(window, "mouseup", i), !1; } t.__resize_handle = document.createElement("div"), nl.extend(t.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), wl.bind(t.__resize_handle, "mousedown", r), wl.bind(t.__closeButton, "mousedown", r), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild); }
    function ic(t, e) { t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px"); }
    function rc(t, e) { var n = {}; return nl.each(t.__rememberedObjects, (function (i, r) { var o = {}, s = t.__rememberedObjectIndecesToControllers[r]; nl.each(s, (function (t, n) { o[n] = e ? t.initialValue : t.getValue(); })), n[r] = o; })), n; }
    function oc(t) { 0 !== t.length && Bl.call(window, (function () { oc(t); })), nl.each(t, (function (t) { t.updateDisplay(); })); }
    ql.toggleHide = function () { Wl = !Wl, nl.each(jl, (function (t) { t.domElement.style.display = Wl ? "none" : ""; })); }, ql.CLASS_AUTO_PLACE = "a", ql.CLASS_AUTO_PLACE_CONTAINER = "ac", ql.CLASS_MAIN = "main", ql.CLASS_CONTROLLER_ROW = "cr", ql.CLASS_TOO_TALL = "taller-than-window", ql.CLASS_CLOSED = "closed", ql.CLASS_CLOSE_BUTTON = "close-button", ql.CLASS_CLOSE_TOP = "close-top", ql.CLASS_CLOSE_BOTTOM = "close-bottom", ql.CLASS_DRAG = "drag", ql.DEFAULT_WIDTH = 245, ql.TEXT_CLOSED = "Close Controls", ql.TEXT_OPEN = "Open Controls", ql._keydownHandler = function (t) { "text" === document.activeElement.type || 72 !== t.which && 72 !== t.keyCode || ql.toggleHide(); }, wl.bind(window, "keydown", ql._keydownHandler, !1), nl.extend(ql.prototype, { add: function (t, e) { return Ql(this, t, e, { factoryArgs: Array.prototype.slice.call(arguments, 2) }); }, addColor: function (t, e) { return Ql(this, t, e, { color: !0 }); }, remove: function (t) { this.__ul.removeChild(t.__li), this.__controllers.splice(this.__controllers.indexOf(t), 1); var e = this; nl.defer((function () { e.onResize(); })); }, destroy: function () { if (this.parent)
            throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."); this.autoPlace && Vl.removeChild(this.domElement); var t = this; nl.each(this.__folders, (function (e) { t.removeFolder(e); })), wl.unbind(window, "keydown", ql._keydownHandler, !1), Yl(this); }, addFolder: function (t) { if (void 0 !== this.__folders[t])
            throw new Error('You already have a folder in this GUI by the name "' + t + '"'); var e = { name: t, parent: this }; e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]); var n = new ql(e); this.__folders[t] = n; var i = Xl(this, n.domElement); return wl.addClass(i, "folder"), n; }, removeFolder: function (t) { this.__ul.removeChild(t.domElement.parentElement), delete this.__folders[t.name], this.load && this.load.folders && this.load.folders[t.name] && delete this.load.folders[t.name], Yl(t); var e = this; nl.each(t.__folders, (function (e) { t.removeFolder(e); })), nl.defer((function () { e.onResize(); })); }, open: function () { this.closed = !1; }, close: function () { this.closed = !0; }, hide: function () { this.domElement.style.display = "none"; }, show: function () { this.domElement.style.display = ""; }, onResize: function () { var t = this.getRoot(); if (t.scrollable) {
            var e = wl.getOffset(t.__ul).top, n = 0;
            nl.each(t.__ul.childNodes, (function (e) { t.autoPlace && e === t.__save_row || (n += wl.getHeight(e)); })), window.innerHeight - e - 20 < n ? (wl.addClass(t.domElement, ql.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (wl.removeClass(t.domElement, ql.CLASS_TOO_TALL), t.__ul.style.height = "auto");
        } t.__resize_handle && nl.defer((function () { t.__resize_handle.style.height = t.__ul.offsetHeight + "px"; })), t.__closeButton && (t.__closeButton.style.width = t.width + "px"); }, onResizeDebounced: nl.debounce((function () { this.onResize(); }), 50), remember: function () { if (nl.isUndefined(kl) && ((kl = new Hl).domElement.innerHTML = Ol), this.parent)
            throw new Error("You can only call remember on a top level GUI."); var t = this; nl.each(Array.prototype.slice.call(arguments), (function (e) { 0 === t.__rememberedObjects.length && ec(t), -1 === t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e); })), this.autoPlace && ic(this, this.width); }, getRoot: function () { for (var t = this; t.parent;)
            t = t.parent; return t; }, getSaveObject: function () { var t = this.load; return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = rc(this)), t.folders = {}, nl.each(this.__folders, (function (e, n) { t.folders[n] = e.getSaveObject(); })), t; }, save: function () { this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = rc(this), Jl(this, !1), this.saveToLocalStorageIfPossible(); }, saveAs: function (t) { this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = rc(this, !0)), this.load.remembered[t] = rc(this), this.preset = t, $l(this, t, !0), this.saveToLocalStorageIfPossible(); }, revert: function (t) { nl.each(this.__controllers, (function (e) { this.getRoot().load.remembered ? Zl(t || this.getRoot(), e) : e.setValue(e.initialValue), e.__onFinishChange && e.__onFinishChange.call(e, e.getValue()); }), this), nl.each(this.__folders, (function (t) { t.revert(t); })), t || Jl(this.getRoot(), !1); }, listen: function (t) { var e = 0 === this.__listening.length; this.__listening.push(t), e && oc(this.__listening); }, updateDisplay: function () { nl.each(this.__controllers, (function (t) { t.updateDisplay(); })), nl.each(this.__folders, (function (t) { t.updateDisplay(); })); } }), new ql;
    var sc = document.querySelector("canvas.webgl"), ac = new Sr, lc = new /** @class */ (function (_super) {
        __extends(class_27, _super);
        function class_27(t, e, n, i, r) {
            if (t === void 0) { t = 1; }
            if (e === void 0) { e = .4; }
            if (n === void 0) { n = 8; }
            if (i === void 0) { i = 6; }
            if (r === void 0) { r = 2 * Math.PI; }
            var _this = this;
            _this = _super.call(this) || this, _this.type = "TorusGeometry", _this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
            var o = [], s = [], a = [], l = [], c = new k, h = new k, u = new k;
            for (var o_67 = 0; o_67 <= n; o_67++)
                for (var d_15 = 0; d_15 <= i; d_15++) {
                    var p_10 = d_15 / i * r, f_6 = o_67 / n * Math.PI * 2;
                    h.x = (t + e * Math.cos(f_6)) * Math.cos(p_10), h.y = (t + e * Math.cos(f_6)) * Math.sin(p_10), h.z = e * Math.sin(f_6), s.push(h.x, h.y, h.z), c.x = t * Math.cos(p_10), c.y = t * Math.sin(p_10), u.subVectors(h, c).normalize(), a.push(u.x, u.y, u.z), l.push(d_15 / i), l.push(o_67 / n);
                }
            for (var t_262 = 1; t_262 <= n; t_262++)
                for (var e_227 = 1; e_227 <= i; e_227++) {
                    var n_227 = (i + 1) * t_262 + e_227 - 1, r_124 = (i + 1) * (t_262 - 1) + e_227 - 1, s_46 = (i + 1) * (t_262 - 1) + e_227, a_29 = (i + 1) * t_262 + e_227;
                    o.push(n_227, r_124, a_29), o.push(r_124, s_46, a_29);
                }
            _this.setIndex(o), _this.setAttribute("position", new Me(s, 3)), _this.setAttribute("normal", new Me(a, 3)), _this.setAttribute("uv", new Me(l, 2));
            return _this;
        }
        return class_27;
    }(Ie))(.7, .2, 16, 100), cc = new ue;
    cc.color = new he(16711680);
    var hc = new Qe(lc, cc);
    ac.add(hc);
    var uc = new la(16777215, .1);
    uc.position.x = 2, uc.position.y = 3, uc.position.z = 4, ac.add(uc);
    var dc = { width: window.innerWidth, height: window.innerHeight };
    window.addEventListener("resize", (function () { dc.width = window.innerWidth, dc.height = window.innerHeight, pc.aspect = dc.width / dc.height, pc.updateProjectionMatrix(), fc.setSize(dc.width, dc.height), fc.setPixelRatio(Math.min(window.devicePixelRatio, 2)); }));
    var pc = new sn(75, dc.width / dc.height, .1, 100);
    pc.position.x = 0, pc.position.y = 0, pc.position.z = 2, ac.add(pc);
    var fc = new br({ canvas: sc });
    fc.setSize(dc.width, dc.height), fc.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    var mc = new /** @class */ (function () {
        function class_28(t) {
            this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        class_28.prototype.start = function () { this.startTime = _a(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0; };
        class_28.prototype.stop = function () { this.getElapsedTime(), this.running = !1, this.autoStart = !1; };
        class_28.prototype.getElapsedTime = function () { return this.getDelta(), this.elapsedTime; };
        class_28.prototype.getDelta = function () { var t = 0; if (this.autoStart && !this.running)
            return this.start(), 0; if (this.running) {
            var e_228 = _a();
            t = (e_228 - this.oldTime) / 1e3, this.oldTime = e_228, this.elapsedTime += t;
        } return t; };
        return class_28;
    }()), gc = function () { var t = mc.getElapsedTime(); hc.rotation.y = .5 * t, fc.render(ac, pc), window.requestAnimationFrame(gc); };
    gc();
})();
//# sourceMappingURL=bundle.64a00c13cc3ef1a65e72.js.map
