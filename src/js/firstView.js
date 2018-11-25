/**
 * Created by DeLL on 2018/11/25.
 */
export default function () {
  const pointsNodes = document.querySelectorAll('.home .home-points li');
  const carouselNodes = document.querySelectorAll('.home .home-carousel li');
  const homeNode = document.querySelector('.home');
  const pointsLength = pointsNodes.length;
  let nowIndex = 0;
  let lastIndex = 0;
  let lastTime = 0;
  let timer = null;


  for(let i = 0;i < pointsLength;i++){
    pointsNodes[i].onclick = function () {
      //函数的节流
      let nowTime = Date.now();
      if(nowTime - lastTime <= 2500){
        return;
      }

      nowIndex = i;
      if (nowIndex === lastIndex)return;
      if (nowIndex > lastIndex){
        carouselNodes[lastIndex].className = 'common-title leftHide';
        carouselNodes[nowIndex].className = 'common-title rightShow';
      }else {
        carouselNodes[lastIndex].className = 'common-title rightHide';
        carouselNodes[nowIndex].className = 'common-title leftShow';
      }


      //小圆点的变换
      pointsNodes[nowIndex].className = 'active';
      pointsNodes[lastIndex].className = '';
      lastIndex = nowIndex;
      lastTime = nowTime;
    }
  }


  //自动轮播
  function autoPlay() {
    timer = setInterval(() => {
      nowIndex++;
      if(nowIndex === 4) nowIndex = 0;
      carouselNodes[lastIndex].className = 'common-title leftHide';
      carouselNodes[nowIndex].className = 'common-title rightShow';
      pointsNodes[nowIndex].className = 'active';
      pointsNodes[lastIndex].className = '';
      lastIndex = nowIndex;

    },3000)
  }
autoPlay();
  //绑定鼠标移入移除停止轮播事件
  homeNode.onmouseenter = function () {
    clearInterval(timer);
  }
  homeNode.onmouseleave = autoPlay;
}