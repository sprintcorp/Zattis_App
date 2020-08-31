import BaseHandler from "../../handler/handler";

class RatingProvider extends BaseHandler {
    createRating(payload) {
        return this.post('api/v1/rating', payload);
    }

    getRatings(payload) {
        return this.query('api/v1/rating/' + payload);
    }
}
export default RatingProvider;