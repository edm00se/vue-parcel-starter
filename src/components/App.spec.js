import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('Test suite for App Component', () => {
  let vm;
  beforeEach(() => {
    vm = mount(App, {
      data: { // Replace data value with this fake data
        title: 'Cats',
        subtitle: 'and Dogs... living together'
      }
    });
  });

  it('equals messages to "Cats" and "Dogs...living together"', () => {
    expect(vm.title).toEqual('Cats');
    expect(vm.subtitle).toEqual('and Dogs... living together');
  });

});
