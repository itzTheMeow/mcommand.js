import { Command } from "./Command";
import { EntityNBT, NBTBuilder } from "./CommandNBT";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";
import Entities from "./extras/Entities";

export default class SummonCommand extends Command {
  constructor(entity: Entities, pos?: CommandPosition, nbt?: EntityNBT) {
    let nbtData = "";
    if (nbt) nbtData = new NBTBuilder(nbt).toString();
    super("summon", [entity, ...CommandOptional(pos?.toString()), ...CommandOptional(nbtData)]);
  }
}
