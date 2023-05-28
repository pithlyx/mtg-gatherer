import React, { useState } from 'react';

interface MenuItem {
	id: number;
	label: string;
	link: string;
}

interface MenuProps {
	options: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
	return (
		<div className="flex items-center">
			{options.map((option) => (
				<a
					key={option.id}
					href={option.link}
					className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
				>
					{option.label}
				</a>
			))}
		</div>
	);
};

const Navbar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const menuOptions: MenuItem[] = [
		{ id: 1, label: 'Home', link: '#home' },
		{ id: 2, label: 'About', link: '#about' },
		{ id: 3, label: 'Contact', link: '#contact' },
	];

	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center">
					<span className="text-white font-bold text-lg">Magic-Gatherer</span>
				</div>

				{/* Hamburger Menu */}
				<button className="block lg:hidden focus:outline-none" onClick={() => setMenuOpen(!isMenuOpen)}>
					<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{isMenuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>

				{/* Menu */}
				<div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
					<Menu options={menuOptions} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
