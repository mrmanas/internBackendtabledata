import { Router } from 'express';
import { createContact } from '../controller/contactController';
import { createHome } from '../controller/homeController';

const router = Router();

router.post('/contact', createContact);
router.post('/home' , createHome);

export default router;
