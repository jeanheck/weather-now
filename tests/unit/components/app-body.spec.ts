import { mount } from '@vue/test-utils';
import AppBody from '@/components/AppBody.vue';

describe('AppBody.vue', () => {
  it('renders AppBody and search for WeatherPanel element', () => {
    const wrapper = mount(AppBody);
    expect(wrapper.findAll('div[id="weather-panel"]')).toHaveLength(1);
  });
});
