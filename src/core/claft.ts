import { COMMAND_INFO, CommandInfo, parse, Klazz } from "../_all";

export class Claft {
  static run(clazz: Klazz) {
    const commandInfo = parse(process.argv.slice(2), clazz)
  }
}