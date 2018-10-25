import Vue from 'vue';
import App from '../src/components/App.vue';

describe('Test suite for App Component', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(App) // Create a copy of the original component
    vm = new cmp({
      data: { // Replace data value with this fake data
        title: 'Cats',
        subtitle: 'and Dogs... living together'
      }
    }).$mount() // Instances and mounts the component
  })

  it('equals messages to "Cats" and "Dogs...living together"', () => {
    expect(vm.title).toEqual('Cats');
    expect(vm.subtitle).toEqual('and Dogs... living together');
  })
});
