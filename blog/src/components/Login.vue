<template>
  <div id="LAYER_ALL">
    <div id="LAYER_MID">
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
                    <div class="smart-object-txt">
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
                  <div class="nav three">Weblog</div>
                  <div class="nav four">Photo  Sessions</div>
                  <div class="nav five" style="margin-top:20px;">Author</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div id="LAYER_TOP">
      <input type="checkbox" class="nav__cb" id="menu-cb">
      <label class="nav__btn" for="menu-cb" @click="change"></label>
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
      cgItem:1,
      isDisabled:false,
      bgImage:[],
      rightImg:[
         {
        id:'1',
        src:require('../assets/image/login.jpg')
        },
        {
        id:'2',
        src:require('../assets/image/music.jpg')
        },
        {
        id:'3',
        src:require('../assets/image/xk.jpg')
        },
        {
        id:'4',
        src:require('../assets/image/br.jpg')
        }
      ]
    }
  },
  mounted () {
    this._begin()
    this.getDate()
  },
  methods: {
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
      if(this.cgItem == 1){
        let min = document.getElementById('smart-object-right')
        min.style.transform = 'translateX(1366px)'
        min.style.transition = 'all 2s'
        let x = document.getElementById('smart-object-left')
        x.style.transform = 'translateX(0px)'
        x.style.transition = 'all 2s'
        this.cgItem = 0
        console.log(this.cgItem)
      }else if(this.cgItem == 0){
        let min = document.getElementById('smart-object-right')
        min.style.transform = 'translateX(0px)'
        min.style.transition = 'all 2s'
        let x = document.getElementById('smart-object-left')
        x.style.transform = 'translateX(-1366px)'
        x.style.transition = 'all 2s'
        this.cgItem = 1
        console.log(this.cgItem)
      }
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
    }
  }
}
</script>

<style lang="stylus" scoped>
#LAYER_ALL{
  backface-visibility: visible;
  position: absolute; 
  width: 100%; 
  height: 100%; 
  overflow: hidden visible;
}
#LAYER_MID{
  position: absolute; 
  z-index: 2; 
  width: 100%; 
  height: 100%;
}
.liImage{
  list-style none
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  position: absolute; transform-style: flat; 
  backface-visibility: hidden; 
  transform: matrix(1, 0, 0, 1, 0, 0); 
  width: 100%; height: 100%; opacity: 1;
  overflow: hidden;
}
img{
  overflow: hidden;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  position: absolute; transform-style: flat; 
  backface-visibility: hidden; 
  transform: matrix(1, 0, 0, 1, 0, 0); 
  width: 100%; height: 100%; opacity: 1;
}
#smart-object-right{
  overflow: hidden;
  position: absolute; transform-style: flat; 
  backface-visibility: hidden; 
  transform: matrix(1, 0, 0, 1, 0, 0); 
  width: 100%; height: 100%; opacity: 1;
  z-index: 3;
}
.smart-object-bg1{
  width 200px
  height 400px
  position absolute
  top 90px
  left 40px
  background-image :url('../assets/image/title.png')
}
.smart-object-bg2{
  width 400px
  height 104px
  position absolute
  top 20px
  left 200px
  background-image :url('../assets/image/tit.png')
}
#LAYER_TOP{
  z-index 100
  width: 46px; height: 46px; 
  border-radius: 23px; 
  position absolute
  left:40px;
  top:40px; 
  background-color #fff
}
.nav__btn {
  position: absolute;
  right: -9px;
  top: 15px;
  width: 46px;
  height: 46px;
  cursor: pointer;
}
.nav__btn:before, .nav__btn:after {
  content: "";
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #096DD3;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s;
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
}
.nav__btn:before {
  margin-bottom: 10px;
}
.nav__btn:hover:before, .nav__btn:hover:after {
  background: #00bdea;
}
.nav__cb:checked ~ .nav__btn:before {
  -webkit-transform: translateY(7px) rotate(-225deg);
          transform: translateY(7px) rotate(-225deg);
}
.nav__cb:checked ~ .nav__btn:after {
  -webkit-transform: translateY(-7px) rotate(225deg);
          transform: translateY(-7px) rotate(225deg);
}
.nav__cb {
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  pointer-events: none;
}
.smart-object-title{
  position: absolute; 
  transform-style: flat; 
  backface-visibility: hidden; 
  transform: translate3d(0px, 0px, 0px); 
  left: 41.9%; 
  top: 130px;
  op: 189px; 
  right: 0px; width: 279px; 
  height: 415px; 
  margin: 0px 40px 0px 0px; 
  display: block; cursor: pointer; 
  z-index: 100; 
  background: transparent;
}
.smart-object-right-top{
  width: 46px; height: 46px; 
  border-radius: 23px; 
  position: absolute; 
  right: 40px;
  background-color: rgb(255, 255, 255);
  bottom: 135px; 
}
.icon-d{
  width: 40px;
  height: 40px;
  border-radius: 23px;
  position: absolute;
  left: 33px;
  background-color: #fff;
  bottom: 150px;
  transform: rotate(0deg);
  transition all 0.5s
}
.smart-object-right-top:hover{
  background: rgba(144,144,144,0.3)
}
.smart-object-right-bottom{
  width: 46px; height: 46px; border-radius: 23px; 
  position: absolute; background-color: rgb(255, 255, 255); right: 40px;
  bottom: 85px; 
}
.smart-object-right-bottom:hover{
  background: rgba(144,144,144,0.3)
}
.smart-object-txt{
  text-align center
  width 100%
  height 277px
}
.ico-title{
  display none
  position relative
  left 30px
  top 45px
  width 200px
  height 20px
  color rgb(255, 251, 240)
}

.smart-object-intro{
  position: relative;
  left: 35px;
  width: 220px;
}
// left 
#smart-object-left{
  position: absolute; transform-style: flat; backface-visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0); top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;
  background-color:black
  transform :translateX(-1366px)
}
.nav{
    color: #B9BFBB
    font-size 32px
}
.nav:hover,.one{
    background  linear-gradient(to bottom right, #2fbec3, #B9BFBB)
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.left-img{
  width 300px
  height 550px
  position absolute
  right 280px
  top 35px
}
.smart-object-txt:hover
 .icon-d{
    transform: rotate(180deg);
    transition all 0.5s
}
.ico-title{
  display block
}
</style>>
