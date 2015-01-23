Polymer("points-of-interest-map", {
  latitude: 0,
  longitude: 0,
  points: [],

  handleResponse: function(e) {
    this.points = e.detail.response;
  }
});
