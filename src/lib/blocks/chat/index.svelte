<script>
	import Animator from '$lib/utils/animator.svelte';
	import { _ } from '$lib/i18n';
</script>

<section>
	<aside class="left">
		<h2>{$_('chat.heading')}</h2>
		<p>{$_('chat.subtitle')}</p>
	</aside>

	<div class="phone">
		<div class="chat">
			<div class="asist">
				<Animator let:isInView>
					<p class="message bot" class:isInView>
						{$_('chat.firstMessage')}
					</p>
				</Animator>
			</div>
			<div class="asist">
				<Animator let:isInView>
					<p class="message bot" class:isInView>
						{$_('chat.secondMessage')}
					</p>
				</Animator>
			</div>
			<div class="client">
				<Animator let:isInView>
					<p class="message you" class:isInView>{$_('chat.reply')}</p>
				</Animator>
			</div>
			<div class="asist">
				<Animator let:isInView>
					<p class="message bot" class:isInView>{$_('chat.botResponse')}</p>
				</Animator>
			</div>
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
		<p>{$_('chat.aside')}</p>
	</aside>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		gap: 2%;

		@media (width <= 768px) {
			flex-direction: column;
		}
	}

	.phone {
		@media (width <= 768px) {
			order: -1;
			min-height: 660px;
			background-image: url('/img/bg-text.svg');
			background-size: contain;
		}
	}

	.chat {
		position: absolute;
		top: 230px;
		left: 60px;
		z-index: 20;
		font-weight: 400;
		font-size: 18px;
		color: #fff;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-right: 130px;

		@media (width <= 768px) {
			top: 20px;
			left: 20px;
			padding-right: 40px;
			padding-top: 40px;
		}

		.message {
			border-radius: 20px;
			padding: 20px;
			max-width: 240px;
			margin-bottom: 15px;
			opacity: 0;

			@media (width <= 768px) {
				max-width: 280px;
			}
		}

		.bot {
			background: #6c60ef;
		}
		.you {
			background: #212745;
		}
		.client {
			align-self: flex-end;
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

		@media (width <= 768px) {
			display: none;
		}
	}
	aside {
		h2 {
			font-weight: 600;
			font-size: 28px;
			max-width: 390px;
		}
		p {
			font-weight: 500;
			font-size: 28px;
			max-width: 390px;
		}

		&.left {
			margin-top: 10%;
		}
		&.right {
			margin-top: 35%;
		}

		@media (width <= 768px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h2 {
				font-size: 16px;
				text-align: center;
				max-width: 180px;
			}
			p {
				font-size: 16px;
				max-width: 320px;
				text-align: center;
			}
			&.left {
				margin-top: 60px;
			}
			&.right {
				margin-top: 20px;
			}
		}
	}
</style>
