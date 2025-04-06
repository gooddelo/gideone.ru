<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<h2>{$_('features.advantages.title')}</h2>
	<img src="img/sh-report.png" alt="Обучение сотрудков с обратной связью" />
	<span>{$_('features.advantages.useGideone')}</span>
</section>

<style lang="scss">
	section {
		min-width: 100vw;
		min-height: 100vh;
		background: #4341ae;
		display: flex;
		z-index: 10;
		justify-content: center;
		align-items: center;

		@media (width <= 768px) {
			flex-direction: column;
			padding-top: 60px;
		}
	}
	h2 {
		line-height: 120%;
		font-weight: 600;
		font-size: 50px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 600px;
		margin-top: -12vh;

		@media (width <= 1024px) {
			max-width: 400px;
			font-size: 4vw;
		}

		@media (width <= 768px) {
			font-size: 26px;
			text-align: center;
		}
	}
	img {
		max-height: 100vh;
		z-index: 2;

		@media (width <= 1024px) {
			height: auto;
			width: 40vw;
			object-fit: contain;
		}

		@media (width <= 768px) {
			width: 85vw;
			max-width: 340px;
		}
	}
	span {
		font-weight: 700;
		font-size: 11vw;
		text-transform: uppercase;
		text-align: right;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		opacity: 0.06;
		position: absolute;
		bottom: 35px;
		width: 100%;
		text-align: center;
	}
</style>
