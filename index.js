// Add your code here
//The configurationObject contains three core components that are needed 
//for standard POST requests: the HTTP verb, the headers, and the body.

function submitData(name, email) {
    return fetch("http://localhost:3000/users",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({name, email}))
    .then(function(response){
        return response.json()
    })
    .then(function (object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
     })
}





}