import { Command } from "./Command";
import { ItemNBT, NBTBuilder } from "./CommandNBT";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import Items from "./extras/Items";
import CommandOptional from "./CommandOptional";

export default class GiveCommand extends Command {
  constructor(
    target: CommandUserSelector | CommandEntitySelector,
    item: Items,
    amount?: number,
    nbt?: ItemNBT
  ) {
    super("give", [
      target.toString(),
      item + (nbt ? new NBTBuilder(nbt).toString() : ""),
      ...CommandOptional(String(amount)),
    ]);
  }
}
