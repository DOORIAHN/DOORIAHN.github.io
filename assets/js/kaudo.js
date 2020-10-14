$(window).resize(resizeWindow=function() {
  if($('#areaLeft:visible').length>0){
    $('#areaTop').addClass('hidden');
  }else{
    $('#areaTop').removeClass('hidden');
  }
});

$(document).ready(function(){
  resizeWindow();

  $('.page__content hr').each(function(idx,obj){
    $('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block;width:100%;min-height:100px;" data-ad-client="ca-pub-5585342941485872" data-ad-slot="7250574567" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>').insertBefore($(this));
  });

});
