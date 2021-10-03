import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";

export default class SpawnpointCommand extends Command {
  constructor(
    targets?: CommandUserSelector | CommandEntitySelector,
    pos?: CommandPosition,
    angle?: string
  ) {
    super("spawnpoint", [
      ...CommandOptional(targets?.toString()),
      ...CommandOptional(pos?.toString()),
      ...CommandOptional(angle),
    ]);
  }
}
