/* =============================================

  Unsplash Clock App
  時計 ＋ スライドショー ＋ 管理画面

  【このファイルの全体構成】

  1. 時計表示（requestAnimationFrame）
  2. Unsplash API 設定・画像取得関数
  3. スライドショー制御 11/10
  4. 管理画面（設定パネル）の開閉 11/13
  5. 適用ボタンの処理 11/13(途中まで)
  6. キーワード保存・読み込み（localStorage）
  7. 初期化（ページ読み込み時に実行）

============================================= */

const outPutField = document.getElementById('outPutField');
// const time = `12:53:45`;
// outPutField.textContent = time;

// 時計を表示する関数

// requestAnimationFrame()によって「ブラウザの次のフレームを描画する直前」に毎回呼び出される。ただしDOMの更新は秒が変わった時だけ行う。

// 直前に表示した「秒」を覚えておく変数
// -1にしておくと、最初のフレームで必ず「秒が変わった！」と判定されるため
// ページ読み込み直後に時計がすぐに表示される
let lastSec = -1;

function showClock() {
  // 現在日時オブジェクトを生成します
  const now = new Date();
  // 現在の「秒」だけを取り出す(0~59)の整数
  const sec = now.getSeconds();
  
  if (sec !== lastSec) {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  // padStart(2, '0'):文字列が2文字未満のときに先頭に'0'を補完するメソッド
  // 例）'9' → '09'、'15' → '15'
  const hour = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const secStr = String(sec).padStart(2, '0');
  outPutField.innerHTML = `<span class="day">${week[now.getDay()]}</span>${hour}:${min}:${secStr}`;
  // 次回比較のために「今の秒」を覚えておく
  lastSec = sec;
  }
  // function showClockがrequestAnimationFrame(showClock)という自分自身を呼び出してループさせるのを再帰関数という
  requestAnimationFrame(showClock);
}
// この一行がなければShowClockは一度も呼ばれない
// 最初の一回だけ手動でrequestAnimationFrameに渡すことでループが始まる
requestAnimationFrame(showClock);
// showClock();
// setInterval(showClock, 1000);


/**
 * 2. Unsplash APIからランダム画像のURL配列を取得する関数
 * 流れを順に追うと次の通りです
 * A：でUnsplashへのリクエストを送り、応答が届くまで待ちます。
 * B:でJSONへの変換が終わるまで待ちます。
 * C:でURLの配列を返すと、D:の待ちが解けて、②〜⑥（layerのリセット、画像の設定、setIntervalの開始）が実行されます。
 * E:startSlideshow()が最後まで終わると、F:の待ちが解けます。
 */

/*
  AAA_BBB_CCC  スネークケース
  aaaBbbCcc    キャメルケース
  AaaBbbCcc    パスカルケース
  aaa-bbb-ccc  ケバブケース    ←JavaScriptでは使えない
*/

// 教科書p.524のfetchAPIを参照

// Unsplash APIにアクセスするための認証キー
const UNSPLASH_ACCESS_KEY = '';

// 画像の枚数
const IMAGE_COUNT = 4;

// デフォルトキーワード
// localStorageに保存済みのキーワードがない場合（つまり初回）のみ使われる
const DEFAULT_KEYWORD = 'cat';

// ↑↑↑ これらを使ってコードを書いていく！
// fetch()してUnsplash APIからデータをgetする関数

/*
アロー関数の場合はこう書く
  const fetchUnsplashImages = async() =>{}
別の関数の場合はこう書く
  outPutField.addEventListener('click', async () => {});
どんな場合でも関数の前にasyncを書く
*/

// async〜await （非同期処理（ある処理の完了を待たずに、次の処理や別の作業を並行して進める仕組みのこと））
async function fetchUnsplashImages(keyword) {
  // API のリクエスト先 URL を組み立てる
  // テンプレートリテラルで変数 keyword と IMAGE_COUNT を埋め込んでいる
  const endpoint =
  // ↓わかりやすいようにあえて分けて書いている
    `https://api.unsplash.com/photos/random` + `?query=${keyword}&count=${IMAGE_COUNT}&orientation=landscape`;

    // fetch：ブラウザ組み込みのHTTPリクエスト関数
    // Authorization ヘッダーにAccsess Keyを渡すことで認証する
    // A:fetchの応答を待つ
    const response = await fetch(endpoint, {
      headers: {
        Authorization:`Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    // console.log(responce);
    // responce.okがfalseのときはサーバーからエラーが返ってきている
    // 例：401（認証エラー）、403（権限エラー）、429（レート制限）など
    if (!response.ok) {
    // 「!」はロジックの反転って前に教わったよ
      throw new Error(
      `Unsplash API エラー：${response.status} ${response.statusText}`,
    );
  }
  // レスポンスのJSONをJavaScriptの配列{オブジェクト}に変換する
  // B:response.json()を待つ
  const photos = await response.json();
  // console.log(photos);
  // 画像URLだけを入れるための空の配列を用意する（for文でループさせる）
  let imageUrls = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    // console.log(photo.urls.regular);

    // 古いやり方（React使う人は使っちゃいけない。元の配列データを壊してしまうから。破壊的メソッドと呼ばれる）
    // imageUrls.push(photo.urls.regular);

    // 新しいやり方（スプレッド構文...は元データを展開する＝クローンを作るイメージ。全く違う配列に書き換えているのでletを使った）
    imageUrls = [...imageUrls, photo.urls.regular];
  }
  return imageUrls;

  // console.log(imageUrls);
}

/**
 * 
 * 3. スライドショー制御
 * 
 */
const layers = document.querySelectorAll('.layer');

// 現在「表示中」の.layerのインデックス番号（0始まり）
let currentIndex = 0;

// スライドショーを1枚進める関数
function nextImage() {
  // 現在表示中のlayerからshowクラスを取り除いて非表示にする
  layers[currentIndex].classList.remove('show');
  // インデックスを1つ進める
  // % layers.length：末尾のインデックスで0に戻す（剰余演算）
  // 例）配列が4つのとき； 0 → 1 → 2 → 3 → 0 ...
  currentIndex = (currentIndex + 1) % layers.length;
  console.log(currentIndex);
  // 次のlayerに.showクラスをつけて表示する
  layers[currentIndex].classList.add('show');
}

/**
 * 
 * 取得した画像URLを各.layerの背景画像にセットする関数
 * 
 */
function applyImagesToLayers(imageUrls) {
  // 各レイヤーにイメージを割り付けるって感じの意味らしい
  // forEach：配列の各要素に対して処理するメソッド
  // layerが要素、iがインデックス
  layers.forEach((layer, i) => {
    // imageUrls[i]が存在する(undifinedではない)ときだけ設定する
    if(imageUrls[i]) {
      layer.style.backgroundImage = `url(${imageUrls[i]})`
    }
  });
}

/* スライドショーを（再）スタートする関数 */

// setInterval()の戻り値（タイマーIDという）を保持する関数
// あとでclearInterval(slideshowTimer)を呼ぶときに必要になる
// nullは「タイマーがまだ動いていない」状態を表す
let slidshowTimer = null;

async function startSlideshow(keyword) {
  // ① APIから画像URLの配列を受け取る（非同期処理）
  // 　 fetchUnsplashImages関数の処理が終わるまで待つ
  const imageUrls = await fetchUnsplashImages(keyword);
  // ② 全layerの.showを一度リセットする
  // 　 ↑前回のスライドショーの状態をきれいにするため
  layers.forEach((layer) => layer.classList.remove('show'));
  // ↑アロー関数を省略した書き方のようです（多分）
  currentIndex = 0;
  // ↑インデックスも先頭に戻す
  // ③ 取得した画像を各layerの背景にセットする
  applyImagesToLayers(imageUrls);
  // ④ 最初の画像(index: 0)を表示状態にする
layers[0].classList.add('show');
// ⑤ 古いタイマーが動いていれば止める
// clearInterval()：setIntervalで登録したタイマーをキャンセルする関数
// nullをチェックしないと、最初の起動時にclearInterval(null)を呼ぶことになるが、実害はない（ただし明示的にチェックする方がベター）
if(slidshowTimer !== null) {
  clearInterval(slideshowTimer);
}
// ⑥ 新しいタイマーをセットする
// setInterval(fn, ms)：ミリ秒ごとにfnを繰り返し実行する
slidshowTimer = setInterval(nextImage, 5000);
}


/**
 * 4. 管理画面（設定パネル）の開閉
 */

// 各HTML要素をidで取得して変数に入れておく
const settingsBtn = document.getElementById('settings-btn');
// ↑歯車アイコン
const settingsPanel = document.getElementById('settings-panel');
// ↑管理画面（設定パネル）本体
const settingsClose = document.getElementById('settings-close');
// ↑閉じるボタン
const settingsOverlay = document.getElementById('settings-overlay');
// パネル背後の半透明の幕


function openPanel() {
  settingsPanel.classList.add('open');
  settingsOverlay.classList.add('open') 
}

function closePanel() {
  settingsPanel.classList.remove('open');
  settingsOverlay.classList.remove('open')
  // ↑openクラスを取り除く
}


// 歯車アイコンをクリック
settingsBtn.addEventListener('click', openPanel);

// 閉じるボタンをクリック
settingsClose.addEventListener('click', closePanel);

// オーバーレイをクリック
settingsOverlay.addEventListener('click', closePanel);


/**
 *　5. "画像を更新する"ボタン(適用ボタン)の処理
 * フォームから値を取得し → Unsplash APIのエンドポイントのパラメーターとして設定するために送る
 */

// パネル内のフォームなどの要素を取得する

const keywordInput = document.getElementById('keywordInput');
const applyBtn = document.getElementById('applyBtn');
const currentKeyword = document.getElementById('currentKeyword');


// 「画像を更新する」ボタンをクリックしたときの処理
applyBtn.addEventListener('click', async() => {
  // 入力欄の文字列を取得し、前後の空白を除去する
  const keyword = keywordInput.value.trim();
  if(!keyword) {
    alert('キーワードを入力してください');
    return;
    // returnでこの関数の実行をここで終了する
  }
  // console.log('入力されたキーワード：', keyword);
  applyBtn.disabled = true;
  applyBtn.textContent = '取得中...';
  try {
    // パネル内の「現在のキーワード：」表示を書き換える
    currentKeyword.textContent = keyword;
    // startSlideshow()に最新のキーワードを送って実行
    await startSlideshow(keyword);
  } catch(err) {
    alert(`画像の取得に失敗しました：${err}`);
  }
// p.519のtry~catch文を参照
});

















/* -------------------------------------------- */

/**
 * 
 * 初期化関数
 * 
 */
  async function init() {
    // const test = await fetchUnsplashImages(DEFAULT_KEYWORD);
    // applyImagesToLayers(test);
    // // 5000ms = 5秒ごとにnextUmage()を呼び出す
    // setInterval(nextImage, 5000);
    try {
      await startSlideshow(DEFAULT_KEYWORD);
    } catch(err) {
      alert(`スライドショーの実行に失敗しました.Error：${err}`);
    }
  }

  init();