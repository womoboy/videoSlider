

//add videos
var sourceVideo = ["videos/Part-01.m4v", "videos/Part-02.m4v", "videos/Part-03.m4v"];

var videoCount = sourceVideo.length;

//play videos
let $sliderVideo = document.getElementById('slider-video');
$sliderVideo.setAttribute("src", sourceVideo[0]);
$sliderVideo.load();
$sliderVideo.play();


//automatic play next video
function goNextVideo(){
    
    var findAddress = $sliderVideo.getAttribute("src");
    var findLocation = sourceVideo.indexOf(findAddress);
    var i = findLocation;
    i++;
    if(i >= videoCount){
        i = 0;
    }
    console.log(i);
    $sliderVideo.setAttribute("src", sourceVideo[i]);
    $sliderVideo.load();
    $sliderVideo.play();
    
}