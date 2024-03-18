import { phoneFormat } from '@/js/utils/numbers.format';
// Адрес для JSON
export const BASE_URL = 'https://alexsab-ru.github.io/astro-json/';
// URL сайта по умолчанию
export const SITE_URL = 'geely-partner-vostok.ru';
// Название сайта по умолчанию
export const SITE_NAME = 'Джили Партнер-Восток';
// Юр лицо
export const LEGAL_ENTITY = 'ООО "ПАРТНЕР-ВОСТОК"';
// ИНН
export const LEGAL_INN = '5614088704';
// Город
export const LEGAL_CITY = 'г. Орск';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Орске';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилерский центр Geely в Орске';
// Имя пользователя в Телегам
export const TELEGRAM = '';
// Телефон по умолчанию
export const PHONE = '+7 (3537) 22-33-55';

export const BRAND = 'Geely';

export const LINKS_MENU = [
	{url: 'cars/', name: 'Авто в наличии'},
	{url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];

export const HEADER_TOP_LINE = '';

export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a class="whitespace-nowrap" href="tel:' + phoneFormat(PHONE) + '">' + PHONE + '</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
