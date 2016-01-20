
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

    function getFileName(url) {
    //this gets the full url
    document.location=url;

    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);

    return url;
};


document.getElementById('next-btn').onclick = function next(){

    var hr = window.location.href;
    //var page = getFileName(hr);
    var nxtIndex =  pageList.indexOf(hr) + 1 ;
    console.log(hr,nxtIndex);
   
      if(nxtIndex >pageList.length) nxtIndex = 0;
        var redirect = pageList[nxtIndex];
        window.location.href=redirect;
    
    };
    
 

function prev(){
    var hr = window.location.href.splitOnLast("/");
    var page=hr[1].replace("/","");
    var nxtIndex =  pageArray.indexOf(page) - 1 ;
    if(nxtIndex < 0) nxtIndex=pageArray.length-1;
    var redirect = hr[0]+"/"+pageArray[nxtIndex];
    window.location.href=redirect;
}

});