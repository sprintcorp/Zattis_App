import BaseHandler from "../../handler/handler";

class AuthProvider extends BaseHandler {
    register(payload) {
        return this.post("api/v1/auth/register", payload);
    }

    login(payload) {
        return this.post("api/v1/auth/login", payload);
    }

    getUserInformation() {
        return this.query("api/v1/auth/me");
    }

    forgotPassword() {
        return this.post("api/v1/auth/forgotPassword");
    }

    resetPassword(token, payload) {
        return this.put("api/v1/auth/resetpassword/" + token, payload);
    }

    updateUserInformation(payload) {
        return this.put("api/v1/auth/updatedetails", payload);
    }

    updateUserPassword(payload) {
        return this.put("api/v1/auth/updatepassword", payload);
    }
}

export default AuthProvider;