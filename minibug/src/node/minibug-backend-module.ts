import { ContainerModule } from "inversify";
import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core/lib/common/messaging';
import { cServerSymbol, cServerPath } from '../common/config-server';
import { cBackendServerImpl } from './server-impl';

export default new ContainerModule(bind => {

    bind(cServerSymbol).to(cBackendServerImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(cServerPath, () =>
            ctx.container.get<cBackendServerImpl>(cServerSymbol)
        )
    ).inSingletonScope();
});  