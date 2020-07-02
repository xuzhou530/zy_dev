const setting = [
  {
    id: 0,
    theme: 'light',
    site: 'zuidazy',
    pass: false
  }
]

const sites = [
  {
    id: 1,
    index: 1,
    key: 'okzy',
    name: 'OK 资源网',
    api: 'http://cj.okzy.tv/inc/api.php',
    download: 'http://cj.okzy.tv/inc/apidown.php',
    level: 16
  },
  {
    id: 2,
    index: 2,
    key: 'zuidazy',
    name: '最大资源网',
    api: 'http://www.zdziyuan.com/inc/api.php',
    download: 'http://www.zdziyuan.com/inc/apidown.php',
    level: 16
  },
  {
    id: 3,
    index: 3,
    key: 'gaoqingzy',
    name: '高清资源网',
    api: 'http://cj.gaoqingzyw.com/inc/api.php',
    download: 'http://cj.gaoqingzyw.com/inc/apidown.php',
    level: 16
  },
  {
    id: 4,
    index: 4,
    key: 'doubanzy',
    name: '豆瓣电影资源',
    api: 'http://v.1988cj.com/inc/api.php',
    download: 'http://v.1988cj.com/inc/apidown.php',
    level: 16
  },
  {
    id: 5,
    index: 5,
    key: '135zy',
    name: '135 资源网',
    api: 'http://cj.zycjw1.com/inc/api.php',
    download: 'http://cj.zycjw1.com/inc/apidown.php',
    level: 16
  },
  {
    id: 6,
    index: 6,
    key: 'kuyunzy',
    name: '酷云资源',
    api: 'http://caiji.kuyun98.com/inc/ldg_api.php',
    download: 'http://caiji.kuyun98.com/inc/apidown.php',
    level: 16
  },
  {
    id: 7,
    index: 7,
    key: 'subo988',
    name: '速播资源站',
    api: 'https://www.subo988.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 8,
    index: 8,
    key: '209zy',
    name: '209 资源',
    api: 'http://cj.1156zy.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 9,
    index: 9,
    key: 'zuixinzy',
    name: '最新资源',
    api: 'http://api.zuixinapi.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 10,
    index: 10,
    key: 'kubozy',
    name: '酷播资源',
    api: 'http://api.kbzyapi.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 11,
    index: 11,
    key: 'yongjiuzy',
    name: '永久资源',
    api: 'http://cj.yongjiuzyw.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 12,
    index: 12,
    key: '123ku',
    name: '123 资源',
    api: 'http://cj.123ku2.com:12315/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 13,
    index: 13,
    key: '88zyw',
    name: '88 影视资源站',
    api: 'http://www.88zyw.net/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 14,
    index: 14,
    key: 'wolongzy',
    name: '卧龙资源',
    api: 'http://cj.wlzy.tv/inc/api_mac.php',
    download: '',
    level: 16
  },
  {
    id: 15,
    index: 15,
    key: 'mahuazy',
    name: '麻花资源',
    api: 'https://www.mhapi123.com/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 16,
    index: 16,
    key: 'kkzy',
    name: '快快资源',
    api: 'https://api.kkzy.tv/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 17,
    index: 17,
    key: '158zy',
    name: '壹伍捌资源网',
    api: 'http://cj.158zyz.net:158/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 18,
    index: 18,
    key: 'rrzy',
    name: '人人资源',
    api: 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
    download: '',
    level: 16
  },
  {
    id: 19,
    index: 19,
    key: 'mokazy',
    name: '魔卡资源网',
    api: 'https://cj.heiyap.com/api.php/provide/vod/at/xml/',
    download: '',
    level: 16
  },
  {
    id: 20,
    index: 20,
    key: 'kyzy',
    name: '快影资源站',
    api: 'https://www.kyzy.tv/api.php/kyyun/vod/at/xml/',
    download: '',
    level: 16
  },
  {
    id: 21,
    index: 21,
    key: 'khzy',
    name: '快活资源站',
    api: 'https://www.khzyapi.com/api.php/provide/vod/at/xml/',
    download: '',
    level: 18
  },
  {
    id: 22,
    index: 22,
    key: 'smzy',
    name: '神马资源网',
    api: 'http://api.shenmacj.com/api.php/provide/vod/at/xml/',
    download: '',
    level: 18
  },
  {
    id: 23,
    index: 23,
    key: 'xhgcjym',
    name: '小黄瓜资源',
    api: 'http://cj.xhgcjym.com/inc/api.php',
    download: 'http://cj.xhgcjym.com/inc/apidown.php',
    level: 18
  },
  {
    id: 24,
    index: 24,
    key: 'jiali',
    name: '佳丽 TV',
    api: 'https://jialiapi.com/api.php/provide/vod/at/xml/',
    download: '',
    level: 18
  },
  {
    id: 25,
    index: 25,
    key: 'agzy',
    name: '环亚资源',
    api: 'http://wmcj8.com/inc/sapi.php',
    download: '',
    level: 18
  },
  {
    id: 26,
    index: 26,
    key: 'solezy',
    name: '搜乐资源网',
    api: 'https://www.caijizy.vip/api.php/provide/vod/at/xml/',
    download: '',
    level: 16
  },
  {
    id: 27,
    index: 27,
    key: 'lajiaozy',
    name: '辣椒资源',
    api: 'http://api.11bat.com/mac10.php',
    download: '',
    level: 18
  },
  {
    id: 28,
    index: 28,
    key: '9188zy',
    name: '9188 资源',
    api: 'http://cj.vod1769.com/zyapimacc.php',
    download: '',
    level: 18
  },
  {
    id: 29,
    index: 29,
    key: 'bbkdj',
    name: '步步高顶尖资源网',
    api: 'http://api.bbkdj.com/api',
    download: '',
    level: 16
  },
  {
    id: 30,
    index: 30,
    key: '1886zy',
    name: '1886 资源',
    api: 'http://cj.1886zy.co/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 31,
    index: 31,
    key: 'mbo',
    name: '秒播资源',
    api: 'http://caiji.mb77.vip/inc/api.php',
    download: '',
    level: 16
  },
  {
    id: 32,
    index: 32,
    key: 'mgtvzy',
    name: '芒果 TV 资源网',
    api: 'https://api.shijiapi.com/api.php/provide/vod/at/xml/',
    download: '',
    level: 16
  }
]

const getSite = (key) => {
  for (const i of sites) {
    if (key === i.key) {
      return i
    }
  }
}

export {
  setting,
  sites,
  getSite
}