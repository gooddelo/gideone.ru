<script>
	let menu = [
		{
			title: 'Дашборды',
			href: '/#dashbords'
		},
		{
			title: 'Подписки',
			href: '/#subscription'
		},
		{
			title: 'Почему мы?',
			href: '/#uniqueness'
		},
		{
			title: 'Напиши нам',
			href: '/#contact'
		},
		{
			title: '8-800-101-79-87',
			href: 'tel:88001017987'
		}
	];
</script>

<header>
	<a href="/" class="logo">
		<img src="img/logo.svg" alt="gideone logo" />
	</a>
	<nav>
		{#each menu as link}
			<a href={link.href}>{link.title}</a>
		{/each}
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		padding: 40px 0 60px;
		justify-content: center;
		align-items: center;

		@media (width <= 1024px) {
			padding: 25px 20px 0;
		}
	}
	.logo {
		top: -5px;
	}
	nav {
		margin-left: clamp(6px, 3vw, 64px);
		display: flex;
		align-items: center;
		a {
			font-weight: 600;
			font-size: clamp(6px, 1.4vw, 20px);
			text-transform: uppercase;
			padding: 14px clamp(6px, 1vw, 25px);
			border-radius: 40px;
			background: transparent;
			transition: all 0.25s ease;

			@include hover {
				background: var(--bright);
			}
		}
	}
</style>
