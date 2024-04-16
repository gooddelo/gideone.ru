<article id="uniqueness">
	<header>
		<h2>ПОЧЕМУ МЫ?</h2>
	</header>
	<section>
		<div>
			<h3>СЦЕНАРИИ В GIDEONE</h3>
			<p>
				С нашей системой можно производить оценку и обучение не только по стандартам продаж,
				например, но и по конкретным темам тренинга или внутренним сценариям продаж.
			</p>
		</div>
		<img src="img/scenario.svg" alt="оценка персонала по сценариям" />
	</section>
	<section class="operator">
		<div>
			<h3>У ВАС СВОЙ ОПЕРАТОР ВИДЕООЦЕНКИ?</h3>
			<p>
				У нас есть форматы для работы с компаниями, у которых есть свои операторы для оценки
				персонала и работой с персоналом
			</p>
		</div>
		<div class="features">
			<div>
				<img src="img/feedback.svg" alt="оценка персонала с обратной связью" />
				<span>своевременную обратную связь</span>
			</div>
			<p>Мы обеспечим</p>
			<div>
				<img src="img/stats.svg" alt="контроль статистики и аналитики в оценке персонала" />
				<span>контроль статистики и аналитики</span>
			</div>
		</div>
	</section>
	<section>
		<div>
			<h3>КОМУ МЫ ПОЛЕЗНЫ</h3>
			<p>Наша целевая аудитория - это и микро компании и крупные игроки</p>
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
		max-width: 763px;
		font-family: 'Unbounded', sans-serif;
		font-weight: 700;
		font-size: 50px;
		color: #fff;
		margin-bottom: 60px;
	}
	p {
		max-width: 763px;
		font-weight: 500;
		font-size: 26px;
		color: #fff;
	}

	article {
		margin-right: 160px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	section {
		padding: 75px 360px 75px 70px;
		background: #212745;
		border-radius: 0 90px 90px 0;
		display: flex;
		align-items: top;
		justify-content: space-between;
		min-height: 404px;
		max-width: 1440px;

		img {
			position: absolute;
			right: 0;
			top: 0;
		}
	}

	.operator {
		display: flex;
		flex-direction: column;
		padding: 75px 0 75px 70px;

		.features {
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
				max-width: 450px;
				min-height: 404px;
				span {
					bottom: 60px;
					max-width: 500px;
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
