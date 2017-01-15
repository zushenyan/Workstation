export const fetchUsers = () => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", res);
    xhr.addEventListener("error", rej);
    xhr.open("GET", "http://localhost:8081/users");
    xhr.send();
  })
  .then((data) => {
    if(data.target.status.toString()[0] !== "2"){
      return Promise.reject(data.target.statusText);
    }
    else {
      return JSON.parse(data.target.responseText);
    }
  })
  .catch((error) => {
    return Promise.reject("error");
  });
};
