import { Request, Response } from 'express';
import { PrismaClient, autos } from '@prisma/client';
import { IAutos } from '../models/autos';
import { ResponseModel } from '../models/ResponseModels';

const prisma = new PrismaClient();

export const insertarAutos = async (req: Request, res: Response) => {
    console.log('autosController::insertarAutos');
    try {
        const auto: IAutos = req.body;
        await prisma.autos.create({
            data: {
                matricula: auto.matricula,
                marca: auto.marca,
                modelo: auto.modelo,
                fecha_creacion: auto.fecha_creacion,
                color: auto.color,
                precio: auto.precio,
                imagen: auto.imagen,
                disponibilidad: auto.disponibilidad
            }
        });
        res.status(200).json(ResponseModel.success(null, RESPONSE_INSERT_OK));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};


const RESPONSE_INSERT_OK:string = 'Insertado Correctamente';
const RESPONSE_UPDATE_OK:string = 'Modificado Correctamente';
const RESPONSE_DELETE_OK:string = 'Eliminado Correctamente';