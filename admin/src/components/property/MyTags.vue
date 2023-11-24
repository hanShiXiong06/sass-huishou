<template>
  <div class="container df">
    <draggable
      :list="dynamicTags.children"
      ghost-class="ghost"
      :force-fallback="true"
      chosen-class="chosenClass"
      animation="300"
      @start="_onStart"
      @end="_onEnd"
    >
      <template #item="{ element }">
        <span class="item">
          <el-tag
            class="mx-1"
            closable
            :disable-transitions="false"
            @close="_handleClose(element.id)"
          >
            {{ element.value }}
          </el-tag>
        </span>
      </template>
    </draggable>
    <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      size="small"
      class="m-2 w-50"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput(dynamicTags.id)"
    >
      + New Tag
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, defineProps, defineEmits, reactive } from 'vue'
import draggable from 'vuedraggable'
import { ElInput } from 'element-plus'
// test
interface Category {
  id: number
  type: string
}

// test end

const inputValue = ref('')
// const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const propsdata = defineProps({
  dynamicTags: {
    type: Object,
    default: {},
  },
})
// 定义父级id
const pid = ref(0)

// 定义一个emit
const emits = defineEmits()

const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const showInput = (id: number) => {
  console.log(id)
  pid.value = id
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  // 组合成一个对象
  const obj = {
    pid: pid.value,
    value: inputValue.value,
  }
  if (inputValue.value) {
    emits('handleInputConfirm', obj)
  }
  inputVisible.value = false
  inputValue.value = ''
}
// 完成删除标签的功能
// handleClose
const _handleClose = (id: number) => {
  // emits.handleClose(dynamicTags.value)
  console.log(id)
  // 将id传递给父组件
  emits('handleClose', id)
}

// 拖拽
const _onStart = () => {
  console.log('start', propsdata.dynamicTags)
}
const _onEnd = () => {
  console.log('end', propsdata.dynamicTags)
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 100px !important;
}
.container {
  display: flex;
}
</style>
