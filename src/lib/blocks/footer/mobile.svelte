<script>
	import { _ } from '$lib/i18n';
</script>

<footer>
	<div class="fsi">
		<a
			href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2023668234&TypeFile=html"
			target="_blank"
		>
			{$_('footer.patentedTechnology')}
		</a>
	</div>

	<div class="middle">
		<div class="company">
			<img src="img/logo.svg" height="32px" width="120px" alt="gooddelo gideone" />
			<div>
				<h3>{$_('footer.companyName')}</h3>
				<p>{$_('footer.taxId')}</p>
			</div>
		</div>
		<a href="https://navigator.sk.ru/orn/1126754">
			<div class="skolkovoImg">
				<img
					src="img/skolkovo.svg"
					width="150px"
					alt="Фонд содействия инновациям gooddelo gideone"
				/>
			</div>
		</a>
	</div>

	<div class="bot">
		<a class="map" target="_blank" href="https://yandex.ru/maps/-/CDVaNMZd"
			>{$_('footer.address')}</a
		>
		<a class="telephone" href="tel:88001017987">8-800-101-7987</a>
		<a class="telephone" href="tel:+79967379912">+7(996)737-99-12</a>
		<div class="email">info@gideone.ru</div>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 35px 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: #212745;
	}

	.middle {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 30px;
		width: 100%;
	}

	.company {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		text-align: center;
		color: #fff;

		div {
			padding-bottom: 8px;
		}

		p {
			font-weight: 700;
			font-size: 15px;
			line-height: 120%;
			text-align: center;
			color: #fff;
		}
		h3 {
			font-weight: 700;
			font-size: 15px;
			line-height: 120%;
			text-align: center;
			color: #fff;
			text-transform: uppercase;
		}
	}
	.bot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;

		.map {
			max-width: 300px;
			font-weight: 600;
			font-size: 16px;
			line-height: 119%;
			text-align: center;
			color: #fff;
		}
		.telephone {
			text-align: center;
			font-family: 'Unbounded', sans-serif;
			font-weight: 500;
			font-size: 20px;
			text-transform: lowercase;
			color: #fff;
		}
		.email {
			text-align: center;
			font-weight: 600;
			font-size: 20px;
			line-height: 125%;
			text-align: center;
			color: #fff;
		}
	}

	.fsi {
		a {
			font-weight: 700;
			font-size: 15px;
			line-height: 153%;
			text-decoration: underline;
			text-decoration-skip-ink: none;
			color: #fff;
			max-width: 191px;
		}
		text-align: center;
		max-width: 191px;
		margin-bottom: 16px;
	}

	.skolkovoImg {
		padding: 16px;
		border-radius: 15px;
		background-color: white;
	}
</style>
