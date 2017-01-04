var obj = {
  value: 1,
  increment: function() {
      ++this.value;
      return this;
  },
  add: function(v) {
      this.value += v;
      return this;
  },
  shout: function() {
      return this.value;
  }
};

console.log(obj.increment().add(3).shout());