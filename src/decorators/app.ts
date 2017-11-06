import { parse } from '../utils';
import Command from "./command";

export default function App(name: String, opts: {[key: string]: any} = {}) {
  return function <T extends {new(...args:any[]): any}> (BaseClass: T) {
    return class extends BaseClass {
      static __CLAFT_META__: {[key: string]: any} = {
        ...opts,
        name
      }

      constructor(...args: any[]) {
        super(...args)
      }

      execute(args) {
        if (super.execute) {
          super.execute(args)
        } else {
          console.log('Implementation missing for ', name)
        }
      }

      static parse(args) {
        parse.bind(this)(args.slice(2))
      }
    }
  }
}
