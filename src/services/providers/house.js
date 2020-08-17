import BaseHandler from "../../handler/handler";

class HouseProvider extends BaseHandler {
    createHouse(payload) {
        return this.post('api/v1/houses', payload);
    }

    getHouses(payload) {
        if (payload == 2 || payload == 3) {
            return this.query('api/v1/houses/_/random?rand=' + payload);
        } else if (payload) {

            return this.query('api/v1/houses/_/requirement?' + payload);
        } else {
            return this.query('api/v1/houses');
        }

    }

    getHouseById(payload) {
        return this.get('api/v1/house/' + payload);
    }

    getHouseBySlug(payload) {
        return this.get('api/v1/houses/_/' + payload);
    }

    getHousesByAgent() {
        return this.get('api/v1/houses/_/user');
    }

    getHousesBySearch(payload) {
        return this.get('api/v1/houses/area/search', payload);
    }

    updateHouse(params, payload) {
        return this.put('api/v1/houses/' + params, payload);
    }

    getUserHouses() {
        return this.query('api/v1/user_house');
    }

    saveUserHouse(payload) {
        return this.post('api/v1/user_house', payload);
    }

    removeUserHouse(payload) {
        return this.delete('api/v1/user_house/' + payload);
    }
}
export default HouseProvider;
// export default HouseProvider;