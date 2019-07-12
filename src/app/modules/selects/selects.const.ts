import { Select } from './interfaces/select.interface';

export const selects: Select[] = [
  {
    rotatingQuestionsTag: 'A',
    varName: '$Q0',
    title: 'A question 1',
    answerOptions: ['$Q0 option-1', '$Q0 option-2', '$Q0 option-3']
  },
  {
    rotatingQuestionsTag: 'A',
    varName: '$Q1',
    title: 'A question 2',
    answerOptions: ['$Q1 option-1', '$Q1 option-2', '$Q1 option-3']
  },
  {
    rotatingQuestionsTag: 'A',
    varName: '$Q2',
    title: 'A question 3',
    answerOptions: ['$Q2 option-1', '$Q2 option-2', '$Q2 option-3']
  },
  {
    rotatingQuestionsTag: 'B',
    varName: '$Q3',
    title: 'B question 1',
    answerOptions: ['option-1', 'option-2', 'option-3']
  },
  {
    rotatingQuestionsTag: 'B',
    varName: '$Q4',
    title: 'B question 2',
    answerOptions: ['option-1', 'option-2', 'option-3']
  },
  {
    rotatingQuestionsTag: 'B',
    varName: '$Q5',
    title: 'B question 3',
    answerOptions: ['option-1', 'option-2', 'option-3']
  }
];
