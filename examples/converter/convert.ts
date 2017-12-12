#!/usr/bin/env node
import EXCHANGE_RATES from './exchanges-rates'
import From from './from'
import { App, Flag, OnFlag, Option, Claft, Command } from '../../src';

const { INR } = EXCHANGE_RATES

@App("convert", {
  version: "0.0.1",
  subcommands: [From]
})
export default class Converter implements Command {
  @Flag("inr", "indian rupee", "Converts to Indian Rupees", Boolean)
  toIndianRupee: boolean

  @Option("sgd", "singapore dollars", "Converts to Singapore Dollars")
  toSingaporeDollars: boolean

  @Flag("aud", "australian dollar", "Converts to Australian Dollars", Boolean)
  toAustralianDollars: boolean

  execute(args) {
    console.log("Trying to convert ", args)
  }

  @OnFlag("inr")
  convertToIndianRupee(val, args) {
    console.log(INR * val)
  }

  @OnFlag("sgd")
  convertToSingaporeDollars(val, args) {
    console.log(INR * val)
  }
}

Claft.run(Converter)
