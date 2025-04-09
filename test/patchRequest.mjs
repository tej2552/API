import axios from "axios"
import { expect } from "chai";
import { faker } from "@faker-js/faker";

let name, job;

function getUserDetails() {
    name = faker.person.fullName();
    // job = faker.person.jobTitle();


    let userDetails = {
        "name": name
    }

    return userDetails;
}

describe("Put Request", async () => {
    it("should be able to patch data", async () => {
        const req = await axios.patch('https://reqres.in/api/users/2', getUserDetails());
        console.log(req.data);
        expect(req.status).equals(200);
        expect(req.data.name).equals(name);
    })
})

// --------------------------------------

//PAYLOAD
// {
//     "name": "morpheus",
//         "job": "zion resident"
// }

// --------------------------------------

// axios.patch(url, body, config) ----- patch method always expects url, body and config 
