import { Command } from "./Command";
import CommandPosition from "./CommandPosition";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

type SPArg5 = boolean | "under";
type SPArg6 = number | CommandUserSelector | CommandEntitySelector;

export default class SpreadplayersCommand extends Command {
  constructor(
    center: CommandPosition,
    spread: number,
    range: number,
    respectTeams: SPArg5,
    arg6: SPArg6,
    respectTeams2?: boolean,
    targets?: CommandUserSelector | CommandEntitySelector
  ) {
    if (respectTeams == "under" && targets) {
      super("spreadplayers", [
        center.toString(),
        String(spread),
        String(range),
        "under",
        String(arg6),
        String(respectTeams2),
        targets.toString(),
      ]);
    } else {
      super("spreadplayers", [
        center.toString(),
        String(spread),
        String(range),
        String(respectTeams),
        arg6.toString(),
      ]);
    }
  }
}
