var YaMapsShown = false; 

$(window).scroll(function() {
  if (!YaMapsShown){
   if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {      
    showYaMaps();
    YaMapsShown = true;
   }
  }
});

function showYaMaps(){
  var script   = document.createElement("script");
  script.type  = "text/javascript";
  script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3c3e328655a698e92696b1d8b75ee481a87ea86d5603a62a62b659b83c4d66f1&amp;lang=ru_RU&amp;scroll=true';
  $('.map__wrap-resize').append(script);
}