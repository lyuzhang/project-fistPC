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
      for (var j = 0;j < L;j++){
        navLiNodes[j].className = '';
        //console.log(j);
      }
      this.className = 'active';
      arrow.style.left = navLiNodes[i].getBoundingClientRect().left + navLiNodes[i].offsetWidth/2 - arrowWidth + "px";



    }
     //console.log(i);


  }

}