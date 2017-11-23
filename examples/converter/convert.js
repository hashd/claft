#!/usr/bin/env node
import EXCHANGE_RATES from './exchanges-rates';
import Flag, { COMMAND_FLAG } from '../../src/decorators/flag';
import App from '../../src/decorators/app';
import OnFlag from '../../src/decorators/on_flag';
import From from './from'
import Claft from '../../src/claft';

const { INR } = EXCHANGE_RATES

@App("convert", {
  version: "0.0.1",
  subcommands: [From]
})
export default class Converter {
  @Flag("inr", "indian-rupee", "Converts to Indian Rupees", "convertToIndianRupee", Number)
  toIndianRupee

  execute(args) {
    console.log("Trying to convert ", args)
  }

  convertToIndianRupee(val) {
    console.log(INR * val)
  }
}

Claft.run(Converter)
