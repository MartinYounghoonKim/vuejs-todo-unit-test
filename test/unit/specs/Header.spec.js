import Vue from 'vue';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.header h1').textContent)
    .to.equal('Vue Test')
  })
  it('adds a new todo item to list on enter', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();

    vm.newItem = 'test3';

    const input = vm.$el.querySelector('.new-todo');
    const keyDownEvent = new window.Event('keydown');
    input.dispatchEvent(keyDownEvent);
    vm._watcher.run();
    
    expect(vm.items).to.contain('test3');
  })
})