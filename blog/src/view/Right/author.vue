<template>
<div id="four" style="transform :translateX(1366px);position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow: hidden;">
  <div id="warpp" style=" overflow-x:hidden;position: absolute; transform-style: flat; backface-visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0); background: rgb(186, 194, 187); width: 1366px; height: 100%; min-height: 100%;opacity: 1; z-index: 2;">
        <div style="position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: rgb(175, 182, 176); min-height: 605px; left: 20px; top: 20px; padding-bottom: 0px; width: 1309px;">
     <!-- 遮罩层 -->
      <div style=" position: absolute;height: 625px; min-height: 605px; width: 1309px;background-color:black"></div>
        <div class="header_photo"></div>
        <div class="header_title"></div>
        <div class="header_title2" ></div>
        <div  class="set_container" style="position: absolute;top: 420px;left: 35.5%;">
          <div class="set_11_buttons animated"> <a href="https://github.com/YXYCZXY" class="facebook"><i class="fa fa-github"></i></a> 
            <!--End of Button 1 --> 
            <a href="#" class="twitter"><i class="fa fa-qq"></i></a> 
            <!--End of Button 2 --> 
            <a  href="#" class="google-plus"><i class="fa fa-weixin"></i></a> 
            <!--End of Button 3 --> 
            <a href="https://weibo.com/5973606000/profile?topnav=1&wvr=6" class="github"><i class="fa fa-weibo"></i></a> 
            <!--End of Button 4 --> 
            <a href="#" class="email"><i class="fa fa-envelope"></i></a> 
            <!--End of Button 5 --> 
          </div>
          <div style="clear:both"></div>
        </div>
      <button @click="get1" style="position: absolute; top: 520px;left: 46%;padding: 15px 14px;cursor: pointer; background-color: transparent;z-index: 100;color: wheat;">RECOGNIZE ME </button>
      <!-- 背景 -->
      <div class="myselef_header">
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="stylus">
body,html{
  margin: 0px;
  padding: 0px;
}
.myselef_header{
  position: relative; transform-style: flat; 
  backface-visibility: hidden; 
  transform: translate3d(0px, 0px, 0px); 
  height: 625px; min-height: 605px; 
  width: 1309px;
  background-image :url('../../assets/image/author/bg.jpg')
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  opacity: 0.4;
}
.header_photo{
  position: absolute;
    left: 44%;
    top: 40px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #FDD;
    background-image :url('../../assets/image/author/header.jpg')
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
.header_title{
    width: 400px;
    height: 250px;
    top: 150px;
    position: absolute;
    left: 35%;
    background-image :url('../../assets/image/author/title.png')
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
.header_title2{
    width: 400px;
    height: 100px;
    top: 330px;
    position: absolute;
    left: 35%;
    background-image :url('../../assets/image/author/title2.png')
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}

// 11  
.set_11_buttons {
  margin-top: 0px;
}
.set_11_buttons > a {
  position: relative;
  font-size: 25px;
  text-align: center;
  display: inline-block;
  color: white;
  z-index: 1;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  border: 0 none;
  line-height: 55px;
  margin: 10px;
  width: 55px;
  height: 55px;
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
}
.set_11_buttons > a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0 none;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s all ease-in-out;
  -moz-transition: 0.5s all ease-in-out;
  -o-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
  z-index: -1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.set_11_buttons > a:hover::before {
  background: #02c39a;
  border-radius: 0;
  border: 0;
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  transform: rotate(225deg);
}
.set_11_buttons > a.facebook:hover::before {
  background: #3b5998;
}
.set_11_buttons > a.twitter:hover::before {
  background: #1cadeb;
}
.set_11_buttons > a.google-plus:hover::before {
  background: #d95232;
}
.set_11_buttons > a.github:hover::before {
  background: #0d2636;
}
.set_11_buttons > a.email:hover::before {
  background: #02c39a;
}
.whtdo{
  width:380px;height:180px;
  float:left;
  margin-top: 80px;
  margin-left: 40px;
  border-radius: 15px;
  border: 2px solid white;
  text-align center
}
</style>
