<script>
	import Cards from './cards/index.svelte';
</script>

<article id="uniqueness">
	<header>
		<h2>ПОЧЕМУ МЫ?</h2>
	</header>

	<section class="mini">
		<h4>Неоспоримые преимущества нашего ИИ-тренера</h4>
	</section>

	<Cards/>

	<section>
		<div>
			<h3>СЦЕНАРИИ В GIDEONE</h3>
			<p>
				Сценарии в Gideone обеспечивают точную настройку обучения и оценки сотрудников для различных
				продуктов и услуг, например, в банках, учебных центрах, и ритейле. Это улучшает развитие
				навыков, адаптируя тренинги под конкретные задачи, что значительно повышает качество
				обслуживания и увеличивает продажи.
			</p>
		</div>
		<img src="img/scenario.svg" alt="оценка персонала по сценариям" />
	</section>

	<section class="operator">
		<div>
			<h3>У вас своя система контроля качества работы персонала?</h3>
			<p>
				У нас есть форматы для работы с компаниями, у которых есть свои операторы для оценки
				персонала и работой с персоналом
			</p>
		</div>
		<div class="features">
			<div>
				<img src="img/feedback.svg" alt="персональные рекомендации для сотрудников in real time" />
				<span>персональные рекомендации для сотрудников in real time</span>
			</div>
			<p>Мы обеспечим</p>
			<div>
				<img src="img/stats.svg" alt="управление качеством работы персонала" />
				<span style="max-width: 380px;">управление качеством работы персонала</span>
			</div>
		</div>
	</section>

	<section>
		<div>
			<h3>Раскройте потенциал вашего бизнеса с Gideone</h3>
			<p>
				Независимо от того, управляете ли вы сетевым магазином, пекарней, фастфудом, фитнес-центром,
				салоном красоты, медицинским учреждением или банком, Gideone улучшит ваше обслуживание и
				продажи. Наша технология адаптирована для работы в прикассовых зонах, у прилавка и в зонах
				рецепции, обеспечивая бизнесам любого масштаба необходимые инструменты для улучшения
				качества обслуживания и увеличения продаж
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
		font-size: 70px;
		color: #fff;
		margin-bottom: 30px;
	}
	h3 {
		max-width: 820px;
		font-family: 'Unbounded', sans-serif;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 40px;
		color: #fff;
		margin-bottom: 50px;
	}
	h4 {
		font-weight: 700;
		font-size: 30px;
		color: #80f0ff;
	}
	p {
		max-width: 689px;
		font-weight: 500;
		font-size: 23px;
		color: #fff;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.mini {
		padding: 45px 115px;
		border-radius: 0 40px 40px 0;
		max-width: 876px;
		min-width: auto;
		min-height: auto;
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
					font-weight: 700;
					font-size: 26px;
					text-transform: uppercase;
					color: #80f0ff;
					font-family: 'Unbounded', sans-serif;
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
