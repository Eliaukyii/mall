<template>
  <div class="button-bar">
    <div class="check-content">
      <cart-check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">
          合计：{{totalPrice}}
      </div>
    <div class="calculate"
         @click="calcClick">
         结算：{{checkLength}}
         </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartCheckButton from "./CartCheckButton";

export default {
  name: "CartButtonBar",
  components: {
    CartCheckButton

  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return (
        "￥"+this.cartList.filter((item)=>{
          return item.checked;
        })
        .reduce((preValue,item)=>{
          return preValue+item.price*item.count;
        },0)
        .toFixed(2)
      )
    },
    checkLength(){
      return this.cartList.filter((item)=>item.checked).length;
    },
    isSelectAll(){
      //购物车为空时
      if(this.cartList.length===0) return false;
      for(let item of this.cartList){
        if(!item.checked){
          return false;
        }
      }
      return true;
    }
  },
  methods:{
    //全选按钮的点击效果
    checkClick(){    //全部选中
      if(this.isSelectAll){
        this.cartList.forEach((item)=>{
          item.checked=false;
        });
      }else{    //部分或全部不选中
        this.cartList.forEach((item)=>(item.checked=true));
      }
    },
    // calcClick(){
    //   if(this.checkLength==0){
    //     this.$toast.show('请选择购买的产品',2000)
    //   }
    // }
  }
}

</script>

<style scoped>
.button-bar {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 5px;
  width: 90px;
}
.price {
  margin-left: 10px;
  flex: 1;
}
.button-bar .calculate {
  /* float: right!important; 在flex中不起作用*/
  /* margin-left: 50px; */
  text-align: center;
  width: 90px;
  background-color: red;
  color: #fff;
}
.check-button {
  width: 20px;
}
</style>