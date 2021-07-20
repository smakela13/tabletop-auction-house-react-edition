import React from 'react';
import Faker from 'faker';
import { Button } from 'react-bootstrap';

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
	'Violet',
	'Red',
	'White',
	'Black'
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
		hairColor: useNaturalColors(false, naturalHairColors), 
	};

	return (
		<>
			<div class='copyCatCard' style={{color: '#E8E8E8', alignSelf: 'center', backgroundColor: '#145374', padding: '5px', boxShadow: '0 5px 5px black'}}>
				<h3 style={{marginBottom: '10px'}}>Generate a Random Shopkeeper</h3>
				<p>{`First Name: ${character.firstName}`}</p>
				<p>{`Last Name: ${character.lastName}`}</p>
				<p>{`Hair Color: ${character.hairColor}`}</p>
				<p>{`Eye Color: ${character.eyeColor}`}</p>
				<p>{`Trait: ${traitList[Math.floor(Math.random() * traitList.length)]}`}</p>
				{/* <label>Natural Colors</label><input type='checkbox' onChange={} /> */}
				<Button as='input' type='submit' value='New Shopkeeper' onClick={refreshPage}/>
			</div>
		</>
	);
};

export default Shopkeeper;
