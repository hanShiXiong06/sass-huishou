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

namespace app\service\admin\product_categories;

use app\model\product_categories\ProductCategories;
use core\base\BaseAdminService;

/**
 * 回收产品分类表服务层
 * Class ProductCategoriesService
 * @package app\service\admin\product_categories
 */
class ProductCategoriesService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new ProductCategories();
    }

    /**
     * 获取回收产品分类表列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $where[] = ['site_id', '=', $this->site_id];
        $field = 'pid,name';
        $order = '';

        $search_model = $this->model->where([['site_id', '=', $this->site_id]])->withSearch(["id","pid","name"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取回收产品分类表信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'pid,name';

        $info = $this->model->field($field)->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加回收产品分类表
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->id;

    }

    /**
     * 回收产品分类表编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除回收产品分类表
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $res = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->delete();
        return $res;
    }

}