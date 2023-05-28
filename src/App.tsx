import CardDisplay from './Components/CardDisplay/CardDisplay';
import DeckList from './Components/DeckList/DeckList';
import Navbar from './Components/Navbar';

export default function App() {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<CardDisplay />
				<DeckList />
			</div>
		</div>
	);
}
