<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="nav">
     <template v-slot:left>
        <div class="backHome" @click="backHomeClick">
             <img src="~assets/img/common/backHome.svg" alt="">
        </div>
    </template> 
    <template v-slot:center>
         <span>分类</span>
    </template>
    </nav-bar>

    <div class="menu">
    <!-- 左侧一级分类盒子 -->
    <div class="menu-left">
      <ul>
        <li class="menu-item" 
            v-for="(item,index) in menus" 
           :key="index"
           @click="clickList(index)"
           :class="{current:index==currentIndex}">
        <p class="text">{{item.title}}</p>
        </li>
        </ul>
    </div>

    <!-- 右侧二级分类盒子 -->
    <div class="menu-right">
      <ul>
      <li v-for="(item,index1) in menus" :key="index1" class="cate">
        <h4 class="cate-title"></h4>
        <ul>
          <li v-for="(item,index2) in menus" :key="index2">
            <a href="#" class="cate-item-wrapper">
              <img :src="itemImage" alt="">
              <span></span>
            </a>
            </li>
        </ul>
      </li>
      </ul>
    </div>
   </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getCategory} from 'network/category'
export default {
  name: '',
  components:{
    NavBar
  },
  data () {
    return {
      menus:[],
      currentIndex:0,
      miniWallkey:[],
      itemImage:[],
      maitKey:null
    }
  },
  created() {
    getCategory().then(res=>{
    console.log(res);
      this.menus=res.data.data.category.list
    })

  },
  mounted () {
   
  },
  methods: {
     backHomeClick(){
        // this.$router.back()
       // console.log("111");
      
    },
    clickList(index){
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
ul{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
.nav{
  position: fixed;
  width: 100%;
  color: #fff;
  background-color:  var(--color-tint);
}
.backHome img{
    width: 24px;
    height: 24px;
    margin-top: 10px;
}
.menu{
  display: flex;
  flex: 1;
  padding-top:45px;
  text-align: center;
}
.menu-left{
    width: 80px;
    background-color: #f3f5f7;
}
.menu-item{
  height: 45px;
  line-height: 45px;
}
.current{
  width: 100%;
  background-color: #fff;
}
.text:hover{
  color:var(--color-tint);
}
.menu-right{
  flex: 1;
  background-color: #fff;
}
.cate{
  height: 100%; 
 }

</style>
