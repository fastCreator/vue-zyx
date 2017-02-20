import Vue from 'vue'

import validate from './validate'

Vue.directive(validate.name, validate.call);
