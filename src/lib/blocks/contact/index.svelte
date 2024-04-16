<script>
	import Gcaptcha from '$lib/utils/gcaptcha.svelte';
	let token = '';
</script>

<section id="contact">
	<script async defer src="https://www.google.com/recaptcha/api.js"></script>
	<h2>ПЕРСОНАЛИЗИРОВАННО. <br />ТОЧНО. <br />СЕЙЧАС<b>!</b></h2>
	<p>Свяжитесь с нами если остались вопросы</p>
	<form action="https://tg-notify-gooddelo.vercel.app/api/v1/sendform" method="post">
		<div>
			<label for="name">Имя</label>
			<input id="name" type="text" name="Name" placeholder="Иван" required />
		</div>
		<div>
			<label for="phone">Телефон</label>
			<input id="phone" type="tel" name="Phone" placeholder="+78001017987" />
		</div>
		<div>
			<label for="email">Почта</label>
			<input id="email" type="email" name="Email" placeholder="delo@gooddelo.com" required />
		</div>
		<Gcaptcha bind:token />
		<input type="text" value="" hidden id="comment" name="Comment" />
		<input type="text" value={token} hidden id="token" name="token" />
		<button type="submit" disabled={!token}>ОТПРАВИТЬ</button>
	</form>
</section>

<style lang="scss">
	section {
		margin: 80px 0 0;
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

		b {
			line-height: 1;
			font-size: 70px;
		}
	}

	p {
		font-weight: 500;
		font-size: 30px;
		text-align: center;
		color: #fff;
		max-width: 440px;
		margin-bottom: 45px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;

		div {
			display: flex;
			flex-direction: column;
		}

		label {
			font-weight: 400;
			font-size: 20px;
			color: #fff;
			margin-bottom: 5px;
		}

		input {
			border: none;
			padding-left: 10px;
			background: #212745;
			border-radius: 10px;
			width: 400px;
			height: 60px;
			font-weight: 400;
			font-size: 20px;
			color: #fff;
		}

		button {
			background: #6c60ef;
			border: 4px solid #6c60ef;
			border: none;
			padding: 20px 30px;
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
					box-shadow: 10px 15px 0 0 rgba(108, 96, 239, 0.3);
					background: #6c60ef;
				}
				:active {
					background: none;
				}
			}
		}
	}
</style>
