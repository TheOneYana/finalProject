// array of objects with other side of cards
let backs = [
    {id: '',
name: 'program',
src: './img1.png'},
{id:'',
name: 'crest',
src: './crest.jpg' },
{id:'',
name:'yana',
src:'./yana.jpg'},
{id:'',
name: 'program',
src: './img1.png'},
{id:'',
name: 'crest',
src: './crest.jpg' },
{id:'',
name:'yana',
src:'./yana.jpg'},
{id:'',
name:'tea',
src:'./tea.jpg'},
{id:'',
name:'cat',
src:'./cat.jpg'},
{id:'',
name:'cat',
src:'./cat.jpg'},
{id:'',
name:'tea',
src:'./tea.jpg'},
{id:'',
name:'flower',
src:'./flower.jpg'},
{id:'',
name:'flower',
src:'./flower.jpg'},
{id:'',
name:'butter',
src:'./butter.jpg'},
{id:'',
name:'butter',
src:'./butter.jpg'},
{id:'',
name:'book',
src:'./book.jpg'},
{id:'',
name:'book',
src:'./book.jpg'},
]

// creating a set of unique nums to assign to id's inside 'backs' array
const nums = new Set();
while(nums.size !== backs.length){
 nums.add(Math.floor(Math.random() * backs.length)+1);
}
// iterating through the SET to assign random nums to id's inside 'backs' array
let iterator = [...nums];
iterator.forEach((randomNum, i)=> {
    backs[i].id = randomNum }
)
// selecting all img nodes
const imgs = document.querySelectorAll('img');

// creading an array of img nodes
let iterator2 = [...imgs];

let cardNumsArr = []; 
let cardsIdsArr =[];

// MAIN FUNCTION
function openTwoCards() {
let click = 0;
window.addEventListener('click', function(event){
    click++;
    console.log(`click = ${click}`)
let cardNum = (event.target.className);
// console.log(`card Num: ${cardNum}`)
const back = backs.find(t => t.id == cardNum);
// console.log(`back ${back.id}`);
event.target.src = back.src;
cardsIdsArr.push(back.src);
// finds card by its card name between the imgs array
const cardClass = iterator2.find(a => a.className == cardNum);
cardNumsArr.push(cardClass);


if(click % 2 == 0 && cardsIdsArr[click-2] !== cardsIdsArr[click-1]) {
    console.log(`turn over`);
    if(cardClass.className == cardNum){
// if pictures don't match, they will be turned over after a second.
this.setTimeout(() => {
    cardNumsArr[click-2].src = './cardSkin.jpg'
    cardNumsArr[click-1].src = './cardSkin.jpg'
}
,"1000");
// console.log(`No ${cardClass.className} == ${cardNum}`)
}
    // if a pair of two cards don not have matching pics, turn the cards over
} else if (click % 2 == 0 && cardNumsArr[click-2] === cardNumsArr[click-1] && event.target.src !== './cardSkin.jpg'){
    event.target.src = './cardSkin.jpg'
    // if a pair of two cards have matching pics,keep showing them.    
} else if (click % 2 == 0  && cardsIdsArr[click-2] == cardsIdsArr[click-1]){
    
    return console.log(`you guessed right!`)
} 
// console.log(`${event.target.className} clicked`);
})}
openTwoCards();


/* to do:
1. add "Attempts" section where opening two cards would count as 1 attempt
2. add function that doesn't allow to interact with cards anymore after all cards are open
3. add 'play' button that reveals all cards for 1 second  */