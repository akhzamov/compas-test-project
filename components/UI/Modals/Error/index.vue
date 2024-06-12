<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        default: 'Ошибка!',
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
            if (modalStore.errorModalActive) return 'modal-window-open'
            return ''
        }),
    },
})


const close = () => {
    modalStore.modalOpen = false
    modalStore.errorModalActive = false
    modalStore.errorModalTitle = ''
    modalStore.errorModalText = ''
    modalStore.errorModalButtonText = ''
    location.reload()
}
</script>

<template>
    <div class="modals" @click="close()">
        <div class="error content" @click.stop>
            <img src="~/assets/img/error.svg" alt="">
            <h3 class="content__title error-title">
                {{ modalStore.errorModalTitle ?? title }}
            </h3>
            <p class="content__text error-text">
                {{ modalStore.errorModalText ?? text }}
            </p>
            <button class="content__button error-button" @click="close()">
                {{ modalStore.errorModalButtonText ?? buttonText }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>