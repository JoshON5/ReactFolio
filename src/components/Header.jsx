import Avatar from '../assets/avatar.jpeg';
import Background from '../assets/sunrise.jpeg'
export default function Header() {
	return (
		<header>
      <div style={{ backgroundImage: `url(${Background})`, height: '150px', backgroundPosition: '50% 50%', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}} className="px-3 py-3 ">
      <img
				className='w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
				src={Avatar}
				alt='Bordered avatar'
			/>
      </div>

		</header>
	);
}
