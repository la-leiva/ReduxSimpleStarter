import React, {Component} from 'react';

const SearchBar = props => {
	
	const onInputChange = term => {
		props.onSearchTermChange(term);
	};

	return (
		<div className="search-bar">
			<input
			onChange={event => onInputChange(event.target.value)} />
		</div>
	);
}

export default SearchBar;
