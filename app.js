// async function getCategory() {
//     let responce = await fetch(`
//     https://63731e820bb6b698b602a95f.mockapi.io/category/${id_category}`);
//     let json = await responce.json();

//     json.forEach(element => {
//         let div = document.createElement('div');
//         div.classList.add('tour');
//         div.classList.add('flex');
//         div.dataset.id = element.id;
//         div.innerHTML = `
//         <div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${name}</p>
//         <h2>$ ${price}.00</h2>`+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>
//         `;

//         document.querySelector('.tours').append(div);
//     });

//     events_category(); // Функцию нужно запускать только после прорисовки элементов
// }

// getCategory();


let url = "https://63731e820bb6b698b602a95f.mockapi.io";

async function getGames(gameName) {
    console.log(url + gameName);
    const gameshop = await fetch(url + gameName);
    const gameDb = await gameshop.json();
    console.log(gameDb);
    renderGames(gameDb);
}

getGames('/category');

let div = document.querySelector("#root");
let btns = document.querySelectorAll('.oshibka')

/*btns.forEach(btn => {
    btn.onclick = () => {
        getGames(btn.textContent);
    }
})*/

function renderGames(array){
    div.innerHTML = "";
    for (const game of array) {
        div.innerHTML += `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
    }
}