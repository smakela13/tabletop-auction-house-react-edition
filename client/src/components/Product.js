import React from 'react';

const Product = () => {
	return (
		<>
			<div class='flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8'>
				<form
					id='product-form'
					class='border-2 border-blue-600 rounded-lg shadow-md'>
					<div class='flex flex-col bg-gray-100 p-10 rounded-lg shadow space-y-6'>
						<h1 class='font-bold text-xl text-center'>Add an Item</h1>

						<div class='flex flex-col space-y-1'>
							<input
								type='text'
								class='border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow'
								placeholder='Item Name'
								id='item-name'
							/>
						</div>
						<div class='flex flex-col space-y-1'>
							<input
								type='text'
								class='border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow'
								placeholder='Price'
								id='item-price'
							/>
						</div>
						<div class='flex flex-col space-y-1'>
							<input
								type='text'
								class='border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow'
								placeholder='Quantity'
								id='item-quantity'
							/>
						</div>
						<div class='flex flex-col space-y-1'>
							<select
								id='item-category'
								class='border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow'>
								<option value='' disabled selected hidden>
									Category
								</option>
								<option value='1'>Weapons</option>
								<option value='2'>Armor</option>
								<option value='3'>Utility</option>
								<option value='4'>Technology</option>
								<option value='5'>Companions</option>
								<option value='6'>Droids</option>
								<option value='7'>Magic Items</option>
								<option value='8'>Vehicles</option>
								<option value='9'>Mounts</option>
							</select>
						</div>

						<input
							type='submit'
							value='Save Item'
							id='saveItem-button'
							class='border-2 bg-gray-100 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200'
						/>
						<br />
					</div>
				</form>
			</div>
		</>
	);
};

export default Product;
