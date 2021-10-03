import { Command } from "./Command";

export default class PerfCommand extends Command {
  constructor(ss: "start" | "stop") {
    super("perf", [ss]);
  }
}
