import { Navigation } from 'widgets/navigation';
import { ReactComponent as Logo } from "shared/assets/img/logo.svg"
import { NavLink } from 'react-router-dom';
import { getMain } from 'app/providers/router';
import { SwipeMenu } from 'widgets/swipe-menu';
import { useState } from 'react';
import MenuIcon from 'shared/assets/icons/MenuIcon';
import ArrowLeftIcon from 'shared/assets/icons/ArrowLeftIcon';

export const Header = () => {
	const [menuClosed, setMenuClosed] = useState<boolean>(true)
	const btnClick = () => {
		setMenuClosed(!menuClosed)
	}

	return (
		<header className='flex flex-col bg-sky'>
			<h2 className="font-medium text-color-accent bg-white text-center py-1 max-phone:text-sm">
				353915, Краснодарский край, г. Новороссийск, ул. Пархоменко, д.45
			</h2>
			<section className="flex justify-center items-center">
				<div className="flex flex-col px-10 bg-color-accent max-phone:px-5 flex-1">
					<div className='flex items-center gap-2 justify-between pt-4 max-phone:flex-col max-phone:pb-4'>
						<div className='flex flex-col'>
							<NavLink to={getMain()}>
								<div className='flex items-center gap-3 max-phone:'>
									<div className='w-15 h-14 bg-bg-color rounded-lg py-2 px-1 hover:scale-105 transition duration-300 ease-in-out max-phone:w-16'>
										<Logo />
									</div>
									<div>
										<h1 className='text-xl font-semibold text-bg-color max-phone:text-lg'>Морские Гидравлические Системы</h1>
										<h2 className='text-base text-color-gray font-medium opacity-80'>наша продукция одобрена РМРС и РКО</h2>
									</div>
								</div>
							</NavLink>
						</div>
						<Navigation className="max-phone:hidden max-tablet:hidden max-laptop:hidden" />
					</div>
					<span className='text-center text-3xl font-black px-40 py-5 text-bg-color leading-10 max-phone:hidden max-tablet:text-xl max-tablet:px-5 max-desktop:px-5'>
						Рукава высокого давления для морских и речных судов, кранов, экскаваторов, погрузчиков и другой спец.техники
					</span>
				</div>
				<div className='hidden max-tablet:block cursor-pointer max-laptop:block'>
					<ArrowLeftIcon onClick={btnClick} color='#5085a5' height={30} width={30} />
				</div>
				<SwipeMenu closed={menuClosed} onClick={btnClick} />
			</section>
		</header>
	);
};
