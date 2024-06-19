declare module "streamifier" {
  import { Readable } from "stream";

  function createReadStream(buffer: Buffer): Readable;

  export { createReadStream };
}
