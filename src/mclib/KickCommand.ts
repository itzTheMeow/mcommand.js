import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class KickCommand extends Command {
  constructor(targets: CommandUserSelector | CommandEntitySelector, reason?: string) {
    super("kick", [targets.toString(), ...CommandOptional(reason)]);
  }
}
