import { Command } from "./Command";
import Structures from "./extras/Structures";

export default class LocateCommand extends Command {
  constructor(structure: Structures) {
    super("locate", [structure]);
  }
}
