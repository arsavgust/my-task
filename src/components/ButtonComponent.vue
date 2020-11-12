<template>
<div class="custom-button">
    <button @click="$emit('click')">
        <slot></slot>
    </button>
</div>
</template>

<script>
export default {
    name: "ButtonComponent",
}
</script>

<style scoped>
.custom-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.custom-button button:hover {
    background-color: rgb(0, 129, 188);
    cursor: pointer;
}
.custom-button button:active {
    background-color: rgb(1, 93, 135);
}
.custom-button button {
    border-radius: 28px;
    background-color: rgb(0, 150, 218);
    width: 208px;
    height: 56px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
}
</style>