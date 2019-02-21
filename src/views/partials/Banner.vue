<template>
	<div id="banner">
		<router-link class="logo" :to="{ name: 'home' }">
			<img src="@/assets/logo.png" alt="Logo" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Banner',
};
</script>

<style lang="scss">
#banner {
	.logo {
		transition: all 0.2s ease-in-out;

		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
