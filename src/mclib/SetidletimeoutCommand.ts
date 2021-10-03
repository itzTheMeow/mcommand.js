import { Command } from "./Command";

export default class SetidletimeoutCommand extends Command {
  constructor(mins: number) {
    super("setidletimeout", [String(mins)]);
  }
}
