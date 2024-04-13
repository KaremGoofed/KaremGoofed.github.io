let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Gibsy Jude',
        image: 'GibsyJude.png',
        price: 15
		
    } ,
    {
        id: 2,
        name: 'Drayden Dormania',
        image: 'DraydenDormania.png',
        price: 15
    } ,
    {
        id: 3,
        name: 'Cheesy & Chelsea',
        image: 'CC.png',
        price: 15
    } ,
    {
        id: 4,
        name: 'G.O.O.B',
        image: 'Goob.png',
        price: 15
    } ,
    {
        id: 5,
        name: 'H.O.C.I.L',
        image: 'Hocil.png',
        price: 15
    } ,
    {
        id: 6,
        name: 'Eve Stone',
        image: 'EveStone.png',
        price: 15
    } ,
	{
        id: 7,
        name: 'L.O.W',
        image: 'LOW.png',
        price: 15
    } ,
	{ 
        id: 8,
        name: 'Elite',
        image: 'Elite.png',
        price: 15
    } ,
	{
		id: 9,
        name: 'Alpha-One',
        image: 'Alpha-One.png',
        price: 15
    } ,
	{
		id: 10,
        name: 'Gibsaya Jude',
        image: 'Gibsaya.png',
        price: 1000000
    } ,
	{
		id: 11,
        name: 'Zyrak',
        image: 'Zyrak.png',
        price: 15
    } ,
	{
		id: 12,
        name: 'Felipe The Biblically Accurate Angel',
        image: 'Felipe.png',
        price: 15
    } ,
	{
		id: 13,
        name: 'Starla Stone',
        image: 'StarlaStone.png',
        price: 15
    } ,
	{
		id: 14,
        name: 'Liberty & Lineth',
        image: 'Liberty&Lineth.png',
        price: 15
    } ,
	{
		id: 15,
        name: 'Jenny the Fetus',
        image: 'JennyFetus.png',
        price: 15
    } ,
	{
		id: 16,
        name: 'Lily Mendez',
        image: 'Lily.png',
        price: 15
    } ,
	{
		id: 17,
        name: 'Jason',
        image: 'Jason.png',
        price: 15
    } ,
	{
		id: 18,
        name: 'Slade Black',
        image: 'Slade.png',
        price: 15
    } ,
	{
		id: 19,
        name: 'Isuma',
        image: 'Isuma.png',
        price: 15
    } ,
	{
		id: 20,
        name: 'Beebee',
        image: 'Beebee.png',
        price: 15
    } ,
	{
		id: 21,
        name: 'Celeste',
        image: 'Celeste.png',
        price: 15
    } ,
	{
		id: 22,
        name: 'Fry',
        image: 'Fry.png',
        price: 15
    } ,
	{
		id: 23,
        name: 'Grounk',
        image: 'Grounk.png',
        price: 15
    } ,
	{
		id: 24,
        name: 'Bliss Star',
        image: 'BlissStar.png',
        price: 15
    } ,
	{
		id: 25,
        name: 'Suzu Star',
        image: 'SuzuStar.png',
        price: 15
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../CatG/Characters/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../CatG/Characters/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}