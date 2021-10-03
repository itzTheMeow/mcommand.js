import { Command } from "./Command";

type WLArg1 = "add" | "list" | "off" | "on" | "reload" | "remove";

export default class WhitelistCommand extends Command {
  constructor(action: WLArg1, playerName?: string) {
    if (action == "add" || action == "remove") {
      if (!playerName) throw "Invalid WhitelistCommand.(add|remove) Arg2!";
      super("whitelist", [action, playerName]);
    } else {
      super("whitelist", [action]);
    }
  }
}
