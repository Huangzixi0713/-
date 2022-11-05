
window.onload = function () {
    getData()
}
// 1.定义存放数据的数组
var dataList = [];//定义存放数据的数组
// 2、进行ajax请求的方法  请求完成后 把数据放入dataList
function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/hot');
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
var zuirelist = document.getElementsByClassName('zuirelist')[0];
// 3.调用展示数据的方法
// 遍历数据  创建节点  添加至页面
function show() {
    // 创建ul
    var ul_ = document.createElement('ul');
    ul_.setAttribute('class', 'clearfix');
    for (var item of newdata) {

        // 创建节点 li  效果如下   
        var li_ = document.createElement('li');
        var a_ = document.createElement('a');
        var img_ = document.createElement('img');
        var p_ = document.createElement('p');
        var div_ = document.createElement('div');
        var span1_ = document.createElement('span');
        var span2_ = document.createElement('span');
        a_.setAttribute('href', './xijie.html');
        // img_.setAttribute('class', '');
        img_.src = item.img;
        // p_.setAttribute('class', '');
        p_.innerHTML = item.text;
        div_.setAttribute('class', 'clearfix');
        span1_.setAttribute('class', 'xin fl');
        span1_.innerHTML = item.like;
        span2_.setAttribute('class', 'pinglun fl');
        span2_.innerHTML = item.words;
        ul_.appendChild(li_);
        li_.appendChild(a_);
        a_.appendChild(img_);
        a_.appendChild(p_);
        a_.appendChild(div_);
        div_.appendChild(span1_);
        div_.appendChild(span2_);
        // 因为数据加载太快 所以我们加上了延迟
        // 让隐藏加载中的图片稍慢点消失
        zuirelist.appendChild(ul_);
    }
    // <div class="more"><a href="#" id="more">点击加载更多</a></div>
    var divmore_ = document.createElement('div');
    var amore_ = document.createElement('a');
    divmore_.setAttribute('class', 'more');
    amore_.setAttribute('href', '#');
    amore_.setAttribute('id', 'more');
    amore_.innerHTML = '点击加载更多';
    divmore_.appendChild(amore_);
    zuirelist.appendChild(divmore_);
    var more_ = document.getElementsByClassName('more')[0];
    console.log(more_);
    more_.onclick = function () {
        zuirelist.removeChild(more_)
        show();
    }
}
