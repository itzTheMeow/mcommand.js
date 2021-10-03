import { Command } from "./Command";

export default class MeCommand extends Command {
  constructor(text: string) {
    super("me", [text]);
  }
}
