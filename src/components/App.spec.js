import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('Test suite for App Component', () => {
  let app;
  beforeEach(() => {
    app = mount(App, {
      data() {
        return {
          title: 'Cats',
          subtitle: 'and Dogs... living together'
        };
      }
    });
  });

  it('equals messages to "Cats" and "Dogs...living together"', () => {
    console.log(app);
    expect(app.componentVM.title).toEqual('Cats');
    expect(app.componentVM.subtitle).toEqual('and Dogs... living together');
  });
});
