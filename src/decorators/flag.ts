import { FLAG_INFO } from "../index"

export function Flag(shortForm: string, longForm: string, desc: string, type: Function) {
  return function (target: object, key: string | symbol) {
    let metadata = getFlags(target) || {}

    Reflect.defineMetadata(FLAG_INFO, {
      ...metadata, 
      [shortForm]: { shortForm, longForm, desc, type }
    }, target)
  }
}

export function getFlags(target: any) {
  return Reflect.getMetadata(FLAG_INFO, target) || {}
}