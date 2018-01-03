var client = (function () {
 
    //呈现引擎
    var engine = {
 
        ie : 0,
        gecko : 0,
        webkit : 0,
        khtml : 0,
        opera : 0,
 
        ver : null
    };
 
    //浏览器版本
    var broswer = {
 
        ie : 0,
        firefox : 0,
        chrome : 0,
        safari : 0,
        konq : 0,
        opera : 0,
 
        ver : null
    };
 
    //平台信息
    var system = {
 
        win : false,
        mac : false,
        x11 : false,
 
        //移动设备
        iphone : false,
        ipod : false,
        ipad : false,
        ios : false,
        andriod : false,
        nokia : false,
        winMobile : false,
 
        //游戏平台
 
        will : false,
        ps : false
    };
 
    //用户代理检测
    var ua = navigator.userAgent;
    //opera会将自己完全伪造成其他浏览器所以先检测它
    if (window.opera){
        engine.opera = broswer.opera = parseInt(engine.ver);
        engine.ver = broswer.ver = window.opera.version();
    }else if (/AppleWebKit\/(\S+)/.test(ua)){
    //webkit引擎的独有特征是AppleWebKit，利用正则表达式来获取版本号
        engine.ver = RegExp.$1;
        engine.webkit = parseInt(engine.ver);
 
        //确认引擎后可以判断浏览器版本,chrome or safari
        if (/chrome\/(\S+)/.test(ua)){
            broswer.ver = RegExp.$1;
            broswer.chrome = parseFloat(broswer.ver);
        }else if (/Version\/(\S+)/.test(ua)){
            broswer.ver = RegExp.$1;
            broswer.safari = parseFloat(broswer.ver);
        }else {
            var safariVersion = 1;
 
            //当判断不出来时，根据引擎版本号来判断浏览器版本
            if (engine.webkit < 100){
                safariVersion = 1;
            } else if (engine.webkit < 312){
                safariVersion = 1.2;
            } else if(engine.webkit < 412){
                safariVersion = 1.3;
            } else{
                safariVersion = 2;
            }
 
            broswer.ver = broswer.safari = safariVersion;
        }
    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/[^;]+/.test(ua)){
        engine.ver = broswer.ver = RegExp.$1;
        engine.konq = broswer.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
        engine.ver = RegExp.$1;
        engine.gecko = parseInt(engine.ver);
 
        //是否是firefox浏览器
        if (/firefox\/(\S+)/i.test(ua)){
            broswer.ver = RegExp.$1;
            broswer.firefox = parseFloat(broswer.ver);
        }
        //如果这里没有检测到的firefox岂不是没有浏览器的版本信息了？
    } else if (/MSIE ([^;]+)/.test(ua)){
        engine.ver = broswer.ver = RegExp.$1;
        engine.ie = broswer.ie = parseFloat(engine.ver);
    }
 
    //检测浏览器，不已经检测过了吗？
    broswer.ie = engine.ie;
    broswer.opera = engine.opera;
 
    //检测平台的开始自动判断平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.xll = (p == "X11" || p.indexOf("Linux") == 0);
 
    if (system.win){
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
            if (RegExp.$1 == "NT"){
                switch(RegExp.$2){
                    case "5.0":
                        system.win = "2000";
                        break;
 
                    case "5.1":
                        system.win = "xp";
                        break;
 
                    case "6.0":
                        system.win = "Visita";
                        break;
 
                    case "6.1":
                        system.win = "7";
                        break;
 
                    default :
                        system.win = "NT";
                        break;
                }
            } else if (RegExp.$1 == "9x"){
                system.win = "ME";
            } else {
                system.win = RegExp.$1;
            }
        }
    }
 
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipod = ua.indexOf("ipod") > -1;
    system.ipod = ua.indexOf("ipad") > -1;
    system.nokia = ua.indexOf("NokiaN") > -1;
 
    //windowMobile
    if (system.win == "CE"){
        system.winMobilem = system.win;
    } else if (system.win == "Ph"){
        if(/Windows Phone OS (\d+.\d+)/.test(ua)){
            system.win = "Phone";
            system.winMobilem = parseFloat(RegExp.$1);
        }
    }
 
    //ios
    if (system.mac $$ ua.indexOf("Mobile") > -1){
        if (/CPU (?:iPhone ) ?OS (\d+.\d+)/.test(ua)){
            system.iso = parseFloat(RegExp.$1.replace("_", "."));
        } else {
            system.iso = 2;
        })
    }
 
    //检测安卓
    if (/Andriod (\d+ \. \d+)/.test(ua)){
        system.andriod = parseFloat(RegExp.$1);
    }
 
    system.will = ua.indexOf("Wii") > -1;
    system.ps = /PLAYSTATION/i.test(ua);
 
    return {
        engine : engine,
        broswer : broswer,
        system : system
    };
 
})();
