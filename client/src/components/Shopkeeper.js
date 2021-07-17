import React from 'react';
import Faker from 'faker';

const Shopkeeper = () => {
	// const naturalHairColors = {
	// 	40: 'black',
	// 	75: 'brunette',
	// 	95: 'blonde',
	// 	100: 'red',
	// };

	// let number = Math.floor(Math.random() * 100) + 1;

	// for (keys in naturalHairColors) {
	// 	if (number <= keys) {
	// 		return naturalHairColors[keys];
	// 	}
	// }

	// 	generateRandomEyeColor() {
	// 		let naturalEyeColors = {
	// 			60: 'brown',
	// 			93: 'blue',
	// 			95: 'hazel',
	// 			97: 'amber',
	// 			99: 'grey',
	// 			100: 'violet'
	// 		}

	// 		let number = Math.floor(Math.random() * 100) + 1
	// 		let keys

	// 		for (keys in naturalEyeColors) {
	// 			if (number <= keys) {
	// 				return naturalEyeColors[keys]
	// 			}
	// 		}
	// 	}

	const character = {
		firstName: Faker.name.firstName(),
		lastName: Faker.name.lastName(),
		eyeColor: Faker.commerce.color(),
		hairColor: Faker.commerce.color(),
	};

	return (
		<>
			{/* <form onSubmit={this.handleSubmit}>
  <label>Use natural hair color
		<input
			name="naturalHColor"
			type="checkbox"
			checked={this.state.naturalHColor}
			onChange={(e) => this.handleHairInputChange(e)} />
  </label>
	<label>Use natural eye color
		<input
			name="naturalEColor"
			type="checkbox"
			checked={this.state.naturalEColor}
			onChange={(e) => this.handleEyeInputChange(e)} />
	</label>
</form> */}
			<div>
				<h1>Generate Random characters!</h1>
				<p>{`${character.firstName} ${character.lastName}`}</p>
			</div>
		</>
	);
};

export default Shopkeeper;
