import { getDocuments, getRsClass, getStaffAndEquipment } from 'app/providers/router';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from 'shared/assets/icons/ArrowRightIcon';
import CheckIcon from 'shared/assets/icons/CheckIcon';
import DocumentsIcon from 'shared/assets/icons/DocumentsIcon';
import EquipmentIcon from 'shared/assets/icons/EquipmentIcon';
import InfoIcon from 'shared/assets/icons/InfoIcon';
import LaserIcon from 'shared/assets/icons/LaserIcon';

export const MainPage = () => {
	useEffect(() => {
		document.title = 'ООО "МГС"';
	}, [])

	return (
		<main className='content'>
			<ul className='grid grid-cols-3 grid-rows-2 gap-8 flex-grow max-tablet:grid-cols-1 max-tablet:gap-x-0'>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2'>
					<p className='flex items-center gap-1'>
						<InfoIcon />
						<h2 className='text-lg text-color-accent font-bold uppercase'>О компании</h2>
					</p>
					<p className='text-base'>
						Наша компания является молодой, динамичной развивающейся организацией, специализирующейся на изготовлении рукавов высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах.
					</p>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col col-span-2 gap-2'>
					<p className='flex items-center gap-1'>
						<DocumentsIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Документы</h2>
					</p>
					<ul className='flex flex-col gap-2'>
						<li className='text-base flex items-center gap-1.5 max-phone:hidden'>
							<CheckIcon />
							<span>
								Свидетельство о типовом одобрении (СТО) на изготовление рукавов высокого давления (РВД) для подачи жидкостей под высоким давлением в судовых системах, выданное
								<Link to={getRsClass()}>
									<span className='font-semibold cursor-pointer hover:text-color-accent transition duration-300 ease-in-out'> РМРС</span>
								</Link>
							</span>
						</li>
						<li className='text-base flex items-center gap-1'>
							<CheckIcon />
							<span>
								Технические условия на изготовление РВД, одобренное
								<Link to={getRsClass()}>
									<span className='font-semibold cursor-pointer hover:text-color-accent transition duration-300 ease-in-out'> РМРС</span>
								</Link>
							</span>
						</li>
						<li className='text-base flex items-center gap-1'>
							<CheckIcon />
							<span>
								Программа испытаний РВД, одобренное
								<Link to={getRsClass()}>
									<span className='font-semibold cursor-pointer hover:text-color-accent transition duration-300 ease-in-out'> РМРС</span>
								</Link>
							</span>
						</li>
						<li className='text-base flex items-center gap-1 max-phone:hidden'>
							<CheckIcon />
							<span>
								Свидетельство о признании
								<Link to={getRsClass()}>
									<span className='font-semibold cursor-pointer hover:text-color-accent transition duration-300 ease-in-out'> РКО </span>
								</Link>
								на изготовление РВД
							</span>
						</li>
						<li className='text-base flex items-center gap-1'>
							<CheckIcon />
							<span>
								Технические условия на изготовление РВД, одобренные
								<Link to={getRsClass()}>
									<span className='font-semibold cursor-pointer hover:text-color-accent transition duration-300 ease-in-out'> РКО</span>
								</Link>
							</span>
						</li>
					</ul>
					<Link to={getDocuments()}>
						<h4 className='cursor-pointer text-color-accent font-medium'>Подробнее</h4>
					</Link>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2'>
					<p className='flex items-center gap-2'>
						<LaserIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Доп. оборудование</h2>
					</p>
					<p className='text-base'>
						Лазерный станок для маркировки муфт и фитингов РВД, а также для проведения гравировочных работ на металле и пластике по заказу клиентов
					</p>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2 col-span-2'>
					<p className='flex items-center gap-1'>
						<EquipmentIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Оборудование</h2>
					</p>
					<h3 className='text-base'>
						Наше оборудование позволяет изготавливать РВД с диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС.
					</h3>
					<Link to={getStaffAndEquipment()}>
						<p className='flex items-center gap-1'>
							<h4 className='cursor-pointer text-color-accent font-medium'>Подробнее</h4>
							<ArrowRightIcon />
						</p>
					</Link>
				</li>
			</ul>
		</main>

	);
};




