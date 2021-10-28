import i18next from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		detection: {
			order: ['queryString', 'cookie'],
			caches: ['cookie'],
		},
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			backends: [LocalStorageBackend, HttpApi],
			backendOptions: [
				{
					// prefix for stored languages
					prefix: 'i18next_res_',

					// expiration
					expirationTime: 7 * 24 * 60 * 60 * 1000,

					// Version applied to all languages, can be overriden using the option `versions`
					defaultVersion: '',

					// language versions
					versions: {},

					// can be either window.localStorage or window.sessionStorage. Default: window.localStorage
					store: typeof window !== 'undefined' ? window.localStorage : null,
				},
				{
					loadPath: '/locales/{{lng}}/{{ns}}.json',
				},
			],
		},
	});

export default i18next;
