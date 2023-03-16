import { TokenType } from "./TokenType";
import { IPhrase } from "./types/IPhrase";
import { Token } from "./types/IToken";

export class Lexer {
  private tokens: Token[] = []

  scanTokens(data: string): Token[] {
    let phrases: IPhrase[] = data
      .split(";")
      .filter((i) => i != "")
      .map((i) => i.trimStart());

    phrases.forEach((phrase) => {
      const splitPhrase = phrase.split(" ");

      if (this.verifyIfIsComment(splitPhrase)) return

      return this.tokens.push({
        ordem: splitPhrase[0],
        valor: splitPhrase[1],
      });
    });

    return this.tokens;
  }
  verifyIfIsComment(splitToken: any[]) {
    if (splitToken[0] == "#") return true
  }
  checkInvalidKeyword(data: string[]) { }
}
