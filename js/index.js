
// Returns a function for use in jQuery.get() to apply markdown data.
function loadmd(id) {
    return function(data) {
        var md = new Markdown.Converter();
        var  t = md.makeHtml(data);
        $(id).html(t)
    }
}

$(function() {

    var docmd = document.location.href.split('?')
    if (docmd.length > 1) {
        docmd = docmd[docmd.length-1]
    }
    else {
        docmd = 'docs/index.md'
    }

    $.get(
      docmd,
      function(data) {
          var md = new Markdown.Converter();
          var  t = md.makeHtml(data);
          $('#content').html(t)
          if ($('#title')[0]) {
            document.title = $('#title').text()
          }
          else if ($('#hidden-title')[0]) {
            document.title = $('#hidden-title').text()
          }
          else if ($('h1')[0]) {
            document.title = $('h1').text()
          }
          else {
            document.title=docmd
          }
      }
    ).fail(function() {
        $('#content').html('Document '+docmd+' not found.');
    });

    $.get('docs/footer.md', loadmd('#footer'))
    $.get('docs/header.md', loadmd('#header'))
    $.get('docs/sidebar.md', loadmd('#sidebar'))
});
