<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        default: 'Успешно!',
    },
    text: {
        type: String,
        default: 'Все четко сделал братишка! только текст отправь',
    },
    buttonText: {
        type: String,
        default: "Ок"
    }
})

const modalStore = useModalWindowStore()

useHead({
    bodyAttrs: {
        class: computed(() => {
            if (modalStore.successModalActive) return 'modal-window-open'
            return ''
        }),
    },
})


const close = () => {
    modalStore.modalOpen = false
    modalStore.successModalActive = false
    modalStore.successModalTitle = ''
    modalStore.successModalText = ''
    modalStore.successModalButtonText = ''
    location.reload()
}
</script>

<template>
    <div class="modals" @click="close()">
        <div class="success content" @click.stop>
            <img src="~/assets/img/success.svg" alt="">
            <h3 class="content__title success-title">
                {{ modalStore.successModalTitle ?? title }}
            </h3>
            <p class="content__text success-text">
                {{ modalStore.successModalText ?? text }}
            </p>
            <button class="content__button success-button" @click="close()">
                {{ modalStore.successModalButtonText ?? buttonText }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>