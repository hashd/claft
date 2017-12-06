import { parse } from '../utils';
import { Cmd } from "./command";

export function App(name: String, opts: {[key: string]: any} = {}) {
  return Cmd(name, {
    ...opts,
    isRoot: true
  })
}
