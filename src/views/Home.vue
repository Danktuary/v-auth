<template>
	<div>
		<template v-if="user && user.id">
			Welcome back, {{ user.username }} (ID: {{ user.id }})
		</template>
		<template v-else>
			Hey, it seems like you're not logged in! Why not <router-link to="/login">do that now</router-link>?
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Home',
	computed: mapState(['user']),
};
</script>
