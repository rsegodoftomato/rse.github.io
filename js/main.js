'use strict';

(() => {

  let words = [
    { key: 'taipingu', text: 'タイピング' },
    { key: 'ringo', text: 'リンゴ' },
    { key: 'tomato', text: 'トマト' },
    { key: 'pikunikku', text: 'ピクニック' },
    { key: 'asagohann', text: '朝ごはん' },
    { key: 'nekonoongaesi', text: '猫の恩返し' },
    { key: 'toireniikitakutesyouganai', text: 'トイレに行きたくてしょうがない' },
    { key: 'nitouhensankakkei', text: '二等辺三角形' },
    { key: 'jugemujugemugokounosurikire', text: '寿限無寿限無後光の擦り切れ' },
    { key: 'pienkoetepaonn', text: 'ぴえん超えてパオン' },
    { key: 'nandarou,usotukunoyametemoratteiidesuka?', text: 'なんだろう、嘘つくのやめてもらっていいですか？' },
    { key: 'timimouryou', text: '魑魅魍魎' },
    { key: 'a-norudo/syuwarutsenegga-', text: 'アーノルド・シュワルツェネッガー' },
    { key: 'pikatyuu', text: 'ピカチュウ' },
    { key: 'juyoutokyoukyuu', text: '需要と供給' },
    { key: 'saigokamosirenaidaro?', text: '最後かもしれないだろ？' },
    { key: 'sumomomomomomomomonouti', text: 'スモモも桃も桃のうち' },
    { key: 'dorutye&gabba-na', text: 'ドルチェ＆ガッバーナ' },
    { key: 'akinasisantoninomaesann', text: '春夏冬さんと一さん' },
    { key: 'yorosikuonegaisimala-su!', text: 'よろしくお願いしまぁーす！' },
    { key: 'rettupa-thi-', text: 'レッツパーティー' },
    { key: 'rokkunro-ru', text: 'ロックンロール' },
    { key: 'debujanakutepottyari', text: 'デブじゃなくてぽっちゃり' },
    { key: 'soretteanatanokansoudesuyone?', text: 'それってあなたの感想ですよね？' },
    { key: 'watasihataihouyo', text: '私は大砲よ' },
    { key: 'syawa-abitekoiyo', text: 'シャワー浴びて来いよ' },
    { key: 'mamanopanke-kigatabetai', text: 'ママのパンケーキが食べたい' },
    { key: 'motironnorerahateikousurude,kobuside', text: 'もちろん俺らは抵抗するで、拳で' },
    { key: 'tamagoyakihaso-suhadesu', text: '卵焼きはソース派です' },
    { key: 'toriaezudamattemoratteiidesuka?', text: 'とりあえず黙ってもらっていいですか？' },
    { key: 'watasinokazokuha5ninkyoudaidesu', text: '私の家族は５人兄弟です' },
    { key: 'oi,issyoniyukkurihasirouze', text: 'おい、一緒にゆっくり走ろうぜ' },
    { key: 'iketaraiku', text: '行けたら行く' },
    { key: 'samidare', text: '五月雨' },
    { key: 'tyokoreitodhisuko', text: 'チョコレイトディスコ' },
    { key: 'haironpa', text: 'はい論破' },
    { key: 'anatanokazehadokokara?', text: 'あなたの風邪はどこから？' },
    { key: 'iroiroosietekureruoneesann...', text: 'いろいろ教えてくれるお姉さん...' },
    { key: 'oosakohanpanaitte', text: '大迫半端ないって' },
    { key: 'zettairyouiki,tenkai!', text: '絶対領域、展開！' },
    { key: 'obakeyasiki', text: 'お化け屋敷' },
    { key: 'sanzaigahidoi', text: '散財がひどい' },
    { key: 'bosunia/herutsegobina', text: 'ボスニア・ヘルツェゴビナ' },
    { key: 'zuratann/iburahimovitti', text: 'ズラタン・イブラヒモヴィッチ' },
    { key: 'bobobo-bo/bo-bobo', text: 'ボボボーボ・ボーボボ' },
    { key: 'kiminoikenhakiiteinai', text: '君の意見は聞いていない' },
    { key: 'watasihazettainitakenokoha', text: '私は絶対にたけのこ派' },
    { key: 'kiminonamaeha', text: '君の名前は' },
    { key: 'kaisengaragusugitege-mugadekinai', text: '回線がラグ過ぎてゲームができない' },
    { key: 'sabaoti', text: '鯖落ち' },
    { key: 'soma?', text: 'そマ？' },
    { key: 'ojisann,okoraretyattakana!?', text: 'おじさん、怒られちゃったカナ！？' },
    { key: 'himitunohanazono', text: '秘密の花園' },
    { key: 'nantesubarasiipe-jinanda!', text: 'なんてすばらしいページなんだ！' },
    { key: 'wareomou,yueniwareari', text: '我想う、故に我あり' },
    { key: 'pafe,iwasi', text: 'パフェ、イワシ' },
    { key: 'kyoudousoukaigaarutohasirasareteinai', text: '今日同窓会があるとは知らされていない' },
    { key: 'hikukotowooboero', text: '引くことを覚えろ' },
    { key: 'jiraikeifassyonn', text: '地雷系ファッション' },
    { key: 'okawaiikoto', text: 'お可愛いこと' },
    { key: 'rakkyou', text: 'らっきょう' },
    { key: 'hutoukousengenn', text: '不登校宣言' },
    { key: 'kaminotikara', text: '神の力' },
    { key: 'susitteumaiyona', text: '寿司ってうまいよな' },
    { key: 'sinunjaneezootagainina', text: '死ぬんじゃねえぞお互いにな' },
    { key: 'odamari', text: 'お黙り' },
    { key: 'gomennasobase', text: 'ごめんあそばせ' },
    { key: 'haruhaakebono', text: '春はあけぼの' },
    { key: 'sakittyodake', text: '先っちょだけ' },
    { key: 'hanagumori', text: '花曇り' },
    { key: 'sikenkantoku', text: '試験監督' },
    { key: 'kuyasiidesu', text: '悔しいです' },
    { key: 'sonnnanokankeinee', text: 'そんなの関係ねえ' },
    { key: 'kokorogapyonpyonsuru', text: '心がピョンピョンする' },
    { key: 'hakurikikowotakuyakunnnoganmennnibutimakeru', text: '薄力粉をたくや君の顔面にぶちまける' },
    { key: 'natunoyokazeniyuragukigi', text: '夏の夜風に揺らぐ木々' },
    { key: 'ryousirontekiyuragiari', text: '量子論的揺らぎあり' },
    { key: 'ohayougozaimasu', text: 'おはようございます' },
    { key: 'tyoujama', text: '超邪魔' },
    { key: 'yoidehanaika', text: 'よいではないか' },
    { key: 'hutonhahuttobanaiyo?', text: '布団は吹っ飛ばないよ？' },
    { key: 'yuutokunhamitamenowarinisunegakebukai', text: 'ゆうと君は見た目のわりにすねが毛深い' },
    { key: 'itigo', text: 'いちご' },
    { key: 'tyokotippumeronpann', text: 'チョコチップメロンパン' },
    { key: 'toriaezunamade', text: 'とりあえず生で' },
    { key: 'hinamaturi', text: 'ひな祭り' },
    { key: 'genkaidaigakusei', text: '限界大学生' },
    { key: 'katazuwonomu', text: '固唾を吞む' },
    { key: 'sekininjuudai', text: '責任重大' },
    { key: 'hutuunimuri', text: '普通に無理' },
    { key: 'kusoripuojisann', text: 'クソリプおじさん' },
    { key: 'romannahureruutyuuryokou', text: 'ロマンあふれる宇宙旅行' },
    { key: 'bokunoitimotuhasekaiiti', text: '僕のイチモツは世界一' },
    { key: 'nikaikaramegusuri', text: '二階から目薬' },
    { key: 'waranimosugaruomoi', text: '藁にも縋る思い' },
    { key: 'senseihatoirejaarimasenn', text: '先生はトイレじゃありません' },
    { key: 'kinkyuujitaisengenn', text: '緊急事態宣言' },
    { key: 'takkyuu', text: '卓球' },
    { key: 'onsenn', text: '温泉' },
    { key: 'taiyou', text: '太陽' },
    { key: 'manga', text: '漫画' },
    { key: 'watasinosentouryokuha53mandesu', text: '私の戦闘力は５３万です' },
    { key: 'konbini', text: 'コンビニ' },
    { key: 'honmatutentou', text: '本末転倒' },
    { key: 'risukukanri', text: 'リスク管理' },
    { key: 'haegiwanokoutai', text: '生え際の後退' },
    { key: 'nekusutojenere-syonn', text: 'ネクストジェネレーション' },
    { key: 'haganenomentaru', text: '鋼のメンタル' },
    { key: 'medakanogakkou', text: 'めだかの学校' },
    { key: 'mari-/antowanetto', text: 'マリー・アントワネット' },
    { key: 'oyakata', text: '親方' },
    { key: 'sogaikann', text: '疎外感' },
    { key: 'bikkurisuruhodomunounajousi', text: 'びっくりするほど無能な上司' },
    { key: 'menihamewo', text: '目には目を' },
    { key: 'kanseinoketuraku', text: '感性の欠落' },
    { key: 'miranohuudoria', text: 'ミラノ風ドリア' },
    { key: 'getemono', text: 'ゲテモノ' },
    { key: 'saranheyo', text: 'サランヘヨ' },
    { key: 'mojibake', text: '文字化け' },
    { key: 'takasikunnnigakurekimauntowotoru', text: 'たかし君に学歴マウントを取る' },
    { key: 'kentakunnnosurkizunisiowonutteageru', text: 'けんた君の擦り傷に塩を塗ってあげる' },
    { key: 'mosimosi', text: 'もしもし' },
    { key: 'bodhitattioomedeonegaisimasu', text: 'ボディタッチ多めでお願いします' },
    { key: 'sentouminzoku', text: '戦闘民族' },
    { key: 'nouryokusya', text: '能力者' },
    { key: 'tidorigousi', text: '千鳥格子' },
    { key: 'rakurai', text: '落雷' },
    { key: 'sasugadesu', text: '流石です' },
    { key: 'do-natu', text: 'ドーナツ' },
    { key: 'tumimasita', text: '詰みました' },
    { key: 'aha-nn', text: 'あはーん' },
    { key: 'kireinakesiki', text: '綺麗な景色' },
    { key: 'riruironomizuumi', text: '瑠璃色の湖' },
    { key: 'biwako', text: '琵琶湖' },
    { key: 'kininatteyorusikanemurenai', text: '気になって夜しか眠れない' },
    { key: 'kenkoutekinaseikatu', text: '健康的な生活' },
    { key: 'niwatorigasakikatamagogasakika', text: '鶏が先か卵が先か' },
    { key: 'hougenn', text: '方言' },
    { key: 'kuukanhaakunouryoku', text: '空間把握能力' },
    { key: 'sasimi', text: '刺身' },
    { key: 'tonbi', text: 'とんび' },
    { key: 'daikoukaijidai', text: '大航海時代' },
    { key: 'kensakuenjinn', text: '検索エンジン' },
    { key: 'toroinomokuba', text: 'トロイの木馬' },
    { key: 'maguro', text: '鮪' },
    { key: 'tara', text: '鱈' },
    { key: 'orenosantahadoko?', text: '俺のサンタはどこ？' },
    { key: 'dandankokorohikareteku', text: 'だんだん心惹かれてく' },
    { key: 'kodoku', text: '孤独' },
    { key: 'happi-ba-sudeitwu-mi-', text: 'ハッピーバースデイトゥーミー' },
    { key: 'tsaratwusutorahakakukatariki', text: 'ツァラトゥストラはかく語りき' },
    { key: 'ko-hi-', text: 'コーヒー' },
    { key: 'botorunekku', text: 'ボトルネック' },
    { key: 'sunahama', text: '砂浜' },
    { key: 'hagaijime', text: '羽交い絞め' },
    { key: 'torihada', text: '鳥肌' },
    { key: 'jarimiti', text: '砂利道' },
    { key: 'sanpo', text: '散歩' },
    { key: 'bubudukehaikagadosu', text: 'ぶぶ漬けはいかがどす' },
    { key: 'inisienokyuudenn', text: '古の宮殿' },
    { key: 'keidai', text: '境内' },
    { key: 'siwasuhaisogasii', text: '師走は忙しい' },
    { key: 'syouso', text: '勝訴' },
    { key: 'manzarademonai', text: '満更でもない' },
    { key: 'syarekoube', text: '髑髏' },
    { key: 'simensoka', text: '四面楚歌' },
    { key: 'tenkiyohou', text: '天気予報' },
    { key: 'heikyokusenn', text: '閉曲線' },
    { key: 'hu-riekaiseki', text: 'フーリエ解析' },
    { key: 'nabakarinojizenkatudou', text: '名ばかりの慈善活動' },
    { key: 'sokonasinuma', text: '底なし沼' },
    { key: 'makuranage', text: '枕投げ' },
    { key: 'akumanosaitenn', text: '悪魔の祭典' },
    { key: 'gottuikaradasiteharimasunaa', text: 'ごっつい体してはりますなあ' },
    { key: 'mentosuko-ra', text: 'メントスコーラ' },
    { key: 'tyakutijihidariasikubinenza', text: '着地時左足首捻挫' },
    { key: 'dopperugenga-', text: 'ドッペルゲンガー' },
    { key: 'aisatu', text: '挨拶' },
    { key: 'tosidensetu', text: '都市伝説' },
    { key: 'kaminsyou', text: '過眠症' },
    { key: 'ikioigadaiji', text: '勢いが大事' },
    { key: 'yosouwoharukaniuwamawaruokogamasisa', text: '予想をはるかに上回るおこがましさ' },
    { key: 'akunomitinitewosomeru', text: '悪の道に手を染める' },
    { key: 'zanzou', text: '残像' },
    { key: 'zayuunomei', text: '座右の銘' },
    { key: 'zahyoukuukann', text: '座標空間' },
    { key: 'mejiroosi', text: '目白押し' },
    { key: 'ba-gense-ru', text: 'バーゲンセール' },
    { key: 'seimeinojunkann', text: '生命の循環' },
    { key: 'sizenhogo', text: '自然保護' },
    { key: 'ketuigaminagiru', text: '決意がみなぎる' },
    { key: 'jinseinokiro', text: '人生の岐路' },
    { key: 'sinkensyoubu', text: '真剣勝負' },
    { key: 'bukkuohunanonihonnne-jann', text: 'ブックオフなのに本ねーじゃん' },
    { key: 'kyuujinsaito', text: '求人サイト' },
    { key: 'kyuuseisyu', text: '救世主' },
    { key: 'syujinkouhosei', text: '主人公補正' },
    { key: 'wasiyanaikai', text: 'ワシやないかい' },
    { key: 'tatwu-', text: 'タトゥー' },
    { key: 'yosikikunhananikuwanukaodeonnnaburonihaitteitta', text: 'よしき君は何食わぬ顔で女風呂に入っていった' },
    { key: 'saikuroido', text: 'サイクロイド' },
    { key: 'uketorugawanomondai', text: '受け取る側の問題' },
    { key: 'kyakkansei', text: '客観性' },
    { key: 'bibou', text: '美貌' },
    { key: 'eiyousyokuhinn', text: '栄養食品' },
    { key: 'nonbiriikiyou', text: 'のんびり生きよう' },
    { key: 'egao', text: '笑顔' },
    { key: 'mitisuu', text: '未知数' },
    { key: 'sodenosirayuki', text: '袖白雪' },
    { key: 'kokuhaku', text: '告白' },
    { key: 'muboubi', text: '無防備' },
    { key: 'sensei', text: '宣誓' },
    { key: 'tyoberigu', text: 'チョベリグ' },
    { key: 'sigo', text: '死語' },
    { key: 'nodogosi', text: 'のど越し' },
    { key: 'kirinn', text: '麒麟' },
    { key: 'seisyukuni', text: '静粛に' },
    { key: 'todorokuraimei', text: '轟く雷鳴' },
    { key: 'sayoudegozaimasu', text: '左様でございます' },
    { key: 'anki', text: '暗記' },
    { key: 'sekiwohazusu', text: '席を外す' },
    { key: 'garaniawanai', text: '柄に合わない' },
    { key: 'deirikinsi', text: '出入り禁止' },
    { key: 'tontonbyousi', text: 'トントン拍子' },
    { key: 'meri-go-rando', text: 'メリーゴーランド' },
    { key: 'yuureibuinn', text: '幽霊部員' },
    { key: 'sakanaryouri', text: '魚料理' },
    { key: 'renrakumou', text: '連絡網' },
    { key: 'sekennippann', text: '世間一般' },
    { key: 'zorome', text: 'ゾロ目' },
    { key: 'meiro', text: '迷路' },
    { key: 'tairowohusagu', text: '退路を塞ぐ' },
    { key: 'nodonokawaki', text: '喉の渇き' },
    { key: 'uruoiwotamotu', text: '潤いを保つ' },
    { key: 'isu', text: '椅子' },
    { key: 'massa-ji', text: 'マッサージ' },
    { key: 'kyojinn', text: '巨人' },
    { key: 'kousintyou', text: '高身長' },
    { key: 'tadasiikemennnikagiru', text: 'ただしイケメンに限る' },
    { key: 'zaijou', text: '罪状' },
    { key: 'syanpann', text: 'シャンパン' },
    { key: 'gimukyouiku', text: '義務教育' },
    { key: 'tamanihakouiunomoiiyone', text: 'たまにはこういうのもいいよね' },
    { key: 'kyoutogiteisyo', text: '京都議定書' },
    { key: 'taraimawasi', text: 'たらい回し' },
    { key: 'wasi', text: '鷲' },
    { key: 'nouarutakahatumewokakusu', text: '能ある鷹は爪を隠す' },
    { key: 'hotokenokaomosando', text: '仏の顔も三度' },
    { key: 'hensuutikann', text: '変数置換' },
    { key: 'enzai', text: '冤罪' },
    { key: 'mikaiketujikenn', text: '未解決事件' },
    { key: 'jousikitoiunanokoteikannnenn', text: '常識という名の固定観念' },
    { key: 'repo-toteisyutukigenn', text: 'レポート提出期限' },
    { key: 'hyousetu', text: '剽窃' },
    { key: 'bairingaru', text: 'バイリンガル' },
    { key: 'nageyaritotekitouhatigau', text: '投げやりと適当は違う' },
    { key: 'totetumonaitasseikann', text: '途轍もない達成感' },
    { key: 'yarigaisakusyu', text: 'やりがい搾取' },
    { key: 'attoho-munakankyou', text: 'アットホームな環境' },
    { key: 'deribari-', text: 'デリバリー' },
    { key: 'jisui', text: '自炊' },
    { key: 'tekizaitekisyo', text: '適材適所' },
    { key: 'sainoudehanakudoryokunokessyou', text: '才能ではなく努力の結晶' },
    { key: 'henkouhoudou', text: '偏向報道' },
    { key: 'sabetutokubetu', text: '差別と区別' },
    { key: 'ikisugitaaijou', text: '行き過ぎた愛情' },
    { key: 'kakusintekinagijutu', text: '革新的な技術' },
    { key: 'jinseinogo-ru', text: '人生のゴール' },
    { key: 'jidarakunaimanojibunwo,asitanobokuhauramudarouka', text: '自堕落な今の自分を、明日の僕は恨むだろうか' },
    { key: 'kotobagamunenitukisasaru', text: '言葉が胸に突き刺さる' },
    { key: 'syuudansinri', text: '集団心理' },
    { key: 'teniasenigirutenkai', text: '手に汗握る展開' },
    { key: 'gironn', text: '議論' },
    { key: 'densisyoseki', text: '電子書籍' },
    { key: 'bityousei', text: '微調整' },
    { key: 'tesakigabukiyou', text: '手先が不器用' },
    { key: 'tosyokann', text: '図書館' },
    { key: 'rentaru', text: 'レンタル' },
    { key: 'ganbann', text: '岩盤' },
    { key: 'syuuwai', text: '収賄' },
    { key: 'kusarikittasosikinojousoubu', text: '腐りきった組織の上層部' },
    { key: 'tyuukansyoku', text: '中間職' },
    { key: 'tyonmage', text: 'ちょんまげ' },
    { key: 'namidanosyazaikaikenn', text: '涙の謝罪会見' },
    { key: 'rabuhogai', text: 'ラブホ街' },
    { key: 'siranaimatiwoaruitejibunnwomitumenaosu', text: '知らない街を歩いて自分を見つめなおす' },
    { key: 'hitoridekakaerunihaomosugiru', text: '一人で抱えるには重すぎる' },
    { key: 'siawasenoosusowake', text: '幸せのおすそ分け' },
    { key: 'doumiraretaikadehanakudouikitaika', text: 'どう見られたいかではなくどう生きたいか' },
    { key: 'jinseikeikenn', text: '人生経験' },
    { key: 'kadaigayamadumi', text: '課題が山積み' },
    { key: 'kyodouhusinn', text: '挙動不審' },
    { key: 'kosyou', text: '胡椒' },
    { key: 'saraudonn', text: '皿うどん' },
    { key: 'retteru', text: 'レッテル' },
    { key: 'sontaku', text: '忖度' }
  ];
  let stocks = [];
  let chars;
  let isStarted = false;
  let startTime;
  let intervalId;
  let rnum;
  let difficulty = 10;

  $('input[name="difficulty"]').change(function() {
    difficulty = $(this).val();
  });

  function update(words, stocks, rnum) {
    const index = Math.floor(Math.random() * words.length);
    const newChars = words[index]['key'].split('');
    document.getElementById('text').textContent = words[index]['text'];
    document.getElementById('key').textContent = newChars.join('');
    document.getElementById('num').textContent = '残りの単語数：' + rnum;
    stocks.push(words[index]);
    words.splice(index, 1);
    rnum--;
    return words, stocks, newChars;
  }

  function displayTime(time) {
    const second = Math.floor(time / 1000);
    const millisecond = Math.floor((time - second * 1000) / 10);
    return ('000' + second).slice(-3) + ':' + ('00' + millisecond).slice(-2);
  }
  
  document.body.addEventListener('keydown', e => {
    if (e.key === 'Enter' && isStarted === false) {
      rnum = difficulty;
      $('input[type="radio"]').prop('disabled', true);
      words, stocks, chars = update(words, stocks, rnum);
      startTime = Date.now();
      intervalId = setInterval(function() {
        document.getElementById('time').textContent = displayTime(Date.now() - startTime);
      }, 100);
      isStarted = true;
    }
    if (isStarted === true) {
      if (e.key === 'C' && e.shiftKey) {
        document.getElementById('text').textContent = '';
        document.getElementById('key').textContent = 'Enter を押してゲームを始めよう！';
        document.getElementById('num').textContent = '';
        document.getElementById('time').textContent = '';
        clearInterval(intervalId);
        words = words.concat(stocks);
        stocks = [];
        isStarted = false;
        $('input[type="radio"]').prop('disabled', false);
        return;
      } else if (e.key === chars[0]) {
        chars.shift();
        if (chars.length === 0) {
          rnum--;
          if (rnum === 0) {
            document.getElementById('text').textContent = 'CLEAR!!';
            document.getElementById('key').textContent = 'Enter を押してもう一度遊ぶ';
            document.getElementById('num').textContent = '';
            clearInterval(intervalId);
            document.getElementById('time').textContent = 'clear time : ' + displayTime(Date.now() - startTime);
            words = words.concat(stocks);
            stocks = [];
            isStarted = false;
            $('input[type="radio"]').prop('disabled', false);
            return;
          } else {
            words, stocks, chars = update(words, stocks, rnum);
          }
        }
        document.getElementById('key').textContent = chars.join('');
      }
    }
  });

})();
