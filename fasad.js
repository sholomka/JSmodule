var myevent = {
  stop: function(e) {
      if (typeof e.preventDefault === 'function') {
          e.preventDefault();
      }

      if (typeof e.stopPropagation === 'function') {
          e.stopPropagation();
      }

      if (typeof e.returnValue === 'boolean') {
          e.returnValue = false;
      }

      if (typeof e.cancelBubble === 'boolean') {
          e.cancelBubble = true;
      }
  }
};