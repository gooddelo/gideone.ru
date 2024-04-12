<script>
	import { inview } from 'svelte-inview';
	let isInView = false;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20px' }}
	on:inview_change={({ detail }) => {
		console.log(detail);
		isInView = detail.inView;
	}}
>
	<div>
		{#if isInView}
			<slot />
		{/if}
	</div>
</div>
