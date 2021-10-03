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
var TriggerCommand = /** @class */ (function (_super) {
    __extends(TriggerCommand, _super);
    function TriggerCommand(objective, action, value) {
        var _this = this;
        if (!action) {
            _this = _super.call(this, "trigger", [objective]) || this;
        }
        else {
            if (!value && value !== 0)
                throw "Invalid TriggerCommand.(add|set) Arg3!";
            _this = _super.call(this, "trigger", [objective, action, String(value)]) || this;
        }
        return _this;
    }
    return TriggerCommand;
}(Command_1.Command));
exports.default = TriggerCommand;
