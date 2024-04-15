import baseClient from "./baseClient";

class CartClient {
    path = "/krepselis";

    async AddCart(preke_id, vartotojo_id) {
        return await baseClient.post(`${this.path}?preke_id=${preke_id}&vartotojo_id=${vartotojo_id}`);
    }

    async GetCart(id) {
        return await baseClient.get(this.path+"/"+id);
    }
    async DeleteCartItem(id) {
        return await baseClient.delete(this.path+"/"+id);
    }
    
}

const cartClient = new CartClient();

export default cartClient;
