let base = "와캬퍄혁농쭉빵튼뿅";

const words = [
    "말랑",
    "질퍽",
    "끈적",
    "화끈",
    "푹신",
    "보들",
    "매끈",
    "쭈욱",
    "뷰릇",
    "찰팍",
]

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function refresh() {
    shuffle(words);
    document.getElementById("nong").innerText = base + words.join("");
    console.log(base + words.join(""));
}

refresh();