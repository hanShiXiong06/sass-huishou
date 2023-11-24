import request from '@/utils/request'

/***************************************************** 回收产品分类表 ****************************************************/

/**
 * 获取回收产品分类表列表
 * @param params
 * @returns
 */
export function getProductCategoriesList(params: Record<string, any>) {
  return request.get(`categories/categories`, params)
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
 * 完成请求一级分类和二级分类的数据
 * @param params
 * @returns
 * */
export function fetchCategoryList(params: Record<string, any>) {
  return request.get('categories/categories/type', params)
}

export function fetchModelList(params: Record<string, any>) {
  return request.get('categories/categories/level', params)
}
