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
var CommandNBT_1 = require("./CommandNBT");
var CommandOptional_1 = __importDefault(require("./CommandOptional"));
var SetblockCommand = /** @class */ (function (_super) {
    __extends(SetblockCommand, _super);
    function SetblockCommand(block, pos, set, blockState, blockNBT) {
        var _this = this;
        var blockData = block;
        if (blockState)
            blockData += "" + blockState.toString();
        if (blockNBT)
            blockData += new CommandNBT_1.NBTBuilder(blockNBT)
                .toString()
                .replace(/\\'/g, "'")
                .replace(/'/g, "\\'")
                .replace("\\", "")
                .replace(/\\([^\\]*)$/, "$1");
        _this = _super.call(this, "setblock", __spreadArrays([pos.toString(), blockData], CommandOptional_1.default(set))) || this;
        return _this;
    }
    return SetblockCommand;
}(Command_1.Command));
exports.default = SetblockCommand;
