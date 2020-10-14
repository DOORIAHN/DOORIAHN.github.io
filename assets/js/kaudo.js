$(document).ready(function(){
  console.log('ㅇㄷ');
  if($('#areaLeft:visible').length>0){
    $('#areaTop').addClass('hidden');
  }else{
    $('#areaTop').removeClass('hidden');
  }
});
