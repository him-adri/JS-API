let tableBody = document.getElementById("table-body");

fetch("https://fakestoreapi.com/products")
  .then((dataFromApi) => {
    // console.log(dataFromApi)
    return dataFromApi.json(); //converts to objects 
  })
  .then((apitoObjects) => {
    // console.log(apitoObjects[0].price + " " +apitoObjects[0].title);
    let apiData = "";
    apitoObjects.map((values)=> {
        apiData += 
        ` <tr>
            <td class='title'>${values.title}</td>
            <td class='desc'>${values.description}</td>
            <td class='price'>${values.price}</td>
            <td><img src="${values.image}" /> </td>
        </tr>`
    })
    tableBody.innerHTML = apiData
  });
