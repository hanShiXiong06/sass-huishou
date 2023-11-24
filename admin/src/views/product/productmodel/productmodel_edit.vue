<template>
  <div class="main-container">
    <div class="detail-head">
      <div class="left" @click="back()">
        <span class="iconfont iconxiangzuojiantou !text-xs"></span>
        <span class="ml-[1px]">{{ t('returnToPreviousPage') }}</span>
      </div>
      <span class="adorn">|</span>
      <span class="right">{{ pageName }}</span>
    </div>
    <el-card class="box-card !border-none" shadow="never">
      <el-form
        :model="formData"
        label-width="90px"
        ref="formRef"
        :rules="formRules"
        class="page-form"
      >
        <el-form-item v-if="!id" :label="t('categoryname')">
          <el-cascader
            v-model="formData.id"
            :options="modelList"
            :props="modelProps"
            :show-all-levels="false"
            @change="handleChange"
          />
        </el-form-item>
        <el-form-item v-else :label="t('categoryname')" prop="category_name">
          <el-input
            v-model="formData.category_name"
            clearable
            :placeholder="t('categoryIdPlaceholder')"
            class="input-width"
            :disabled="id"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formData.property_values"
            clearable
            :placeholder="t('propertyValuesPlaceholder')"
            class="input-width"
            disabled
          />
        </el-form-item>
        <el-form-item :label="t('property')">
          <el-tree
            :props="props"
            :data="categoryList"
            node-key="id"
            show-checkbox
            :default-expanded-keys="checkedProperty"
            :default-checked-keys="checkedProperty"
            @check-change="handleNodeClick"
          />
          <!-- <el-input
            v-model="formData.property"
            clearable
            :placeholder="t('propertyPlaceholder')"
            class="input-width"
          /> -->
        </el-form-item>
        <el-form-item :label="t('state')">
          <el-switch
            v-model="formData.state"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>

        <el-form-item :label="t('sort')">
          <el-input-number v-model="formData.sort" :min="0" />
        </el-form-item>
      </el-form>
    </el-card>
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button type="primary" @click="onSave(formRef)">{{
          t('save')
        }}</el-button>
        <el-button @click="back()">{{ t('cancel') }}</el-button>
      </div>
    </div>
  </div>
  {{ formData.property }}
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import {
  getProductModelInfo,
  addProductModel,
  editProductModel,
} from '@/api/productmodel'
import { getProductPropertyList } from '@/api/property'
import { getProductCategoriesList } from '@/api/categories'
import { useRoute } from 'vue-router'

const route = useRoute()
const id: number = parseInt(route.query.id)
const loading = ref(false)
const pageName = route.meta.title

/**
 * 表单数据
 */
const initialFormData = {
  id: 0,
  category_id: 0,
  category_name: '',
  property_values: [],
  category: '',
  property: '',
  state: 0,
  sort: 0,
}
const checkedProperty = ref([])

const formData: Record<string, any> = reactive({ ...initialFormData })

const setFormData = async (id: number = 0) => {
  Object.assign(formData, initialFormData)
  const data = await (await getProductModelInfo(id)).data
  Object.keys(formData).forEach((key: string) => {
    if (data[key] != undefined) formData[key] = data[key]
  })
  console.log(data.property)

  checkedProperty.value = data.property.split(',').map((item: string) => {
    return parseInt(item)
  })
  // 直接将formData.property_values 分割成数组
  formData.property_values = formData.property_values.split(',')
}
if (id) {
  setFormData(id)
}

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
  return {
    category_id: [
      { required: true, message: t('categoryIdPlaceholder'), trigger: 'blur' },
    ],
  }
})

const onSave = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      // 如果property中有空格全部去掉
      formData.property = formData.property.replace(/\s+/g, '')
      const data = {
        id,
        type_id: formData.id[0],
        brand_id: formData.id[1],
        xilie_id: formData.id[2],
        category_id:
          formData.id[formData.id.length - 1] || formData.category_id,
        property: formData.property,
        state: formData.state,
        sort: formData.sort,
      }

      const save = id ? editProductModel : addProductModel
      save(data)
        .then((res) => {
          loading.value = false
          history.back()
        })
        .catch((err) => {
          loading.value = false
        })
    }
  })
}

const back = () => {
  history.back()
}

/**
 * 属性相关start
 * */
const categoryList = ref([])

const props = {
  children: 'children',
  label: 'value',
}

// 请求属性列表
const loadProductPropertyList = async () => {
  const res = await getProductPropertyList()
  console.log(res)
  // 如果res.data中的数据是第一层级 就给他添加一个禁用的属性
  res.data.forEach((item) => {
    if (item.children.length > 0) {
      item.disabled = true
    }
  })
  categoryList.value = res.data
}
loadProductPropertyList()

function handleNodeClick(data) {
  console.log(data)
  if (data.level == 0) return
  // 先判断已选择的id中是否有当前点击的id
  // checkedProperty
  // formData.property_values
  const index = checkedProperty.value.indexOf(data.id)
  if (index > -1) {
    checkedProperty.value.splice(index, 1)
    // formData.property_values.splice(index, 1)
    console.log(formData.property_values)
    formData.property_values.splice(index, 1)
  } else {
    checkedProperty.value.push(data.id)
    // formData.property_values.push(data.value)
    console.log(formData.property_values)
    formData.property_values.push(data.value)
  }
  formData.property = checkedProperty.value.join(',')
}

/**
 * 属性相关end
 * */

/**
 * 型号相关start
 * */
const modelList = ref([])
const modelProps = {
  children: 'children',
  label: 'name',
  value: 'id',
}
// 请求型号列表
const loadProductModelList = async () => {
  const res = await getProductCategoriesList()
  console.log(res)

  modelList.value = res.data
}
// 通过判断id是否有值来判断是添加还是编辑
if (!id) {
  loadProductModelList()
}

/**
 * 型号相关end
 *
 */
</script>

<style lang="scss" scoped></style>
