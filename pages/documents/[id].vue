<script lang="ts" setup>
import { documentsData } from '~/components/documents/documents.data';

const route = useRoute();
const document = ref(documentsData.find(item => item.id == Number(route.params.id))) || {};

// Следим за изменением параметров маршрута и обновляем переменную document
watch(() => route.params.id, (newId) => {
    document.value = documentsData.find(item => item.id == Number(newId));
});



useSeoMeta({
    title: 'Compas | Документы - ' + document.value?.title,
    ogTitle: 'Compas | Документы - ' + document.value?.title,
    description: 'Сайт работает в тестовом режиме',
    ogDescription: 'Сайт работает в тестовом режиме',
})
</script>

<template>
    <section class="document">
        <div class="container">
            <UIBreadcrumbs :title="document?.title" />
            <div class="document__content">
                <h2 class="document__content-title title-glob_g">{{ document?.title }}</h2>
            </div>
        </div>
    </section>
</template>

<style scoped></style>