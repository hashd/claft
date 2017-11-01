import Command from "../../src/decorators/command";

@Command("config", {
  alias: "c"
})
export default class TodoConfigCommand {
  


  async execute(arg) {
    console.log(`Added ${arg} as an action item`)
  }
}