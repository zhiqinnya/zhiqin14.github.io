var ua = navigator.userAgent;

if (ua.includes("iPhone") || ua.includes("Android")){
    location.href = "https://ymzx.qq.com/zlkdatasys/mct/d/play.shtml";
}
else if (ua.includes("Windows")){
    location.href = "https://down.pc.yyb.qq.com/channel/1913/2200900000/com_tencent_letsgo_installer.exe"
}
else{
    location.href = "https://gamer.qq.com/v2/cloudgame/game/96897?ichannel=pcgames0Fpcgames1"
}