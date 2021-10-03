import { Command } from "./Command";
import { NBTBuilder, TextNBT } from "./CommandNBT";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class TellrawCommand extends Command {
  constructor(targets: CommandUserSelector | CommandEntitySelector, text: TextNBT) {
    super("tellraw", [targets.toString(), new NBTBuilder(text).toString(true)]);
  }
}
