const quotes = [
    {
        quote: "가장 불만족스러운 고객이 가장 큰 배움의 원천이다.",
        author: "빌 게이츠",
    },
    {
        quote: "미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다.",
        author: "피터 드러커",
    },
    {
        quote: "돈이 아니라 비전을 쫓아라. 그러면 돈은 결국 따라오게 될 것이다.",
        author: "토니 셰이",
    },
    {
        quote: "지식에 대한 투자는 최고의 이자를 낳는다.",
        author: "벤저민 프랭클린",
    },
    {
        quote: "주식시장은 활동적인 사람에게서 인내심 있는 사람에게 돈을 옮겨주는 장치다.",
        author: "워런 버핏",
    },
    {
        quote: "소비하고 남은 돈을 저축하지 말고, 저축하고 남은 돈을 소비하라.",
        author: "워런 버핏",
    },
    {
        quote: "우리는 반복적으로 하는 것에 의해 결정된다. 따라서 탁월함은 행동이 아니라 습관이다.",
        author: "아리스토텔레스",
    },
    {
        quote: "세상 누구와도 자신을 비교하지 마라. 그렇게 한다면 스스로를 모욕하는 것이다.",
        author: "빌 게이츠",
    },
    {
        quote: "할 수 있다고 생각하든 할 수 없다고 생각하든, 당신이 옳다.",
        author: "빌 게이츠",
    },
    {
        quote: "성공이 최종적인 것도, 실패가 치명적인 것도 아니다. 중요한 것은 계속할 용기다.",
        author: "윈스턴 처칠",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
