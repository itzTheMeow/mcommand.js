import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import Sounds from "./extras/Sounds";
import SoundSources from "./extras/SoundSources";

export default class StopSoundCommand extends Command {
  constructor(
    targets: CommandUserSelector | CommandEntitySelector,
    source: SoundSources,
    sound: Sounds
  ) {
    super("stopsound", [targets.toString(), source, sound]);
  }
}
