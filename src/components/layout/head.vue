<template>
  <div class="wrap">
    <div class="wrap footer">
      <div class="user">
        <i class="fa fa-navicon"></i>
      </div>
      <ul class="u1">
        <li v-for="(item,index) in routerList" :key="index" :class="{'sel':cindex==index}" @click="sel(index)">
          <p v-text="item.name"></p>
        </li>
      </ul>
      <div class="search">
        <i class="fa fa-search" @click="searchbool=true"></i>
        <div v-show="searchbool">
          <div>
            <i class="fa fa-chevron-left" @click="searchbool=false"></i>
            <input type="text" v-model="sea">
            <ul v-show="songs.length>0">
                <li>
                  <p> 搜索 "{{sea}}"</p>
                </li>
                <li v-for="(item,index) in songs" :key="index">
                  <i class="fa fa-search"></i>
                  <p>{{item.name}}</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/my", name: "我的" },
        { path: "/index", name: "发现" },
        { path: "/mv", name: "MV" }   
      ],
      cindex:1,
      searchbool:false,
      sea:'',
      songs:[]
    };
  },
  created(){
    // this.bool=true;
  },
  methods:{
    sel(index){
      this.cindex=index;
      this.$router.push(this.routerList[index].path);
    }
  },
  watch:{
    sea(){
      let params={};
      params.keywords=this.sea;
      // params.type='mobile';
       if(this.sea==''){
        this.songs=[];
        return;
      }
      this.$apis.getSuggest(params).then(res=>{
        if(res.data.result.songs){
          this.songs=res.data.result.songs
        }else{
          this.songs=[]
        }
      })
      
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  @include top;
  display:flex;
  height:r(50);
  position: relative;
  .user{
    width: 20%;
    i{
      color: #000;
      font-size: r(26);
      line-height: r(50);
      text-indent: r(20)
    }
    
  }
  .search{
    width: 20%;
    >i{
      color: #000;
      font-size: r(24);
      line-height: r(44);
      text-indent: r(24)
    }
    >div{
      width: r(375);
      height: r(667);
      background: $blue;
      z-index: 99;
      @include top;
      div{
        position: relative;
        height: r(50);
        >i{
            text-indent: r(14);
            color: #fff;
            padding-top: r(4);
            font-size: r(24);
            line-height: r(44);
        }
        input{
          width: 80%;
          border: none;
          border-bottom: r(1) solid #fff;
          outline: 0;
          height: r(36);
          background: none;
          border-radius: 0;
          font-size: r(20);
          margin-left: r(10);
          color: #fff;
          padding: 0;
          position: absolute;
          top:r(4)
        }
        ul{
          width: 90%;
          position: absolute;
          top:r(50);
          left:r(10);
          background: $blue;
          li{
            display: flex;
            height: r(40);
            border-bottom: r(1) solid #fff;
            i{
              color: #fff;
              font-size: r(16);
              line-height: r(40);
              margin-left: r(10)
            }
            p{
              color: #fff;
              font-size: r(16);
              line-height: r(40);
              margin-left: r(10)
            }
          }
          li:nth-child(1){
            p{
              margin-left: r(14);
              color: rgb(181, 238, 209);
              font-size: r(20);
            }
          }
        }
      }
    }
  }
  .u1{
    width: 60%;
    height:r(50);
    z-index: 9;
    background: #fff;
    li{
      width: 33%;
      float: left;
      height:100%;
      text-align: center;
      p{
        font-size: r(18);
        line-height: r(50);
      }
    }
    .sel{
      color: $blue;
    }
  }
  
  
}
</style>
