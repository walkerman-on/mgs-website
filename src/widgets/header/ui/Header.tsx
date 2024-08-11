import React from 'react';
import { Navigation } from 'widgets/navigation';
import { ReactComponent as Logo } from "shared/assets/img/logo.svg"
import EmailIcon from 'shared/assets/icons/EmailIcon';
import PhoneIcon from 'shared/assets/icons/PhoneIcon';

export const Header = () => {
	return (
		<header className='flex flex-col gap-5 bg-sky'>
			<section className="flex justify-between py-5 px-10 gap-3">
				<div className='flex gap-2.5'>
					<div className="flex flex-col gap-0.5">
						<p className='max-phone:text-center'>
							<h1 className="font-extrabold text-xl max-phone:text-center">ООО «Морские Гидравлические Системы»</h1>
							<h2 className="font-medium">
								353915, Краснодарский край, г.Новороссийск, ул.Пархоменко, д.45
							</h2>
						</p>
						<div className='flex gap-5 max-phone:justify-center'>
							<div className='w-20 h-20'>
								<Logo />
							</div>
							<p className="flex flex-col flex-wrap">
								<p className='flex gap-1 justify-center'>
									<EmailIcon />
									<h3 className="text-color-accent cursor-pointer"> mgsystems@inbox.ru</h3>
								</p>
								<p className='flex flex-col'>
									<p className='flex gap-1'>
										<PhoneIcon />
										<span className="text-color-accent cursor-pointer"> +7 988 668-40-40 </span>
									</p>
									<p className='flex gap-1'>
										<PhoneIcon />
										<span className="text-color-accent cursor-pointer"> +7 918 476-65-60</span>
									</p>
								</p>
							</p>
						</div>

					</div>
				</div>
				<span className='max-w-md text-right max-phone:hidden'>
					Рукава высокого давления для морских и речных судов, портовой техники, кранов, экскаваторов, погрузчиков и другой спец. техники
				</span>
			</section>
			<Navigation />
		</header>
	);
};
