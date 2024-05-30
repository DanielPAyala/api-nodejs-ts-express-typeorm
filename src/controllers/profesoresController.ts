// const db = require('../database/conexion.js');

import { Request, Response } from "express";

class ProfesoresController {
  constructor() {}

  consulta(req: Request, res: Response) {
    try {
      res.send('consulta profesor')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('consultarDetalle profesor')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send('ingresar profesor')
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
      res.send('actualizar profesor')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  eliminar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('eliminar profesor')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new ProfesoresController();
