import { shallowMount } from '@vue/test-utils';
import WeatherCity from '@/components/Weather/WeatherCity.vue';
import City from '@/classes/city';
import moment from 'moment';

describe('WeatherPanel.vue', () => {
  it('renders WeatherCity with success and search for city name and country', async () => {
    const wrapper = shallowMount(WeatherCity, {
      props: {
        cityName: 'Joinville',
      },
      data: () => ({
        city: City,
      }),
    });

    const updatedAt = moment(Date.now()).format('hh:mm:ss A');

    await wrapper.setData({ city: new City('Joinville', 'BR', 29, 50, 50, updatedAt) });

    expect(wrapper.text()).toContain('Joinville');
    expect(wrapper.text()).toContain('BR');
  });
});
