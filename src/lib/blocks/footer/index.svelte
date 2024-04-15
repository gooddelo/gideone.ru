<footer>
	<div class="company">
		<img src="img/gooddelo.svg" height="64px" width="64px" alt="gooddelo gideone" />
		<div>
			<p>ПРОЕКТ КОМПАНИИ</p>
			<h3>Gooddelo</h3>
			<span>Russia, Samara</span>
		</div>
	</div>
	<a class="telephone" href="tel:88001017987">8-800-101-7987</a>
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
		background: #8d83ff;
	}

	.telephone {
		font-family: "Unbounded", sans-serif;
		font-weight: 500;
		font-size: 30px;
		text-transform: lowercase;
		color: #fff;
	}

	.company {
		display: flex;
		gap: 10px;
		color: #fff;
		min-width: 300px;

		p {
			font-weight: 700;
			font-size: 20px;
			line-height: 90%;
		}
		h3 {
			font-weight: 600;
			font-size: 25px;
			line-height: 72%;
		}
		span {
			font-weight: 600;
			font-size: 20px;
			line-height: 90%;
		}
	}
	.fsi {
		min-width: 300px;
		display: flex;
		justify-content: center;
	}
</style>
