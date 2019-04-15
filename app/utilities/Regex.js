/* eslint-disable */
const Regex = {
  validateEmail: function(val) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  },

  validateEmoji: function(text) {
    const reg = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return reg.test(text);
  },

  validateMobile: function(text) {
    //alert(text);
    return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(text);
    /*let mobileRegex = /^(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)(\s?\d){1,15}$/ ;
        if(mobileRegex.test(text.trim()) && text.trim().length<15 && text.trim().length>=12)
            return true
        return false*/
  },
  validateUrl: function(url) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
  },

  validateMobileWithoutCC: function(val) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      val
    );
  },

  validateString: function(val) {
    return /^[a-zA-Z\x20]{3,25}$/.test(val);
  },

  validateStringMinimumLength2: function(val) {
    return /^[a-zA-Z\x20]{2,25}$/.test(val);
  },

  validatePassword: function(val) {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_]\S{5,16}$/.test(val);
  },

  validateNumbers: function(val) {
    return /^[0-9]{0,}$/.test(val);
  },

  validateURL: function(url) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      url
    );
  },

  validatePrice(val) {
    return /^(\d*([.,](?=\d{1}))?\d+)?$/.test(val);
  }
};

module.exports = Regex;
