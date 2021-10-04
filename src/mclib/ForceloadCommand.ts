import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";

export default class FunctionCommand extends Command {
  constructor(
    action: "add" | "remove" | "query",
    pos1: CommandPosition | "all",
    pos2?: CommandPosition
  ) {
    super("forceload", [action, pos1.toString(), ...CommandOptional(pos2)]);
  }
}
