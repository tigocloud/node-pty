import * as os from "os";

export default function getPath(){
  let pty: IUnixNative;

  if(os.arch() === 'x64'){
    pty = require('../prebuild/pty-amd64.node');
  }else if(os.arch() === 'arm64'){
    pty = require('../prebuild/pty-arm64.node');
  }else{
    throw Error(`unsupported arch ${os.arch()}`);
  }

  return pty;
}
