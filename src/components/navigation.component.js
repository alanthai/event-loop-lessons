import React from 'react';

import { lessonsService } from '../services/lessons.service';


const classSelected = "pointer underline";
const classNormal = "pointer o-70 glow";

export const Navigation = ({ currentLesson }) => {
  const onClick = (title) =>
    currentLesson !== title && lessonsService.setLesson(title);
  const className = (title) =>
    currentLesson === title ? classSelected : classNormal;

  return (
    <nav className="bg-near-white">
      <ul className="list lh-copy">
        {
          lessonsService.getLessonTitles().map((title) =>
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
};
