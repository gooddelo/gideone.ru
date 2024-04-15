<script>
	import { inview } from 'svelte-inview';
	let isInView = false;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-180px' }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<slot {isInView} />
</div>
