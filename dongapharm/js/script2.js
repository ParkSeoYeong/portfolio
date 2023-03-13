function visualbanner(){
    let $bannerli=$('#visual .banner li');
    let $next=$('#visual .num .next');
    let $prev=$('#visual .num .prev');
    let $current=$('#visual .num .current');
    let $total=$('#visual .num .total');
    let $visualH2=$('#visual .banner li h2');
    let current=0,old=0,size=0,timer=null,interval=5000;
    size=$bannerli.length;
  
    $bannerli.first().css({left:0,opacity:0.5}).animate({opacity:1},1000);
    $total.text('0'+size);
  
    timer=setInterval(visual,interval);
    function visual(){
      current++;
      if(current>size-1){
        current=0;
      }
      if(current != old){
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'});
        $visualH2.css({opacity:0}).animate({opacity:1},2000);
        $current.text('0'+(current+1));
        old=current;
      }
    }
  
    $prev.on('click',function(){
      current--;
      if(current<0){
        current=size-1;
      }
      if(current != old){
        $bannerli.eq(current).stop().css({left:'-100%'}).animate({left:0},400);
        $bannerli.eq(old).stop().css({left:0}).animate({left:'100%'},400);
        $visualH2.stop().css({opacity:0}).animate({opacity:1},2000);
        // $after.css({width:0}).animate({width:90},1000);
        $current.text('0'+(current+1));
        old=current;
      }
      clearInterval(timer);
      timer=setInterval(visual,interval);
    })
  
    $next.on('click',function(){
      current++;
      if(current>size-1){
        current=0;
      }
      if(current != old){
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
        $visualH2.stop().css({opacity:0}).animate({opacity:1},2000);
        $current.text('0'+(current+1));
        old=current;
      }
      clearInterval(timer);
      timer=setInterval(visual,interval);
    })
    
  }