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

  execute(args) {
    console.log(args)
  }

  @OnFlag("t", { cascade: true })
  addToTop(args) {
    console.log(args)
  }
}