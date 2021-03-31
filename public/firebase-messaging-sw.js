importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

var firebaseConfig = {
	apiKey: 'AIzaSyBcHZc1Rk5CeJDkwwaBOdCzYgdA6V5WK3g',
	authDomain: 'covid19-249f1.firebaseapp.com',
	projectId: 'covid19-249f1',
	storageBucket: 'covid19-249f1.appspot.com',
	messagingSenderId: '636238011730',
	appId: '1:636238011730:web:bf4a0deef86c884c3b6e8b',
	measurementId: 'G-DYYRVR03RS',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: '/android-icon-192x192.png',
	};
	self.registration.showNotification(notificationTitle, notificationOptions);
});
