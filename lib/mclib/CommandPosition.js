"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandPosition = /** @class */ (function () {
    function CommandPosition(x, y, z, relative) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = null; }
        if (z === void 0) { z = 0; }
        if (relative === void 0) { relative = [false, false, false]; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.relative = relative;
    }
    CommandPosition.prototype.toString = function () {
        var x = this.relative[0] ? (this.x == 0 ? "~" : "~" + this.x) : this.x;
        var y = this.relative[1] ? (this.y == 0 ? "~" : "~" + this.y) : this.y;
        var z = this.relative[2] ? (this.z == 0 ? "~" : "~" + this.z) : this.z;
        return "" + x + (this.y == null ? " " : " " + y + " ") + z;
    };
    return CommandPosition;
}());
exports.default = CommandPosition;
