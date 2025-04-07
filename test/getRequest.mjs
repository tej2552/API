import axios from 'axios';
import { expect } from 'chai';


describe("Get Request", async () => {
    it("should be able to get data", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res.data);
        expect(res.data.page).equals(2);
        expect(res.data.data[0].id).equals(7);
    })
})


