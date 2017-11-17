'use strict';
class Question{
  static All(){
    this.save(this)
  }
  save() {
    this.constructor._All.push(this)
  }
  static(){
    return this._All;
  }

}
User._All = []
