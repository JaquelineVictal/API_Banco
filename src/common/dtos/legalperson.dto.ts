import { IPersonDTO } from "./person.dto";

export interface ILegalPersonDTO extends IPersonDTO {
    razaoSocial: string,
    cnpj: number
}