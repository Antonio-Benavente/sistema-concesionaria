import { IRol } from "./rol";

export interface IUsuarios {
    idUsuario: number;
    nombre: string;
    email: string;
    password: string;
    idRol: IRol;
    estadoAuditoria: string;
}