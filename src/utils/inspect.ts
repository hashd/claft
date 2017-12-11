import { Klazz } from "../_all";

export function inspect(clazz: Klazz) {
  Reflect.getMetadataKeys(clazz).forEach(console.log)
  Reflect.getMetadataKeys(clazz.prototype).forEach(console.log)
}