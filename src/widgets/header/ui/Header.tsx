import React from 'react';
import { Navigation } from 'widgets/navigation';
import Logo from "shared/img/logo.svg"

export const Header = () => {
	return (
		<header className='flex flex-col gap-5 bg-bg-color'>
			<section className="flex justify-between py-5 px-10 gap-3">
				<div className="flex flex-col gap-0.5">
					{/* <img src="shared/img/logo.svg" height={89} width={89} /> */}
					<p>
						<h1 className="font-extrabold text-xl">ООО «Морские Гидравлические Системы»</h1>
						<h2 className="font-medium">
							353915, Краснодарский край, г.Новороссийск, ул.Пархоменко, д.45
						</h2>
					</p>
					<p className="flex flex-wrap gap-1">
						<p className='flex gap-2'>
							<h3 className="font-semibold">E-mail:</h3>
							<h3 className="text-color-accent cursor-pointer"> mgsystems@inbox.ru</h3>
						</p>
						<p className='flex gap-2'>
							<h3 className="font-semibold">тел.</h3>
							<p >
								<span className="text-color-accent cursor-pointer"> +7 988 668-40-40 </span>
								<span className="font-medium">или</span>
								<span className="text-color-accent cursor-pointer"> +7 918 476-65-60</span>
							</p>
						</p>
					</p>
				</div>
				<span className='max-w-md '>
					Рукава высокого давления для морских и речных судов, портовой техники, кранов, экскаваторов, погрузчиков и другой спец. техники
				</span>
			</section>
			<Navigation />
		</header>
	);
};
