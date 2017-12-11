import { COMMAND_INFO, FLAG_INFO, ON_FLAG_INFO, CommandInfo, CommandMeta, getFlags, getOnFlag } from "../_all";

export function commandInfo(clazz: any): CommandMeta {
  return Reflect.getMetadata(COMMAND_INFO, clazz)
}

export function flagInfo(clazz: any) {
  return getFlags(clazz)
}

export function onFlagInfo(clazz: any) {
  return getOnFlag(clazz)
}