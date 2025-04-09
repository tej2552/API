import axios from "axios"
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("Put Request", async () => {
    it("should be able to delete data", async () => {
        const req = await axios.delete('https://reqres.in/api/users/2');
        console.log(req.data);
        expect(req.status).equals(204);
    })
})

// --------------------------------------

// --------------------------------------

// axios.delete(url, config) ----- delete method always expects url and config 
