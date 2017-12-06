import { parse, COMMAND_INFO, Klazz } from '../index';

export function Cmd(name: String, opts: {[key: string]: any} = {}) {
  return function <T extends Klazz> (Command: T) {
    Reflect.defineMetadata(COMMAND_INFO, {
      ...COMMAND_DEFAULT_OPTIONS,
      ...opts,
      name
    }, Command)
  }
}

export const COMMAND_DEFAULT_OPTIONS = {
  subcommands: [],
  isRoot: false
}