"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var CommandOptional_1 = __importDefault(require("./CommandOptional"));
var SpawnpointCommand = /** @class */ (function (_super) {
    __extends(SpawnpointCommand, _super);
    function SpawnpointCommand(targets, pos, angle) {
        return _super.call(this, "spawnpoint", __spreadArrays(CommandOptional_1.default(targets === null || targets === void 0 ? void 0 : targets.toString()), CommandOptional_1.default(pos === null || pos === void 0 ? void 0 : pos.toString()), CommandOptional_1.default(angle))) || this;
    }
    return SpawnpointCommand;
}(Command_1.Command));
exports.default = SpawnpointCommand;