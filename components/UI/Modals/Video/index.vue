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
            if (modalStore.videoModalActive) return 'modal-window-open'
            return ''
        }),
    },
})


const close = () => {
    modalStore.modalOpen = false
    modalStore.videoModalActive = false
    modalStore.videoModalButtonText = ''
}
</script>

<template>
    <div class="modals" @click="close()">
        <div class="success content" @click.stop>
            <h3 class="content__title success-title">О сервисе</h3>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/n1Rfi8BzNOY?si=cBbcl1Kl5IB0q2GT&amp;controls=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button class="content__button success-button" @click="close()">
                {{ modalStore.videoModalButtonText ?? buttonText }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>