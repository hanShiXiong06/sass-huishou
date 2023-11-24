<template>
  <el-cascader
    v-model="formData.id"
    :options="modelList"
    :props="modelProps"
    :show-all-levels="false"
    @change="handleChange"
    clearable
  />
</template>

<script lang="ts" setup>
import { ref, reactive, defineEmits, watch } from 'vue'
import { getProductCategoriesList } from '@/api/categories'

const emits = defineEmits('change')

// const handleChange = (val: any) => {
//   console.log(val)
//   emits('change', val)
// }

const modelList = ref([])
const modelProps = {
  children: 'children',
  label: 'name',
  value: 'id',
  expandTrigger: 'hover' as const,
  checkStrictly: true,
}
const initialFormData = {
  id: 0,
}
const formData: Record<string, any> = reactive({ ...initialFormData })

// 请求型号列表
const loadProductModelList = async () => {
  const res = await getProductCategoriesList()
  console.log(res)
  modelList.value = res.data
}
loadProductModelList()
watch(formData.id, (newVal, oldVal) => {
  // 在值变化时触发change事件，并确保只触发一次
  if (newVal !== oldVal) {
    // 在这里触发你的change事件
    // 如果你的组件需要触发外部的change事件，可以使用$emit
    emits('change', newVal)
    // console.log('Change event triggered with new value:', newVal)
  }
})
</script>
