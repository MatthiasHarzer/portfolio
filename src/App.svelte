<script lang="ts">
	import {rainbow} from "./store";

	const links = [
		{
			name: "Github",
			url: "https://github.com/MatthiasHarzer",
			icon: "../imgs/github.png?v=0",

		},
		{
			name: "Twitter",
			url: "https://twitter.com/MatthiasHarzer",
			icon: "../imgs/twitter.png",

		}
	]

	$: formattedRainbow = `rgba(${$rainbow.join()}, 0.8)`;

</script>

<main>
	<div class="main">
		<div class="header">

		<h1 style="--color: {formattedRainbow};">Matthias Harzer</h1>
		</div>


		<div class="footer">
			{#each links as link}
				<a class="material item" href="{link.url}" title="{link.name}" target="_blank">
					<img src="{link.icon}" alt="{link.name}">
				</a>

			{/each}
		</div>
	</div>
</main>

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
	}
	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		color: white;

	}
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		width: 100%;
		height: 100%;

		background: rgb(25,25,25);
		background: linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(84,84,84,1) 35%, rgb(66, 65, 65) 100%);
	}
	h1 {
		font-size: 10vw;
		color: white;
        margin: 0;
		text-align: center;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		text-shadow: 2px 1px 10px var(--color);
	}
	h1::selection{
		background: var(--color);
		color: white;

	}

	.footer{
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}
	.footer img{
		width: 30px;
		height: 30px;
		margin: 2px;
	}
	.footer .item{
		margin: 0 10px;
	}

	.footer .item:hover img{
		/*background-color: ;*/
	}




</style>
