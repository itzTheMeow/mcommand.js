import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import Gamerules from "./extras/Gamerules";

export default class GameruleCommand extends Command {
  constructor(rule: Gamerules, value: number | boolean) {
    super("gamerule", [rule, ...CommandOptional(String(value))]);
  }
}
