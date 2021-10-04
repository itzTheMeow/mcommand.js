import { Command } from "./Command";
import Limits from "./extras/Limits";

export default class CommandCompiler {
  public template =
    `summon falling_block ~ ~1 ~ {Time:1,BlockState:{Name:redstone_block},Passengers:[
{id:armor_stand,Health:0,Passengers:[
{id:falling_block,Time:1,BlockState:{Name:activator_rail},Passengers:[
{id:command_block_minecart,Command:'gamerule commandBlockOutput false'},
{id:command_block_minecart,Command:'data merge block ~ ~-2 ~ {auto:0}'},
%cmds%,
{id:command_block_minecart,Command:'setblock ~ ~1 ~ command_block{auto:1,Command:"fill ~ ~ ~ ~ ~-2 ~ air"}'},
{id:command_block_minecart,Command:'kill @e[type=command_block_minecart,distance=..1]'}]}]}]}`.replace(
      /\n/g,
      ""
    );
  public commandOutline = `{id:command_block_minecart,Command:'%cmd%'}`;

  public commands: string[] = [];

  constructor(public usePrefix: boolean = false, commands?: (string | Command)[]) {
    commands?.forEach(this.add.bind(this));
  }

  add(cmd: string | Command) {
    if (cmd instanceof Command) cmd = cmd.toString();
    this.commands.push(cmd);
  }

  toString() {
    let str = this.template.replace(
      "%cmds%",
      this.commands
        .map((c) =>
          this.commandOutline.replace(
            "%cmd%",
            (c.startsWith("/") ? c.substring(1) : c).replace(/\\'/g, "'").replace(/'/g, "\\'")
          )
        )
        .join(",")
    );
    if (str.length > Limits.CommandBlockLimit)
      console.error(
        `Compiled onecommand with ${str.length.toLocaleString()} characters. Too large for command block. (limit: ${
          Limits.CommandBlockLimit
        })`
      );
    return str;
  }
}
