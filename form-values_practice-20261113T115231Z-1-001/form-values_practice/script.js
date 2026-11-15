// /* =========================================================
//    フォームの値を取得しよう｜課題（script.js）

//    「?」が書かれた穴埋め部分を書き換えて、フォームの値を取得しましょう。
//    書けたらブラウザで「確認する」を押して、下に表示されればOK！
//    コンソール（開発者ツール）にも結果が出ます。
//    ========================================================= */

// /* ---------------------------------------------------------
//    STEP 0：使う要素を取得する（ここは完成済み）
//    --------------------------------------------------------- */
// const form = document.querySelector('#entry-form');
// const resultList = document.querySelector('#result');
// const resultEmpty = document.querySelector('#result-empty');

// const userNameInput = document.querySelector('#userName');
// const emailInput = document.querySelector('#email');
// const ageInput = document.querySelector('#age');
// const dateInput = document.querySelector('#date');
// const courseSelect = document.querySelector('#course');
// const satisfactionInput = document.querySelector('#satisfaction');
// const satisfactionValue = document.querySelector('#satisfaction-value');
// const messageTextarea = document.querySelector('#message');
// const agreeCheckbox = document.querySelector('input[name="agree"]');
// const submitButton = document.querySelector('#submit-button');
// const agreeHint = document.querySelector('#agree-hint');

// /* ---------------------------------------------------------
//    STEP 1：スライダーを動かしたら、数字の表示を更新しよう
//    ヒント：動かしている最中に発生するイベントは 'input'
//    --------------------------------------------------------- */
satisfactionInput.addEventListener(input, () => {
  satisfactionValue.textContent =id.value;
});

// /* ---------------------------------------------------------
//    STEP 2：規約に同意したときだけ「確認する」を押せるようにしよう
//    ヒント：
//    - ボタンを押せなくする → ボタン.disabled = true
//    - ボタンを押せるようにする → ボタン.disabled = false
//    - 同意している（checked が true）なら disabled は false にしたい
//      → 「checked の反対」が disabled。反対にするのは ! 記号
//    --------------------------------------------------------- */
const updateSubmitButton = () => {
  submitButton.disabled = /* ? */;
  agreeHint.hidden = agreeCheckbox.checked; // 同意したらヒント文を隠す（完成済み）
};

// // チェックが切り替わったら updateSubmitButton を実行する
// // ヒント：チェックボックスの ON / OFF が変わったときのイベントは 'change'
// agreeCheckbox.addEventListener(/* ? */, updateSubmitButton);

// // 最初に1回だけ実行して、画面の状態とボタンを揃えておく（完成済み）
// updateSubmitButton();

// /* ---------------------------------------------------------
//    STEP 3：送信されたら、すべての値を取得して
//            1つのオブジェクトにまとめ、コンソールで確認しよう
//    --------------------------------------------------------- */
// form.addEventListener('submit', (e) => {
//   // ページの再読み込みを止める
//   // ヒント：e.○○○○○○○○○○○○()
//   /* ? */;

//   // 念のための二重チェック（完成済み）
//   // disabled は画面上で押せなくするだけなので、処理側でも同意を確認する
//   if (!agreeCheckbox.checked) {
//     return;
//   }

//   // ① テキスト：入力欄の値を取得し、前後の空白を取り除く
//   // ヒント：要素.value.trim()
//   const userName = /* ? */;

//   // ② メール：①と同じやり方で
//   const email = /* ? */;

//   // ③ 数値：.value は「文字列」なので、数値に変換する
//   // ヒント：Number(文字列)
//   const ageText = /* ? */;
//   const age = ageText === '' ? '' : /* ? */;

//   // ④ 日付：.value で取得（"2026-10-20" のような文字列になる）
//   const date = /* ? */;

//   // ⑤ セレクト：選ばれている option の value を取得
//   const courseValue = /* ? */;
//   //   表示用の文字は selectedIndex を使って取る（ここは完成済み）
//   // 三項演算子： 条件 ? true時 : false時 は、if(条件){true時} else {false時}と同じ
//   const courseText =
//     courseValue === '' ? '' : courseSelect.options[courseSelect.selectedIndex].text;

//   // ⑥ ラジオ：チェックされている1つを探して、その value を取得
//   // ヒント：'input[name="level"]:○○○○○○○'
//   const levelInput = document.querySelector(/* ? */);
//   const level = levelInput ? levelInput.value : '';

//   // ⑦ チェックボックス（複数）：チェックされているものを全部集めて配列にする
//   // ヒント：querySelector では1つしか取れない。全部取るのは querySelector○○○
//   const topicInputs = /* ? */;
//   const topics = [];
//   topicInputs.forEach((input) => {
//     // ヒント：配列に追加するのは push()
//     /* ? */;
//   });

//   // ⑧ レンジ：.value で取得
//   const satisfaction = /* ? */;

//   // ⑨ テキストエリア：.value で取得し、前後の空白を取り除く
//   const message = /* ? */;

//   // ⑩ チェックボックス（単体）：ON / OFF を true / false で取得
//   // ヒント：.value ではありません！
//   const agree = /* ? */;

//   /* ----- 1つのオブジェクトにまとめる（ここは完成済み） ----- */
//   // 「キー名: 変数名」の形で、取り出した値を1つの entry にまとめている
//   const entry = {
//     userName: userName,
//     email: email,
//     age: age,
//     date: date,
//     course: courseValue, // 送信用（"js" など）
//     courseName: courseText, // 表示用（"JavaScript基礎" など）
//     level: level,
//     topics: topics,
//     satisfaction: satisfaction,
//     message: message,
//     agree: agree,
//   };

//   // コンソールで中身を確認する（STEP 3 のゴール）
//   console.log(entry);
//   console.log('age の型：', typeof entry.age);

//   // STEP 4 が書けたら、下の行の // を消して画面にも表示しよう
//   // ※ showResult はこの下（STEP 4）で作るが、ここで使ってOK。
//   //   submit の中身は「送信ボタンが押されたとき」に動くので、
//   //   その時点では showResult もすでに作られている
//   // showResult(entry);
// });

// /* ---------------------------------------------------------
//    STEP 4：まとめたオブジェクトを受け取って、画面に表示しよう
//    - 表示欄（<dd id="out-userName"> など）は index.html に用意済み
//    - 値はオブジェクトから「entry.キー名」で取り出す
//    - 文字を入れるのは textContent（innerHTML は使わない）
//    --------------------------------------------------------- */
// const showResult = (entry) => {
//   // 「まだ送信されていません」を隠して、表示欄を出す（完成済み）
//   resultEmpty.hidden = true;
//   resultList.hidden = false;

//   // 見本：お名前（この形をまねして、下の ? を埋めよう）
//   document.querySelector('#out-userName').textContent = entry.userName;

//   // ヒント：document.querySelector('#out-○○').textContent = entry.○○;
//   document.querySelector('#out-email').textContent = /* ? */;
//   document.querySelector('#out-date').textContent = /* ? */;
//   document.querySelector('#out-course').textContent = entry.courseName; // 表示用の名前を使う（完成済み）
//   document.querySelector('#out-level').textContent = /* ? */;
//   document.querySelector('#out-message').textContent = /* ? */;

//   // ここから下は、表示用に少し形を変えてから入れる（完成済み）
//   document.querySelector('#out-age').textContent =
//     entry.age === '' ? '' : `${entry.age}歳（来年は${entry.age + 1}歳）`;
//   document.querySelector('#out-topics').textContent = entry.topics.join('、'); // 配列 → 「、」区切り
//   document.querySelector('#out-satisfaction').textContent = `${entry.satisfaction} / 5`;
//   document.querySelector('#out-agree').textContent = entry.agree ? '同意する' : '同意しない'; // true/false → 言葉
// };


