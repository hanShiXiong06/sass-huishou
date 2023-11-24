<template>
  <view class="cart-container">
    <view class="cart-container__left">
      <u-icon
        name="shopping-cart"
        class="cart-position"
        size="22"
        @click="cartShow = true"
      ></u-icon>
      <u-badge
        :isDot="false"
        type="success"
        :value="cartList.length"
        absolute
        style="top: -17px; left: 40px"
      ></u-badge>
      <view class="cart-container__right__text"
        >总计 {{ totalPrice[1] }} 件商品 ￥{{ totalPrice[0] }}</view
      >
      <!-- <view class="cart-container__left__text">已选 </view>
      <view class="cart-container__left__text">共{{ cartList.length }}件</view> -->
    </view>
    <view class="cart-container__right">
      <!-- <view class="cart-container__right__text">提交订单</view> -->
      <u-button text="提交订单" type="primary"></u-button>
    </view>
  </view>
  <view>
    <!-- 回收车列表 -->
    <u-popup
      :customStyle="{ padding: '40px 10px 20px' }"
      :show="cartShow"
      @close="closeCartShow"
      @open="open"
      closeable
    >
      <CartItem
        v-if="cartList.length !== 0"
        :list="cartList"
        @incrment="_incrment"
        @del="_del"
        @decrment="_decrment"
      ></CartItem>
      <view v-else>
        <u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
        </u-empty
      ></view>
    </u-popup>
  </view>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import CartItem from '@/components/cart/CartItem'
import { useCart } from '@/hooks/useCart'
// 获取回收车store
import { useRecoveryCartStore } from '@/stores/recoveryCart'
import { log } from 'util'

const cartList = computed(() => {
  return useRecoveryCartStore().recoveryCart
})

const totalPrice = computed(() => {
  // 返回总价 及总数量
  // 总价
  let total = 0
  // 总数量
  let totalNum = 0
  cartList.value.forEach((item) => {
    total += item.num * item.price
    totalNum += item.num
  })
  return [total, totalNum]
})

/**
 * cartShow 回收车是否显示
 */
const cartShow = ref(false)
const closeCartShow = () => {
  cartShow.value = false
}
const _incrment = (id) => {
  // 实现点击 ++ 监听
  console.log('父组件中的++' + id)
  // 调用  useRecoveryCartStore().reduceRecoveryCartNum()
  useRecoveryCartStore().reduceRecoveryCartNum(id)
}
const _del = (id) => {
  console.log('父组件中的删除' + id)
  // 弹出确认提示框

  // 如果用户选择确认 则执行删除逻辑 , 如果用户选择取消则直接取消
  // useRecoveryCartStore().deleteRecoveryCart(id)
  useRecoveryCartStore().deleteRecoveryCart(id)
}
const _decrment = (id) => {
  console.log('父组件中 decrment' + id)
  useRecoveryCartStore().reduceRecoveryCartNumsub(id)
}
</script>
<style>
.cart-container {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  background-color: #eee;
  border-top: 1px solid #ddd;
}
.cart-container__left {
  /* float: left;
  width: 50%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart-container__left__text {
  font-size: 14px;
  color: #333;
}
.cart-container__right {
  /* float: right;
  width: 50%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 10px;
}
.cart-container__right__text {
  font-size: 14px;
  color: #333;
}
.cart-position {
  position: absolute;
  top: -12px;
  left: 20px;
  background: #fff;
  border: 1px solid #333;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 0 5px #323030;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #909193;
  border-radius: 15px;
}
.u-button {
  width: 80px;
}
.cart-item {
}
</style>
