import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class OpCommand extends Command {
  constructor(targets: CommandUserSelector | CommandEntitySelector) {
    super("op", [targets.toString()]);
  }
}
