import React from 'react';
import Faker from 'faker';

const Shopkeeper = () => {
	const character = {
		firstName: Faker.name.firstName(),
		lastName: Faker.name.lastName(),
		eyeColor: Faker.commerce.color(),
		hairColor: Faker.commerce.color(),
	};

	return (
		<>
			<div>
				<h1>Generate Random characters!</h1>
				<p>{`${character.firstName} ${character.lastName}`}</p>
			</div>
		</>
	);
};

export default Shopkeeper;
