import CategoryProvider from "./providers/category";
import AgentProvider from "./providers/agent";
import HouseProvider from "./providers/house";
import AuthProvider from "./providers/auth";
import RatingProvider from "./providers/rating";


export const CategoryService = new CategoryProvider();
export const AgentService = new AgentProvider();
export const HouseService = new HouseProvider();
export const AuthService = new AuthProvider();
export const RatingService = new RatingProvider();