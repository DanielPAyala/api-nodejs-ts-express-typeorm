import express from 'express';
import estudiantesController from '../controllers/estudiantesController';

const router = express.Router();

router.get('/', estudiantesController.consulta);

router.post('/', estudiantesController.ingresar);

router
  .route('/:id')
  .get(estudiantesController.consultarDetalle)
  .put(estudiantesController.actualizar)
  .delete(estudiantesController.eliminar);

export default router;
