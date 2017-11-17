import db from '../data/db';
const data = db.recipes;

class DeleteRecipe{
    static delete(req, res){
        let { id } = req.params
        for(let key=0; key<data.length; key++){
			if(data[key].id === id){
            	data.splice(key,1);
                res.status(200).json(recipes)
             }
         }
        res.status(404).send('unknown recipe cant be deleted')
    }
}
export default DeleteRecipe;