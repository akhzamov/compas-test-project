import { defineStore } from 'pinia'

export const useBreadcrumbsStore = defineStore('breadcrumbs', {
	state: () => ({
		title: 'Не известно',
	}),
	actions: {
		setTitle(newTitle: string) {
			this.title = newTitle
		},
	},
})
