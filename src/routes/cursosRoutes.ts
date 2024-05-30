import express from 'express';
import cursosController from '../controllers/cursosController';

const router = express.Router();

router.get('/', cursosController.consulta);

router.post('/', cursosController.ingresar);
router.post('/registroEstudiante', cursosController.asociarEstudiante);

router
  .route('/:id')
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizar)
  .delete(cursosController.eliminar);

export default router;
