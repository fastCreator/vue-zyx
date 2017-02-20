export default {
  name: 'validate',
  call: {
    bind: function (el, binding, vnode) {
      //var s = JSON.stringify
      //el.innerHTML =
      //  'name: '       + s(binding.name) + '<br>' +
      //  'value: '      + s(binding.value) + '<br>' +
      //  'expression: ' + s(binding.expression) + '<br>' +
      //  'argument: '   + s(binding.arg) + '<br>' +
      //  'modifiers: '  + s(binding.modifiers) + '<br>' +
      //  'vnode keys: ' + Object.keys(vnode).join(', ')
    },
    componentUpdated: function (el, binding, vnode) {
      switch (binding.expression) {
        case 'regex':
          regex(el, binding, vnode);
          break;
      }
    }
  }
}

function regex(el, binding, vnode) {
  var input = el.getElementsByTagName('input')[0];
  console.log(binding.value)
  if (!input.value.match(binding.value)) {

  }
}
