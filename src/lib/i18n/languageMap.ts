import languageNames from "./languageNames.json";
import i18nConfig from "../../../astro.i18n.config";
export const languageMap = (() => {
	const { supportedLangCodes, defaultLangCode } = i18nConfig;

	let obj = {};
	for (const lang of [...supportedLangCodes, defaultLangCode]) {
		obj[lang] = languageNames[lang];
	}

	return obj;
})();
