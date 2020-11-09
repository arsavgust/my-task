<template>
    <div class="custom-collapse">
        <Collapse v-model="openedName" accordion>
            <slot name="panel"></slot>
        </Collapse>
    </div>
</template>

<script>
    export default {
        name: "CollapseComponent",
        props: {
            namePanel: {
                type: String,
                required: true,
            },
        },
        data () {
            return {
                openedName: [],
            }
        },
        watch: {
            openedName (newVal) {
                this.$emit('change', {openedPanels: newVal});
            }
        }
    }
</script>

<style scoped>
.custom-collapse {
    background: white;
}
.custom-collapse >>> .ivu-collapse {
    background-color: white;
    border: none;
    border-radius: 0;
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item.ivu-collapse-item-active>.ivu-collapse-header>i {
    transform: rotate(270deg);
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header>i {
    transform: rotate(90deg);
    position: absolute;
    right: 0;
    top: calc(50% - 6px);
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {
    padding-left: 16px;
    padding-right: 16px;
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(130, 136, 162);
    background: white;
    border-top: 1px solid #dcdee2;
    border-bottom: 1px solid #dcdee2;
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header:hover {
    color: rgb(0, 150, 218);
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item.ivu-collapse-item-active>.ivu-collapse-header {
    border-top: 1px solid #dcdee2;
    color: rgb(0, 150, 218);
}
.custom-collapse >>> .ivu-collapse>.ivu-collapse-item {
    border-top: none;
}
.custom-collapse >>> .ivu-collapse-content>.ivu-collapse-content-box {
    padding-bottom: 24px;
}
</style>