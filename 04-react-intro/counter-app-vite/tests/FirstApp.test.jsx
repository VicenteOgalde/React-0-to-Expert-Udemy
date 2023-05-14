/** * @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from './../src/FirstApp';

describe('test FirsApp', () => {

     test('should make match with the snapshot', () => {

        render(<FirstApp title='nice App' subTitle='very nice App'></FirstApp>)
         }) 
    })