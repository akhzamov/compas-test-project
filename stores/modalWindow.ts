import { defineStore } from 'pinia'

export const useModalWindowStore = defineStore('modalWindow', {
	state: () => ({
		modalOpen: false,
		successModalActive: false,
		successModalTitle: '',
		successModalText: '',
		successModalButtonText: '',
		errorModalActive: false,
		errorModalTitle: '',
		errorModalText: '',
		errorModalButtonText: '',
		videoModalActive: false,
		videoModalButtonText: '',
	}),
	actions: {},
})
