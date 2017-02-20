<template>
  <div class="MainTable">
    <!--搜索-->
    <slot name="search"></slot>
    <!--表格-->
    <el-table
      :data="store.data.listData"
      border
      height="100%"
      v-loading="store.loading"
      element-loading-text="拼命加载中"
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

<!--分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="store.data.totalCount">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'p-mtable',
    props: ['prop', 'store'],
    data () {
      return {
        currentPage:1,
        pageSize:10
      }
    },
    methods: {
      hasItem: function (item, items) {
        return ~item.indexOf(items);
      },
      handleSizeChange:function(size){
        this.pageSize=size;
      this.$emit('handleSizeChange', size)
      },
      handleCurrentChange:function(data){
        this.$emit('handleCurrentChange', data)
      }
    }
  }
</script>
<style scoped="scoped">

</style>
