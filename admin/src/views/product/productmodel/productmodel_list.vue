<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-[20px]">{{ pageName }}</span>
        <el-button type="primary" class="w-[100px]" @click="addEvent">
          {{ t('addProductModel') }}
        </el-button>
      </div>

      <el-card
        class="box-card !border-none my-[10px] table-search-wrap"
        shadow="never"
      >
        <el-form
          :inline="true"
          :model="productModelTable.searchParam"
          ref="searchFormRef"
        >
          <el-form-item :label="t('typequery')" prop="state">
            <model-list @change="handelModelId" />
          </el-form-item>
          <el-form-item :label="t('name')" prop="name">
            <el-input
              v-model="productModelTable.searchParam.name"
              :placeholder="t('namePlaceholder')"
            />
          </el-form-item>

          <el-form-item :label="t('categoryId')" prop="category_id">
            <el-input
              v-model="productModelTable.searchParam.id"
              :placeholder="t('categoryIdPlaceholder')"
            />
          </el-form-item>
          <!-- <el-form-item :label="t('createTime')" prop="create_time">
            <daterange-picker
              v-model:startTime="productModelTable.searchParam.start_time"
              v-model:endTime="productModelTable.searchParam.end_time"
            />
          </el-form-item> -->
          <!-- <el-form-item :label="t('updateTime')" prop="update_time">
            <daterange-picker
              v-model:startTime="productModelTable.searchParam.start_time"
              v-model:endTime="productModelTable.searchParam.end_time"
            />
          </el-form-item>
          <el-form-item :label="t('sort')" prop="sort">
            <el-input
              v-model="productModelTable.searchParam.sort"
              :placeholder="t('sortPlaceholder')"
            />
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="loadProductModelList()">{{
              t('search')
            }}</el-button>
            <el-button @click="resetForm(searchFormRef)">{{
              t('reset')
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <div class="mt-[10px]">
        <el-table
          :data="productModelTable.data"
          size="large"
          v-loading="productModelTable.loading"
        >
          <template #empty>
            <span>{{ !productModelTable.loading ? t('emptyData') : '' }}</span>
          </template>
          <el-table-column prop="id" :label="t('id')" min-width="40" />
          <el-table-column
            prop="category_name"
            :label="t('name')"
            min-width="120"
          />
          <el-table-column :label="t('property')" min-width="200">
            <template #default="{ row }">
              <span v-for="(item, i) in row.property" :key="item.id"
                >{{ item.value }}
                <span v-if="i < row.property.length - 1"> | </span>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="state" :label="t('state')" min-width="120">
            <template #default="{ row }">
              <el-switch
                v-model="row.state"
                :active-value="1"
                :inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeState(row)"
              />
            </template>
          </el-table-column>
          <el-table-column prop="sort" :label="t('sort')" min-width="120" />
          <el-table-column
            :label="t('operation')"
            fixed="right"
            min-width="120"
          >
            <template #default="{ row }">
              <el-button type="primary" link @click="editEvent(row)">{{
                t('edit')
              }}</el-button>
              <el-button type="danger" link @click="deleteEvent(row.id)">{{
                t('delete')
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="mt-[16px] flex justify-end">
          <el-pagination
            v-model:current-page="productModelTable.page"
            v-model:page-size="productModelTable.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="productModelTable.total"
            @size-change="loadProductModelList()"
            @current-change="loadProductModelList"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import {
  getProductModelList,
  deleteProductModel,
  editProductModelState,
} from '@/api/productmodel'

import { img } from '@/utils/common'
import { ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
// 导入ModelList.vue
import ModelList from './components/ModelList.vue'

const route = useRoute()
const pageName = route.meta.title

const productModelTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    id: '',
    category_id: '',
    type_id: '',
    brand_id: '',
    xilie_id: '',
    name: '',
    state: '',
    create_time: '',
    update_time: '',
    sort: '',
    state: 1,
  },
})

const searchFormRef = ref<FormInstance>()
interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
}
// 分组数据

/**
 * 获取产品详情表列表
 */
const loadProductModelList = (page: number = 1) => {
  productModelTable.loading = true
  productModelTable.page = page

  getProductModelList({
    page: productModelTable.page,
    limit: productModelTable.limit,
    ...productModelTable.searchParam,
  })
    .then((res) => {
      productModelTable.loading = false
      productModelTable.data = res.data.data
      productModelTable.total = res.data.total
      // 对 productModelTable.data.property
      // 这个值目前是一个数组 有id 和 value
      // 通过id来排序
      productModelTable.data.forEach((item: any) => {
        item.property.sort((a: any, b: any) => {
          return a.id - b.id
        })
      })
    })
    .catch(() => {
      productModelTable.loading = false
    })
}
loadProductModelList()

const router = useRouter()

/**
 * 添加产品详情表
 */
const addEvent = () => {
  router.push('/product/productmodel/edit')
}

/**
 * 编辑产品详情表
 * @param data
 */
const editEvent = (data: any) => {
  router.push('/product/productmodel/edit?id=' + data.id)
}

/**
 * 删除产品详情表
 */
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t('productModelDeleteTips'), t('warning'), {
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel'),
    type: 'warning',
  }).then(() => {
    deleteProductModel(id)
      .then(() => {
        loadProductModelList()
      })
      .catch(() => {})
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  loadProductModelList()
}

// changeState 事件 改变产品详情表状态
const changeState = async (row: any) => {
  console.log(row)
  const params = {
    id: row.id,
    state: row.state,
  }
  const { data } = await editProductModelState(params)
  if (data.code === 200) {
    loadProductModelList()
    // element 提示成功
  }
}

// 监听handelModelId事件
const handelModelId = (val: any) => {
  // 每次重新请求数据时，清空搜索条件
  productModelTable.searchParam.type_id =
    productModelTable.searchParam.brand_id =
    productModelTable.searchParam.xilie_id =
    productModelTable.searchParam.category_id =
      ''

  // 更具val的长度来判断是哪个分类
  if (val === null) {
    productModelTable.searchParam.type_id = ''
    productModelTable.searchParam.brand_id = ''
    productModelTable.searchParam.xilie_id = ''
    productModelTable.searchParam.category_id = ''
    loadProductModelList()
    return
  }

  switch (val.length) {
    case 1:
      productModelTable.searchParam.type_id = val[0]
      break
    case 2:
      productModelTable.searchParam.brand_id = val[1]
      break
    case 3:
      productModelTable.searchParam.xilie_id = val[2]
      break
    case 4:
      productModelTable.searchParam.category_id = val[3]
      break
  }

  loadProductModelList()
}
</script>

<style lang="scss" scoped></style>
