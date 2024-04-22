<footer>
	<div class="company">
		<img src="img/gooddelo.svg" height="64px" width="64px" alt="gooddelo gideone" />
		<div>
			<a
				href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2023668234&TypeFile=html"
				target="_blank"
			>
				ЗАПАТЕНТОВАННАЯ ТЕХНОЛОГИЯ
			</a>
			<p>ПРОЕКТ КОМПАНИИ</p>
			<h3>Gooddelo</h3>
		</div>
	</div>
	<div class="middle">
		<a class="map" target="_blank" href="https://yandex.ru/maps/-/CDVaNMZd"
			>г. Самара, ул. Антонова-Овсеенко 44Б, 7 этаж, офис 704</a
		>
		<a class="telephone" href="tel:88001017987">8-800-101-7987</a>
	</div>

	<div class="fsi">
		<img
			src="img/fsi.png"
			height="137px"
			width="186px"
			alt="Фонд содействия инновациям gooddelo gideone"
		/>
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
			font-size: 30px;
			text-transform: lowercase;
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
</style>
