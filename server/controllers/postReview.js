import db from '../data/db';
const data = db.recipes;

class PostReview {

    static review(req, res){
        const{ id }= req.params;
        let recipe = {};
        data.forEach((result) => {
            if(result.id === id){
                result.reviews = req.body.reviews;
                recipe = result;
            }
        })
        res.status(200).send(recipe)
    
    }
    
}
export default PostReview;