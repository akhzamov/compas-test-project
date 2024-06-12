<script setup>
const modalStore = useModalWindowStore()
</script>

<template>
    <Navbar />
    <UIModalsSuccess v-if="modalStore.modalOpen && modalStore.successModalActive" />
    <UIModalsError v-if="modalStore.modalOpen && modalStore.errorModalActive" />
    <UIModalsVideo v-if="modalStore.modalOpen && modalStore.videoModalActive" />
    <slot />
</template>

<style scoped></style>
