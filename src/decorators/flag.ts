import "reflect-metadata"

export const COMMAND_FLAG: string = "command:flags"

export default function Flag(shortForm: string, longForm: string, desc: string, fn: string, type: Function) {
  return Reflect.metadata(COMMAND_FLAG, {
    shortForm, 
    longForm,
    desc,
    fn,
    type
  })
}

export function getFlags(target: any, propertyKey: string) {
  return Reflect.getMetadata(COMMAND_FLAG, target, propertyKey)
}