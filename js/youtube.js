var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'sRvz2dc9YEI',
    playerVars: {
        autoplay : true,
        loop : true,
        playlist: 'sRvz2dc9YEI'
    },
    events: {
        onReady: function(event){
            event.target.mute(); //음소거
        }
    }
  });
}