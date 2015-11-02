describe('footerInfo test', function() {
  var $compile;

  beforeEach(module('footer'));
  beforeEach(inject(function(_$compile_) {
    $compile = _$compile_;
  }));

  it('replaces the element with content', function() {
    var element = $compile("<footer-info></footer-info>");
    expect(element.html()).toContain("");
  });
});
