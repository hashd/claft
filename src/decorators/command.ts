import { parse } from '../utils';

export default function Command(name: String, opts: {[key: string]: any} = {}) {
  return function <T extends {new(...args:any[]): any}> (BaseClass: T) {
    return class extends BaseClass {
      static __CLAFT_META__ = {
        ...COMMAND_DEFAULT_OPTIONS,
        ...opts,
        name
      }

      constructor(...args: any[]) {
        super(...args)
      }

      execute(args) {
        console.log(args)
        if (super.execute) {
          super.execute(args)
        } else {
          console.log('Implementation missing for ', name)
        }
      }

      static parse(args) {
        parse.bind(this)(args)
      }
    }
  }
}

export const COMMAND_DEFAULT_OPTIONS = {
  subcommands: []
}