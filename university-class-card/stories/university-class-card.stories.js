import { html } from 'lit';
import '../src/university-class-card.js';

export default {
  title: 'UniversityClassCard',
  component: 'university-class-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <university-class-card
      style="--university-class-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </university-class-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
