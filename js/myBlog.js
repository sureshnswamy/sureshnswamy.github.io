
$(document).ready (function () {

var pageList = ["http://sureshnswamy.github.io/index.html",
                "http://sureshnswamy.github.io/blog/c1-reflection-blog.html",
                'http://sureshnswamy.github.io/blog/c1-time-and-habits-blog.html',
                'http://sureshnswamy.github.io/blog/c2-emotional-intelligence.html',
                "http://sureshnswamy.github.io/blog/t2-html-css-dom-p1-blog",
                "http://sureshnswamy.github.io/blog/t2-html-css-dom-p2-blog.html",
                "http://sureshnswamy.github.io/blog/t3-design-to-web-blog.html",
                "http://sureshnswamy.github.io/blog/c3-meditation-process.html",
                "http://sureshnswamy.github.io/blog/c4-daily-mindfulness.html",
                "http://sureshnswamy.github.io/blog/t4-javascript-basics.html"
                ];

function getFileName() {
//this gets the full url
var url = document.location.href;

//this removes the anchor at the end, if there is one
url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

//this removes the query after the file name, if there is one
url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

//this removes everything before the last slash in the path
url = url.substring(url.lastIndexOf("/") + 1, url.length);

return url;
}

var page = getFileName(); // e.g. index.html
var currentPosition = pageList.length // e.g. 0, 1 or 2


document.getElementById('next-btn').onclick = function(){
    
   if(currentPosition<pageList.length-1) {
    
    window.location = pageList[++currentPosition];
    
    } else {

        window.location = pageList[0];
    };

};

    /*if(currentPosition==-1) return;
    
    window.location = currentPosition<pageList.length-1? pageList[++currentPosition]:pageList[0];
};*/
});

/*function getUrl(next) { 
    current = document.location.href;
    index = (next) ? 1 : -1;
    for(i = 0;i < pageList.length;i++) {
        if(current.toString().indexOf(pageList[i]) > -1) {
            return (pageList[i + index]);
        }
    }
}

var nextUrl = getUrl(true);
var prevUrl = getUrl(false);

});*/