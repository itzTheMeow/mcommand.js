import { Command } from "./Command";

export default class ListCommand extends Command {
  constructor(uuids: boolean = false) {
    super("list", uuids ? ["uuids"] : []);
  }
}
