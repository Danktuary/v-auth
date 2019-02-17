<template>
	<div id="user-nav">
		<ul>
			<template v-if="user && user.id">
				<li>
					<router-link to="/profile">{{ user.username }}</router-link>
				</li>
				<li>
					<router-link to="/logout">Logout</router-link>
				</li>
			</template>
			<template v-else>
				<li>
					<router-link to="/login">Login</router-link>
				</li>
				<li>
					<router-link to="/register">Register</router-link>
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
