// API -> APPLICATION PROGRAMMING INTERFACE

// REQUEST -> WHAT YOU'RE SENDING TO THE SERVER
// -> URL
// -> method:: GET POST PUT PATCH DELETE
// ->BODY
// ->HEADERS
// RESPONSE -> RESULT/OTHER INFORMATION FROM THE SERVER
// -> STATUSCODE 100-500
//     1XX -> INFORMATION
//     2XX -> SUCCESS
//     3XX -> REDIRECT
//     4XX -> CLIENT ERROR
//     5XX -> SERVER ERROR
// -> STATUSTEXT
//     200 -> OK
//     201 -> CREATED
//     204

//     301 -> REDIRECT

//     400 -> BAD REQUEST
//     401 -> UNAUTH
//     405
//     407
//     409 -> CONFLICT

//     500 -> INTERNAL SERVER ERR
//     501 ->
//     502

// fetch API

// fetch("http://localhost:5173")
//   .then((resp) => {
//     console.log(resp);
//     resp.json().then((j) => {
//       console.log(j);
//     });
//   })

//   .catch((err) => {
//     console.log(err);
//   });

export const fetchAllPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
