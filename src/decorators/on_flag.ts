export default function OnFlag(flag) {
  return (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>): any => {
    return {
      value: function(...args: any[]) {
        const result = descriptor.value.apply(this, args)
        return result
      }
    }
  }
}