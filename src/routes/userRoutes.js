import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
    index -> lista todos os usuários -> GET
    store/create -> cria um novo usuário -> POST
    delete -> apaga -> DELETE
    show -> mostra -> GET
    update -> atualiza um usuário ->PATCH/PUT
*/
