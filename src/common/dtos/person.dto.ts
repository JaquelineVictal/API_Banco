import { IAddressDTO } from './address.dto';

export interface IPersonDTO {
    indexId?: number,
    endereco?: IAddressDTO,
    cep: string,
    limiteCredito: number,
    dataCadastro: Date,
    dataAtualizacao: Date,
    observacoes: string
}