<script>
</script>

<section>
	<div>
		<h2>Дашборды Gideone делают аналитику доступной и понятной</h2>
		<p>
			От индивидуальной производительности сотрудников до общих трендов бизнеса – каждый элемент
			анализируется для выявления потенциала к улучшению и росту
		</p>
		<h3>Ваш путь к совершенству начинается здесь</h3>
	</div>
</section>

<style lang="scss">
	section {
		min-width: 100vw;
		min-height: 100vh;
		background: url('/img/bg-analityc.png') no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 42px;
		margin-left: -200px;
	}
	div {
		position: absolute;
		right: 8%;
		max-width: 70vw;

		@media (width <= 1024px) {
			right: 10%;
		}
	}
	h2 {
		line-height: 120%;
		font-weight: 700;
		font-size: 45px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		margin-bottom: 90px;
		max-width: 810px;

		@media (width <= 1024px) {
			font-size: 3vw;
		}

		@media (width <= 768px) {
			font-weight: 700;
			font-size: 26px;
			text-transform: uppercase;
			color: #fff;
			margin-bottom: 40px;
		}
	}
	p {
		font-weight: 500;
		font-size: 30px;
		color: #fff;
		font-family: 'Montserrat', sans-serif;
		max-width: 670px;
		margin-bottom: 115px;

		@media (width <= 768px) {
			font-weight: 500;
			font-size: 16px;
			color: #fff;
			margin-bottom: 20px;
		}
	}
	h3 {
		line-height: 120%;
		font-weight: 600;
		font-size: 30px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 585px;

		@media (width <= 768px) {
			font-weight: 600;
			font-size: 20px;
			text-transform: uppercase;
			color: #fff;
		}
	}
</style>
