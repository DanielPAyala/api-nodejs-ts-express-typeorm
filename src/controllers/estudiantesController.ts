// import db from '../database/conexion.js';

import { Request, Response } from "express";

class EstudiantesController {
  constructor() { }

  consulta(req: Request, res: Response) {
    try {
      res.send('consulta estudiante')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('consultarDetalle estudiante')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send('ingresar estudiante')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send('actualizar estudiante')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  eliminar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('eliminar estudiante')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new EstudiantesController()
