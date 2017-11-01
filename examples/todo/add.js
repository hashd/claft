import Command from "../../src/decorators/command";
import Flag from "../../src/decorators/flag";

@Command("add", {
  alias: "a"
})
export default class AddTodoCommand {
  @Flag('t', 'top', {
    desc: 'Adds a task at the top of the list',
    type: Boolean
  })
  atTop = false

  async execute(arg) {
    if (this.atTop === true) {
      console.log('Adding to top: ', arg)
    } 
  }
}