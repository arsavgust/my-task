<template>
    <div class="custom-input">
        <label>
            {{ label }}
            <template v-if="type === 'textarea'">
                <textarea :rows="rows" v-model="inputValue" :placeholder="placeholder" @input="debounceInput"></textarea>
            </template>
            <template v-else-if="type === 'text'">
                <input class="input" v-model="inputValue" :placeholder="placeholder" v-mask="mask" @input="debounceInput"/><!--@keypress="checkLetter($event)"-->
            </template>
        </label>
        <div class="error-text" v-if="errorMessage">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
    name: 'InputComponent',
    model: {
        prop: 'value',
        event: 'input',
    },
    props: {
        value: {
            type: String,
            required: true,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        mask: {
            type: String,
            default: '',
        },
        patternString: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        errorMessage: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        rows: {
            type: Number,
            default: 4,
        },
    },
    data () {
        return {
            inputValue: '',
            pattern: this.patternString ? new RegExp (this.patternString) : /./g,
        };
    },

    methods: {
        checkLetter (e) {
            if(this.pattern.test(e.key))

                return true;
            else
                e.preventDefault();
        },
        debounceInput: debounce(function (e) {
            if (this.pattern.test(e.target.value) || e.target.value === '') {
                this.$emit('input', e.target.value);
            } else {
                this.inputValue = this.value;
            }
        }, 500),
    },
    mounted () {
        this.inputValue = this.value;
    }
}
</script>

<style scoped>
.custom-input {
    width: 100%;
}
label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: rgb(63, 63, 63);
}
input, textarea {
    padding: 20px 25px;
    margin-top: 12px;
    font-size: 16px;
    color: rgb(63, 63, 63);
    border: 1px solid rgb(218, 222, 240);
    border-radius: 4px;
}
textarea {
    resize: none;
}
.error-text {
    position: absolute;
    margin-top: 6px;
    font-size: 12px;
    color: rgb(255, 30, 56);
    display: flex;
    justify-content: flex-start;
}
</style>