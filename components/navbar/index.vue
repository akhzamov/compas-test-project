<script lang="ts" setup>
let menuOpen = ref(false)
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__left">
                <NuxtLink to="/" class="nav__left-logo">
                    <img src="~/assets/img/compas.svg" alt="">
                </NuxtLink>
                <ul class="nav__left-list">
                    <li class="nav__left-item">
                        <NuxtLink to="/fees" class="nav__left-link">
                            Тарифы
                        </NuxtLink>
                    </li>
                    <li class="nav__left-item">
                        <NuxtLink to="/contacts" class="nav__left-link">
                            Контакты
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="nav__right">
                <a href="tel:+74951184422" class="nav__right-link">+7 495 118-44-22</a>
                <button class="nav__right-button login">Вход</button>
                <button class="nav__right-button reg">Регистрация</button>
            </div>
        </div>
    </nav>
    <nav class="nav mobile">
        <div class="container">
            <NuxtLink to="/" class="nav__left-logo">
                <img src="~/assets/img/compas.svg" alt="">
            </NuxtLink>
            <button class="nav__menu-button" @click="menuOpen = true">
                <img src="~/assets/img/menu.svg" alt="">
            </button>
            <div class="nav__menu" :class="{ active: menuOpen }">
                <button class="nav__menu-close" @click="menuOpen = false">>
                    <img src="~/assets/img/close.svg" alt="">
                </button>
                <ul class="nav__top">
                    <li class="nav__left-item">
                        <NuxtLink to="/fees" class="nav__left-link">
                            Тарифы
                        </NuxtLink>
                    </li>
                    <li class="nav__left-item">
                        <NuxtLink to="/contacts" class="nav__left-link">
                            Контакты
                        </NuxtLink>
                    </li>
                </ul>
                <div class="nav__bottom">
                    <a href="tel:+74951184422" class="nav__right-link">+7 495 118-44-22</a>
                    <button class="nav__right-button button none-w">Вход</button>
                    <button class="nav__right-button button send">Регистрация</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>