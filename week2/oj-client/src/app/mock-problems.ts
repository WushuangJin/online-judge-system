import {Problem} from './models/problem.model';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: 'Two Sum',
    desc: 'given an array of integers, find two numbers such that they add up to a specific target',
    difficulty: 'easy'
  } ,
  {
    id: 2,
    name: '3Sum',
    desc: 'given an array of integers, find three numbers such that they add up to a specific target',
    difficulty: 'medium'
  } ,
  {
    id: 3,
    name: '4Sum',
    desc: 'given an array of integers, find two numbers such that they add up to a specific target',
    difficulty: 'medium'
  } ,
  {
    id: 4,
    name: 'Triangle Count' ,
    desc: 'Given an array of integers, how many three numbers can be found in the array',
    difficulty: 'hard'
  },
  {
    id: 5,
    name: 'Sliding Window Maximum',
    desc: 'Given an array of n integer with duplicate number, and a moving window(size k)',
    difficulty: 'super'
  }
];
