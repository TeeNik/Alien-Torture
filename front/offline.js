(function (window) {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js')
			.then(function (registration) {
				console.log('ServiceWorker registration', registration);
			})
			.catch(function (err) {
				console.error(err);
			});
	}
})(window);