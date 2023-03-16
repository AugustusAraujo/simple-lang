#!/bin/node
import { argv } from "process";
import { build, main, readFileAndGetData, repl, run } from ".";
import { CError } from "./error/CError";

const command = argv[2];
const filename = argv[3];

const data = readFileAndGetData(filename)

new Promise(async () => {
  await main(data)
})

switch (command) {
  case "build":
    build();
    break;

  case "run":
    run();
    break;

  case "repl":
    repl();
    break;

  default:
    console.log("Commando inválido.");
    process.exit(0);
}