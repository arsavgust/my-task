<template>
    <div class="delivery-container">
        <h1>Выберите способ доставки</h1>
        <CollapseComponent name-panel="panel" @change="changeOpenedPanel($event)">
            <template v-slot:panel>
                <Panel name="delivery" class="panel">
                    Доставка
                    <div slot="content">
                        <div class="input-container">
                            <InputComponent v-model="fio" placeholder="Только кириллица" label="ФИО"></InputComponent><!--:pattern="fioRegexp"-->
                        </div>
                        <div class="input-container">
                            <InputComponent v-model="phoneNumber" placeholder="+7 (___) ___-__-__" label="Телефон" mask="+7 (###) ###-##-##"></InputComponent>
                        </div>
                        <div class="input-container">
                            <InputComponent v-model="address" placeholder="Город, улица, дом" label="Адрес доставки"></InputComponent>
                        </div>
                        <div class="input-container">
                            <InputComponent v-model="comment" label="Комментарий" type="textarea"></InputComponent>
                        </div>
                        <div class="input-container">
                            <ButtonComponent>
                                Отправить
                            </ButtonComponent>
                        </div>
                    </div>
                </Panel>
                <Panel name="self-delivery" class="panel">
                    Самовывоз
                    <div slot="content">
                        <div class="input-container">
                            <RadioGroupComponent v-model="currentDeliverySelf" :radio-list="radioList"></RadioGroupComponent>
                        </div>
                        <div class="input-container">
                            <yandex-map :coords="centerMap" :zoom="11" :controls="['zoomControl']" :scroll-zoom="false">
                                <ymap-marker
                                    v-for="coords in labelCoordinates"
                                    :key="coords.join('')"
                                    :coords="coords"
                                    :marker-id="coords.join('')"
                                    :icon="markerIcon"
                                ></ymap-marker>
                            </yandex-map>
                        </div>
                        <div class="input-container">
                            <ButtonComponent>
                                Отправить
                            </ButtonComponent>
                        </div>
                    </div>
                </Panel>
            </template>
        </CollapseComponent>
    </div>
</template>

<script>
import CollapseComponent from "@/components/CollapseComponent";
import InputComponent from "@/components/InputComponent";
import RadioGroupComponent from "@/components/RadioGroupComponent";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import ButtonComponent from "@/components/ButtonComponent";

export default {
    name: 'DeliveryPage',
    components: {
      ButtonComponent,
        yandexMap,
        ymapMarker,
        RadioGroupComponent,
        CollapseComponent,
        InputComponent,
    },
    props: {
        msg: String,
    },
    data () {
        return {
            fio: 'Азизов',
            phoneNumber: '',
            address: '',
            comment: '',
            currentDeliverySelf: '',
            radioList: [
                {
                    id: '0',
                    title: 'Пункт Выдачи заказов Песчаная улица, дом 13',
                },
                {
                    id: '1',
                    title: 'Пункт Выдачи заказов Подсосенский переулок, 11 ',
                },
            ],
            labelCoordinates: [
                [55.801131568944264,37.508166499999994],
                [55.7575560689813,37.65159149999997],
            ],
            centerMap: [55.759627644055755,37.6169983335471],
            markerIcon: {
                layout: 'default#image',
                imageHref: 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAsCAMAAAAzZkq9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABHVBMVEUCbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8Cbp8WeaeHutHS5e74+/zQ5O2DuNBUnb7w9vn////x9/r+/v8XeqcYe6f5/P3z+PrR5e5Vnr/y+PrT5u76/P30+fvO4+2EuNArOy5EAAAAR3RSTlMADFiZyen4JZz2CYr60zPqJArUjY4n+6AP91ydy+z15d+8vYdKB/LxpT9AAdXWYgbhZAMESa8f8yBvAsUiXagR3jFhlJUFz9MGofcAAAABYktHRFDjbky8AAAAB3RJTUUH5AsJDzcbWuejSgAAAX9JREFUOMt9lGdDwjAQho8lG4oKVIaDrWwUEdkolG1BHLj+/8+wUNKkNOn7Kbn3aZve5Q5AkcFoMluOjixmk9EAWlltdkGR3WY9sB1Ol6CSy+lQPe4WNHITL/F4BYq8HuRzVF8iONn3uQWGjn074ERg6nTr+wNsIOCXgKCgoyAAf4a3o/FkOp3NR0TGeAjh3eJF3Gm5wLEQhLG/EvdaYSIMEbR8XYqKlmsUjUAULecioTGKRkEp0owEJkrRMDAlgTcUPYcLKvCOopdwRf3EB4rGIK5/yDgk0HJN/c0EJFN6iUonATJK1j43sr/BicxI1bwmi/X1/fP7RxTrRgKyOXa189ntjSmwgcLuyhVLLL9UlG9tmQWU99e+wjhF7hY1xh0dSODWqtL8KtGb9zWtX3sgu7euBeqq9n9sHPqNinpANNNqP9U8nDAtNdDSzqA26bcpQ6rTxX63QwGgp0wxew+o6iOgDww9yf4zy4dBbOvHBkwA+LxUQx50xA2HnDryDwGKECkcS+O5AAAAAElFTkSuQmCC',
                imageSize: [32, 46],
                imageOffset: [0, 0],
            },
            fioRegexp: /^[а-яА-ЯёЁ\s]+$/g,
        };
    },
    methods: {
        changeOpenedPanel ({ openedPanels }) {
            console.log('newVal', openedPanels[0]);
        },
    },
}
</script>

<style scoped>

.delivery-container {
    padding: 52px 16px 116px;
    background: #F6F6F6;
    min-height: 100vh;
}
h1 {
    font-size: 24px;
    color: rgb(0, 0, 0);
    line-height: 0.833;
    margin-bottom: 44px;
    text-align: left;
}
.input-container {
    margin: 34px 0 0;
}
.delivery-container .input-container:first-child {
    margin-top: 8px;
}
.delivery-container .input-container:last-child {

}
.panel {
    margin-bottom: 12px;
}
.ymap-container {
    height: 308px;
}
</style>
