"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBTBuilder = void 0;
var NBTBuilder = /** @class */ (function () {
    function NBTBuilder(NBT) {
        this.NBT = NBT;
    }
    NBTBuilder.prototype.toString = function (useQuotes) {
        if (useQuotes === void 0) { useQuotes = false; }
        function strgfy(obj) {
            var newNBT = [];
            Object.keys(obj).forEach(function (k, ki) {
                var val = Object.values(obj)[ki];
                if (Array.isArray(val))
                    val = "[" + val
                        .map(function (v) {
                        if (typeof v == "object")
                            v = strgfy(v);
                        return v;
                    })
                        .join(",") + "]";
                else if (val)
                    val =
                        (typeof val == "number" ? "" : useQuotes ? '"' : "'") +
                            (typeof val == "object" ? JSON.stringify(val) : String(val)).replace(/'/g, "\\'") +
                            (typeof val == "number" ? "" : useQuotes ? '"' : "'");
                else if (typeof val == "object")
                    val = strgfy(val);
                if (useQuotes)
                    newNBT.push("\"" + k + "\":" + val);
                else
                    newNBT.push(k + ":" + val);
            });
            return "{" + newNBT.join(",") + "}";
        }
        return strgfy(this.NBT);
    };
    return NBTBuilder;
}());
exports.NBTBuilder = NBTBuilder;
