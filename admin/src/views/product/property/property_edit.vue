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
    <el-card class="box-card border" shadow="never">
      <el-form
        :model="formData"
        label-width="90px"
        ref="formRef"
        :rules="formRules"
        class="page-form"
      >
        <el-form-item :label="t('key')" prop="value">
          <el-input
            v-model="formData.value"
            clearable
            :placeholder="t('keyPlaceholder')"
            class="input-width"
          />
        </el-form-item>
        <el-form-item :label="t('keyEn')" prop="comment">
          <el-input
            v-model="formData.comment"
            clearable
            :placeholder="t('keyEnPlaceholder')"
            class="input-width"
          />
        </el-form-item>
        <el-form-item :label="t('type')">
          <!-- 单选 typeList -->
          <el-radio-group v-model="formData.type">
            <el-radio
              v-for="(item, index) in typeList"
              :key="index"
              :label="item"
            >
              {{ item == 'only' ? t('only') : t('list') }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="t('sort')">
          <el-input-number
            v-model="formData.sort"
            :min="0"
            :max="9999"
            class="input-width"
          />
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
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import {
  getProductPropertyInfo,
  addProductProperty,
  editProductProperty,
} from '@/api/property'
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
  value: '',
  comment: '',
  sort: 0,
  type: '',
}
// 通过 Ts 声明数组 ['only', 'list']
const typeList: Array<string> = ['only', 'list']
const formData: Record<string, any> = reactive({ ...initialFormData })

const setFormData = async (id: number = 0) => {
  Object.assign(formData, initialFormData)
  const data = await (await getProductPropertyInfo(id)).data
  Object.keys(formData).forEach((key: string) => {
    if (data[key] != undefined) formData[key] = data[key]
  })
}
if (id) setFormData(id)

const formRef = ref<FormInstance>()

// 表单验证规则
// const formRules = computed(() => {
//   return {
//     value: [{ required: true, message: t('keyPlaceholder'), trigger: 'blur' }],
//   }
// })
// 表单验证规则
const formRules = computed(() => {
  return {
    value: [{ required: true, message: t('keyPlaceholder'), trigger: 'blur' }],
    comment: [
      { required: true, message: t('keyEnPlaceholder'), trigger: 'blur' },
    ],
  }
})

const onSave = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      const data = formData

      const save = id ? editProductProperty : addProductProperty
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
</script>

<style lang="scss" scoped></style>
