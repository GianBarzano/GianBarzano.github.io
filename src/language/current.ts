import { english } from "./english";
import { ILanguage } from "./language";
import { portuguese } from "./portuguese";

export function getLanguage(): ILanguage {
	if (navigator.language === 'pt-BR') {
		return portuguese;
	}

	return english;
}