import { Command } from "./Command";
import CommandOptional from "./CommandOptional";

type TArg1 = "add" | "query" | "set";
type TArg2 = "day" | "night" | "noon" | "midnight" | "daytime" | "gametime" | "day" | number;

export default class TimeCommand extends Command {
  constructor(action: TArg1, time: TArg2) {
    if (action == "add" && typeof time == "number") {
      super("time", ["add", String(time)]);
    } else if (action == "query" && typeof time !== "number") {
      super("time", ["query", time]);
    } else if (action == "set") {
      super("time", ["set", String(time)]);
    } else {
      throw "Invalid TimeCommand.* Args*!";
    }
  }
}
