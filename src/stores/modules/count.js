import { defineStore } from 'pinia'
import { ref } from 'vue'

// 数字计算模块
export const useCountStore = defineStore(
  'big-count', // 唯一标识id
  () => {
    const count = ref(100)
    const add = (n) => (count.value += n)
    return { count, add }
  }
)
