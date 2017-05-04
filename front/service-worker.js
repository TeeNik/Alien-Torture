// наименование для нашего хранилища кэша
const CACHE_NAME = 'app_serviceworker_v_1';
// ссылки на кэшируемые файлы
const cacheUrls = [
	'/',
    '/index.html',
	'/static/css/about.css',
	'/static/css/demo.css',
	'/static/css/menu.css',
	'/static/css/rating.css',
	'/static/css/style.css',
	'/static/css/animate-custom.css',
	'/game/',
	'/static/fonts/joystix.otf',
	'/api/login.js',
	'/api/rating.js',
	'/api/signup.js',
	'/api/user.js',
	'/static/main.js',
	'/static/components/about.js',
	'/static/components/baseComponent.js',
	'/static/components/game.js',
	'/static/components/gameMode.js',
	'/static/components/login.js',
	'/static/components/menu.js',
	'/static/components/rating.js',
	'/static/renderedTemplates/aboutTemplate.js',
	'/static/renderedTemplates/gameModeTemplate.js',
	'/static/renderedTemplates/loginTemplate.js',
	'/static/renderedTemplates/menuTemplate.js',
	'/static/renderedTemplates/ratingTemplate.js',


	'/services/manage.js',
	'/services/router.js',
	'/services/siteService.js',

	'/main.js',
];

this.addEventListener('install', function (event) {
	// задержим обработку события
	// если произойдёт ошибка, serviceWorker не установится
	console.log("install");
	event.waitUntil(
		// находим в глобальном хранилище Cache-объект с нашим именем
		// если такого не существует, то он будет создан
		caches.open(CACHE_NAME)
			.then(function (cache) {
				// загружаем в наш cache необходимые файлы
				return cache.addAll(cacheUrls);
			})
	);
});

this.addEventListener('fetch', function (event) {
	// console.log(event);
	event.respondWith(
		// ищем запрашиваемый ресурс в хранилище кэша
		caches.match(event.request).then(function (cachedResponse) {

			// выдаём кэш, если он есть
			if (cachedResponse) {
				return cachedResponse;
			}

			// иначе запрашиваем из сети как обычно
			return fetch(event.request);
		})
	);
});
