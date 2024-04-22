<article>
	<header>
		<h2>Переосмысление обучения с Gideone</h2>
		<p>
			В Gideone мы стремимся переопределить обучение, делая его персонализированным, доступным и
			эффективным для каждого.
		</p>
	</header>
	<section>
		<span inert>training</span>
		<div class="block right">
			<img src="img/placeholder.png" alt="" />
			<div class="text">
				<h3>Наша миссия —</h3>
				<p>
					разработать сильный ИИ, способный направлять обучение в соответствии с вашими уникальными
					целями и потребностями.
				</p>
			</div>
		</div>
		<div class="block">
			<div class="text">
				<p>
					Путем интеграции инновационных алгоритмов и методик, Gideone обещает предоставить
					инструменты для достижения любых учебных амбиций, от базовых навыков до сложных
					компетенций.
				</p>
			</div>
			<img src="img/code.png" alt="" />
		</div>
	</section>
	<footer>
		<h3>Присоединяйтесь к нам,</h3>
		<p>
			чтобы вместе воплотить в жизнь обучение будущего — где каждый шаг к знаниям сопровождается
			уверенностью в себе и своих силах.
		</p>
	</footer>
</article>

<style lang="scss">
	article {
		margin: 180px 135px 0;
		&::after {
			display: block;
			content: '';
			position: absolute;
			background: #6c60ef;
			border-radius: 100%;
			width: 85vw;
			max-width: 1280px;
			aspect-ratio: 1/1;
			z-index: -1;
			top: -60px;
			left: -20%;
		}
	}
	header {
		margin-bottom: 34px;
		h2 {
			max-width: 1180px;
			font-weight: 700;
			font-size: 80px;
			font-family: 'Unbounded', sans-serif;
			text-transform: uppercase;
			margin-bottom: 74px;
			max-height: none;
		}
		p {
			max-width: 824px;
			font-weight: 500;
			font-size: 23px;
			color: #fff;
		}
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 30px;
		span {
			position: absolute;
			bottom: 100px;
			font-weight: 700;
			font-size: 18vw;
			text-transform: uppercase;
			text-align: right;
			color: #fff;
			opacity: 0.06;
			z-index: 0;
		}

		.block {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
			.text {
				display: flex;
				flex-direction: column;
				align-items: end;
				justify-content: center;
			}

			h3 {
				font-weight: 700;
				font-size: 45px;
				font-family: 'Unbounded', sans-serif;
				text-transform: uppercase;
				color: #fff;
				margin-bottom: 30px;
			}
			p {
				font-weight: 500;
				font-size: 23px;
				color: #fff;
				max-width: 600px;
			}
			&.right {
				text-align: right;
			}
		}
	}
	footer {
		h3 {
			max-width: 550px;
			font-weight: 700;
			font-size: 50px;
			font-family: 'Unbounded', sans-serif;
			text-transform: uppercase;
			color: #fff;
			margin-bottom: 30px;
		}
		p {
			font-weight: 500;
			font-size: 23px;
			color: #fff;
			max-width: 864px;
		}
	}
</style>
