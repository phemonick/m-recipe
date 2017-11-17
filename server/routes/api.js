import express from 'express';
import { CreateRecipe, DeleteRecipe, GetRecipe, MostVote, PostReview, UpdateRecipe } from '../controllers'

const router = express.Router();

// router.get('/recipes', Controller.postRecipes);
// router.post('/recipes', Controller.createRecipes);
// router.post('/recipes/:id/reviews', Controller.postReview);

// export default router;
    router.get('/recipes', GetRecipe.allRecipes);
    router.post('/recipes', CreateRecipe.create);
    router.post('/recipes/:id/reviews', PostReview.review);
    router.delete('/recipes/:id', DeleteRecipe.delete);
    router.put('/recipes/:id', UpdateRecipe.update);
    router.get('/recipes/upvote', MostVote.vote);


export default router;