import { Command } from "./Command";

type TGArg1 =
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
  | "armor"
  | "teamKill."
  | "killedByTeam."
  | string;

type TGArg2 = "add" | "set";

export default class TriggerCommand extends Command {
  constructor(objective: TGArg1, action?: TGArg2, value?: number) {
    if (!action) {
      super("trigger", [objective]);
    } else {
      if (!value && value !== 0) throw "Invalid TriggerCommand.(add|set) Arg3!";
      super("trigger", [objective, action, String(value)]);
    }
  }
}
