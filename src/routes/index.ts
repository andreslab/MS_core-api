import { Router } from 'express';
import { indexController } from "../controller/indexControllerGet";
import { indexControllerPost } from "../controller/indexControllerPost";

const router: Router = Router();

router.get('/', indexController.getInfo);
router.get('/info:name', indexController.getInfoFromOtherModule);
router.get('/infodb', indexController.getInfoFromDB);

router.post('/save', indexControllerPost.saveInfo);
router.post('/saveinfo/:name', indexControllerPost.saveInfoFromOtherModule);
router.post('/saveinfodb', indexControllerPost.saveInfoFromDB);

router.get('/sammy', (req, res) => {
    res.send('Bienvenido a Sammy');
});

export default router;