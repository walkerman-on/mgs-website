import { Navigation } from 'widgets/navigation';
import { ReactComponent as Logo } from "shared/assets/img/logo.svg"
import { NavLink } from 'react-router-dom';
import { getMain } from 'app/providers/router';

export const Header = () => {
	return (
		<header className='flex flex-col bg-sky'>
			<h2 className="font-medium text-color-accent bg-white text-center py-1">
				353915, Краснодарский край, г. Новороссийск, ул. Пархоменко, д.45
			</h2>
			<section className="flex flex-col px-10 bg-color-accent">
				<div className='flex items-center gap-2 justify-between pt-4'>
					<div className='flex flex-col'>
						<NavLink to={getMain()}>
							<div className='flex items-center gap-3'>
								<div className='w-15 h-14 bg-bg-color rounded-lg py-2 px-1 hover:scale-105 transition duration-300 ease-in-out'>
									<Logo />
								</div>
								<div>
									<h1 className='text-xl font-semibold text-bg-color'>Морские Гидравлические Системы</h1>
									<h2 className='text-base text-color-gray font-medium opacity-80'>имеем сертификаты РКО и РМРС</h2>
								</div>
							</div>
						</NavLink>
					</div>
					<Navigation />
				</div>
				<span className='text-center text-3xl font-black px-40 py-5 text-bg-color leading-10'>
					Рукава высокого давления для морских и речных судов, портовой техники, кранов, экскаваторов, погрузчиков и другой спец. техники
				</span>
			</section>
		</header>
	);
};
