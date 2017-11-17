import db from '../data/db';
const data = db.recipes;

class MostVote{
    static vote(req, res){
        let max=0;
		let display= {};
    	data.map((recipe) => {
		if((recipe.votes.upvote) > (max)){
        	max = recipe.votes.upvote;
            display=recipe;
        }
	    })
	res.status(201).json(display);
    }
}
export default MostVote;