<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-[20px]">{{ pageName }}</span>
        <el-button type="primary" class="w-[100px]" @click="addEvent">
          {{ t('addProductPrices') }}
        </el-button>
      </div>

      <el-card
        class="box-card !border-none my-[10px] table-search-wrap"
        shadow="never"
      >
        <el-form
          :inline="true"
          :model="productPricesTable.searchParam"
          ref="searchFormRef"
        >
          <el-form-item :label="t('skuId')" prop="sku_id">
            <model-list @change="handelModelId" />
          </el-form-item>

          <el-form-item :label="t('price')" prop="price">
            <el-input
              v-model="productPricesTable.searchParam.price"
              :placeholder="t('pricePlaceholder')"
            />
          </el-form-item>
          <el-form-item :label="t('createTime')" prop="create_time">
            <daterange-picker
              v-model:startTime="productPricesTable.searchParam.start_time"
              v-model:endTime="productPricesTable.searchParam.end_time"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadProductPricesList()">{{
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
          :data="productPricesTable.data"
          size="large"
          v-loading="productPricesTable.loading"
        >
          <template #empty>
            <span>{{ !productPricesTable.loading ? t('emptyData') : '' }}</span>
          </template>
          <el-table-column prop="id" :label="t('skuId')" width="120" />
          <el-table-column prop="name" :label="t('name')" min-width="120">
          </el-table-column>
          <el-table-column :label="t('property')" min-width="120">
            <template #default="{ row }">
              <div v-for="props in row.property" class="mt-[5px]">
                {{ props.name }}: <el-tag>{{ props.value }}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" :label="t('price')" min-width="120" />
          <el-table-column
            prop="create_time"
            :label="t('createTime')"
            min-width="120"
          />
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
            v-model:current-page="productPricesTable.page"
            v-model:page-size="productPricesTable.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="productPricesTable.total"
            @size-change="loadProductPricesList()"
            @current-change="loadProductPricesList"
          />
        </div>
      </div>

      <productprices-edit
        ref="editProductPricesDialog"
        @complete="loadProductPricesList"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import { getProductPricesList, deleteProductPrices } from '@/api/product_prices'
import { img } from '@/utils/common'
import { ElMessageBox } from 'element-plus'
import productpricesEdit from './components/productprices-edit.vue'
import ModelList from '../../product/productmodel/components/ModelList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title

const productPricesTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    sku_id: '',
    model_id: '',
    xilie_id: '',
    brand_id: '',
    type_id: '',
    price: '',
    create_time: '',
  },
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取产品价格列表
 */
const loadProductPricesList = (page: number = 1) => {
  productPricesTable.loading = true
  productPricesTable.page = page

  getProductPricesList({
    page: productPricesTable.page,
    limit: productPricesTable.limit,
    ...productPricesTable.searchParam,
  })
    .then((res) => {
      productPricesTable.loading = false
      productPricesTable.data = res.data.data
      productPricesTable.total = res.data.total
    })
    .catch(() => {
      productPricesTable.loading = false
    })
}
loadProductPricesList()

const editProductPricesDialog: Record<string, any> | null = ref(null)

/**
 * 添加产品价格
 */
const addEvent = () => {
  editProductPricesDialog.value.setFormData()
  editProductPricesDialog.value.showDialog = true
}

/**
 * 编辑产品价格
 * @param data
 */
const editEvent = (data: any) => {
  editProductPricesDialog.value.setFormData(data)
  editProductPricesDialog.value.showDialog = true
}

/**
 * 删除产品价格
 */
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t('productPricesDeleteTips'), t('warning'), {
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel'),
    type: 'warning',
  }).then(() => {
    deleteProductPrices(id)
      .then(() => {
        loadProductPricesList()
      })
      .catch(() => {})
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  loadProductPricesList()
}

/**
 * 监听 handelModelId 的变化
 * */
const handelModelId = (data: any) => {
  console.log('handelModelId', data)

  // 终止监听
  if (!data) {
    // 清空搜索参数
    productPricesTable.searchParam.type_id = ''
    productPricesTable.searchParam.brand_id = ''
    productPricesTable.searchParam.xilie_id = ''
    productPricesTable.searchParam.model_id = ''
    loadProductPricesList()
    return
  }
  // 解构 type_id , brand_id , xilie_id , model_id
  productPricesTable.searchParam.type_id = data[0]
  productPricesTable.searchParam.brand_id = data[1]
  productPricesTable.searchParam.xilie_id = data[2]
  productPricesTable.searchParam.model_id = data[3]
  loadProductPricesList()
}
</script>

<style lang="scss" scoped></style>
