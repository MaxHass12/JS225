function makeList() {
  return {
    items: [],
    add(item) {
      const index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(item + ' added');
      }
    },
    remove(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.splice
      }
    }
  }
}