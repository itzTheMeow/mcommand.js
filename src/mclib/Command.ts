import Limits from "./extras/Limits";

type CommandNBT = {
  [key: string]: string | number | CommandNBT;
};
type CommandArgument = string | CommandNBT;

class Command {
  public prefix: string = "minecraft:";
  public name: string;
  public args?: CommandArgument[];

  constructor(minecraftName: string, args?: CommandArgument[]) {
    this.name = minecraftName;
    this.args = args;
  }

  toString(usePrefix: boolean = false) {
    let str = `/${(usePrefix && this.prefix) || ""}${this.name} ${
      this.args?.map(this.compileArg).join(" ") || ""
    }`.trim();
    if (str.length > Limits.ChatLimit)
      console.warn(
        `Compiled command with ${str.length.toLocaleString()} characters. Too large for chat. (limit: ${
          Limits.ChatLimit
        })`
      );
    if (str.length > Limits.CommandBlockLimit)
      console.error(
        `Compiled command with ${str.length.toLocaleString()} characters. Too large for command block. (limit: ${
          Limits.CommandBlockLimit
        })`
      );
    return str;
  }

  compileArg(arg: CommandArgument) {
    if (typeof arg == "string") return arg;
    else if (typeof arg == "number") return String(arg);
    else if (arg as CommandNBT) return JSON.stringify(arg);
    else return arg;
  }
}

export { CommandNBT, CommandArgument, Command };
