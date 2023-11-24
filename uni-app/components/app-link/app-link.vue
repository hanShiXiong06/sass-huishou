<template>
	<view @click="toRedirect" class='center'>
        <!-- #ifdef MP -->
        <view >
        <!-- #endif -->
            <slot></slot>
        <!-- #ifdef MP -->
        </view>
        <!-- #endif -->
	</view>
</template>

<script setup lang="ts">
	import { redirect, diyRedirect, currRoute, getToken } from '@/utils/common'
	import { useLogin } from '@/hooks/useLogin';

	const prop = defineProps({
		url: String,
		data: {
			type: Object,
			default: () => {
				return {}
			}
		},
		mode: {
			type: String,
			default: 'navigateTo'
		}
	})

	const toRedirect = () => {
		if (Object.keys(prop.data).length) {
			if (!prop.data.url) return;
			if (currRoute() == 'pages/member/index' && !getToken()) {
				useLogin().setLoginBack({ url: prop.data.url })
				return;
			}
			diyRedirect(prop.data);
		} else {
			redirect(prop)
		}
	}
</script>

<style lang="scss" scoped>
	.center{
		text-align: center;
		
	}
</style>