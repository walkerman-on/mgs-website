import { getDocuments, getStaffAndEquipment } from 'app/providers/router';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from 'shared/assets/icons/ArrowRightIcon';
import DocumentsIcon from 'shared/assets/icons/DocumentsIcon';
import EquipmentIcon from 'shared/assets/icons/EquipmentIcon';
import InfoIcon from 'shared/assets/icons/InfoIcon';
import LaserIcon from 'shared/assets/icons/LaserIcon';

export const MainPage = () => {
	useEffect(() => {
		document.title = 'ООО "МГС"';
	}, [])

	return (
		<main className='flex-grow px-10 py-5 flex flex-col'>
			{/* <p className='text-lg'>
				ООО «Морские Гидравлические Системы» является молодой, динамичной развивающейся организацией, специализирующейся на изготовлении рукавов высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах.
			</p> */}
			{/* <p className='text-lg'>
				1.	ООО «Морские Гидравлические Системы» имеет квалифицированный персонал и оборудование, позволяющее изготавливать РВД с диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС.
			</p> */}
			<ul className='grid grid-cols-3 grid-rows-2 gap-8 flex-grow'>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2 hover:bg-sky-300'>
					<p className='flex items-center gap-1'>
						<InfoIcon />
						<h2 className='text-lg text-color-accent font-bold uppercase'>О компании</h2>
					</p>
					<p className='text-base'>
						ООО «Морские Гидравлические Системы» является молодой, динамичной развивающейся организацией, специализирующейся на изготовлении рукавов высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах.
					</p>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2 col-span-2'>
					<p className='flex items-center gap-1'>
						<DocumentsIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Документы</h2>
					</p>
					<p className='flex flex-col gap-2'>
						<h3 className='text-base'>
							ООО «Морские Гидравлические Системы» имеет одобренные Российским Морским Регистром Судоходства технические условия и программу испытаний РВД, на основании которых РМРС выдал Свидетельство о типовом одобрении (СТО) на изготовление рукавов высокого давления оплеточной серии 1SN, 2SN, 1SC, 2SC и навивочной серии 4SH, 4SP для подачи жидкостей под высоким давлением в судовых системах.
						</h3>
						<h3 className='text-base'>
							ООО «Морские Гидравлические Системы» имеет одобренные Российским Классификационным Обществом технические условия, в строгом соответствии с которыми ООО «МГС» изготавливает рукава высокого давления для судов, находящихся под классом РКО.

						</h3>
					</p>
					<Link to={getDocuments()}>
						<h4 className='cursor-pointer text-color-accent font-medium'>Подробнее</h4>
					</Link>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2 hover:bg-sky-300'>
					<p className='flex items-center gap-2'>
						<LaserIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Доп. оборудование</h2>
					</p>
					<p className='text-base'>
						ООО «Морские Гидравлические Системы» имеет в составе специализированного оборудования для производства РВД лазерный станок, позволяющий наносить маркировку любых текстов и пиктограмм на муфты рукавов в соответствии с требованиями РМРС и РКО, а также проводить гравировочные работы на металле и пластике по заказу клиентов
					</p>
				</li>
				<li className='bg-bg-color rounded-lg py-3 px-5 flex flex-col gap-2 col-span-2'>
					<p className='flex items-center gap-1'>
						<EquipmentIcon />
						<h2 className='text-lg font-bold uppercase text-color-accent'>Персонал и оборудование</h2>
					</p>
					<h3 className='text-base'>
						ООО «Морские Гидравлические Системы» имеет квалифицированный персонал и оборудование, позволяющее изготавливать РВД с диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС.
					</h3>
					<Link to={getStaffAndEquipment()}>
						<p className='flex'>
							<h4 className='cursor-pointer text-color-accent font-medium'>Подробнее</h4>
							<ArrowRightIcon />
						</p>
					</Link>
				</li>
			</ul>
		</main>
	);
};
