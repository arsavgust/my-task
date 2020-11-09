<template>
    <div class="custom-input">
        <label>
            {{ label }}
            <template v-if="type === 'textarea'">
                <textarea :rows="rows"></textarea>
            </template>
            <template v-else-if="type === 'text'">
                <input v-model="inputValue" :placeholder="placeholder" v-mask="mask" class="input" @input="updateInput()"/><!--@keypress="checkLetter($event)"-->
            </template>
        </label>
    </div>
</template>

<script>
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
        /*pattern: {
            type: RegExp,
            default: () => {
              return /./g
            },
        },*/
        placeholder: {
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
        };
    },
    watch: {
        value (val) {
            this.inputValue = val;
        },
    },
    methods: {
        updateInput () {
            this.$emit('input', this.inputValue);
        },
        /*checkLetter (e) {
            if(this.pattern.test(e.symbol))

                return true;
            else
                e.preventDefault();
        }*/
    },
    mounted () {
        this.inputValue = this.value;
    }
}
</script>

<style scoped>
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
</style>