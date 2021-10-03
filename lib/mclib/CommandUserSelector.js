"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandUserSelector = /** @class */ (function () {
    function CommandUserSelector(users) {
        this.users = users;
    }
    CommandUserSelector.prototype.toString = function () {
        if (typeof this.users == "string")
            return this.users;
        else
            return this.users.join(" ");
    };
    return CommandUserSelector;
}());
exports.default = CommandUserSelector;
