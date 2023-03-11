import { Token } from "./types/Itoken";

export class Parser {
  parseTokens(tokens: Token[]) {
    let code: string[] = [];

    tokens.forEach((token: Token) => {
      if (token.ordem == "print") {
        return code.push(`console.log(${token.valor})`);
      }
    });

    return code;
  }
}
