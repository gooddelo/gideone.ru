<script>
	import { onMount } from 'svelte';

	const sitekey = '6LdYNcsqAAAAAMFHghG6DMjajwYR8vKwDKTfl9hX';
	export let token = '';

	let loaded = false;

	const captchInject = () => {
		loaded = true;
		grecaptcha.render('recaptcha', {
			sitekey,
			callback: (data) => {
				token = data;
				console.log(token)
			},
			theme: 'dark'
		});
	};

	onMount(async () => {
		window.captchInject = captchInject;
		const script = document.createElement('script');
		script.id = 'googleRecaptchaScript';
		script.src = `https://www.google.com/recaptcha/api.js?&onload=captchInject`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	});
</script>

<!--
@component
### Виджет google каптчи
Создаёт каптчу
***
### Props
- `token` :srt = '' - (Токен для подписи формы)
- ?`loaded` :bool = false - (Режим лоадера)
-->

<div class="captchaBox">
	{#if !loaded}
		<div class="load"></div>
	{/if}
	<div id="recaptcha" />
</div>

<style lang="scss">
	.load {
		width: 304px;
		height: 78px;
		border-radius: 5px;
		overflow: hidden;
	}
	.captchaBox {
		margin: 10px 0;
	}
</style>
