/*
$(function(){
    // console.log("Yo");
    $("input").on("click",function(){
        // alert("Hi");
        $("h1").text($("li:first").text());
    });
});

$(function(){
    $("input").on("click",function(){
        $("h1").text($("li:last").text());
    });
});

$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});
*/
let imgs = [
"https://tokyo-kitchen.icook.network/uploads/recipe/cover/398324/cbb643d4814055da.jpg",
"https://tokyo-kitchen.icook.network/uploads/recipe/cover/391516/4a15cb3a501a0c4e.jpg",
"https://tokyo-kitchen.icook.network/uploads/recipe/cover/355834/b8ce15624e2ddb11.jpg",
];


$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",imgs[randomChildNumber]);
    });
});
