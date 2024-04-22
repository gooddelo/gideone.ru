<script>
	import Animator from '$lib/utils/animator.svelte';
</script>

<section>
	<aside class="left">
		<h2>Встречайте Gideone –</h2>
		<p>вашего персонального бизнес-тренера с искусственным интеллектом</p>
	</aside>

	<div class="phone">
		<div class="chat">
			<Animator let:isInView>
				<p class="message bot" class:isInView>
					Привет, Иван! На основе последней продажи я заметил, что вы отлично справились с
					презентацией товара.
				</p>
			</Animator>
			<Animator let:isInView>
				<p class="message bot" class:isInView>
					Однако, было бы здорово уделить больше внимания заключительной фазе обслуживания.
					Рекомендую пройти короткое видеообучение по этой теме, вот ссылка: www.gooddelo.ru
				</p>
			</Animator>
			<Animator let:isInView>
				<p class="message you" class:isInView>Спасибо, Gideone! Посмотрю прямо сейчас.</p>
			</Animator>
			<Animator let:isInView>
				<p class="message bot" class:isInView>Всегда рад быть полезным 😊</p>
			</Animator>
		</div>
		<img
			class="mockup"
			height="979px"
			width="517px"
			src="/img/mockup.png"
			alt="gideone ИИ-тренер для бизнеса"
		/>
	</div>
	<aside class="right">
		<p>Мгновенный анализ и обратная связь для каждого сотрудника онлайн и оффлайн торговли</p>
	</aside>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		gap: 2%;
	}
	.chat {
		position: absolute;
		top: 230px;
		left: 60px;
		z-index: 20;
		font-weight: 400;
		font-size: 20px;
		font-variant: small-caps;
		color: #fff;

		.message {
			border-radius: 20px;
			padding: 20px;
			max-width: 240px;
			margin-bottom: 15px;
			opacity: 0;
			// transform: translateY(-30px);
			// transition: opacity 1.0s ease;
		}

		.bot {
			background: #6c60ef;
		}
		.you {
			margin-left: 155px;
			background: #212745;
		}

		.isInView {
			animation: messageUp ease 0.8s both;
			
			@keyframes messageUp {
				from {
					opacity: 0;
					transform: translateY(30px);
				}
				to {
					opacity: 1;
					transform: translateY(0px);
				}
			}
		}
	}
	.mockup {
		width: fit-content;
		display: block;
	}
	aside {
		h2 {
			font-weight: 600;
			font-size: 30px;
			font-variant: small-caps;
			max-width: 390px;
		}
		p {
			font-weight: 500;
			font-size: 30px;
			font-variant: small-caps;
			max-width: 390px;
		}

		&.left {
			margin-top: 10%;
		}
		&.right {
			margin-top: 35%;
		}
	}
</style>
