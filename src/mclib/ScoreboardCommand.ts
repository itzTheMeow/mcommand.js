// this is an absolute mess and i stopped here
// https://minecraft.fandom.com/wiki/Commands/scoreboard#test
// open a pr if you have a better implementation

import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

type SCArg1 = "objectives" | "players";
type SCArg2 = "list" | "add" | "remove" | "setdisplay" | "modify" | "get" | "set" | "reset";
type SCArg3 = "list" | "sidebar" | "belowname";
type SCArg4 =
  | "dummy"
  | "trigger"
  | "deathCount"
  | "playerKillCount"
  | "totalKillCount"
  | "health"
  | "xp"
  | "level"
  | "food"
  | "air"
  | "armor";

export default class ScoreboardCommand extends Command {
  constructor(
    type: SCArg1,
    action: SCArg2,
    objective?: string | SCArg3 | CommandUserSelector | CommandEntitySelector,
    criteria?: SCArg4 | string | "displayname" | "rendertype",
    displayName?: string | "hearts" | "integer" | number
  ) {
    if (type == "objectives" && typeof objective == "string") {
      if (action == "list") super("scoreboard", [type, "list"]);
      else if (action == "add")
        super("scoreboard", [
          type,
          "add",
          objective,
          criteria || "dummy",
          ...CommandOptional(displayName),
        ]);
      else if (action == "remove") super("scoreboard", [type, "remove", objective]);
      else if (action == "setdisplay")
        super("scoreboard", [type, "setdisplay", ...CommandOptional(criteria)]);
      else if (action == "modify")
        super("scoreboard", [
          type,
          "modify",
          objective,
          criteria || "displayname",
          String(displayName) || "hearts",
        ]);
    } else {
      if (action == "list")
        super("scoreboard", [type, "list", ...CommandOptional(objective?.toString())]);
      else if (action == "get")
        super("scoreboard", [type, "get", objective?.toString() || "null", criteria || "null"]);
      else if (action == "set")
        super("scoreboard", [
          type,
          "set",
          objective?.toString() || "null",
          criteria || "null",
          String(displayName),
        ]);
      else if (action == "add")
        super("scoreboard", [
          type,
          "add",
          objective?.toString() || "null",
          criteria || "null",
          String(displayName),
        ]);
      else if (action == "remove")
        super("scoreboard", [
          type,
          "remove",
          objective?.toString() || "null",
          criteria || "null",
          String(displayName),
        ]);
      else if (action == "reset")
        super("scoreboard", [type, "reset", objective?.toString() || "null", criteria || "null"]);
    }
  }
}
