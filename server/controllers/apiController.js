import db from '../data/db';
const data = db.recipes;

class Controller{

    static postRecipes(req, res){
        res.status(200).send(db)
    }
    static createRecipes( req, res){
        data.push({
            "id": req.body.id,
            "name": req.body.name,
            "ingredients": req.body.ingredients,
            "direction": req.body.direction


        })
        res.status(200).send(data);
    }
    static postReview(req, res){
        const{ id }= req.params;
        let recipe = {};
        data.forEach((result) => {
            if(result.id === id){
                result.reviews = req.body.reviews;
                recipe = result;
            }
        })
        res.status(200).send(result)
    }
}
export default Controller;