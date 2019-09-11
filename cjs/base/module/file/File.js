"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FileModels = _interopRequireDefault(require("../../model/file/FileModels"));

var _Connection = _interopRequireDefault(require("../../connection/Connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * File module
 */
var File =
/*#__PURE__*/
function () {
  /**
   * The constructor for this module
   * @param {Object} params
   * @param {Connection} params.connection
   */
  function File() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        connection = _ref.connection;

    _classCallCheck(this, File);

    if (!(connection instanceof _Connection.default)) {
      throw new Error("".concat(connection, " not an instance of Connection"));
    }

    this.connection = connection;
  }
  /**
   * Download file from kintone
   * @param {Object} params
   * @param {String} params.fileKey
   * @return {Promise}
   */


  _createClass(File, [{
    key: "download",
    value: function download(_ref2) {
      var fileKey = _ref2.fileKey;
      var dataRequest = new _FileModels.default.GetFileRequest(fileKey);
      return this.connection.download(dataRequest.toJSON());
    }
    /**
     * upload file to kintone
     * @param {Object} params
     * @param {String} params.fileName
     * @param {String} params.fileContent
     * @return {Promise}
     */

  }, {
    key: "upload",
    value: function upload(_ref3) {
      var fileName = _ref3.fileName,
          fileContent = _ref3.fileContent;
      return this.connection.upload(fileName, fileContent);
    }
  }]);

  return File;
}();

var _default = File;
exports.default = _default;