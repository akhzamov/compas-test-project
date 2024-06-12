<script lang="ts" setup>
import { documentsData } from '~/components/documents/documents.data';

const route = useRoute();
const document = ref(documentsData.find(item => item.id == Number(route.params.id))) || {};

watch(() => route.params.id, (newId) => {
    document.value = documentsData.find(item => item.id == Number(newId));
});
</script>

<template>
    <UIBreadcrumbs :title="document?.title" />
    <div>Contacts</div>
</template>

<style scoped></style>