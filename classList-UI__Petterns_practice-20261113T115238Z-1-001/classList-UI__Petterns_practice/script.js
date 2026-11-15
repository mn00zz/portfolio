// /* ============================================================
//    classList ハンズオン ― Webデザインの頻出UIをつくろう
//    ------------------------------------------------------------
//    見た目はすべて style.css に用意してあります。
//    あなたがやるのは「いつ」「どの要素に」「どのクラスを」
//    付ける（add）／外す（remove）かを書くことだけです。

//    ▼ 今日使う道具
//      要素.classList.add('クラス名');       // クラスを追加
//      要素.classList.remove('クラス名');    // クラスを削除
//      要素.classList.contains('クラス名');  // 付いているか調べる（true / false）（課題4〜）
//      要素.dataset.〇〇                     // data-〇〇 属性の値を読む（課題4〜）

//    ▼ 進め方
//      1. 「? 」と書かれたコメント部分を正しいコードに書き換える
//         （'' や false が入っている所は「仮の値」。消して書き換えよう）
//      2. 保存したらブラウザで動作確認
//      3. 動かないときは F12 →「Console」タブでエラーを見る

//    ⚠️ 課題1 → 2 → 3 → 4 → 5 の順に進めよう
//      JS はエラーが出るとそこで止まります。途中の課題が未完成だと、
//      それより下の課題は動きません（上の課題はちゃんと動きます）。
//    ============================================================ */

// /* ============================================================
//    課題1：ハンバーガーメニュー  ★☆☆
//    ------------------------------------------------------------
//    ≡ を押したら .drawer に is-open を追加
//    × を押したら .drawer から is-open を削除
//    ============================================================ */

// // STEP 1：使う要素を取得しよう
// // 💡 ヒント：document.querySelector('.クラス名') で要素を1つ取得できます
// //           「.」を付け忘れないように！i
const menuBtn = document.querySelector('.menu-btn'); // ← 1つ目は書いておきました
const drawer = document.querySelector('.drawer'); // ドロワー全体（.drawer）
const drawerCloseBtn = document.querySelector('.drawer__close'); // ×ボタン（.drawer__close）

// // STEP 2：≡ボタンがクリックされたら、drawer に is-open を追加しよう
// // 💡 ヒント：classList.add() の中には「.」を付けない！
// //           ❌ add('.is-open')   ✅ add('is-open')
menuBtn.addEventListener('click', () => {
  drawer.classList.add('is-open');
});

// // STEP 3：×ボタンがクリックされたら、drawer から is-open を削除しよう
// // 💡 ヒント：STEP 2 の add を remove にするだけ
drawerCloseBtn.addEventListener('click', () => {
  drawer.classList.remove('is-open');
});

// // ✅ 確認：≡ でメニューが右から出てきて、× で閉じたらクリア！

// /* ============================================================
//    課題2：モーダルウィンドウ  ★★☆
//    ------------------------------------------------------------
//    「モーダルを開く」を押したら .modal に is-open を追加
//    × ボタン または 背景（.modal__overlay）を押したら削除
//    ============================================================ */

// // STEP 1：使う要素を4つ取得しよう
// // 💡 ヒント：index.html の下のほうに <div class="modal"> があります
const modal = document.querySelector('.modal'); // .modal
const modalOpenBtn = document.querySelector('.modal-open-btn'); // .modal-open-btn
const modalCloseBtn = document.querySelector('modal__close'); // .modal__close
const modalOverlay = document.querySelector('modal__overlay'); // .modal__overlay

// // STEP 2：「開く」「閉じる」処理を関数にまとめよう
// // 💡 なぜ関数にする？
// //    「閉じる」は ×ボタン と 背景 の2か所から使います。
// //    同じ処理を2回書くより、関数にして呼び出す方が修正もラクです。
// // 💡 ヒント：関数は「使う前に」定義しておきましょう（定義 → 呼び出し の順）
const openModal = () => {
  modal.classList.add('is-open');
  // modal に is-open を追加
};

const closeModal = () => {
  modal.classList.remove('is-open');
  // modal から is-open を削除
};

// // STEP 3：ボタンや背景がクリックされたら、上の関数を実行しよう
// // 💡 ヒント：addEventListener の2つ目には関数名を渡せます
// //           ❌ addEventListener('click', openModal())  ← () を付けると今すぐ実行されてしまう
// //           ✅ addEventListener('click', openModal)
modalOpenBtn.addEventListener('click' /* ? */);
modalCloseBtn.addEventListener('click' /* ? */);
modalOverlay.addEventListener('click' /* ? */);

// // ✅ 確認：開く → ×で閉じる、開く → 背景クリックで閉じる、の両方ができたらクリア！

// /* ============================================================
//    課題3：スクロール連動ヘッダー＆ページトップボタン  ★★☆
//    ------------------------------------------------------------
//    100px より下までスクロールしたら
//      .header に is-scrolled、.pagetop に is-show を追加
//    100px 以内に戻ったら、両方とも削除
//    ============================================================ */

// // STEP 1：使う要素を取得しよう
const header = document.querySelector(/* ? */); // .header
const pagetopBtn = document.querySelector(/* ? */); // .pagetop

// // 「100」という数字に名前を付けておくと、後で読んだ人にも意味が伝わります
// const SCROLL_THRESHOLD = 100;

// // STEP 2：スクロールするたびに、今の位置をチェックしよう
// // 💡 ヒント：window.scrollY で「上から何pxスクロールしたか」が分かります
// //           まずは console.log(window.scrollY); を書いて数字を確認してみよう
window.addEventListener('scroll', () => {

  //   // STEP 3：if 文で「100pxより下か？」を判定して、add / remove を切り替えよう

  if (/* ? */ false) {
    // 100pxより下にいるとき → 2つの要素にクラスを追加
    /* ? */
    /* ? */
  } else {
    // 100px以内にいるとき → 2つの要素からクラスを削除
    /* ? */
    /* ? */
  }
});

// // おまけ：ページトップボタンを押したら一番上へ戻る（ここは書いてあります）
// pagetopBtn.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // ✅ 確認：下にスクロールするとヘッダーに背景が付き、右下に↑が出たらクリア！

// /* ============================================================
//    課題4：タブ切り替え  ★★★
//    ------------------------------------------------------------
//    🔑 ここからのポイント：ループ（forEach）を使わずに
//       「親に1つだけリスナー」＋「カスタム属性 data-*」＋「if文」で書く

//    ▼ HTML の作り（index.html）
//      <div class="tabs__list">                         ← リスナーはここに1つだけ
//        <button class="tab" data-target="panel-css">CSS</button>
//      </div>                     │
//                                 └─ 表示したいパネルの id と同じ文字
//      <div class="tab-panel" id="panel-css">…</div>

//    ▼ 考え方
//      is-active が付いているタブ・パネルは「いつも1つずつ」。
//      だから全部を順番に外さなくても、
//      「今付いている1つを探して外す → 押したものに付ける」でOK！
//    ============================================================ */

// // STEP 1：タブが並んでいる親要素を取得しよう
// const tabList = document.querySelector(/* ? */); // .tabs__list

// // STEP 2：タブの並びがクリックされたときの処理を書こう
// // 💡 e.target は「実際に押された要素」です。
// //    リスナーは親（.tabs__list）に付いていますが、クリックは子から親へ
// //    伝わってくる（バブリング）ので、タブを押してもこの関数が動きます。
// // 💡 e.target.closest('.tab') で「押した場所（自分または親）から .tab を探す」
// //    ❌ e.currentTarget → リスナーを付けた .tabs__list になってしまう
// const handleTabClick = (e) => {
//   const clickedTab = e.target.closest(/* ? */);

//   // STEP 3：「何もしなくていい場合」を先に if 文で終わらせよう
//   // ① タブ以外（すき間）を押したとき → closest() は見つからないと null を返す
//   if (/* ? */ false) {
//     return; // ← ここで関数を終了（下の行は実行されない）
//   }
//   // ② すでに選択中のタブを押したとき
//   // 💡 clickedTab.classList.contains('is-active') が true なら選択中
//   if (/* ? */ false) {
//     return;
//   }

//   // STEP 4：今 is-active が付いているタブとパネルを探して、is-active を外そう
//   // 💡 querySelector は「最初に見つかった1つ」を返します。
//   //    is-active は1つしか付いていないので、これで必ず「今のもの」が取れます
//   const currentTab = tabList.querySelector('.tab.is-active'); // ← 書いておきました
//   const currentPanel = document.querySelector(/* ? */); // .tab-panel.is-active
//   /* ? */ // currentTab から is-active を削除
//   /* ? */ // currentPanel から is-active を削除

//   // STEP 5：押したタブと、data-target の id のパネルに is-active を付けよう
//   // 💡 data-target="panel-css" は、JS では clickedTab.dataset.target で読めます
//   //    → "panel-css" という文字が取れる
//   //    document.getElementById("panel-css") → そのパネルが取れる
//   //    （getElementById の中は id 名だけ。「#」は付けない！）
//   const nextPanel = document.getElementById(/* ? */);
//   /* ? */ // clickedTab に is-active を追加
//   /* ? */ // nextPanel に is-active を追加
// };

// // STEP 6：リスナーを登録しよう
// tabList.addEventListener('click' /* ? */);

// // ✅ 確認
// //   □ 3つのタブを順番にクリックして、タブの色とパネルが切り替わる
// //   □ 選択中のタブをもう一度押しても、何も変わらない（アニメーションもしない）
// //   □ タブの右側のすき間を押してもエラーが出ない（Console を確認）

// /* ============================================================
//    課題5（発展）：画像ギャラリー ― 複数のモーダル  ★★★
//    ------------------------------------------------------------
//    サムネイルを押したら、その画像の「大きい版」をライトボックス
//    （画像を大きく見せるモーダル）で表示。× ボタン または 背景で閉じる。

//    課題2のモーダルは「1つのボタン → 1つの中身」でした。
//    今回は「6つのサムネイル → それぞれ違う画像」です。
//    課題4と同じ「親に1つだけリスナー＋data-*＋if文」で書いてみよう。

//    ▼ HTML の作り（index.html）
//      <div class="gallery">                         ← リスナーはここに1つだけ
//        <button class="thumb"
//                data-full="大きい画像のURL"          ← JSでは thumb.dataset.full
//                data-title="Photo No.10">           ← JSでは thumb.dataset.title
//          <img src="小さい画像のURL">
//        </button>
//        …（6枚）
//      </div>
//    ============================================================ */

// // STEP 1：使う要素を取得しよう
// const gallery = document.querySelector('.gallery'); // ← 書いておきました
// const lightbox = document.querySelector(/* ? */); // .lightbox
// const lightboxImg = document.querySelector(/* ? */); // .lightbox__img（大きい画像を出す img）
// const lightboxCaption = document.querySelector(/* ? */); // .lightbox__caption（タイトルを出す p）

// // STEP 2：「開く」「閉じる」処理を関数にまとめよう
// // 💡 課題2との違い：openLightbox は「どの画像を出すか」を引数（src, title）で受け取ります
// // 💡 文字を入れるときは innerHTML ではなく textContent（安全のため）
// //
// // 🤔 なぜ最初に is-loaded を外すの？
// //    src に新しいURLを入れても、新しい画像が届くまでの間、
// //    ブラウザは「前の画像」を表示したままにします。
// //    そのままだと、開いた瞬間に前の画像が一瞬見えてしまいます。
// //
// //      is-loaded を外す（透明にする）
// //         ↓
// //      src に新しいURLを入れる（読み込み開始）
// //         ↓  …読み込み中は透明なので、前の画像は見えない
// //      読み込み完了 → is-loaded を付ける（STEP 5）→ ふわっと表示
// //
// const openLightbox = (src, title) => {
//   /* ? */ // lightboxImg から is-loaded を削除（← 必ず src より先！）
//   lightboxImg.src = /* ? */ ''; // 引数の src を入れる
//   lightboxImg.alt = title; // ← 書いておきました
//   lightboxCaption.textContent = /* ? */ ''; // 引数の title を入れる
//   /* ? */ // lightbox に is-open を追加
// };

// const closeLightbox = () => {
//   /* ? */
//   // lightbox から is-open を削除
// };

// // STEP 3：ギャラリーがクリックされたときの処理を書こう（課題4の STEP 2〜3 と同じ形）
// // 💡 サムネイルの中の <img> を押すと、e.target は img になります。
// //    img には data-full が無いので、closest('.thumb') でボタン本体を探そう
// // 💡 ❌ e.target.dataset.full      → 画像の上を押すと undefined
// //    ❌ e.currentTarget.dataset.full → .gallery には data-full が無いので undefined
// const handleGalleryClick = (e) => {
//   const thumb = e.target.closest(/* ? */);

//   // サムネイル以外（すき間）を押したときは何もしないで終わる
//   if (/* ? */ false) {
//     return;
//   }

//   // 押されたサムネイルの data-full と data-title を openLightbox に渡そう
//   // 💡 data-full → thumb.dataset.full / data-title → thumb.dataset.title
//   openLightbox(/* ? */);
// };

// // STEP 4：ライトボックスがクリックされたときの処理を書こう
// // 💡 課題2では × と背景に別々のリスナーを付けました。
// //    今回は .lightbox に1つだけ付けて、if 文で判定します。
// // 💡 × ボタン と 背景 には data-action="close" が付いています
// //    「押された要素の dataset.action が 'close' のときだけ」閉じよう
// // 💡 比べるときは === （= が3つ）
// const handleLightboxClick = (e) => {
//   if (/* ? */ false) {
//     closeLightbox();
//   }
// };

// // STEP 5：大きい画像の読み込みが終わったら、is-loaded を付けて表示しよう
// // 💡 画像には 'load'（ロード：読み込み完了）というイベントがあります。
// //    'click' の代わりに 'load' を使うだけで、書き方はいつもと同じです
// const handleImageLoad = () => {
//   /* ? */
//   // lightboxImg に is-loaded を追加
// };

// // STEP 6：リスナーを登録しよう
// // 💡 関数名だけを渡す。() は付けない！
// gallery.addEventListener('click' /* ? */);
// lightbox.addEventListener('click' /* ? */);
// lightboxImg.addEventListener('load' /* ? */);

// // ✅ 確認
// //   □ 6枚それぞれで、押した画像と同じ画像が大きく出る
// //   □ × でも背景でも閉じる
// //   □ 大きい画像やタイトルの文字を押しても「閉じない」
// //   □ サムネイルのすき間を押してもエラーが出ない（Console を確認）
// //   □ 別の画像を開いたとき、前の画像が一瞬見えない
// //     （F12 → Network タブ →「Slow 4G」にすると分かりやすい）

// /* ============================================================
//    🚀 発展課題（全部終わった人向け）
//    ------------------------------------------------------------
//    A. 課題5：index.html にサムネイルを1枚追加してみよう
//       （例：ID 20 の画像。src と data-full の数字を変えるだけ）
//       JavaScript を1文字も変えずに動くはず。なぜでしょう？

//    B. 課題4：index.html にタブとパネルを1つずつ追加してみよう
//       （例：data-target="panel-ts" と id="panel-ts"）
//       こちらも JavaScript は変えずに動くか確かめよう。

//    C. 課題1：ドロワー内のリンク（.drawer__link）を押したら閉じるようにしよう
//       💡 課題4・5と同じく、親（.drawer__list）に1つだけリスナー＋closest()

//    D. 課題2・5：モーダルを開いている間は document.body に is-locked を
//       追加して、背景がスクロールしないようにしよう（閉じたら削除）

//    E. 課題2・5：Esc キーでもモーダルが閉じるようにしよう
//       💡 document.addEventListener('keydown', (e) => { ... })
//          押されたキーは e.key で分かります（'Escape'）
//    ============================================================ */
