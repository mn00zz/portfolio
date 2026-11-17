/**
 *
 * １，3の倍数であり5の倍数でもある場合は、'fizzBuzz'を表示
 * ２，3の倍数の場合は、'fizz'を表示   i % 3 === 0
 * ３，5の倍数の場合は、'Buzz'を表示.  i % 5 === 0
 * ４，それ以外は、数字を表示
 *
 */

// ① 追加先（表示先）を取得
const outPutField = document.querySelector('#outPutField');
// ② 1〜100まで順番に処理(Loop)
for(let i = 1; i <= 100; i++) {
  // ③ まずは表示用の文字を「そのまま数字」にしておく
  let txt = i;
  // ④ 条件分岐で書き換え
  //   ※ 両方の倍数の判定（3と5）を最初に書くのがコツ！
  if (i % 3 === 0 && i % 5 === 0) {
    txt = 'fizzBuzz';
  } else if(i % 3 === 0) {
    txt = 'fizz';
  } else if(i % 5 === 0) {
    txt = 'Buzz';
  // この下のelseは必要なさそう
  // } else {
  //   txt = i;
  }
  // ⑤ li要素のHTML文字列を作る（テンプレートリテラル）
  const content = `<li>${txt}</li>`;
  // ⑥ ulの末尾に追加する
  outPutField.insertAdjacentHTML('beforeend', content);
}
// -②Loop end

// 今回のfor文は{}のブロックの中で100回実行されてるから、}を最後に持ってくるのを忘れずに！