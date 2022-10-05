import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isLoggedIn = writable(true);

export const token = writable((browser && localStorage.getItem('token')) ?? undefined);
// token.subscribe((val) => {
// 	if (browser) return localStorage.setItem('token', val);
// });

export const allUser = writable();
export const currentPage = writable('dashboard');
export const allAdmin = writable();
export const allVerification = writable();
export const modal = writable(null);
export const paymetData = writable();
export const accountDataSpec = writable();
export const internalTransfer = writable(null);
export const currentUserData = writable();
