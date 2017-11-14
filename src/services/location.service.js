class LocationService {
  constructor(window, history, location) {
    this.setHash = history.pushState
      ? (fragment) => { history.pushState({}, '', `#${fragment}`); }
      : (fragment) => { location.hash = `#${fragment}`; }

    this.location = location;
    this.window = window;
  }

  onHashChange(callback) {
    const f = () => callback(this.location.hash);
    this.window.addEventListener('popstate', f);

    // unsubscribe
    return () => {
      this.window.removeEventListener('hashchange', f);
    };
  }

  // overridden in constructor
  setHash() {}
}

export const locationService = new LocationService(window, window.history, window.location);
