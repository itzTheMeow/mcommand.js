import { Command } from "./Command";

export default class SayCommand extends Command {
  constructor(text: string) {
    super("say", [text]);
  }
}
