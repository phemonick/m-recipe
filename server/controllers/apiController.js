import db from '../data/db';
const data = db.recipes.json();

class Controller{

    static postRecipes(req, res){
        res.status(200).send(db)
    }
}