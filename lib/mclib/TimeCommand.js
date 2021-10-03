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
var TimeCommand = /** @class */ (function (_super) {
    __extends(TimeCommand, _super);
    function TimeCommand(action, time) {
        var _this = this;
        if (action == "add" && typeof time == "number") {
            _this = _super.call(this, "time", ["add", String(time)]) || this;
        }
        else if (action == "query" && typeof time !== "number") {
            _this = _super.call(this, "time", ["query", time]) || this;
        }
        else if (action == "set") {
            _this = _super.call(this, "time", ["set", String(time)]) || this;
        }
        else {
            throw "Invalid TimeCommand.* Args*!";
        }
        return _this;
    }
    return TimeCommand;
}(Command_1.Command));
exports.default = TimeCommand;
