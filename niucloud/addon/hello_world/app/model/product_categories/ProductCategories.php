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

namespace app\model\product_categories;

use core\base\BaseModel;


/**
 * 回收产品分类表模型
 * Class ProductCategories
 * @package app\model\product_categories
 */
class ProductCategories extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'product_categories';

    /**
     * 搜索器:回收产品分类表主键, 分类ID
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("id", $value);
        }
    }
    
    /**
     * 搜索器:回收产品分类表父级id
     * @param $value
     * @param $data
     */
    public function searchPidAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("pid", $value);
        }
    }
    
    /**
     * 搜索器:回收产品分类表分类名称
     * @param $value
     * @param $data
     */
    public function searchNameAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("name", $value);
        }
    }
    
    

}
