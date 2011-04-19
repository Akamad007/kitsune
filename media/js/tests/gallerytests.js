$(document).ready(function(){

var galleryFixture = {
    setup: function() {
        this.$sandbox = tests.createSandbox('#gallery');
    },
    teardown: function() {
        this.$sandbox.remove();
    }
};

module('gallery', galleryFixture);

function assertWhatever($sandbox) {
    alert($sandbox.attr('id'));
};

test('select form', function() {
    var $sandbox = this.$sandbox,
        GU = k.GalleryUpload;
    equals($sandbox.find('.upload-media').length, 10);

    equals('upload-form on', GU.forms.$video.attr('class'));
    equals('upload-form off', GU.forms.$image.attr('class'));

    // Now clicky radio thingy to switch to image.
    GU.$radios.first().click();
    equals('upload-form off', GU.forms.$video.attr('class'));
    equals('upload-form on', GU.forms.$image.attr('class'));

    // Now clicky radio thingy to switch video.
    GU.$radios.last().click();
    equals('upload-form on', GU.forms.$video.attr('class'));
    equals('upload-form off', GU.forms.$image.attr('class'));
});

test('validate form', function() {
    // TODO: make these pass by ceasing to nest forms in ajaxSubmitInput.
    var GU = k.GalleryUpload;
    $('input[name="upload"]').each(function() {
        equals(false, GU.validateForm($(this)));
    });
});

});
