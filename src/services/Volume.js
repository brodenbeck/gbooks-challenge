class Volume {
  static index(query, successCB = () => {}, failureCB = () => {}) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(response => successCB(response.items))
      .catch(error => failureCB(error));
  }
}

export default Volume;
