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
var TeamCommand = /** @class */ (function (_super) {
    __extends(TeamCommand, _super);
    function TeamCommand(action, team, arg3, arg4) {
        var _this = this;
        switch (action) {
            case "list":
                _this = _super.call(this, "team", __spreadArrays(["list"], CommandOptional_1.default(team))) || this;
                break;
            case "add":
                if (typeof team !== "string")
                    throw "Invalid TeamCommand.add Arg2!";
                _this = _super.call(this, "team", __spreadArrays([action, team], CommandOptional_1.default(arg3))) || this;
                break;
            case "remove":
            case "empty":
                if (typeof team !== "string")
                    throw "Invalid TeamCommand.(remove|empty) Arg2!";
                _this = _super.call(this, "team", [action, team]) || this;
                break;
            case "join":
                if (typeof team !== "string")
                    throw "Invalid TeamCommand.join Arg2!";
                if (!arg3 || typeof arg3 == "string")
                    throw "Invalid TeamCommand.join Arg3!";
                _this = _super.call(this, "team", ["join", arg3.toString()]) || this;
                break;
            case "leave":
                if (typeof team == "string")
                    throw "Invalid TeamCommand.leave Arg2!";
                _this = _super.call(this, "team", ["leave", team.toString()]) || this;
                break;
            case "modify":
                if (typeof team !== "string")
                    throw "Invalid TeamCommand.modify Arg2!";
                if (typeof arg3 !== "string")
                    throw "Invalid TeamCommand.modify Arg3!";
                if (typeof arg4 !== "string")
                    throw "Invalid TeamCommand.modify Arg4!";
                _this = _super.call(this, "team", ["modify", team, arg3, arg4]) || this;
                break;
        }
        return _this;
    }
    return TeamCommand;
}(Command_1.Command));
exports.default = TeamCommand;
