<template>
  <div id="one" style="transform :translateX(1366px);position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow: hidden;">
    <div id="left" style="overflow:auto;width:100%;height: 100%;background-color:black;float:left;overflow-x:hidden">
      <div v-for="(item,index) in imgData" :key="item.id" style="width: 674.5px;height:455px;float:left;position:relative;">
        <transition id="down" name="cead" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut" >
        <div :class="item.id" v-show="seen&&index == curr"   style=" pointer-events: none;width: 635px;height:415px;float:left;background: rgba(32, 32, 33, 0.8);position:absolute;margin-top: 20px;margin-left: 20px;">
          <span class="h" >开始 开始</span>
          <span class="tit">测试 测试 测试 测试 测试</span>
          <i id="icn" class="iconfont icon-b"></i>
        </div>
        </transition>
        <img :src="item.src"  @mouseover="over(index)" @mouseout="out(index)" style="cursor:pointer;width: 674.5px;height:455px;float:left;" >

      </div>
    </div>
    </div>


</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      seen:false,
      curr:0,
      imgData:[
         {
        id:'0',
        src:require('../../assets/image/login.jpg')
        },
        {
        id:'1',
        src:require('../../assets/image/music.jpg')
        },
        {
        id:'2',
        src:require('../../assets/image/xk.jpg')
        },
        {
        id:'3',
        src:require('../../assets/image/br.jpg')
        }
      ]
    }
  },
  methods:{
    over(index){
      this.seen = true
      this.curr = index
    },
    out(index){
      this.seen = false
        this.curr = null;
    }
  // getData(){
  //   for(let i = 0 ;i<this.imgData.length;i++){
  //     let a = document.createElement("div")
  //     a.setAttribute("id","aaa"+i)
  //     a.style.cssText = `  width: 674.5px;height:455px;float:left;`
  //     document.getElementById("left").appendChild(a);
  //     let b = document.createElement("div")
  //     b.setAttribute("id","bbb"+i)
  //     b.style.cssText = `  width: 674.5px;height:455px;float:left;z-index:0;position:relative`
  //     document.getElementById("aaa"+i).appendChild(b);
  //     let c= document.createElement("img")
  //     c.setAttribute("src",`${this.imgData[i].src}`)
  //     c.style.cssText = `  width: 674.5px;height:455px;float:left;`
  //     document.getElementById("bbb"+i).appendChild(c);
  //     let d = document.createElement("div")
  //     d.setAttribute("id","ddd"+i)
  //     d.style.cssText = `  width: 635px;height:415px;float:left;background: rgba(32, 32, 33, 0.8);position:absolute;margin-top: 20px;margin-left: 20px;display:none`
  //     document.getElementById("bbb"+i).appendChild(d);
  //   }
  // }
  },
  watch: {
    seen(val){
      if(this.seen = true){
        document.getElementById('icn').style.transform = "rotate(360deg)"
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

div{
  margin 0px;
}
.icon-b{
  width: 40px;
  height: 40px;
  border-radius: 23px;
  position: absolute;
  left: 20px;
  background-color: #fff;
  bottom: 20px;
}
.h{
 background  linear-gradient(to bottom right, #2fbec3, #B9BFBB);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  position: absolute;
  bottom: 100px;
  margin-left: 20px;
  font-size: 30px;
}
.tit{
  position: absolute;
  bottom: 70px;
  margin-left: 20px;
  font-size: 20px;
  color: wheat;
}
</style>
