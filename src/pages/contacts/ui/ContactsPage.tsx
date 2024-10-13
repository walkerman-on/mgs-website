import { fetchContactsImg } from "features/contacts-card";
import { fetchEquipment } from "features/equipment-cards";
import { useEffect, useState } from "react";
import EmailIcon from "shared/assets/icons/EmailIcon";
import PhoneIcon from "shared/assets/icons/PhoneIcon";
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
	useEffect(() => {
		document.title = 'Контакты - ООО "Морские Гидравлические Системы';
	}, [])


	const [equipmentCards, setEquiomentCards] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchContactsImg();
			if (data) {
				setEquiomentCards(data);
			}
		};

		loadInfoCards();
	}, []);

	return (
		<main className='content grid grid-cols-2 gap-6 max-phone:grid-cols-1'>
			<Helmet>
				<meta
					name="description"
					content="Свяжитесь с нами! Здесь вы найдете всю необходимую информацию для связи с нашей компанией. Мы готовы ответить на ваши вопросы и помочь с оформлением заказа на РВД."
				/>
			</Helmet>
			{
				equipmentCards?.map(item => (
					<div className="bg-bg-color rounded-lg py-3 px-3">
						<img src={item?.imgSRC} alt={item?.description} />
					</div>
				))
			}
			<div className="bg-bg-color rounded-lg py-8 px-5 flex flex-col gap-10">
				<div>
					<h2 className="text-xl uppercase font-semibold text-color-accent max-phone:text-lg">Местоположение</h2>
					<p className='flex gap-2 items-center'>
						<span className="font-medium text-xl pt-2 max-phone:text-lg">353915, Краснодарский край, г. Новороссийск, ул. Пархоменко, д.45</span>
					</p>
				</div>
				<div>
					<h2 className="text-xl uppercase font-semibold text-color-accent max-phone:text-lg">Контакты</h2>
					<p className='flex flex-col text-xl pt-2 gap-1'>
						<p className='flex gap-2 items-center'>
							<EmailIcon />
							<a href="mailto:mgsystems@inbox.ru" className="font-medium cursor-pointer hover:text-color-accent transition duration-300 ease-in-out max-phone:text-lg">mgsystems@inbox.ru</a>
						</p>
						<p className='flex gap-2 items-center'>
							<PhoneIcon />
							<a href="tel:+79886684040" className="font-medium cursor-pointer hover:text-color-accent transition duration-300 ease-in-out max-phone:text-lg"> +7 988 668-40-40 </a>
						</p>
						<p className='flex gap-2 items-center'>
							<PhoneIcon />
							<a href="tel:+79184766560" className="font-medium cursor-pointer hover:text-color-accent transition duration-300 ease-in-out max-phone:text-lg"> +7 918 476-65-60</a>
						</p>
					</p>
				</div>
			</div>
		</main>
	);
};

export default ContactsPage;