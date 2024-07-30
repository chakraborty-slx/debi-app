
const config = {
    apiKey: "AIzaSyAg4kG********",
    authDomain: "*******.firebaseapp.com",
    projectId: "*******",
    storageBucket: "*******.appspot.com",
    messagingSenderId: "*******",
    appId: "1:13344485322:web:********",
    measurementId: "G-*******"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.ts');
    } else {
        return config;
    }
}
