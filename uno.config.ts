import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';

const staticBar = {
  'static-bar': 'bg-black text-white flex text-4xl py-4 px-4 justify-between items-center',
  'menu-icons': 'flex gap-6',
};

const stackCard = {
  // Class for StackCard
  'stack-card': 'stack-card-size stack-card-color stack-card-grid',
  'stack-card-size': 'w-full h-full py-2 px-4 rounded-xl',
  'stack-card-color': 'bg-zinc-100 bg-opacity-75 backdrop-blur-lg',
  'stack-card-grid': 'grid grid-items-center grid-justify-start gap-y-1 gap-x-4',
  // Class for Icon under StackCard
  'stack-card-icon': 'sm:w-9 sm:h-9 w-4 h-4 color-black',
  // Class for p under StackCard
  'stack-card-name': 'text-zinc-900 font-bold sm:self-end sm:text-2xl text-xl',
  'stack-card-description': 'text-zinc-800 sm:self-start text-base',
};

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'anysome-app': 'flex flex-col gap-y-12',
    'load-icon': 'w-25 h-25 mx-auto my-20 block',
    'input-box': 'rounded-xl h-12 w-full border-none px-4 text-xl outline-none',
    'result-list': 'grid gap-4',
    ...stackCard,
    ...staticBar,
  },
  theme: {
    breakpoints: {
      sm: '400px',
      md: '800px',
      lg: '1200px',
    },
  },
});
