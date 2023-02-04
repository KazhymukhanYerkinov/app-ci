import './App.css';
import { Amplify } from 'aws-amplify';
import awsConf from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConf);

function App({ signOut }) {
  return (
	
	<div className="App">
		Welcome to Amplify App 

		<button onClick={signOut}> Sign Out </button>
	</div>
	
	
  );
}

export default withAuthenticator(App);
