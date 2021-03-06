"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * GetRecordRequest model
 */
class GetRecordRequest {
  /**
     * @param {Integer} appID
     * @param {Integer} recordID
     */
  constructor(appID, recordID) {
    this.app = appID;
    this.id = recordID;
  }
  /**
     * @return {Integer}
     */


  getRecordID() {
    return this.id;
  }
  /**
     * @return {Integer}
     */


  getAppID() {
    return this.app;
  }
  /**
     * @return {Object}
     */


  toJSON() {
    return {
      app: this.getAppID(),
      id: this.getRecordID()
    };
  }
  /**
     * @return {String}
     */


  toJSONString() {
    return JSON.stringify(this.toJSON());
  }

}

var _default = GetRecordRequest;
exports.default = _default;