import { argv } from "process";
import * as fs from "fs";
import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser";

const filename = argv[2];

if (!filename) throw new Error("Arquivo inválido.");
if (filename.split(".")[filename.split(".").length - 1] != "sp")
  throw new Error("Arquivo não .sp");

let data = fs.readFileSync(filename).toString().trim();

let phrases = data
  .split(";")
  .filter((i) => i != "")
  .map((i) => i.trimStart());

const lexer = new Lexer();

const tokens = lexer.lexData(phrases);

console.log(tokens);

const parser = new Parser();

eval(parser.parseTokens(tokens));
