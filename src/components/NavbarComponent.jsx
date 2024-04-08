import React from 'react';
import HeadingComponent from './HeadingComponent';

// logo
import logo from '../assets/logo.png';

// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<div className=''>
			<HeadingComponent />
			<nav className='bg-mainBlue h-[100px]'>
				<div className='container mx-auto flex items-center h-full justify-between'>
					{/* logotip */}
					<img src={logo} alt='logo' />

					{/* search bar */}
					<div className='bg-whiteTextColor rounded-[20px]'>
						<input
							type='text'
							placeholder='Search product'
							className='bg-transparent outline-none px-[25px] py-[17px]'
						/>
						<button className='bg-mainYellow text-whiteTextColor px-[25px] py-[17px] rounded-[20px]'>
							Search
						</button>
					</div>

					{/* links */}
					<div>
						<ul className='flex-center gap-[20px]'>
							<li className='flex-center'>
								<CiUser color='white' size={25} />
								<Link to='/' className='text-whiteTextColor'>
									SignIn
								</Link>
							</li>
							<li className='flex-center gap-[10px]'>
								<div className='flex-center'>
									<CiHeart color='white' size={25} />
									<span className='badge'>0</span>
								</div>
								<Link to={'/'} className='text-whiteTextColor'>
									Favorite
								</Link>
							</li>
							<li className='flex-center gap-[10px]'>
								<div className='flex-center'>
									<CiShoppingCart color='white' size={25} />
									<span className='badge'>0</span>
								</div>
								<Link to={'/cart'} className='text-whiteTextColor'>
									Cart
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavbarComponent;
