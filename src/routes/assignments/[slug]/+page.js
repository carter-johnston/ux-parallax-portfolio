import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === '1') {
    return {
      title: 'User Interface Redesign',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      directory: 'assignment1',
      slug: '1',
      screen1: '',
      screen2: '',
      screen3: '',
    };
  }
  else if (params.slug === '2') {
    return {
      title: 'Asset Library',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      directory: 'assignment2',
      slug: '2',
    };
  }
  else if (params.slug === '3') {
    return {
      title: 'Basic User Interface',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      directory: 'assignment3',
      slug: '3',
    };
  }
  else if (params.slug === '4') {
    return {
      title: 'Wireframe To Prototype',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      directory: 'assignment4',
      slug: '4',
    };
  }
  else if (params.slug === '5') {
    return {
      title: 'Landing Page Project',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      directory: 'assignment5',
      slug: '5',
    };
  }
  throw error(404, 'Not found');
}