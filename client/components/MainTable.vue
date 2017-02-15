<template>
  <div class="MainTable">
    <slot name="search"></slot>
    <el-table
      :data="store.data.listData"
      border
      style="width: 100%;position: absolute;
      top: 59px;
      left: 16%;
      bottom: 50px;"
      height="100%"
    >
      <template v-for="item in prop.header">
        <el-table-column
          v-bind="item">
        </el-table-column>
      </template>

      <el-table-column
        fixed="right"
        label="操作">
        <template scope="scope">
          <template v-for="item in prop.operate">
            <el-button v-if="hasItem(item.prop,scope.row.operate)"
                       @click="item.fuc(scope)"
                       type="text"
                       size="small">
              {{item.label}}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'p-mtable',
    props: ['prop', 'store'],
    methods: {
      hasItem: function (item, items) {
        return ~item.indexOf(items);
      }
    }
  }
</script>
<style scoped="scoped">

</style>
