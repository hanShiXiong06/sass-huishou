<template>
  <!--  <u-navbar title="首页" :autoBack="true" style="margin-bottom: 45px">
  </u-navbar> -->
  <view class="bg-white">
    <block v-if="!loading">
      <u-navbar title="回收分类" :autoBack="true" style="margin-bottom: 25px">
      </u-navbar>
      <view class="pages">
        <view
          class="border-solid border-t-0 border-l-0 border-r-0 border-b-[1px] border-gray-200 p-[10px]"
        >
          <view class="text-[16px]"> </view>
        </view>

        <view>
          <view>
            <u-row gutter="10" align="start">
              <u-col span="3">
                <scroll-view
                  :scroll-top="scrollTop"
                  scroll-y="true"
                  class="scroll-Y"
                  @scrolltoupper="upper"
                  @scrolltolower="lower"
                  @scroll="scroll"
                  style="height: 300px; position: fixed; width: 23%"
                >
                  <u-list height="auto">
                    <u-list-item
                      v-for="(item, index) in categoryList"
                      :key="index"
                    >
                      <u-cell
                        :title="item.name"
                        @click="changeActiveIndex(index)"
                        style="margin: 10px 0px"
                        :class="activeIndex == index ? 'active' : ''"
                      >
                        <template #icon>
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
              </u-col>

              <u-col span="9">
                <view class="right">
                  <view v-if="categoryList.length != 0">
                    <u-sticky bgColor="#fff">
                      <u-tabs
                        itemStyle="padding-left: 20px; padding-right: 20px; height: 34px;"
                        :list="categoryList[activeIndex].children"
                      ></u-tabs>
                    </u-sticky>

                    <view class="modelList">
                      <view
                        v-for="(item, index) in categoryList[activeIndex]
                          .children"
                        :key="index"
                      >
                        <u-cell-group class="model_list" :title="item.name">
                          <u-cell
                            v-for="(model, indexs) in item.children"
                            :key="indexs"
                            :icon="'https://gl.hsxbk.top/' + model.icon"
                            :title="model.name"
                            isLink
                            @click="linkModel(model.id)"
                          ></u-cell>
                          <u-cell
                            v-if="item.children.length == 0"
                            title="暂无数据"
                          >
                          </u-cell>
                        </u-cell-group>
                      </view>
                    </view>
                  </view>
                </view>
              </u-col>
            </u-row>
          </view>
          <!-- <text>list</text> -->
          <!-- 实现滑动 左侧 分类 布局 -->

          <!-- 实现滑动 右侧 系列 布局 -->
        </view>
        <tabbar />
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

//解构参数
const route = useRoute()
const { id } = route.query
// console.log(id)

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
          // items.id = items.pid
          items.children = [{ ...items }]
        }
      })
    })
  }
  //
  categoryList.value = res.data
  console.log(categoryList.value)

  loading.value = false
}
const changeActiveIndex = (index: number) => {
  console.log(index)

  activeIndex.value = index
}

getCategoryList()

// 跳转 linkModel 详情页
const linkModel = (id: number) => {
  redirect({ url: '/pages/modelView/detail', param: { id } })
}
let loading = ref<boolean>(true)
onLoad((option) => {
  loading.value = true
  uni.setNavigationBarTitle({
    title: '回收分类',
  })
})
</script>

<style scoped>
.title {
  /* font-size: 16px; */
  /* font-weight: 600; */
  color: #928e8e;
  margin: 10px;
}

.active {
  /* 右侧一条线 */
  border-left: 2px solid #f00;
}

.model_list {
  box-shadow: 0 0 3px #ddd;
  margin-top: 10px;
}

.right {
  margin: 0px 10px;
  border-radius: 5px;
}
</style>
