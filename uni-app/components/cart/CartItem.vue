<template>
  <view class="cart-list" v-for="(item, i) in list" :key="i">
    <!-- 列表 包含 图标 机型名称 , 属性, 价格 及 - 数量 +  及右划删除 -->
    <view class="cart-list__left">
      <view>
        <u-icon
          :name="'https://gl.hsxbk.top/' + item.icon"
          class="cart-position"
          size="26"
        ></u-icon>
      </view>
      <view class="cart-list__left__text">
        <view class="cart-list__left__title">{{ item.name }}</view>
        <view class="cart-list__left__desc">
          <text v-for="(items, i) in item.property">
            {{ items.value + '&nbsp;' }}
          </text>
        </view>
      </view>

      <view class="cart-list__left__text"> ￥{{ item.price }}</view>
      <view class="cart-list__left_oprating">
        <view>
          <u-icon
            name="minus"
            class="cart-position"
            size="12"
            @click="decrment(item.id)"
          ></u-icon
        ></view>
        <view class="cart-list__left__text">{{ item.num }}</view>
        <view>
          <u-icon
            name="plus"
            class="cart-position"
            size="12"
            @click="incrment(item.id)"
          ></u-icon
        ></view>
      </view>
      <view> <u-icon name="close-circle" @click="del(item.id)"></u-icon></view>
    </view>
  </view>
</template>
<script lang="ts" setup>
// 接受cartList 父传递的数据
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
// 定义emit
const emit = defineEmits(['incrment', 'decrment', 'del'])
// 点击删除
const del = (id) => {
  // console.log('删除')
  emit('del', id)
}
// 点击加号
const incrment = (id) => {
  // 将当前的item 传递给父组件
  emit('incrment', id)
}
// 点击减号
const decrment = (id) => {
  emit('decrment', id)
}
</script>
<style lang="scss" scoped>
	@import './index.scss';
</style>

