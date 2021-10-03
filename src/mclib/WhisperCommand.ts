import { Command } from "./Command";
import { CommandUserSelector } from "./CommandSelector";

export default class WhisperCommand extends Command {
  constructor(targets: CommandUserSelector, text: string) {
    super("w", [targets.toString(), text]);
  }
}
