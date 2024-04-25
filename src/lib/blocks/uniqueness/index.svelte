<script>
	import Cards from './cards/index.svelte';
</script>

<article id="uniqueness">
	<header>
		<h2>Неоспоримые преимущества нашего ИИ-тренера</h2>
	</header>

	<Cards />

	<section class="top">
		<div>
			<p>Сценарии в Gideone созданы для отработки отдельных навыков, товаров и услуг</p>
		</div>
		<img src="img/scenario.svg" alt="оценка персонала по сценариям" />
	</section>

	<section class="operator">
		<div>
			<p>
				мы предоставляем удобную платформу AI-рекомендаций, аналитики и с статистики в режиме
				реального времени
			</p>
		</div>
		<div class="features">
			<div>
				<img src="img/feedback.svg" alt="персональные рекомендации в режиме реального времени" />
				<span>персональные рекомендации в режиме реального времени</span>
			</div>
			<div>
				<img src="img/stats.svg" alt="управление качеством работы персонала" />
				<span style="max-width: 380px;">Рычаги настройки сервиса в ваших руках</span>
			</div>
		</div>
	</section>

	<section class="bot">
		<div>
			<p>
				Раскройте потенциал ваших сотрудников и выведете бизнес на новый уровень вместе с Gideone
			</p>
		</div>
		<img src="img/store.svg" alt="оценка персонала для микро, малого и крупного бизнеса" />
	</section>
</article>

<style lang="scss">
	h2 {
		margin-left: 70px;
		font-family: 'Unbounded', sans-serif;
		font-weight: 700;
		font-size: 60px;
		max-width: 1050px;
		color: #fff;
		margin-bottom: 30px;

		@media (width <= 768px) {
			text-align: center;
			font-size: 6vw;
			margin-left: 0px;
		}
	}
	p {
		line-height: 120%;
		max-width: 981px;
		font-weight: 500;
		font-size: 35px;
		text-transform: uppercase;
		color: #fff;

		@media (width <= 768px) {
			font-weight: 500;
			font-size: 16px;
			text-transform: uppercase;
			text-align: center;
			color: #fff;
			width: 320px;
			z-index: 2;
		}
	}

	article {
		display: flex;
		flex-direction: column;

		@media (width <= 768px) {
			gap: 0;
		}
	}

	section {
		margin-right: 160px;
		padding: 75px 360px 75px 70px;
		background: #212745;
		border-radius: 0 90px 90px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 404px;
		max-width: 1440px;
		margin-bottom: 30px;

		img {
			position: absolute;
			right: 14px;

			@media (width <= 768px) {
				right: 0;
				top: -30px;
				z-index: 0;
				position: relative;
			}
		}

		@media (width <= 768px) {
			margin-right: 0;
			margin-bottom: 0;
			border-radius: 0;
			flex-direction: column;
			padding: 80px 30px 10px;

			&.top {
				border-radius: 60px 60px 0 0;
			}
			&.bot {
				border-radius: 0 0 60px 60px;
			}
		}
	}

	.operator {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 75px 0 75px 70px;

		@media (width <= 768px) {
			padding: 40px 0px 10px;
		}

		p {
			@media (width <= 768px) {
				min-width: 100vw;
				padding: 0 30px;
				margin: 0 auto;
			}
		}

		.features {
			padding-right: 45px;
			margin-top: 40px;
			display: flex;
			min-width: 100%;
			justify-content: space-between;

			@media (width <= 768px) {
				flex-direction: column;
				align-items: center;
				padding: 0;
			}

			p {
				font-weight: 500;
				font-size: 26px;
				text-transform: uppercase;
				color: #fff;
				font-family: 'Unbounded', sans-serif;
			}

			div {
				display: flex;
				justify-content: center;
				align-items: flex-end;
				min-width: 404px;
				max-width: 510px;
				min-height: 404px;

				@media (width <= 768px) {
					min-width: auto;
					flex-direction: column;
					align-items: center;
				}

				span {
					bottom: 40px;
					max-width: 510px;
					font-weight: 500;
					font-size: 26px;
					text-transform: uppercase;
					text-align: center;
					color: #fff;
					text-align: center;

					@media (width <= 768px) {
						bottom: -90px;
						font-weight: 500;
						font-size: 14px;
						text-transform: uppercase;
						text-align: center;
						color: #fff;
					}
				}
				img {
					position: absolute;
					right: auto;
					top: auto;
				}
			}
		}
	}
</style>
