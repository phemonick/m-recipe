import express from 'express';
import Controller from '../controllers/apiController';

// const router = express.Router();

// router.get('/recipes', Controller.postRecipes);
// router.post('/recipes', Controller.createRecipes);
// router.post('/recipes/:id/reviews', Controller.postReview);

// export default router;

const routes = (router) => {
    router.get('/recipes', Controller.postRecipes);
    router.post('/recipes', Controller.createRecipes);
    router.post('/recipes/:id/reviews', Controller.postReview);
};

export default routes;