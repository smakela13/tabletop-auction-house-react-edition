import { render } from '@testing-library/react';
import StudentList from '../components/studentList';
import { StudentProvider } from '../utils/studentContext';

test('StudentList renders', () => {
  render(
    <StudentProvider>
      <StudentList />
    </StudentProvider>
  );
});
