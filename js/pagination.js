
$(document).ready (function () {


function newSite() {
    var sites =[ "http://sureshnswamy.github.io/index.html",
                "http://sureshnswamy.github.io/blog/c1-reflection-blog.html",
                'http://sureshnswamy.github.io/blog/c1-time-and-habits-blog.html',
                'http://sureshnswamy.github.io/blog/c2-emotional-intelligence.html'];

    
    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
};
});
