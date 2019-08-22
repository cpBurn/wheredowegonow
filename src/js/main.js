var PASS1_NAME = 'pass1';
var PASS2_NAME = 'pass2';
var PASS3_NAME = 'pass3';
var PASS4_NAME = 'pass4';

var PASS1 = 'N9TT'.toLowerCase();
var PASS2 = '9G0A'.toLowerCase();
var PASS3 = 'B7FQ'.toLowerCase();
var PASS4 = 'RA3X'.toLowerCase();

$('#warning').fadeOut(0);

(function() {
  $(document).on('submit', '#login', function(e) {
    e.preventDefault();
    var formValues = $(this).serializeArray();
    var mappedValues = {};

    formValues.forEach(function(formValue) {
      mappedValues[formValue.name] = formValue.value.toLowerCase();
    });

    if (
      mappedValues[PASS1_NAME] === PASS1 &&
      mappedValues[PASS2_NAME] === PASS2 &&
      mappedValues[PASS3_NAME] === PASS3 &&
      mappedValues[PASS4_NAME] === PASS4
    ) {
      $('#login').fadeOut(200, function () {
        $('#content').addClass('content-animate');
      });

    } else {
      $('#warning').fadeIn(200);
    }
  });
}());
