import express from 'express';
import Controller from '../controllers/apiController';

const router = express.Router();

router.get('/recipes', Controller.postRecipes);
router.post('/recipes', Controller.createRecipes);

export default router;