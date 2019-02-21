<template>
	<div id="app">
		<banner />
		<nav-bar />
		<div id="content" class="wrapper">
			<router-view />
		</div>
	</div>
</template>

<script>
import Banner from '@v/partials/Banner.vue';
import NavBar from '@v/partials/NavBar.vue';

export default {
	components: {
		Banner,
		NavBar,
	},
};
</script>


<style lang="scss">
@import 'assets/sass/variables.scss';
@import 'assets/sass/app.scss';

body {
	margin: 0;
	padding: 0;
	font-size: 16px;
}

a {
	color: #42b983;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $text-color;
}

#banner {
	text-align: center;
	margin: 1rem;

	img {
		max-width: 100px;
	}
}

#nav {
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;

	a {
		font-weight: bold;
		color: $text-color;

		&.router-link-exact-active {
			color: $primary;
		}
	}
}

#content {
	margin-top: 1rem;
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid rgba(#000, 0.2);
}

.wrapper {
	max-width: 85%;
	margin: 0 auto;
}
</style>
