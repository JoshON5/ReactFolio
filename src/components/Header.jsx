import Avatar from '../assets/avatar.jpeg';
export default function Header() {
	return (
		<div>
      <div className="px-3 py-3">
      <img
				className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
				src={Avatar}
				alt='Bordered avatar'
			/>
      </div>

		</div>
	);
}
