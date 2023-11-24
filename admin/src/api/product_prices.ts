import request from '@/utils/request'

/***************************************************** 产品价格 ****************************************************/

/**
 * 获取产品价格列表
 * @param params
 * @returns
 */
export function getProductPricesList(params: Record<string, any>) {
    return request.get(`product_prices/product_prices`, {params})
}

/**
 * 获取产品价格详情
 * @param id 产品价格id
 * @returns
 */
export function getProductPricesInfo(id: number) {
    return request.get(`product_prices/product_prices/${id}`);
}

/**
 * 添加产品价格
 * @param params
 * @returns
 */
export function addProductPrices(params: Record<string, any>) {
    return request.post('product_prices/product_prices', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑产品价格
 * @param id
 * @param params
 * @returns
 */
export function editProductPrices(params: Record<string, any>) {
    return request.put(`product_prices/product_prices/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除产品价格
 * @param id
 * @returns
 */
export function deleteProductPrices(id: number) {
    return request.delete(`product_prices/product_prices/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}

