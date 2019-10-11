<template>
<div id="four" style="transform :translateX(1366px);position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow: hidden;">
  <div @click="get1" id="top" class=" iconfont icon-sjt" style="width: 50px;height: 50px;border-radius: 50%;z-index: 100;bottom: 20px;right: 60px;position: fixed;background-color: powderblue"></div>
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
      <button @click="get1" id="mf" style="position: absolute; top: 520px;left: 46%;padding: 15px 14px;cursor: pointer; background-color: transparent;z-index: 100;color: wheat;">RECOGNIZE ME </button>
      <!-- 背景 -->
      <div class="myselef_header">
      </div>
    </div>

    <div style=" position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: white;  min-height: 605px; padding-bottom: 0px; left:20px;width: 1309px;">
      <div style=" width: 100%;padding-right: 15px;padding-left: 15px;">
          <h4 style=" margin: 0px;font-size: 1.5rem;margin-top: 10px;padding-left: 150px;padding-top: 13px;">Myself</h4>
          <hr style="margin:0;width: 1309px;position: absolute;top: 60px;left: 0px;"/>
          <div id="hadSele" @click="hadSele" style="position: absolute;width: 50px;height: 50px;background: black;top: 6px;right: 300px;border-radius: 5px;">
              <label class="author_lable"></label>
              <label  class="author_lable" style="margin-top: 15px;"></label>
          </div>
      </div>
      <!-- <transition id="down" name="cead" enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp" > -->
      <ul v-show="menu" style=" text-align:center;width: 176px;height: 240px;padding: 0px;margin: 0px;background:black;position: absolute;top: 55px;right: 298px;border-radius: 16px;z-index:100">
          <li id="he" class="author_li" @click="get1" >Home</li>
          <li id="mf" class="author_li" @click="get1" style="background: #33cc99" >Myself</li>
          <li id="wo" class="author_li" @click="get1" >What i do</li>
          <li id="me" class="author_li" @click="get1">My Resume</li>
          <li id="ps" class="author_li"  @click="get1" >Projects</li>
          <li id="bg" class="author_li" @click="get1" >Blog</li>
      </ul>
      <!-- </transition> -->
      <div style="width: 100%;height: 563px; margin-top: 17px;">
          <h3 class="tittle-2" style="    font-size: 24px;color: #444444;position: absolute;transform: rotate(-90deg);left: -50px;letter-spacing: 8px;top: 10%;">About Myself</h3>
          <img src="http://5b0988e595225.cdn.sohucs.com/images/20180619/0ff6dfc34aeb4ffe9e8f9a85da373482.jpeg" style="width: 400px;position: absolute;top: 7%;left: 162px;">
            <div style="    top: 95px;left: 43%;position: absolute;">
              <img src="../../assets/image/author/name1.png" >
              <img style="position: relative;right: 40px;top: 5px;" src="../../assets/image/author/name2.png" >
            </div>
            <span class="author_span">一个对前端充满兴趣的 IT青年 <br/>
            学的专业并不是纯IT专业 交叉专业 地理信息系统（GIS）<br/>
            对我来说前端 是用来起交互展示作用的，重点是展示<br/>
            前端应该像艺术般设计页面展示页面 <br/>
            把脑子所想的给 炫酷点、优美点给表现出来<br/>
            让人第一眼看到就被吸引 展现出炸街般的效果 <br/>
            所以 这就是我所想前进的方向 炸街般的视觉前端
            </span>
    </div>

    <div style=" position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: white; height: 100%; min-height: 605px; padding-bottom: 0px; width: 1309px;">
      <div style="width:1307px;height:64px;border:1px solid #fff;border-top-color: #999999;display:block;">
        <div style="position: absolute;left: 33%;top: -5px;width:450px;height:64px;
        background-image :url('http://www.diyiziti.com/Res/Images//Temp/427/8c52328273f5403aa9cb5ad880af90c7.PNG')"></div>
      </div>
      
      <div class="whtdo" style="border-bottom-color: #00a3e2;">
        <div  class="iconfont icon-pmsj" style="width:80px;height:80px;background-color: #00a3e2;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">平面设计</h3>
        <p style="margin-top: 45px;color: #676666;">根据需要设计出所需要的图形、符号</p>
      </div>

      <div class="whtdo" style="border-bottom-color: #e53b2c;">
        <div class="iconfont icon-cx" style="width:80px;height:80px;background-color: #e53b2c;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">创新思想</h3>
        <p style="margin-top: 45px;color: #676666;">有着与时俱进的创新思想</p>
      </div>

      <div class="whtdo" style="border-bottom-color: #fabd42;">
        <div class="iconfont icon-wysj" style="width:80px;height:80px;background-color: #fabd42;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">网页设计</h3>
        <p style="margin-top: 45px;color: #676666;">为网页布局进行设计，达到美观、炫酷、便捷</p>
      </div>

      <div class="whtdo" style="border-bottom-color: #0ca750;">
        <div class="iconfont icon-sj" style="width:80px;height:80px;background-color: #0ca750;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">数据处理</h3>
        <p style="margin-top: 45px;color: #676666;">对收集到的数据进行整理分析</p>
      </div>

      <div class="whtdo" style="border-bottom-color: #6441a5;">
        <div class="iconfont icon-GIS" style="width:80px;height:80px;background-color: #6441a5;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">GIS</h3>
        <p style="margin-top: 45px;color: #676666;">能够使用GIS专业的知识去解决问题</p>
      </div>

      <div class="whtdo" style="border-bottom-color: brown;">
        <div class="iconfont icon-dt" style="width:80px;height:80px;background-color: brown;transform: rotate(45deg);position: relative;top: -60px;left: 150px;"></div>
        <h3 style="margin: -20px">地图设计</h3>
        <p style="margin-top: 45px;color: #676666;">关于地图方面能够提供解决方法 分析 设计地图</p>
      </div>
    </div>
    <hr style="margin:0;width:1307px;height:1px" />
    <div style=" position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: white; height: 100%; min-height: 605px; padding-bottom: 0px;width: 1309px;">
      <h3 class="tittle-2" style="font-size: 24px; color: rgb(68, 68, 68); position: absolute; transform: rotate(-90deg); left: -20px; letter-spacing: 8px; top: 40%;">My Resume</h3>
      <div class="resume" ></div>
      <div class="resume_txt">

        <div class="resume_xl" style="width:120px;height:50px;float: left;margin-top: 10px;margin-left: 40px;border: 1px solid #E3E3E3;cursor:pointer;" @click="resumeChangeXL">
          <i style="font-size: 30px;position: relative;left: 10px;top: -2px;" class="iconfont icon-bs"></i>
          <p :class="{'active':isAction}" style="font-weight: 600;font-size:16px;margin:0;position: absolute; top: 27px;left: 100px;">学历</p>
        </div>

        <div class="resume_jy"  style="width:120px;height:50px;float: left;margin-top: 10px;margin-left: 20px;border: 1px solid #E3E3E3;cursor:pointer;" @click="resumeChangeJY">
          <i style="font-size: 23px;position: relative;left: 10px;" class="iconfont icon-jy"></i>
          <p :class="{'active':isAction2}" style="font-weight: 600;font-size:16px;margin:0;position: relative;top: -9px;left: 60px;">经验</p>
        </div>

        <div class="txt_xl" v-show="txt_xl" style="position: relative;top: 100px;width: 617px;height: 400px;">
          <div style="width:617px;height:138px">
            <h4 style="font-size: 26px;color: #333;font-weight: 600;letter-spacing: 1px;position: absolute;margin:0px">学士文凭</h4>
            <h6 style="font-size: 18px;letter-spacing: 1px;color: #555;font-style: italic;font-family: initial;position: absolute;left: 20px;">2018-2021</h6>
            <p style="position: absolute;top: 60px;letter-spacing: 1px;line-height: 1.9;color: #999;font-family: 'Source Sans Pro', sans-serif;align:left">毕业于安徽省滁州市滁州学院</p>
          </div>
        </div>
        <div class="txt_jy" v-show="txt_jy" style="position: relative;top: 100px;width: 617px;height: 400px;">

           <div style="width:617px;height:138px">
            <h4 style="font-size: 26px;color: #333;font-weight: 600;letter-spacing: 1px;position: absolute;margin:0px">在校期间</h4>
            <h6 style="font-size: 18px;letter-spacing: 1px;color: #555;font-style: italic;font-family: initial;position: absolute;left: 20px;">2018-2021</h6>
            <p style="position: absolute;top: 60px;letter-spacing: 1px;line-height: 1.9;color: #999;font-family: 'Source Sans Pro', sans-serif;align:left">跟随学校老师，进行学习</p>
          </div>

          <div style="width:617px;height:138px">
            <h4 style="font-size: 26px;color: #333;font-weight: 600;letter-spacing: 1px;position: absolute;margin:0px">实习期间</h4>
            <h6 style="font-size: 18px;letter-spacing: 1px;color: #555;font-style: italic;font-family: initial;position: absolute;left: 20px;">2019.5-2019.11</h6>
            <p style="position: absolute;top: 200px;letter-spacing: 1px;line-height: 1.9;color: #999;font-family: 'Source Sans Pro', sans-serif;">校外实习，苏州园区测绘进行前端工程师实习</p>
          </div>

        </div>
      </div>
    </div>

    <div style=" position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: white; height: 100%; min-height: 605px; padding-bottom: 0px;width: 1309px;">
      <hr style="margin:0" />
      <div class="project_bg"></div>
      <div class="myProject">
        <div class="project1" style="position: relative; width:300px;height:300px;margin-left: 25px; cursor:pointer;">
          <div class="zz1" style="text-align:center">
              <span class="project_span">
                Vue Music 基于vue制作的简易播放器
              </span>
          </div>
          <img style="width:300px;height:300px" src="http://img3.duitang.com/uploads/item/201506/26/20150626083140_KxBJj.thumb.700_0.jpeg">
        </div>
        <div class="project2" style="position: relative; width:300px;height:200px;background-color:black;margin-left: 25px;margin-top: 11px;cursor:pointer;">
          <div class="zz2" style="text-align:center">
              <span class="project_span">
                使用D2 Admin 模板制作 一个前端项目 
              </span>
          </div>
          <img style="width:300px;height:200px" src="http://thumbs.dreamstime.com/z/%E9%BB%91%E8%89%B2%E8%8A%B1%E7%BA%B9%E8%8A%B1%E6%A0%B7-20610229.jpg" >
        </div>
        <div class="project3" style="position: relative; width:300px;height:200px;background-color:black;position: absolute;top: 0px;left: 350px;cursor:pointer;">
          <div class="zz2" style="text-align:center">
              <span class="project_span">
                个人博客网站
              </span>
          </div>
          <img src="http://pic1.win4000.com/wallpaper/f/58b3ee264514a_270_185.jpg" style="width:300px;height:200px;">
        </div>
        <div  class="project4" style="position: relative; width:300px;height:300px;background-color:black;position: absolute; bottom: 0;left: 350px;cursor:pointer;">
          <div class="zz1" style="text-align:center">
              <span class="project_span">
                Vue Music 第二版
              </span>
          </div>
          <img style="width:300px;height:300px;" src="http://b-ssl.duitang.com/uploads/item/201511/02/20151102010720_yXnhP.thumb.224_0.jpeg">
        </div>
        <div class="project5" style="position: relative; width:300px;height:300px;background-color:black;position: absolute;top: 0px;right: 25px;cursor:pointer;">
          <div class="zz1" style="text-align:center">
              <span class="project_span">
                  收藏的冴羽写博客的地方
              </span>
          </div>
          <img src="http://img1.imgtn.bdimg.com/it/u=1973660092,879923187&fm=26&gp=0.jpg" style="width:300px;height:300px;">
        </div>
        <div class="project6" style="position: relative; width:300px;height:200px;background-color:black;position: absolute;right: 25px;bottom: 0;cursor:pointer;">
          <div class="zz2" style="text-align:center">
              <span class="project_span">
                  持续更新
              </span>
          </div>
          <img src="http://0.image.al.okbuycdn.com/images/multipic/4/20140722/59e13edd2bd23265c1995189c57d6da4.jpg" style="width:300px;height:200px;">
        </div>
        </div>
    </div>

    <hr style="margin:0;width:0px" />

    <div style=" position: relative; transform-style: flat; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);  background-color: white; height: 100%; min-height: 605px; padding-bottom: 0px; width: 1309px;">
      <h3 style="color: #343a40;font-size:36px;margin:0;position: absolute;top: 15px;left: 42.5%;">最近的博客</h3>
      <div style="width:1140px;height:500px;position: absolute;top: 100px;left: 80px;">
        <div style="width:330px;height:500px;float:left;margin-left: 38px;">
          <img style="width:330px;height:200px;margin-top: 50px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570612370831&di=b47cacd7ab6a38840495bb6386834588&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170715%2F4c5624594cdc40a487ba203715eb1e29.gif" >
          <a style="color: #b9b9b9; text-transform: uppercase;font-size: 12px;word-spacing: 3px;letter-spacing: 1px;">2019年2月2日</a>
          <a class="blog" href="https://blog.csdn.net/weixin_43055079/article/details/100246311" style="position: absolute;left: 37px;top: 288px;text-decoration: none;font-size: 22px;">基于Vue 制作的简单的音乐播放器</a>
          <p style="margin-top: 60px;color: rgb(185, 185, 185);text-transform: uppercase;font-size: 14px;word-spacing: 3px;letter-spacing: 1px;">通过根据github上的http://www.daiwei.org/components/d-audio/，把他用纯ES6写的播放器用vue来制作完成</p>
        </div>
        <div style="width:330px;height:500px;float:left;margin-left: 37px;">          
          <img style="width:330px;height:200px;margin-top: 50px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570612489420&di=e77ede53d02b1229550451cb2f2d0dae&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F361221833.jpeg" >
          <a style="color: #b9b9b9; text-transform: uppercase;font-size: 12px;word-spacing: 3px;letter-spacing: 1px;">2019年5月22日</a>
          <a class="blog" href="https://blog.csdn.net/weixin_43055079/article/details/100246311" style="position: absolute;left: 407px;top: 288px;text-decoration: none;font-size: 22px;">实现数组随机抓取数据 <br/>实现比赛抽签功能</a>
          <p style="margin-top: 80px;color: rgb(185, 185, 185);text-transform: uppercase;font-size: 14px;word-spacing: 3px;letter-spacing: 1px;">目的是想要实现点击按钮 随机实现比赛的抽签</p>
        </div>
        <div style="width:330px;height:500px;float:left;margin-left: 37px;">
          <img style="width:330px;height:200px;margin-top: 50px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570612541774&di=17ec07139a7ce9b8f847042903b7983d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160630%2F57fbb69e828e40f6ba8a95e7994bf654_th.jpg" >
           <a style="color: #b9b9b9; text-transform: uppercase;font-size: 12px;word-spacing: 3px;letter-spacing: 1px;">2019年9月20日</a>
          <a class="blog" href="https://blog.csdn.net/weixin_43055079/article/details/100246311" style="position: absolute;left: 773px;top: 288px;text-decoration: none;font-size: 22px;">基于D2Admin 简化模板自己做的前端系统</a>
          <p style="margin-top: 80px;color: rgb(185, 185, 185);text-transform: uppercase;font-size: 14px;word-spacing: 3px;letter-spacing: 1px;">学习了一段时间vue 想自己做个项目来检测自己学习的程度</p>
        </div>
      </div>
    </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      menu:false,
      txt_xl:true,
      txt_jy:false,
      isAction:true,
      isAction2:false,
      menuItem:false
    }
  },
  created () {
    this.cavs()
  },
  methods: {
    resumeChangeXL(){
      this.txt_xl = true
      this.txt_jy = false
      this.isAction = true
      this.isAction2 = false
    },
    resumeChangeJY(){
      this.txt_xl = false
      this.txt_jy = true
      this.isAction = false
      this.isAction2 = true
    },
    hadSele(){
      if(this.menuItem == false){
          this.menu = true
          this.menuItem = true
      }else{
        this.menu = false
        this.menuItem = false
      }
    },
    soleat(){

    },
    get1(e){
      console.log(e.target.id)
      let a = document.getElementById('warpp')
      const scroll = (number = 0, time) => {
          if (!time) {
              a.scrollTop = document.documentElement.scrollTop = number;
              return number;
          }
          const spacingTime = 10; // 设置循环的间隔时间  值越小消耗性能越高
          let spacingInex = time / spacingTime; // 计算循环的次数
          let nowTop = a.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
          let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
          let scrollTimer = setInterval(() => {
              if (spacingInex > 0) {
                  spacingInex--;
                  scroll(nowTop += everTop);
              } else {
                  clearInterval(scrollTimer); // 清除计时器
              }
          }, spacingTime);
      };
      switch (e.target.id) {
        case 'he':
          scroll(0,200)
          break;
        case 'mf':
          scroll(635,200)
          break;
        case 'wo':
          scroll(1258,300)
          break;
        case 'me':
          scroll(1905,400)
          break;
        case 'ps':
          scroll(2475,500)
          break;
        case 'bg':
          scroll(3140,600)
          break;
        case 'top':
          scroll(0,300)
          break;
      }
    }
  }
}
</script>

<style lang="stylus">
body,html{
  margin: 0px;
  padding: 0px;
}
.blog:hover{
  color:blue
}
.author_li{
    list-style: none;
    width: 158px;
    height: 22px;
    margin: 0px;
    padding: 9px;
    color: #fff
}
.author_li:hover{
  background: #33cc99
}
.project_span{
    position: relative;
    left: 0px;
    top: 40px;
    font-size: 15px;
    color:#FDD700
    font-family: 'Source Sans Pro', sans-serif;
}
.author_span{
    zoom: 2;
    top: 110px;
    position: absolute;
    left: 46%;
    margin: 0;
    padding: 0;
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 1.9;
    background linear-gradient(to bottom right, #2fbec3, black)
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Source Sans Pro', sans-serif;
}
.author_lable{
  position: absolute;
  right: 11px;
  top: 15px;
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #096DD3;
}
#hadSele:hover
  .author_lable{
    background: #00bdea;
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
.resume{
  width:238px;
  height:523px;
  background-image:url('https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=9fa524ae61224f4a43947b41689efb37/5fdf8db1cb134954247dbaec5a4e9258d0094ad2.jpg')
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  position: relative;
  top: 40px;
  left: 160px;
}
.resume_txt{
    position: absolute;
    top: 57px;
    left: 600px;
    width: 617px;
    height: 523px;
}
.resume_xl:hover,.resume_jy:hover
  p{
    color  #33cc99
  }
.active{
  color  #33cc99
}
.project_bg{
  width:500px;
  height:100px;
  position: absolute;
  left: 32%;
  top: 10px;
  background-image :url('../../assets/image/author/project.png')
}
.myProject{
  width 1000px
  height 511px
  position: absolute;
  top: 110px;
  left: 155px;
}
.zz1{
  width:300px;height:300px;
  position absolute
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
}
.zz2{
  width:300px;height:200px;
  position absolute
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
}
.project1:hover,.project4:hover,.project5:hover
  .zz1{
    opacity:1;
  }
.project2:hover,.project3:hover,.project6:hover
  .zz2{
    opacity:1;
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
