import { Router, Request } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res) => {
    res.send('Bienvenido a Sammy');
});

router.get('/two', (req, res) => {
    res.send('Bienvenido a Sammy 2');
});

export default router;