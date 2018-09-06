// window.onload = function () {
//     // alert(1);
//     var li = document.querySelector('.shopping');
//     var p = document.querySelector('.hid');
//     var putDown = document.querySelectorAll('.n_center a');
//     var p_length = putDown.length;
//     var display_frame = document.querySelector('.n_bottom');
//     var display_ul = document.querySelectorAll('.n_bottom ul');
//     var bLi = document.querySelectorAll('.rotate li');
//     var nLi = document.querySelectorAll('.sign li');
//     var a = document.querySelector('.a');
//     var b = document.querySelector('.b');
//     var div = document.querySelectorAll('.countdown div')
//     var sidebar_li = document.querySelectorAll('.sidebar_left .list li');
//     var sidebar_right1 = document.querySelector('.sidebar_right');
//     var sidebar_right2 = document.querySelector('.sidebar_right1');
//     var sidebar_right3 = document.querySelector('.sidebar_right2');
//     var sidebar_right4 = document.querySelector('.sidebar_right3');
//     var sidebar_right5 = document.querySelector('.sidebar_right4');
//     var sidebar_right6 = document.querySelector('.sidebar_right5');
//     var sidebar_right7 = document.querySelector('.sidebar_right6');
//     var sidebar_right8 = document.querySelector('.sidebar_right7');
//     var sidebar_right9 = document.querySelector('.sidebar_right8');
//     var sidebar_right10 = document.querySelector('.sidebar_right9');
//     var appliance_li = document.querySelectorAll('.ul_eight li');
//     var judge_appliance = document.querySelectorAll('.ul_eight li .rank');
//     var length = nLi.length;
//     var timer = null;
//     var index = 0;
//     li.onmouseover = function () {
//         p.style.display = 'block';
//     }
//     li.onmouseout = function () {
//         p.style.display = 'none';
//     }

//     function autoplay() {
//         ++index;
//         if (index >= length) {
//             index = 0;
//         }
//         update(index)
//     }

//     for (var i = 0; i < p_length - 2; i++) {
//         putDown[i].index = i;
//         putDown[i].onmouseover = function () {
//             for (var j = 0; j < p_length; j++) {

//             }
//             display_ul[this.index].style.display = "block";
//             display_frame.style.display = "block";
//             display_frame.style.height = 200 + 'px';
//         }
//         putDown[i].onmouseout = function () {
//             display_frame.style.height = 0 + 'px';
//             display_frame.style.display = "none";
//             display_ul[this.index].style.display = "none";
//         }
//     }

//     function update(num) {
//         for (var j = 0; j < length; j++) {
//             bLi[j].style.display = 'none';
//             nLi[j].className = '';
//         }
//         bLi[num].style.display = 'block';
//         nLi[num].className = 'active';
//     }

//     sidebar_li[0].onmouseover = function () {
//         sidebar_right1.style.display = 'block';
//     }
//     sidebar_li[0].onmouseout = function () {
//         sidebar_right1.style.display = 'none';
//     }
//     sidebar_right1.onmouseover = function () {
//         sidebar_right1.style.display = 'block';
//     }
//     sidebar_li[0].onmouseout = function () {
//         sidebar_right1.style.display = 'none';
//     }
//     sidebar_right1.onmouseout = function () {
//         sidebar_right1.style.display = 'none';
//     }


//     sidebar_li[1].onmouseover = function () {
//         sidebar_right2.style.display = 'block';
//     }
//     sidebar_li[1].onmouseout = function () {
//         sidebar_right2.style.display = 'none';
//     }
//     sidebar_right2.onmouseover = function () {
//         sidebar_right2.style.display = 'block';
//     }
//     sidebar_li[1].onmouseout = function () {
//         sidebar_right2.style.display = 'none';
//     }
//     sidebar_right2.onmouseout = function () {
//         sidebar_right2.style.display = 'none';
//     }

//     sidebar_li[2].onmouseover = function () {
//         sidebar_right3.style.display = 'block';
//     }
//     sidebar_li[2].onmouseout = function () {
//         sidebar_right3.style.display = 'none';
//     }
//     sidebar_right3.onmouseover = function () {
//         sidebar_right3.style.display = 'block';
//     }
//     sidebar_li[2].onmouseout = function () {
//         sidebar_right3.style.display = 'none';
//     }
//     sidebar_right3.onmouseout = function () {
//         sidebar_right3.style.display = 'none';
//     }

//     sidebar_li[3].onmouseover = function () {
//         sidebar_right4.style.display = 'block';
//     }
//     sidebar_li[3].onmouseout = function () {
//         sidebar_right4.style.display = 'none';
//     }
//     sidebar_right4.onmouseover = function () {
//         sidebar_right4.style.display = 'block';
//     }
//     sidebar_li[3].onmouseout = function () {
//         sidebar_right4.style.display = 'none';
//     }
//     sidebar_right4.onmouseout = function () {
//         sidebar_right4.style.display = 'none';
//     }

//     sidebar_li[4].onmouseover = function () {
//         sidebar_right5.style.display = 'block';
//     }
//     sidebar_li[4].onmouseout = function () {
//         sidebar_right5.style.display = 'none';
//     }
//     sidebar_right5.onmouseover = function () {
//         sidebar_right5.style.display = 'block';
//     }
//     sidebar_li[4].onmouseout = function () {
//         sidebar_right5.style.display = 'none';
//     }
//     sidebar_right5.onmouseout = function () {
//         sidebar_right5.style.display = 'none';
//     }


//     sidebar_li[5].onmouseover = function () {
//         sidebar_right6.style.display = 'block';
//     }
//     sidebar_li[5].onmouseout = function () {
//         sidebar_right6.style.display = 'none';
//     }
//     sidebar_right6.onmouseover = function () {
//         sidebar_right6.style.display = 'block';
//     }
//     sidebar_li[5].onmouseout = function () {
//         sidebar_right6.style.display = 'none';
//     }
//     sidebar_right6.onmouseout = function () {
//         sidebar_right6.style.display = 'none';
//     }


//     sidebar_li[6].onmouseover = function () {
//         sidebar_right7.style.display = 'block';
//     }
//     sidebar_li[6].onmouseout = function () {
//         sidebar_right7.style.display = 'none';
//     }
//     sidebar_right7.onmouseover = function () {
//         sidebar_right7.style.display = 'block';
//     }
//     sidebar_li[6].onmouseout = function () {
//         sidebar_right7.style.display = 'none';
//     }
//     sidebar_right7.onmouseout = function () {
//         sidebar_right7.style.display = 'none';
//     }


//     sidebar_li[7].onmouseover = function () {
//         sidebar_right8.style.display = 'block';
//     }
//     sidebar_li[7].onmouseout = function () {
//         sidebar_right8.style.display = 'none';
//     }
//     sidebar_right8.onmouseover = function () {
//         sidebar_right8.style.display = 'block';
//     }
//     sidebar_li[7].onmouseout = function () {
//         sidebar_right8.style.display = 'none';
//     }
//     sidebar_right8.onmouseout = function () {
//         sidebar_right8.style.display = 'none';
//     }

//     sidebar_li[8].onmouseover = function () {
//         sidebar_right9.style.display = 'block';
//     }
//     sidebar_li[8].onmouseout = function () {
//         sidebar_right9.style.display = 'none';
//     }
//     sidebar_right9.onmouseover = function () {
//         sidebar_right9.style.display = 'block';
//     }
//     sidebar_li[8].onmouseout = function () {
//         sidebar_right9.style.display = 'none';
//     }
//     sidebar_right9.onmouseout = function () {
//         sidebar_right9.style.display = 'none';
//     }


//     sidebar_li[9].onmouseover = function () {
//         sidebar_right10.style.display = 'block';
//     }
//     sidebar_li[9].onmouseout = function () {
//         sidebar_right10.style.display = 'none';
//     }
//     sidebar_right10.onmouseover = function () {
//         sidebar_right10.style.display = 'block';
//     }
//     sidebar_li[9].onmouseout = function () {
//         sidebar_right10.style.display = 'none';
//     }
//     sidebar_right10.onmouseout = function () {
//         sidebar_right10.style.display = 'none';
//     }

//     function up_bar() {
//         for (var i = 0 ; i < appliance_li.length; i++){
//             appliance_li[i].index = i;
//             appliance_li[i].onmouseover = function () {
//                 judge_appliance[this.index].style.zIndex = '5';
//                 judge_appliance[this.index].style.height = '70px';
//                 judge_appliance[7].style.display = 'none';
//             }
//             appliance_li[i].onmouseout = function () {
//                 judge_appliance[this.index].style = '0px';
//                 judge_appliance[this.index].style.zIndex = '-1';
//             }
//         }
//     }
//     up_bar(appliance_li,judge_appliance);

//     timer = setInterval(autoplay, 3000);
//     for (var i = 0; i < length; i++) {
//         nLi[i].index = i;
//         nLi[i].onmouseover = function () {
//             clearInterval(timer);
//             index = this.index;
//             update(this.index);
//         }
//         nLi[i].onmouseout = function () {
//             timer = setInterval(autoplay, 3000);
//         }
//     }

//     /* var minute = div[2].innerHTML.replace(/^0/,'');
//     var second = div[4].innerHTML.replace(/^0/,'');
//     var lasttime = parseInt(minute) * 60 + parseInt(second);
//     function format(num){
//         return num < 10 ? '0' +num : num;
//     }
//     function updateTime(){
//         div[2].innerHTML = format(Math.floor(lasttime / 60));
//         div[4].innerHTML = format(Math.floor(lasttime % 60));
//         lasttime--;
//         if(lasttime < 0){
//             clearInterval(timer)
//         }
//     }   

// a.onclick = function(){
//     var currentLeft = parseInt(getComputedStyle(rLi)['left']);
//     if (currentLeft < 0){
//         rLi.style.left = (currentLeft + 1236) + 'px';
//     }
// }
// b.onclick = function () {
//     var currentLeft = parseInt(getComputedStyle(picUl)['left']);
//     if (currentLeft > -6203) {
//         picUl.style.left = (currentLeft - 1236) + 'px';
//     }
// } */


// }