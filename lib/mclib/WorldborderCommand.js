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
var CommandPosition_1 = __importDefault(require("./CommandPosition"));
var WorldBorderCommand = /** @class */ (function (_super) {
    __extends(WorldBorderCommand, _super);
    function WorldBorderCommand(action, arg2, arg3) {
        var _this = this;
        switch (action) {
            case "add":
                if (!arg2 || typeof arg2 !== "number")
                    throw "Invalid WorldBorderCommand.add Arg2!";
                _this = _super.call(this, "worldborder", __spreadArrays(["add", String(arg2)], CommandOptional_1.default(String(arg3)))) || this;
                break;
            case "center":
                if (!arg2 || !(arg2 instanceof CommandPosition_1.default))
                    throw "Invalid WorldBorderCommand.center Arg2!";
                _this = _super.call(this, "worldborder", ["center", arg2.toString()]) || this;
                break;
            case "damage":
                switch (arg2) {
                    case "amount":
                        if (!arg3 || typeof arg3 !== "number")
                            throw "Invalid WorldBorderCommand.damage.amount Arg3!";
                        _this = _super.call(this, "worldborder", ["damage", "amount", String(arg3)]) || this;
                        break;
                    case "buffer":
                        if (!arg3 || typeof arg3 !== "number")
                            throw "Invalid WorldBorderCommand.damage.buffer Arg3!";
                        _this = _super.call(this, "worldborder", ["damage", "buffer", String(arg3)]) || this;
                        break;
                    default:
                        throw "Invalid WorldBorderCommand.damage Arg2!";
                }
                break;
            case "get":
                _this = _super.call(this, "worldborder", ["get"]) || this;
                break;
            case "set":
                if (!arg2 || typeof arg3 !== "number")
                    throw "Invalid WorldBorderCommand.set Arg2!";
                _this = _super.call(this, "worldborder", __spreadArrays(["set", String(arg2)], CommandOptional_1.default(String(arg3)))) || this;
                break;
            case "warning":
                switch (arg2) {
                    case "distance":
                        if (!arg3 || typeof arg3 !== "number")
                            throw "Invalid WorldBorderCommand.warning.distance Arg3!";
                        _this = _super.call(this, "worldborder", ["warning", "distance", String(arg3)]) || this;
                        break;
                    case "time":
                        if (!arg3 || typeof arg3 !== "number")
                            throw "Invalid WorldBorderCommand.warning.time Arg3!";
                        _this = _super.call(this, "worldborder", ["warning", "time", String(arg3)]) || this;
                        break;
                    default:
                        throw "Invalid WorldBorderCommand.warning Arg2!";
                }
                break;
        }
        return _this;
    }
    return WorldBorderCommand;
}(Command_1.Command));
exports.default = WorldBorderCommand;
