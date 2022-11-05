window.onload = function () {
    getData()
}
// 1.定义存放数据的数组
var dataList = [];//定义存放数据的数组
// 2、进行ajax请求的方法  请求完成后 把数据放入dataList
function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/report/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = ajax_.responseText;
                // console.log(typeof data)
                newdata = JSON.parse(data);
                console.log(newdata)
                // 3.调用展示数据的方法
                show();
            } else {
                console.log('加载错误');
            }
        }
    }
}
// 渲染数据
var baogaoleft = document.getElementsByClassName('baogaoleft')[0];
// 3.调用展示数据的方法
// 遍历数据  创建节点  添加至页面
function show() {
    // 创建ul
    var ul_ = document.createElement('ul');
    ul_.setAttribute('id', 'myDiv');
    baogaoleft.appendChild(ul_);

    for (var item of newdata) {

        // 创建节点 li  效果如下   
        var li_ = document.createElement('li');
        var a_ = document.createElement('a');
        var img_ = document.createElement('img');
        var div1_ = document.createElement('div');
        var p_ = document.createElement('p');
        var div2_ = document.createElement('div');
        var div3_ = document.createElement('div');

        var div4_ = document.createElement('div');
        var span1_ = document.createElement('span');
        var span2_ = document.createElement('span');
        var span3_ = document.createElement('span');
        var span4_ = document.createElement('span');
        var span5_ = document.createElement('span');
        a_.setAttribute('href', './xijie.html');
        // img_.setAttribute('class', '');
        img_.setAttribute('width', '700');
        img_.setAttribute('height', '412');
        img_.src = item.img;

        div1_.setAttribute('class', 'info');
        p_.setAttribute('class', 'title');
        p_.innerHTML = item.text;
        div2_.setAttribute('class', 'btm clearfix');
        div3_.setAttribute('class', 'userInfo fl');
        div4_.setAttribute('class', 'icon fr');
        span1_.setAttribute('class', 'avt');
        span2_.setAttribute('class', 'name');
        span2_.innerHTML = item.uName;
        span3_.setAttribute('class', 'time');
        span3_.innerHTML = item.endTime;
        span4_.setAttribute('class', 'zan');
        span4_.innerHTML = item.totalnum;
        span5_.setAttribute('class', 'look');
        span5_.innerHTML = item.num;
        ul_.appendChild(li_);
        li_.appendChild(a_);
        a_.appendChild(img_);
        a_.appendChild(div1_);
        div1_.appendChild(p_);
        div1_.appendChild(div2_);
        div2_.appendChild(div3_);
        div2_.appendChild(div4_);
        div3_.appendChild(span1_);
        div3_.appendChild(span2_);
        div3_.appendChild(span3_);
        div4_.appendChild(span4_);
        div4_.appendChild(span5_);
        var sli_ = document.createElement('li');
        var sa_ = document.createElement('a');
        var sdiv_ = document.createElement('div');
        sa_.setAttribute('href', './xijie.html');
        sdiv_.setAttribute('class', 'click-look');
        sdiv_.innerHTML = '还有 17 篇报告，点击查看';
        sli_.appendChild(sa_);
        sa_.appendChild(sdiv_);
        ul_.appendChild(sli_);

    }
    // <div class="more"><a href="#" id="more">点击加载更多</a></div>

    var divmore_ = document.createElement('div');
    var amore_ = document.createElement('a');
    divmore_.setAttribute('class', 'more');
    amore_.setAttribute('href', '#');
    amore_.setAttribute('id', 'more');
    amore_.innerHTML = '点击加载更多';
    divmore_.appendChild(amore_);
    baogaoleft.appendChild(divmore_);
    var more_ = document.getElementsByClassName('more')[0];
    console.log(more_)
    more_.onclick = function () {
        baogaoleft.removeChild(more_)
        show();
    }
}
