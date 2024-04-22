<script>
	import {
		Chat,
		Header,
		Home,
		Mission,
		Contact,
		Uniqueness,
		Subscription,
		Features,
		Footer,
		MobFooter
	} from '$lib/blocks';

	let innerWidth
</script>

<svelte:window bind:innerWidth />

<Header />
<Home />
<Chat />
<Features />
<Subscription />
<Uniqueness />
<Mission />
<Contact />
{#if innerWidth > 1050}
	<Footer />
{:else}
	<MobFooter />
{/if}
