"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CommandOptional(item) {
    return item || item == 0 ? [item] : [];
}
exports.default = CommandOptional;
