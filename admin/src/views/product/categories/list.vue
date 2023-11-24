<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-[20px]">{{ pageName }}</span>
        <el-button type="primary" class="w-[100px]" @click="addEvent">
          {{ t('addProductCategories') }}
        </el-button>
      </div>

      <el-card class="box-card !border-none table-search-wrap" shadow="never">
        <!-- <el-form
          :inline="true"
          :model="categoriesTable.searchParam"
          ref="searchFormRef"
        >
          <el-form-item :label="t('name')" prop="name">
            <el-input
              v-model="categoriesTable.searchParam.name"
              :placeholder="t('namePlaceholder')"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadProductCategoriesList()">{{
              t('search')
            }}</el-button>
            <el-button @click="resetForm(searchFormRef)">{{
              t('reset')
            }}</el-button>
          </el-form-item>
        </el-form> -->
      </el-card>

      <div class="mt-[10px]">
        <el-table
          :data="categoriesTable.data"
          size="large"
          v-loading="categoriesTable.loading"
          row-key="id"
        >
          <template #empty>
            <span>{{ !categoriesTable.loading ? t('emptyData') : '' }}</span>
          </template>
          <el-table-column prop="id" :label="t('id')" min-width="120" />
          <el-table-column
            prop="parent_name"
            :label="t('parent_name')"
            min-width="120"
          />
          <el-table-column prop="name" :label="t('name')" min-width="120" />
          <el-table-column :label="t('icon')" min-width="120">
            <template #default="{ row }">
              <img
                v-if="row.icon"
                :src="img(row.icon)"
                alt=""
                class="w-[50px] h-[50px] rounded-full"
              />
            </template>
          </el-table-column>
          <el-table-column prop="level" :label="t('level')" min-width="120">
            <template #default="{ row }">
              <el-tag type="danger" v-if="row.level === 0">
                {{ t('firstLevel') }}
              </el-tag>
              <el-tag v-else-if="row.level === 1">
                {{ t('secondLevel') }}
              </el-tag>
              <el-tag type="success" v-else-if="row.level == 2">
                {{ t('thirdLevel') }}
              </el-tag>
              <el-tag type="warning" v-else-if="row.level === 3">
                {{ t('fourLevel') }}
              </el-tag>
              <el-tag v-else> {{ row.level + 1 }} 级</el-tag>
            </template>
          </el-table-column>
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
            v-model:current-page="categoriesTable.page"
            v-model:page-size="categoriesTable.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="categoriesTable.total"
            @size-change="loadProductCategoriesList()"
            @current-change="loadProductCategoriesList"
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
  getProductCategoriesList,
  deleteProductCategories,
} from '@/api/categories'
import { img } from '@/utils/common'
import { ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const pageName = route.meta.title

const categoriesTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    pid: '',
    name: '',
  },
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取回收产品分类表列表
 */
const loadProductCategoriesList = (page: number = 1) => {
  categoriesTable.loading = true
  categoriesTable.page = page

  getProductCategoriesList({
    page: categoriesTable.page,
    limit: categoriesTable.limit,
    ...categoriesTable.searchParam,
  })
    .then((res) => {
      categoriesTable.loading = false
      categoriesTable.data = res.data
      categoriesTable.total = res.data.total
    })
    .catch(() => {
      categoriesTable.loading = false
    })
}
loadProductCategoriesList()

const router = useRouter()

/**
 * 添加回收产品分类表
 */
const addEvent = () => {
  router.push('/product/categories/edit')
}

/**
 * 编辑回收产品分类表
 * @param data
 */
const editEvent = (data: any) => {
  router.push('/product/categories/edit?id=' + data.id)
}

/**
 * 删除回收产品分类表
 */
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t('categoriesDeleteTips'), t('warning'), {
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel'),
    type: 'warning',
  }).then(() => {
    deleteProductCategories(id)
      .then(() => {
        loadProductCategoriesList()
      })
      .catch(() => {})
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  loadProductCategoriesList()
}
</script>

<style lang="scss" scoped></style>
