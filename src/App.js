import Logger from 'js-logger';
import React from 'react';
import './App.css';
import { MyComp } from './components/my-comp';

// eslint-disable-next-line react-hooks/rules-of-hooks
Logger.useDefaults();

const testData = {
	'1':{
		values:'1-10'
	},
	'2':{
		values:'11-20'
	},
	'3':{
		values:'21-30'
	},
	'4':{
		values:'31-40'
	}
};

function App() {
  return (
    <div className="App">
		 <MyComp data={testData} />
    </div>
  );
}

export default App;

