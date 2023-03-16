import * as fs from "fs";

export class Builder {
  exportToJSFile(data: string) {
    return fs.writeFileSync("sp_build.js", data, { encoding: "utf-8" });
  }
}
