<template>
	<div id="app">
		<div id="nav" class="wrapper">
			<router-link to="/">Home</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/threads">Threads</router-link> |
			<router-link to="/logout">Logout</router-link>
		</div>
		<div id="content" class="wrapper">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
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
	padding: 30px;

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
