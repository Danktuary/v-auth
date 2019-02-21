<template>
	<div id="profile">
		{{ user.username }}
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Profile',

	computed: mapState(['user']),
};
</script>
