import React from 'react';
import Faker from 'faker';
import { Button, Card } from 'react-bootstrap';

const traitList = [
	'Athletic',
	'Bald',
	'Balding',
	'Flirty',
	'Sweet',
	'Tall',
	'Friendly',
	'Attractive',
	'Chubby',
	'Cute',
	'Dapper',
	'Dazzling',
	'Elegant',
	'Fancy',
	'Glamorous',
	'Gaunt',
	'Gloomy',
	'Handsome',
	'Angry',
	'Jazzy',
	'Looming',
	'Macho',
	'Mature',
	'Moody',
	'Neat',
	'Nifty',
	'Pompous',
];

const naturalHairColors = [
	'Black',
	'Blonde',
	'Brown',
	'Red',
	'Grey',
	'White',
];

const naturalEyeColors = [
	'Blue',
	'Brown',
	'Green',
	'Hazel',
	'Grey',
	'Grey-Blue',
	'Grey-Green',
	'Amber',
	'Violet'
];

const Shopkeeper = () => {

	function refreshPage() {
		window.location.reload(false);
	}

	function useNaturalColors(naturalColors, colorArray) {
		if (naturalColors) {
			return colorArray[Math.floor(Math.random() * colorArray.length)]
		}
		return Faker.commerce.color().split(" ")
			.map(e => {return e.charAt(0).toUpperCase() + e.slice(1)}).join(" ");
	}

	const character = {
		firstName: Faker.name.firstName(),
		lastName: Faker.name.lastName(),
		eyeColor: useNaturalColors(true, naturalEyeColors),
		hairColor: useNaturalColors(true, naturalHairColors), 
	};

	return (
		<>
			<Card style={{color: '#000', width: '40em', alignSelf: 'center', backgroundColor: '#758084', padding: '5px'}}>
				<h3>Generate a Random Shopkeeper!</h3>
				<p>{`First Name: ${character.firstName}`}</p>
				<p>{`Last Name: ${character.lastName}`}</p>
				<p>{`Hair Color: ${character.hairColor}`}</p>
				<p>{`Eye Color: ${character.eyeColor}`}</p>
				<p>{`Trait: ${traitList[Math.floor(Math.random() * traitList.length)]}`}</p>
				{/* <label>Natural Colors</label><input type='checkbox' onChange={} /> */}
				<Button as='input' type='submit' value='New Shopkeeper' onClick={refreshPage}/>
			</Card>
		</>
	);
};

export default Shopkeeper;
