import { IPhrase } from "../types/IPhrase";
import { Token } from "../types/IToken";

export class Lexer {
  lexData(phrases: IPhrase[]) {
    let tokens: Token[] = [];

    phrases.forEach((phrase) => {
      const splitPhrase = phrase.split(" ");

      tokens.push({
        ordem: splitPhrase[0],
        valor: splitPhrase[1],
      });
    });

    return tokens;
  }
  checkInvalidKeyword(data: string[]) {}
}
