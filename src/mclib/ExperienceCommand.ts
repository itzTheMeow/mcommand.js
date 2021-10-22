import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import CommandOptional from "./CommandOptional";

type XPArg1 = "add" | "set" | "query";
type XPArg3 = "levels" | "points";

export default class ExperienceCommand extends Command {
  constructor(
    action: XPArg1,
    target: CommandUserSelector | CommandEntitySelector,
    arg2: XPArg3 | number,
    arg3?: XPArg3
  ) {
    super("xp", [action, target.toString(), String(arg2), ...CommandOptional(arg3)]);
  }
}
