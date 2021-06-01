import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation();
	const changeLanguage = language => {
		i18n.changeLanguage(language);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<button onClick={() => changeLanguage('en')}>EN</button>
				<button onClick={() => changeLanguage('nl')}>NL</button>
				<div>
					<p>
						With <code>{'<Trans>'}</code> component:
					</p>
					<Trans i18nKey='LOGIN_ERROR_NOTCORRECT'>
						<p>De combinatie gebruikersnaam en wachtwoord is niet juist</p>
					</Trans>
				</div>
				<div>
					<p>
						With <code>{'useTranslation()'}</code> hook:
					</p>
					<p>{t('LOGIN_ERROR_NOTCORRECT')}</p>
				</div>
			</header>
		</div>
	);
}

export default App;
