<template>

  <el-table
    :data="tableData"
    :show-header="isShowHeader"
    :row-class-name="rowClass"
    style="width: 100%"
  >

    <el-table-column type="expand">
      <template scope="props">
        <tree-table class="table-child" v-if="props.row.child&&props.row.child.length" :tableData="props.row.child"
                    :header="header" :isShowHeader="false">
        </tree-table>
      </template>
    </el-table-column>

    <template v-for="item in header">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
      >
      </el-table-column>
    </template>

  </el-table>

</template>

<script type="es6">
  import Vue from 'vue'
  export default {
    name: 'tree-table',
    data() {
      return {}
    },
    computed: {
      head: function () {
        return this.header;
      }
    },
    props: ['tableData', 'isShowHeader', 'header'],
    methods: {
      rowClass: (row, index)=> {
        if (row.child && row.child.length) {
          return 'haschild'
        }
        return 'noChild';
      }
    }
  }
</script>
<style>
  .el-table td:first-of-type  {
    height: 0;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 16px;
  }

  .table-child {
    border: 0;
  }



  .el-table-tr {
    border: 1px solid rgb(223, 230, 236);
  }

  .el-table::before {
    background-color: rgba(0, 0, 0, 0);
  }
  .noChild .el-icon-arrow-right:before{
    content:''
  }
</style>
