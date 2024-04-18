<script>
	import { inview } from 'svelte-inview';
	let isInView = false;
	export let rootMargin = '-180px'
	export let threshold = 0
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin, threshold }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<slot {isInView} />
</div>
