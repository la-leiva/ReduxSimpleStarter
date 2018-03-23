import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDFC5mb8_UehfCITwC-HCdGv_W3ATDKiSM';

YTSearch({key: API_KEY, term: 'polymer'}, function(data) {
	console.log(data);
})

const App = () => {
	return (<div>
		<SearchBar />
	</div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));