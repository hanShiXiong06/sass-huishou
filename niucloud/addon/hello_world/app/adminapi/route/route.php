<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------


use think\facade\Route;

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;

/**
 * 回收产品分类表控制器
 */
Route::group('product_categories', function () {

    /***************************************************** 回收产品分类表管理 ****************************************************/
    //回收产品分类表列表
    Route::get('product_categories', 'product_categories.ProductCategories/lists');
    //回收产品分类表详情
    Route::get('product_categories/:id', 'product_categories.ProductCategories/info');
    //添加回收产品分类表
    Route::post('product_categories', 'product_categories.ProductCategories/add');
    //编辑回收产品分类表
    Route::put('product_categories/:id', 'product_categories.ProductCategories/edit');
    //删除回收产品分类表
    Route::delete('product_categories/:id', 'product_categories.ProductCategories/del');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
/**
 * 回收订单表控制器
 */
