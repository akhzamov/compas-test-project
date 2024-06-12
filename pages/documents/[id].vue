<script lang="ts" setup>
import { documentsData } from '~/components/documents/documents.data';

const route = useRoute();
const document = ref(documentsData.find(item => item.id == Number(route.params.id))) || {};

// Следим за изменением параметров маршрута и обновляем переменную document
watch(() => route.params.id, (newId) => {
    document.value = documentsData.find(item => item.id == Number(newId));
});
</script>

<template>
    <UIBreadcrumbs :title="document?.title" />
    {{ document?.title }}
</template>

<style scoped></style>