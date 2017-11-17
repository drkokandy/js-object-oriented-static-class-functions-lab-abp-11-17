'use strict';
class Question{
  constructor(){
    this.save()
  }
  static All(){
    
  }
  save() {
    this.constructor._All.push(this)
  }
  static(){
    return this._All;
  }

}
Question._All = []
