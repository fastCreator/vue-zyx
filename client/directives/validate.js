import store from '../store'

export default {
  name: 'validate',
  call: {
    componentUpdated: function (el, binding, vnode) {
      if(binding.modifiers['regex']){
        regex(el, binding, vnode);
      }
    }
  }
}
function regex(el, binding, vnode) {
  var $input = $(el).find('input');
  console.log(vnode);
  console.log(vnode.context.$data.regex);
  if (!$input.val().match(binding.value)) {
    $input.addClass('validate-error')
    store.validate=false;
  }else{
    $input.removeClass('validate-error')
    store.validate=true;
  }
}
