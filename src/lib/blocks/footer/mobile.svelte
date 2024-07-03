<footer>
	<div class="fsi">
		<a
			href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2023668234&TypeFile=html"
			target="_blank"
		>
			ЗАПАТЕНТОВАННАЯ ТЕХНОЛОГИЯ
		</a>
	</div>

	<div class="middle">
		<a href="https://gooddelo.com" target="_blank">
			<div class="company">
				<img src="img/gooddelo.svg" height="64px" width="64px" alt="gooddelo gideone" />
				<div>
					<p>ПРОЕКТ КОМПАНИИ</p>
					<h3>Gooddelo</h3>
				</div>
			</div>
		</a>
		<a href="https://fasie.ru/press/fund/arch2022-results/">
			<img
				src="img/fsi.png"
				height="105px"
				width="115px"
				alt="Фонд содействия инновациям gooddelo gideone"
			/>
		</a>
	</div>

	<div class="bot">
		<a class="map" target="_blank" href="https://yandex.ru/maps/-/CDVaNMZd"
			>г. Самара, ул. Антонова-Овсеенко 44Б, 7 этаж, офис 704</a
		>
		<a class="telephone" href="tel:88001017987">8-800-101-7987</a>
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
			font-family: 'Unbounded', sans-serif;
			font-weight: 500;
			font-size: 20px;
			text-transform: lowercase;
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
</style>
