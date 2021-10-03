import { Command } from "./Command";
import { CommandUserSelector } from "./CommandSelector";

export default class PardonCommand extends Command {
  constructor(targets: CommandUserSelector | string, ip: boolean = false) {
    super(ip ? "pardon-ip" : "pardon", [targets.toString()]);
  }
}
