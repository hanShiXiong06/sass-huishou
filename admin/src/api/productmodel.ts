import request from '@/utils/request'

/***************************************************** 产品详情表 ****************************************************/

/**
 * 获取产品详情表列表
 * @param params
 * @returns
 */
export function getProductModelList(params: Record<string, any>) {
  return request.get(`productmodel/productmodel`, { params })
}

/**
 * 获取产品详情表详情
 * @param id 产品详情表id
 * @returns
 */
export function getProductModelInfo(id: number) {
  return request.get(`productmodel/productmodel/${id}`)
}

/**
 * 添加产品详情表
 * @param params
 * @returns
 */
export function addProductModel(params: Record<string, any>) {
  return request.post('productmodel/productmodel', params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}

/**
 * 编辑产品详情表
 * @param id
 * @param params
 * @returns
 */
export function editProductModel(params: Record<string, any>) {
  return request.put(`productmodel/productmodel/${params.id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}
export function editProductModelState(params: Record<string, any>) {
  return request.put(`productmodel/productmodel`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}

/**
 * 删除产品详情表
 * @param id
 * @returns
 */
export function deleteProductModel(id: number) {
  return request.delete(`productmodel/productmodel/${id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}
