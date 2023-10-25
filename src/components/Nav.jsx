import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							to='/'
							className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
						>
							Joshua Nichols Portfolio
						</Link>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<Link 
									to='/about'
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='/aboutme'
								>
									<i className='fas fa-eye text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>
										About Me
									</span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/projects'
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								>
									<i className='fas fa-brain text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>
										Projects
									</span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/contact'
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								>
									<i className='fas fa-hand text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>
										Contact Me
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
