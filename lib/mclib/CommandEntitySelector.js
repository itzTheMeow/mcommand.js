"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandEntitySelector = /** @class */ (function () {
    function CommandEntitySelector(select, detectors) {
        this.select = select;
        this.detectors = detectors;
    }
    CommandEntitySelector.prototype.toString = function () {
        if (!this.detectors)
            return "@" + this.select;
        else {
            var dets_1 = [];
            var detectors_1 = this.detectors;
            if (detectors_1.typeNot) {
                //@ts-ignore
                if (!detectors_1.type)
                    detectors_1.type = "";
                detectors_1.type += (detectors_1.type ? ",type=!" : "!") + detectors_1.typeNot.join(",type=!");
                delete detectors_1.typeNot;
            }
            Object.keys(this.detectors).forEach(function (k, ki) {
                dets_1.push(k + "=" + Object.values(detectors_1)[ki]); // weird workaround
            });
            return "@" + this.select + "[" + dets_1.join(",") + "]";
        }
    };
    return CommandEntitySelector;
}());
exports.default = CommandEntitySelector;
