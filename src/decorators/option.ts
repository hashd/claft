import { Flag, getFlags } from "../_all"

export function Option(shortForm: string, longForm: string, desc: string) {
  return Flag(shortForm, longForm, desc, Boolean)
}

export function getOptions(target: any, propertyKey: string) {
  return getFlags(target)
}