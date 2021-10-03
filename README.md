# mcommand.js

**THIS IS NOT COMPLETE AND MAY CHANGE IN THE FUTURE**
_make an issue/pr if something goes wrong_

there are no item types yet

Commands not being done (yet)

- https://minecraft.fandom.com/wiki/Commands/loot

## How to Use

There is no NPM package. (yet?)

1. Clone the repo. `git clone https://github.com/itzTheMeow/mcommand.js.git`
2. Open mcommand.js in your code editor (example uses VSCode)
3. `npm i` and then edit src/index.ts as an example.
4. `npm start` and presuming you left the console.log line you should get a command.

## Command Class

The `Command` class is the main part of this tool.

Syntax:

```js
let cmd = new Command("commandname", ["arg1", "arg2", "arg3"]);
```

You can use this to create commands from any mod/plugin by changing the command name. To get the actual command, use `Command.toString()`. Most of the classes in this tool have a toString method to get their output.

This class is used to make the helper classes!

## Data Classes

I'll document these better soon.

The data classes are meant to make it easy to pass data to a command. Here's one example.

```js
new CommandPosition(1, 64, 0, [true, false, true]);
```

The syntax is `CommandPosition(x, y, z, relative)`. Relative is optional and it is an array of 3 booleans to determine which coordinate is relative (~).
Calling .toString() on the example returns `~1 64 ~`.

## Helper Classes

I'm not going to list the helpers, there's too many... However i will show a few examples.

SayCommand

```js
new SayCommand("text");
```

SetblockCommand

```js
new SetblockCommand("minecraft:stone", new CommandPosition(0, 0, 0, [true, true, true]));
```

These helpers have specific arguments (check the source files). I'll probably make a gitbook documenting them all soon.

## Command Compiler

The command compiler is for generating onecommands!

There is a limit for command blocks (~30k chars), and if you generate a command too big, the console will say something. There is no fix for this atm but i do plan to allow bigger commands split into 2/3/4 command blocks.

Usage:

```js
new CommandCompiler(usePrefix, commands);
```

usePrefix, optional defaults to false, is forwarded onto each command (only works with Command class commands, not strings)

commands is an array of commands (optional)

This array can contain strings or Command class commands or helper commands.

You can also call CommandCompiler.add(command)
at any time with a new command (see above) to add.

The current commands will be compiled into a string when CommandCompiler.toString() is called. You can .add() more commands and re-compile using toString() and it will compile with the added commands as well as the old ones.

## Notes

Please note that the SayCommand, SetblockCommand, etc are HELPERS and will not suit everyone's needs. If you need something specific then use the Command class. The typings may be missing some things, if they are than make a pr!

## FAQ

- What version does this support?
  - Currently only 1.17.1 is supported.
  - This could be backported by yourself or you can use the raw Command class.
  - Want older onecommands? Edit the template and commandOutline in CommandBuilder to fit the version you want.
- Can i use this with X plugin/mod?
  - There is no mod/plugin custom command support.
  - You can set the usePrefix argument to true in order to use minecraft:commands if you are on a server.
  - If you want this kind of support see Notes above.
- What's the mod for?
  - The mod is/was used to get the block/item ids as there's no list online.
