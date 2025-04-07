import axios from "axios"
import { expect } from "chai";
import { faker } from "@faker-js/faker";

let name = faker.person.fullName();
let job = faker.person.jobTitle();


let userDetails = {
    "name": name,
    "job": job
}

describe("Put Request", async () => {
    it("should be able to put data", async () => {
        // const res = await axios.get('https://reqres.in/api/users/2');
        // console.log(res.data);
        const req = await axios.put('https://reqres.in/api/users/2', userDetails);
        console.log(req.data);
        // expect(req.data.name).equals("morpheus");
        expect(req.status).equals(201);
    })
})

// --------------------------------------

//PAYLOAD
// {
//     "name": "morpheus",
//         "job": "zion resident"
// }

// --------------------------------------

// axios.put(url, body, config) ----- post method always expects url, body and config 
