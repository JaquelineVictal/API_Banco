import ClientsDao from "../daos/clients.dao";
import { Read } from "../interfaces/crud/read.interface";
import { ClientDTO } from "../dtos/client.dto";

export class ClientsCommonService implements Read {
    async readById(resourceId: number): Promise<ClientDTO | undefined> {
        return ClientsDao.buscar(resourceId);
    }
}

export default new ClientsCommonService();