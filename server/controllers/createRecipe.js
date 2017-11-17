import db from '../data/db';
const data = db.recipes;

class CreateRecipes{

    static create(req, res){
        data.push({
            "id": req.body.id,
            "name": req.body.name,
            "ingredients": req.body.ingredients,
            "direction": req.body.direction
        })
        res.status(200).send(data);
    }

}
export default CreateRecipes;