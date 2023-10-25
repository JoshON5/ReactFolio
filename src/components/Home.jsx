import Image from '../assets/995D3CE7-8190-4E5E-AAA2-006B545774DD_1_105_c.jpeg'
export default function Home() {
	return (
		<section id='home'>
			<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
						Hey, I'm Joshua Nichols a full-stack developer
					</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						Utilizing the MERN stack, I'm pursuing developing applications that bring solutions to our modern problems and fit evolving lifestyles.
					</p>
				</div>
				<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
					<img
						src={Image}
						alt='mockup'
					/>
				</div>
			</div>
		</section>
	);
}
