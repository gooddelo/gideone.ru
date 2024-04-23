<script>
</script>

<section>
	<img src="img/dashbords.png" alt="аналитика с дашбордами" />
	<div>
		<h2>дашборды</h2>
		<p>Работающая аналитика с дашбордами Gideone</p>
	</div>
	<span>BE<br />productive</span>
</section>

<style lang="scss">
	section {
		min-width: 100%;
		min-height: 100vh;
		max-height: 100vh;
		background: url("img/bg-curves.svg") no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 20;

		@media (width <= 768px) {
			flex-direction: column;
			justify-content: flex-start;
			padding: 30px 20px;
		}
	}
	div {
		margin-top: 120px;
		align-self: flex-start;

		@media (width <= 768px) {
			order: -1;
			margin-top: 0;
		}
	}
	h2 {
		font-weight: 600;
		font-size: 60px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		margin-bottom: 70px;

		@media (width <= 1024px) {
			font-size: 5vw;
		}

		@media (width <= 768px) {
			font-size: 26px;
			margin-bottom: 20px;
		}
	}
	p {
		line-height: 120%;
		font-weight: 500;
		font-size: 40px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 460px;

		@media (width <= 1024px) {
			font-size: 3vw;
		}

		@media (width <= 768px) {
			font-size: 16px;
		}
	}
	img {
		height: 95vh;
		z-index: 2;
		@media (width <= 1024px) {
			height: auto;
			width: 45vw;
		}

		@media (width <= 768px) {
			width: 95vw;
			max-width: 440px;
		}
	}
	span {
		font-weight: 700;
		font-size: 10vw;
		text-transform: uppercase;
		text-align: right;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		opacity: 0.06;
		position: absolute;
		bottom: 60px;
	}
</style>
