/**
 * Created by DeLL on 2018/11/26.
 */
export default function () {
  const liNodes = document.querySelectorAll('.team-person li');
  const ulNode = document.querySelector('.team-person');
  const liWidth = liNodes[0].offsetWidth;
  const liHeight = liNodes[0].offsetHeight;
  const liNodesL = liNodes.length;
  let canvas = null;
  let createCircleTimer = null;
  let bubbleTimer = null;


  for(let i = 0; i < liNodesL; i++){
    liNodes[i].onmouseenter = function () {
      for (var j = 0; j < liNodesL; j++){
        liNodes[j].style.opacity = 0.5;
      }
      this.style.opacity = 1;
      addCanvas(i);
    }
  }
  ulNode.onmouseleave = function () {
    for (var j = 0; j < liNodesL; j++){
      liNodes[j].style.opacity = 1;
    }
    clearInterval(createCircleTimer);
    clearInterval(bubbleTimer);
    canvas.remove();
    canvas = null;
  }
//创建画布
  function addCanvas(index) {
    if(!canvas){
      //console.log(11111111);
      canvas = document.createElement('canvas');
      canvas.width = liWidth;
      canvas.height = liHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = index * liWidth + 'px';
      bubble();
      ulNode.appendChild(canvas);
    }else {
      canvas.style.left = index * liWidth + 'px';
    }
  }

//气泡运动
  function bubble() {

    let circleArr = [];

    //生成随机圆
    createCircleTimer = setInterval(() => {
      //颜色随机
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);
      //半径随机
      const circle_r = Math.round(Math.random() * 8 + 2);
      //位置随机
      const x = Math.round(Math.random() * liWidth);
      const y = liHeight + circle_r;
      //初始化弧度
      const rad = 0;
      //缩放系数
      const s = Math.round(Math.random() * 50 + 20);

      circleArr.push({
        r,
        g,
        b,
        circle_r,
        x,
        y,
        rad,
        s
      })
    }, 40);

    //画圆
    bubbleTimer = setInterval(() => {
      if (canvas.getContext) {
        //获取画笔
        const ctx = canvas.getContext('2d');
        //在画之前，清除上一次画布
        ctx.clearRect(0, 0, liWidth, liHeight);
        //开始画圆
        circleArr.forEach(item => {
          //每次弧度递增, 速度
          item.rad += 0.1;

          //item.s决定摆动幅度
          const x = Math.round(item.x + Math.sin(item.rad) * item.s);
          const y = Math.round(item.y - item.rad * item.s);

          //设置颜色
          ctx.fillStyle = `rgb(${item.r}, ${item.g}, ${item.b})`;

          ctx.beginPath();

          ctx.arc(x, y, item.circle_r, 0, 2 * Math.PI);

          ctx.fill();

        })
      }
    }, 1000 / 60)
  }

}