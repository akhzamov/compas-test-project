<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Crumb {
    title: string;
    path: string;
    name: string | null;
}

defineProps({
    title: {
        type: String,
        default: null
    }
})

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
                    $route.fullPath === crumb.path && title !== null ? title : crumb.title
                    }}</span>
            </NuxtLink>
            <meta property="position" :content="(index + 2).toString()" />
        </li>
    </ol>
</template>

<style scoped>
ol {
    list-style: none;
    margin-top: 20px;
    display: flex;

    @media (max-width:800px) {
        margin-top: 90px;
    }
}

li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
}

li:after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #000;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
}

li:last-child:after {
    content: '';
    display: none;
}

li a {
    color: black;
}

li a.nuxt-link-exact-active.nuxt-link-active {
    color: grey;
}
</style>
