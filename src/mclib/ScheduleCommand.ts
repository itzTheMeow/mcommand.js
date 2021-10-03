import { Command } from "./Command";
import CommandOptional from "./CommandOptional";

export default class ScheduleCommand extends Command {
  constructor(
    action: "function" | "clear",
    func: string,
    time?: number,
    arg4?: "append" | "replace"
  ) {
    super(action, [func, ...CommandOptional(String(time)), ...CommandOptional(arg4)]);
  }
}
