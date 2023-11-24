<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-[20px]">{{ pageName }}</span>
        <el-button type="primary" class="w-[100px]" @click="addEvent">
          {{ t('addProductProperty') }}
        </el-button>
      </div>
      <!-- my-[10px] -->
      <el-card class="box-card !border-none table-search-wrap" shadow="never">
        <!-- <el-form
          :inline="true"
          :model="propertyTable.searchParam"
          ref="searchFormRef"
        >
          <el-form-item :label="t('key')" prop="key">
            <el-input
              v-model="propertyTable.searchParam.key"
              :placeholder="t('keyPlaceholder')"
            />
          </el-form-item>

          <el-form-item :label="t('value')" prop="value">
            <el-input
              v-model="propertyTable.searchParam.value"
              :placeholder="t('valuePlaceholder')"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="loadProductPropertyList()">{{
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
          :data="propertyTable.data"
          size="large"
          v-loading="propertyTable.loading"
        >
          <template #empty>
            <span>{{ !propertyTable.loading ? t('emptyData') : '' }}</span>
          </template>
          <el-table-column type="expand">
            <template #default="props">
              <div class="m-[10px]">
                <MyTags
                  v-if="props.row.type == 'only'"
                  :dynamicTags="props.row"
                  @handleClose="handleClose"
                  @handleInputConfirm="handleInputConfirm"
                />
                <div v-else>
                  <div class="js-end">
                    <el-button @click="addAttr(props.row.id)">
                      {{ t('addAttr') }}
                    </el-button>
                  </div>

                  <el-card class="m-[10px]" shadow="never">
                    <div
                      class="js-bt mt-[5px]"
                      v-for="tag in props.row.children"
                    >
                      <div>
                        <el-tag> {{ tag.value }} </el-tag>
                        <span class="ml-[10px]"> {{ tag.comment }} </span>
                      </div>

                      <el-button
                        class="ml-[10px]"
                        @click="deleteEvent(props.row.id)"
                        type="danger"
                        size="small"
                      >
                        {{ t('delete') }}
                      </el-button>
                    </div>
                  </el-card>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="id" :label="t('id')" min-width="120" />
          <el-table-column prop="value" :label="t('value')" min-width="120" />
          <el-table-column
            prop="comment"
            :label="t('comment')"
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
            v-model:current-page="propertyTable.page"
            v-model:page-size="propertyTable.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="propertyTable.total"
            @size-change="loadProductPropertyList()"
            @current-change="loadProductPropertyList"
          />
        </div>
      </div>
    </el-card>
  </div>
  <!-- addAttr 添加属性 的dailog -->
  <el-dialog
    title="添加属性"
    v-model="addAttrDialogVisible"
    width="30%"
    :before-close="() => (addAttrDialogVisible = false)"
  >
    <el-form
      :model="formData"
      :rules="formRules"
      ref="formRef"
      label-position="right"
      label-width="70px"
    >
      <el-form-item :label="t('key')" prop="value">
        <el-input v-model="formData.value"></el-input>
      </el-form-item>
      <el-form-item :label="t('comment')" prop="comment">
        <el-input v-model="formData.comment"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addAttrDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('formRef')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import { t } from '@/lang'
import {
  getProductPropertyList,
  addProductProperty,
  deleteProductProperty,
} from '@/api/property'
import { img } from '@/utils/common'
import type { ElMessageBox, FormInstance } from 'element-plus'

import { useRouter, useRoute } from 'vue-router'
// 导入dynamicTags组件
import MyTags from '@/components/property/MyTags.vue'

const route = useRoute()
const pageName = route.meta.title

const propertyTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  initialFormData: {
    id: '',
    pid: '',
    value: '',
    comment: '',
    sort: 0,
  },
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取产品属性列表
 */
const loadProductPropertyList = (page: number = 1) => {
  propertyTable.loading = true
  propertyTable.page = page

  getProductPropertyList({
    page: propertyTable.page,
    limit: propertyTable.limit,
    ...propertyTable.searchParam,
  })
    .then((res) => {
      propertyTable.loading = false
      propertyTable.data = res.data
      propertyTable.total = res.data.total
    })
    .catch(() => {
      propertyTable.loading = false
    })
}
loadProductPropertyList()

const router = useRouter()

/**
 * 添加产品属性
 */
const addEvent = () => {
  router.push('/product/property/edit')
}

/**
 * 编辑产品属性
 * @param data
 */
const editEvent = (data: any) => {
  router.push('/product/property/edit?id=' + data.id)
}

/**
 * 删除产品属性
 */
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t('propertyDeleteTips'), t('warning'), {
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel'),
    type: 'warning',
  }).then(() => {
    deleteProductProperty(id)
      .then(() => {
        loadProductPropertyList()
      })
      .catch(() => {})
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  loadProductPropertyList()
}
const handleClose = (tag: string) => {
  // 直接调用
  deleteEvent(tag)
}
const handleInputConfirm = async (obj: string) => {
  // 直接调用
  console.log(obj)
  // 将pid 和value 传递给后台
  const res = await addProductProperty(obj)
  if (res.code == 1) {
    loadProductPropertyList()
  }
}

// 添加属性的dialog
const addAttrDialogVisible = ref(false)
const formRef = ref<FormInstance>()
const initialFormData = {
  pid: 0,
  value: '',
  comment: '',
  sort: 0,
}
const formData: Record<string, any> = reactive({ ...initialFormData })
const formRules = computed(() => {
  return {
    value: [{ required: true, message: t('keyPlaceholder'), trigger: 'blur' }],
    comment: [
      { required: true, message: t('keyEnPlaceholder'), trigger: 'blur' },
    ],
  }
})
const addAttr = (id: number) => {
  addAttrDialogVisible.value = true
  formData.pid = id
}
// 提交表单 添加属性
const submitForm = async () => {
  const formEl = formRef.value
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const data = formData
      const res = await addProductProperty(data)
      if (res.code == 1) {
        addAttrDialogVisible.value = false
        loadProductPropertyList()
      }
    }
  })
  // 清空表单
  Object.assign(formData, initialFormData)
}
</script>

<style lang="scss" scoped>
.js-bt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.js-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
