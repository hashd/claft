import { Cmd } from "../_all";

export function App(name: String, opts: {[key: string]: any} = {}) {
  return Cmd(name, {
    ...opts,
    isRoot: true
  })
}
