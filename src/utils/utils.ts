function parse(args) {
  const firstArg = args[0],
        META = this.__CLAFT_META__
  
  if (META.isRoot === true) {
    args = args.slice(2)
  }

  if (firstArg === undefined || firstArg.length === 0) {
    new this().execute()
  } else if (firstArg[0] === '-') {
    executeCommandWithFlags.call(this, args)
  } else {
    executeCommandOrSubcommand.call(this, args)
  }
}

function executeCommandOrSubcommand(args) {
  const firstArg = args[0],
        META = this.__CLAFT_META__

  const subcommands = (META && META.subcommands) ? META.subcommands: []
  const [filtered] = subcommands.filter(c => c.__CLAFT_META__.name === firstArg)
  if (filtered === undefined) {
    console.log(`Executing ${META.name} with args: ${args.slice(0)}`)
    new this().execute(args.slice(0))
  } else {
    filtered.parse(args.slice(1))
  }
}

function executeCommandWithFlags(args) {
  console.log(args)
}