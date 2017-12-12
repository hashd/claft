import { CommandInfo, commandInfo, Command, Klazz, CommandFlag, flagInfo, onFlagInfo, inspect } from "../_all";

export function parse([head, ...rest]: string[], command: Klazz): CommandInfo {
  let cCommandInfo = commandInfo(command),
      [subcommand] = cCommandInfo.subcommands.filter(sc => commandInfo(sc).name === head)

  if (subcommand !== undefined) {
    console.log(subcommand, head)
    parse(rest, subcommand)
  } else {
    console.log(command, head, rest)
    Object.keys(command["prototype"]).forEach(k => console.log(k, Reflect.getMetadata("design:paramtypes", command["prototype"], k)))
  }

  return undefined
}

function parseCommands(args: string[], rootCommand: Klazz): Klazz[] {
  let cCommand = rootCommand,
      cCommandInfo = commandInfo(rootCommand),
      commands = [rootCommand]
  
  let idx = 0
  while (idx < args.length) {
    let arg = args[idx],
        subcommand = cCommandInfo.subcommands.filter(sc => commandInfo(sc).name === arg)

    if (subcommand.length > 0) {
      cCommandInfo = commandInfo(subcommand[0])
      idx = idx + 1
      commands.push(subcommand[0])

      continue
    }
    break;
  }

  return commands
}

function parseFlags(args: string[], command: Klazz): {flags: CommandFlag[], idx: number} {
  return {
    flags: [], idx: args.length
  }
}