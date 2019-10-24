<template>
<!-- 需要优化设计 垃圾 -->
    <div class="beijing" style="z-index:100;position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow:auto;background:black">
            <div class="container" id="container" @click="container">
				  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200">
					<g stroke-width="6.5" stroke-linecap="round">
					<path
						d="M72 82.286h28.75"
						fill="#009100"
						fill-rule="evenodd"
						stroke="#fff"
					/>
					<path
						d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
						fill="none"
						stroke="#fff"
					/>
					<path
						d="M72 125.143h28.75"
						fill="#009100"
						fill-rule="evenodd"
						stroke="#fff"
					/>
					<path
						d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
						fill="none"
						stroke="#fff"
					/>
					<path
						d="M100.75 82.286h28.75"
						fill="#009100"
						fill-rule="evenodd"
						stroke="#fff"
					/>
					<path
						d="M100.75 125.143h28.75"
						fill="#009100"
						fill-rule="evenodd"
						stroke="#fff"
					/>
					</g>
				</svg>
			  </div>
        <div id="wrap">
			<!-- emmet -->
			<!-- ul>li*23>img[src=images/work_$_big.jpg]+div*3 -->
			<ul>
				<li>
					<img src="../../assets/image/images/work_0_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_1_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_2_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_3_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_4_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_5_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_6_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_7_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_8_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_9_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_10_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_11_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_12_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_13_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_14_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_15_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_16_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_17_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_18_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_19_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_20_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_21_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_22_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li>
					<img src="../../assets/image/images/work_23_big.jpg" alt="">
					<div></div>
					<div></div>
					<div></div>
				</li>
			</ul>
		</div>


		<div id="shadowBox"></div>
		<div id="showPic">
			<div class="prev"></div>
			<div class="img">
				<img style="z-index: 1;" src="../../assets/image/images/work_0_big.jpg"/>	<!-- 后面的图片 -->
				<img style="z-index: 2;" src="../../assets/image/images/work_1_big.jpg"/>	<!-- 前面的图片 -->
			</div>
			<div class="next"></div>
		</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        this.getChange()
    },
    methods: {
        getChange(){
            setTimeout(() => {
            let a = document.getElementById('container')
            a.classList.toggle('active')
            }, 100);
        },
        container(){
            document.getElementById('LAYER_TOP').style.display="block"
            let a = document.getElementById('container')
            a.classList.toggle('active')
            this.$router.push('/Photo')
        }
    }
}
</script>
<style lang="stylus" scoped>
body{
    margin: 0;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
img{
    vertical-align: middle;
}


body{
    background: #000;
    overflow-x: hidden;
}
#wrap ul{
    width: 1050px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    transform-style: preserve-3d;   /* 加上这条后就会变成三维空间了 */
    /* transform: translateY(-15%) rotateX(45deg) rotateZ(45deg); */
}
#wrap li{
    width: 330px;
    height: 230px;
    margin-bottom: 30px;
    position: relative;
    background: rgba(255, 255, 255, .5);

}
#wrap li img,#wrap li div{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    transition: 0.3s;
}
#wrap li img{
    z-index: 2;
}

#wrap li div:nth-of-type(1){
    background: #ac5cf5;
    opacity: 0.5;
}
#wrap li div:nth-of-type(2){
    background: #5db4eb;
    opacity: 0.5;
}
#wrap li div:nth-of-type(3){
    background: #5debb4;
    opacity: 0.5;
}

/* 以下是弹出来的效果 */
#wrap li:hover{
    box-shadow: 0 0 50px #fff;
}
#wrap li:hover img{
    transform: translateZ(50px);
}
#wrap li:hover div:nth-of-type(1){
    transform: translateZ(40px);
}
#wrap li:hover div:nth-of-type(2){
    transform: translateZ(30px);
}
#wrap li:hover div:nth-of-type(3){
    transform: translateZ(20px);
}



#shadowBox{
	width: 100%;
	height: 2000px;
	background: rgba(0,0,0,0.5);
	position: absolute;
	left: 0;
	top: 0;
	
	opacity: 0;
	transition: 0.5s;
	display: none;
}
#showPic{
	width: 600px;
	height: 400px;
	box-shadow: 0 0 50px #000;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	
	opacity: 0;
    transition: 0.5s;
    display: none;
	transform: scale(0);
}
.prev,.next{
	width: 50px;
	height: 45px;
	position: absolute;
	/* top: 50%;
	margin-top: -22px; */
	top: 0;
	bottom: 0;
	margin: auto;
	
	cursor: pointer;
	z-index: 2;
}
.prev{
	left: 0;
	background: url(../../assets/image/images/prev.png);
}
.next{
	right: 0;
	background: url(../../assets/image/images/next.png);
}
#showPic .img{
    height: 400px;
	position: relative;
    z-index: 1;

	transform-style: preserve-3d;
	perspective: 500px;
}
#showPic img{
	width: 600px;
	height: 400px;
	position: absolute;
	left: 0;
	top: 0;
	transition: transform .3s;
}

/* 图片张开时候的变换中心点 */
#showPic img.moveToRight{
	transform-origin: left;
}
#showPic img.moveToLeft{
	transform-origin: right;
}
.container {
  cursor: pointer;
  position: fixed;
  top: 32px;
  left: 32px;
}
svg {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.active svg {
  transform: rotate(90deg);
}
path {
      background-color  :#096dd3
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
path:nth-child(1) {
  transform-origin: 36% 40%;
}
path:nth-child(2) {
  stroke-dasharray: 29 299;
}
path:nth-child(3) {
  transform-origin: 35% 63%;
}
path:nth-child(4) {
  stroke-dasharray: 29 299;
}
path:nth-child(5) {
  transform-origin: 61% 52%;
}
path:nth-child(6) {
  transform-origin: 62% 52%;
}
.active path:nth-child(1) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
.active path:nth-child(2) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(3) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(4) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(5) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(6) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
</style>