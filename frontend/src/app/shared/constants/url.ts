import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:3000';

export const ORDER_URL = BASE_URL + '/orderpizza/allitems';
export const INGREDIENT_URL = BASE_URL + '/ingredients/allitems';
