import db from '../data/db';
const data = db.recipes;

class MostVote{
    static vote(req, res){
        res.status(200).send('most vote')
    }
}
export default MostVote;