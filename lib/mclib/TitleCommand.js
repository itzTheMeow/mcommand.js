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
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var CommandNBT_1 = require("./CommandNBT");
var TitleCommand = /** @class */ (function (_super) {
    __extends(TitleCommand, _super);
    function TitleCommand(targets, action, arg3, arg4, arg5) {
        var _this = this;
        if (action == "times") {
            if (typeof arg3 !== "number")
                throw "Invalid TitleCommand.times Arg3!";
            if (typeof arg4 !== "number")
                throw "Invalid TitleCommand.times Arg4!";
            if (typeof arg5 !== "number")
                throw "Invalid TitleCommand.times Arg5!";
            _this = _super.call(this, "title", [targets.toString(), "times", String(arg3), String(arg4), String(arg5)]) || this;
        }
        else if (action == "title" || action == "subtitle" || action == "actionbar") {
            if (!arg3 || typeof arg3 == "number")
                throw "Invalid TitleCommand.(title|subtitle|actionbar) Arg3!";
            _this = _super.call(this, "title", [targets.toString(), action, new CommandNBT_1.NBTBuilder(arg3).toString(true)]) || this;
        }
        else {
            _this = _super.call(this, "title", [targets.toString(), action]) || this;
        }
        return _this;
    }
    return TitleCommand;
}(Command_1.Command));
exports.default = TitleCommand;
