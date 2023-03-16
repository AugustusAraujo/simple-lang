export class CError {
    public constructor(private line: number, private message: string) {
        this.report(line, "", message)
    }

    private report(line: string | number, where: string, message: string): void {
        console.error(`[${line} line ] Error ${where} : ${message}`);
        process.exit(64)
    }
}
