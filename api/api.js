var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('这是个API页面');
});
// shopping 商品信息；
router.get('/cart/shopping', function(req, res, next) {
  let shoppingArr = [
    {
      "cartpic": 'http://i.vanclimg.com/140/q80/product/6/3/7/6378227/mid/6378227-1j201710200946089750.jpg',
      "cartname": '凡客羊毛加厚大披肩',
      "cartcolor": '浅灰色格子',
      "cartsize": '130CM X 180CM',
      "cartmoney": 598.00,
      "cartsum": 1,
      "cartcheckbox": true
    },
    {
      "cartpic": 'http://i.vanclimg.com/140/q80/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg',
      "cartname": '凡客羊毛加厚大披肩',
      "cartcolor": '蓝灰色格子',
      "cartsize": '130CM X 180CM',
      "cartmoney": 598.00,
      "cartsum": 1,
      "cartcheckbox": true
    }
  ]
  res.send(JSON.stringify(shoppingArr));
});
// mine我的菜单
router.get('/mine/nav', function(req, res, next) {
  let minenavArr = [
    '充值返现',
    '我的私人定制',
    '物流查询',
    '退换货记录',
    '地址管理',
    '我的礼品卡',
    '我的优惠券',
    '我的积分',
    '我的评论',
    '我的提问',
    '投诉建议'
  ]
  res.send(minenavArr)
});
// details商品详情
router.get('/details', function(req, res, next) {
  detailsArr = [
    {
      detcid : 1,
      dettitle : 'T恤 崔海军 黑猫7 白色',
      detpic : [
        'http://i.vanclimg.com/640/q80/product/6/3/8/6386297/big/6386297-1j201907161129189638.jpg',
        'http://i.vanclimg.com/640/q80/product/6/3/8/6386297/big/6386297-2201907161129189638.jpg'
      ],
      detmoney : 58,
      detremoney : 118,
      detinterests : '充100返100，点击充值',
      detcolor : ['白色','黑色'],
      detsize : ['S','M','L','XL','XXL'],
      detshopping : [
        'https://mi2.vanclimg.com/oms/2019_5_29_15_53_36_9961_640x415.jpg',
        'https://mi1.vanclimg.com/oms/2019_5_29_15_53_38_4356_640x168.jpg',
        'https://mi2.vanclimg.com/oms/2019_5_29_15_53_38_9339_640x619.jpg',
        'https://mi.vanclimg.com/oms/2019_5_29_15_53_38_1499_640x689.jpg',
        'https://mi.vanclimg.com/oms/2019_5_29_16_6_46_848_640x566.jpg',
        'https://mi2.vanclimg.com/oms/2019_3_13_14_20_11_7960_640x561.jpg',
        'https://mi2.vanclimg.com/oms/2018_12_28_16_50_25_9933_640x483.jpg',
        'https://mi1.vanclimg.com/oms/2018_12_28_16_50_25_4916_640x113.jpg',
        'https://mi1.vanclimg.com/oms/2018_12_28_16_50_25_5124_640x479.jpg',
        'https://mi2.vanclimg.com/oms/2018_12_28_16_50_25_8156_640x477.jpg',
        'https://mi.vanclimg.com/oms/2018_12_28_16_50_25_1187_640x484.jpg',
        'https://mi.vanclimg.com/oms/2018_12_28_16_50_25_2583_640x486.jpg',
        'https://mi2.vanclimg.com/oms/2018_12_28_16_50_25_9202_640x579.jpg',
        'https://mi1.vanclimg.com/oms/2018_12_28_16_50_26_6138_640x564.jpg',
        'https://mi.vanclimg.com/oms/2018_12_28_16_50_26_2757_640x465.jpg'
      ],
      delpl : [
        {
          telname : '1527***',
          namepl : '回头客，好就买',
          nametime : '2019/8/16 22:08:05'
        },
        {
          telname : 'ThirdSign***',
          namepl : '不错，非常好',
          nametime : '2019/8/6 22:38:07'
        }
      ],
      questions : [
        {
          quetitle: "身高一米六五体重46kg应该买几码",
          answerArr: {
            anname : 'ThirdSi***',
            antime : '2019-08-13',
            ancontent : '亲爱的客户您好，您可以尝试购买一件S码的哦（注：推荐尺码仅供参考），感谢您的支持！祝您购物愉快！O(∩_∩)O'
          }
        },
        {
          quetitle: "身高一米六五体重46kg应该买几码",
          answerArr: {
            anname : 'ThirdSi***',
            antime : '2019-08-13',
            ancontent : '亲爱的客户您好，您可以尝试购买一件S码的哦（注：推荐尺码仅供参考），感谢您的支持！祝您购物愉快！O(∩_∩)O'
          }
        }
      ]
    },
    {
      detcid : 2,
      dettitle : 'T恤 崔海军 黑猫7 白色',
      detpic : [
        'http://i.vanclimg.com/640/q80/product/6/3/8/6386297/big/6386297-1j201907161129189638.jpg',
        'http://i.vanclimg.com/640/q80/product/6/3/8/6386297/big/6386297-2201907161129189638.jpg'
      ],
      detmoney : 58,
      detremoney : 118,
      detinterests : '充100返100，点击充值',
      detcolor : ['白色','黑色'],
      detsize : ['S','M','L','XL','XXL'],
      detshopping : [
        'https://mi2.vanclimg.com/oms/2019_5_29_15_53_36_9961_640x415.jpg',
        'https://mi1.vanclimg.com/oms/2019_5_29_15_53_38_4356_640x168.jpg'
      ],
      delpl : [
        {
          telname : '1527***',
          namepl : '回头客，好就买',
          nametime : '2019/8/16 22:08:05'
        },
        {
          telname : 'ThirdSign***',
          namepl : '不错，非常好',
          nametime : '2019/8/6 22:38:07'
        }
      ],
      questions : [
        {
          quetitle: "身高一米六五体重46kg应该买几码",
          answerArr: {
            anname : 'ThirdSi***',
            antime : '2019-08-13',
            ancontent : '亲爱的客户您好，您可以尝试购买一件S码的哦（注：推荐尺码仅供参考），感谢您的支持！祝您购物愉快！O(∩_∩)O'
          }
        },
        {
          quetitle: "身高一米六五体重46kg应该买几码",
          answerArr: {
            anname : 'ThirdSi***',
            antime : '2019-08-13',
            ancontent : '亲爱的客户您好，您可以尝试购买一件S码的哦（注：推荐尺码仅供参考），感谢您的支持！祝您购物愉快！O(∩_∩)O'
          }
        }
      ]
    }
  ]
  res.send(JSON.stringify(detailsArr));
});

router.get('/home/goods', function (req, res, next) {
  var arr = [
    {
      advert: [
        "https://mi2.vanclimg.com/oms/2019_7_18_9_40_22_7367_640x338.jpg",
        "https://mi.vanclimg.com/oms/2019_8_13_10_27_10_2980_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_8_13_10_3_9_7330_640x338.jpg",
        "https://mi.vanclimg.com/oms/2019_7_31_11_30_50_2103_640x338.jpg"
      ],
      lists: [
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386493/mid/6386493-1j201907091613524118.jpg',
          title:'T恤 水柔棉 50支 2.0 圆领 男款 白色',
          pri:'198',
          newpri:'99'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386166/mid/6386166-1j201905221049543746.jpg',
          title:'T恤 熊本熊 大笑白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386544/mid/6386544-1j201906181555177462.jpg',
          title:'T恤 全棉舒适 素色基础 Pro 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386157/mid/6386157-1j201906111327152059.jpg',
          title:'T恤 条纹 全棉 男款 海蓝条纹',
          pri:'136',
          newpri:'68'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386190/mid/6386190-1j201905241435384626.jpg',
          title:'T恤 光变色 夏威夷黑色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386168/mid/6386168-1j201905221049543746.jpg',
          title:'T恤 熊本熊 字母白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385068/mid/6385068-1j201904081348148241.jpg',
          title:'T恤 基础打底 吸汗速干 圆领 白色',
          pri:'78',
          newpri:'39'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383938/mid/6383938-1j201811221534518627.jpg',
          title:'T恤 全棉舒适 素色基础 白色',
          pri:'38',
          newpri:'19'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385292/mid/6385292-1j201903061602494994.jpg',
          title:'T恤 创可贴 了不起 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385296/mid/6385296-1j201903061602594995.jpg',
          title:'T恤 创可贴 Tomorrow 白色',
          pri:'58',
          newpri:'29'
        }
      ]
    }, {
      advert: [
        "https://mi2.vanclimg.com/oms/2019_8_19_16_23_40_9214_640x338.jpg",
        "https://mi.vanclimg.com/oms/2019_8_19_16_23_44_719_640x338.jpg",
        "https://mi1.vanclimg.com/oms/2019_8_19_16_23_43_6085_640x338.jpg",
        "https://mi.vanclimg.com/oms/2019_8_19_16_23_44_196_640x338.jpg"
      ],
      lists: [
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386307/mid/6386307-1j201905161124492567.jpg',
          title:'T恤 简鱼 再见星期一 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386305/mid/6386305-1j201905161124543662.jpg',
          title:'T恤 简鱼 很忙 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386303/mid/6386303-1j201905161124592569.jpg',
          title:'T恤 简鱼 选择困难2 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386301/mid/6386301-1j201905161125043977.jpg',
          title:'T恤 简鱼 毛巾 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384549/mid/6384549-1j201903111525167016.jpg',
          title:'T恤 简鱼 一毛 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384541/mid/6384541-1j201903111524567011.jpg',
          title:'T恤 简鱼 哇噻 白色',
          pri:'38',
          newpri:'19'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384537/mid/6384537-1j201903111524417008.jpg',
          title:'T恤 简鱼 说啥 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384543/mid/6384543-1j201903111524167003.jpg',
          title:'T恤 简鱼 SO COOL 白色',
          pri:'38',
          newpri:'19'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384553/mid/6384553-1j201903081023467555.jpg',
          title:'T恤 简鱼 可能性 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384551/mid/6384551-1j201903081025070852.jpg',
          title:'T恤 简鱼 一家人整整齐齐 白色',
          pri:'58',
          newpri:'29'
        }
      ]
    }, {
      advert: [
        "https://mi.vanclimg.com/oms/2019_7_30_15_1_37_1361_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_1_37_8362_640x338.jpg",
        "https://mi1.vanclimg.com/oms/2019_7_30_15_1_37_5298_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_1_34_8232_640x338.jpg"
      ],
      lists: [
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385257/mid/6385257-1j201903291314344616.jpg',
          title:'T恤 山鸟叔 臭美 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385253/mid/6385253-1j201903291314294615.jpg',
          title:'T恤 山鸟叔 吃茶 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385263/mid/6385263-1j201903291315494629.jpg',
          title:'T恤 山鸟叔 无名 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385265/mid/6385265-1j201903291315294625.jpg',
          title:'T恤 山鸟叔 维特根斯坦 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385267/mid/6385267-1j201903291314494620.jpg',
          title:'T恤 山鸟叔 工匠 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385275/mid/6385275-1j201903291315394627.jpg',
          title:'T恤 山鸟叔 我可以 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385469/mid/6385469-1j201903281004376293.jpg',
          title:'T恤 山鸟叔 AK47-1 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385279/mid/6385279-1j201903291315244625.jpg',
          title:'T恤 山鸟叔 痛 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384260/mid/6384260-1j201902261004162394.jpg',
          title:'T恤 山鸟叔 低俗小舞1 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384501/mid/6384501-1j201903081026067736.jpg',
          title:'T恤 山鸟叔 香蕉1 白色',
          pri:'58',
          newpri:'29'
        }
      ]
    }, {
      advert: [
        "https://mi1.vanclimg.com/oms/2019_7_30_15_15_50_6147_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_15_46_8317_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_15_50_6670_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_18_3_8668_640x338.jpg"],
      lists: [
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384457/mid/6384457-1j201903081023167549.jpg',
          title:'T恤 本广 从不记仇 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385421/mid/6385421-1j201903281003126278.jpg',
          title:'T恤 本广 热力桑巴舞 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385417/mid/6385417-1j201903281002175952.jpg',
          title:'T恤 本广 臭豆腐 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385199/mid/6385199-1j201903291418042727.jpg',
          title:'T恤 本广 哥本哈根 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385179/mid/6385179-1j201903291418342729.jpg',
          title:'T恤 本广 杭州 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385164/mid/6385164-1j201903291419342737.jpg',
          title:'T恤 本广 我 黑色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385157/mid/6385157-1j201903291417392723.jpg',
          title:'T恤 本广 禅 怀素 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385155/mid/6385155-1j201903291418192729.jpg',
          title:'T恤 本广 归来 林散之 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385151/mid/6385151-1j201903291417492724.jpg',
          title:'T恤 本广 大地 林散之 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384449/mid/6384449-1j201903111523466999.jpg',
          title:'T恤 本广 别人的是 白色',
          pri:'58',
          newpri:'29'
        }
      ]
    }, {
      advert: [
        "https://mi.vanclimg.com/oms/2019_7_30_15_34_10_515_640x338.jpg",
        "https://mi1.vanclimg.com/oms/2019_7_30_15_34_10_6578_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_34_6_7004_640x338.jpg",
        "https://mi2.vanclimg.com/oms/2019_7_30_15_34_9_8181_640x338.jpg"
      ],
      lists: [
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385221/mid/6385221-1j201903291132089802.jpg',
          title:'T恤 欧飞鸿 你财是猪 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385219/mid/6385219-1j201903291132292305.jpg',
          title:'T恤 欧飞鸿 发横财 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385217/mid/6385217-1j201903291132389806.jpg',
          title:'T恤 欧飞鸿  我不 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385283/mid/6385283-1j201903291132042301.jpg',
          title:'T恤 欧飞鸿 请做 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385288/mid/6385288-1j201903291132289805.jpg',
          title:'T恤 欧飞鸿 二货 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385287/mid/6385287-1j201903291131492299.jpg',
          title:'T恤 欧飞鸿 想见你 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385284/mid/6385284-1j201903291132489809.jpg',
          title:'T恤 欧飞鸿 别玩我 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385283/mid/6385283-1j201903291132042301.jpg',
          title:'T恤 欧飞鸿 请做 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385282/mid/6385282-1j201903291131592300.jpg',
          title:'T恤 欧飞鸿 我爱你 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6380840/mid/6380840-1j201903071558460333.jpg',
          title:'T恤 欧飞鸿 英雌 白色',
          pri:'58',
          newpri:'29'
        }
      ]
    }
  ];
  res.send(arr);
});
router.get('/home/sale', function(req, res, next) {
 var arr=[
   "https://mi1.vanclimg.com/wap/2019_8_27_9_24_47_4918_320x545.jpg",
   "https://mi.vanclimg.com/wap/2019_8_27_9_24_59_972_320x545.jpg",
   "https://mi.vanclimg.com/wap/2019_8_27_9_25_10_1104_320x545.jpg",
   "https://mi1.vanclimg.com/wap/2019_8_27_9_25_20_6143_320x545.jpg",
   "https://mi1.vanclimg.com/wap/2019_8_27_9_25_32_6309_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_25_42_6681_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_25_54_8831_320x545.jpg",
   "https://mi1.vanclimg.com/wap/2019_8_27_9_26_5_3631_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_26_17_8049_320x545.jpg",
   "https://mi1.vanclimg.com/wap/2019_8_27_9_26_29_4070_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_26_42_9046_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_26_56_8382_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_27_15_8668_320x545.jpg",
   "https://mi1.vanclimg.com/wap/2019_8_27_9_27_26_4548_320x545.jpg",
   "https://mi.vanclimg.com/wap/2019_8_27_9_27_37_1332_320x545.jpg",
   "https://mi2.vanclimg.com/wap/2019_8_27_9_27_50_8608_320x545.jpg"

 ];
 res.send(arr);
});
router.get('/home/recs', function(req, res, next) {
  var arr=[
    {
      advert:"https://mi2.vanclimg.com/oms/2019_8_13_9_41_43_9869_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386564/mid/6386564-1j201908120906297628.jpg',
          title:'舒适商务衬衫 蓝底白条纹',
          pri:'258',
          newpri:'129'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386570/mid/6386570-1j201908120906396534.jpg',
          title:'舒适商务衬衫 深灰色',
          pri:'258',
          newpri:'129'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379500/mid/6379500-1j201810191113348773.jpg',
          title:'凡客衬衫 吉国武 免烫 温莎领 4.0 白色',
          pri:'398',
          newpri:'199'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379503/mid/6379503-1j201810191200399915.jpg',
          title:'凡客衬衫 吉国武 免烫 温莎领 4.0 深蓝',
          pri:'398',
          newpri:'199'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379798/mid/6379798-1j201812251018148119.jpg',
          title:'凡客衬衫 吉国武 免烫 异色领100支 4.0 紫色条纹',
          pri:'698',
          newpri:'349'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379798/mid/6379798-1j201812251018148119.jpg',
          title:'凡客衬衫 吉国武 免烫 异色领100支 4.0 蓝色条纹',
          pri:'698',
          newpri:'349'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/5/7/6/5767924/mid/5767924-1j201508251312348454.jpg',
          title:'凡客衬衫 吉国武 SOKTAS 300 蓝色',
          pri:'3618',
          newpri:'1809'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/5/7/6/5767744/mid/5767744-1j201508251312293464.jpg',
          title:'凡客衬衫 吉国武 SOKTAS 300 白色',
          pri:'3618',
          newpri:'1809'
        }, {
          img:'http://i.vanclimg.com/276/356/q80/product/1/7/3/1737658/mid/1737658-1j201404011621574853.jpg',
          title:'300支阿瓦提长绒棉衬衫 蓝色',
          pri:'1198',
          newpri:'599'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375115/mid/6375115-1j201709211422324502.jpg',
          title:'凡客衬衫 吉国武 免烫 领尖扣 3.0 藏蓝',
          pri:'298',
          newpri:'149'
        }
      ]
    },{
      advert:"https://mi.vanclimg.com/oms/2019_8_21_9_59_20_1332_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385826/mid/6385826-1j201904191152524906.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 男款 黑白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385653/mid/6385653-1j201904221122169764.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 男款 白蓝铅笔条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382603/mid/6382603-1j201809181136332545.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 男款 蓝白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382606/mid/6382606-1j201809181136335045.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 男款 天蓝白格',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385356/mid/6385356-1j201904171441194623.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 白蓝铅笔条',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385659/mid/6385659-1j201904191152522406.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 蓝白维西格',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385352/mid/6385352-1j201904171441294625.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 白色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385356/mid/6385356-1j201904171441194623.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 海军蓝',
          pri:'138',
          newpri:'69'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_8_21_9_59_18_5334_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383955/mid/6383955-1j201903291057142200.jpg',
          title:'POLO衫 棉质干爽网眼 男款 深红色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383946/mid/6383946-1j201904111353100132.jpg',
          title:'水洗POLO衫  柔软磨毛平纹 男款 军绿色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383948/mid/6383948-1j201903291056543453.jpg',
          title:'POLO衫 本布衬衫领 男款 浅花灰',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383944/mid/6383944-1j201904111353048881.jpg',
          title:'水洗POLO衫  柔软磨毛平纹 男款 复古蓝',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383949/mid/6383949-1j201903291056543453.jpg',
          title:'POLO衫 棉质干爽网眼 男款 白色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385713/mid/6385713-1j201903261006402144.jpg',
          title:'POLO衫 长绒棉珠地 白色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385774/mid/6385774-1j201903261007046526.jpg',
          title:'POLO衫 撞色领边 浅灰',
          pri:'238',
          newpri:'119'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385743/mid/6385743-1j201903261006500115.jpg',
          title:'POLO衫 冰瓷棉 黑色',
          pri:'238',
          newpri:'119'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_34_3451_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384440/mid/6384440-1j201904280934562900.jpg',
          title:'凡客衬衫 麻棉 小立领 长袖 男款 白蓝宽条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384429/mid/6384429-1j201904280935064151.jpg',
          title:'凡客衬衫 麻棉 小方领 长袖 男款 灰色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6381485/mid/6381485-1j201806121028453772.jpg',
          title:'凡客衬衫 易打理 宽松复古开领 男款2 绿宽条',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385084/mid/6385084-1j201904260907081524.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款 天蓝维西格',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386070/mid/6386070-1j201905291404218958.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 白蓝格',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385355/mid/6385355-1j201904171441193373.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 灰白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6381474/mid/6381474-1j201810251643395283.jpg',
          title:'凡客衬衫 易打理 领尖扣 短袖 男款 咖白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379012/mid/6379012-1j201711031614005420.jpg',
          title:'衬衫 法兰绒 男款 绿白格',
          pri:'198',
          newpri:'99'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_34_5228_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6373620/mid/6373620-1j201811102009528152.jpg',
          title:'凡客帆布鞋 高帮 男款 藏蓝色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6373626/mid/6373626-1j201811102009487997.jpg',
          title:'凡客帆布鞋 高帮 女款 米色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386068/mid/6386068-1j201905301015036867.jpg',
          title:'凡客商务正装皮鞋 02 男款 黑色',
          pri:'798',
          newpri:'399'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386155/mid/6386155-1j201905301014586866.jpg',
          title:'凡客商务正装皮鞋 01 男款 咖啡色',
          pri:'698',
          newpri:'349'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6373598/mid/6373598-1j201811102009487997.jpg',
          title:'凡客帆布鞋 女款 纯白色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386073/mid/6386073-1j201905150928528706.jpg',
          title:'凡客休闲凉鞋 男款 黑色',
          pri:'258',
          newpri:'129'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384139/mid/6384139-1j201904091500415821.jpg',
          title:'凡客休闲鞋 系带 05 女款 白色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384136/mid/6384136-1j201904091500466135.jpg',
          title:'凡客休闲鞋 魔术贴 01 女款 黑色',
          pri:'198',
          newpri:'99'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_35_4738_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385702/mid/6385702-1j201903271515214671.jpg',
          title:'吸湿速干运动 T恤 黑色',
          pri:'98',
          newpri:'49'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385090/mid/6385090-1j201903111109215542.jpg',
          title:'阳离子速干T恤 宝蓝',
          pri:'158',
          newpri:'79'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385035/mid/6385035-1j201903111107366936.jpg',
          title:'弹力透气针梭接运动T恤 男款 白色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385037/mid/6385037-1j201903111107517718.jpg',
          title:'弹力速干运动T恤 男款 豆绿',
          pri:'158',
          newpri:'79'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385042/mid/6385042-1j201903111108014281.jpg',
          title:'弹力速干运动T恤 女款 绯红',
          pri:'158',
          newpri:'79'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385105/mid/6385105-1j201903121458584294.jpg',
          title:'反光网眼T恤 男款 白色',
          pri:'158',
          newpri:'79'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385112/mid/6385112-1j201903051056474394.jpg',
          title:'弹力修身T恤 男款 黑色',
          pri:'158',
          newpri:'79'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385020/mid/6385020-1j201903111106264428.jpg',
          title:'皮肤衣 轻弹透气 可收纳帽 男款 浅灰',
          pri:'298',
          newpri:'149'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_35_5086_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378350/mid/6378350-1j201801111409218163.jpg',
          title:'凡客卫衣 圆领 熊本熊 S5 黑色',
          pri:'156',
          newpri:'78'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378359/mid/6378359-1j201801111409218163.jpg',
          title:'凡客卫衣 圆领 熊本熊 S8 黑色',
          pri:'156',
          newpri:'78'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378357/mid/6378357-1j201801111409218163.jpg',
          title:'凡客卫衣 圆领 熊本熊 S8 浅花灰',
          pri:'156',
          newpri:'78'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378353/mid/6378353-1j201801111409218163.jpg',
          title:'凡客卫衣 圆领 熊本熊 S6 黑色',
          pri:'156',
          newpri:'78'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378476/mid/6378476-1j201710171547246572.jpg',
          title:'凡客卫衣 暖绒开衫 男款 深花灰',
          pri:'218',
          newpri:'109'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378386/mid/6378386-1j201801111409218163.jpg',
          title:'童装卫衣 圆领 熊本熊 S1 浅花灰',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378394/mid/6378394-1j201801111409218163.jpg',
          title:'童装卫衣 圆领 熊本熊 S3 黑色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378412/mid/6378412-1j201801111409218163.jpg',
          title:'童装卫衣 圆领 熊本熊 S9 黑色',
          pri:'138',
          newpri:'69'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_35_5435_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378280/mid/6378280-1j201710101532544991.jpg',
          title:'凡客休闲裤 轻弹水洗 收口慢跑裤 男款 灰色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385822/mid/6385822-1j201904191430374277.jpg',
          title:'凡客牛仔裤 针织收口裤 男款 水洗蓝',
          pri:'298',
          newpri:'149'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378279/mid/6378279-1j201710101532297332.jpg',
          title:'凡客休闲裤 轻弹水洗 收口慢跑裤 男款 藏青色',
          pri:'298',
          newpri:'149'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385818/mid/6385818-1j201904191430424278.jpg',
          title:'凡客牛仔裤 修身直筒 轻弹黑牛 男款 水洗黑',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378885/mid/6378885-1j201711081540564837.jpg',
          title:'牛仔裤 微喇流苏 轻弹水洗 女款 浅蓝色',
          pri:'298',
          newpri:'149'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379492/mid/6379492-1j201802271354367601.jpg',
          title:'牛仔裤  低裆锥形 轻弹 男款 复古蓝',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378880/mid/6378880-1j201710160922081698.jpg',
          title:'牛仔裤 修身铅笔裤 轻弹水洗 女款 中蓝',
          pri:'278',
          newpri:'139'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384560/mid/6384560-1j201904021602504529.jpg',
          title:'凡客男士魔术印花沙滩裤 蓝色渐变',
          pri:'198',
          newpri:'99'
        }
      ]
    },{
      advert:"https://mi2.vanclimg.com/oms/2019_7_30_16_28_35_9372_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384549/mid/6384549-1j201903111525167016.jpg',
          title:'T恤 简鱼 一毛 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384541/mid/6384541-1j201903111524567011.jpg',
          title:'T恤 简鱼 哇噻 白色',
          pri:'38',
          newpri:'19'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384537/mid/6384537-1j201903111524417008.jpg',
          title:'T恤 简鱼 说啥 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384543/mid/6384543-1j201903111524167003.jpg',
          title:'T恤 简鱼 SO COOL 白色',
          pri:'38',
          newpri:'19'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384553/mid/6384553-1j201903081023467555.jpg',
          title:'T恤 简鱼 可能性 白色',
          pri:'58',
          newpri:'29'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385265/mid/6385265-1j201903291315294625.jpg',
          title:'T恤 山鸟叔 维特根斯坦 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385267/mid/6385267-1j201903291314494620.jpg',
          title:'T恤 山鸟叔 工匠 白色',
          pri:'58',
          newpri:'29'
        },{
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385275/mid/6385275-1j201903291315394627.jpg',
          title:'T恤 山鸟叔 我可以 白色',
          pri:'58',
          newpri:'29'
        },
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_2_13_57_0_3853_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375169/mid/6375169-1j201709151925342692.jpg',
          title:'凡客外套 水柔棉 拉链开衫 男款 藏蓝色',
          pri:'178',
          newpri:'89'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375172/mid/6375172-1j201709151925339255.jpg',
          title:'凡客夹克 双帽双拉链 轻弹 男款 宝蓝色',
          pri:'218',
          newpri:'109'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6377995/mid/6377995-1j201709181639233235.jpg',
          title:'MA1飞行夹克 双面穿 薄棉 C9 天蓝色',
          pri:'218',
          newpri:'109'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6377994/mid/6377994-1j201709181639231203.jpg',
          title:'MA1飞行夹克 双面穿 薄棉 C9 红色',
          pri:'218',
          newpri:'109'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375173/mid/6375173-1j201709151925388317.jpg',
          title:'凡客夹克 双帽双拉链 轻弹 男款 藏青色',
          pri:'218',
          newpri:'109'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382667/mid/6382667-1j201808301549200183.jpg',
          title:'商务休闲夹克 N8571 咸菜绿',
          pri:'348',
          newpri:'174'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382763/mid/6382763-1j201808291711435994.jpg',
          title:'商务休闲夹克 N8636 墨绿色',
          pri:'348',
          newpri:'174'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384907/mid/6384907-1j201903131358201296.jpg',
          title:'男士春季立领休闲夹克21181076 黑色',
          pri:'438',
          newpri:'219'
        }
      ]
    },{
      advert:"https://mi.vanclimg.com/oms/2019_7_30_16_28_36_3308_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378044/mid/6378044-1j201709200915407420.jpg',
          title:'凡客内裤 莫代尔 男款 黑色',
          pri:'58',
          newpri:'29'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378512/mid/6378512-1j201710161044280031.jpg',
          title:'凡客内裤 棉氨 男款 深花灰',
          pri:'42',
          newpri:'21'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378511/mid/6378511-1j201710161043380022.jpg',
          title:'凡客内裤 棉氨 男款 灰色',
          pri:'42',
          newpri:'21'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379849/mid/6379849-1j201802281529333724.jpg',
          title:'凡客男士精梳棉船袜 素色 经典款（2双装） 白色',
          pri:'24',
          newpri:'12'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383921/mid/6383921-1j201904300956092825.jpg',
          title:'凡客透气耐磨运动船袜(两双装) 深灰黑色',
          pri:'99',
          newpri:'50'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384180/mid/6384180-1j201903251701433223.jpg',
          title:'凡客男士精梳棉宽罗纹口筒袜（2双装） 浅花灰色',
          pri:'68',
          newpri:'34'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384154/mid/6384154-1j201903211041220444.jpg',
          title:'凡客 超薄空气袜连裤袜 3D 肤色',
          pri:'48',
          newpri:'24'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384155/mid/6384155-1j201903211041219194.jpg',
          title:'凡客 超薄任意剪连裤袜 5D 肤色',
          pri:'48',
          newpri:'24'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_7_30_16_28_36_5293_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386803/mid/6386803-1j201908220911135010.jpg',
          title:'恒源祥倾心毛浴巾三件套 HYX003MJ 米黄色 米黄色',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386795/mid/6386795-1j201908220910384819.jpg',
          title:'恒源祥乳胶决明子枕HYX009ZX 白色',
          pri:'378',
          newpri:'189'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386796/mid/6386796-1j201908220910432949.jpg',
          title:'恒源祥亲肤枕HYX010ZX 灰色',
          pri:'338',
          newpri:'169'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386787/mid/6386787-1j201908191102068721.jpg',
          title:'恒源祥绒毯 HYX008MT 复古格',
          pri:'278',
          newpri:'139'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386788/mid/6386788-1j201908220910082915.jpg',
          title:'恒源祥麦穗毯 HYX005-006MT 驼色',
          pri:'478',
          newpri:'239'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386780/mid/6386780-1j201908191101418249.jpg',
          title:'恒源祥塞班绒春秋被 HYX016BZ 印花',
          pri:'538',
          newpri:'269'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386781/mid/6386781-1j201908191101468250.jpg',
          title:'恒源祥亲舒被 HYX019BZ 印花',
          pri:'498',
          newpri:'249'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386817/mid/6386817-1j201908220912185543.jpg',
          title:'恒源祥印花四件套 HYX029TJ 洛丽斯(粉紫)',
          pri:'558',
          newpri:'279'
        }
      ]
    },{
      advert:"https://mi.vanclimg.com/oms/2019_7_2_13_57_1_91_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386455/mid/6386455-1j201905271613584753.jpg',
          title:'皮卡诺双肩电脑包 1902 黑色',
          pri:'376',
          newpri:'188'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386449/mid/6386449-1j201905271613337878.jpg',
          title:'皮卡诺双肩电脑包 1804 蓝色',
          pri:'396',
          newpri:'198'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386440/mid/6386440-1j201905271613086159.jpg',
          title:'皮卡诺双肩电脑包 1801 黑色',
          pri:'356',
          newpri:'178'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386439/mid/6386439-1j201905271612588815.jpg',
          title:'皮卡诺双肩电脑包 1707 紫色',
          pri:'276',
          newpri:'138'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6386437/mid/6386437-1j201905271612586471.jpg',
          title:'皮卡诺双肩电脑包 1707 灰色',
          pri:'276',
          newpri:'138'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384883/mid/6384883-1j201903211111067037.jpg',
          title:'恒源祥(HYX)多功能挎包 HYX3053 灰色',
          pri:'308',
          newpri:'154'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6384862/mid/6384862-1j201903211109321555.jpg',
          title:'恒源祥(HYX)精英公文包 HYX0347 灰色',
          pri:'228',
          newpri:'114'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6380435/mid/6380435-1j201804121047434714.jpg',
          title:'时尚铝框拉杆箱 29寸 红色',
          pri:'1398',
          newpri:'699'
        }
      ]
    },{
      advert:"https://mi1.vanclimg.com/oms/2019_8_22_16_36_16_4049_750x396.jpg",
      lists:[
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379500/mid/6379500-1j201810191113348773.jpg',
          title:'凡客衬衫 吉国武 免烫 温莎领 4.0 白色',
          pri:'398',
          newpri:'199'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375115/mid/6375115-1j201709211422324502.jpg',
          title:'凡客衬衫 吉国武 免烫 领尖扣 3.0 藏蓝',
          pri:'298',
          newpri:'149'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382603/mid/6382603-1j201809181136332545.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 男款 蓝白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6382763/mid/6382763-1j201808291711435994.jpg',
          title:'商务休闲夹克 N8636 墨绿色',
          pri:'348',
          newpri:'174'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6383949/mid/6383949-1j201903291056543453.jpg',
          title:'POLO衫 棉质干爽网眼 男款 白色',
          pri:'138',
          newpri:'69'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/8/6385355/mid/6385355-1j201904171441193373.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款 灰白条',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6379492/mid/6379492-1j201802271354367601.jpg',
          title:'牛仔裤  低裆锥形 轻弹 男款 复古蓝',
          pri:'198',
          newpri:'99'
        },
        {
          img:'http://i.vanclimg.com/276/356/q80/product/6/3/7/6375173/mid/6375173-1j201709151925388317.jpg',
          title:'凡客夹克 双帽双拉链 轻弹 男款 藏青色',
          pri:'218',
          newpri:'109'
        }
      ]
    }
  ];
  res.send(arr);
});
router.get('/home/banner', function(req, res, next) {
  let bannerArr = [
    'https://mi1.vanclimg.com/wap/2019_8_23_15_17_25_6261_640x402.jpg',
    'https://mi2.vanclimg.com/wap/2019_8_20_15_47_13_7133_640x402.jpg',
    'https://mi1.vanclimg.com/wap/2019_8_21_17_24_19_5096_640x402.jpg',
    'https://mi1.vanclimg.com/wap/2019_8_21_17_24_28_6406_640x402.jpg',
    'https://mi1.vanclimg.com/wap/2019_7_31_15_35_59_4034_640x402.jpg',
    'https://mi.vanclimg.com/wap/2019_8_2_14_43_42_1205_640x402.jpg'
    ]
    res.send(bannerArr);
});

router.get('/home/homenav', function(req, res, next) {
  let indexNavArr = [
  {
    title:'新品',
    img:"https://mi2.vanclimg.com/oms/2019_5_22_15_54_9_8508_55x60.jpg"
  },
  {
    title:'特惠',
    img:"http://i6.m.vancl.com/oms/2018_1_10_15_53_37_6172_59x54.jpg"
  },
  {
    title:'T恤',
    img:"https://mi.vanclimg.com/oms/2018_3_28_17_52_17_7914_59x59.jpg"
  },
  {
    title:'衬衫',
    img:"https://mi2.vanclimg.com/oms/2018_8_24_11_37_23_9993_59x59.jpg"
  },
  {
    title:'V团',
    img:"http://i4.m.vancl.com/oms/2018_7_26_14_37_13_4000_59x56.jpg"
  },
    ]
  res.send(indexNavArr);
});

router.get('/home/jingxuan', function(req, res, next) {
  let jingxuanArr = [
  'https://mi1.vanclimg.com/oms/2019_6_13_15_33_40_6314_326x206.jpg',
  'https://mi1.vanclimg.com/oms/2019_6_12_16_26_40_6021_326x206.jpg',
  'https://mi.vanclimg.com/oms/2019_4_17_11_1_26_1774_326x206.jpg',
  'https://mi2.vanclimg.com/oms/2019_4_17_11_1_22_7565_326x206.jpg',
  'https://mi2.vanclimg.com/oms/2019_4_17_11_1_26_8742_326x206.jpg',
  'https://mi1.vanclimg.com/oms/2019_3_20_16_58_59_5629_326x206.jpg',
  'https://mi2.vanclimg.com/oms/2019_3_15_9_40_16_8337_326x206.jpg',
  'https://mi.vanclimg.com/oms/2019_3_15_9_40_16_1684_326x206.jpg',
  'https://mi2.vanclimg.com/oms/2019_3_15_9_40_10_7585_326x206.jpg',
  'https://mi2.vanclimg.com/oms/2019_3_12_14_21_41_9908_326x206.jpg',
   'https://mi.vanclimg.com/oms/2019_3_7_17_17_34_2958_326x206.jpg',
   'https://mi2.vanclimg.com/oms/2019_3_11_15_10_44_7718_326x206.jpg',
   'https://mi.vanclimg.com/oms/2019_2_28_17_28_26_1718_326x206.jpg',

]
    res.send(jingxuanArr);
});

router.get('/home/miaosha', function(req, res, next) {
  let MiaoshaArr = [
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/8/6385381/mid/6385381-1j201903271435214188.jpg",
    price:'充值后￥9',
    Reprice: 118
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/8/6385230/mid/6385230-1j201903291109592185.jpg",
    price:'充值后￥9',
    Reprice:118
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/7/6378000/mid/6378000-1j201710121408227197.jpg",
    price:'充值后￥9',
    Reprice:118
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/8/6385446/mid/6385446-1j201903281004127539.jpg",
    price:'充值后￥9',
    Reprice:118
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/7/6374357/mid/6374357-1j201706172249536135.jpg",
    price:'充值后￥9',
    Reprice:118
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/7/6374358/mid/6374358-1j201706172249534728.jpg",
    price:'充值后￥9',
    Reprice:168
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/7/6374232/mid/6374232-1j201603231537320160.jpg",
    price:'充值后￥39',
    Reprice:168
  },
  {
    img:"http://i.vanclimg.com/276/356/q80/product/6/3/7/6379150/mid/6379150-1j201711291001368190.jpg",
    price:'充值后￥8',
    Reprice:38
  },
    ]
    res.send(MiaoshaArr);
});



/* GET lists page. */
router.get('/lists', function(req, res, next) {
  var arr=[
    {
      spans:"吉国武",
      lists:[
        {
          img:"http://i.vanclimg.com/640/q80/product/6/3/7/6379798/big/6379798-1j201812251018148119.jpg",
          title:"凡客衬衫 吉国武 免烫 异色领100支 4.0",
          pri:"698"
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6379797/big/6379797-1j201812251017598118.jpg',
          title:'凡客衬衫 吉国武 免烫 异色领100支 4.0',
          pri:'698'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6379503/big/6379503-1j201810191200399915.jpg',
          title:'凡客衬衫 吉国武 免烫 温莎领 4.0',
          pri:'398'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6379500/big/6379500-1j201810191113348773.jpg',
          title:'凡客衬衫 吉国武 免烫 温莎领 4.0',
          pri:'398'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6378691/big/6378691-1j201711031614008077.jpg',
          title:'凡客衬衫 吉国武 易整理 领尖扣',
          pri:'258'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6378690/big/6378690-1j201711031613492136.jpg',
          title:'凡客衬衫 吉国武 易整理 领尖扣',
          pri:'258'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375115/big/6375115-1j201709211422324502.jpg',
          title:'凡客衬衫 吉国武 免烫 领尖扣 3.0',
          pri:'298'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/5/7/6/5767924/big/5767924-1j201508251312348454.jpg',
          title:'凡客衬衫 吉国武 SOKTAS 300',
          pri:'3618'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/5/7/6/5767744/big/5767744-1j201508251312293464.jpg',
          title:'凡客衬衫 吉国武 SOKTAS 300',
          pri:'3618'
        }
      ]
    },
    {
      spans:"T恤",
      lists:[
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6380841/big/6380841-1j201903071558460489.jpg',
          title:'T恤 欧飞鸿 英雌',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6380842/big/6380842-1j201903071558410332.jpg',
          title:'T恤 欧飞鸿 飞',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6380952/big/6380952-1j201903071600005973.jpg',
          title:'T恤 山鸟叔 颜摄',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386307/big/6386307-1j201905161124492567.jpg',
          title:'T恤 简鱼 再见星期一',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386303/big/6386303-1j201905161124592569.jpg',
          title:'T恤 简鱼 选择困难2',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386301/big/6386301-1j201905161125043977.jpg',
          title:'T恤 简鱼 毛巾',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386494/big/6386494-1j201907091613526618.jpg',
          title:'T恤 水柔棉 50支 2.0 圆领 男款',
          pri:'198'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386493/big/6386493-1j201907091613524118.jpg',
          title:'T恤 水柔棉 50支 2.0 圆领 男款',
          pri:'198'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386365/big/6386365-1j201907161129289641.jpg',
          title:'T恤 崔海军 黑猫5',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386299/big/6386299-1j201907161129242139.jpg',
          title:'T恤 崔海军 黑猫9',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386298/big/6386298-1j201907161129238389.jpg',
          title:'T恤 崔海军 黑猫8',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386297/big/6386297-1j201907161129189638.jpg',
          title:'T恤 崔海军 黑猫7',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386296/big/6386296-1j201907161129138388.jpg',
          title:'T恤 崔海军 黑猫6',
          pri:'58'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386545/big/6386545-1j201906181555177462.jpg',
          title:'T恤 全棉舒适 素色基础 Pro',
          pri:'58'
        }
      ]
    },
    {
      spans:"短袖衬衫",
      lists:[
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386070/big/6386070-1j201905291404218958.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款',
          pri:'138'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385658/big/6385658-1j201905140944310065.jpg',
          title:'凡客衬衫 牛津纺 领尖扣 短袖 男款',
          pri:'138'
        },
        {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385082/big/6385082-1j201904260907134806.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385089/big/6385089-1j201904260906534801.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385087/big/6385087-1j201904260906584802.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385086/big/6385086-1j201904260907034804.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385085/big/6385085-1j201904260907034804.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385084/big/6385084-1j201904260907081524.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385083/big/6385083-1j201904260907084805.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385081/big/6385081-1j201904260907184807.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6385080/big/6385080-1j201904260907231682.jpg',
          title:'凡客衬衫 水洗棉 小方领 短袖 男款',
          pri:'138'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386146/big/6386146-1j201904181531408761.jpg',
          title:'男士短袖商务衬衫 D706',
          pri:'328'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386145/big/6386145-1j201904181531360635.jpg',
          title:'男士短袖商务衬衫 D706',
          pri:'328'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386144/big/6386144-1j201904181531358604.jpg',
          title:'男士短袖商务衬衫 D706',
          pri:'328'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386142/big/6386142-1j201904181531308759.jpg',
          title:'男士短袖商务衬衫 D706',
          pri:'328'
        }, {
          img:'http://i.vanclimg.com/640/q80/product/6/3/8/6386120/big/6386120-1j201904181533409252.jpg',
          title:'男士短袖商务衬衫 D0608',
          pri:'328'
        }
      ]
    }
  ]
  arr = arr.filter(function(item){
    return item.spans == req.query.spans
  })
  res.send(arr);
});


// 分类和 频道 start
// 首页列表

router.get('/fklist', function (req, res, next) {
  var arr = [
    {id:1,name:'推荐'},
    {id:2,name:'男装'},
    {id:3,name:'女装'},
    {id:4,name:'男鞋'},
    {id:5,name:'女鞋'},
    {id:6,name:'袜品'},
    {id:7,name:'家居'},
    {id:8,name:'童装'},
    {id:9,name:'内衣'},
    

  ]
  res.send(arr);
});
//频道数据
router.get('/pdlist', function (req, res, next) {
  var arr = [
    {id:1,img:'http://i5.m.vancl.com/q80/wap/2019_5_24_10_4_52_3729.jpg'},
    {id:2,img:'http://i6.m.vancl.com/q80/wap/2019_5_24_10_5_3_3022.jpg'},
    {id:3,img:'http://i2.m.vancl.com/q80/wap/2019_5_24_10_5_12_8934.jpg'},
    {id:4,img:'http://i2.m.vancl.com/q80/wap/2018_3_29_16_25_10_8550.jpg'},
    {id:5,img:'http://i8.m.vancl.com/q80/wap/2019_5_24_10_5_24_8053.jpg'},
    {id:6,img:'http://i8.m.vancl.com/q80/wap/2018_3_29_16_23_56_6882.jpg'},
    {id:7,img:'http://i8.m.vancl.com/q80/wap/2019_5_24_10_5_36_5327.jpg'},
    {id:8,img:'http://i8.m.vancl.com/q80/wap/2018_3_29_16_25_0_5113.jpg'},
    {id:9,img:'http://i7.m.vancl.com/q80/wap/2018_3_29_16_24_26_3920.jpg'},
    

  ]
  res.send(arr);
});

// 分类详情
router.get('/getlistdata', function (req, res, next) {
  var arr = [
    {id:'0',
    lists:[
      {img:'http://i1.vanclimg.com/cms/20180411/11aaaaa.jpg',spans:'吉国武'},
      {img:'https://mi.vanclimg.com/oms/2019_5_16_15_5_53_46_400x400.jpg',spans:'T恤'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_15_15_27_19_8618_400x400.jpg',spans:'短袖衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6377971/big/6377971-1j201709260833241850.jpg',spans:'休闲衬衫'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6375163/mid/6375163-1j201709151925189721.jpg',spans:'水柔棉'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_16_15_7_53_8057_400x400.jpg',spans:'牛津纺'},
      {img:'http://p2.vanclimg.com/product/6/3/7/6378353/mid/6378353-1j201709090039435468.jpg',spans:'卫衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6378026/mid/6378026-1j201710121408227822.jpg',spans:'夹克'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6378261/mid/6378261-1j201709211359324069.jpg',spans:'针织衫'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375651/mid/6375651-1j201709151926288158.jpg',spans:'外套'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6378464/mid/6378464-1j201709221623443761.jpg',spans:'童装'},

    ]},
    {id:'1',
    lists:[
      {img:'http://p2.vanclimg.com/product/6/3/7/6377093/mid/6377093-1j201709181534534139.jpg',spans:'免烫衬衫'},
      {img:'http://p1.vanclimg.com/product/6/3/7/6375076/mid/6375076-1j201709151927340820.jpg',spans:'休闲衬衫'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_15_15_33_14_8658_400x400.jpg',spans:'水洗棉衬衫'},
      {img:'https://mi1.vanclimg.com/oms/2019_5_15_15_37_35_3744_400x400.jpg',spans:'牛仔衬衫'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6375493/mid/6375493-1j201704211456159105.jpg',spans:'短袖衬衫'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_15_15_57_55_7561_400x400.jpg',spans:'牛津纺'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6374869/mid/6374869-1j201608231026249778.jpg',spans:'POLO衫'},
      {img:'https://mi.vanclimg.com/oms/2019_5_16_15_11_37_3094_400x400.jpg',spans:'商务衬衫'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6378356/mid/6378356-1j201709090039584376.jpg',spans:'卫衣'}
    ]},
      {id:'2',
      lists:[{img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i2.m.vancl.com/oms/2017_10_9_16_2_46_2082_400x400.jpg',spans:'水柔棉'},
      {img:'http://i9.m.vancl.com/oms/2017_10_9_16_5_56_9321_400x400.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'3',
      lists:[{img:'https://mi2.vanclimg.com/oms/2019_5_16_14_59_43_6907_400x400.jpg',spans:'卫衣'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_16_14_59_43_6907_400x400.jpg',spans:'水柔棉'},
      {img:'https://mi2.vanclimg.com/oms/2019_5_16_14_59_43_6907_400x400.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'4',
      lists:[{img:'https://mi2.vanclimg.com/oms/2019_5_16_14_59_43_6907_400x400.jpg',spans:'卫衣'},
      {img:'http://i2.m.vancl.com/oms/2017_10_9_16_2_46_2082_400x400.jpg',spans:'水柔棉'},
      {img:'http://i9.m.vancl.com/oms/2017_10_9_16_5_56_9321_400x400.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'5',
      lists:[{img:'https://mi.vanclimg.com/oms/2019_5_16_14_59_46_190_400x400.jpg',spans:'卫衣'},
      {img:'https://mi.vanclimg.com/oms/2019_5_16_14_59_46_190_400x400.jpg',spans:'水柔棉'},
      {img:'https://mi.vanclimg.com/oms/2019_5_16_14_59_46_190_400x400.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'6',
      lists:[{img:'http://i8.m.vancl.com/oms/2015_8_24_14_36_41_8264.jpg',spans:'卫衣'},
      {img:'http://i8.m.vancl.com/oms/2015_8_24_14_36_41_8264.jpg',spans:'水柔棉'},
      {img:'http://i8.m.vancl.com/oms/2015_8_24_14_36_41_8264.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'7',
      lists:[{img:'http://i2.vanclimg.com/cms/20190225/dsxcsd.jpg',spans:'卫衣'},
      {img:'http://p1.vanclimg.com/product/6/3/6/6360018/mid/6360018-1j201507061744455744.jpg',spans:'水柔棉'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg',spans:'T恤'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'8',
      lists:[{img:'http://i6.m.vancl.com/oms/2017_9_22_14_50_27_6213_400x400.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6378719/mid/6378719-2201710181354559807.jpg',spans:'水柔棉'},
      {img:'http://p2.vanclimg.com/product/6/3/7/6378718/mid/6378718-2201710181354110581.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]},
      {id:'9',
      lists:[{img:'http://p3.vanclimg.com/product/0/8/5/0852470/mid/0852470-1j201602231548141598.jpg',spans:'卫衣'},
      {img:'http://p2.vanclimg.com/product/6/3/7/6375743/mid/6375743-1j201703151541308000.jpg',spans:'水柔棉'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6378045/mid/6378045-1j201709200915558828.jpg',spans:'T恤'},
      {img:'http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg',spans:'休闲衬衫'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg',spans:'麻衬衫裙'},
      {img:'http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg',spans:'针织衫'},
      {img:'http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg',spans:'外套'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg',spans:'皮肤衣'},
      {img:'http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg',spans:'运动速干'},
      {img:'http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg',spans:'牛仔裤'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
      {img:'http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg',spans:'卫衣'},
    ]}]

   arr = arr.filter(function(item){
        return item.id  == req.query.id
      })
  res.send(arr);
});
// post 请求验证登录信息
router.post('/login', function (req, res, next) {
  // var data = fs.readFileSync('../../public/user.json');
  fs.readFile('./public/user.json', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let datas =  JSON.parse(data)
    let arr=[]
   let result = datas.uesr.filter((item) => {
     // 如果账号密码相同，则发送成功
     if(req.body.tel == item.tel && req.body.pwd == item.pwd){
       arr = {codel:200,result:'成功',datauser: item,dataorder: datas.order[item.id]}
      return true;
     }else{
       arr = {codel:404,result:'失败'}
     }
      
    }
    )
    res.send(arr)
  
 });
  
 
});
// 分类和 频道 end

// 修改密码
router.post('/getback', function (req, res, next){
  // 获取过来要修改的对象
   // var data = fs.readFileSync('../../public/user.json');
   fs.readFile('./public/user.json', function (err, data) {
    if (err) {
        return console.error(err);
    }
    var data = JSON.parse(data)
    // 读取所有的对象
    console.log(data.uesr);
    for(var i = 0; i < data.uesr.length; i++){
      console.log(data.uesr[i]);
      var users = data.uesr[i]
          if(users.tel === req.body.tel){
      for(let item in users){
        if(item !== 'id'){
          users[item] = req.body[item]
        }
      }
      }
    }
    data = JSON.stringify(data)
    fs.writeFile('./public/user.json', data, function(err) {
      if (err) {
          throw err;
          res.send({codel:404,msg:'修改失败'})
      }else{
        res.send({codel:200,msg:'修改成功'})
      }
    })
  })
 
})
// 修改密码 end
// 新增用户
router.post('/registe', function (req, res, next){
  // 获取过来要修改的对象
  console.log(req.body);
   // var data = fs.readFileSync('../../public/user.json');
   fs.readFile('./public/user.json', function (err, data) {
    if (err) {
        return console.error(err);
    }
    var data = JSON.parse(data)
    // 读取所有的对象
    console.log(data.uesr);
    
    let boonet = false;
   
    for(var i = 0; i < data.uesr.length; i++){
      console.log(data.uesr[i]);
      var users = data.uesr[i]
        if(users.tel === req.body.tel){
          boonet = true
        }
      }
      if(!boonet){
        req.body.id = data.uesr.length ;
        data.uesr.push(req.body)
        console.log(data);
        
        setuser(data)
      }else{
        res.send({codel:404,msg:'注册失败,用户已存在'})
      }
    })

    //写入用户
    function setuser(data){
      data = JSON.stringify(data)
    fs.writeFile('./public/user.json', data, function(err) {
      if (err) {
          throw err;
          res.send({codel:404,msg:'注册失败'})
      }else{
        res.send({codel:200,msg:'注册成功'})
      }
    })
    }
    
   
  })
 

// 新增用户 end
module.exports = router;