'use strict';
class Question{
  constructor(){
    this.save()
  }
  static All(){
    return this._All;
  }
  save() {
    this.constructor._All.push(this)
  }

}
Question._All = []
