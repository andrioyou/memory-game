import { Select } from './interfaces/select.interface';

export class SELECTS {
  selects: Select[] = [
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q0',
      title: 'A question 1',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q1',
      title: 'A question 2',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q2',
      title: 'A question 3',
      answerOptions: ['option-1', 'option-2', 'option-3']
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
}
