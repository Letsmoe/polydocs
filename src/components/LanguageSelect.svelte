<script lang="ts">
	import { languageMap } from "../lib/i18n/languageMap";

	export let language: string;

	console.log(language)

	function switchLanguage() {
		let match = window.location.pathname.match(/\/(.*?)\//);
		if (match && match[1] in languageMap) {
			window.location.href = window.location.pathname.replace(/\/.*?\//, `/${language}/`);
		} else {
			window.location.href = `/${language}${window.location.pathname}`;
		}
	}
</script>

<select bind:value={language} on:change={switchLanguage} class="text-lg rounded-lg border px-3 py-1 outline-none focus:bg-slate-100 hover:bg-slate-50 transition-colors rounded-tl-none rounded-bl-none bg-white">
	{#each Object.entries(languageMap) as [i18n, name]}
		<option value={i18n} selected={i18n == language}>{name}</option>
	{/each}
</select>