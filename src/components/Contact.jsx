import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'name') {
			setFullName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setErrorMessage('Email is invalid');
			return;
		}
        if (!message) {
            setErrorMessage("A message is required! Don't be shy speak your mind")
            return;
        }

		setFullName('');
		setEmail('');
		setMessage('');
		setErrorMessage('');
	};

	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
			<div className='w-full bg-white rounded-lg shadow dark:border sm:max-w-md mx-auto my-auto lg:max-w-screen-lg xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
						Contact Form
					</h1>
					<form
						className='form space-y-4 md:space-y-6'
						onSubmit={handleFormSubmit}
					>
						<label className='block mb-2 text-sm font-medium text-gray-900'>
							Name:
							<input
								value={fullName}
								type='text'
								name='name'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5'
								onChange={handleInputChange}
							/>
						</label>
						<label className='block mb-2 text-sm font-medium text-gray-900'>
							Email:
							<input
								type='email'
								name='email'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5'
								value={email}
								onChange={handleInputChange}
							/>
						</label>
						<label className='block mb-2 text-sm font-medium text-gray-900'>
							Message:
							<textarea
								name='message'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5'
								value={message}
								onChange={handleInputChange}
							/>
						</label>
						<button
							className='w-full text-white bg-green-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							type='submit'
						>
							Contact Me
						</button>
					</form>
					{errorMessage && (
						<div>
							<p className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
								{errorMessage}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
