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
  }
];
