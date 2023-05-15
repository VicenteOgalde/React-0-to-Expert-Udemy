/** * @jest-environment jsdom */
import { getByText, render } from '@testing-library/react';
import { FirstApp } from './../src/FirstApp';

describe('test FirsApp', () => {

     test('should make match with the snapshot', () => {

        const {container}=render(<FirstApp title='nice App' subTitle='very nice App'></FirstApp>)

        expect(container).toMatchSnapshot();

         });

         test('should show the title in a H1', () => {

          const title ='good morning'
          const {container, getByText}=render(<FirstApp title={title} subTitle='very nice App'></FirstApp>)
  
          expect(getByText(title) ).toBeTruthy();
  
           });  
    });