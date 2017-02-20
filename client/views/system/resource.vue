<template>
  <el-row class="main">
    <el-col :span="4">
      <p-mtree :prop="treeProp" :store="treeData" @itemClick="itemClick"></p-mtree>
    </el-col>
    <el-col :span="20">
      <p-mtable :prop="tableProp" :store="tableData" @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange">
        <div slot="search">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="名称" :value="searchName" @input="searchinput"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select placeholder="城市" v-model="city">
                <el-option label="长沙" value="cs"></el-option>
                <el-option label="岳阳" value="yy"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </p-mtable>
    </el-col>
  </el-row>
</template>
<script type="es6">
  import { mapState, mapActions, mapGetters } from 'vuex'
  import * as types from '../../store/mutation-types'
  export default {
    data () {
      return {
        city: '',
        treeProp: {
          en: '资源列表', cn: 'RESOURCES LIST'
        },
        tableProp: {
          header: this.$store.state.resource.header,
          operate: [
            {
              prop: 'delete',
              label: '删除',
              fuc: function (scope) {
                alert('删除' + scope.$index);
              }
            },
            {
              prop: 'look',
              label: '查看',
              fuc: function (scope) {
                alert('查看' + scope.$index);
              }
            },
            {
              prop: 'edit',
              label: '编辑',
              fuc: function (scope) {
                alert('编辑' + scope.$index);
              }
            }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        treeData: state=> {
          return {
            data: state.resource.tree
          }
        },
        searchName: state=> {
          return state.resource.searchName
        },
        tableData: state=> {
          return {
            data: state.resource.table,
            loading:state.resource.loading
          }
        }
      })
    },
    watch: {},
    methods: {
      searchinput: function (val) {
        this.$store.commit('SET_SEARCH', val);
      },
      search: function () {
        this.$store.dispatch('itemClick');
      }
      ,
      itemClick: function (data) {
        if (!data.children) {
          this.$store.dispatch('itemClick');
        }
      }
      ,
      handleSizeChange: function (data) {
        this.$store.dispatch('itemClick');
      }
      ,
      handleCurrentChange: function (data) {
        this.$store.dispatch('itemClick');
      }
    }
    ,
    beforeCreate: function () {
      this.$store.dispatch('initTree');
      this.$store.dispatch('initTable');
    }
    ,
    created: function () {

    }
  }
</script>

<style type="less">
  .MainTable {
    height: 100%;
    width: 100%;
    overflow: hidden;

  .el-form {
    padding-top: 6px;
  }

  .el-table {
    position: absolute !important;
    top: 50px;
    bottom: 50px;
    width: 83.33333%
  }

  .el-pagination {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
  }
  .el-row, .el-col {
    height: 100%;
  }

  .main {
    min-width: 1000px;
    width: 100%;
    overflow: hidden;
  }

  .mtree, .mtable {
    height: 100%;
    background: #FFFFFF;
  }

  .mtree {
    margin-right: 10px;
  }
</style>
