<template>
<!-- 基本完成 考虑小图标播放 而且还有 退出页面继续播放 vuex? -->
<div id="two" style="transform :translateX(1366px);position: absolute; transform-style: flat; backface-visibility: hidden; width: 100%; height: 100%; overflow: hidden;">
      <div class="start" v-show="start_a" style="z-index:100;width: 100%; height: 100%; position: absolute;overflow: hidden;background-color:#FDD;text-align: center;">
          <div><a class="start_a" >Vue Music</a></div>
      </div>
  <div class="Vue_Music" style="width: 100%; height: 100%; overflow: hidden;">
      <div id="start_bg" v-show="start_b" >    </div>

      <transition id="down" name="cead" leave-active-class="animated fadeOut" >
      </transition>

      
      <div class="search__box">
        <input class="search__txt"  id="name_search" type="text" name="" placeholder="请输入搜索信息">
        <a class="search__btn" href="#">
            <i class="fa fa-skype" @click="searchMusic"></i>
        </a>
      </div>

      <div class="music_content"  v-show="start_b">
        <div class="music_title">
          <el-table
            :data="tableData"
            ref = "table"
            style="width: 100%;opacity: 0.7;"
            max-height="400"
            @row-click="handdle"
            :row-class-name="tableRowClassName">
            <el-table-column
              type="index"
              align="center"
              width="50">
            </el-table-column>
            <el-table-column
              prop="name"
              align="center"
              label="歌名">
            </el-table-column>
            <el-table-column
              prop="singer"
              align="center"
              label="歌手">
            </el-table-column>
              <el-table-column
              align="center"
              width="150"
              >
              <template slot-scope="scope">
                <img name="img" id="icon_image"  :src="scope.row.imgQuite" width="50" height="50"> 
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="music_song">
          <div id="music_img" class="music_img">
          </div>
          <div id="music_song_list1" style="width: 100px;height: 100px;position: absolute;top: 250px;left:30px" @click="list1">
            <el-tooltip content="电音榜" placement="top" effect="light">
              <img src="../../assets/image/music/3.jpg" style="width: 100px;height: 100px; background-repeat:no-repeat;background-size:100% 100%;-moz-background-size:100% 100%;">
            </el-tooltip>
          </div>

          <div id="music_song_list2" style="width: 100px;height: 100px;position: absolute;top: 250px;right:30px" @click="list2">
            <el-tooltip content="美国Billboard周榜" placement="top" effect="light">
              <img src="../../assets/image/music/1.jpg" style="width: 100px;height: 100px; background-repeat:no-repeat;background-size:100% 100%;-moz-background-size:100% 100%;">
            </el-tooltip>
          </div>

          <div id="music_song_list3" style="width: 100px;height: 100px;position: absolute;bottom:30px;left:30px" @click="list3">
            <el-tooltip content="欲罢不能的BGM" placement="bottom" >
              <img src="../../assets/image/music/2.jpg" style="width: 100px;height: 100px; background-repeat:no-repeat;background-size:100% 100%;-moz-background-size:100% 100%;">
            </el-tooltip>
          </div>

          <div id="music_song_list4" style="width: 100px;height: 100px;position: absolute;bottom:30px;right:30px" @click="list4">
             <el-tooltip content="热歌榜" placement="bottom" >
              <img src="https://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=200y200" style="width: 100px;height: 100px; background-repeat:no-repeat;background-size:100% 100%;-moz-background-size:100% 100%;">
            </el-tooltip>
          </div>
        </div>

        <div class="music_ply">
          <div class="music_detail_ctrl" >
            <i id="left" class="iconfont icon-last" @click="last"></i>
            <i id="center" :class="{'iconfont icon-play':style1,'iconfont icon-stop':style2}" @click="change" ></i>
            <i id="right" class="iconfont icon-naxt" @click="naxt"></i>
          </div>
          <div class="music_detail_title">
            <span  id="music_detail_name"></span>
            <span id="music_detail_time1"></span>
            <span style="color:#FDD700;position: absolute;top: 28px;right: 15px;">——</span>
            <span id="music_detail_time2"> </span>
            <div id="music_detail_plan2" style=" z-index:100; width: 0px;height: 3px;position: absolute;bottom: 5px;transition: all 0.5s;background:#FDD700"></div>
            <div style="  width:660px;height: 3px;position: absolute;bottom: 5px;transition: all 0.5s;background:hsla(0,0%,88%,.8);"></div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      start_a:true,
      start_b:true,
      style1:true,
      style2:false,
      styCrl:true,
      tableData: [],
      musicItem:'',
      indexItem:'',
      playData:{},
      playPan:'',
      pauseMusic:{},
      playCrl:true,
      playListId:'1978921795',
      changeList:false,
      oncChange:false,
      roweIndex:'',
      eventIndex:''
    }
  },
  created () {
    this.getDataMusic()
    this.start()
  },
  methods: {
    // daiwei的api暂时不能用
    // http://music.163.com/song/media/outer/url?id=28912026.mp3 替补
    //https://api.imjad.cn/cloudmusic/?type=playlist&id=1978921795获取歌单
    //https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=128509912
    searchMusic(){
      let msg = document.getElementById('name_search').value
      if(msg == ''){
        this.$message({
          message: '请输入信息',
          type: 'warning'
        });
      }else{
        this.tableData = []
        this.musicItem = []
        axios.get('http://www.daiwei.org/vue/server/music.php?inAjax=1&do=search&count=50&name='+msg).then((res)=>{
          let a =res.data.result.songs
          console.log('信息',res.data.result.songs)
          for(let i = 0 ;i<50;i++){
            const d = {
              name:a[i].name,
              singer:a[i].ar[0].name,
              musicId:a[i].id,
              picUrl:a[i].al.picUrl,
              imgQuite:'http://imgup04.iefans.net/iefans/2019-03/07/13/15519372516310_0.jpg',
            }
            // this.musicItem[ this.indexItem].al.picUrl
            this.tableData.push({name:d.name,singer:d.singer,imgQuite:d.imgQuite,id:d.musicId,al:{picUrl:d.picUrl}})
          }
        })
        this.musicItem = this.tableData
        console.log('???',this.musicItem)
        document.getElementById('name_search').value = ''
      }
    },
    out(){
      this.mucSh = false
    },
    tableRowClassName({row, rowIndex}){
      row.index = rowIndex
    },
    handdle(row, event, column){
      event.index = row.index
      this.oncChange = true
      this.roweIndex = row.index 
      this.eventIndex = event.index
      // 行
      console.log('点击信息1',row)
      // 事件
      console.log('点击信息2',event)
      // 列
      console.log('点击信息3',column)
      this.iconChange()
    },
    iconChange(){
      this.out()
      console.log('change1',this.roweIndex )
      console.log('change2',this.eventIndex )
      let a = document.getElementsByName('img')
      console.log(a)
      for(let i = 0 ;i<a;i++){
        let b = document.getElementsByName('img')[i]
        b.src = 'http://imgup04.iefans.net/iefans/2019-03/07/13/15519372516310_0.jpg'
        document.getElementsByClassName('el-table__row')[i].css.backgroundColor = ''
      }
      if(this.roweIndex == this.eventIndex){
        let i = this.roweIndex
        let a = document.getElementsByName('img')[i]
        a.src = 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171010/37b899e3940b459dafabd58aca464b78.gif'
        document.getElementsByClassName('el-table__row')[i].style.backgroundColor = '#dee1e6'
        this.$refs.table.bodyWrapper.scrollTop =81*i;
        this.indexItem = this.roweIndex
        this.titleCut()
        this.imgCut()
        this.style1=false
        this.style2=true
        console.log(this.playCrl)
        if(this.playCrl == false){
          this.pauseMusic.play()
          this.playCrl = true
        }else{  
          this.playMusic(this.indexItem)
        }
        this.styCrl = false
      }
    },
    list1(){
       this.out()
      this.tableData = []
      this.playListId = '1978921795'
      this.getDataMusic()
      this.$message('电 | 音 | 榜')
    },
    list2(){
       this.out()
      this.tableData = []
      this.playListId = '60198'
      this.getDataMusic()
      this.$message('美国 | Billboard | 周榜')
              this.style1=true
        this.style2=false
        this.pauseMusic.pause()
         this.styCrl = true
         this.playCrl = true
    },
    list3(){
       this.out()
      this.tableData = []
      this.playListId = '2712936322'
      this.getDataMusic()
      this.$message('踩点 | 高能 |欲罢不能')
        this.style1=true
        this.style2=false
        this.pauseMusic.pause()
         this.styCrl = true
         this.playCrl = true
    },
    list4(){
       this.out()
      this.tableData = []
      this.playListId = '3778678'
      this.getDataMusic()
      this.$message('个人 | 收藏 | 电音')
      this.changSongList()
    },
    changSongList(){
       this.out()
        this.style1=true
        this.style2=false
        this.pauseMusic.pause()
         this.styCrl = true
         this.playCrl = true
    },
    getDataMusic(){
      axios.get('https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=' + this.playListId).then((res)=>{
        console.log(res)
        this.musicItem = res.data.Body
        console.log('数据',this.musicItem.length)
        console.log(this.musicItem)
        this.indexItem = Math.floor(Math.random() * this.musicItem.length+1)
        console.log('0',this.indexItem)
        for(let i = 0 ;i<this.musicItem.length;i++){
          const d = {
            name:this.musicItem[i].title,
            singer:this.musicItem[i].author,
            imgsrc:this.musicItem[i].pic,
            imgQuite:'http://imgup04.iefans.net/iefans/2019-03/07/13/15519372516310_0.jpg',
          }
          this.tableData.push({name:d.name,singer:d.singer,imgsrc:d.imgsrc,imgQuite:d.imgQuite})
        }
        let Audio = document.createElement('audio')
        Audio.setAttribute('id','audio')
        document.getElementById('center').appendChild(Audio)
        let span1 = document.getElementById('music_detail_name')
        span1.innerHTML=`${this.tableData[this.indexItem].name}-${this.tableData[this.indexItem].singer}`
      })
    },
    playMusic(){
       this.out()
        axios.get('https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=song&id='+ this.musicItem[this.indexItem].id).then((res)=>{
        let d = {
          src:res.data.url
        }
        // icon变化
      let a = document.getElementsByName('img').length 
      for(let i = 0 ;i<a;i++){
        let b = document.getElementsByName('img')[i]
        b.src = 'http://imgup04.iefans.net/iefans/2019-03/07/13/15519372516310_0.jpg'
        document.getElementsByClassName('el-table__row')[i].style.backgroundColor = ''
      }
        let i = this.indexItem
        let img = document.getElementsByName('img')[i]
        img.src = 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171010/37b899e3940b459dafabd58aca464b78.gif'
        this.$refs.table.bodyWrapper.scrollTop =81*i;
        document.getElementsByClassName('el-table__row')[i].style.backgroundColor = '#dee1e6'
          let Audio = document.getElementById('audio')
          Audio.setAttribute('src',d.src)
          this.pauseMusic = Audio
          Audio.play()
        setInterval(() => {
          if(document.getElementById('audio').ended==true){
              this.indexItem = this.indexItem+1
              if(this.indexItem == this.musicItem.length){
                this.indexItem = 0
              }
              this.playnextMusic(this.indexItem)
            console.log('ok')
          }
          this.playTime()
        }, 1000);
      })
    },
    // 播放有些问题 可以进行播放 img改变有些问题
    playnextMusic(){
       axios.get('https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=song&id='+ this.musicItem[this.indexItem].id).then((res)=>{
         console.log('next',res)
        let d = {
          src:res.data.url
        }
      let a = document.getElementsByName('img').length 
      for(let i = 0 ;i<a;i++){
        let b = document.getElementsByName('img')[i]
        b.src = 'http://imgup04.iefans.net/iefans/2019-03/07/13/15519372516310_0.jpg'
        document.getElementsByClassName('el-table__row')[i].style.backgroundColor = ''
      }
        let i = this.indexItem
        let img = document.getElementsByName('img')[i]
        img.src = 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171010/37b899e3940b459dafabd58aca464b78.gif'
        this.$refs.table.bodyWrapper.scrollTop =81*i;
        document.getElementsByClassName('el-table__row')[i].style.backgroundColor = '#dee1e6'
        let nextAudio = document.getElementById('audio')
        nextAudio.setAttribute('src',d.src)
        nextAudio.play()
        this.titleCut()
        this.imgCut()
        setInterval(() => {
          this.playTime()
         }, 1000);
       })
    },
    playTime(){
      let a = parseInt(document.getElementById('audio').currentTime)
      let B=''
      let A=''
      if(a<10){
        a='0'+a
        B = a
        A = '0'
      }else if(a<60){
        A = '0'
        B = a
      }else if (a>60){
        if(parseInt(a/60)>0){
          A = parseInt(a/60)
        }
        if(a%60<10){
          B = '0'+a%60
        }else{
          B = a%60
        }
      }
      let now = (A +':'+ B)
      let span2 = document.getElementById('music_detail_time1')
      span2.innerHTML=`${now}`
      let b = parseInt(document.getElementById('audio').duration)
      let C = parseInt(b/60)
      let D
      if(b%60<10){
          D = '0'+b%60
        }else{
          D = b%60
        }
        let  total = (C+':'+D)
      let span3 = document.getElementById('music_detail_time2')
      span3.innerHTML=`${total}`

      let c = document.getElementById('audio').currentTime
      let d = document.getElementById('audio').duration
      this.playPan = (a/b)*660 + 'px'
      document.getElementById('music_detail_plan2').style.width = `${this.playPan}`
    },
    titleCut(){
      let span1 = document.getElementById('music_detail_name')
      span1.innerHTML=`${this.tableData[this.indexItem].name}-${this.tableData[this.indexItem].singer}`
    },
    imgCut(){
      let img = new Image()
        img.src = this.musicItem[ this.indexItem].pic
        img.onload = function(){
          document.getElementById('start_bg').style.cssText = `background-image:url('${img.src}');  transform: scale(1.2);background-position:center center;filter: blur(10px);`
        }
    },
    start(){
      setTimeout(() => {
        this.start_a = false
        this.$message('电 | 音 | 榜')
      }, 2000);
      setTimeout(() => {
         this.$notify.info({
          title: '消息',
          message: '点击歌曲可进行播放',
          offset: 10
        });
          this.$notify.info({
          title: '消息',
          message: '点击歌单可进行切换',
          offset: 90
        });
      }, 3000);
    },
    change(){
      this.imgCut()
      this.titleCut()
      if(this.styCrl == true){
        this.style1=false
        this.style2=true
        console.log(this.playCrl)
        if(this.playCrl == false){
          this.pauseMusic.play()
          this.playCrl = true
        }else{  
          this.playMusic()
        }
        this.styCrl = false
      }else{
        this.style1=true
        this.style2=false
        this.pauseMusic.pause()
         this.styCrl = true
         this.playCrl = false
      }
    },
    naxt(){
      this.indexItem = this.indexItem+1
      if(this.indexItem == this.musicItem.length){
        this.indexItem = 0
      }
      this.style1=false
      this.style2=true
      this.imgCut()
      this.titleCut()
      this.playMusic()
      this.styCrl = false
    },
    last(){
      this.indexItem = this.indexItem-1
      if(this.indexItem == -1){
        this.indexItem = this.musicItem.length - 1
      }
      this.imgCut()
      this.titleCut()
      if(this.styCrl == false){
        this.playMusic()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
body,html{
  margin: 0px;
  padding: 0px;
}
.start_a{
  position: absolute;
  left: 19%;
    top: 30%;
    font-size: 42px;
    zoom: 4;
    margin :0 0 42px;
    background : linear-gradient(to bottom right, #2fbec3, #70d12f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
#start_bg{
  width: 100%; height: 100%;
  background-image: url('../../assets/image/music/bg.jpg');
  overflow: hidden;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
}
.music_content{
  position: absolute;
  top: 65px;
  left: 80px;
  width: 1200px;
  height: 500px;
}
.music_title{
  margin-left: 20px;
  width: 850px;
  height: 400px;
}
.music_song{
  position: absolute;
  margin-right: 20px;
  right: 0px;
  top: 0px;
  width: 300px;
  height: 500px;
  background:rgba(1, 1, 1, 0.6);
}
.music_img{
  position: relative;
  top: 40px;
  left: 50px;
  width: 200px;
  height: 200px;
  background-image: url('../../assets/image/music/start.jpg');
  overflow: hidden;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.music_ply{
  margin-left: 20px;
  position: absolute;
  bottom: 0px;
  width: 850px;
  height: 90px;
}
.music_detail_ctrl{
  width: 180px;
  height: 80px;
}
#left{
  font-size: 32px;
  position: absolute;
    top: 25px;
    left: 20px;
}
#center{
  font-size: 64px;
    position: relative;
    left: 53px;
    top: 5px;
}
#right{
    font-size: 32px;
  position: absolute;
    top: 25px;
    left: 120px;
}
.iconfont:hover{
    background : linear-gradient(to bottom right, #2fbec3, #70d12f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.music_detail_title{
    /* background-color: black; */
    width: 670px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 180px;
}
#music_detail_name{
    background : linear-gradient(to bottom right, #2fbec3, #70d12f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 23px;
    position: relative;
    top: 18px;
}
#music_detail_time1{
    background : linear-gradient(to bottom right, #2fbec3, #70d12f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    position: absolute;
    right: 12px;
    top: 13px;
}
#music_detail_time2{
    font-size: 20px;
    color: hsla(0,0%,88%,.8);
    position: absolute;
    right: 12px;
    top: 40px;
}
.search__box {
  position: absolute;
  top: 33px;
  left: 18%;
  transform: translate(-50%, -50%);
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px 15px 10px 15px;
}

.search__box:hover > .search__txt {
  width: 240px;
  padding: 0 6px;
}

.search__box:hover > .search__btn {
  background: #fff;
}
.search__box:hover > .search__btn i {
  color: #34ace0;
  transition: 0.9s;
}

.search__btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #34ace0;
  display: flex;
  justify-content: center;
  align-item: center;
  text-decoration: none;
}
.search__btn i {
  line-height: 40px;
  color: #fff;
  transition: 0.9s;
}

.search__txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: #fff;
  font-size: 16px;
  transition: 0.2s;
  line-height: 40px;
  width: 0;
}
</style>
