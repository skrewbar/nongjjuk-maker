const front = "와캬퍄혁농쭉튼빵뿅";
const back = "위풍당당민달팽이섹스";

const words = "말랑 질퍽 끈적 화끈 푹신 보들 매끈 쭈욱 뷰릇 찰팍 주물 찌릿 질척 두근 덜렁 찰싹 쿵짝 빨딱 푸슉 움찔 따끈 모락 욱신 축축 쫄깃 꼴깍 첨벙 대롱 주렁 푹푹 꼬물 오물 바들 포근 미끌 콸콸 찔끔 꿀꺽 찰방 킁킁 듬뿍 꿈틀 가득 덥석 꼿꼿 바싹 빙글 벌렁 불쑥 벌컥 쥬릇 헐떡 줄줄 흘깃 후끈 출렁 퓨웃 할짝 꿀럭 츄웁 찔꺽 꾸욱 오싹 머뭇 화악 큐웅 휘청".split(" ");

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
    document.getElementById("nong").value = front + words.join("") + back;
}

document.getElementById("nong").value = front + words.join("") + back;