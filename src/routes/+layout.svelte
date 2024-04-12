<script>
	import '../app.scss';
</script>

<div class="root_layout">
	<slot/>
</div>

<style lang="scss">
	.root_layout {
		min-width: 100%;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
