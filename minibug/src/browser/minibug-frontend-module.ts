import { ContainerModule } from "inversify";
import {  FrontendApplicationContribution } from '@theia/core/lib/browser';

import { cServerSymbol, cServerPath } from "../common/config-server"
import { cBackendServer } from "../common/server"
import { WebSocketConnectionProvider } from "@theia/core/lib/browser";
import { cContribution } from "./minibug-contribution"

export default new ContainerModule(bind => {
    bind(FrontendApplicationContribution).to(cContribution);


    bind(cServerSymbol).toDynamicValue(ctx => {
        return WebSocketConnectionProvider.createProxy<cBackendServer>(ctx.container, cServerPath)
    }
    ).inSingletonScope();
});  