<script>
	let menu = [
		{
			title: 'ИИ тренер',
			href: '/#home'
		},
		{
			title: 'Подписки',
			href: '/#subsmart'
		},
		{
			title: 'Почему мы?',
			href: '/#features'
		},
		{
			title: 'Инвестируй',
			href: '/#investor'
		},
		{
			title: 'Напиши нам',
			href: '/#contact'
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
	}
	.logo {
		top: -5px;
	}
	nav {
		margin-left: 64px;
		display: flex;
		a {
			font-weight: 600;
			font-size: 20px;
			text-transform: uppercase;
			padding: 14px 25px;
			border-radius: 40px;
			background: transparent;

			@include hover {
				transition: all 0.25s ease;
				background: var(--bright);
			}
		}
	}
</style>
