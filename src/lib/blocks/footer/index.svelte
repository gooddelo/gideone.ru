<script>
	import { _ } from '$lib/i18n';
</script>

<footer>
	<div class="company">
		<div>
			<a
				href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2023668234&TypeFile=html"
				target="_blank"
			>
				{$_('footer.patentedTechnology')}
			</a>
			<img src="img/logo.svg" height="32px" width="120px" alt="gooddelo gideone" />
			<h3>{$_('footer.companyName')}</h3>
			<p>{$_('footer.taxId')}</p>
		</div>
	</div>

	<div class="middle">
		<a class="map" target="_blank" href="https://yandex.ru/maps/-/CDVaNMZd"
			>{$_('footer.address')}</a
		>
		<a class="telephone" href="tel:88001017987">8-800-101-7987</a>
		<a class="telephone" href="tel:+79967379912">+7(996)737-99-12</a>
		<div class="email">info@gideone.ru</div>
	</div>

	<div class="fsi">
		<a href="https://navigator.sk.ru/orn/1126754">
			<div class="skolkovoImg">
				<img
					src="img/skolkovo.svg"
					width="186px"
					alt="Фонд содействия инновациям gooddelo gideone"
				/>
			</div>
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 30px 64px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #212745;
	}

	.middle {
		display: flex;
		flex-direction: column;
		gap: 6px;
		.map {
			width: 420px;
			text-align: center;
			font-weight: 600;
			font-size: 20px;
			line-height: 125%;
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

	.company {
		display: flex;
		gap: 10px;
		align-items: flex-end;
		color: #fff;
		min-width: 300px;

		div {
			padding-bottom: 8px;
		}

		a {
			font-weight: 700;
			font-size: 20px;
			line-height: 130%;
			text-decoration: underline;
			color: #fff;
			max-width: 130px;
			display: block;
			margin-bottom: 20px;
		}
		p {
			font-weight: 700;
			font-size: 20px;
			line-height: 90%;
		}
		h3 {
			line-height: 120%;
			font-weight: 600;
			font-size: 25px;
		}
	}
	.fsi {
		min-width: 300px;
		display: flex;
		justify-content: center;
	}

	.skolkovoImg {
		padding: 16px;
		border-radius: 15px;
		background-color: white;
	}
</style>
