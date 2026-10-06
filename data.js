/**
 * 経穴学習Webアプリ 経脈データファイル (data.js)
 * すべての経脈データ・属性選択肢をこの1ファイルで統一管理します。
 */

// 5要穴（五要穴）の選択肢定義（循環順）
const KANAME5_OPTIONS = ["", "原穴", "郄穴", "絡穴", "募穴", "兪穴"];

// 五兪穴の選択肢定義（循環順）
const GUYU_OPTIONS = ["", "井穴", "滎穴", "兪穴", "経穴", "合穴"];

// 全経脈データリスト
const MERIDIANS = [
  // ==========================================
  // 1. 督脈（GV） - 28穴
  // ==========================================
  {
    id: "GV",
    name: "督脈",
    shortName: "GV",
    totalCount: 28,
    points: [
      {
        code: "GV1",
        name: "長強",
        yomi: "ちょうきょう",
        locationRaw: "会陰部、尾骨の下方、(尾骨)端と[肛門]の中央",
        kaname5: "絡穴",
        guyu: ""
      },
      {
        code: "GV2",
        name: "腰兪",
        yomi: "ようゆ",
        locationRaw: "仙骨部、後正中線上、(仙骨裂孔)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV3",
        name: "腰陽関",
        yomi: "こしようかん",
        locationRaw: "腰部、後正中線上、第(4腰)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV4",
        name: "命門",
        yomi: "めいもん",
        locationRaw: "腰部、後正中線上、第(2腰)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV5",
        name: "懸枢",
        yomi: "けんすう",
        locationRaw: "腰部、後正中線上、第(1腰)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV6",
        name: "脊中",
        yomi: "せきちゅう",
        locationRaw: "上背部、後正中線上、第(11胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV7",
        name: "中枢",
        yomi: "ちゅうすう",
        locationRaw: "上背部、後正中線上、第(10胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV8",
        name: "筋縮",
        yomi: "きんしゅく",
        locationRaw: "上背部、後正中線上、第(9胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV9",
        name: "至陽",
        yomi: "しよう",
        locationRaw: "上背部、後正中線上、第(7胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV10",
        name: "霊台",
        yomi: "れいだい",
        locationRaw: "上背部、後正中線上、第(6胸)椎棘突起下方陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV11",
        name: "神道",
        yomi: "しんどう",
        locationRaw: "上背部、後正中線上、第(5胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV12",
        name: "身柱",
        yomi: "しんちゅう",
        locationRaw: "上背部、後正中線上、第(3胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV13",
        name: "陶道",
        yomi: "とうどう",
        locationRaw: "上背部、後正中線上、第(1胸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV14",
        name: "大椎",
        yomi: "だいつい",
        locationRaw: "後頸部、後正中線上、第(7頸)椎棘突起下方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV15",
        name: "瘂門",
        yomi: "あもん",
        locationRaw: "後頸部、後正中線上、第(2頸)椎棘突起[上方]の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV16",
        name: "風府",
        yomi: "ふうふ",
        locationRaw: "後頸部、後正中線上、[外後頭隆起]の直下、左右の(僧帽筋)間の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV17",
        name: "脳戸",
        yomi: "のうこ",
        locationRaw: "頭部、[外後頭隆起]上方の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV18",
        name: "強間",
        yomi: "きょうかん",
        locationRaw: "頭部、後正中線上、[後髪際]の上方(4寸)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV19",
        name: "後頂",
        yomi: "ごちょう",
        locationRaw: "頭部、後正中線上、[後髪際]の上方(5寸5分)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV20",
        name: "百会",
        yomi: "ひゃくえ",
        locationRaw: "頭部、前正中線上、[前髪際]の後方(5寸)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV21",
        name: "前頂",
        yomi: "ぜんちょう",
        locationRaw: "頭部、前正中線上、[前髪際]の後方(3寸5分)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV22",
        name: "顖会",
        yomi: "しんえ",
        locationRaw: "頭部、前正中線上、[前髪際]の後方(2寸)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV23",
        name: "上星",
        yomi: "じょうせい",
        locationRaw: "頭部、前正中線上、[前髪際]の後方(1寸)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV24",
        name: "神庭",
        yomi: "しんてい",
        locationRaw: "頭部、前正中線上、[前髪際]の後方(5分)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV25",
        name: "素髎",
        yomi: "そりょう",
        locationRaw: "顔面部、(鼻)の尖端",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV26",
        name: "水溝",
        yomi: "すいこう",
        locationRaw: "顔面部、(人中溝)の中点　*別説:(人中溝)の上から(3分の1)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV27",
        name: "兌端",
        yomi: "だたん",
        locationRaw: "顔面部、[上唇結節上縁]の(中点)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "GV28",
        name: "齦交",
        yomi: "ぎんこう",
        locationRaw: "顔面部、[上歯齦]、(上唇小帯)の接合部",
        kaname5: "",
        guyu: ""
      }
    ]
  },

  // ==========================================
  // 2. 手の少陰心経（HT） - 9穴
  // ==========================================
  {
    id: "HT",
    name: "手の少陰心経",
    shortName: "HT",
    totalCount: 9,
    points: [
      {
        code: "HT-1",
        name: "極泉",
        yomi: "きょくせん",
        locationRaw: "腋窩、(腋窩中央)、(腋窩動脈)拍動部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "HT-2",
        name: "青霊",
        yomi: "せいれい",
        locationRaw: "上腕内側面、(上腕二頭筋)の[内]側縁、肘窩横紋の上方(3寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "HT-3",
        name: "少海",
        yomi: "しょうかい",
        locationRaw: "肘前内側、(上腕骨内側上顆)の[前]縁、(肘窩横紋)と同じ高さ。",
        kaname5: "",
        guyu: "合穴"
      },
      {
        code: "HT-4",
        name: "霊道",
        yomi: "れいどう",
        locationRaw: "前腕前内側、(尺側手根屈筋腱)の[橈]側縁、手関節掌側横紋の上方(1寸5分)。",
        kaname5: "",
        guyu: "経穴"
      },
      {
        code: "HT-5",
        name: "通里",
        yomi: "つうり",
        locationRaw: "前腕前内側、[尺側手根屈筋腱]の[橈]側縁、手関節掌側横紋の上方(1寸)。",
        kaname5: "絡穴",
        guyu: ""
      },
      {
        code: "HT-6",
        name: "陰郄",
        yomi: "いんげき",
        locationRaw: "前腕前内側、[尺側手根屈筋腱]の[橈]側縁、手関節掌側横紋の上方(5分)。",
        kaname5: "郄穴",
        guyu: ""
      },
      {
        code: "HT-7",
        name: "神門",
        yomi: "しんもん",
        locationRaw: "手関節前内側、(尺側手根屈筋腱)の[橈]側縁、[手関節掌側横紋上]。",
        kaname5: "原穴",
        guyu: "兪穴"
      },
      {
        code: "HT-8",
        name: "少府",
        yomi: "しょうふ",
        locationRaw: "手掌、第[5中手指節]関節の[近位]端と同じ高さ、第(4)・第(5)[中手]骨の間。",
        kaname5: "",
        guyu: "滎穴"
      },
      {
        code: "HT-9",
        name: "少衝",
        yomi: "しょうしょう",
        locationRaw: "(小指)、末節骨(橈)側、爪甲角の近位[外方1分](指寸)、爪甲橈側縁の垂線と爪甲基底部の水平線との交点。",
        kaname5: "",
        guyu: "井穴"
      }
    ]
  },

  // ==========================================
  // 3. 任脈（CV） - 24穴
  // ==========================================
  {
    id: "CV",
    name: "任脈",
    shortName: "CV",
    totalCount: 24,
    points: [
      {
        code: "CV-1",
        name: "会陰",
        yomi: "えいん",
        locationRaw: "会陰部、男性は[陰囊根部]と(肛門)を結ぶ線の中点。女性は[後陰唇交連]と(肛門)を結ぶ線の中点。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-2",
        name: "曲骨",
        yomi: "きょっこつ",
        locationRaw: "下腹部、前正中線上、(恥骨結合)上縁。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-3",
        name: "中極",
        yomi: "ちゅうきょく",
        locationRaw: "下腹部、前正中線上、臍中央の下方(4寸)",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-4",
        name: "関元",
        yomi: "かんげん",
        locationRaw: "下腹部、前正中線上、臍中央の下方(3寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-5",
        name: "石門",
        yomi: "せきもん",
        locationRaw: "下腹部、前正中線上、臍中央の下方(2寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-6",
        name: "気海",
        yomi: "きかい",
        locationRaw: "下腹部、前正中線上、臍中央の下方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-7",
        name: "陰交",
        yomi: "いんこう",
        locationRaw: "下腹部、前正中線上、臍中央の(下方1寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-8",
        name: "神闕",
        yomi: "しんけつ",
        locationRaw: "上腹部、(臍)の中央。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-9",
        name: "水分",
        yomi: "すいぶん",
        locationRaw: "上腹部、前正中線上。臍中央の上方(1寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-10",
        name: "下脘",
        yomi: "げかん",
        locationRaw: "上腹部、前正中線上、臍中央の上方(2寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-11",
        name: "建里",
        yomi: "けんり",
        locationRaw: "上腹部、前正中線上、臍中央の上方(3寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-12",
        name: "中脘",
        yomi: "ちゅうかん",
        locationRaw: "上腹部、前正中線上、臍中央の上方(4寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-13",
        name: "上脘",
        yomi: "じょうかん",
        locationRaw: "上腹部、前正中線上、臍中央の上方(5寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-14",
        name: "巨闕",
        yomi: "こけつ",
        locationRaw: "上腹部、前正中線上、臍中央の上方(6寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-15",
        name: "鳩尾",
        yomi: "きゅうび",
        locationRaw: "上腹部、前正中線上、(胸骨体下端)の下方[1寸]。",
        kaname5: "絡穴",
        guyu: ""
      },
      {
        code: "CV-16",
        name: "中庭",
        yomi: "ちゅうてい",
        locationRaw: "前胸部、前正中線上、[胸骨体下端]。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-17",
        name: "膻中",
        yomi: "だんちゅう",
        locationRaw: "前胸部、前正中線上、第(4)肋間と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-18",
        name: "玉堂",
        yomi: "ぎょくどう",
        locationRaw: "前胸部、前正中線上、第(3)肋間と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-19",
        name: "紫宮",
        yomi: "しきゅう",
        locationRaw: "前胸部、前正中線上、第(2)肋間と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-20",
        name: "華蓋",
        yomi: "かがい",
        locationRaw: "前胸部、前正中線上、第(1)肋間と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-21",
        name: "璇璣",
        yomi: "せんき",
        locationRaw: "前胸部、前正中線上、(胸骨柄)中央の下方(1寸)、(胸骨角)と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-22",
        name: "天突",
        yomi: "てんとつ",
        locationRaw: "前頸部、前正中線上、(胸骨柄上縁)の陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-23",
        name: "廉泉",
        yomi: "れんせん",
        locationRaw: "前頸部、前正中線上、(舌骨)の上方、(舌骨上窩)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "CV-24",
        name: "承漿",
        yomi: "しょうしょう",
        locationRaw: "顔面部、(オトガイ唇溝)の中央。",
        kaname5: "",
        guyu: ""
      }
    ]
  },

  // ==========================================
  // 4. 手の太陰肺経（LU） - 11穴
  // ==========================================
  {
    id: "LU",
    name: "手の太陰肺経",
    shortName: "LU",
    totalCount: 11,
    points: [
      {
        code: "LU-1",
        name: "中府",
        yomi: "ちゅうふ",
        locationRaw: "前胸部、第(1)肋間と同じ高さ、鎖骨下窩の外側、前正中線の外方(6寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "LU-2",
        name: "雲門",
        yomi: "うんもん",
        locationRaw: "前胸部、鎖骨下窩の陥凹部、(鳥口突起)の内方、前正中線の外方(6寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "LU-3",
        name: "天府",
        yomi: "てんぷ",
        locationRaw: "上腕前外側、(上腕二頭筋)外側縁、腋窩横紋前端の下方(3寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "LU-4",
        name: "侠白",
        yomi: "きょうはく",
        locationRaw: "上腕前外側、[上腕二頭筋]外側縁、腋窩横紋前端の下方(4寸)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "LU-5",
        name: "尺沢",
        yomi: "しゃくたく",
        locationRaw: "肘前部、肘窩横紋上、(上腕二頭筋腱)外方の陥凹部。",
        kaname5: "",
        guyu: "合穴"
      },
      {
        code: "LU-6",
        name: "孔最",
        yomi: "こうさい",
        locationRaw: "前腕前外側、[尺沢]と[太淵]を結ぶ線上、手関節掌側横紋の上方(7寸)。",
        kaname5: "郄穴",
        guyu: ""
      },
      {
        code: "LU-7",
        name: "列欠",
        yomi: "れっけつ",
        locationRaw: "前腕橈側、[長母指外転筋腱]と[短母指伸筋腱]の間手関節掌側横紋の上方(1寸5分)。",
        kaname5: "絡穴",
        guyu: ""
      },
      {
        code: "LU-8",
        name: "経渠",
        yomi: "けいきょ",
        locationRaw: "前腕前外側、橈骨下端の橈側で外側に最も突出した部位と[橈骨]動脈の間、手関節掌側横紋の上方(1寸)。",
        kaname5: "",
        guyu: "経穴"
      },
      {
        code: "LU-9",
        name: "太淵",
        yomi: "たいえん",
        locationRaw: "手関節前外側、[橈骨茎状突起]と[舟状骨]の間、(長母指外転筋腱)の尺側陥凹部",
        kaname5: "原穴",
        guyu: "兪穴"
      },
      {
        code: "LU-10",
        name: "魚際",
        yomi: "ぎょさい",
        locationRaw: "手掌、第(1中手骨)中点の橈側、赤白肉際。",
        kaname5: "",
        guyu: "滎穴"
      },
      {
        code: "LU-11",
        name: "少商",
        yomi: "しょうしょう",
        locationRaw: "[母]指末節骨橈側、爪甲角の近位[外方1分]【指寸】、爪甲橈側縁の垂線と爪甲基底部の水平線との交点",
        kaname5: "",
        guyu: "井穴"
      }
    ]
  },
  // ==========================================
  // 5. 手の太陽小腸経（SI） - 19穴
  // ==========================================
  {
    id: "SI",
    name: "手の太陽小腸経",
    shortName: "SI",
    totalCount: 19,
    points: [
      {
        code: "SI1",
        name: "少沢",
        yomi: "しょうたく",
        locationRaw: "（小）指、末節骨（尺）側、爪甲角の近位[内方1分]【指寸】、爪甲尺側縁の垂線と爪甲基底部の水平線との交点。",
        kaname5: "",
        guyu: "井穴"
      },
      {
        code: "SI2",
        name: "前谷",
        yomi: "ぜんこく",
        locationRaw: "[小指]、第[5中手指節関節尺]側の（遠位）陥凹部、赤白肉際。",
        kaname5: "",
        guyu: "滎穴"
      },
      {
        code: "SI3",
        name: "後渓",
        yomi: "こうけい",
        locationRaw: "手背、第（5中手指節関節尺）側の（近位）陥凹部、赤白肉際。",
        kaname5: "",
        guyu: "兪穴"
      },
      {
        code: "SI4",
        name: "腕骨",
        yomi: "わんこつ",
        locationRaw: "手関節後内側、第（5中手骨底部）と（三角骨）の間の陥凹部、赤白肉際。",
        kaname5: "原穴",
        guyu: ""
      },
      {
        code: "SI5",
        name: "陽谷",
        yomi: "ようこく",
        locationRaw: "手関節後内側、（三角骨）と（尺骨茎状突起）の間の陥凹部",
        kaname5: "",
        guyu: "経穴"
      },
      {
        code: "SI6",
        name: "養老",
        yomi: "ようろう",
        locationRaw: "前腕後内側、（尺骨頭橈側）の陥凹部、手関節背側横紋の上方（1寸）。",
        kaname5: "郄穴",
        guyu: ""
      },
      {
        code: "SI7",
        name: "支正",
        yomi: "しせい",
        locationRaw: "前腕後内側、[尺骨内緑]と（尺側手根屈筋）の間、手関節背側横紋の上方（5寸）。",
        kaname5: "絡穴",
        guyu: ""
      },
      {
        code: "SI8",
        name: "小海",
        yomi: "しょうかい",
        locationRaw: "肘後内側、（肘頭）と（上腕骨内側上顆）の間の陥凹部",
        kaname5: "",
        guyu: "合穴"
      },
      {
        code: "SI9",
        name: "肩貞",
        yomi: "けんてい",
        locationRaw: "肩周囲部、[肩関節]の後下方、腋窩横紋後端上方（1寸）。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI10",
        name: "臑兪",
        yomi: "じゅゆ",
        locationRaw: "肩周囲部、腋窩横紋後端の上方、（肩甲棘）の下方陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI11",
        name: "天宗",
        yomi: "てんそう",
        locationRaw: "肩甲部、[肩甲棘]の中点と（肩甲骨下角）を結んだ線上、肩甲棘から（3分の1）にある陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI12",
        name: "秉風",
        yomi: "へいふう",
        locationRaw: "肩甲部、[棘上窩]、[（肩甲棘）中点]の上方",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI13",
        name: "曲垣",
        yomi: "きょくえん",
        locationRaw: "肩甲部、（肩甲棘内端）の上方陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI14",
        name: "肩外兪",
        yomi: "けんがいゆ",
        locationRaw: "上背部、第（1胸）椎棘突起下緑と同じ高さ、後正中線の外方（3寸）。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI15",
        name: "肩中兪",
        yomi: "けんちゅうゆ",
        locationRaw: "上背部、第（7頸）椎棘突起下縁と同じ高さ、後正中線の外方（2寸）。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI16",
        name: "天窓",
        yomi: "てんそう",
        locationRaw: "前頸部。（胸鎖乳突筋）の[後]縁、（甲状軟骨上緑）と同じ高さ。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI17",
        name: "天容",
        yomi: "てんよう",
        locationRaw: "前頸部、（下顎角）の[後]方、（胸鎖乳突筋）の[前]方陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI18",
        name: "顴膠",
        yomi: "けんりょう",
        locationRaw: "顔面部、（外眼角）の直下、（頬骨下方）の陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "SI19",
        name: "聴宮",
        yomi: "ちょうきゅう",
        locationRaw: "顔面部、（耳珠中央）の[前]縁と（下顎骨関節突起）の間の陥凹部。",
        kaname5: "",
        guyu: ""
      }
    ]
  },
  // ==========================================
  // 6. 足の太陽膀胱経（BL） - 総穴数67穴（登録26穴）
  // ==========================================
  {
    id: "BL",
    name: "足の太陽膀胱経",
    shortName: "BL",
    totalCount: 67,
    points: [
      {
        code: "BL1",
        name: "睛明",
        yomi: "せいめい",
        locationRaw: "顔面部、(内眼角)の内上方と眼窩内側壁の間の陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL2",
        name: "攢竹",
        yomi: "さんちく",
        locationRaw: "頭部、[眉毛内端]の陥凹部",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL3",
        name: "眉衝",
        yomi: "びしょう",
        locationRaw: "頭部、(前頭切痕)の上方、前髪際の後方(5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL4",
        name: "曲差",
        yomi: "きょくさ",
        locationRaw: "頭部、前髪際の後方(5分)、前正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL5",
        name: "五処",
        yomi: "ごしょ",
        locationRaw: "頭部、前髪際の後方(1寸)、前正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL6",
        name: "承光",
        yomi: "しょうこう",
        locationRaw: "頭部、前髪際の後方(2寸5分)、前正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL7",
        name: "通天",
        yomi: "つうてん",
        locationRaw: "頭部、前髪際の後方(4寸)、前正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL8",
        name: "絡却",
        yomi: "らっきゃく",
        locationRaw: "頭部、前髪際の後方(5寸5分)、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL9",
        name: "玉枕",
        yomi: "ぎょくちん",
        locationRaw: "頭部、(外後頭隆起上縁)と同じ高さ、後正中線の外方(1寸3分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL10",
        name: "天柱",
        yomi: "てんちゅう",
        locationRaw: "後頸部、第(2頸)椎棘突起[上縁]と同じ高さ、(僧帽筋)外縁の陥凹部。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL11",
        name: "大杼",
        yomi: "だいじょ",
        locationRaw: "上背部、第(1胸)椎棘突起下緣と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL12",
        name: "風門",
        yomi: "ふうもん",
        locationRaw: "上背部、第(2胸)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL13",
        name: "肺兪",
        yomi: "はいゆ",
        locationRaw: "上背部、第(3胸)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL14",
        name: "厥陰兪",
        yomi: "けついんゆ",
        locationRaw: "上背部、第(4胸)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL15",
        name: "心兪",
        yomi: "しんゆ",
        locationRaw: "上背部、第(5胸)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL16",
        name: "督敵",
        yomi: "とくゆ",
        locationRaw: "上背部、第(6胸)椎棘突起下綠と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL17",
        name: "膈兪",
        yomi: "かくゆ",
        locationRaw: "上背部、第(7胸)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL18",
        name: "肝兪",
        yomi: "かんゆ",
        locationRaw: "上背部、第(9胸)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL19",
        name: "胆兪",
        yomi: "たんゆ",
        locationRaw: "上背部、第(10胸)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL20",
        name: "脾兪",
        yomi: "ひゆ",
        locationRaw: "上背部、第(11胸)推棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL21",
        name: "胃兪",
        yomi: "いゆ",
        locationRaw: "上背部、第(12胸)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL22",
        name: "三焦兪",
        yomi: "さんしょうゆ",
        locationRaw: "腰部、第(1腰)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL23",
        name: "腎兪",
        yomi: "じんゆ",
        locationRaw: "腰部、第(2腰)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL24",
        name: "気海兪",
        yomi: "きかいゆ",
        locationRaw: "腰部、第(3腰)椎棘突起下縁と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL25",
        name: "大腸前",
        yomi: "だいちょうゆ",
        locationRaw: "腰部、第(4腰)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      },
      {
        code: "BL26",
        name: "関元兪",
        yomi: "かんげんゆ",
        locationRaw: "腰部、第(5腰9)椎棘突起下緑と同じ高さ、後正中線の外方(1寸5分)。",
        kaname5: "",
        guyu: ""
      }
    ]
  }
];


