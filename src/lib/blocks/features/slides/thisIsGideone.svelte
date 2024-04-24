<script>
</script>

<section>
	<img src="img/charts.svg" alt="Выявление точек роста компании" />
	<div>
		<h2>Gideone это</h2>
		<p class="a">Рейтинг сотрудников по KPI</p>
		<p class="b">Контроль выполнения стандартов работы сотрудниками</p>
		<p class="c">Выявление зон роста компании</p>
	</div>
</section>

<style lang="scss">
	section {
		min-width: 100vw;
		min-height: 100vh;
		background: url('/img/bg-round.svg') no-repeat;
		background-position-y: center;
		background-color: #161d3b;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
	}
	div {
		margin-top: 120px;
		align-self: flex-start;
	}
	h2 {
		font-weight: 700;
		font-size: 90px;
		text-transform: uppercase;
		text-align: right;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 600px;
		margin-top: 10vh;
		margin-left: -45vw;
	}
	p {
		font-weight: 500;
		font-size: 25px;
		text-transform: uppercase;
		text-align: center;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 486px;
		width: 500px;
		padding: 35px 64px;
		background: #1387AB;
		border-radius: 30px;
		position: absolute;

		&.a {
			right: -30vw;
			top: -10%;
		}
		&.b {
			right: -36vw;
			top: 130%;
		}
		&.c {
			right: 7vw;
			top: 180%;
		}
	}
	img {
		position: absolute;
		bottom: 0;
		left: 10%;
		z-index: 0;
		width: 90vw;
		max-width: 1024px;
	}
</style>
