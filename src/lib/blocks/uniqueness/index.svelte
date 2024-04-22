<script>
	import Cards from './cards/index.svelte';
</script>

<article id="uniqueness">
	<header>
		<h2>Неоспоримые преимущества нашего ИИ-тренера</h2>
	</header>

	<Cards />

	<section>
		<div>
			<p>Сценарии в Gideone созданы для отработки отдельных навыков, товаров и услуг</p>
		</div>
		<img src="img/scenario.svg" alt="оценка персонала по сценариям" />
	</section>

	<section class="operator">
		<div>
			<p>
				мы предоставляем удобную платформу AI-рекомендаций, аналаитики и с статистики в режиме
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

	<section>
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
	}
	p {
		line-height: 120%;
		max-width: 981px;
		font-weight: 500;
		font-size: 35px;
		text-transform: uppercase;
		color: #fff;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 30px;
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

		img {
			position: absolute;
			right: 14px;
		}
	}

	.operator {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 75px 0 75px 70px;

		.features {
			padding-right: 45px;
			margin-top: 40px;
			display: flex;
			min-width: 100%;
			justify-content: space-between;

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
				span {
					bottom: 40px;
					max-width: 510px;
					font-weight: 500;
					font-size: 26px;
					text-transform: uppercase;
					text-align: center;
					color: #fff;
					text-align: center;
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
