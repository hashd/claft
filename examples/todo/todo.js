#!/usr/bin/env node
import Add from './add'
import App from '../../src/decorators/app';
import Config from './config';

@App("todo", {
  version: '0.0.1',
  subcommands: [Add, Config]
})
class Todo {

}

Todo.parse(process.argv)