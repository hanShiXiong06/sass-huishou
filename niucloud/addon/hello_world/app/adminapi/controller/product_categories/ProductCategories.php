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

namespace app\adminapi\controller\product_categories;

use core\base\BaseAdminController;
use app\service\admin\product_categories\ProductCategoriesService;


/**
 * 回收产品分类表控制器
 * Class ProductCategories
 * @package app\adminapi\controller\product_categories
 */
class ProductCategories extends BaseAdminController
{
   /**
    * 获取回收产品分类表列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["pid",""],
             ["name",""]
        ]);
        return success((new ProductCategoriesService())->getPage($data));
    }

    /**
     * 回收产品分类表详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new ProductCategoriesService())->getInfo($id));
    }

    /**
     * 添加回收产品分类表
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["pid",0],
             ["name",""]
        ]);
        $this->validate($data, 'app\validate\product_categories\ProductCategories.add');
        $id = (new ProductCategoriesService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 回收产品分类表编辑
     * @param $id  回收产品分类表id
     * @return \think\Response
     */
    public function edit($id){
        $data = $this->request->params([
             ["pid",0],
             ["name",""]
        ]);
        $this->validate($data, 'app\validate\product_categories\ProductCategories.edit');
        (new ProductCategoriesService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 回收产品分类表删除
     * @param $id  回收产品分类表id
     * @return \think\Response
     */
    public function del(int $id){
        (new ProductCategoriesService())->del($id);
        return success('DELETE_SUCCESS');
    }


}
