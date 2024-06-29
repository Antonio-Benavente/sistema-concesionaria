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
            data: auto
        });
        res.status(200).json(ResponseModel.success(null, RESPONSE_INSERT_OK));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarAutos = async (res: Response) => {
    console.log('autosController::insertarAutos');
    try {
        const autos = await prisma.autos.findMany({
            where: {
                estado_auditoria: '1'
            }
        });
        res.status(200).json(ResponseModel.success(autos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};


const RESPONSE_INSERT_OK:string = 'Insertado Correctamente';
const RESPONSE_UPDATE_OK:string = 'Modificado Correctamente';
const RESPONSE_DELETE_OK:string = 'Eliminado Correctamente';