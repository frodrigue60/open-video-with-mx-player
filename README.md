
## Using href property
Using the `<a>` tag in this is a example:

    <a href="intent:http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8#Intent;package=com.mxtech.videoplayer.pro;end">open video</a>
The package has two variants, free and paid version:

 - for free version app use `com.mxtech.videoplayer.pro`
 - for paid version app use `com.mxtech.videoplayer.pro`
## Using JS function
Using a JS function is so similar, you can simply create a button that execute the function:

    <button  onclick="openMxPlayer()">open video</button>
and now create the JS function:
	

    function openMxPlayer() {
            let videoUrl = "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8";
    
            let packageName = "com.mxtech.videoplayer.pro";
    
            let intentUri = "intent:" + videoUrl + "#Intent;package=" + packageName + ";end";
    
            let link = document.createElement("a");
            link.href = intentUri;
    
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

As the **href** method, you has two variants to open the app:
- for free app version use `com.mxtech.videoplayer.pro`
 - for paid app version use `com.mxtech.videoplayer.pro`
