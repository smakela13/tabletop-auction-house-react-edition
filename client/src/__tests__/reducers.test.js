import reducer from '../utils/reducers';
import {
  ADD_MAJOR,
  ADD_STUDENT,
  REMOVE_MAJOR,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
} from '../utils/actions';

const initialState = {
  students: [
    {
      id: 1,
      name: 'Test Student 1',
      major: 'Major 1',
    },
    {
      id: 2,
      name: 'Test Student 2',
      major: 'Major 2',
    },
  ],
  majors: ['Mathematics', 'Computer Science', 'Art'],
};

test('ADD_STUDENT', () => {
  let newState = reducer(initialState, {
    type: ADD_STUDENT,
    payload: {
      name: 'Test Student 3',
      major: 'Major 3',
    },
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(3);
});

test('REMOVE_STUDENT', () => {
  let newState = reducer(initialState, {
    type: REMOVE_STUDENT,
    payload: 1,
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(1);
});

test('UPDATE_STUDENT', () => {
  let newState = reducer(initialState, {
    type: UPDATE_STUDENT,
    payload: {
      id: 1,
      name: 'Javy Scripp',
    },
  });

  expect(initialState.students[0].name).toBe('Test Student 1');
  expect(newState.students[0].name).toBe('Javy Scripp');
  expect(newState.students[0].major).toBe('Major 1');
});

test('ADD_MAJOR', () => {
  let newState = reducer(initialState, {
    type: ADD_MAJOR,
    payload: 'Communications',
  });

  expect(initialState.majors.length).toBe(3);
  expect(newState.majors.length).toBe(4);
});

test('REMOVE_MAJOR', () => {
  let newState = reducer(initialState, {
    type: REMOVE_MAJOR,
    payload: 'Mathematics',
  });

  expect(initialState.majors.length).toBe(3);
  expect(newState.majors.length).toBe(2);
  expect(newState.majors.indexOf('Mathematics')).toBe(-1);
});
