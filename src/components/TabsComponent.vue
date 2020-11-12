<template>
<div class="custom-tabs">
  <Tabs>
      <slot></slot>
  </Tabs>
</div>
</template>

<script>
  export default {
    name: "TabsComponent"
  }
</script>

<style scoped>
.custom-tabs >>> .ivu-tabs .ivu-tabs-tabpane {
    padding: 36px 32px;
    background: white;
}
.custom-tabs >>> .ivu-tabs-bar {
    margin-bottom: 0;
}
.custom-tabs >>> .ivu-tabs-tab.ivu-tabs-tab-active.ivu-tabs-tab-focused {
}
.custom-tabs >>> .ivu-tabs-nav .ivu-tabs-tab {
}
</style>