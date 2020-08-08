import BaseHandler from "../../handler/handler";

class CategoryProvider extends BaseHandler {
    createCategory(payload) {
        return this.post('api/v1/categories', payload);
    }

    getCategories() {
        return this.query('api/v1/categories');
    }

    getCategoryById(payload) {
        return this.get('api/v1/categories/' + payload);
    }

    getCategoryBySlug(payload) {
        return this.get('api/v1/categories/info/' + payload);
    }

    updateCategory(params, payload) {
        return this.put('api/v1/categories/' + params, payload);
    }

    deleteCategory(payload) {
        return this.delete('api/v1/categories/' + payload);
    }
}
export default CategoryProvider;