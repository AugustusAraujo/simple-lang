import { argv } from "process";
import * as fs from "fs";
import { Lexer } from "./lexer";
import { Parser } from "./parser";

const filename = argv[2];

fileCheck();

function fileCheck(): void {
  if (!filename) throw new Error("Arquivo inválido.");
  if (filename.split(".")[filename.split(".").length - 1] != "sp")
    throw new Error("Arquivo não .sp");
}

let arquivo = fs.readFileSync(filename);

let data = arquivo.toString().trim()

const tokens = [];

tokens.push(new Lexer().lexData(data.split(' ')));

console.log(tokens)

console.log(new Parser().parseTokens(tokens))