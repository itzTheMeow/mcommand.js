import CommandCompiler from "./mclib/CommandCompiler";
import CommandPosition from "./mclib/CommandPosition";
import { CommandBlockState } from "./mclib/CommandSelector";
import SayCommand from "./mclib/SayCommand";
import SetblockCommand from "./mclib/SetblockCommand";
import SummonCommand from "./mclib/SummonCommand";

let onecmd = new CommandCompiler();
onecmd.add(new SayCommand("testing 123"));
onecmd.add(
  new SummonCommand("minecraft:creeper", new CommandPosition(2, 0, 2, [true, true, true]), {
    powered: 1,
  })
);

let cmd = new SetblockCommand(
  "minecraft:command_block",
  new CommandPosition(0, 0, 0, [true, true, true]),
  "replace",
  undefined,
  { Command: onecmd.toString() }
);

console.log(cmd.toString());
