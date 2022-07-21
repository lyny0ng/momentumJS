const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "-Walt Disney",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "-Steve Jobs",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "-Eleanor Roosevelt",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "-James Cameron",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "-John Lennon",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "-Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "-Franklin D. Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "-Margaret Mead",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "-SBenjamin Franklin",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() function은 0부터 1사이의 랜덤한 숫자를 제공함, 1-10 사이의 숫자가 필요하다면 Math.random() * 10 을 하면 됨
//Math.round(1.3) > 소수점을 지우고 정수로 나타내는데 반올림을 적용함 (예: 1.4 > 1 / 1.5 > 2)
//Math.ceil(1.1) > 1.1이여도 2라는 정수로 나타냄
//Math.floor(1.9) > 1.9이여도 1이라는 정수로 나타냄 = 이 케이스에서는 floor를 사용하는게 맞음!

//quotes.length를 사용해서 array의 갯수만큼 곱해줌
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;