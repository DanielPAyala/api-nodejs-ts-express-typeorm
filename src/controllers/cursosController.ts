import { Request, Response } from "express";

class CursosController {
  constructor() { }

  consulta(req: Request, res: Response) {
    try {
      res.send('consulta curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('consultarDetalle curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { nombre, descripcion } = req.body;
      res.send('ingresar curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { nombre, descripcion } = req.body;
      res.send('actualizar curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  eliminar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send('eliminar curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  asociarEstudiante(req: Request, res: Response) {
    try {
      const { curso_id, estudiante_id } = req.body;
      res.send('asociarEstudiante curso')
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new CursosController();
