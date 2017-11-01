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
  
        console.log('Arguments: ', ...args)
      }

      static parse(args) {
        parse.bind(this)(args)
      }
    }
  }
}
