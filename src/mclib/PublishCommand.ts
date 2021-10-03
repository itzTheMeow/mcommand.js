import { Command } from "./Command";
import CommandOptional from "./CommandOptional";

export default class PublishCommand extends Command {
  constructor(port?: number) {
    super("publish", [...CommandOptional(String(port))]);
  }
}
