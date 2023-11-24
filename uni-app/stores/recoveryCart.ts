// 回收车的stores

import { defineStore } from 'pinia'

export interface RecoveryCart {
  recoveryCart: Array<any>
}

// export const recoveryCart = reactive<RecoveryCart>({
//   recoveryCart: [],
// })

export const useRecoveryCartStore = defineStore('recovery', {
  state: (): RecoveryCart => {
    return {
      recoveryCart: [],
    }
  },
  actions: {
    // 设置回收车列表
    // async setRecoveryCart(recoveryCart: Array<any>) {
    //   this.recoveryCart = await recoveryCart
    // },
    // 添加回收车列表
    async addRecoveryCart(recoveryCart: Array<any>) {
      console.log(recoveryCart)
      await this.recoveryCart.push(await { ...recoveryCart })
    },
    // 获取回收车列表
    async getRecoveryCart() {
      return await this.recoveryCart
    },
    // 清空回收车列表
    // clearRecoveryCart() {
    //   this.recoveryCart = []
    // },
    // 删除回收车单项
    deleteRecoveryCart(id: Number) {
      this.recoveryCart = this.recoveryCart.filter((item) => item.id !== id)
    },
    // // 更新回收车单项
    // updateRecoveryCart(recoveryCart: Array<any>) {
    //   this.recoveryCart = this.recoveryCart.map((item) => {
    //     if (item.id === recoveryCart.id) {
    //       return recoveryCart
    //     }
    //     return item
    //   })
    // },
    /**
     *  单项的数量加一 ,
     * @params id
     * @return 实现让当前的id ++
     * */
    reduceRecoveryCartNum(id: Number) {
      // 通过id找到当前的数据 然后让当前的数据的num ++
      this.recoveryCart = this.recoveryCart.map((item) => {
        if (item.id === id) {
          item.num += 1
        }
        return item
      })
    },

    // 单项的数量减一
    reduceRecoveryCartNumsub(id: Number) {
      // 判断当前的数量是否为1 如果为1的话就不能减了
      if (this.recoveryCart.find((item) => item.id === id)?.num === 1) {
        return
      }
      // 通过id找到当前的数据 然后让当前的数据的num --
      this.recoveryCart = this.recoveryCart.map((item) => {
        if (item.id === id) {
          item.num -= 1
        }
        return item
      })
    },
  },
})
