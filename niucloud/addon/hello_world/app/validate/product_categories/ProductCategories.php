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

namespace app\validate\product_categories;

/**
 * 回收产品分类表验证器
 * Class ProductCategories
 * @package app\validate\product_categories
 */
class ProductCategories extends \think\Validate
{

       protected $rule = [
            'pid' => 'require',
            'name' => 'require'
        ];

       protected $message = [];

       protected $scene = [
            "add" => ['pid','name'],
            "edit" => ['pid','name']
        ];

}