import React from 'react';
import { connect } from 'react-redux';

import * as LessonsSelectors from '../store/lessons/lessons.selectors';
import * as LessonsActions from '../store/lessons/lessons.actions';
import { combineActionDispatchers, combineSelectors } from '../store/utils';
import { jsonToLesson } from '../utils/json-to-lesson';

import intro from '../lessons/intro.json';
// import test from '../lessons/test.json';


const lessons = [intro].map(jsonToLesson);

const classSelected = "pointer underline";
const classNormal = "pointer o-70 glow";

export const Navigation = connect(
  combineSelectors({ lessonTitle: LessonsSelectors.lessonTitle }),
  combineActionDispatchers({ setLesson: LessonsActions.setLesson })
)(({ lessonTitle, setLesson }) => {
  const onClick = (lesson) => lessonTitle !== lesson.title && setLesson(lesson);
  const className = (lesson) =>
    lessonTitle === lesson.title ? classSelected : classNormal;

  return (
    <nav className="bg-near-white">
      <ul className="list lh-copy">
        {
          lessons.map((lesson, i) =>
            <li key={lesson.title}
                className={className(lesson)}
                onClick={() => onClick(lesson)}>
              { lesson.title }
            </li>
          )
        }
      </ul>
    </nav>
  );
});
