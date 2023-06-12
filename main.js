function openMxPlayer() {
    let videoUrl = "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8";
    
    //com.mxtech.videoplayer.pro for paid version
    //com.mxtech.videoplayer.ad for free version
    let packageName = "com.mxtech.videoplayer.pro";

    let intentUri = "intent:" + videoUrl + "#Intent;package=" + packageName + ";end";

    let link = document.createElement("a");
    link.href = intentUri;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}