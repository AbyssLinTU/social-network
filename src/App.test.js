import { render, screen } from '@testing-library/react';
import SocialNetworkApp from './App';
import { unmountComponentAtNode } from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SocialNetworkApp />,div);
  unmountComponentAtNode(div)
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  
});
