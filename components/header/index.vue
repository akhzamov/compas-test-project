<script lang="ts" setup>
import * as yup from 'yup'
const schema = yup.object({
    automobile: yup.string().required('Введите номер автомобиля'),
    region: yup.string().required('Введите регион'),
    testimony: yup.string().required('Введите свидетельство о регистрации ТС'),
})

interface IForm {
    automobile: string
    region: string
    testimony: string
}

const { handleSubmit, defineField, errors } = useForm<IForm>({ validationSchema: schema, })
const [automobile, automobileAttrs] = defineField('automobile')
const [region, regionAttrs] = defineField('region')
const [testimony, testimonyAttrs] = defineField('testimony')


const onSubmit = handleSubmit(async values => {
    console.log('Send');
})

</script>

<template>
    <div class="header__content">
        <div class="container">
            <form class="header__content-form" @submit.prevent="onSubmit">
                <h1 class="header__content-title title-glob_g">
                    Проверьте штрафы и зарегестрируйтесь в 1 клик
                </h1>
                <div class="header__content-form-inputs">
                    <div class="header__content-form-inputs-top">
                        <div class="input-group first">
                            <label class="input-group__label">Номер автомобиля</label>
                            <input v-model="automobile" v-bind="automobileAttrs" class="input-group__input"
                                type="text" />
                            <span class="input-group__span" :class="{ active: errors.automobile }">
                                {{ errors.automobile }}
                            </span>
                        </div>
                        <div class="input-group last">
                            <label class="input-group__label">Регион</label>
                            <input v-model="region" v-bind="regionAttrs" class="input-group__input" type="text" />
                            <span class="input-group__span" :class="{ active: errors.region }">
                                {{ errors.region }}
                            </span>
                        </div>
                    </div>
                    <div class="header-content-form-inputs-bottom">
                        <div class="input-group">
                            <label class="input-group__label">Свидетельство о регистрации ТС</label>
                            <input v-model="testimony" v-bind="testimonyAttrs" class="input-group__input" type="text" />
                            <span class="input-group__span" :class="{ active: errors.testimony }">
                                {{ errors.testimony }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="header__content-form-buttons">
                    <button class="header__content-form-button send" type="submit">
                        Проверить штрафы
                        <img src="~/assets/img/right-icon.svg" alt="">
                    </button>
                    <button class="header__content-form-button watch" type="button">
                        <img src="~/assets/img/youtube-icon.svg" alt="">
                        О Сервисе <span>(1 мин. 20 cек)</span>
                    </button>
                </div>
                <p class="header__content-form-text">
                    Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете
                    оферту
                </p>
            </form>
            <img src="~/assets/img/header-right.png" alt="" class="header__content-img">
        </div>
    </div>
</template>

<style scoped></style>