export class Lexer {
  lexData(data: any[]) {
    let tokens = {
      ordem: data[0],
      valor: data[1],
    };
    return tokens;
  }
  checkInvalidKeyword(data: string[]) {}
}
