import { Command } from "./Command";

export default class FunctionCommand extends Command {
  constructor(func: string) {
    super("function", [func]);
  }
}
