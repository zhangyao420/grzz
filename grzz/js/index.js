$(function(){
    // 侧面导航
    var btn=$('.btn');
    var nav=$('nav');
    var lis=$('.links>li');
    var flag=true;
    btn.click(function(){
        if(flag){
            nav.css({marginLeft:0});
            btn.css({transform:'rotate(90deg)'});
            lis.css({left:0});
            flag=false;
        }else{
            nav.css({marginLeft:'-200px'});
            btn.css({transform:'rotate(0deg)'});
            flag=true;
        }
    });


// 背景图透明度轮播
    var bg=$(".bgimg>div");
    var now=0;
    bg.fadeOut(0).eq(0).fadeIn(0);
    function move2(){
        now++;
        if (now>=bg.length) {
            now=0
        }
        bg.fadeOut(500).eq(now).fadeIn(1000);
    }
    setInterval(move2,5000);

// 文字节点轮播
    /*var bigbox=$(".wzb");
     var bgs=$(".wenzibox");
     var wenzi=$(".wenzi");
     var w=wenzi.width();
     function move(){
     bgs.animate({left:-w},500,function(){
     $(".wenzi:first").appendTo(bgs);
     bgs.css({left:0})
     })
     }
     setInterval(move,3000);*/

    var kg=$('.kaiguan');
    var xq=$('.xiangqing');
    var zp=$('.zp');
    var f=true;
    zp.slideDown(500);
    xq.slideUp(0);
    kg.click(function(){
        xq.stop(true,true);
        zp.stop(true,true);
        if(f){
            xq.slideDown(500);
            zp.slideUp(500);
            kg.css({transform:'rotate(135deg)'});
            f=false;
        }else{
            xq.slideUp(500);
            zp.slideDown(500);
            kg.css({transform:'rotate(0deg)'});
            f=true;
        }
    });


// //工作经验
// var pp=$(".pp");
// var jyan=$(".jyan");
// var ww=jyan.width();
// function moves(){
//     pp.animate({left:-ww},500,function(){
//         $(".jyan:first").appendTo(pp);
//         pp.css({left:0})
//     })
// }
// setInterval(moves,5000);







    $('.link').eq(0).css({color:'#F99F25'});
    $(window).scroll(function(){
        var tops=$(window).scrollTop();
        $(".link").each(function(index){
            if (tops>=$(".louceng").eq(index).offset().top-400) {
                $(".link").css({color:"#fff",borderRight:'2px solid transparent'}).eq(index).css({color:"#F99F25",borderRight:'2px solid #F99F25'})
            }
        }).click(function(){
            nav.css({marginLeft:'-200px'});
            btn.css({transform:'rotate(0deg)'});
            flag=true;
            var index=$(this).index(".link");
            $('.link').css({color:'#fff',borderRight:'2px solid transparent'}).eq(index).css({color:'#F99F25',borderRight:'2px solid #F99F25'});
            if(index<=5){
                var fixdtop={st:tops};
                $(fixdtop).animate({st:$(".louceng").eq(index).offset().top},{
                    speed:1000,
                    step:function(){
                        $(window).scrollTop(fixdtop.st);
                    }
                });
            }
        });
        $(".fanhui").click(function(){
            nav.css({marginLeft:'-200px'});
            btn.css({transform:'rotate(0deg)'});
            flag=true;
            var navtop={st:tops};
            $(navtop).animate({st:1},{
                speed:1000,
                step:function(){
                    $(window).scrollTop(navtop.st)
                }
            })
        });
    });







    var xms=$('.xm');
    var dy=$('.dy');
    var app=$('.app');
    var img=$('.img');
    var yx=$('.yx');
    $('.all').click(function(){
        // img.attr('id','img');
        $('.all').css({color:'#F99F25'});
        $('.pro').css({color:'#777'});
        $('.page').css({color:'#777'});
        $('.apps').css({color:'#777'});
        $('.game').css({color:'#777'});
        xms.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        dy.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        app.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        yx.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
    });
    $('.pro').click(function(){
        // img.attr('id','');
        $('.all').css({color:'#777'});
        $('.page').css({color:'#777'});
        $('.apps').css({color:'#777'});
        $('.game').css({color:'#777'});
        $('.pro').css({color:'#F99F25'});
        xms.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        dy.css({opacity:0,width:0,height:0,margin:0});
        app.css({opacity:0,width:0,height:0,margin:0});
        yx.css({opacity:0,width:0,height:0,margin:0});
    });
    $('.page').click(function(){
        // img.attr('id','');
        $('.all').css({color:'#777'});
        $('.pro').css({color:'#777'});
        $('.apps').css({color:'#777'});
        $('.game').css({color:'#777'});
        $('.page').css({color:'#F99F25'});
        dy.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        xms.css({opacity:0,width:0,height:0,margin:0});
        app.css({opacity:0,width:'360px',height:0,margin:0});
        yx.css({opacity:0,width:0,height:0,margin:0});
    });
    $('.apps').click(function(){
        // img.attr('id','');
        $('.all').css({color:'#777'});
        $('.pro').css({color:'#777'});
        $('.page').css({color:'#777'});
        $('.game').css({color:'#777'});
        $('.apps').css({color:'#F99F25'});
        app.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        xms.css({opacity:0,width:0,height:0,margin:0});
        dy.css({opacity:0,width:0,height:0,margin:0});
        yx.css({opacity:0,width:0,height:0,margin:0});
    });
    $('.game').click(function(){
        // img.attr('id','');
        $('.all').css({color:'#777'});
        $('.pro').css({color:'#777'});
        $('.page').css({color:'#777'});
        $('.apps').css({color:'#777'});
        $('.game').css({color:'#F99F25'});
        yx.css({opacity:1,width:'360px',height:'200px',margin:'20px 20px'});
        xms.css({opacity:0,width:0,height:0,margin:0});
        dy.css({opacity:0,width:0,height:0,margin:0});
        app.css({opacity:0,width:0,height:0,margin:0});
    });




    var nengli=$('.nengli');
    var nlt=nengli.offset().top;
    var left1=$('.left1');
    var left2=$('.left2');
    var right1=$('.right1');
    var right2=$('.right2');
    var htmls=$('.html');
    var csss=$('.css');
    var jss=$('.js');
    var jqs=$('.jq');
    var ajaxs=$('.ajax');
    var h5s=$('.h5');
    var c3s=$('.c3');
    var angus=$('.angu');
    var appx=$('.appx');
    var kcs=$('.kc');
    var xm=$(".xiangmu");
    var imgt=xm.offset().top;
    var imgs=$('.imgs');
    var iconfonts=$('.iconfonts');
    var bq=$('.bq');
    var cnt=$('.contact');
    var tels=$('.tels');
    var email=$('.email');
    var qqs=$('.qqs');
    var weixin=$('.weixin');
    var weibo=$('.weibo');
    var cntt=cnt.offset().top;
    window.onscroll=function(){
        var tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        if (tops>imgt-200) {
            imgs.css({transform:'scale(1,1)'});
        }
        if (tops>cntt-600) {
            iconfonts.css({opacity:1});
            tels.css({top:'20px'});
            email.css({top:'120px'});
            qqs.css({top:'20px'});
            weixin.css({top:'120px'});
            weibo.css({top:'20px'});
            bq.css({opacity:1})
        }
        if (tops>nlt-200) {
            htmls.css({left:'33px'});
            csss.css({right:'732px'});
            jss.css({left:'499px'});
            jqs.css({right:'266px'});
            ajaxs.css({left:'965px'});
            h5s.css({right:'965px'});
            c3s.css({left:'266px'});
            angus.css({right:'499px'});
            appx.css({left:'732px'});
            kcs.css({right:'33px'});
        }else{
            left1.css({left:'-200px'});
            left2.css({left:'-200px'});
            right1.css({right:'-200px'});
            right2.css({right:'-200px'});
        }
    };
    function movex(){
        $(".bottom1").animate({width:"50%"},1000);
        $(".bottom2").animate({width:"50%"},1000);
        $('.wenzi h4').animate({opacity:1},2000);
        $('.wenzi h3').animate({opacity:1},2000);
        $(".left").delay(1000).animate({height:"100%"},1000);
        $(".right").delay(1000).animate({height:"100%"},1000);
        $('.ganyan').delay(1000).animate({opacity:1},2000);
        $(".top1").delay(2000).animate({width:"50px"},2000);
        $(".top2").delay(2000).animate({width:"50px"},2000);
        $('.wzb>h2').delay(3000).animate({opacity:1},1000);

    }
    movex();
});