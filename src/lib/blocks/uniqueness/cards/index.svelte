<script>
	import { _ } from '$lib/i18n';
</script>

<ul class="cards">
	<li>
		<img src="img/coin.svg" alt="как увеличить средний чек" />
		<p>{$_('uniqueness.cards.averageCheck')}</p>
	</li>
	<li class="opposite">
		<p>{$_('uniqueness.cards.satisfiedCustomers')}</p>
		<img src="img/stars.svg" alt="как поднять качество обслуживания" />
	</li>
	<li>
		<img src="img/chart.svg" height="210px" alt="как снизить текучку кадров" />
		<p>{$_('uniqueness.cards.staffTurnover')}</p>
	</li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		justify-content: space-around;
		margin-top: 30px;
		flex-wrap: wrap;
		gap: 20px;

		margin-bottom: 30px;
	}

	li {
		display: flex;
		border-radius: 40px 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #212745;
		padding: 40px 40px;
		min-height: 438px;
		aspect-ratio: 1/1;
		&::after {
			display: block;
			content: '';
			position: absolute;
			background: url('/img/star.svg') no-repeat;
			background-size: contain;
			width: 360px;
			height: 360px;
			z-index: 0;
		}

		@media (width <= 768px) {
			aspect-ratio: auto;
			padding: 16px;
		}
	}

	.opposite {
		img {
			top: auto;
			bottom: 50px;
		}
		p {
			margin-top: 0;
			margin-bottom: 130px;
		}
	}
	img {
		position: absolute;
		top: 20px;
		aspect-ratio: 1/1;
		z-index: 2;
	}
	p {
		line-height: 120%;
		margin-top: 130px;
		font-weight: 500;
		font-size: 28px;
		text-transform: uppercase;
		text-align: center;
		color: #fff;
		max-width: 360px;
		z-index: 2;
	}
</style>
