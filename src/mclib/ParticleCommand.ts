import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import Particles from "./extras/Particles";

export default class ParticleCommand extends Command {
  constructor(
    name: Particles,
    pos?: CommandPosition,
    delta?: CommandPosition,
    speed?: number,
    count?: number,
    force?: "normal" | "force",
    viewers?: CommandUserSelector | CommandEntitySelector
  ) {
    super("particle", [
      name,
      ...CommandOptional(pos?.toString()),
      ...CommandOptional(delta?.toString()),
      ...CommandOptional(String(speed)),
      ...CommandOptional(String(count)),
      ...CommandOptional(force),
      ...CommandOptional(viewers?.toString()),
    ]);
  }
}
