/*
 * ADD_STUDENT:
 * - takes a student object as payload with name and major parameters
 * - creates new ID for student based on previous last student
 * - pushes new student to the end of copy of student array
 * - updates student array
 */
export const ADD_STUDENT = 'ADD_STUDENT';

/*
 * REMOVE_STUDENT:
 * - takes a student ID as payload
 * - finds student based on ID and removes via splice() the targeted student
 * - updates student array
 */
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

/*
 * UPDATE_STUDENT:
 * - takes object with id and updated values for student parameter(s)
 * - finds student based on ID and updates object
 * - updates object in-place within copy of student array
 * - updates student array
 */
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

/*
 * ADD_MAJOR:
 * - takes a string as name of new major to be added
 * - pushes new major to end of copy of majors array
 * - updates majors array
 */
export const ADD_MAJOR = 'ADD_MAJOR';

/*
 * REMOVE_MAJOR:
 * - takes a string of major to be removed
 * - creates copy of majors array
 * - filters new copy to only return non-matching (to parameter) majors
 * - updates majors array
 */
export const REMOVE_MAJOR = 'REMOVE_MAJOR';
