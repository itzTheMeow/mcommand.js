import { Command } from "./Command";
import { NBTBuilder, TextNBT } from "./CommandNBT";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

type TIArg2 = "clear" | "reset" | "title" | "subtitle" | "actionbar" | "times";
type TIArg3 = TextNBT | number;

export default class TitleCommand extends Command {
  constructor(
    targets: CommandEntitySelector | CommandUserSelector,
    action: TIArg2,
    arg3?: TIArg3,
    arg4?: number,
    arg5?: number
  ) {
    if (action == "times") {
      if (typeof arg3 !== "number") throw "Invalid TitleCommand.times Arg3!";
      if (typeof arg4 !== "number") throw "Invalid TitleCommand.times Arg4!";
      if (typeof arg5 !== "number") throw "Invalid TitleCommand.times Arg5!";
      super("title", [targets.toString(), "times", String(arg3), String(arg4), String(arg5)]);
    } else if (action == "title" || action == "subtitle" || action == "actionbar") {
      if (!arg3 || typeof arg3 == "number")
        throw "Invalid TitleCommand.(title|subtitle|actionbar) Arg3!";
      super("title", [targets.toString(), action, new NBTBuilder(arg3).toString(true)]);
    } else {
      super("title", [targets.toString(), action]);
    }
  }
}
