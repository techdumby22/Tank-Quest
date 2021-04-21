

$(function() {
  $('#toggle-event').bootstrapToggle({
    on: '<i class="fas fa-sun"></i>',
    off: '<i class="fas fa-moon"></i>'
  });

  function setTheme(themeToSelect) {
    if (themeToSelect == 'dark') {
      $('body').attr('data-theme', 'dark');
      setCookie('theme', 'dark', 30)
      
    } else {
      $('body').removeAttr('data-theme');
      setCookie('theme', 'light', 30)
      
    }
  }
  
  $('#toggle-event').change(function(e) {
    console.log(e)
    themeToSelect = $(this).prop('checked') == false ? 'light' : 'dark';
    setTheme(themeToSelect);
  })

  if (getCookie('theme') == 'dark') {
    $('#toggle-event').prop('checked', true).change()
  } 

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie)
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cname, cvalue)
  }
})