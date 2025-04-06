<script>
	import { _ } from '$lib/i18n';
</script>

<section>
	<h1>{$_('home.title', { default: 'ИИ – тренер для вашего бизнеса' })}</h1>
	<span inert>{$_('home.subtitle', { default: 'use Gideon' })}</span>
</section>
<svg
	width="1818"
	height="9194"
	viewBox="0 0 1818 9194"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1518 152C1110.89 129.495 195.521 356.284 195.521 1080.43C195.521 1742.79 536.597 1876.12 770.144 2067.86C875.5 2154.36 1398.5 2397.5 1398.5 2876C1398.5 3752.87 35.5612 3825 158.5 4546.5C332.107 5565.35 1330.5 5241.5 1389 5985.5C1447.5 6729.5 157 6769.02 157 7533.5C157 8451 1712 8049.5 1666.5 9188"
		stroke="#656097"
		stroke-opacity="0.13"
		stroke-width="300"
	/>
</svg>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		margin-bottom: 15vh;
		height: 50vh;

		@media (width <= 768px) {
			margin-bottom: 0;
			height: auto;
		}
	}
	h1 {
		padding-left: 4vw;
		padding-top: 6.8vw;
		font-family: 'Unbounded', sans-serif;
		line-height: 9.5vw;
		font-weight: 700;
		font-size: 7.5vw;
		text-transform: uppercase;
		color: #fff;

		@media (width <= 768px) {
			font-weight: 700;
			font-size: 40px;
			text-transform: uppercase;
			color: #fff;
			line-height: 120%;
		}
	}
	span {
		position: absolute;
		top: 0;
		font-family: 'Unbounded', sans-serif;
		font-weight: 700;
		font-size: 12vw;
		text-transform: uppercase;
		color: #fff;
		opacity: 0.06;

		@media (width <= 768px) {
			font-weight: 700;
			font-size: 12vw;
			text-transform: uppercase;
			color: #fff;
		}
	}
	svg {
		position: absolute;
		right: -400px;
		z-index: -10;
	}
</style>
