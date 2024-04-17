<script>
</script>

<article id="subscription">
	<header>
		<h2>ПОДПИСКА <br />НА 100% РЕЗУЛЬТАТ <br /><mark>ЗА 2 МИНУТЫ</mark></h2>
	</header>
	<section>
		<div class="card">
			<div class="name">
				<h3>Пакет <br /> “AI-тренер”</h3>
			</div>
			<ul>
				<li>AI-тренер для ваших сотрудников</li>
				<li>до 100 пользователей</li>
				<li><b>от 2200 руб/ пользователь</b></li>
			</ul>
			<a href="/#contact">
				<button>оставить заявку</button>
			</a>
		</div>
		<div class="card opposite">
			<div class="name">
				<h3>Пакет <br /> “Индивидуальный”</h3>
			</div>
			<ul>
				<li>для компаний со своим штатом операторов контроля качества работы персонала</li>
				<li>до 100 пользователей</li>
				<li>все преимущества пакета AI, но оценку и контроль предоставляют ваши операторы</li>
				<li><b>от 500 руб/ пользователь</b></li>
			</ul>
			<a href="/#contact">
				<button>оставить заявку</button>
			</a>
		</div>
	</section>
	<footer>
		<p>Предоставление индивидуальных условий, если в системе свыше 100 пользователей</p>
	</footer>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 90px 134px;
	}
	h2 {
		font-weight: 700;
		font-size: 80px;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		margin-bottom: 110px;

		mark {
			color: #80f0ff;
			background: none;
		}
	}

	section {
		display: flex;
		align-self: center;
		margin-bottom: 50px;
		width: 100%;
		justify-content: space-evenly;
		gap: 30px;

		.card {
			width: 460px;
			max-height: 750px;
			border-radius: 40px;
			background: #212745;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.opposite {
			.name {
				background-color: #80f0ff;
				h3 {
					color: #212745;
				}
			}
			li {
				&::before {
					background: #80f0ff;
				}
			}
			button {
				background-color: #80f0ff;
				color: #212745;
			}
		}

		.name {
			display: flex;
			justify-content: center;
			padding: 27px 0;
			background: #6c60ef;
			margin-bottom: 80px;

			h3 {
				font-family: 'Unbounded', sans-serif;
				font-weight: 500;
				font-size: 26px;
				text-align: center;
				color: #fff;
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-left: 60px;
			padding-right: 10px;
			margin-bottom: 60px;
			flex: 1 0 0;

			li {
				font-weight: 500;
				font-size: 22px;
				color: #fff;
				&::before {
					position: absolute;
					left: -35px;
					height: 20px;
					aspect-ratio: 1/1;
					border-radius: 100%;
					background: #6c60ef;
					content: '';
				}
			}
		}

		a {
			align-self: center;
		}
		button {
			border: none;
			background: #6c60ef;
			margin-bottom: 50px;
			padding: 20px 30px;
			border-radius: 60px;
			width: 280px;
			font-weight: 500;
			font-size: 26px;
			text-transform: lowercase;
			color: #fff;
		}
	}

	footer {
		align-self: center;
		border-radius: 40px 0;
		background: #1e2445;
		padding: 64px 220px;

		p {
			font-weight: 500;
			font-size: 26px;
			text-align: center;
			color: #fff;
			max-width: 650px;
		}
	}
</style>
