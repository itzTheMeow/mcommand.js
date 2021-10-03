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
var WhitelistCommand = /** @class */ (function (_super) {
    __extends(WhitelistCommand, _super);
    function WhitelistCommand(action, playerName) {
        var _this = this;
        if (action == "add" || action == "remove") {
            if (!playerName)
                throw "Invalid WhitelistCommand.(add|remove) Arg2!";
            _this = _super.call(this, "whitelist", [action, playerName]) || this;
        }
        else {
            _this = _super.call(this, "whitelist", [action]) || this;
        }
        return _this;
    }
    return WhitelistCommand;
}(Command_1.Command));
exports.default = WhitelistCommand;
