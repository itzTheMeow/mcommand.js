"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandUserSelector = exports.CommandBlockState = exports.CommandEntitySelector = void 0;
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
exports.CommandEntitySelector = CommandEntitySelector;
// look them up yourself im not converting them to types
// https://minecraft.fandom.com/wiki/Block_states
var CommandBlockState = /** @class */ (function () {
    function CommandBlockState(states) {
        this.states = states;
    }
    CommandBlockState.prototype.toString = function () {
        var _this = this;
        var sts = [];
        Object.keys(this.states).forEach(function (k, ki) {
            sts.push(k + "=" + Object.values(_this.states)[ki]); // weird workaround
        });
        return "[" + sts.join(",") + "]";
    };
    return CommandBlockState;
}());
exports.CommandBlockState = CommandBlockState;
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
exports.CommandUserSelector = CommandUserSelector;
