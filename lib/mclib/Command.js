"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Limits_1 = __importDefault(require("./extras/Limits"));
var Command = /** @class */ (function () {
    function Command(minecraftName, args) {
        this.prefix = "minecraft:";
        this.name = minecraftName;
        this.args = args;
    }
    Command.prototype.toString = function (usePrefix) {
        var _a;
        if (usePrefix === void 0) { usePrefix = false; }
        var str = ("/" + ((usePrefix && this.prefix) || "") + this.name + " " + (((_a = this.args) === null || _a === void 0 ? void 0 : _a.map(this.compileArg).join(" ")) || "")).trim();
        if (str.length > Limits_1.default.ChatLimit)
            console.warn("Compiled command with " + str.length.toLocaleString() + " characters. Too large for chat. (limit: " + Limits_1.default.ChatLimit + ")");
        if (str.length > Limits_1.default.CommandBlockLimit)
            console.error("Compiled command with " + str.length.toLocaleString() + " characters. Too large for command block. (limit: " + Limits_1.default.CommandBlockLimit + ")");
        return str;
    };
    Command.prototype.compileArg = function (arg) {
        if (typeof arg == "string")
            return arg;
        else if (typeof arg == "number")
            return String(arg);
        else if (arg)
            return JSON.stringify(arg);
        else
            return arg;
    };
    return Command;
}());
exports.Command = Command;
