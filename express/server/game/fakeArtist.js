"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeArtist = exports.fakeArtistDataInit = exports.fakeArtistConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
/**
 * Variable
*/
var eventName = 'fakeArtist', colors = ['#ff0f0f', '#0f0fff', '#0fff0f', '#ffff05', '#ff840a', '#ff0aff', '#0affff', '#840aff', '#bc611e', '#ff9498', '#00afcc', '#9cbb1c', '#003f8e'];
/**
 * Data
*/
var gameData = {
    players: [],
    fakeMan: 0,
    colors: colors,
    category: '',
    theme: '',
    context: '',
    turn: 0,
    mostVote: '',
    answerList: [],
    answer: ''
};
var voteArray = [];
var lap = 0;
var currentCategory = {
    category: '',
    theme: []
};
/**
 * Theme
*/
var themeList = [
    {
        category: '生き物',
        theme: ['ゾウ', 'パンダ', 'ゴリラ', 'カバ', 'サイ', 'キリン', 'イヌ', 'ネコ', 'クマ', 'ラッコ', 'コアラ', 'トラ', 'ライオン', 'ヒョウ', 'シマウマ', 'ワニ', 'ペンギン', 'カメ', 'クラゲ', 'サメ', 'クジラ', 'イルカ', 'アヒル', 'ブタ', '牛', '馬', 'ヒツジ', 'ヤギ', 'ウサギ', 'カラス', 'ワシ', 'リス', 'タコ', 'イルカ', 'カエル', 'エビ', 'カニ', 'カブトムシ', 'クワガタ']
    },
    {
        category: '日用品',
        theme: ['歯ブラシ', '手紙', 'カレンダー', 'タオル', 'アルバム', 'ミシン', 'ハサミ', '時計', '新聞', 'シャンプー', '鏡', 'ティッシュペーパー', 'トイレットペーパー', '石鹸', 'マスク', '電話', 'カメラ', 'フライパン', '鍋', 'スプーン', 'フォーク', '爪切り', 'スポンジ', 'ゴミ箱']
    },
    {
        category: '身に付けるもの',
        theme: ['ドレス', 'メガネ', '水着', 'ブレスレット', 'ブーツ', 'スカート', 'マフラー', 'ハイヒール', 'サングラス', 'サンバイザー', '手袋', '指輪', 'イヤリング', 'スーツ', 'ベルト', 'スリッパ', 'サンダル', '腕時計', '帽子', 'タンクトップ', 'イヤホン', '靴下', 'ネクタイ', 'Tシャツ', 'ズボン', 'スニーカー']
    },
    {
        category: '電化製品',
        theme: ['テレビ', '冷蔵庫', '電子レンジ', 'パソコン', 'モニター', 'ドライヤー', '掃除機', '加湿器', '空気清浄機', 'スマホ', 'アイロン', 'オーブン', 'オーディオ', '給湯器', '蛍光灯', 'ゲーム機', 'こたつ', '炊飯器', '洗濯機', '扇風機', 'デジタルカメラ', '電卓', 'プリンター', 'ホットプレート', 'ラジオ']
    },
    {
        category: 'おもちゃ',
        theme: ['ジェットコースター', '迷路', 'サイコロ', 'スケードボード', 'ブランコ', '風船', 'ローラースケート', '観覧車', 'なわとび', 'トランプ', 'ぬいぐるみ', 'チェス', '将棋', 'オセロ', 'ラジコン', 'テレビゲーム', '紙飛行機', '砂場', '塗り絵', 'ジグソーパズル', 'ルービックキューブ', 'シーソー', 'ボードゲーム', '水鉄砲', 'メリーゴーランド', 'トランポリン']
    },
    {
        category: '乗り物',
        theme: ['飛行機', '救急車', '自動車', 'ベビーカー', '気球', '自転車', 'ボート', 'ブルドーザー', 'バス', 'キャンピングカー', '船', '観覧車', '消防車', 'ヘリコプター', '馬車', '電車', 'モノレール', 'バイク', 'ジェットコースター', 'ロープウェイ', 'ショッピングカート', 'スケートボード', 'ソリ', 'スペースシャトル', '一輪車', '車椅子']
    },
    {
        category: '観光名所',
        theme: ['自由の女神', 'モアイ像', 'ルーブル美術館', 'ハワイ', 'ベルリンの壁', 'スフィンクス', '万里の長城', '凱旋門', 'ピサの斜塔', 'コロッセオ', 'マッターホルン', '小便小僧', 'マチュピチュ', 'ピラミッド', 'ナイアガラの滝', 'タージマハル', 'グランドキャニオン', 'エアーズロック', 'エッフェル塔', 'ナスカの地上絵', 'ビッグベン', '富士山', 'スカイツリー', 'モンサンミッシェル', 'サグラダファミリア', '五重塔', 'マーライオン']
    },
    {
        category: '職業',
        theme: ['スポーツ選手', '政治家', '木こり', '教師', '漁師', '大工', '映画監督', 'Youtuber', '消防隊員', 'カメラマン', 'パティシエ', '弁護士', '花屋', 'ミュージシャン', 'シェフ', '医者', '俳優', '歯医者', '看護師', '介護士', 'ITエンジニア', 'バスの運転手', 'デザイナー', '科学者', '花屋', '警察官', '美容師', '駅員', '漫画家']
    },
    {
        category: 'アニメ',
        theme: ['ドラゴンボール', 'ポケモン', 'デジモン', 'ワンピース', 'テニスの王子様', '幽☆遊☆白書', 'キャプテン翼', 'るろうに剣心', '鬼滅の刃', '遊☆戯☆王', 'スラムダンク', '名探偵コナン', 'ガンダム', 'とっとこハム太郎', 'ドラえもん', 'キテレツ大百科', 'こち亀', 'サザエさん', 'ちびまる子ちゃん', 'クレヨンしんちゃん', '鉄腕アトム', 'アラレちゃん', 'アンパンマン', 'トムとジェリー', 'くまのプーさん', 'ルパン三世', 'ボボボーボ・ボーボボ']
    }
];
/**
 * Function
*/
var fakeArtistConfigInit = function () {
    var initialConfig = null;
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.fakeArtistConfigInit = fakeArtistConfigInit;
var fakeArtistDataInit = function () {
    // 初期化
    gameData.players = __spreadArray([], data_1.userList, true);
    gameData.fakeMan = 0;
    gameData.category = '';
    gameData.theme = '';
    gameData.context = '';
    gameData.turn = 0;
    gameData.mostVote = '';
    gameData.answerList = [];
    gameData.answer = '';
    voteArray.length = 0;
    lap = 0;
    currentCategory = { category: '', theme: [] };
    var target = themeList[(0, utility_1.randomInt)(themeList.length)];
    currentCategory.category = target.category;
    currentCategory.theme = __spreadArray([], target.theme, true);
    gameData.category = currentCategory.category;
    gameData.theme = currentCategory.theme[(0, utility_1.randomInt)(currentCategory.theme.length)];
    (0, utility_1.shuffle)(gameData.players);
    gameData.fakeMan = (0, utility_1.randomInt)(data_1.userList.length);
    (0, utility_1.shuffle)(gameData.colors);
};
exports.fakeArtistDataInit = fakeArtistDataInit;
exports.fakeArtist = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":draw"), function (imgContext) {
            gameData.context = imgContext;
            if (gameData.turn === gameData.players.length - 1) {
                gameData.turn = 0;
                lap += 1;
            }
            else {
                gameData.turn += 1;
            }
            if (lap < 2) {
                server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
            }
            else {
                server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
                server_1.serverSocket.emit("".concat(eventName, ":vote"));
            }
        });
        server_1.socket.on("".concat(eventName, ":vote"), function (index) {
            var votePlayer = gameData.players[index].name;
            voteArray.push(votePlayer);
            if (voteArray.length !== gameData.players.length)
                return;
            var obj = {};
            for (var i = 0; i < voteArray.length; i++) {
                obj[voteArray[i]] = obj[voteArray[i]] ? obj[voteArray[i]] + 1 : 1;
            }
            var val = Object.values(obj), key = Object.keys(obj), maxIndex = val.indexOf(Math.max.apply(Math, val));
            gameData.mostVote = key[maxIndex];
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
            server_1.serverSocket.emit("".concat(eventName, ":voted"));
            setTimeout(function () {
                gameData.mostVote === gameData.players[gameData.fakeMan].name
                    ? reversalReady()
                    : server_1.serverSocket.emit("".concat(eventName, ":finish"), gameData);
            }, 20500);
        });
        var reversalReady = function () {
            var answerIndex = currentCategory.theme.findIndex(function (v) { return v === gameData.theme; });
            gameData.answerList.push(currentCategory.theme.splice(answerIndex, 1)[0]);
            while (gameData.answerList.length <= 17) {
                var random = (0, utility_1.randomInt)(currentCategory.theme.length);
                gameData.answerList.push(currentCategory.theme.splice(random, 1)[0]);
            }
            (0, utility_1.shuffle)(gameData.answerList);
            server_1.serverSocket.emit("".concat(eventName, ":reversal"), gameData);
        };
        server_1.socket.on("".concat(eventName, ":answer"), function (index) {
            gameData.answer = gameData.answerList[index];
            server_1.serverSocket.emit("".concat(eventName, ":answer"), gameData);
            setTimeout(function () { return server_1.serverSocket.emit("".concat(eventName, ":finish"), gameData); }, 12000);
        });
    }
};
