import db from '../data/db';
const data = db.recipes;

class UpdateRecipe{
    static update(req, res){
        res.status(200).send('update recipes')
    }
}
export default UpdateRecipe;