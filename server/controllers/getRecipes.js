import db from '../data/db';
const data = db.recipes;

class GetRecipes {
    static allRecipes(req, res){
        res.status(200).send(db)
    }
}
export default GetRecipes;