<script>
	import { myObject } from "./stores";

	let phrase = "Welcome";
</script>

<h2>{phrase} to Electron/Svelte!</h2>

<p>Test is {$myObject.test}</p>

<style lang="scss">
	h2 {
		color: $primary-color;
	}
</style>
