import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class KillCommand extends Command {
  constructor(targets: CommandUserSelector | CommandEntitySelector) {
    super("kill", [targets.toString()]);
  }
}
