import React from 'react';
import { Navigation } from 'widgets/navigation';
import { ReactComponent as Logo } from "shared/assets/img/logo.svg"
import EmailIcon from 'shared/assets/icons/EmailIcon';
import PhoneIcon from 'shared/assets/icons/PhoneIcon';

export const Header = () => {
	return (
		<header className='flex flex-col gap-5 bg-sky'>
			<section className="flex justify-between items-center py-5 px-10 gap-3">
				<div className='flex gap-2.5'>
					<div className='w-20 h-20'>
						<Logo />
					</div>
					<div className="flex flex-col gap-0.5">
						<p>
							<h1 className="font-extrabold text-xl">ООО «Морские Гидравлические Системы»</h1>
							<h2 className="font-medium">
								353915, Краснодарский край, г.Новороссийск, ул.Пархоменко, д.45
							</h2>
						</p>
						<p className="flex flex-col flex-wrap">
							<p className='flex gap-1 items-center'>
								<EmailIcon />
								{/* <h3 className="font-semibold">E-mail:</h3> */}
								<h3 className="text-color-accent cursor-pointer"> mgsystems@inbox.ru</h3>
							</p>
							<p className='flex gap-1 items-center'>
								{/* <h3 className="font-semibold">тел.</h3> */}
								<PhoneIcon />
								<p >
									<span className="text-color-accent cursor-pointer"> +7 988 668-40-40 </span>
									<span className="font-medium">или</span>
									<span className="text-color-accent cursor-pointer"> +7 918 476-65-60</span>
								</p>
							</p>
						</p>
					</div>
				</div>
				<span className='max-w-md text-right'>
					Рукава высокого давления для морских и речных судов, портовой техники, кранов, экскаваторов, погрузчиков и другой спец. техники
				</span>
			</section>
			<Navigation />
		</header>
	);
};
