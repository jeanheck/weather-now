import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
  it('renders AppHeader and search for an image', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.findAll('img')).toHaveLength(1);
  });
});
