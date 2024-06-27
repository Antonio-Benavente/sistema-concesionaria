import { IAutos } from "./autos";
import { ITipo_Brevete } from "./tipo_brevete";
import { ITipo_Documento } from "./tipo_documento";
import { IUsuarios } from "./usuario";

export interface IAlquiler {
    idAlquiler: number;
    idUsuario: IUsuarios;
    idTipo_Documento: ITipo_Documento;
    documento: string;
    idTipo_Brevete: ITipo_Brevete;
    brevete: string;
    idAuto: IAutos;
    diasAlquilados: number;
    precio: number;
    estadoAuditoria: string;
}