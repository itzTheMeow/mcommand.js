import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

type TEArg1 = "list" | "add" | "remove" | "empty" | "join" | "leave" | "modify";
type TEArg2 = CommandUserSelector | CommandEntitySelector | string;
type TEArg3 = CommandUserSelector | CommandEntitySelector | string;

export default class TeamCommand extends Command {
  constructor(action: TEArg1, team: TEArg2, arg3?: TEArg3, arg4?: string) {
    switch (action) {
      case "list":
        super("team", ["list", ...CommandOptional(team)]);
        break;
      case "add":
        if (typeof team !== "string") throw "Invalid TeamCommand.add Arg2!";
        super("team", [action, team, ...CommandOptional(arg3)]);
        break;
      case "remove":
      case "empty":
        if (typeof team !== "string") throw "Invalid TeamCommand.(remove|empty) Arg2!";
        super("team", [action, team]);
        break;
      case "join":
        if (typeof team !== "string") throw "Invalid TeamCommand.join Arg2!";
        if (!arg3 || typeof arg3 == "string") throw "Invalid TeamCommand.join Arg3!";
        super("team", ["join", arg3.toString()]);
        break;
      case "leave":
        if (typeof team == "string") throw "Invalid TeamCommand.leave Arg2!";
        super("team", ["leave", team.toString()]);
        break;
      case "modify":
        if (typeof team !== "string") throw "Invalid TeamCommand.modify Arg2!";
        if (typeof arg3 !== "string") throw "Invalid TeamCommand.modify Arg3!";
        if (typeof arg4 !== "string") throw "Invalid TeamCommand.modify Arg4!";
        super("team", ["modify", team, arg3, arg4]);
        break;
    }
  }
}
