.pragma library

var availIds = [
    0,
    710112, 710113, 710114, 710115,
    712411, 712412, 712413,
    712611, 712613,
    712714, 712715,
    712915,
    713311, 713314,
    713301,
    713811, 713815,
    714915,
    715212,
    990001, 990002, 990003, 990011, 990014,
    990024
];

var allIds = [
    0,
    710111, 710112, 710113, 710114, 710115,
    710411, 710412, 710413, 710414, 710415,
    712411, 712412, 712413, 712414, 712415,
    712401,
    712611, 712612, 712613, 712614, 712615,
    712601,
    712711, 712712, 712713, 712714, 712715,
    712701,
    712911, 712912, 712913, 712914, 712915,
    713311, 713312, 713313, 713314, 713315,
    713321, 713322, 713323, 713324, 713325,
    713331, 713332, 713333, 713334, 713335,
    713341, 713342, 713343, 713344, 713345,
    713301, 713302,
    713613,
    713811, 713812, 713813, 713814, 713815,
    714911, 714912, 714913, 714914, 714915,
    715211, 715212, 715213, 715214, 715215,
    990001, 990002, 990003, 990004, 990005,
    990006, 990007, 990008, 990009, 990010,
    990011, 990012, 990013, 990014, 990015,
    990016, 990017, 990018, 990019, 990020,
    990021, 990022, 990023, 990024
];

function genId() {
    return availIds[Math.floor(Math.random() * availIds.length)];
}

function genAvailIndex() {
    return Math.floor(Math.random() * availIds.length);
}

function genIndices() {
    var res = [ 0, 0, 0, 0 ];
    res[0] = genAvailIndex();
    do {
        res[1] = genAvailIndex();
    } while (res[1] === res[0]);
    do {
        res[2] = genAvailIndex();
    } while (res[2] === res[0] || res[2] === res[1]);
    do {
        res[3] = genAvailIndex();
    } while (res[3] === res[0] || res[3] === res[1] || res[3] === res[2]);
    return res;
}

var names = {
    // *** SYNC with libsaki/Girl.h enum 'Id'
    // *** SYNC with availIds
    "-1": "???", "-2": "総合",
    "0": "須賀京太郎",

    // IH-71/A-block
    "710111": "宮永照", "710112": "弘世菫", "710113": "渋谷尭深",
        "710114": "亦野誠子", "710115": "大星淡",
    "710411": "花田煌", "710412": "安河内美子", "710413": "江崎仁美",
        "710414": "白水哩", "710415": "鶴田姫子",
    "712411": "松実玄", "712412": "松実宥", "712413": "新子憧",
        "712414": "鷺森灼", "712415": "高鴨穏乃",
    "712401": "小走やえ",
    "712611": "園城寺怜", "712612": "二条泉", "712613": "江口セーラ",
        "712614": "船久保浩子", "712615": "清水谷竜華",
    "712601": "荒川憩",

    // IH-71/B-block
    "712711": "神代小蒔", "712712": "狩宿巴", "712713": "滝見春",
        "712714": "薄墨初美", "712715": "石戸霞",
    "712701": "藤原利仙",
    "712911": "小瀬川白望", "712912": "Aislinn Wishart", "712913": "鹿倉胡桃",
        "712914": "臼沢塞", "712915": "姉帯豊音",
    "713311": "片岡優希", "713312": "染谷まこ", "713313": "竹井久",
        "713314": "原村和", "713315": "宮永咲",
    "713321": "井上純", "713322": "沢村智紀", "713323": "国広一",
        "713324": "龍門渕透華", "713325": "天江衣",
    "713331": "津山睦月", "713332": "妹尾佳織", "713333": "蒲原智美",
        "713334": "東横桃子", "713335": "加治木ゆみ",
    "713341": "福路美穂子", "713342": "吉留未春", "713343": "文堂星夏",
        "713344": "深堀純代", "713345": "池田華菜",
    "713301": "南浦数絵", "713302": "夢乃マホ",
    "713613": "佐々野いちご",
    "713811": "上重漫",  "713812": "真瀬由子", "713813": "愛宕洋榎",
        "713814": "愛宕絹恵", "713815": "末原恭子",
    "714911": "本内成香", "714912": "桧森誓子", "714913": "岩馆摇杏",
        "714914": "真屋由暉子", "714915": "獅子原爽",
    "715211": "辻垣内智葉", "715212": "郝慧宇", "715213": "雀明華",
        "715214": "Megan Davin", "715215": "Nelly Virsaladze",

    // 99xxxx are temporarily uncatagorized names
    // should be kept in this map and deleted in all other places
    // when an accurate id is assigned
    "990001": "稲村杏果", "990002": "白築慕", "990003": "本藤悠慧",
        "990004": "瑞原はやり", "990005": "石飛閑無",
    "990006": "赤土晴絵", "990007": "新子望", "990008": "小鍛治健夜",
        "990009": "戒能良子", "990010": "藤田靖子",
    "990011": "三尋木咏", "990012": "野依理沙", "990013": "小禄心",
        "990014": "多久和李緒", "990015": "森脇曖奈",
    "990016": "藤白七実", "990017": "椋千尋", "990018": "永見知子",
        "990019": "野上葉子", "990020": "Lotta Niemann",
    "990021": "白築ナナ", "990022": "Ai Arctander", "990023": "松実露子",
        "990024": "楫野結衣"
};

var availNames = availIds.map(function(i) { return names[i]; });


