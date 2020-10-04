import { Router } from 'express';
import { healthEndpoint } from './endpoints/health.endpoint';

const router = Router();

router.get('/health', healthEndpoint);
router.post('/login')
