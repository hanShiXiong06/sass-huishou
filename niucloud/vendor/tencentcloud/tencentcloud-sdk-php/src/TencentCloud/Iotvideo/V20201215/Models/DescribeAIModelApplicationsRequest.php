<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Iotvideo\V20201215\Models;
use TencentCloud\Common\AbstractModel;

/**
 * DescribeAIModelApplications请求参数结构体
 *
 * @method string getModelId() 获取模型ID
 * @method void setModelId(string $ModelId) 设置模型ID
 * @method integer getLimit() 获取分页的大小，最大100
 * @method void setLimit(integer $Limit) 设置分页的大小，最大100
 * @method integer getOffset() 获取偏移量，Offset从0开始
 * @method void setOffset(integer $Offset) 设置偏移量，Offset从0开始
 * @method string getProductId() 获取产品ID
 * @method void setProductId(string $ProductId) 设置产品ID
 */
class DescribeAIModelApplicationsRequest extends AbstractModel
{
    /**
     * @var string 模型ID
     */
    public $ModelId;

    /**
     * @var integer 分页的大小，最大100
     */
    public $Limit;

    /**
     * @var integer 偏移量，Offset从0开始
     */
    public $Offset;

    /**
     * @var string 产品ID
     */
    public $ProductId;

    /**
     * @param string $ModelId 模型ID
     * @param integer $Limit 分页的大小，最大100
     * @param integer $Offset 偏移量，Offset从0开始
     * @param string $ProductId 产品ID
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("ModelId",$param) and $param["ModelId"] !== null) {
            $this->ModelId = $param["ModelId"];
        }

        if (array_key_exists("Limit",$param) and $param["Limit"] !== null) {
            $this->Limit = $param["Limit"];
        }

        if (array_key_exists("Offset",$param) and $param["Offset"] !== null) {
            $this->Offset = $param["Offset"];
        }

        if (array_key_exists("ProductId",$param) and $param["ProductId"] !== null) {
            $this->ProductId = $param["ProductId"];
        }
    }
}