const url = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140";

let btnQuote = document.querySelector('#btnQuote');
let Copy = document.querySelector('#btnCopy');
let quote = document.querySelector('#quote');
let animation = document.querySelector('.quote');
let author = document.querySelector('#author');

btnQuote.addEventListener('click',async (e)=>{
    e.preventDefault();
    let response = await fetch(url);
    let data = await response.json();
    quote.innerText = data[0].content;
    author.innerText = "~ " + data[0].author;
    animation.style.boxShadow = "2px 3px 10px 13px rgba(0, 0, 255, .2)";
    animation.style.transition = "box-shadow 1s ease-in-out";
    // quote.addEventListener("animationstart", listener,false);
    // quote.className = "slidein"; 
    // quote.classList.add('slidein');
});

Copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(quote.innerText);
    alert('Copy to Clipboard!');
});