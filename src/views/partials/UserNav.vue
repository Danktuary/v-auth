<template>
	<div id="user-nav">
		<ul>
			<li>
				<a href="#">{{ user.username }}</a>
			</li>
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
