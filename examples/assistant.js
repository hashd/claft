#!/usr/bin/env node
import { Name, ParamTypes, Alias } from '../src/decorators/subcommand';
import { NAME, PARAM_TYPES } from '../src/symbols';
import Claft from '../src/claft'

@Subcommand
class Greeter {

}

@Command
@Subcommands(Greeter)
class Assistant {

}

Claft.start(process.argv)