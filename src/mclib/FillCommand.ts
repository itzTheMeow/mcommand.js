import { Command } from "./Command";
import { BlockNBT, NBTBuilder } from "./CommandNBT";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";
import { CommandBlockState } from "./CommandSelector";
import Blocks from "./extras/Blocks";

export default class FillCommand extends Command {
  constructor(
    from: CommandPosition,
    to: CommandPosition,
    block: Blocks,
    blockState?: CommandBlockState,
    blockNBT?: BlockNBT,
    action?: "destroy" | "hollow" | "keep" | "outline" | "replace",
    replaceFilter?: Blocks
  ) {
    super("fill", [
      from.toString(),
      to.toString(),
      block +
        (blockState ? blockState.toString() : "") +
        (blockNBT ? new NBTBuilder(blockNBT).toString() : ""),
      ...CommandOptional(action),
      ...CommandOptional(replaceFilter),
    ]);
  }
}
