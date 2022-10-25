import ClientsDao from "../../common/daos/clients.dao";
import { List } from "../../common/interfaces/crud/list.interface";
import { Create } from "../../common/interfaces/crud/create.interface";
import { Read } from "../../common/interfaces/crud/read.interface";
import { Update } from "../../common/interfaces/crud/update.interface";
import { Delete } from "../../common/interfaces/crud/delete.interface";
import { ClientDTO } from "../../common/dtos/client.dto";
import { ClientsCommonService } from "../../common/services/clients.service";
import { ViaCepFactory } from "../../common/apis/viacepfactory.api";
import { ApiCepFactory } from "../../common/apis/apicepfactory.api";
import { CepFactory } from "../../common/apis/cepfactory.api";

class ClientsService extends ClientsCommonService implements List, Create, Read, Update, Delete {
    
    constructor(private _viaCep: CepFactory, private _apiCep: CepFactory) {
        super();
    }

    async create(resource: ClientDTO): Promise<ClientDTO> {

        resource.endereco = await this._viaCep.preencheEndereco(resource.cep);
        
        if(!resource.endereco){
            resource.endereco = await this._apiCep.preencheEndereco(resource.cep);
        }

        return ClientsDao.cadastrar(resource);
    }

    async deleteById(resourceId: number): Promise<void> {
        return ClientsDao.excluir(resourceId);
    }

    async list(): Promise<ClientDTO[]> {
        return ClientsDao.listar();
    }

    async updateById(resource: ClientDTO): Promise<ClientDTO | undefined> {
        return ClientsDao.atualizar(resource);
    }
}

export default new ClientsService(
    new ViaCepFactory(),
    new ApiCepFactory()
    );