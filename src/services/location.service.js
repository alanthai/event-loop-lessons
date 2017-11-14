class LocationService {
  get fragment() {
    return this.location.hash.slice(1);
  }

  constructor(window, history, location) {
    this.setHash = history.pushState
      ? (fragment) => { history.pushState({}, '', `#${fragment}`); }
      : (fragment) => { location.hash = `#${fragment}`; }

    this.location = location;
    this.window = window;
  }

  onHashChange(callback) {
    const f = () => callback(this.fragment);
    this.window.addEventListener('popstate', f);

    // unsubscribe
    return () => {
      this.window.removeEventListener('popstate', f);
    };
  }

  // overridden in constructor
  setHash() {}
}

export const locationService = new LocationService(
  window,
  window.history,
  window.location
);
