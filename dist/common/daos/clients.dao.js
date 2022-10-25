"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class ClientsDAO {
    constructor() {
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }
    static getInstance() {
        if (!ClientsDAO._instance) {
            ClientsDAO._instance = new ClientsDAO();
        }
        return ClientsDAO._instance;
    }
    cadastrar(pessoa) {
        let objPessoa;
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);
        return objPessoa;
    }
    atualizar(pessoa) {
        let objPessoa;
        objPessoa = pessoa;
        if (objPessoa.indexId === undefined)
            return;
        this._clientes[objPessoa.indexId] = objPessoa;
        return objPessoa;
    }
    listar() {
        let objPessoas = [];
        for (let cliente of this._clientes)
            objPessoas.push(cliente);
        return objPessoas;
    }
    excluir(cpfCnpj) {
        const indexId = this._clientes.findIndex((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        log(`Delete Index: ${indexId}`);
        this._clientes.splice(indexId, 1);
    }
    buscar(cpfCnpj) {
        const cliente = this._clientes.find((obj) => {
            if ('cpf' in obj) {
                return obj.cpf === cpfCnpj;
            }
            else {
                return obj.cnpj === cpfCnpj;
            }
        });
        if (!cliente)
            return;
        return cliente;
    }
}
exports.default = ClientsDAO.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2Rhb3MvY2xpZW50cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxVQUFVO0lBSVo7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQzNDO1FBRUQsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBaUI7UUFDdkIsSUFBSSxTQUFTLENBQUM7UUFFZCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0IsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFpQjtRQUN2QixJQUFJLFNBQVMsQ0FBQztRQUVkLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFbkIsSUFBRyxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDOUIsT0FBTztRQUVYLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUU5QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksVUFBVSxHQUFrQixFQUFFLENBQUM7UUFFbkMsS0FBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUztZQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZTtRQUVuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFO1lBQ3hELElBQUcsS0FBSyxJQUFJLEdBQUc7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQzs7Z0JBRTNCLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsaUJBQWlCLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBZTtRQUVsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFO1lBQ25ELElBQUcsS0FBSyxJQUFJLEdBQUcsRUFBQztnQkFDWixPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDO2FBQUM7aUJBQzNCO2dCQUNELE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7YUFBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUcsQ0FBQyxPQUFPO1lBQ1AsT0FBTztRQUVYLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVELGtCQUFlLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyJ9