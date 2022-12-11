<script>
	const layers = [0, 1, 2, 3];

	let y;
</script>

<svelte:window bind:scrollY={y}/>

<div class="parallax-container">
	{#each layers as layer, index}
		<img
			style="transform: translate(0,{-y * layer / (layers.length)}px); z-index: {index}"
			src="/parallax/P{layer}.png"
			alt="parallax layer {layer}"
		>
	{/each}
</div>
<div class="text">
	<span style="opacity: {1 - Math.max(0, y / 40)}">
		scroll down
	</span>

	<div class="foreground">
		
	</div>
</div>

<style>
	.parallax-container {
		position: fixed;
		width: 2400px;
		height: 712px;
		left: 50%;
		transform: translate(-50%,0);
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}

	.text {
		position: relative;
		width: 100%;
		height: 200vh;
		color: rgb(231, 154, 154);
		text-align: center;
		padding: 2em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}

	.foreground {
		position: absolute;
		top: 1500px;
		left: 0;
		width: 100%;
		height: calc(100% - 500px);
		background-color: rgb(255, 255, 255);
		color: white;
		padding: 50vh 0 0 0;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(255, 255, 255);
	}
</style>