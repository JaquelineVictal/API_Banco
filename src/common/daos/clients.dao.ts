import { ClientDTO } from "../dtos/client.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class ClientsDAO {
    private static _instance: ClientsDAO;
    private _clientes: ClientDTO[];

    private constructor(){
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }

    public static getInstance(): ClientsDAO {
        if (!ClientsDAO._instance) {
            ClientsDAO._instance = new ClientsDAO();
        }

        return ClientsDAO._instance;
    }

    cadastrar(pessoa: ClientDTO): ClientDTO {
        let objPessoa;
        
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);

        return objPessoa;
    }

    atualizar(pessoa: ClientDTO): ClientDTO | undefined {
        let objPessoa;
        
        objPessoa = pessoa;

        if(objPessoa.indexId === undefined)
            return;
        
        this._clientes[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (ClientDTO)[] {
        let objPessoas: (ClientDTO)[] = [];

        for(let cliente of this._clientes)
            objPessoas.push(cliente);

        return objPessoas;
    }

    excluir(cpfCnpj: number): void {

        const indexId = this._clientes.findIndex((obj: ClientDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else   
                return obj.cnpj === cpfCnpj;
        });
        log(`Delete Index: ${indexId}`);
        this._clientes.splice(indexId, 1);
    }

    buscar(cpfCnpj: number): ClientDTO | undefined {

        const cliente = this._clientes.find((obj: ClientDTO) => {
            if('cpf' in obj){
                return obj.cpf === cpfCnpj;}
            else {  
                return obj.cnpj === cpfCnpj;}
        });

        if(!cliente)
            return;

        return cliente;
    }
}

export default ClientsDAO.getInstance();