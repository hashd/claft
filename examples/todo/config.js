import Command from "../../src/decorators/command";
import Flag from "../../src/decorators/flag";

@Command("config", {
  alias: "c"
})
export default class ConfigCommand {
  @Flag('f', 'file', {
    desc: 'Set the configuration file',
    type: String
  })
  filename


  async execute(arg) {
    console.log(`Added ${arg} as an action item`)
  }
}