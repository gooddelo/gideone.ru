<script>
	import { onMount } from 'svelte';
	import '../app.scss';

	let isVisible = false;

	// Проверка cookies при монтировании компонента
	onMount(() => {
		checkCookie();
	});

	// Функция проверки наличия cookie
	const checkCookie = () => {
		const isPolicyAccepted = document.cookie
			.split('; ')
			.some((cookie) => cookie.trim().startsWith('privacypolicy='));

		isVisible = !isPolicyAccepted;
	};

	// Обработчик принятия политики
	const acceptPolicy = () => {
		const expirationDate = new Date();
		expirationDate.setFullYear(expirationDate.getFullYear() + 1);

		document.cookie = `privacypolicy=true; expires=${expirationDate.toUTCString()}; path=/`;
		isVisible = false;
	};
</script>

<div class="root_layout">
	<slot />

	{#if isVisible}
	<div class="container">
		<div class="cookie">
			<p>Мы собираем и обрабатываем файлы cookie</p>
			<div class="cookie__controls">
				<a href="/privacy_policy_gideone.pdf">Подробнее</a>
				<button on:click={acceptPolicy}>Принять</button>
			</div>
		</div>
	</div>
	{/if}
</div>

<style lang="scss">
	.root_layout {
		min-width: 100%;
		min-height: 100vh;
		overflow: clip;
	}

	.cookie {
		width: 100%;
		background: #212745;
		font-weight: 500;
		font-size: 16px;
		line-height: 125%;
		text-align: center;
		color: #fff;
		border-radius: 5px;
		font-size: clamp(16px, 5vw, 26px);
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px;
		justify-content: space-between;
		text-align: left;

		@media (max-width: 900px) {
			flex-wrap: wrap;
		}
	}

	.container {
		z-index: 1000;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0 20px;
	}

	.cookie__controls {
		display: flex;
		gap: 12px;

		@media (max-width: 900px) {
			width: 100%;
			justify-content: end;
		}

		@media (max-width: 480px) {
			width: 100%;
			justify-content: center;
		}

		a {
			box-sizing: border-box;
			padding: 8px 16px;
			border-radius: 60px;
			max-width: 280px;
			font-weight: 500;
			font-size: clamp(16px, 5vw, 26px);
			text-transform: lowercase;
			transition: all ease 0.25s;
			border: 2px solid #ffffff;
			display: inline-block;
			max-height: 52px;
		}
		button {
			border: none;
			background: #6c60ef;
			padding: 8px 16px;
			max-height: 52px;
			border-radius: 60px;
			max-width: 280px;
			font-weight: 500;
			font-size: clamp(16px, 5vw, 26px);
			text-transform: lowercase;
			color: #fff;
			transition: all ease 0.25s;
			line-height: 24px;
		}
	}
</style>
