'use strict';
class Question{
  static All(){
    this.save(this)
  }
  save() {
    this.constructor._All.push(this)
  }

}

User._All = []