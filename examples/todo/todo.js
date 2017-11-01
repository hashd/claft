#!/usr/bin/env node

import Add from './add'
import App from '../../src/decorators/app';

@App("todo", {
  version: '0.0.1',
  subcommands: [Add]
})
class Todo {

}

Todo.parse(process.argv.slice(2))