"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var Limits_1 = __importDefault(require("./extras/Limits"));
var CommandCompiler = /** @class */ (function () {
    function CommandCompiler(usePrefix, commands) {
        if (usePrefix === void 0) { usePrefix = false; }
        this.usePrefix = usePrefix;
        this.template = "summon falling_block ~ ~1 ~ {Time:1,BlockState:{Name:redstone_block},Passengers:[\n{id:armor_stand,Health:0,Passengers:[\n{id:falling_block,Time:1,BlockState:{Name:activator_rail},Passengers:[\n{id:command_block_minecart,Command:'gamerule commandBlockOutput false'},\n{id:command_block_minecart,Command:'data merge block ~ ~-2 ~ {auto:0}'},\n%cmds%,\n{id:command_block_minecart,Command:'setblock ~ ~1 ~ command_block{auto:1,Command:\"fill ~ ~ ~ ~ ~-2 ~ air\"}'},\n{id:command_block_minecart,Command:'kill @e[type=command_block_minecart,distance=..1]'}]}]}]}".replace(/\n/g, "");
        this.commandOutline = "{id:command_block_minecart,Command:'%cmd%'}";
        this.commands = [];
        commands === null || commands === void 0 ? void 0 : commands.forEach(this.add.bind(this));
    }
    CommandCompiler.prototype.add = function (cmd) {
        if (cmd instanceof Command_1.Command)
            cmd = cmd.toString();
        this.commands.push(cmd);
    };
    CommandCompiler.prototype.toString = function () {
        var _this = this;
        var str = this.template.replace("%cmds%", this.commands
            .map(function (c) { return _this.commandOutline.replace("%cmd%", c.startsWith("/") ? c.substring(1) : c); })
            .join(","));
        if (str.length > Limits_1.default.CommandBlockLimit)
            console.error("Compiled onecommand with " + str.length.toLocaleString() + " characters. Too large for command block. (limit: " + Limits_1.default.CommandBlockLimit + ")");
        return str;
    };
    return CommandCompiler;
}());
exports.default = CommandCompiler;
