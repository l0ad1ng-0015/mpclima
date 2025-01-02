// src/lib/detectIOS.js
export function detectIOS() {
	const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
	if (isIOS) {
		document.documentElement.classList.add('ios');
	}
}
