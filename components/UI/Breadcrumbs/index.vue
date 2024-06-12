<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Crumb {
    title: string;
    path: string;
    name: string | null;
}

const props = defineProps<{
    title: string | undefined;
}>();

const route = useRoute();
const router = useRouter();

const titleCase = (str: string): string => {
    return str.replace(/\b\S/g, (t) => t.toUpperCase());
};

const crumbs = computed<Crumb[]>(() => {
    const fullPath = route.fullPath;
    const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/');
    const crumbs: Crumb[] = [];
    let path = '';
    params.forEach((param) => {
        path = `${path}/${param}`;
        const match = router.resolve(path);
        if (match.name !== null) {
            crumbs.push({
                title: titleCase(param.replace(/-/g, ' ')),
                path: match.path,
                name: match.name as string,
            });
        }
    });

    return crumbs;
});
</script>

<template>
    <ol vocab="http://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">
            <NuxtLink property="item" typeof="WebPage" to="/">
                <span property="name">Главная</span>
            </NuxtLink>
            <meta property="position" content="1" />
        </li>
        <li v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem">
            <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
                <span property="name">{{
                    $route.fullPath === crumb.path && props.title !== null ? props.title : crumb.title
                }}</span>
            </NuxtLink>
            <meta property="position" :content="(index + 2).toString()" />
        </li>
    </ol>
</template>

<style scoped>
ol {
    list-style: none;
}

li {
    display: inline;
}

li:after {
    content: ' » ';
    display: inline;
    font-size: 0.9em;
    color: #aaa;
    padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
    content: '';
}

li a {
    color: black;
}

li a.nuxt-link-exact-active.nuxt-link-active {
    color: grey;
}
</style>
