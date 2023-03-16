import { Token } from "./types/IToken";

export class Parser {
  parseTokens(tokens: Token[]) {
    console.log(tokens)

    let code: string[] = [];

    tokens.map((token: Token) => {
      if (token.ordem == "print") {
        return code.push(`console.log(${token.valor})`);
      }
    });
    // TODO: add btree indexing
    return code.toString();
  }
}
