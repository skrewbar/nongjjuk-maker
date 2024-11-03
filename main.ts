const words: string[] =
  "말랑 질퍽 끈적 화끈 푹신 보들 매끈 쭈욱 뷰릇 찰팍 주물 찌릿 질척 두근 덜렁 찰싹 쿵짝 빨딱 푸슉 움찔 따끈 모락 욱신 축축 쫄깃 꼴깍 첨벙 대롱 주렁 푹푹 꼬물 오물 바들 포근 미끌 콸콸 찔끔 꿀꺽 찰방 킁킁 듬뿍 꿈틀 가득 덥석 꼿꼿 바싹 빙글 벌렁 불쑥 벌컥 쥬릇 헐떡 줄줄 흘깃 후끈 출렁 퓨웃 할짝 꿀럭 츄웁 찔꺽 꾸욱 오싹 머뭇 화악 큐웅 휘청 으럇 걸쭉 쫀득 철퍽 찌익 쭈룩 탁탁 딱딱 쩌억 쪼옥 벌떡 쏘옥 쭈걱 그득 불끈 물컹 질겅 꾸덕 질펀 쭈왑 뿍짝 뻐끔 팔딱 빳빳 씰룩 흠칫 꿀렁 아슬 헐렁 반들 처덕 날름 꿀떡".split(
    " "
  );
const front = "와캬퍄헉농쭉튼빵뿅";
const back = "위풍당당민달팽이섹스";
const textarea = <HTMLTextAreaElement>document.getElementById("nong");
const count = <HTMLSpanElement>document.getElementById("count");

count.innerText = words.length.toString();

function shuffle(array: string[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function refreshTextarea() {
  shuffle(words);
  textarea.value = front + words.join("") + back;
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea.value);
}

refreshTextarea();
