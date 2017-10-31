import { Name, ParamTypes } from '../src/decorators/subcommand';
import { NAME, PARAM_TYPES } from '../src/symbols';

@Name("git")
class Command {

  @Name("init")
  @ParamTypes("boolean")
  static init(flag) {
    console.log("Initializing...")
  }
}

console.log(Reflect.getMetadata(NAME, Command) || Command.name)
console.log(Reflect.getMetadata(PARAM_TYPES, Command, "init"))