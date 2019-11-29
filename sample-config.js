module.exports = {
  "timeout": 0,
  "animation_speed": 1,
  "misMatch_tolerance": 5,

  "url":{
    "domain": "http://www.domain.com/",
    "pages": [ 
      "",
      "post/1/2",
      "about"
    ]
  },

  "width":{
    "small": 320,
    "medium": 750,
    "large": 1000,
    "xlarge": 1400
  },
  "height": 500,

  "isFullPage": true,
  "quality": 75,

  "folder":{
    "out": "out/",
    "orig": "orig/",
    "diff": "diff/"
  },
  "user_agent":{
    "mobile": "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36",
    "desktop": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
  }
}
