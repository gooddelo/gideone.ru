<script>
	import { Dashbords, Analytic, ThisIsGideone, Ratings, Advantages } from './slides';
	import Splide from '@splidejs/splide';
	import { onMount } from 'svelte';
	import Animator from '$lib/utils/animator.svelte';

	let slider;
	let section

	onMount(() => {
		slider = new Splide('.splide', {
			type: 'loop',
			arrows: false
		}).mount();
		slider.on('move', () => {
			section.scrollIntoView();
		});
	});
</script>

<section id="dashbords" bind:this={section}>
	<section class="splide" aria-labelledby="carousel-heading">
		<Animator let:isInView threshold=0.8 rootMargin="0px">
			<div class="splide__track" class:isInView>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
				<ul
					role="button"
					class="splide__list"
					on:click={() => {
						slider.go('>');
					}}
				>
					<li class="splide__slide"><Dashbords /></li>
					<li class="splide__slide"><Analytic /></li>
					<!-- <li class="splide__slide"><ThisIsGideone /></li> -->
					<li class="splide__slide"><Ratings /></li>
					<li class="splide__slide"><Advantages /></li>
				</ul>
			</div>
		</Animator>
		<ul class="splide__pagination"></ul>
	</section>
</section>

<style lang="scss">
	#dashbords {
		margin-top: 170px;

		@media (width <= 768px) {
			margin-top: 90px;
		}
	}
	.splide {
		cursor: grab;
	}
	.isInView {
		animation: hint ease 0.8s forwards;

		@keyframes hint {
			0% {
				transform: translate(0px);
			}
			50% {
				transform: translate(-50px);
				
			}
			100% {
				transform: translate(0px);
			}
		}
	}
</style>
