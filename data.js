/**
 * 経脈データ構造
 * 将来的に他の経脈を追加する場合も、MERIDIANS オブジェクトに同様の形式で追加するだけで全機能が自動適用されます。
 */

const MERIDIANS = [
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
  }
];

// 五要穴の選択肢定義（循環順）
const KANAME5_OPTIONS = ["", "原穴", "郄穴", "絡穴", "募穴", "兪穴"];

// 五兪穴の選択肢定義（循環順）
const GUYU_OPTIONS = ["", "井穴", "滎穴", "兪穴", "経穴", "合穴"];
