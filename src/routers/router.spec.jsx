import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Router', () => {
  it('should navigate to home', async () => {
    const wrapper = await mount(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
