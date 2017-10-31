import { NAME, PARAM_TYPES } from '../symbols';
import 'reflect-metadata';

// Work in progress
function subcommand(target: object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
  return {
    value: function (...args: any[]) {
      return descriptor.value.apply(this, ...args)
    }
  }
}

export function Name(name: string) {
  return Reflect.metadata(NAME, name)
}

export function ParamTypes(...types) {
  return Reflect.metadata(PARAM_TYPES, types)
}