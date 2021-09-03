
// function random(){
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status== 200){
//         //  document.getElementById("child1").innerHTML = JSON.parse(this.responseText);   
//          let a = JSON.parse(this.responseText);
//          console.log(a);
         
//          const {
//             name: { first },
//             name: { last },
//             picture: { large },
//             location: { street },
//             phone,
//             email
//           } = data.results[0];
          
//          str="";
//          for(key in a){
//              str += a[key].name;
//          }
//          document.getElementById("child1").textContent = str;
//         }
//     };

//     xhr.open("GET", `https://randomuser.me/api/`, true);
//     xhr.send();
// }

const btn = document.getElementById("child0");
btn.addEventListener("click", function() {
  getPerson(getData);
});

// use a callback for the getPerson function
function getPerson(callback) {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", `https://randomuser.me/api/`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      callback(this.responseText, showData);
    } else {
      console.log(this.statusText);
    }
  };

//   xhr.onerror = function() {
//     console.log("there was an error");
//   };
  xhr.send();
}

function getData(response, callback) {
  const data = JSON.parse(response);

  //using destructuring to pull the data from the response
  const {
    name: { first },
    name: { last },
    picture: { large },
    // location: { street },
    phone,
    email
  } = data.results[0];

  callback(first, last, large,  phone, email);
}
function showData(first, last, large, phone, email) {
  document.getElementById("child1").textContent = first;
  document.getElementById("child2").textContent = last;
//   document.getElementById("child3").textContent = street;
  document.getElementById("child4").textContent = phone;
  document.getElementById("child5").textContent = email;
  document.getElementById("child6") = large;
}