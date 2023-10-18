<script>
	import doom from "$lib/doom.js";
	import evade from "$lib/evade.js";

	let isBurning = false;
</script>

<svelte:body style:background-color="red" />

<header class:shake={isBurning}>
  <img alt="Super Deployer 3000" src="/logo.gif" />
</header>

<main>
  <button class="prod" on:click={() => (isBurning = true)}>
    Deploy to prod
  </button>
  <button class="test" use:evade>Deploy to test</button>
</main>

<div class="fire" use:doom={isBurning} />


<style>
  header {
    display: flex;
    justify-content: center;
    margin-block: 2rem;
  }

  header > img {
    max-width: 100%;
  }

  main {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

	button {
		font-family: monospace;
		border-bottom: 6px inset rgba(0, 0, 0, 0.5);
		border-left: 6px inset rgba(0, 0, 0, 0.5);
		border-right: 6px inset rgba(255, 255, 255, 0.5);
		border-top: 6px inset rgba(255, 255, 255, 0.5);
		box-sizing: border-box;
		color: white;
		cursor: pointer;
		display: inline-block;
		font-size: 1.5rem;
		padding: 0.5rem;
		text-transform: uppercase;
		width: auto;
		outline: none;
	}

	button.test {
		background: #0b8728;
    position: relative;
	}

	button.test:focus,
	button.test:hover {
		background: #369d4e;
	}

	button.prod {
		background: #c22419;
	}

	button.prod:focus,
	button.prod:hover {
		background: #d5483f;
	}

	.fire {
		position: fixed;
		inset: 0;
		z-index: -1;
    background-color: black;
	}

	.shake {
		animation: shake 0.5s;
		animation-iteration-count: infinite;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
</style>
