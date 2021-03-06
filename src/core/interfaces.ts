import { Klazz } from "../_all";

export interface Command {
  execute(args: string): void
}

export interface CommandFlag {
  name: string,
  value: any
}

export interface CommandInfo {
  command: Klazz,
  flags: CommandFlag[],
  args: string[]
}

export interface CommandMeta {
  name: string
  subcommands: Klazz[]
}