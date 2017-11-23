import { parse } from '../utils';

export default function Command(name: String, opts: {[key: string]: any} = {}) {
  return function <T extends {new(...args:any[]): any}> (BaseClass: T) {  
    if (BaseClass.prototype.execute === undefined) {
      console.log(`Implementation missing for ${name}`)
    }

    BaseClass["__CLAFT_META__"] = {
      ...COMMAND_DEFAULT_OPTIONS,
      ...opts,
      name
    }

    BaseClass["parse"] = function (args) {
      parse.bind(this)(args)
    }

    return BaseClass
  }
}

export const COMMAND_DEFAULT_OPTIONS = {
  subcommands: [],
  isRoot: false
}