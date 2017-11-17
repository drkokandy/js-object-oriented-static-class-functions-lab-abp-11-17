'use strict';
class Question{
  static All(){
    this.save()
  }
  save() {
    this.constructor._All.push(this)
  }
  static(){
    return this._All;
  }

}
Question._All = []
