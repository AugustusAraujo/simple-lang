import * as fs from "fs";
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
import { Parser } from "./Parser";
import { Builder } from "./Builder";
import { Lexer } from "./Lexer";
import { CError } from "./error/CError";

let tokens: any[] = [];

export function readFileAndGetData(filename: string): string {
  if (!filename) throw new Error("Arquivo inválido.");

  return fs.readFileSync(filename).toString().trim();
}

export function main(data: string): void {
  try {
    console.log(data.split("\n").map((i) => i.trim().trimEnd().split(" ").filter((i) => i != "").join(" ")).filter((i) => i != ""))

    console.log(data
      .split(";")
      .map((i) => i.trimStart()))

    const lexer = new Lexer();

    tokens = lexer.scanTokens(data);
  } catch (e: any) {
    new CError(e.line, e.message)
  }
}

export function build(): void {
  const builder = new Builder();
  const parser = new Parser();
  builder.exportToJSFile(parser.parseTokens(tokens));
}

export function run(): void {
  const parser = new Parser();
  eval(parser.parseTokens(tokens));
}

export function repl(): void {
  readline.question("SP-REPL > ", (code: string) => {
    main(code)
    run()
    repl()
  });
}
