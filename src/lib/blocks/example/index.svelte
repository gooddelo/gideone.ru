<script>
	import Animator from '$lib/utils/animator.svelte';
	import { fly } from 'svelte/transition';
</script>

<section>
	<aside class="left">
		<h2>Встречайте Gideone –</h2>
		<p>вашего персонального бизнес-тренера с искусственным интеллектом</p>
	</aside>

	<div class="phone">
		<div class="chat">
			<Animator>
				<p class="bot" transition:fly={{ x: -40, duration: 1000 }}>
					Привет, Иван! На основе последней продажи, я заметил, что вы отлично справились с
					презентацией товара.
				</p>
			</Animator>

			<Animator>
				<p class="you" transition:fly={{ x: 40, duration: 1000 }}>
					Спасибо, Gideone! Посмотрю прямо сейчас.
				</p>
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
		justify-content: space-around;
		margin-top: 160px;
	}
	.chat {
		position: absolute;
		bottom: 150px;
		left: 60px;
		z-index: 20;
		font-weight: 400;
		font-size: 20px;
		font-variant: small-caps;
		color: #fff;

		.bot {
			width: 280px;
			background: #6c60ef;
			border-radius: 20px;
			padding: 20px;
			margin-bottom: 60px;
		}
		.you {
			margin-left: 115px;
			width: 280px;
			background: #212745;
			border-radius: 20px;
			padding: 20px;
			margin-bottom: 60px;
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
