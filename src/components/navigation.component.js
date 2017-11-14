import React from 'react';
import { connect } from 'react-redux';

import { routerService } from '../services/router.service';
import * as LessonsSelectors from '../store/lessons/lessons.selectors';
import * as LessonsActions from '../store/lessons/lessons.actions';
import { combineActionDispatchers, combineSelectors } from '../store/utils';


const classSelected = "pointer underline";
const classNormal = "pointer o-70 glow";

export const Navigation = connect(
  combineSelectors({ currentTitle: LessonsSelectors.lessonTitle }),
  combineActionDispatchers({ setLesson: LessonsActions.setLesson })
)(({ currentTitle, setLesson }) => {
  const onClick = (title) =>
    currentTitle !== title && routerService.navigate(title);
  const className = (title) =>
    currentTitle === title ? classSelected : classNormal;

  return (
    <nav className="bg-near-white">
      <ul className="list lh-copy">
        {
          routerService.getLessonTitles().map((title) =>
            <li key={title}
                className={className(title)}
                onClick={() => onClick(title)}>
              { title }
            </li>
          )
        }
      </ul>
    </nav>
  );
});
