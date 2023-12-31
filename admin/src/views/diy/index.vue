<template>
	<div class="flex flex-wrap">
		<div class="page-item relative bg-no-repeat ml-[20px] mr-[40px] mt-[20px] bg-[#f7f7f7] w-[300px] pt-[80px] pb-[20px]" :class="{ 'cursor-pointer' : !item.isDisabledPop }" v-for="(item,key) in page" :key="key">
			<p class="absolute top-[46px] left-[50%] translate-x-[-50%] text-[14px] truncate w-[130px] text-center">{{item.use_template.title}}</p>

			<div v-show="item.use_template.url" class="w-[282px] h-[493px] mx-auto">
				<iframe v-show="item.loadingIframe" class="w-[282px] h-[493px] mx-auto" :src="item.use_template.wapPreview" frameborder="0" @load="loadIframe(key)"></iframe>
				<div v-show="item.loadingDev" class="w-[282px] h-[493px] mx-auto bg-body pt-[20px] px-[20px]">
					<div class="font-bold text-xl mb-[40px]">{{t('developTitle')}}</div>
					<div class="mb-[20px] flex flex-col">
						<text class="mb-[10px]">{{ t('wapDomain') }}</text>
						<el-input v-model="wapDomain" :placeholder="t('wapDomainPlaceholder')" clearable/>
					</div>
					<el-button type="primary" @click="saveDomain()">{{ t('confirm') }}</el-button>
				</div>
			</div>

			<div v-show="!item.use_template.wapPreview" class="overflow-hidden w-[282px] h-[493px] mx-auto">
				<img class="max-w-full" v-if="item.use_template.cover" :src="img(item.use_template.cover)"/>
			</div>

			<p class="text-[12px] text-[#999] mt-[10px] mx-auto truncate text-center w-[250px]">{{item.use_template.desc}}</p>

			<div class="item-hide absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 text-center" :class="{ 'disabled' : item.isDisabledPop }">
				<div class="item-btn-box absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col flex-wrap">
					<el-button @click="show(key,item)">切换</el-button>
<!--					v-show="item.use_template.mode == 'diy'"-->
					<el-button @click="toDecorate(item.use_template)">装修</el-button>
					<el-button @click="toPreview(item.use_template)">预览</el-button>
				</div>
			</div>

		</div>
	</div>

	<el-dialog v-model="showDialog" :title="t('changeTemplate')" width="400px" :close-on-press-escape="false" :destroy-on-close="true" :close-on-click-modal="false">

		<el-form :model="form" label-width="0px" v-if="formData.type">
			<el-form-item label="">
				<div>{{t('hopeBeforeTip')}}<span class="text-primary px-[5px]">{{ page[formData.type].title }}</span>{{t('hopeAfterTip')}}</div>
			</el-form-item>

			<el-form-item label="">
				<el-select v-model="hope" class="w-full">
					<el-option :label="t('changeTemplateTip') + ' ' + page[formData.type].title + ' ' + t('template')" value="template"/>
					<el-option :label="t('changeMyPageTip') + ' ' + page[formData.type].title" value="diy"/>
				</el-select>
			</el-form-item>

			<el-form-item label="" v-show="hope == 'template'">
				<el-select v-model="formData.template" class="w-full">
					<el-option v-for="(item, key) in page[formData.type].template" :label="item.title" :value="key"/>
				</el-select>
			</el-form-item>

			<el-form-item label="" v-show="hope == 'diy'">
				<el-select v-model="formData.id" class="w-full">
					<el-option v-for="(item, index) in page[formData.type].my_page" :label="item.title" :value="item.id"/>
				</el-select>
				<div class="mt-[10px]">
					<span class="cursor-pointer text-primary mr-[10px]" @click="toDiyList">{{ t('createPage') }}</span>
					<span class="cursor-pointer text-primary" @click="refreshMyPage">{{ t('refreshPage') }}</span>
				</div>
			</el-form-item>

		</el-form>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="showDialog = false">{{ t('cancel')}}</el-button>
				<el-button type="primary" @click="save">{{ t('confirm') }}</el-button>
			</span>
		</template>
	</el-dialog>

</template>

<script lang="ts" setup>
    import {reactive, ref, watch} from 'vue'
    import {t} from '@/lang'
    import {img} from '@/utils/common'
    import { useRouter } from 'vue-router'
    import { ElMessage } from 'element-plus'
    import {getDecoratePage, getDiyList, changeTemplate} from '@/api/diy'
    import storage from '@/utils/storage'

    const page: any = reactive({})
    const showDialog = ref(false)
    const router = useRouter()
    const hope = ref('template')
    const wapDomain = ref('')

    // 添加自定义页面
    const formData = reactive({
        type: '',
        mode: '',
        template: '',
        id: ''
    })

    const refreshData = () => {
        formData.type = '';
        formData.mode = '';
        formData.template = '';
        formData.id = '';
        getDecoratePage({}).then((res => {
            for (let key in res.data) {
                page[key] = res.data[key]
            }

            for (let key in page) {
                if (page[key].use_template.url) {

                    page[key].loadingIframe = false; // 加载iframe
                    page[key].loadingDev = false; // 加载开发环境配置
                    page[key].isDisabledPop = false; // 是否禁止打开遮罩层
                    page[key].timeFrame = 0;

                    wapDomain.value = page[key].domain_url.wap_domain;
                    page[key].wapUrl = page[key].domain_url.wap_url;

                    // 开发模式增加站点id
                    if (import.meta.env.MODE == 'development') {
                        let siteId = storage.get('siteId') || 0;
                        page[key].use_template.url += `&site_id=${siteId}`;

                        // 开发模式情况下，并且未配置wap域名，则获取缓存域名
                        if (!wapDomain.value && storage.get('wap_domain')) {
                            page[key].wapUrl = storage.get('wap_domain')
                            page[key].loadingIframe = true; // 加载iframe
                            page[key].loadingDev = false; // 加载开发环境配置
                            page[key].isDisabledPop = false; // 是否禁止打开遮罩层
                        }
                        page[key].timeFrame = new Date().getTime();
                    }

                    setDomain(key);
                }
            }

        }));
    }

    refreshData();

    // 监听iframe加载事件
    const loadIframe = (key: string) => {
        if (!page[key].use_template.wapPreview) return;

        var loadTime = new Date().getTime();
        var difference = loadTime - page[key].timeFrame;
        // 检测页面加载差异，小于1000毫秒，则配置wap端域名
        if (difference < 1000) {
            page[key].loadingDev = true;
            page[key].isDisabledPop = true;
            page[key].loadingIframe = false;
        } else {
            page[key].loadingDev = false;
            page[key].isDisabledPop = false;
            page[key].loadingIframe = true;
        }
    }

    const saveDomain = () => {
        if (wapDomain.value.trim().length == 0) {
            ElMessage({
                type: 'warning',
                message: `${t('wapDomainPlaceholder')}`,
            });
            return;
        }
        let wapUrl = wapDomain.value + '/wap';
        storage.set({key: 'wap_domain', data: wapUrl});

        for (let key in page) {
            if (page[key].use_template.url) {
                page[key].wapUrl = wapUrl;
                setDomain(key);
            }
        }
        setTimeout(() => {
            for (let key in page) {
                if (page[key].use_template.url) {
                    page[key].loadingIframe = true; // 加载iframe
                    page[key].loadingDev = false; // 加载开发环境配置
                    page[key].isDisabledPop = false; // 是否禁止打开遮罩层
                }
            }
        }, 100 * 3);
    }

    const setDomain = (key: string) => {
        page[key].use_template.wapPreview = page[key].wapUrl + page[key].use_template.url;
    }

    const show = (key: string, data: any) => {
        // 每次打开时赋值
        showDialog.value = true;

        hope.value = data.use_template.hope;
        formData.type = key;
        formData.mode = data.use_template.mode;

        if (hope.value == 'template') {
            formData.template = data.use_template.template;
        } else if (hope.value == 'diy') {
            formData.id = data.use_template.id;
        }
    }

    // 跳转去装修
    const toDecorate = (data: any) => {
        let query: any = {
            back: '/diy/index'
        };
        if (data.id) {
            query.id = data.id;
        } else if (data.name) {
            query.name = data.name;
        }
        let url = router.resolve({
            path: '/decorate/edit',
            query
        });
        window.open(url.href);
    }

    // 跳转去预览
    const toPreview = (data: any) => {
        let query: any = {};
        if (data.id) {
            query.id = data.id;
        } else if (data.name) {
            query.name = data.name;
        }
        let url = router.resolve({
            path: '/decorate/preview',
            query
        });
        window.open(url.href);
    }

    // 创建微页面
    const toDiyList = (data: any) => {
        let url = router.resolve({
            path: '/site/diy/list'
        });
        window.open(url.href);
    }

    // 刷新我的微页面
    const refreshMyPage = () => {
        getDiyList({type: formData.type}).then((res) => {
            let isExist = true; // 检测选择的微页面是否存在，不存在则清空
            for (let i = 0; i < res.data.length; i++) {
                if (formData.id == res.data[i].id) {
                    isExist = false;
                    break;
                }
            }
            if (isExist) {
                formData.id = '';
            }
            page[formData.type].my_page = {};
            Object.assign(page[formData.type].my_page, res.data);
        })
    }

    watch(
        () => hope.value,
        (newValue, oldValue) => {
            if (newValue == 'template') {
                formData.id = '';
            } else if (newValue == 'diy') {
                formData.mode = 'diy';
                formData.template = '';
            }
        }
    )

    watch(
        () => formData.template,
        (newValue, oldValue) => {
            if (newValue) {
                formData.mode = page[formData.type].template[newValue].mode;
            }
        }
    )

    const isRepeat = ref(false)
    const save = () => {
        if (hope.value == 'template') {
            if (formData.template == '') {
                ElMessage({
                    type: 'warning',
                    message: `${t('placeholderTemplate')}`,
                });
                return;
            }
        } else if (hope.value == 'diy') {
            if (formData.id == '') {
                ElMessage({
                    type: 'warning',
                    message: `${t('placeholderMyPage')}`,
                });
                return;
            }
        }

        if (isRepeat.value) return
        isRepeat.value = true

        changeTemplate({
            ...formData
        }).then((res) => {
            isRepeat.value = false;
            showDialog.value = false;
            refreshData();
        })

    }
</script>

<style lang="scss" scoped>
	.page-item {

		background-image: url(assets/images/iphone_bg.png);
		background-color: var(--el-bg-color);
		background-size: 100%;

		.item-hide {
			display: none;

			.item-btn-box {

				button {
					height: 35px;
					width: 100px;

					& ~ button {
						margin-top: 15px;
						margin-left: 0;
					}
				}

			}
		}

		&:hover {
			.item-hide:not(.disabled) {
				display: block !important;
			}
		}
	}
</style>