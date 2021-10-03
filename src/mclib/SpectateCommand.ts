import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import CommandOptional from "./CommandOptional";

export default class SpectateCommand extends Command {
  constructor(
    target?: CommandUserSelector | CommandEntitySelector,
    player?: CommandUserSelector | CommandEntitySelector
  ) {
    super("spectate", [
      ...CommandOptional(target?.toString()),
      ...CommandOptional(player?.toString()),
    ]);
  }
}
