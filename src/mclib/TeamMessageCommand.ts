import { Command } from "./Command";

export default class TeamMessageCommand extends Command {
  constructor(text: string) {
    super("tm", [text]);
  }
}
