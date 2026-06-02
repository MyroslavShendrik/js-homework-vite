const BASE_URL = "http://localhost:3000/";
// const EndPoint = "users";
const EndPoint = "posts";
const url = `${BASE_URL}${EndPoint}`
//! ================= READ (GET всі) =================
fetch(url)
  .then(res => res.json())
  .then(data => console.log("GET all users:", data))
  .catch(err => console.log(err));

//! ================= READ (GET один) =================
const userId = 1;

fetch(`${url}/${userId}`)
  .then(res => res.json())
  .then(data => console.log("GET one user:", data))
  .catch(err => console.log(err));


// //! ================= CREATE (POST) =================
const newUser = {
  name: "Albert",
  address:"Kyiv",
  phone: "11111111"
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("POST:", data))
  .catch(err => console.log(err));


// //! ================= UPDATE (PUT) =================
const updatedUserPUT = {
name: "Albert2",
  address:"Kyiv2",
  phone: "22222222"
};

fetch(`${url}/hcTSSfzo8bo`, {
  method: "PUT",
  body: JSON.stringify(updatedUserPUT),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("PUT:", data))
  .catch(err => console.log(err));


// //! ================= UPDATE (PATCH) =================
const updatedUsersPATCH = {
 name2: "Albert3",
  address2:"Kyiv3",
  phone: "33333333"
};

fetch(`${url}/hcTSSfzo8bo`, {
  method: "PATCH",
  body: JSON.stringify(updatedUsersPATCH),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("PATCH:", data))
  .catch(err => console.log(err));


// //! ================= DELETE =================
fetch(`${url}/WJWwouerQys`, {
  method: "DELETE"
})
  .then(res => console.log("DELETE status:", res.status))
  .catch(err => console.log(err));

// //! 2 
setTimeout(() => {
 fetch(`${url}/WJWwouerQys`)
  .then(res => res.json())
  .then(data => console.log("GET one album:", data))
  .catch(err => console.log(err));
}, 1000);

