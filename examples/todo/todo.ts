#!/usr/bin/env node
import Add from './add'
import {App, Claft} from '../../src'
import Config from './config';

@App("todo", {
  version: '0.0.1',
  subcommands: [Add, Config]
})
class Todo {

}

Claft.run(Todo)