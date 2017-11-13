import express from 'express';
import Controller from '../controllers/apiController';

const router = express.router;

router.post('/recipes', Controller.postRecipes);