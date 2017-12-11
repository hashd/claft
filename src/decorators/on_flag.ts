import { ON_FLAG_INFO } from "../_all";

export function OnFlag(flag) {
  return (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>): any => {
    let metadata = Reflect.getMetadata(ON_FLAG_INFO, target) || {}
    Reflect.defineMetadata(ON_FLAG_INFO, { ...metadata, [flag]: key }, target)
  }
}

export function getOnFlag(target: object) {
  return Reflect.getMetadata(ON_FLAG_INFO, target) || {}
}