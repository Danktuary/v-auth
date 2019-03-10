<template>
	<div id="user-nav">
		<ul class="nav-items">
			<template v-if="user && user.id">
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'profile' }">{{ user.username }}</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'logout' }">Logout</router-link>
				</li>
			</template>
			<template v-else>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'UserNav',
	computed: mapState(['user']),
};
</script>

<style lang="scss">
#user-nav {
	.nav-items {
		display: flex;
	}
}
</style>
