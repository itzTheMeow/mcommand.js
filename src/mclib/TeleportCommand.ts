import { Command } from "./Command";
import CommandPosition from "./CommandPosition";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

type TPArg1 = CommandPosition | CommandUserSelector | CommandEntitySelector;
type TPArg2 = CommandPosition | CommandUserSelector | CommandEntitySelector;
type TPArg3 = CommandPosition | "facing";
type TPArg4 = CommandPosition | "entity";
type TPArg5 = CommandUserSelector | CommandEntitySelector;
type TPArg6 = "eyes" | "feet";

export default class TeleportCommand extends Command {
  constructor(
    arg1: TPArg1,
    arg2?: TPArg2,
    arg3?: TPArg3,
    arg4?: TPArg4,
    arg5?: TPArg5,
    arg6?: TPArg6
  ) {
    if (arg1 instanceof CommandPosition) super("tp", [arg1.toString()]);
    else {
      if (!arg2) throw "Invalid TeleportCommand Arg2!";
      if (!arg3) super("tp", [arg1.toString(), arg2.toString()]);
      else if (arg3 instanceof CommandPosition)
        super("tp", [arg1.toString(), arg2.toString(), arg3.toString()]);
      else {
        if (!arg4) throw "Invalid TeleportCommand Arg4!";
        if (typeof arg4 == "string") {
          if (!arg5) throw "Invalid TeleportCommand Arg5!";
          super("tp", [
            arg1.toString(),
            arg2.toString(),
            "facing",
            "entity",
            arg5.toString(),
            ...CommandOptional(arg6),
          ]);
        } else super("tp", [arg1.toString(), arg2.toString(), "facing", arg4.toString()]);
      }
    }
  }
}
