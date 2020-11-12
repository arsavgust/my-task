<template>
<div class="custom-radio-group">
    <RadioGroup v-model="currentValue" @on-change="updateRadio()">
        <Radio v-for="radio in radioList" :key="radio.id" :label="radio.id" >
            <Icon v-if="radio.iconType" :type="radio.iconType"></Icon>
            <span>{{ radio.title }}</span>
        </Radio>
    </RadioGroup>
</div>
</template>

<script>
    export default {
        name: "RadioGroupComponent",
        model: {
            prop: 'value',
            event: 'change',
        },
        props: {
            value: {
                type: String,
                required: true,
            },
            radioList: {
                type: Array,
                required: true,
            },
        },
        data () {
            return {
                currentValue: '',
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
        },
        methods: {
            updateRadio() {
                this.$emit('change', this.currentValue);
            },
        },
        mounted () {
            this.currentValue = this.value;
        }
    }
</script>

<style scoped>
.custom-radio-group >>> .ivu-radio {
    margin-right: 14px;
}
.custom-radio-group >>> .ivu-radio-wrapper {
    display: flex;
}
.custom-radio-group >>> .ivu-radio-wrapper span {
    white-space: normal;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
}
.custom-radio-group >>> .ivu-radio-wrapper:not(:first-child) {
    margin-top: 24px;
}
.custom-radio-group >>> .ivu-radio-inner:after {
    width: 6px;
    height: 6px;
    left: 5px;
    top: 5px;
    border-radius: 50%;
}
.custom-radio-group >>> .ivu-radio-inner {
    transition: none;
    width: 18px;
    height: 18px;
}
.custom-radio-group >>> .ivu-radio:hover .ivu-radio-inner {
    border-color: rgb(0, 150, 218);
}
.custom-radio-group >>> .ivu-radio-wrapper:hover .ivu-radio-inner {
    border-color: rgb(0, 150, 218);
}
.custom-radio-group >>> .ivu-radio-wrapper:hover {
    color: rgb(0, 150, 218);
}
.custom-radio-group >>> .ivu-radio-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: black;
}
</style>