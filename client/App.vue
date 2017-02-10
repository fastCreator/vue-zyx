Skip to content
This repository
Search
Pull requests
Issues
Gist
@fastCreator
Sign out
Watch 36
Star 1,259
Fork 128 egoist/vuepack
Code  Issues 11  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathvuepack/template/client/components/App.vue
881952a  on 19 Dec 2016
@egoist egoist upgrade to webpack rc
1 contributor
RawBlameHistory
28 lines (26 sloc)  523 Bytes
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    margin: 0;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
  }
  .page {
    text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
  }
</style>
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
