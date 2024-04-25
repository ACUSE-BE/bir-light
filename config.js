
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给你",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的老婆",  // 同上...
        "今天是你的生日哟",
        "开始正题了哟",
        "时光如水，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "对了,今天要吃好吃的哟",
        "喂饱饱的",
        "还有想我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给你": "./imgs/songxinxin.jpeg",
        "心爱的老婆": "./imgs/laopo.jpg",
        "今天是你的生日哟": "./imgs/shengri.jpeg",
        "开始正题了哟": "./imgs/start.png",
        "时光如水，我见过你": "./imgs/yangzi.jpeg",
        "奇怪的样子": "./imgs/qiguai.jpg",
        "可爱的样子": "./imgs/keai.jpg",
        "生气的样子": "./imgs/nothing.jpg",
        "都是我喜欢的样子": "./imgs/xihuan.png",
        "对了,今天要吃好吃的哟": "./imgs/chuo.gif",
        "喂饱饱的": "./imgs/weibao.jpeg",
        "还有想我！": "./imgs/xiangwo.jpg",
        "生日快乐~~": "./imgs/songxinxin.jpeg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "感觉还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的杨先生~'
};
