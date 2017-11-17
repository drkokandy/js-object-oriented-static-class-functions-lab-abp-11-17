'use strict';
class Question{
  static All(){
    this.save(this)
  }
  save() {
    this.constructor._All.push(this)
  }

}

let Question._All = [];
