import { Router } from 'express';
import { indexController } from "../controller/indexController";

const router: Router = Router();

router.get('/', indexController.getInfo);
router.get('/info', indexController.getInfoFromOtherModule);
router.post('/infodb', indexController.getInfoFromDB);

router.get('/sammy', (req, res) => {
    res.send('Bienvenido a Sammy');
});

export default router;