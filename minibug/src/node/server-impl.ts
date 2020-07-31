import { injectable } from 'inversify';

import { cBackendServer } from "../common/server"

/**
 * Common implementation of {@link ConfigCppServer} that will be used by all backend modules. See
 * {@link ConfigCppServer} for function level documentation on implemented functions.
 */
@injectable()
export class cBackendServerImpl implements cBackendServer {
    constructor(
    ) {}

    public someInfo = async (): Promise<any> => {
        return console.log("someInfo requested");
    }
}