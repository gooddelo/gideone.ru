<script>
</script>

<section>
	<img src="img/sh-charts.png" alt="Сравнитильная аналитика для персонала" />
	<div>
		<p>
			Используйте мощь <mark>рейтингов</mark> и <mark>сравнительной аналитики</mark> для мотивации и
			развития вашей команды
		</p>
	</div>
	<span>use Gideone</span>
</section>

<style lang="scss">
	section {
		min-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		background: url('/img/bg-line.svg') no-repeat;
		background-size: cover;
		background-color: #343a5c;
		display: flex;
		z-index: 10;
		overflow: hidden;

		@media (width <= 768px) {
			flex-direction: column;
		}
	}
	div {
		margin-top: 120px;
		align-self: flex-start;
		padding-left: 7vw;
		display: flex;
		flex-direction: column;

		@media (width <= 768px) {
			order: -1;
			align-self: flex-end;
			margin-top: 40px;
			padding-left: 5vw;
			padding-right: 20px;
		}
	}
	p {
		font-weight: 500;
		font-size: 30px;
		line-height: 200%;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		max-width: 624px;
		margin-bottom: 80px;

		@media (width <= 1024px) {
			font-size: 3vw;
		}

		@media (width <= 768px) {
			font-weight: 500;
			font-size: 16px;
			line-height: 181%;
			text-transform: uppercase;
			color: #fff;
			max-width: 240px;
			margin-bottom: 40px;
		}

		&::after {
			display: block;
			content: '';
			position: absolute;
			background: #2b3152;
			border-radius: 100%;
			width: 40vw;
			min-width: 710px;
			max-width: 810px;
			aspect-ratio: 1/1;
			z-index: -1;
			top: -100%;
			left: -10%;

			@media (width <= 768px) {
				top: -200%;
				left: -40%;
			}
		}

		mark {
			background: none;
			font-family: 'Unbounded', sans-serif;
			color: #80f0ff;
		}
	}
	img {
		height: 90vh;
		margin-left: 7vw;
		margin-top: 7vh;
		z-index: 2;

		@media (width <= 1024px) {
			height: auto;
			width: 40vw;
			object-fit: contain;
		}

		@media (width <= 768px) {
			width: 50vw;
			min-width: 250px;
			margin-top: -7vh;
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
