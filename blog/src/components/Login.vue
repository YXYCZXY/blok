<template>

  <div id="LAYER_ALL">
    <div id="LAYER_MID">
        <router-view name="blg"></router-view>
        <div id="smart-object-right" >
          <transition-group id="up" name="cead" enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
            <li class="liImage" v-for="(item,index) in rightImg" :key="item.id" v-show="index === currentIndex">
              <img :src="item.src">
            </li>
          </transition-group>
          <transition-group id="down" name="cead" enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp" >
            <li class="liImage" v-for="(item,index) in rightImg" :key="item.id" v-show="index === currentIndex" >
              <img :src="item.src">
            </li>
          </transition-group>
          <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 100%; height: 100%; overflow: hidden;">
            <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); z-index: 999; width: 663px; height: 100%;">
              <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); display: block; width: 100%; height: auto; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: 20px 0px 20px 20px;">
                <div class="smart-object" style="position: absolute; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); width: 100%; height: 100%;background:rgba(0,0,0,0.6) ">
                  <div class="smart-object-bg1"></div>
                  <div class="smart-object-bg2"></div>
                  <div class="smart-object-title" >
                    <div class="smart-object-txt" @click="seeMore">
                      <span style="position: relative;left: -85px;display: block; font-size: 18px; margin-bottom: 30px; color: rgb(112, 102, 95); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">Case</span>
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
            <div class="smart-object-right-top" @click=" last" ><i class="iconfont icon-s"></i></div>
            <div class="smart-object-right-bottom" @click="next"><i class="iconfont icon-x"></i></div>
          </div>
        </div>

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
                  <div class="nav one">Home</div>
                  <div class="nav two">Music</div>
                  <div class="nav three" @click="blog">Weblog</div>
                  <div class="nav four">Photo  Sessions</div>
                  <div class="nav five" style="margin-top:20px;">Author</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
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
      h:[],
      hIndex:0,
      span:[],
      title:[],
      currentIndex:0,
      carouselTimer:null,
      cgItem:0,
      isDisabled:false,
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
  created () {
    this.getDate()
  },
  mounted () {
    this._begin()
  },
  methods: {
    seeMore(){
      if(this.hIndex == 0){
        this.$router.push('/Right')
        let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(-1366px)'
        min.style.transition = 'all 2s'
      this.cgItem = 2
      }else {
        alert('xxx')
      }
    },
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
      setTimeout(function(){
        _this._begin()
      },8000)
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
        _this._begin()
      },8000)
    },
    autoPlay(){
      this.currentIndex++
      if(this.currentIndex == 4 ){
          this.currentIndex = 0
      }
      this.hIndex++
      if( this.hIndex == 4 ){
        this.hIndex = 0
      }
    } ,
    _begin(){
      let _this = this
      this.carouselTimer = setInterval(function(){
         _this.autoPlay()
      },8000)
      document.getElementById('up').style.display = 'block'
      document.getElementById('down').style.display = 'none'
    },
    change(){
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
      }else{
        let x = document.getElementById('one')
        x.style.transform = 'translateX(1366px)'
        x.style.transition = 'all 2s'
         let min = document.getElementById('LAYER_MID')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        this.cgItem = 0
      }
    },
    blog(){
      this.cgItem = 2
      let x = document.getElementById('smart-object-left')
        x.style.transform = 'translateX(0px)'
        x.style.transition = 'all 2s'
    }
  },
  watch: {
    isDisabled(val){
      let _this = this
      if(this.isDisabled == true){
      setTimeout(function(){
        _this.isDisabled = false
      },5000)
      }
    },
    cgItem(val){
      let _this = this
      if(this.cgItem == 1){
        document.getElementById('nav_after').setAttribute("class","after")
        document.getElementById('nav_before').setAttribute("class","before")
      }else if(this.cgItem == 0){
        document.getElementById("nav_after").classList.remove("after")
        document.getElementById("nav_before").classList.remove("before")
      setTimeout(function(){
        _this.$router.push('/')
      },1000)
      }else if(this.cgItem == 2){
        document.getElementById('nav_after').setAttribute("class","after")
        document.getElementById('nav_before').setAttribute("class","before")
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
.after{
    animation:mymove1 2s 1;
    transform: translateY(-4px) rotate(-225deg);
  }
  .before{
    animation:mymove2 2s 1;
    transform: translateY(6px) rotate(225deg);
    }
#nav_after{
  margin-top 10px;
  }
@keyframes mymove1
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(-4px) rotate(-225deg);}
}
@keyframes mymove2
{
0%   {transform: translateY(0px) rotate(0deg);}
100% {transform: translateY(6px) rotate(225deg);}
}
#LAYER_TOP:hover
  #nav_before,#nav_after{
      background: #00bdea;
    }
</style>>
