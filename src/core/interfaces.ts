import { Klazz } from "../_all";

export interface Command {
  execute(args: string): void
}

export interface CommandFlag {
  name: string,
  value: string
}

export interface CommandInfo {
  commands: Klazz[],
  flags: CommandFlag[],
  args: string[]
}

export interface CommandMeta {
  name: string
  subcommands: Klazz[]
}