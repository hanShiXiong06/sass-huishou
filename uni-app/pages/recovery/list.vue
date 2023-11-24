<template>
	<!-- #ifdef H5 -->
 <u-navbar
    title="回收分类"
    :safeAreaInsetTop="false"
    :placeholder="true"
    :autoBack="true"
  ></u-navbar> 
  <u-line></u-line> 
  <!-- #endif-->
  
  <view class="bg-white">
    <block v-if="!loading">
      <view class="pages">
        <scroll-view
          :scroll-top="scrollTop"
          scroll-y="true"
          class="scroll-Y left"
          @scrolltoupper="upper"
          @scrolltolower="lower"
          @scroll="scroll"
        >
          <u-list height="auto">
            <u-list-item
              v-for="(item, index) in categoryList"
              :key="index"
              :class="[
                activeIndex == index ? 'active' : '',
                activeIndex - 1 == index ? 'borderr' : '',
                activeIndex + 1 == index ? 'bordert' : '',
              ]"
			 
            >
              <u-cell
                :title="item.name"
                @click="changeActiveIndex(index)"
                class="list"
                :border="false"
                customStyle="padding:10rpx; "
              >
                <template #icon v-if="item.icon">
                  <u-avatar
                    shape="square"
                    size="15"
                    :src="'https://gl.hsxbk.top/' + item.icon"
                    customStyle="margin: -3px 5px -3px 0"
                  ></u-avatar>
                </template>
              </u-cell>
            </u-list-item>
          </u-list>
        </scroll-view>
        <view>
          <u-sticky ref="sticky" bgColor="#fff">
            <u-tabs
              :class="{ 'fixed-tabs': isTabsFixed }"
              :activeStyle="{
                color: '#3c9cff',
                fontWeight: 'bold',
                transform: 'scale(1.1)',
              }"
              itemStyle="padding-left: 20px; padding-right: 20px; height: 34px; transition: 3s all; "
              :list="categoryList[activeIndex].children"
              :current="xilieIndex"
              @click="scrollToSection"
            ></u-tabs>
          </u-sticky>

          <scroll-view
            :scroll-top="scrollTop"
            scroll-y="true"
            class="scroll-Y right"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
          >
            <view
              class="modelList"
              v-if="categoryList[activeIndex].children.length !== 0"
            >
              <view
                v-for="(item, index) in categoryList[activeIndex].children"
                :key="index"
                class="modelListItem"
              >
                <u-cell-group class="model_list" :title="item.name">
                  <u-cell
                    v-for="(model, indexs) in item.children"
                    :key="indexs"
                    :title="model.name"
                    isLink
                    @click="linkModel(model.id)"
                    :border="false"
                  >
                    <template #icon v-if="model.icon">
                      <u-icon
                        size="32"
                        :name="'https://gl.hsxbk.top/' + model.icon"
                      ></u-icon>
                    </template>
                  </u-cell>

                  <u-cell v-if="item.children.length == 0" title="暂无数据">
                  </u-cell>
                </u-cell-group>
              </view>
            </view>
            <view v-else>
              <u-empty
                mode="list"
                icon="http://cdn.uviewui.com/uview/empty/list.png"
              >
              </u-empty>
            </view>
          </scroll-view>
        </view>
      </view>
    </block>
    <u-loading-page
      bg-color="rgb(248,248,248)"
      :loading="loading"
      fontSize="16"
      color="#333"
      :loadingText="t('loadingText')"
    ></u-loading-page>
  </view>
  <tabbar />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { redirect, img } from '@/utils/common'
import { useRouter, useRoute } from 'vue-router'
// 导入请求 api Categories.ts
import { fetchCategoryList, fetchModelList } from '@/api/Categories'
import { getProductPricesList } from '@/api/Price'
import { onLoad } from '@dcloudio/uni-app'
import { t } from '@/locale'
import { log } from 'util'

//解构参数
// const route = useRoute()
// const { id } = route.query
onLoad((option) => {
  loading.value = true
  console.log(option);
  id = option.id|| 0;
  getCategoryList(id)
  uni.setNavigationBarTitle({
    title: '回收分类',
  })
})
// 声明请求参数
interface Params {
  id: number
  page: number
  size: number
}
// 实现请求参数
// const params: Params = {
//   id: 1,
// }
// 默认请求 id 为 1 的分类
interface Category {
  id: number
  name: string
}
// 分类列表 声明
interface CategoryList {
  data: Category[]
}

const categoryList = ref<Category[]>([])
// 默认选中第一个分类
const activeIndex = ref(0)
// 实现 型号列表
const modelList = ref<Category[]>([])

const router = useRouter()
// 请求分类列表
const getCategoryList = async () => {
  const res = await fetchCategoryList({ id })
  // 循环遍历res.data
  const modelsdata = await getProductPricesList({ model_id: res.data[0].id })
  if (modelsdata.data.total !== 0) {
    res.data.forEach((item) => {
      if (item.children.length == 0) {
        item.children = [{ ...item }]
      }
      item.children.forEach((items) => {
        if (items.children.length == 0) {
          items.children = [{ ...items }]
        }
      })
    })	
  }
  res.data.some((item)=>{
	  item.children.sort((a,b)=>b.sort-a.sort)
  })
  categoryList.value = res.data
  loading.value = false
}
const changeActiveIndex = (index: number) => {
  activeIndex.value = index
}

// 

// 跳转 linkModel 详情页
const linkModel = (id: number) => {
  redirect({ url: '/pages/modelView/detail', param: { id } })
}
let loading = ref<boolean>(true)
let id = null;

/**
 * 电梯导航相关的业务
 * */
const xilieIndex = ref(0)
const scrollTop = ref(0)
const old = ref({
  scrollTop: 0,
})

const scroll = (e) => {
  
  // 获取
  old.value.scrollTop = e.detail.scrollTop
  // 获取到每一个列表的offsetTop值 如果e.detail.scrollTop大于这个值 就给对应的索引的 xiliexIndex 赋值
  // 获取到所有的节点
  const list = document.querySelectorAll('.modelListItem')
  // console.log(list)
  // 获取到每一个节点的offsetTop值
  const arr = []
  list.forEach((item) => {
    arr.push(item.offsetTop)
  })
  
  // 获取到滚动条的位置
  const scrollTop = e.detail.scrollTop
  // 获取到索引
  // 如果 scrollTop 在 arr[i] 和 arr[i+1] 之间 就给 xilieIndex 赋值
  for (let i = 0; i < arr.length; i++) {
    if (scrollTop >= arr[i] && scrollTop < arr[i + 1]) {
      xilieIndex.value = i
    }
  }
}

const scrollToSection = (i) => {
  // i 是 系列中 的一个对象
  // 通过 activeIndex 找到 i 的索引
  const index = categoryList.value[activeIndex.value].children.findIndex(
    (item) => item.id == i.id
  )
 
  // 获取到scrollTop值
  const model_list = document.querySelector(
    `.modelList>.modelListItem:nth-child(${index + 1})`
  )

  const right = document.querySelector('.right')
 

  if (model_list) {
    // model_list.offsetTop,
    scrollTop.value = model_list.offsetTop
    xilieIndex.value = index // 更新活动标题索引
  }
}
</script>

<style scoped lang='scss'>
@import './index.scss';

</style>
