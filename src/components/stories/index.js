import Vue from 'vue';
import HelloWorld from '../HelloWorld';
import {action} from '@storybook/addon-actions';
Vue.component ('hello-world', HelloWorld);
export default {title: 'HelloWorld'};

export const withText = () => '<hello-world>withText</hello-world>';

export const withEmoji = () => '<hello-world>😀 😎 👍 💯</hello-world>';

export const asAComponent = () => ({
  components: {HelloWorld},
  template: '<hello-world :rounded="true">rounded</hello-world>',
});
withText.story = {
  parameters: {
    notes: 'A small withText',
  },
};
