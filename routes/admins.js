import express from 'express';

import { signin } from '../controllers/admin.js';


const  router = express.Router();

router.post('/signin', signin);

export default router;