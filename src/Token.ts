import { TokenType } from "./TokenType";

export class Token {
    constructor(
        private type: TokenType,
        private lexeme: string,
        private literal: object,
        private line: number
    ) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }

    public toString(): string {
        return `${this.type} ${this.lexeme} ${this.literal}`;
    }
}