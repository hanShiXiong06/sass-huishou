import request from '@/utils/request'

/***************************************************** 回收产品分类表 ****************************************************/

/**
 * 获取回收产品分类表列表
 * @param params
 * @returns
 */
export function getProductCategoriesList(params: Record<string, any>) {
  return request.get(`categories/categories`, { params })
}

/**
 * 获取回收产品分类表详情
 * @param id 回收产品分类表id
 * @returns
 */
export function getProductCategoriesInfo(id: number) {
  return request.get(`categories/categories/${id}`)
}

/**
 * 添加回收产品分类表
 * @param params
 * @returns
 */
export function addProductCategories(params: Record<string, any>) {
  return request.post('categories/categories', params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}

/**
 * 编辑回收产品分类表
 * @param id
 * @param params
 * @returns
 */
export function editProductCategories(params: Record<string, any>) {
  return request.put(`categories/categories/${params.id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}

/**
 * 删除回收产品分类表
 * @param id
 * @returns
 */
export function deleteProductCategories(id: number) {
  return request.delete(`categories/categories/${id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  })
}
/**
 * 完成请求一级分类和二级分类的数据
 * @param params
 * @returns
 * */

export function fetchCategoryList(params: Record<string, any>) {
  return request.get(`categories/categories/level`, { params })
}
