import "reflect-metadata"

export const COMMAND_FLAG: string = "command:flag"

export default function Flag(shortForm: string, longForm: string, opts: {[key: string]: any} = {}) {
  return Reflect.metadata(COMMAND_FLAG, {...opts, shortForm, longForm})
}

export function getFlags(target: any, propertyKey: string) {
  return Reflect.getMetadata(COMMAND_FLAG, target, propertyKey)
}