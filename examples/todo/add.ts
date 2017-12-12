import {Cmd, Command, Flag, OnFlag} from '../../src'

@Cmd("add", {
  alias: "a"
})
export default class AddTodoCommand implements Command {
  @Flag('t', 'top', 'Adds a task at the top of the list', Boolean)
  atTop = false

  execute(args) {
    console.log(args)
  }

  @OnFlag("t")
  addToTop(args) {
    console.log(args)
  }
}