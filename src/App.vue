<template>
	<div id="app">
		<nav id="nav" class="wrapper">
			<div>
				<ul>
					<router-link to="/">Home</router-link> |
					<router-link to="/login">Login</router-link> |
					<router-link to="/threads">Threads</router-link>
				</ul>
			</div>
			<user-nav />
		</nav>
		<div id="content" class="wrapper">
			<router-view />
		</div>
	</div>
</template>

<script>
import UserNav from './views/partials/UserNav.vue';

export default {
	components: {
		UserNav,
	},
};
</script>


<style lang="scss">
@import 'assets/sass/app.scss';

body {
	margin: 0;
	padding: 0;
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
	color: #2c3e50;
}

#nav {
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.wrapper {
	max-width: 85%;
	margin: 0 auto;
}
</style>
