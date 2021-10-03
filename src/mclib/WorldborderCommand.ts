import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";

type WBArg1 = "add" | "center" | "damage" | "get" | "set" | "warning";
type WBArg2 = number | CommandPosition | "amount" | "buffer" | "distance" | "time";
type WBArg3 = number;

export default class WorldBorderCommand extends Command {
  constructor(action: WBArg1, arg2?: WBArg2, arg3?: WBArg3) {
    switch (action) {
      case "add":
        if (!arg2 || typeof arg2 !== "number") throw "Invalid WorldBorderCommand.add Arg2!";
        super("worldborder", ["add", String(arg2), ...CommandOptional(String(arg3))]);
        break;
      case "center":
        if (!arg2 || !(arg2 instanceof CommandPosition))
          throw "Invalid WorldBorderCommand.center Arg2!";
        super("worldborder", ["center", arg2.toString()]);
        break;
      case "damage":
        switch (arg2) {
          case "amount":
            if (!arg3 || typeof arg3 !== "number")
              throw "Invalid WorldBorderCommand.damage.amount Arg3!";
            super("worldborder", ["damage", "amount", String(arg3)]);
            break;
          case "buffer":
            if (!arg3 || typeof arg3 !== "number")
              throw "Invalid WorldBorderCommand.damage.buffer Arg3!";
            super("worldborder", ["damage", "buffer", String(arg3)]);
            break;
          default:
            throw "Invalid WorldBorderCommand.damage Arg2!";
        }
        break;
      case "get":
        super("worldborder", ["get"]);
        break;
      case "set":
        if (!arg2 || typeof arg3 !== "number") throw "Invalid WorldBorderCommand.set Arg2!";
        super("worldborder", ["set", String(arg2), ...CommandOptional(String(arg3))]);
        break;
      case "warning":
        switch (arg2) {
          case "distance":
            if (!arg3 || typeof arg3 !== "number")
              throw "Invalid WorldBorderCommand.warning.distance Arg3!";
            super("worldborder", ["warning", "distance", String(arg3)]);
            break;
          case "time":
            if (!arg3 || typeof arg3 !== "number")
              throw "Invalid WorldBorderCommand.warning.time Arg3!";
            super("worldborder", ["warning", "time", String(arg3)]);
            break;
          default:
            throw "Invalid WorldBorderCommand.warning Arg2!";
        }
        break;
    }
  }
}
