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
        <!-- <el-form-item :label="t('pid')">
          <el-input
            v-model="formData.pid"
            clearable
            :placeholder="t('pidPlaceholder')"
            class="input-width"
          />
        </el-form-item> -->

        <el-form-item :label="t('name')" prop="name">
          <el-input
            v-model="formData.name"
            clearable
            :placeholder="t('namePlaceholder')"
            class="input-width"
          />
        </el-form-item>
        <el-form-item :label="t('level')" prop="level">
          <!-- 多选框 分为 一级 , 二级 , 三级 多级  -->
          <el-select
            v-model="formData.level"
            class="m-2"
            :placeholder="t('addlevelinfo')"
            :disabled="id"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item
          :label="t('prentinfo')"
          :placeholder="t('addprentinfo')"
          v-if="formData.level >= 2"
        >
          <el-cascader
            v-model="formData.pid"
            :options="categoryList"
            :props="props"
            @change="handleChange"
          />
        </el-form-item>
        <el-form-item
          :label="t('prentinfo')"
          :placeholder="t('addprentinfo')"
          v-if="formData.level == 1"
        >
          <el-select
            v-model="formData.pid"
            class="m-2"
            :placeholder="t('addlevelinfo')"
          >
            <el-option
              v-for="item in categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item :label="t('icon')">
          <upload-image v-model="formData.icon" />
        </el-form-item>
        <el-form-item :label="t('sort')" prop="sort">
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
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import {
  getProductCategoriesInfo,
  addProductCategories,
  editProductCategories,
  fetchCategoryList,
} from '@/api/categories'
import { useRoute } from 'vue-router'

const route = useRoute()
const id: number = parseInt(route.query.id)
const loading = ref(false)
const pageName = route.meta.title
// options
const options = [
  {
    value: '0',
    label: '一级-分类',
  },
  {
    value: '1',
    label: '二级-品牌',
  },
  {
    value: '2',
    label: '三级-系列',
  },
  {
    value: '3',
    label: '四级-机型',
  },
]

/**
 * 表单数据
 */
const initialFormData = {
  id: '',
  pid: '',
  name: '',
  level: '',
  sort: '',
  icon: '',
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const setFormData = async (id: number = 0) => {
  Object.assign(formData, initialFormData)
  const data = await (await getProductCategoriesInfo(id)).data
  Object.keys(formData).forEach((key: string) => {
    if (data[key] != undefined) formData[key] = data[key]
  })
  // 如果level 的值 为0 或者 null 直接赋值options 的第一个值
  if (formData.level == '0' || formData.level == null) {
    formData.level = options[0].value
  } else if (formData.level == 3) {
    formData.level = options[3].value
  } else {
    formData.level = formData.level == 1 ? options[1].value : options[2].value
  }

  getCategoryList()
}
if (id) {
  setFormData(id)
}

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
  return {
    name: [{ required: true, message: t('namePlaceholder'), trigger: 'blur' }],
  }
})

const onSave = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      formData.pid =
        formData.pid.length > 1
          ? (formData.pid = formData.pid[formData.pid.length - 1])
          : formData.pid
      const data = formData
      console.log(data)

      const save = id ? editProductCategories : addProductCategories
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

// 如果用户选择了非一级分类 , 那么就需要请求所有的一级分类 , 用于用户选择
const categoryList = ref([])
// 通过watch 监听用户的选择
watch(
  // 第一个参数是一个函数，返回要被监听的数据
  () => formData.level,

  // 第二个参数是一个回调函数，在数据变化时被调用
  (newv, oldv) => {
    console.log(newv + 'n', oldv + 'o')
    getCategoryList() // 执行获取类别列表的函数
  }
)

const getCategoryList = async () => {
  // 如果选择了一级分类 直接返回
  if (formData.level == '0') return
  // 如果选择了二级分类 , 那么就需要请求所有的一级分类 , 用于用户选择
  // 所以需要将当的分类的值 -1 , 用于请求一级分类或者二级分类
  const level = parseInt(formData.level) - 1
  console.log(level)

  categoryList.value = await (await fetchCategoryList({ level })).data
}
// 级联选择器 的触发事件
const props = {
  expandTrigger: 'hover' as const,
  value: 'id', // 数据存储的值字段
  label: 'name', // 显示的标签字段
}

const back = () => {
  history.back()
}
</script>

<style lang="scss" scoped></style>
