<script>
	import { _, locale } from '$lib/i18n';

	let menu = [
		{
			titleKey: 'nav.dashboards',
			defaultTitle: 'Дашборды',
			href: '/#dashbords'
		},
		{
			titleKey: 'nav.subscriptions',
			defaultTitle: 'Подписки',
			href: '/#subscription'
		},
		{
			titleKey: 'nav.advantages',
			defaultTitle: 'Преимущества',
			href: '/#uniqueness'
		},
		{
			titleKey: 'nav.contactUs',
			defaultTitle: 'Напиши нам',
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
	
	function toggleLanguage() {
		$locale = $locale === 'ru' ? 'en' : 'ru';
	}
</script>

<svelte:body />

<header>
	<a href="/" class="logo">
		<img src="img/logo.svg" alt="gideone логотип" />
	</a>
	<nav class:open>
		{#each menu as link}
			<a href={link.href} on:click={closeMenu}>
				{#if link.titleKey}
					{$_(link.titleKey, { default: link.defaultTitle })}
				{:else}
					{link.title}
				{/if}
			</a>
		{/each}
		<a
			class="no-hover"
			href="https://www.youtube.com/watch?v=sIDgW2ZMljo"
			target="_blank"
			on:click={closeMenu}><img src="/img/youtube.svg" alt="youtube gideone" /></a
		>
		<a
			class="no-hover"
			href="https://t.me/gideone_care_bot"
			target="_blank"
			on:click={closeMenu}><img src="/img/tg.svg" alt="telegram gideone" /></a
		>
		<button class="language-toggle" on:click={toggleLanguage}>
			{$_('common.switchLanguage')}
		</button>
	</nav>
	<button class="menu-toggle" on:click={toggleMenu}>
		{#if open}
			<img src="img/close.svg" width="36px" height="36px" alt={$_('nav.closeMenu', { default: 'Закрыть меню' })} />
		{:else}
			<img src="img/burger.svg" width="36px" height="36px" alt={$_('nav.openMenu', { default: 'Открыть меню' })} />
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
		
		.language-toggle {
			font-weight: 600;
			font-size: clamp(6px, 1.4vw, 20px);
			text-transform: uppercase;
			padding: 10px clamp(6px, 1vw, 20px);
			border-radius: 40px;
			background: var(--bright);
			color: white;
			border: none;
			margin-left: 10px;
			cursor: pointer;
			transition: all 0.25s ease;
			
			@include hover {
				background: #fff;
				color: var(--dark);
			}
		}

		@media (width <= 768px) {
			visibility: hidden;
			opacity: 0;
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
			
			.language-toggle {
				font-size: 25px;
				padding: 11px 30px;
				margin-top: 20px;
			}

			&.open {
				visibility: visible;
				opacity: 1;
			}
		}
	}

	.menu-toggle {
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
