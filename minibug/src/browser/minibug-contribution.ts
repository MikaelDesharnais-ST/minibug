import { injectable,inject } from 'inversify';
import { cBackendServer } from '../common/server';
import { cServerSymbol } from '../common/config-server';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

@injectable()
// Add contribution interface to be implemented, e.g. "MinibugContribution implements CommandContribution"
export class cContribution implements FrontendApplicationContribution{

    constructor(
        @inject(cServerSymbol) private readonly cBackendBridge : cBackendServer
    ) { }
    initialize():void{
        setInterval(()=>{
            this.cBackendBridge.someInfo();
        },1000);
    }
}