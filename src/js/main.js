/**
 * Created by DeLL on 2018/11/23.
 */
export default function () {
  //头部点击切换class
  const navLiNodes = document.querySelectorAll('.nav li');
  const arrow = document.querySelector('.arrow');

  const L = navLiNodes.length;
  //缓存小箭头宽度的1/2
  const arrowWidth = arrow.offsetWidth/2;

  arrow.style.left = navLiNodes[0].getBoundingClientRect().left + navLiNodes[0].offsetWidth/2 - arrowWidth + "px";
  for(let i = 0;i < L;i++){
      navLiNodes[i].onclick = function () {
      /*for (var j = 0;j < L;j++){
        navLiNodes[j].className = '';
        //console.log(j);
      }
      this.className = 'active';
      ulNode.style.top = -i * contentHeiht + 'px';
      arrow.style.left = navLiNodes[i].getBoundingClientRect().left + navLiNodes[i].offsetWidth/2 - arrowWidth + "px";
*/
      nowIndex = i;
      move(nowIndex);


    }
     //console.log(i);


  }


  //页面滑动滚轮事件

  let nowIndex = 0;
  const ulNode = document.querySelector('#content>ul');
  const contentNode = document.querySelector('#content');
  const contentHeiht = contentNode.offsetHeight;
  //ie/chrome
  document.onmousewheel = wheel;
  //firefox
  document.addEventListener && document.addEventListener('DOMMouseScroll', wheel);


  function wheel(event) {
    event = event || window.event;

    let flag = '';
    if (event.wheelDelta) {
      //ie/chrome
      if (event.wheelDelta > 0) {
        flag = 'up';
      } else {
        flag = 'down';
      }
    } else if (event.detail) {
      //firefox
      if (event.detail < 0) {
        flag = 'up';
      } else {
        flag = 'down';
      }
    }

    switch (flag) {
      case 'up' :
        //console.log('1');
      /*  nowIndex--;
        if (nowIndex < 0) nowIndex = 0;

        ulNode.style.top = -nowIndex * contentHeiht + 'px';*/
      if (nowIndex > 0){
        nowIndex--;
       /* ulNode.style.top = -nowIndex * contentHeiht + 'px';
          for (var j = 0; j < L; j++) {
            navLiNodes[j].className = '';
            //console.log(j);
          }
          navLiNodes[nowIndex].className = 'active';
          arrow.style.left = navLiNodes[nowIndex].getBoundingClientRect().left + navLiNodes[nowIndex].offsetWidth / 2 - arrowWidth + "px";*/
        move(nowIndex);
      }
        break;
      case 'down' :
        //console.log('2');
        /*nowIndex++;
        if (nowIndex > 4) nowIndex = 4
        ulNode.style.top = -nowIndex * contentHeiht + 'px';
        break;*/
        if (nowIndex < 4){
          nowIndex++;
          /*ulNode.style.top = -nowIndex * contentHeiht + 'px';
          for (var j = 0; j < L; j++) {
            navLiNodes[j].className = '';
            //console.log(j);
          }
          navLiNodes[nowIndex].className = 'active';
          arrow.style.left = navLiNodes[nowIndex].getBoundingClientRect().left + navLiNodes[nowIndex].offsetWidth/2 - arrowWidth + "px";*/
          move(nowIndex);
        }
        break;
    }

    //禁止默认行为
    event.preventDefault && event.preventDefault();
    return false;
  }
  function move(nowIndex) {
      for (var j = 0; j < L; j++) {
        navLiNodes[j].className = '';
        //console.log(j);
      }
      navLiNodes[nowIndex].className = 'active';
      ulNode.style.top = -nowIndex * contentHeiht + 'px';
      arrow.style.left = navLiNodes[nowIndex].getBoundingClientRect().left + navLiNodes[nowIndex].offsetWidth / 2 - arrowWidth + "px";

  }

}