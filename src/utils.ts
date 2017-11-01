export function parse(args) {
  const firstArg = args[0]
  if (firstArg.length === 0) {
    return
  } else if (firstArg[0] === '-') {
    console.log(this)
  } else {
    const filtered = this.__CLAFT_META__.subcommands.filter(c => c.__CLAFT_META__.name === firstArg)
    if (filtered.length === 0) {
      console.log("Command not found.", firstArg)
    } else {
      console.log(filtered)
    }
  }
}