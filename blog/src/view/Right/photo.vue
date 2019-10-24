<template>
<div id="three" style="	background-color: #3D3D3D;transform :translateX(1366px);position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow: hidden;">
    <router-view></router-view>
  <div id="wrap">
			<!--把所有的照片放在里面 -->
			<img name="photo" src="../../assets/image/img/aomen.png" />
			<img name="photo"  src="../../assets/image/img/xianggang.png" />

			<img name="photo"  src="../../assets/image/img/chengdu.png" />
			<img name="photo"  src="../../assets/image/img/beijing.png" />
			<img name="photo"  src="../../assets/image/img/chongqing.png" />
			<img name="photo"  src="../../assets/image/img/luan.png" />
			<img name="photo"  src="../../assets/image/img/guangzhou.png" />
			<img name="photo"  src="../../assets/image/img/nanjing.png">
			<img name="photo"  src="../../assets/image/img/shanghai.png">

			<img name="photo"  src="../../assets/image/img/shenzhen.png">
			<img name="photo"  src="../../assets/image/img/suzhou.png">
		</div>
</div>
</template>

<script>
export default{
  data () {
    return {
      
		},
		imgsItem=0
  },
  mounted () {
    this.getImage()
  },
  methods: {
    getImage(){
      let _this = this
			var imgs=document.getElementsByName("photo");
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].index=i;
				console.log(imgs[i])
				// 对图片创建点击事件
				var targetIndex = parseInt(imgs.length/2)
				imgs[i].onclick=function(){
         let target = this.index
          console.log(target)
						_this.goNext(target)
        }
        imgs[i].ondblclick=function(){
			document.getElementById('LAYER_TOP').style.display="none"
          _this.$router.push({name:'beijing'})
        }
			}
			// 开始
			for(var i = 1;i<4;i++){
				var itemIndex = (imgs.length+1)/2 - 1
				console.log(itemIndex)
				var left = itemIndex - i
				imgs[left].style.transform='translateX('+(-150*(i))+'px)translateZ('+(150-100*i)+'px)rotateY(30deg)';
				var right = i+itemIndex
				imgs[right].style.transform='translateX('+(150*(i))+'px)translateZ('+(150-100*i)+'px)rotateY(-30deg)';
				imgs[itemIndex].style.transform='translateZ(300px)';
			}
    },
  goNext(target) {
    let imgs=document.getElementsByName("photo");
				var c = target
				console.log(target)
				imgs[c].style.transform='translateZ(300px)';
				if(c>2&&c<8){
					for(var i = 1;i<4;i++){
						var left = c - i
						imgs[left].style.transform='translateX('+(-150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(30deg)';
						var right = c + i
						imgs[right].style.transform='translateX('+(150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(-30deg)';
					}
				}else if(c<3){
					for(var i = 1;i<4;i++){
						var left = c - i
						if(left <0){
							switch (left) {
								case -1:
									left = 10
									break;
								case -2:
									left = 9
									break;
								case -3:
									left = 8
									break;
							}
							imgs[left].style.transform='translateX('+(-150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(30deg)';
						}
						imgs[left].style.transform='translateX('+(-150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(30deg)';
						var right = c + i
						imgs[right].style.transform='translateX('+(150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(-30deg)';
					}
				}else if (c>7){
					for(var i = 1;i<4;i++){
						var left = c - i
							imgs[left].style.transform='translateX('+(-150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(30deg)';
						var right = c + i
						if(right >10){
							switch (right) {
								case 11:
									right = 0
									break;
								case 12:
									right = 1
									break;
								case 13:
									right = 2
									break;
							}
					}
					imgs[right].style.transform='translateX('+(150*i)+'px)translateZ('+(150-100*(i-1))+'px)rotateY(-30deg)';
						}
				}
    }
  },
}
</script>

<style>
body,html{
  margin: 0px;
  padding: 0px;
}
			#wrap{
				width: 100%;
				height:500px;				
				position: relative;
				margin-top: 80px;
				/*一定要有以下样式，才会有3D的效果*/
				/*把div变成3D的场景*/
				transform-style: preserve-3d;
				perspective: 1500px;
			}
			#wrap img{
				/*对所有的图片进行设置样式*/
				width: 400px;
				height:250px;
				/*这里一定要设置为绝对定位*/
				position: absolute;
				/*calc()是一个计算函数  页面的宽度-容器宽度的一半*/
				left: calc(50% - 200px);
				top: calc(50% - 150px);
				border-radius: 7px;
				/*看到图片的运动过程*/
				transition:0.8s ease-in-out;
			}
</style>
