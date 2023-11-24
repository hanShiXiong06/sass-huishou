<template>
  <el-dialog
    v-model="showDialog"
    :title="formData.id ? t('updateProductPrices') : t('addProductPrices')"
    width="500px"
    :destroy-on-close="true"
  >
    <el-form
      :model="formData"
      label-width="90px"
      ref="formRef"
      :rules="formRules"
      class="page-form"
      v-loading="loading"
    >
      <el-form-item v-if="!formData.id" :label="t('skuId')" prop="sku_id">
        <el-cascader
          v-model="formData.ids"
          :options="modelList"
          :props="modelProps"
          :show-all-levels="false"
          @change="handleChange"
          clearable
          style="width: 100%"
        />
        {{ formData.name }}
      </el-form-item>

      <el-form-item v-else :label="t('skuId')" prop="name">
        <el-input
          v-model="formData.name"
          clearable
          disabled
          :placeholder="t('namePlaceholder')"
          style="width: 100%"
        />
      </el-form-item>

      <el-form-item :label="t('price')" prop="price">
        <el-input
          v-model="formData.price"
          clearable
          :placeholder="t('pricePlaceholder')"
          class="input-width"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="confirm(formRef)"
          >{{ t('confirm') }}</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { addProductPrices, getProductPricesInfo } from '@/api/product_prices'
import { getProductModelList } from '@/api/productmodel'
// 请求型号列表
import { getProductCategoriesList } from '@/api/categories'

const showDialog = ref(false)
const loading = ref(false)

/**
 * 表单数据
 */
const initialFormData = {
  id: '',
  ids: '',
  sku_id: '',
  name: '',
  model_id: '',
  xilie_id: '',
  brand_id: '',
  type_id: '',
  price: '',
  property: [],
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
  return {
    price: [
      { required: true, message: t('pricePlaceholder'), trigger: 'blur' },
    ],
    sku_id: [
      { required: true, message: t('skuIdPlaceholder'), trigger: 'blur' },
    ],
  }
})

const emit = defineEmits(['complete', 'change'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return

  const save = addProductPrices

  await formEl.validate(async (valid) => {
    console.log(valid)

    if (valid) {
      loading.value = true

      const data = formData
      console.log(data)

      save(data)
        .then((res) => {
          loading.value = false
          showDialog.value = false
          emit('complete')
        })
        .catch((err) => {
          loading.value = false
        })
    }
  })
}

const setFormData = async (row: any = null) => {
  Object.assign(formData, initialFormData)
  loading.value = true
  if (row) {
    const data = await (await getProductPricesInfo(row.id)).data
    if (data) {
      Object.keys(formData).forEach((key: string) => {
        if (data[key] != undefined) formData[key] = data[key]
      })
    }
    // 将 property 中的数据 通过id排序
    formData.property.sort((a: any, b: any) => a.id - b.id)
    // 然后 取出来 拼接成 iphone12 国行 256G 靓机
    formData.property.forEach((item: any) => {
      formData.name += item.value
    })
  }
  loading.value = false
}

defineExpose({
  showDialog,
  setFormData,
})

const handleChange = (val: any) => {
  console.log(val)
  if (!val) {
    // 提示用户选择 产品型号
    ElMessage({
      message: '请选择产品型号',
      type: 'warning',
    })
    return
  }
  console.log(formData)
  formData.sku_id = val[val.length - 1]
  formData.type_id = val[0]
  formData.brand_id = val[1] ? val[1] : 0
  formData.xilie_id = val[2] ? val[2] : 0
  formData.model_id = val[3] ? val[3] : 0
}

const modelList = ref([])
const modelProps = {
  children: 'children',
  label: 'name',
  value: 'id',
  expandTrigger: 'hover' as const,
  lazy: true,

  async lazyLoad(node, resolve) {
    const { value, level } = node
    // 携带value 请求sku列表
    const res = await getProductModelList({ category_id: value })
    // 将获取到的数据传递给resolve供其渲染节点
    // 将res.data中的key 由category_name 改为name
    res.data.data.forEach((item: any) => {
      // 将property中数据 通过id排序
      item.property.sort((a: any, b: any) => a.id - b.id)
      item.name = item.category_name + ' '
      // 并把property这个数组中的值和item.name拼接 成 iphone12 国行 256G 靓机
      item.property.forEach((items: any) => {
        item.name += items.value
      })
      delete item.category_name
      //   delete item.property
      // 只请求一次  leaf 就为true
      item.leaf = true
    })
    console.log(res.data)

    resolve(res.data.data)
  },
}

// 请求型号列表
const loadProductModelList = async () => {
  const res = await getProductCategoriesList()
  console.log(res)
  modelList.value = res.data
}
loadProductModelList()
</script>

<style lang="scss" scoped></style>
