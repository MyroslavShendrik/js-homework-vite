const BASE_URL = "https://jsonplaceholder.typicode.com";
const EndPoint = "albums";

//! ================= READ (GET всі) =================
fetch(`${BASE_URL}/${EndPoint}`)
  .then(res => res.json())
  .then(data => console.log("GET all albums:", data))
  .catch(err => console.log(err));


//! ================= READ (GET один) =================
const albumId = 1;

fetch(`${BASE_URL}/${EndPoint}/${albumId}`)
  .then(res => res.json())
  .then(data => console.log("GET one album:", data))
  .catch(err => console.log(err));


//! ================= CREATE (POST) =================
const newAlbum = {
  userId: 1,
  title: "My new album"
};

fetch(`${BASE_URL}/${EndPoint}`, {
  method: "POST",
  body: JSON.stringify(newAlbum),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("POST:", data))
  .catch(err => console.log(err));


//! ================= UPDATE (PUT) =================
const updatedAlbumPUT = {
  userId: 1,
  title: "Updated album (PUT)"
};

fetch(`${BASE_URL}/${EndPoint}/${albumId}`, {
  method: "PUT",
  body: JSON.stringify(updatedAlbumPUT),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("PUT:", data))
  .catch(err => console.log(err));


//! ================= UPDATE (PATCH) =================
const updatedAlbumPATCH = {
  title: "Updated only title (PATCH)"
};

fetch(`${BASE_URL}/${EndPoint}/${albumId}`, {
  method: "PATCH",
  body: JSON.stringify(updatedAlbumPATCH),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("PATCH:", data))
  .catch(err => console.log(err));


//! ================= DELETE =================
fetch(`${BASE_URL}/${EndPoint}/${albumId}`, {
  method: "DELETE"
})
  .then(res => console.log("DELETE status:", res.status))
  .catch(err => console.log(err));

//! 2 
setTimeout(() => {
 fetch(`${BASE_URL}/${EndPoint}/${albumId}`)
  .then(res => res.json())
  .then(data => console.log("GET one album:", data))
  .catch(err => console.log(err));
}, 1000);

