import { IPersonDTO } from "./person.dto";

export interface INaturalPersonDTO extends IPersonDTO {
    nome: string,
    cpf: number
}