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
var SpreadplayersCommand = /** @class */ (function (_super) {
    __extends(SpreadplayersCommand, _super);
    function SpreadplayersCommand(center, spread, range, respectTeams, arg6, respectTeams2, targets) {
        var _this = this;
        if (respectTeams == "under" && targets) {
            _this = _super.call(this, "spreadplayers", [
                center.toString(),
                String(spread),
                String(range),
                "under",
                String(arg6),
                String(respectTeams2),
                targets.toString(),
            ]) || this;
        }
        else {
            _this = _super.call(this, "spreadplayers", [
                center.toString(),
                String(spread),
                String(range),
                String(respectTeams),
                arg6.toString(),
            ]) || this;
        }
        return _this;
    }
    return SpreadplayersCommand;
}(Command_1.Command));
exports.default = SpreadplayersCommand;
