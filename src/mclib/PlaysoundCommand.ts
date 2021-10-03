import { Command } from "./Command";
import { CommandEntitySelector, CommandUserSelector } from "./CommandSelector";
import Sounds from "./extras/Sounds";
import SoundSources from "./extras/SoundSources";
import CommandPosition from "./CommandPosition";
import CommandOptional from "./CommandOptional";

export default class PlaysoundCommand extends Command {
  constructor(
    sound: Sounds,
    source: SoundSources,
    targets: CommandUserSelector | CommandEntitySelector,
    pos?: CommandPosition,
    volume?: number,
    pitch?: number,
    minVolume?: number
  ) {
    super("playsound", [
      sound,
      source,
      targets.toString(),
      ...CommandOptional(pos?.toString()),
      ...CommandOptional(String(volume)),
      ...CommandOptional(String(pitch)),
      ...CommandOptional(String(minVolume)),
    ]);
  }
}
