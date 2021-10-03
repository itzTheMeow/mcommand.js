import { Command } from "./Command";
import { BlockNBT, NBTBuilder } from "./CommandNBT";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";
import { CommandBlockState } from "./CommandSelector";
import Blocks from "./extras/Blocks";

export default class SetblockCommand extends Command {
  constructor(
    block: Blocks,
    pos: CommandPosition,
    set?: "destroy" | "keep" | "replace",
    blockState?: CommandBlockState,
    blockNBT?: BlockNBT
  ) {
    let blockData = block;
    if (blockState) blockData += `${blockState.toString()}`;
    if (blockNBT)
      blockData += new NBTBuilder(blockNBT)
        .toString()
        .replace(/\\'/g, "'")
        .replace(/'/g, "\\'")
        .replace("\\", "")
        .replace(/\\([^\\]*)$/, "$1");
    super("setblock", [pos.toString(), blockData, ...CommandOptional(set)]);
  }
}
