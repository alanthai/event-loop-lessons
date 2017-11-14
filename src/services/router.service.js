import { store } from '../store/store';
import { locationService } from './location.service';
import { setLesson } from '../store/lessons/lessons.actions';

import { jsonToLesson } from '../utils/json-to-lesson';

import intro from '../lessons/intro.json';
import scope from '../lessons/scope.json';
import closure from '../lessons/closure.json';
import keywordThis from '../lessons/keyword-this.json';
// import test from '../lessons/test.json';


const lessons = [intro, scope, closure, keywordThis]

const lessonsMap = lessons.map(jsonToLesson)
  .reduce((map, lesson) => {
    map[cleanTitle(lesson.title)] = lesson;
    return map;
  }, {});
const lessonTitles = lessons.map(lesson => lesson.title);

function cleanTitle(title) {
  const fragment = title
    .replace(/\s/g, '-')
    .replace(/[^A-Za-z\s\d-]/g, '');
  return encodeURIComponent(fragment).toLowerCase();
}

class RouterService {
  constructor(locationService, store) {
    this.locationService = locationService;
    this.store = store;

    this.fragment = null;

    locationService.onHashChange((hash) => {
      const fragment = hash.slice(1);
      if (this.fragment !== fragment) {
        this.fragment = fragment;
        this.setLesson(fragment);
      }
    });
  }

  getLessonTitles() {
    return lessonTitles;
  }

  navigate(lessonTitle) {
    const cleanedTitle = cleanTitle(lessonTitle || lessons[0].title);

    this.fragment = cleanedTitle;
    this.locationService.setHash(cleanedTitle);

    this.setLesson(cleanedTitle);
  }

  /**
   * @private
   */
  setLesson(cleanedTitle) {
    const lesson = lessonsMap[cleanedTitle];

    if (lesson) {
      this.store.dispatch(setLesson(lesson));
    }
  }
}

export const routerService = new RouterService(locationService, store);
