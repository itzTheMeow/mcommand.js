import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";

export default class RecipeCommand extends Command {
  constructor(
    action: "give" | "take",
    targets: CommandEntitySelector | CommandUserSelector,
    recipe: string
  ) {
    super("recipe", [action, targets.toString(), recipe]);
  }
}
