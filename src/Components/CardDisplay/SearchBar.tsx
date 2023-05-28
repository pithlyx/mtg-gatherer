import React, { ChangeEvent } from 'react';

interface SearchBarState {
	searchQuery: string;
	keywords: string[];
}

class SearchBar extends React.Component<{}, SearchBarState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			searchQuery: '',
			keywords: [],
		};
	}

	handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ searchQuery: event.target.value });
	};

	handleAddKeyword = () => {
		const { searchQuery, keywords } = this.state;
		if (searchQuery.trim() !== '' && !keywords.includes(searchQuery)) {
			this.setState((prevState) => ({
				searchQuery: '',
				keywords: [...prevState.keywords, prevState.searchQuery],
			}));
		}
	};

	handleRemoveKeyword = (keyword: string) => {
		this.setState((prevState) => ({
			keywords: prevState.keywords.filter((kw) => kw !== keyword),
		}));
	};

	render() {
		const { searchQuery, keywords } = this.state;

		// List of MTG keywords
		const mtgKeywords = [
			'Flying',
			'Trample',
			'First Strike',
			'Double Strike',
			'Haste',
			'Vigilance',
			'Deathtouch',
			'Lifelink',
			'Menace',
			'Reach',
			'Hexproof',
			'Indestructible',
			'Flash',
			'Defender',
			'Enchant',
			'Equip',
		];

		return (
			<div className="flex">
				<input
					type="text"
					value={searchQuery}
					onChange={this.handleInputChange}
					placeholder="Search..."
					className="px-4 py-2 rounded-l-full bg-gray-700 text-white focus:outline-none focus:bg-gray-900 focus:border-gray-700"
				/>
				<div className="flex-grow bg-gray-700 p-2 overflow-x-auto">
					<div className="flex">
						{keywords.map((keyword) => (
							<div
								key={keyword}
								className="inline-flex items-center bg-gray-300 text-gray-800 px-3 py-1 rounded-full mr-2 mt-1 whitespace-nowrap"
							>
								{keyword}
							</div>
						))}
						{mtgKeywords.map((keyword) => (
							<div
								key={keyword}
								className={`inline-flex items-center bg-gray-300 text-gray-800 px-3 py-1 rounded-full mr-2 mt-1 ${
									keywords.includes(keyword) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
								} whitespace-nowrap`}
								onClick={() => this.handleAddKeyword(keyword)}
							>
								{keyword}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
