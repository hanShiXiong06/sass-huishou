<template>
 
  <view class="bg-white">
    <block v-if="!loading">
		<!-- #ifdef MP-WEIXIN -->
		<u-cell-group>
				<u-cell  
				v-for="(item, index) in priceList"
				 :key="index"  
				 :icon="'http://gl.hsxbk.top/' + item.icon"
				 :title="property[index]"
				 :iconStyle="{ width: '30px', height: '30px' }"
				 :value="item.price"
				 @click="goDetail(item.id)"
				 class="u-slot-title"
				  isLink
				  :rightIcon="'plus-circle'"
				   
				></u-cell>
				
			</u-cell-group>
		<!-- #endif-->
	<!-- #ifdef H5 -->
      <u-navbar :title="modelName" :autoBack="true" style="margin-bottom: 45px">
      </u-navbar>
	
		
      <view v-if="priceList.length !== 0" class="pages">
		  
        <u-cell-group>
          <u-cell
            v-for="(item, index) in priceList"
            :key="index"
            :title="property[index]"
            :value="item.price"
            :icon="'http://gl.hsxbk.top/' + item.icon"
            :iconStyle="{ width: '30px', height: '30px' }"
            @click="goDetail(item.id)"
            class="u-slot-title"
            slot="title"
            isLink
            :rightIcon="'plus-circle'"
          >
            <template #label>
              <view v-for="prop in item.property" :key="prop.id" class="comment">
                <view v-if="prop.pid == 5"> {{ prop.comment }} </view>
              </view>
              <view class="comment"> 更新时间: {{ item.create_time }}</view>
            </template>
          </u-cell>
        </u-cell-group>
      </view>
      <view v-else>
        <u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
        </u-empty
      ></view>
	
	  
	 <!-- #endif-->
    </block>

    <u-loading-page
      bg-color="rgb(248,248,248)"
      :loading="loading"
      fontSize="16"
      color="#333"
      :loadingText="t('loadingText')"
    ></u-loading-page>
    <RecoveryCart></RecoveryCart>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { redirect, img } from '@/utils/common'
import { useRouter, useRoute } from 'vue-router'
import { getProductPricesList } from '@/api/Price'
import { onLoad } from '@dcloudio/uni-app'
import { t } from '@/locale'
import { useShare } from '@/hooks/useShare'
// 导入RecoveryCart组件
import RecoveryCart from '@/components/cart/RecoveryCart'
// 导入pinia 中的用户信息

import useMemberStore from '@/stores/member'
// 导入回收车stores recoveryCart
import { useRecoveryCartStore } from '@/stores/recoveryCart'
import { log } from 'util'
// 获取 useRecoveryCartStore 中的 recoveryCart
let id = null;
onLoad((option) => {
  loading.value = true
  id = option.id ||0
  getPrice()
  uni.setNavigationBarTitle({
    title: '12',
  })
})
const { setShare, onShareAppMessage, onShareTimeline } = useShare()
// 请求价格列表
// import { fetchPriceList } from '@/api/Price'
//解构路由的参数


const priceList = ref([])
const modelName = ref('')
const property = ref([])
// 获取价格
const getPrice = async () => {
  const res = await getProductPricesList({ model_id: id })
  if (res.data.data.length == 0) {
    loading.value = false
    return
  }
  priceList.value = res.data.data
  modelName.value = res.data.data[0].name
  // 将priceList中的每一个对象中的property 通过id进行排序

  //然后将property中的每一个对象中的name进行拼接
  priceList.value.some((item) => {
    const properties = { value: '' }
    item.property.sort((a, b) => {
      return a.pid - b.pid
    })
    item.property.some((item) => {
      properties.value += item.value + ' '
    })
    item.create_time = item.create_time.slice(0, 10)

    property.value.push(properties.value)
    console.log(properties.value)
  })
  // 将priceList中create_time 只保留年月日
  loading.value = false
	
  uni.setNavigationBarTitle({
    title: modelName.value,
  })

  // 设置分享
  let share = {
    title: modelName.value,
    desc: modelName.value + '回收报价',
    url: 'https://gl.hsxbk.top/' + priceList.value[0].icon,
  }
  setShare({
    wechat: {
      ...share,
    },
    weapp: {
      ...share,
    },
  })
}


let loading = ref<boolean>(true)

const goDetail = async (id) => {
  const token = await useMemberStore().token
  console.log()

  //   if(await useMemberStore().token)
  // 如果没有token 就跳转到登录页面
  if (token.length == 0) {
    redirect({ url: '/pages/auth/login' })
    return
  }
  // 如果有token 就将这条数据添加到回收车中
  // 直接通过id 查询这条数据 数据源是priceList
  const data = priceList.value.filter((item) => {
    return item.id == id
  })

  // 将这条数据添加到回收车中
  const cartList = {}
  cartList.id = data[0].id
  cartList.name = data[0].name
  cartList.icon = data[0].icon
  cartList.price = data[0].price
  cartList.property = data[0].property
  cartList.num = 1
  // await useRecoveryCartStore().getRecoveryCart()
  // 判断回收车中是否有这条数据 通过id进行判断
  const recoveryCart = await useRecoveryCartStore().recoveryCart
  console.log(recoveryCart)
  const isExist = recoveryCart.some((item) => {
    return item.id == cartList.id
  })
  // 如果存在就将num +1
  if (isExist) {
    recoveryCart.some((item) => {
      if (item.id == cartList.id) {
        item.num += 1
      }
    })
    // await useRecoveryCartStore().addRecoveryCart(recoveryCart)
    return
  }

  await useRecoveryCartStore().addRecoveryCart(cartList)

  //   console.log(data[0])
}
</script>
<style>
.pages {
  margin-top: 45px !important;
}

.comment {
  font-size: 12px;
  color: #848588;
}
</style>
