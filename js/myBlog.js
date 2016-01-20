
$(document).ready (function () {

    var pageList = ["index.html",
                "c1-reflection-blog.html",
                'c1-time-and-habits-blog.html',
                'c2-emotional-intelligence.html',
                "t2-html-css-dom-p1-blog",
                "t2-html-css-dom-p2-blog.html",
                "t3-design-to-web-blog.html",
                "c3-meditation-process.html",
                "c4-daily-mindfulness.html",
                "t4-javascript-basics.html"
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
    var page = getFileName(hr);
    var nxtIndex =  pageList.indexOf(page) + 1 ;
    console.log(page,nxtIndex);
    if(nxtIndex >=pageList.length-1) nxtIndex=0;
    var redirect = 'http://sureshnswamy.github.io/blog/'+pageList[nxtIndex];
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