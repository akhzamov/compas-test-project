<script lang="ts" setup>
import { serviceData } from './service.data.ts'

</script>

<template>
    <section class="services">
        <div class="container">
            <h2 class="services__title title-glob_s">
                Плюсы использования сервиса «Компас» для анализа штрафов
            </h2>
            <div class="services__list">
                <div class="services__item" v-for="service in serviceData" :key="service.id">
                    <img :src="service.img" alt="" class="services__item-img">
                    <div class="services__item-info">
                        <h3 class="services__item-info-title">{{ service.title }}</h3>
                        <p class="services__item-info-text">{{ service.text }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>