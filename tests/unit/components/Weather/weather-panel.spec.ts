import { mount } from '@vue/test-utils';
import WeatherPanel from '@/components/Weather/WeatherPanel.vue';

describe('WeatherPanel.vue', () => {
  it('renders WeatherPanel and search for WeatherCity element', () => {
    const wrapper = mount(WeatherPanel);
    expect(wrapper.findAll('div[id="weather-city"]')).toHaveLength(3);
  });
});
