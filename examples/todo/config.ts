import {Cmd, Command, Flag, OnFlag} from '../../src'

@Cmd("config", {
  alias: "c"
})
export default class ConfigCommand implements Command {
  @Flag('f', 'file', 'Set the configuration file', String)
  filename


  async execute(arg) {
    console.log(`Added ${arg} as an action item`)
  }
}