// Active Class for Sidebar

$(function() {
  if ((location.pathname.split("/")[1]) !== "") {
  $('ul a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  }
});

$('.rb-sidebar').on('click',function() {
    $('.rb-sidebar.active').removeClass('active');
    $(this).addClass('active');
});

// Code Snippets Toggle

$(".snippets").click(function() {
  $(this).closest("div").next(".row").find(".code-snippet").toggle();
  $(this).closest("div").next(".row").find(".arrow_box").toggle();
});

$(".snippets-buttons").click(function() {
  $(this).closest("div").find(".code-snippet-2").toggle();
  $(this).closest("div").closest(".row").find(".arrow_box").toggle();
});

// Theme Toggle

if (localStorage.getItem('dark')) {
  document.body.classList.add('dark');
  document.getElementById("themer").innerHTML = '<i class="material-icons">brightness_7</i> Switch to Light Theme';
  document.getElementById("themer2").innerHTML = '<i class="material-icons">brightness_7</i> Switch to Light Theme';
}

function dark(){
if (document.body.classList.contains('dark')) {
  document.body.classList.remove('dark');
  localStorage.removeItem('dark');
  document.getElementById("themer").innerHTML = '<i class="material-icons">brightness_2</i> Switch to Dark Theme';
  document.getElementById("themer2").innerHTML = '<i class="material-icons">brightness_2</i> Switch to Dark Theme';
}
 else {
  document.body.classList.add('dark');
  localStorage.setItem('dark', true);
  document.getElementById("themer").innerHTML = '<i class="material-icons">brightness_7</i> Switch to Light Theme';
  document.getElementById("themer2").innerHTML = '<i class="material-icons">brightness_7</i> Switch to Light Theme';
}
}
