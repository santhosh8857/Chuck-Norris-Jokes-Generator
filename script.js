document.getElementById('button').addEventListener('click', getJokes);

let mainList = document.querySelector('.get-jokes');

function getJokes(e) {

   mainList.innerHTML = "";

   let count = document.getElementById('number').value;

   let url = `http://api.icndb.com/jokes/random/${count}`;
   
   // Using XMLHttpRequest

   // // creating requet object
   // let xhr = new XMLHttpRequest();

   // xhr.open('GET', url);

   // xhr.onload = function() {
   //    let data = JSON.parse(this.response);
      
   //    if(data.type === 'success') {

   //       data.value.forEach(function(jokes){
            
   //          let list = document.createElement('li');
   //          list.classList.add('list-group-item');
   //          list.innerText = jokes.joke;
            
   //          mainList.appendChild(list);

   //       });
   //    }
   // }

   // xhr.send();

   // Using fetch

   // fetch(url)
   //    .then((resp)=>{
   //       return resp.json();
   //    }) .then((data) => {
   //       if(data.type === 'success') {
   //          data.value.forEach(function(jokes){
   //             let list = document.createElement('li');
   //             list.classList.add('list-group-item');
   //             list.innerText = jokes.joke;

   //             mainList.appendChild(list);
   //          });
   //       }
   //    }) .catch ((err)=>{
   //       console.log(err);
   //    })

   // Using Async / Await 
   async function getJoke(){
      try {
         let resp = await fetch(url);
         let data = await resp.json();

         if(data.type === 'success') {
            data.value.forEach(function(jokes){
            let list = document.createElement('li');
            list.classList.add('list-group-item');
            list.innerText = jokes.joke;

            mainList.appendChild(list);
            });
         }
      } catch (err) {
         console.log(err);
      }
   }
   getJoke();
   
   e.preventDefault();
}