const carsList = JSON.parse(cars);

const listContainer=document.querySelector(".container-users");

printCards = ()=> {
listContainer.innerHTML="";
carsList.forEach((car) => {
    listContainer.innerHTML += `
    <div class="col-4">
    <div class="card" style="width: 18rem">
      <img src="${car.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${car.carname}</h5>
        <h5 class="card-ps">${car.ps}</h5>
        <div class="btn btn-danger like-btn">
          Details: <span class="likes-count">${car.details}</span>
        </div>
        
      </div>
    </div>
  </div>
    `;
    });
};

printCards();

// const userList = JSON.parse(users);

// const listContainer2 =document.querySelector(".container-users2");

// printCards2 = ()=> {
// listContainer2.innerHTML="";
// userList.forEach((user) => {
//     listContainer2.innerHTML += `
//     <div class="col-4">
//     <div class="card" style="width: 18rem">
//       <img src="${user.image}" class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title2">${user.fullname}</h5>
//         <h5 class="card-ps2">${user.age}</h5>
//         <div class="btn btn-danger like-btn2">
//           Likes <span class="likes-count2">${user.likes}</span>
//         </div>
//       </div>
//     </div>
//   </div>
//     `;
//     });
// };

// printCards2();




// const animalsList = JSON.parse(animals);