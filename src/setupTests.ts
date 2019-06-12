import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({ noKey: true, mode: 'deep' }));
enzyme.configure({ adapter: new Adapter() });
