import { InfoCard } from 'entities/info-card';
import React from 'react';

const info__cards = [
	{
		title: "О компании",
		description: [
			{ paragraph: "Наша компания является молодой, динамичной развивающейся организацией, специализирующейся на изготовлении рукавов высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах" }
		],
		id: "Q6ey",
		long: false,
		iconURL: "shared/assets/icons/documents.svg"

		// iconURL: "shared/assets/icons/InfoIcon.tsx"
	},
	{
		title: "Документы",
		description: [
			{ paragraph: "Свидетельство о типовом одобрении (СТО) на изготовление рукавов высокого давления (РВД) для подачи жидкостей под высоким давлением в судовых системах, выданное РМРС" },
			{ paragraph: "Технические условия на изготовление РВД, одобренное РМРС" },
			{ paragraph: "Программа испытаний РВД, одобренное РМРС" },
			{ paragraph: "Свидетельство о признании РКО на изготовление РВД" },
			{ paragraph: "Технические условия на изготовление РВД, одобренные РКО" },
		],
		id: "dD2n",
		long: true,
		iconURL: "shared/assets/icons/documents.svg",
		linkTo: "/documents"
	},
	{
		title: "Доп.оборудование",
		description: [
			{ paragraph: "Лазерный станок для маркировки муфт и фитингов РВД, а также для проведения гравировочных работ на металле и пластике по заказу клиентов" }
		],
		id: "DiJf",
		long: false,
		iconURL: "shared/assets/icons/documents.svg"
		// iconURL: "shared/assets/icons/LaserIcon.tsx"
	},
	{
		title: "Оборудование",
		description: [
			{ paragraph: "Наше оборудование позволяет изготавливать РВД с диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС" }
		],
		id: "7Wwi",
		long: true,
		// iconURL: "shared/assets/icons/EquipmentIcon.tsx"
		iconURL: "shared/assets/icons/documents.svg"
	},

]

export const InfoCards = () => {
	return (
		<ul className='grid grid-cols-3 grid-rows-2 gap-5 flex-grow max-tablet:grid-cols-1 max-tablet:gap-x-0'>
			{
				info__cards?.map(item => (
					<InfoCard
						title={item?.title}
						description={item?.description}
						id={item?.id} long={item?.long}
						iconURL={item?.iconURL}
						linkTo={item?.linkTo}
					/>
				))
			}
		</ul>
	);
};
