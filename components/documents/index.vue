<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { documentsData } from './documents.data';
import { useBreadcrumbsStore } from '~/stores/breadcrumbs';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const modules = reactive([Navigation]);
const breakpoints = reactive({
    640: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    650: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    700: {
        slidesPerView: 2,
        spaceBetween: 35,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
    1140: {
        slidesPerView: 3,
        spaceBetween: 35,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 35,
    },
    1440: {
        slidesPerView: 3,
        spaceBetween: 35,
    },
});
</script>

<template>
    <section class="documents">
        <div class="container">
            <h2 class="documents__title title-glob_s">Документы</h2>
            <swiper :breakpoints="breakpoints" :spaceBetween="35" :navigation="true" :modules="modules" :loop="true"
                class="documents__swiper">
                <swiper-slide class="documents__slide" v-for="document in documentsData" :key="document.id">
                    <div class="content">
                        <div class="documents__slide-info">
                            <h3 class="documents__slide-title">
                                {{ document.title }}
                            </h3>
                            <p class="documents__slide-text">
                                {{ document.text }}
                            </p>
                        </div>
                        <NuxtLink class="documents__slide-button" :to="document.link + document.id">
                            Перейти
                        </NuxtLink>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style scoped></style>
