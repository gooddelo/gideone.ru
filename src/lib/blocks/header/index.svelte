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
			title: 'Преимущества',
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

	let open = false;

	function toggleMenu() {
		open = !open;
		document.body.style = `overflow: ${open ? 'hidden' : 'auto'}`;
		scrollTo(0, 0);
	}
	function closeMenu() {
		open = false;
		document.body.style = `overflow: auto`;
	}
</script>

<svelte:body />

<header>
	<a href="/" class="logo">
		<img src="img/logo.svg" alt="gideone логотип" />
	</a>
	<nav class:open>
		{#each menu as link}
			<a href={link.href} on:click={closeMenu}>{link.title}</a>
		{/each}
		<a
			class="no-hover"
			href="https://www.youtube.com/watch?v=sIDgW2ZMljo"
			target="_blank"
			on:click={closeMenu}><img src="/img/youtube.svg" alt="youtube gideone" /></a
		>
	</nav>
	<button on:click={toggleMenu}>
		{#if open}
			<img src="img/close.svg" width="36px" height="36px" alt="Закрыть меню" />
		{:else}
			<img src="img/burger.svg" width="36px" height="36px" alt="Открыть меню" />
		{/if}
	</button>
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

		@media (width <= 768px) {
			justify-content: space-between;
		}
	}
	.logo {
		top: -5px;
		z-index: 101;
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

			&:not(.no-hover) {
				@include hover {
					background: var(--bright);
				}
			}
		}

		@media (width <= 768px) {
			visibility: hidden;
			position: absolute;
			z-index: 100;
			width: 100vw;
			height: 100vh;
			background: #2b3152;
			flex-direction: column;
			gap: 5%;
			top: 0;
			left: 0;
			margin: 0;
			align-items: center;
			justify-content: center;

			a {
				font-weight: 600;
				font-size: 25px;
				text-transform: uppercase;
				padding: 11px 30px;
				border-radius: 40px;
				background: transparent;
				transition: all 0.25s ease;

				@include hover {
					background: var(--bright);
				}
			}

			&.open {
				visibility: visible;
			}
		}
	}

	button {
		display: none;
		background: none;
		border: none;
		z-index: 101;

		img {
			width: 40px;
		}

		@media (width <= 768px) {
			display: block;
		}
	}
</style>
