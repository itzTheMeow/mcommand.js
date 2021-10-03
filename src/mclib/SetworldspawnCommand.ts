import { Command } from "./Command";
import CommandOptional from "./CommandOptional";
import CommandPosition from "./CommandPosition";

export default class SetworldspawnCommand extends Command {
  constructor(pos?: CommandPosition, angle?: string) {
    super("setworldspawn", [...CommandOptional(pos?.toString()), ...CommandOptional(angle)]);
  }
}
