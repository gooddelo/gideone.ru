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
			<img src="img/idea.svg" alt="" />
			<div class="text">
				<h3>Наша миссия —</h3>
				<p>
					разработать сильный ИИ, способный направлять обучение в соответствии с вашими уникальными
					целями и потребностями.
				</p>
			</div>
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
		margin: 250px 135px 130px;
		display: flex;
		flex-direction: column;
		align-items: center;
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
			top: -160px;
			left: -20%;

			@media (width <= 768px) {
				top: -60px;
				left: auto;
				width: clamp(547px, 110vw, 768px);
			}
		}

		@media (width <= 1024px) {
			margin: 250px 60px 130px;
		}
		@media (width <= 768px) {
			margin: 150px 20px 0;
		}
	}
	header {
		margin-bottom: 34px;

		@media (width <= 768px) {
			margin-bottom: 55px;
		}

		h2 {
			max-width: 1180px;
			font-weight: 700;
			font-size: clamp(40px, 6.6vw, 60px);
			font-family: 'Unbounded', sans-serif;
			text-transform: uppercase;
			margin-bottom: 74px;
			max-height: none;

			@media (width <= 768px) {
				font-size: 6.6vw;
				text-align: center;
				margin-bottom: 25px;
			}
		}
		p {
			max-width: 824px;
			font-weight: 500;
			font-size: 23px;
			color: #fff;

			@media (width <= 768px) {
				font-size: 16px;
				max-width: 336px;
			}
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
			top: -500px;
			font-weight: 700;
			font-size: 18vw;
			text-transform: uppercase;
			text-align: right;
			color: #fff;
			opacity: 0.06;
			z-index: 0;

			@media (width <= 768px) {
				top: -90%;
			}
		}

		.block {
			display: flex;
			justify-content: center;
			width: 100%;

			@media (width <= 768px) {
				flex-direction: column;
			}

			img {
				@media (width <= 768px) {
					width: 200px;
				}
			}

			.text {
				display: flex;
				flex-direction: column;
				align-items: end;
				justify-content: center;

				@media (width <= 768px) {
					order: -1;
				}
			}

			h3 {
				font-weight: 700;
				font-size: 45px;
				font-family: 'Unbounded', sans-serif;
				text-transform: uppercase;
				color: #fff;
				line-height: 120%;

				@media (width <= 768px) {
					font-weight: 700;
					font-size: 23px;
					text-transform: uppercase;
					color: #fff;
				}
			}
			p {
				line-height: 120%;
				font-weight: 500;
				font-size: 23px;
				color: #fff;
				max-width: 800px;

				@media (width <= 768px) {
					font-size: 16px;
					text-align: right;
					max-width: 356px;
				}
			}
			&.right {
				text-align: right;
			}
		}
	}
	footer {
		@media (width <= 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		h3 {
			max-width: 550px;
			font-weight: 700;
			font-size: 50px;
			font-family: 'Unbounded', sans-serif;
			text-transform: uppercase;
			color: #fff;
			margin-bottom: 30px;
			line-height: 120%;

			@media (width <= 768px) {
				margin-bottom: 20px;
				max-width: 330px;
				font-size: 25px;
				text-align: center;
			}
		}
		p {
			font-weight: 500;
			line-height: 120%;
			font-size: 23px;
			color: #fff;
			max-width: 864px;

			@media (width <= 768px) {
				font-size: 16px;
				text-align: center;
				max-width: 356px;
			}
		}
	}
</style>
