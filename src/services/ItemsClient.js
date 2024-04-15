import baseClient from "./baseClient";

class ItemsClient {
    path = "/items";

    async getItems() {
        const items = await baseClient.get(this.path);
        return items;
    }

    async getAllItems() {
        const items = await baseClient.get(this.path+"/all/");
        return items;
    }

    async getItem(id) {
        return await baseClient.get(this.path+"/"+id);
    }
}

const itemsClient = new ItemsClient();

export default itemsClient;