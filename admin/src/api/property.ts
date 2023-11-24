import request from '@/utils/request'

/***************************************************** 产品属性 ****************************************************/

/**
 * 获取产品属性列表
 * @param params
 * @returns
 */
export function getProductPropertyList(params: Record<string, any>) {
    return request.get(`property/property`, {params})
}

/**
 * 获取产品属性详情
 * @param id 产品属性id
 * @returns
 */
export function getProductPropertyInfo(id: number) {
    return request.get(`property/property/${id}`);
}

/**
 * 添加产品属性
 * @param params
 * @returns
 */
export function addProductProperty(params: Record<string, any>) {
    return request.post('property/property', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑产品属性
 * @param id
 * @param params
 * @returns
 */
export function editProductProperty(params: Record<string, any>) {
    return request.put(`property/property/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除产品属性
 * @param id
 * @returns
 */
export function deleteProductProperty(id: number) {
    return request.delete(`property/property/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}

