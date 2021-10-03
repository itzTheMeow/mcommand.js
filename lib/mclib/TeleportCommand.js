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
var CommandPosition_1 = __importDefault(require("./CommandPosition"));
var CommandOptional_1 = __importDefault(require("./CommandOptional"));
var TeleportCommand = /** @class */ (function (_super) {
    __extends(TeleportCommand, _super);
    function TeleportCommand(arg1, arg2, arg3, arg4, arg5, arg6) {
        var _this = this;
        if (arg1 instanceof CommandPosition_1.default)
            _this = _super.call(this, "tp", [arg1.toString()]) || this;
        else {
            if (!arg2)
                throw "Invalid TeleportCommand Arg2!";
            if (!arg3)
                _this = _super.call(this, "tp", [arg1.toString(), arg2.toString()]) || this;
            else if (arg3 instanceof CommandPosition_1.default)
                _this = _super.call(this, "tp", [arg1.toString(), arg2.toString(), arg3.toString()]) || this;
            else {
                if (!arg4)
                    throw "Invalid TeleportCommand Arg4!";
                if (typeof arg4 == "string") {
                    if (!arg5)
                        throw "Invalid TeleportCommand Arg5!";
                    _this = _super.call(this, "tp", __spreadArrays([
                        arg1.toString(),
                        arg2.toString(),
                        "facing",
                        "entity",
                        arg5.toString()
                    ], CommandOptional_1.default(arg6))) || this;
                }
                else
                    _this = _super.call(this, "tp", [arg1.toString(), arg2.toString(), "facing", arg4.toString()]) || this;
            }
        }
        return _this;
    }
    return TeleportCommand;
}(Command_1.Command));
exports.default = TeleportCommand;
