import CommandCompiler from "./mclib/CommandCompiler";
import CommandPosition from "./mclib/CommandPosition";
import SayCommand from "./mclib/SayCommand";
import SummonCommand from "./mclib/SummonCommand";
import GiveCommand from "./mclib/GiveCommand";
import { CommandEntitySelector } from "./mclib/CommandSelector";

let onecmd = new CommandCompiler();
onecmd.add(new SayCommand("testing 123"));
onecmd.add(
  new SummonCommand("minecraft:creeper", new CommandPosition(0, 0, 0, [true, true, true]), {
    powered: 1,
  })
);
onecmd.add(
  new GiveCommand(new CommandEntitySelector("a"), "minecraft:netherite_sword", 1, {
    Enchantments: [{ id: "sharpness", lvl: 300 }],
  })
);

console.log(onecmd.toString());
