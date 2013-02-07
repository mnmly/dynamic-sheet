/**
 * Expose `DynamicSheet`
 */

module.exports = DynamicSheet;

/**
 * Initialize DynamicSheet
 */

function DynamicSheet(){
  this.style = document.createElement( 'style' );
  this.style.rel = 'stylesheet';
  this.style.type= 'text/css';
  document.getElementsByTagName( 'head' )[0].appendChild( this.style );
  this.sheet = this.style.sheet;
};

/**
 * Inserts the rules
 * 
 * @param {String} rules CSS rule string
 */

DynamicSheet.prototype.insert = function( rules ) {
  rules = rules.split( '}' );
  for ( var i = 0; i < rules.length; i += 1 ) {
    var rule = rules[i];
    if ( rule ) {
      rule += '}';
      this.sheet.insertRule( rule,  this.sheet.cssRules.length );
    }
  }
};
