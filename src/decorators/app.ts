import { parse } from '../utils';
import Command from "./command";

export default function App(name: String, opts: {[key: string]: any} = {}) {
  return Command(name, {
    ...opts,
    isRoot: true
  })
}
