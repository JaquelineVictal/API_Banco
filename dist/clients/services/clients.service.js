"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_dao_1 = __importDefault(require("../../common/daos/clients.dao"));
const clients_service_1 = require("../../common/services/clients.service");
const viacepfactory_api_1 = require("../../common/apis/viacepfactory.api");
const apicepfactory_api_1 = require("../../common/apis/apicepfactory.api");
class ClientsService extends clients_service_1.ClientsCommonService {
    constructor(_viaCep, _apiCep) {
        super();
        this._viaCep = _viaCep;
        this._apiCep = _apiCep;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource.endereco = yield this._viaCep.preencheEndereco(resource.cep);
            if (!resource.endereco) {
                resource.endereco = yield this._apiCep.preencheEndereco(resource.cep);
            }
            return clients_dao_1.default.cadastrar(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.excluir(resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.listar();
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clients_dao_1.default.atualizar(resource);
        });
    }
}
exports.default = new ClientsService(new viacepfactory_api_1.ViaCepFactory(), new apicepfactory_api_1.ApiCepFactory());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvc2VydmljZXMvY2xpZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQXVEO0FBT3ZELDJFQUE2RTtBQUM3RSwyRUFBb0U7QUFDcEUsMkVBQW9FO0FBR3BFLE1BQU0sY0FBZSxTQUFRLHNDQUFvQjtJQUU3QyxZQUFvQixPQUFtQixFQUFVLE9BQW1CO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBRFEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFFcEUsQ0FBQztJQUVLLE1BQU0sQ0FBQyxRQUFtQjs7WUFFNUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRFLElBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDO2dCQUNsQixRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekU7WUFFRCxPQUFPLHFCQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsT0FBTyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE9BQU8scUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBbUI7O1lBQ2hDLE9BQU8scUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsQ0FDN0IsSUFBSSxpQ0FBYSxFQUFFLEVBQ25CLElBQUksaUNBQWEsRUFBRSxDQUNsQixDQUFDIn0=