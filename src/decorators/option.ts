import "reflect-metadata"

export const COMMAND_OPTIONS: string = "command:options"

export default function Option(shortForm: string, longForm: string, desc: string, fn: string) {
  return Reflect.metadata(COMMAND_OPTIONS, {
    shortForm, 
    longForm,
    desc,
    fn,
    Boolean
  })
}

export function getOptions(target: any, propertyKey: string) {
  return Reflect.getMetadata(COMMAND_OPTIONS, target, propertyKey)
}