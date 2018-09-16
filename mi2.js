window.onload=function(){
    //购物车
    $(".toptext .rights").mouseenter(function(){
        $(".toptext .rights .hidden").clearQueue().slideDown();
    })
    $(".toptext .rights").mouseleave(function(){
        $(".toptext .rights .hidden").clearQueue().slideUp();
    })



//    轮播图
    let dot=$(".banners .dot ul li");
    let img=$(".banner .imgqw");
    let butL=$(".banner .banners .leftmini");
    let butR=$(".banner .banners .rightmini");
    let now=0;
    let t=setInterval( move,1000);
    function move() {
        now++;
        if(now==5){
            now=0;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dot.removeClass("hots").eq(now).addClass("hots");
    }
    function moveL(){
        now--;
        if (now<0){
            now=4;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dot.removeClass("hots").eq(now).addClass("hots");
    }
    dot.click(function () {
        clearInterval(t);
        let i=$(this).index();
        img.css("z-index",5).eq(i).css("z-index",10);
        dot.removeClass("hots").eq(i).addClass("hots");
        now=i;
    })

    butL.click(function () {
        clearInterval(t);
        moveL();
    })
    butR.click(function () {
        clearInterval(t);
        move();
    })
    $(".banners").mouseenter(function () {
        console.log(1)
        clearInterval(t);
    })
    $(".banners").mouseleave(function () {
        t=setInterval( move,1000);
    })



//侧边选项卡
let ru=$(".leftjpg a");
    let chu=$(".leftjpg a .amaz");
   ru.mouseenter(function () {
       chu.css("display","none");
       $(this).children(".amaz").css("display","flex");
   })
    ru.mouseleave(function () {
        chu.css("display","none");
    })
//小米闪购
    let you=$(".imgbox .Rightt");
   let zuo=$(".imgbox .Leftt");
    let big=$(".bbigg");
    you.click(function () {
        big.css("left","-957px");
    })
    zuo.click(function () {
        big.css("left",0);
    })

//热门
 let four=$(".hotqwe a");
let center=$(".hcenter");
    four.mouseenter(function () {
        let i=$(this).index();
        center.css("display","none").eq(i).css("display","block");
        four.removeClass("active");
        $(this).addClass("active");
    })
    four.triggerHandler("mouseenter");

//为你推荐
    let rit=$(".rrrit");
    let lft=$(".lllft");
    let bigbig=$(".bigfter");
    let times=0;
    rit.click(function () {
        times++;
        if(times==1){
            bigbig.css("left","-1200px");
        }else if(times==2){
            bigbig.css("left","-2400px");
        }else if(times>=3){
            times=2;
        }
    })
    lft.click(function () {
        times--;
        if(times==1){
            bigbig.css("left","-1200px");
        }else if(times==0){
            bigbig.css("left",0);
        }else if(times<0){
            times=0;
        }

    })
//顶部选项卡
    $(".bbgg").mouseenter(function () {
        $(".downla").clearQueue().slideDown();
        $(".downla").css("z-index",99);
        $(this).children(".downla").css("z-index",999);
    })
    $(".bbgg").mouseleave(function () {
        $(".downla").slideUp();
    })
//    图书封装函数
    function tushu(dot,look,Lbut, Rbut) {
        let nows=0;
        let next=0;
        dot.eq(0).addClass("hot");
        look.eq(0).css("left","0");
    dot.click(function () {
        if($(this).index()>nows){
            next++;
            dot.eq(nows).removeClass("hot");
            dot.eq(next).addClass("hot");
            look.eq(nows).animate({left: '-288px'});
            look.eq(next).css("left","288px");
            look.eq(next).animate({left: '0'});
        }else if($(this).index()<nows){
            next--;
            dot.eq(nows).removeClass("hot");
            dot.eq(next).addClass("hot");
            look.eq(nows).animate({left: '288px'});
            look.eq(next).css("left","-288px");
            look.eq(next).animate({left: '0'});
        }
        nows=next;
    })
        Rbut.click(function () {
            next++;
            if(next>=2){
                next=2;
            }
            look.eq(nows).animate({left: '-288px'});
            look.eq(next).css("left","288px");
            look.eq(next).animate({left: '0'});
                dot.eq(nows).removeClass("hot");
            dot.eq(next).addClass("hot");
            nows=next;
        })
        Lbut.click(function () {
            next--;
            if(next<0){
                next=0;
            }
            look.eq(nows).animate({left: '288px'});
            look.eq(next).css("left","-288px");
            look.eq(next).animate({left: '0'});
    dot.eq(nows).removeClass("hot");
        dot.eq(next).addClass("hot");
            nows=next;
        })
    }
    tushu($(".dot31"),$(".looks"),$(".but1"),$(".but2"));
    tushu($(".dot32"),$(".lookq"),$(".but3"),$(".but4"));
    tushu($(".dot33"),$(".lookw"),$(".but5"),$(".but6"));
    tushu($(".dot34"),$(".looke"),$(".but7"),$(".but8"));
//    *********


//    返回顶部
    let back=document.querySelector(".backtop");
    document.onscroll=function(){
        if(document.body.scrollTop || document.documentElement.scrollTop>=900){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
    }
    back.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
}



