import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class TagCommand extends Command {
  constructor(
    target: CommandUserSelector | CommandEntitySelector,
    action: "add" | "list" | "remove",
    name?: string
  ) {
    super("tag", [target.toString(), action, ...CommandOptional(name)]);
  }
}
