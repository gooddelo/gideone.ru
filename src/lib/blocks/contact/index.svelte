<script>
	import Gcaptcha from '$lib/utils/gcaptcha.svelte';
	let token = '';
</script>

<section id="contact">
	<script async defer src="https://www.google.com/recaptcha/api.js"></script>
	<h2>ПЕРСОНАЛИЗИРОВАНО. <br />эффективно. <br />сейчас<b>!</b></h2>
	<p>Форма для связи</p>
	<form action="https://tg-notify-gooddelo.vercel.app/api/v1/sendform" method="post">
		<div>
			<label for="name">имя</label>
			<input id="name" type="text" name="Name" required />
		</div>
		<div>
			<label for="phone">телефон</label>
			<input id="phone" type="tel" name="Phone" />
		</div>
		<div>
			<label for="email">почта</label>
			<input id="email" type="email" name="Email" required />
		</div>
		<div>
			<label for="comment">комментарий</label>
			<textarea
				id="comment"
				type="text"
				name="Comment"
				placeholder="Оставьте вашу заявку"
				required
			/>
		</div>
		<Gcaptcha bind:token />
		<input type="text" value={token} hidden id="token" name="token" />
		<button type="submit" disabled={!token}>отправить</button>
	</form>
</section>

<style lang="scss">
	$mobile: 830px;

	section {
		padding: 155px 0 180px;
		background: url(img/bg-dashbords.png);
		mask-image: linear-gradient(
			180deg,
			transparent 0%,
			rgba(0, 0, 0, 1) 10%,
			rgba(0, 0, 0, 1) 90%,
			transparent 100%
		);
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2 {
		font-weight: 700;
		font-size: 50px;
		text-transform: uppercase;
		color: #fff;
		font-family: 'Unbounded', sans-serif;
		line-height: 127px;
		text-align: center;
		margin-bottom: 20px;

		b {
			line-height: 1;
			font-size: 70px;
		}

		@media (width <= $mobile) {
			font-weight: 700;
			font-size: clamp(12px, 6vw, 28px ) ;
			text-transform: uppercase;
			text-align: center;
			color: #fff;
			line-height: 42px;

			b {
				line-height: 42px;
				font-size: 21px;
			}
		}
	}

	p {
		font-weight: 500;
		font-size: 30px;
		text-align: center;
		color: #fff;
		max-width: 440px;
		margin-bottom: 65px;

		@media (width <= $mobile) {
			font-weight: 500;
			font-size: 18px;
			text-align: center;
			color: #fff;
			margin-bottom: 35px;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
		width: 90%;
		max-width: 400px;


		div {
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		label {
			font-weight: 400;
			font-size: 20px;
			color: #fff;
			margin-bottom: 7px;
		}

		textarea {
			resize: none;
			min-height: 180px;
			padding-top: 10px;
		}

		input,
		textarea {
			border: none;
			padding-left: 10px;
			background: #212745;
			border-radius: 10px;
			width: 400px;
			height: 60px;
			font-weight: 400;
			font-size: 20px;
			color: #fff;

			@media (width <= $mobile) {
				width: 100%;
			}
		}

		button {
			background: #6c60ef;
			border: 4px solid #6c60ef;
			border: none;
			padding: 16px 47px;
			border-radius: 60px;
			font-weight: 500;
			font-size: 24px;
			color: #fff;
			transition: all 0.25s ease;

			&:disabled {
				opacity: 0.4;
				background: #7b7b7b;
			}

			&:not(:disabled) {
				@include hover {
					box-shadow: 5px 8px 0 0 rgba(108, 96, 239, 0.3);
					background: #6c60ef;
					transform: scale(1.1);
				}
				:active {
					background: none;
				}
			}
		}
	}
</style>
