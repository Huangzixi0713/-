

// 首页js
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
function km() {
    //获取当前时间
    var now_time = new Date();

    // 创建指定时间
    var go_time = new Date(2022, 10, 18);

    //时间差
    var cha = go_time - now_time;

    //把毫秒转为天  时  分  秒退回
    var day = Math.floor(cha / 1000 / 60 / 60 / 24);
    var hour = Math.floor(cha / 1000 / 60 / 60 % 24);
    var min = Math.floor(cha / 1000 / 60 % 60);
    var s = Math.floor(cha / 1000 % 60);

    document.getElementsByClassName('time')[0].innerHTML = '申请时间剩余' + day + '天' + hour + '时' + min + '分' + s + '秒';
}

setInterval(km, 1000);


lijisq.onclick = function () {
    var lijisq = document.getElementById('lijisq');
    var renshu = document.getElementById('renshu');
    var taishu = document.getElementById('taishu');
    var r = renshu.firstChild.nodeValue - 0;
    var t = taishu.firstChild.nodeValue - 0;
    var rensq = document.getElementById('rensq');
    renshu.innerHTML = r + 1;
    taishu.innerHTML = t - 1;
    if (t == 0) {
        alert('当前已售完');
        taishu.innerHTML = '0';
        renshu.innerHTML = '当前已';
        rensq.innerHTML = '售完';
    }
}
var back = document.getElementById('back');

window.onscroll = function () {
    //IE下/火狐下：document.documentElement.scrollTop
    //谷歌下：document.body.scrollTop  滚动上去的页面距离
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    // document.documentElement.clientHeight 当前设备的高度
    var client = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(top,client);
    if (top > client) {
        back.style.display = "block";
    }
    else {
        back.style.display = "none";
    }
    back.onclick = function () {
        // document.documentElement.scrollTop=0;
        // document.body.scrollTop=0;
        var timer = setInterval(function () {
            //获取滚动条距离顶部高度
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-top / 7);
            // console.log(speed);
            // console.log(document.documentElement.scrollTop);
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            // document.documentElement.scrollTop = document.body.scrollTop = 0;
            //到达顶部，清除定时器
            if (top == 0) {
                clearInterval(timer);
            };
        }, 30)
    }
}