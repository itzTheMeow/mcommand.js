"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommandCompiler_1 = __importDefault(require("./mclib/CommandCompiler"));
var CommandPosition_1 = __importDefault(require("./mclib/CommandPosition"));
var SayCommand_1 = __importDefault(require("./mclib/SayCommand"));
var SetblockCommand_1 = __importDefault(require("./mclib/SetblockCommand"));
var SummonCommand_1 = __importDefault(require("./mclib/SummonCommand"));
var onecmd = new CommandCompiler_1.default();
onecmd.add(new SayCommand_1.default("testing 123"));
onecmd.add(new SummonCommand_1.default("minecraft:creeper", new CommandPosition_1.default(2, 0, 2, [true, true, true]), {
    powered: 1,
}));
var cmd = new SetblockCommand_1.default("minecraft:command_block", new CommandPosition_1.default(0, 0, 0, [true, true, true]), "replace", undefined, { Command: onecmd.toString() });
console.log(cmd.toString());
