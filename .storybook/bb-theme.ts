import { create } from '@storybook/theming/create';

// @ts-ignore
import logo from '../src/assets/logo.png'

export default create({
    base: 'dark',
    brandTitle: 'Barebones Theme',
    brandImage: logo,
    brandTarget: '_self',
});