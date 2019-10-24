<template>
<!-- 布局 -->
  <div id="LAYER_ALL">
    <div id="LAYER_MID">
      <!-- 动态页面 -->
      <!-- 关于路由的使用 这个需要到时写一个博客 研究一下 -->
        <router-view name="blg"></router-view>
        <router-view name="mic"></router-view>
        <router-view name="pho"></router-view>
        <router-view name="aut"></router-view>

        <!-- 父页面 中间的 -->
        <div id="smart-object-right" >
          <!-- 各种逻辑通过图片的index来实现 -->
          <!-- 生成轮播图 -->
            <!-- transition-group动画效果 -->
          <transition-group id="up" name="cead" enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
            <li class="liImage" v-for="(item,index) in rightImg" :key="item.id" v-show="index === currentIndex">
              <img :src="item.src">
            </li>
          </transition-group>

        <!-- 控制点击 显示图片 -->
          <transition-group id="down" name="cead" enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp" >
            <li class="liImage" v-for="(item,index) in rightImg" :key="item.id" v-show="index === currentIndex" >
              <img :src="item.src">
            </li>
          </transition-group>

          <!-- 内容页面 -->
          <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 100%; height: 100%; overflow: hidden;">
            <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); z-index: 999; width: 663px; height: 100%;">
              <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); display: block; width: 100%; height: auto; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: 20px 0px 20px 20px;">
                <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 100%; height: 100%;background:rgba(0,0,0,0.6) ">
                  <div class="smart-object-bg1"></div>
                  <div class="smart-object-bg2"></div>
                  <div class="smart-object-title" >
                    <!-- 点击出现不同的动态页面 展示内容 -->
                    <div class="smart-object-txt" @click="seeMore">
                      <span style="position: relative;left: -85px;display: block; font-size: 18px; margin-bottom: 30px; color: rgb(112, 102, 95); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">Case</span>
                      <!-- 循环获取不同内容 -->
                      <transition-group name="fade" enter-active-class="animated bounceInLeft" >
                        <li  v-for="(item,index) in h" :key="item.id" v-show="index === hIndex" style="display: block;  list-style none; font-size: 33px; line-height: 35.75px;margin-left: -2px; padding-left: 2px; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                          <span style="display: block; font-size: 33px; line-height: 35.75px; color: rgb(255, 255, 255); margin-left: -2px; padding-left: 2px; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">{{item.msg}}</span>
                        </li>
                      </transition-group>

                      <transition-group name="fade" enter-active-class="animated bounceInRight" >
                        <li  v-for="(item,index) in span" :key="item.id" v-show="index === hIndex" style=" list-style none; display: block; font-size: 33px; line-height: 35.75px; color: rgb(112, 102, 95); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                          <span style="display: block; font-size: 33px; line-height: 35.75px; color: rgb(112, 102, 95); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"><span style="color:#FFCC00">{{item.msg1}}<br>{{item.msg2}}<br>{{item.msg3}}</span></span>
                        </li>
                      </transition-group>

                      <i class="iconfont icon-d"></i>
                      <div class="ico-title" >See more</div>
                    </div>

                    <transition-group name="fade" enter-active-class="animated zoomIn" >
                      <li  v-for="(item,index) in title" :key="item.id" v-show="index === hIndex" style=" list-style none; display: block; font-size: 14px; line-height: 18px; font-family: TheinhardtRegular; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                        <span  class="smart-object-intro" style="display: block; font-size: 14px; line-height: 18px; font-family: TheinhardtRegular; color:#FDD; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                        {{item.msg1}}<br>
                        {{item.msg2}}
                        </span>
                      </li>
                    </transition-group>
                  </div>
                </div>
              </div>
            </div>
            <!-- 控制图片播放 -->
            <div class="smart-object-right-top" @click=" last" ><i class="iconfont icon-s"></i></div>
            <div class="smart-object-right-bottom" @click="next"><i class="iconfont icon-x"></i></div>
          </div>
        </div>

        <!-- 子页面  左边的-->
      <div id="smart-object-left">
        <div class="smart-object" style="margin:0px;position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 1366px; height: 625px; background-color: rgb(82, 84, 83);"></div>
        <div class="smart-object" style="margin:0px;position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(20px, 20px, 0px); width: 1326px; height: 585px; background-color: rgb(93, 95, 94);"></div>
        <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 1366px; height: 625px;">
          <img src="../assets/image/jl.png" class="left-img">
          <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); z-index: 9999; width: 50%; height: 100%; left: 20px;">
            <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); display: block; width: 100%; height: auto; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: 20px 0px 20px 20px;">
              <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 100%; height: 100%; left: -20px;">
                <div class="smart-object-bg1"></div>
                <div class="smart-object-bg2"></div>
                <div class="smart-object-title" >
                  <!-- 动态使得点击改变颜色  :class="{'navone':style0}"   -->
                  <!-- 这个应该有改进的方法 -->
                  <div class="nav " :class="{'navone':style0}" @click="home">Home</div>
                  <div class="nav"  :class="{'navone':style1}" @click="music">Music</div>
                  <div class="nav" :class="{'navone':style2}" @click="blog">Weblog</div>
                  <div class="nav" :class="{'navone':style3}" @click="photo">Photo  Sessions</div>
                  <div class="nav" :class="{'navone':style4}"  @click="author" style="margin-top:20px;">Author</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <!-- 控制icon 控制页面变化 -->
    <!-- 是否有更好的方法 -->
    <div id="LAYER_TOP"   @click="change">
      <label id="nav_before"></label>
      <label id="nav_after"  ></label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return{
      // 控制导航点击颜色
      style0:true,
      style1:false,
      style2:false,
      style3:false,
      style4:false,
      // json中获取信息
      h:[],
      span:[],
      title:[],
      // 闸 控制点击的是父页面还是子页面 来控制动态页面
      navClass:true,
      // 子页面 控制动态页面的值
      itemNav:0,
      //控制展示内容 和 图片 相对应才能展示内容
      hIndex:0,
      currentIndex:0,
      //轮播图片的自动播放
      carouselTimer:null,
      //控制父动态页面的
      cgItem:0,
      //控制图片 文字 的闸
      isDisabled:false,
      //储存图片的数组
      bgImage:[],
      rightImg:[
         {
        id:'0',
        src:require('../assets/image/login.jpg')
        },
        {
        id:'1',
        src:require('../assets/image/music.jpg')
        },
        {
        id:'2',
        src:require('../assets/image/xk.jpg')
        },
        {
        id:'3',
        src:require('../assets/image/br.jpg')
        }
      ]
    }
  },
  // 获取数据
  created () {
    this.getDate()
  },
  // 播放轮播图
  mounted () {
    this._begin()
  },
  methods: {
    // 展示文章内容
    // 位置变化 需要优化 需要研究 列出优化计划
    seeMore(){
      this.navClass = true
      if(this.hIndex == 0){
        this.$router.push('/Right')
        let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      this.cgItem = 2
      }else if(this.hIndex == 1) {
        this.$router.push('/Music')
        let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
        this.cgItem = 3
      }else if(this.hIndex == 2){
        this.$router.push('/Photo')
        let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
        this.cgItem = 4
      }else if(this.hIndex == 3){
        this.$router.push('/Author')
        let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
        this.cgItem = 5
      }
    },
    // 获取json-server中的数据
    getDate(){
      axios.get('http://localhost:3000/h').then((res)=>{
        this.h = res.data
      })
      axios.get('http://localhost:3000/span').then((res)=>{
        this.span = res.data
      })
      axios.get('http://localhost:3000/title').then((res)=>{
        this.title = res.data
      })
    },
    // 上下移动控制
    // 节流方法研究
    last(){
      document.getElementById('up').style.display = 'block'
      document.getElementById('down').style.display = 'none'
      clearInterval(this.carouselTimer)
      let _this = this
      if(this.isDisabled == false){
          this.currentIndex++
           this.hIndex ++
          this.isDisabled = true
      }
      if(this.currentIndex == 4 ){
      this.currentIndex = 0
      }
      if( this.hIndex == 4 ){
        this.hIndex = 0
      }
    },
    next(){
      document.getElementById('up').style.display = 'none'
      document.getElementById('down').style.display = 'block'
      clearInterval(this.carouselTimer)
      let _this = this
      if(this.isDisabled == false){
          this.currentIndex--
           this.hIndex --
          this.isDisabled = true
      }
      if(this.currentIndex == -1 ){
      this.currentIndex = 3
      }
      if( this.hIndex == -1 ){
        this.hIndex = 3
      }
      setTimeout(function(){
      document.getElementById('up').style.display = 'block'
      document.getElementById('down').style.display = 'none'
      },5000)
    },
    // 自动播放
    autoPlay(){
      this.currentIndex++
      console.log('问题2',this.currentIndex)
      if(this.currentIndex == 4 ){
          this.currentIndex = 0
      }
      this.hIndex++
      if( this.hIndex == 4 ){
        this.hIndex = 0
      }
    } ,
    // 启动自动播放
    _begin(){
      let _this = this
      this.carouselTimer = setInterval(function(){
         _this.autoPlay()
      },5000)
      document.getElementById('up').style.display = 'block'
      document.getElementById('down').style.display = 'none'
    },
    // 图标 变化 需要优化
    change(){
       let _this = this
      if(this.navClass == false){
        if(this.itemNav == 3){
          let min = document.getElementById('LAYER_MID')
          min.style.transform = 'translateX(0px)'
          min.style.transition = 'all 2s'
          this.itemNav = 1
          // 时间控制器
          setTimeout(function(){
            _this.$router.push('/')
          },2000)
        }else if( this.itemNav == 1){
        let a = document.getElementById('smart-object-left')
        a.style.transform = 'translateX(-1366px)'
        a.style.transition = 'all 2s'
      let b = document.getElementById('smart-object-right')
        b.style.transform = 'translateX(0px)'
        b.style.transition = 'all 2s'
        this.cgItem = 0
        this.navClass = true
        }
      }else if(this.navClass == true) {
      if(this.cgItem == 0){
        let min = document.getElementById('smart-object-right')
        min.style.transform = 'translateX(1366px)'
        min.style.transition = 'all 2s'
        let x = document.getElementById('smart-object-left')
        x.style.transform = 'translateX(0px)'
        x.style.transition = 'all 2s'
        this.cgItem = 1
        console.log(this.cgItem)
      }else if(this.cgItem == 1){
        let min = document.getElementById('smart-object-right')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        let x = document.getElementById('smart-object-left')
        x.style.transform = 'translateX(-1366px)'
        x.style.transition = 'all 2s'
        this.cgItem = 0
      }else if(this.cgItem == 2){
        let x = document.getElementById('one')
        x.style.transform = 'translateX(1366px)'
        x.style.transition = 'all 2s'
         let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        this.cgItem = 0
      }else if(this.cgItem == 3){
        let x = document.getElementById('two')
        x.style.transform = 'translateX(1366px)'
        x.style.transition = 'all 2s'
         let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        this.cgItem = 0
      }else if(this.cgItem == 4){
        let x = document.getElementById('three')
        x.style.transform = 'translateX(1366px)'
        x.style.transition = 'all 2s'
         let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        this.cgItem = 0
      }else if(this.cgItem == 5){
        let x = document.getElementById('four')
        x.style.transform = 'translateX(1366px)'
        x.style.transition = 'all 2s'
         let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        this.cgItem = 0
      }
      }
    },
    // 导航  样式控制需要优化
    home(){
       this.style2 = false; this.style0 = true;this.style1 = false;this.style3 = false;this.style4 = false;
         let a = document.getElementById('smart-object-left')
        a.style.transform = 'translateX(-1366px)'
        a.style.transition = 'all 2s'
      let b = document.getElementById('smart-object-right')
        b.style.transform = 'translateX(0px)'
        b.style.transition = 'all 2s'
        this.cgItem = 0
        this.navClass = true
    },
    blog(){
      this.style2 = true; this.style0 = false;this.style1 = false;this.style3 = false;this.style4 = false;
      this.navClass = false
      this.itemNav = 3
      this.$router.push('/Right')
      let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      let a = document.getElementById('smart-object-right')
        a.style.transform = 'translateX(2732px)'
        a.style.transition = 'all 2s'
    },
    photo(){
      this.style2 = false; this.style0 = false;this.style1 = false;this.style3 = true;this.style4 = false;
      this.navClass = false
      this.itemNav = 3
      this.$router.push('/Photo')
      let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      let a = document.getElementById('smart-object-right')
        a.style.transform = 'translateX(2732px)'
        a.style.transition = 'all 2s'
    },
    author(){
      this.style2 = false; this.style0 = false;this.style1 = false;this.style3 = false;this.style4 = true;
      this.navClass = false
      this.itemNav = 3
      this.$router.push('/Author')
      let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      let a = document.getElementById('smart-object-right')
        a.style.transform = 'translateX(2732px)'
        a.style.transition = 'all 2s'
    },
    music(){
      this.style2 = false; this.style0 = false;this.style1 = true;this.style3 = false;this.style4 = false;
      this.navClass = false
      this.itemNav = 3
      this.$router.push('/Music')
      let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      let a = document.getElementById('smart-object-right')
        a.style.transform = 'translateX(2732px)'
        a.style.transition = 'all 2s'
    }
  },
  // 检测器
  watch: {
    isDisabled(val){
      let _this = this
      if(this.isDisabled == true){
      setTimeout(function(){
        _this.isDisabled = false
      },5000)
      }else{
        this._begin()
      }
    },
    // 样式改变需要优化
    cgItem(val){
      let _this = this
       if(this.cgItem == 0){
        document.getElementById("nav_after").classList.remove("after1")
        document.getElementById("nav_before").classList.remove("before1")
        document.getElementById("nav_after").classList.remove("after2")
        document.getElementById("nav_before").classList.remove("before2")
        document.getElementById("nav_after").classList.remove("after3")
        document.getElementById("nav_before").classList.remove("before3")
      setTimeout(function(){
        _this.$router.push('/')
      },2000)
      }else if(this.cgItem == 1){
        document.getElementById('nav_after').setAttribute("class","after1")
        document.getElementById('nav_before').setAttribute("class","before1")
      } else if(this.cgItem == 2 ||this.cgItem == 3||this.cgItem == 4||this.cgItem == 5){
        document.getElementById('nav_after').setAttribute("class","after2")
        document.getElementById('nav_before').setAttribute("class","before2")
      }
    },
    itemNav(val){
      let _this = this
      if(this.itemNav == 3){
        document.getElementById('nav_after').setAttribute("class","after3")
        document.getElementById('nav_before').setAttribute("class","before3")
      }else if(this.itemNav == 1 || this.itemNav == 0){
        document.getElementById('nav_after').setAttribute("class","after1")
        document.getElementById('nav_before').setAttribute("class","before1")
        // 控制 smart-object-right 回到原位 不然使用transform会出错
        let b = document.getElementById('smart-object-right')
        b.style.transform = 'translateX(1366px)'
        b.style.transition = 'all 2s'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/login.styl";
#nav_before,#nav_after{
  position: absolute;
  right: 9px;
  top: 15px;
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #096DD3;
    transition all 1s
}
.after1{
    animation:mymove1 2s 1;
     transform: translateY(4px) rotate(-225deg);
  }
  .before1{
    animation:mymove2 2s 1;
    transform: translateY(-3px) rotate(225deg);
    }
.after2{
    animation:mymove3 2s 1;
    transform: translateY(-13px) rotate(-225deg);
  }
.before2{
    animation:mymove4 2s 1;
   transform: translateY(15px) rotate(225deg);
  }
.after3{
    animation:mymove5 2s 1;
    transform: translateY(-13px) rotate(-225deg);
  }
.before3{
    animation:mymove6 2s 1;
    transform: translateY(15px) rotate(225deg);
  }
#nav_after{
  margin-top 10px;
  }
@keyframes mymove1
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(4px) rotate(-225deg);}
}
@keyframes mymove2
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(-3px) rotate(225deg);}
}
@keyframes mymove3
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(-13px) rotate(-225deg);}
}
@keyframes mymove4
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(15px) rotate(225deg);}
}
@keyframes mymove5
{
0%   {transform: translateY(4px) rotate(-225deg);}
100% {transform: translateY(-13px) rotate(-225deg);}
}
@keyframes mymove6
{
0%    {transform: translateY(-3px) rotate(225deg);}
100% {transform: translateY(15px) rotate(225deg);}
}
#LAYER_TOP:hover
  #nav_before,#nav_after{
      background: #00bdea;
    }
</style>>
