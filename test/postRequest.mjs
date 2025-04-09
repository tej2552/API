import axios from "axios"
import { expect } from "chai";
import { faker } from "@faker-js/faker";

function getUserDetails() {
    let name = faker.person.fullName();
    let job = faker.person.jobTitle();


    let userDetails = {
        "name": name,
        "job": job
    }

    return userDetails;
}

describe("Post Request", async () => {
    it("should be able to post data", async () => {
        const req = await axios.post('https://reqres.in/api/users', getUserDetails());
        console.log(req.data);
        // expect(req.data.name).equals("morpheus");
        expect(req.status).equals(201);
    })
})

// --------------------------------------

//PAYLOAD
// {
//     "name": "morpheus",
//         "job": "leader"
// }

// --------------------------------------

// axios.post(url, body, config) ----- post method always expects url, body and config 
