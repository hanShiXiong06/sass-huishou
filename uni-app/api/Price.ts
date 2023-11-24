import request from '@/utils/request'

/***************************************************** 产品价格 ****************************************************/

/**
 * 获取产品价格列表
 * @param params
 * @returns
 */
export function getProductPricesList(params: Record<string, any>) {
  return request.get(`product_prices/product_prices`, params)
}

/**
 * 获取产品价格详情
 * @param id 产品价格id
 * @returns
 */
export function getProductPricesInfo(id: number) {
  return request.get(`product_prices/product_prices/${id}`)
}
