import db from '../data/db';
const data = db.recipes;

class DeleteRecipe{
    static delete(req, res){
        res.status(200).send('deleted')
    }
}
export default DeleteRecipe;