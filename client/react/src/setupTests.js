import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';

Enzyme.configure({ adapter: new Adapter() });

// Make testing functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.faker = faker;
