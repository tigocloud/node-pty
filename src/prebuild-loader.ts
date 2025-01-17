import * as os from "os";

export default function getPath(){
  if(os.platform() === 'linux' && os.arch() === 'x64'){
    return require('../prebuild/pty-linux-x64.node');
  }else if(os.platform() === 'linux' && os.arch() === 'arm64'){
    return require('../prebuild/pty-linux-arm64.node');
  }else if(os.platform() === 'linux' && os.arch() === 'arm'){
    return require('../prebuild/pty-linux-arm.node');
  }else if(os.platform() === 'darwin' && os.arch() === 'arm64'){
    return require('../prebuild/pty-darwin-arm64.node');
  }else{
    throw Error(`unsupported arch ${os.platform()}-${os.arch()}`);
  }
}
