import db from '../data/db';
const data = db.recipes;

class UpdateRecipe{
    static update(req, res){
        const { id }= req.params;
        
        data.forEach((result) => {
            if(result.id == id){
                result.id = req.body.id;
                result.name = req.body.name;
                result.ingredients = req.body.ingredients;
                result.direction = req.body.direction;
                result.reviews = req.body.reviews;

                res.status(200).send({
                    message: 'edited',
                    result: result
                })
            }
            
            })
            res.status(404).send({
                message: 'doesnt exist'
        })
    }
}
export default UpdateRecipe;