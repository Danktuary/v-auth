<template>
	<nav id="nav-bar">
		<div class="nav-sections wrapper">
			<div class="main-nav">
				<ul class="nav-items">
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'threads' }">Threads</router-link>
					</li>
				</ul>
			</div>
			<user-nav />
		</div>
	</nav>
</template>

<script>
import UserNav from './UserNav.vue';

export default {
	components: {
		UserNav,
	},
};
</script>

<style lang="scss">
@import '../../assets/sass/variables.scss';

#nav-bar {
	color: $text-color;
	background-color: $primary;

	.nav-sections {
		display: flex;
		justify-content: space-between;

		.nav-items {
			display: flex;
			margin: 0.5em 0;

			.nav-item {
				margin: 0 0.5rem;

				&:first-child {
					margin-left: 0;
				}

				&:last-child {
					margin-right: 0;
				}

				.nav-link {
					color: #fff;
					display: inline-block;
					padding: 0.5rem 0;

					&.router-link-exact-active {
						border-bottom: 2px solid lighten($primary, 25%);
					}

					&:hover {
						text-decoration: none;
						border-bottom: 2px solid lighten($primary, 10%);
					}
				}
			}
		}

	}
}
</style>
