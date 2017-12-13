import { CommandInfo, commandInfo, Command, Klazz, CommandFlag, flagInfo, onFlagInfo, inspect } from "../_all";

export function parse(args: string[], command: Klazz): CommandInfo {
  let cCommandInfo = commandInfo(command),
      [head, ...rest] = args,
      [subcommand] = cCommandInfo.subcommands.filter(sc => commandInfo(sc).name === head)

  if (subcommand !== undefined) {
    return parse(rest, subcommand)
  }

  return parseFlagsAndArgs(args, command)
}

function parseFlags(args: string[], command: Klazz): {flags: CommandFlag[], nextIdx: number} {
  return {
    flags: [], nextIdx: args.length
  }
}

function parseFlagsAndArgs(args: string[], command: Klazz): CommandInfo {
  let { flags, nextIdx } = parseFlags(args, command)

  return {
    command,
    flags,
    args: args.slice(nextIdx)
  }
}