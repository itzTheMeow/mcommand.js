import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import Gamemodes from "./extras/Gamemodes";

export default class GamemodeCommand extends Command {
  constructor(mode: Gamemodes, target: CommandUserSelector | CommandEntitySelector) {
    super("gamemode", [mode, ...CommandOptional(target.toString())]);
  }
}
