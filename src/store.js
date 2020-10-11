import { writable } from 'svelte/store';

export const showMobileMenu = writable(false);
export const showAlertNotification = writable('');
export const alertMessage = writable('');
export const showSpinner = writable(false);
