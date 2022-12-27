const product = [
    {
        id: 0,
        image: 'images/assasin.jpg',
        title: 'Assasin:s Cread',
        price: 120,
    },
    {
        id: 1,
        image: 'images/doom.jpg',
        title: 'Doom',
        price: 60,
    },
    {
        id: 2,
        image: 'images/cowmw2.jpg',
        title: 'Call of Duty mw2',
        price: 230,
    },
    {
        id: 3,
        image: 'images/jumanji.jpg',
        title: 'JUMANJI',
        price: 100,
    }
];
// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//     var {image, title, price} = item;
//     return(
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}.00</h2>`+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>`
//     )
// }).join('')


let url = "https://63731e820bb6b698b602a95f.mockapi.io";

async function getGames(gameName) {
    console.log(url + gameName);
    const gameshop = await fetch(url + gameName);
    const gameDb = await gameshop.json();
    addGames(gameDb);
    console.log(gameDb);
}

getGames('/category/2/games');

let categories = [];

function addGames(product) {
    categories = [...new Set(product.map((item)=>
        {return item}))]
        let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, name, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${name}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('');
}

var cart = (localStorage.getItem('products'))? JSON.parse(localStorage.getItem('products')) : [];

function addtocart(a){
    cart.push({...categories[a]});
    localStorage.setItem('products', JSON.stringify(cart));
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    localStorage.setItem('products', JSON.stringify(cart));
    displaycart();
}


let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

window.onload =()=>{
    let gms = JSON.parse(localStorage.getItem('products'))
    cart = gms;
    displaycart();
}