import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
interface Card {
	name: string;
	image_uris: {
		small: string;
		normal: string;
		large: string;
	};
}

// Card component
const Card: React.FC<{ card: Card }> = ({ card }) => {
	const { name, image_uris } = card;

	// Check if image_uris is defined and has the normal property
	if (!image_uris || !image_uris.large) {
		// Return null or a placeholder component, or handle the case when the image is not available
		return null;
	}

	return (
		<div className="card">
			<img src={image_uris.large} alt={name} />
			<div className="card-details">
				<h3>{name}</h3>
			</div>
		</div>
	);
};

// Card display component
const CardDisplay: React.FC = () => {
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		// Fetch data from cards.json
		const fetchData = async () => {
			try {
				const response = await fetch('src/Components/CardDisplay/db/cards.json');
				const data = await response.json();
				setCards(data);
			} catch (error) {
				console.error('Error fetching cards:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="w-2/3 bg-gray-200">
			<SearchBar />
			<div className="card-container">
				<div className="grid grid-cols-5 gap-4 overflow-x-auto">
					{cards.map((card, index) => (
						<Card key={index} card={card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CardDisplay;
