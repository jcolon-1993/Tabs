/*
A jQuery selection picks all sets of tabs within
Create variables: the page. The.each() method calls an anonymous
function that is run for each set of tabs
*/
$(".tab-list").each(function()
{
  // $this holds the current set of tabs.
  var $this = $(this);
  // gets the active list item.
  var $tab = $this.find("li.active");
  // Gets link from active tab
  var $link = $tab.find("a");
  // Gets active panel
  var $panel = $($link.attr("href"));

  // anonymous function runs when user clicks on tab.
  $this.on("click", ".tab-control", function(e)
  {
    // Prevent link default behavior.
    e.preventDefault();
    // Stores the current link.
    var $link = $(this);
    // Get href of current tab
    var id = this.hash;

    // If not currently active
    if (id && !$link.is(".active"))
    {
      // Make panel inactive
      $panel.removeClass("active");
      // Make tab inactive
      $tab.removeClass("active");

      // Make new panel active
      $panel = $(id).addClass("active");
      // Make new tab active
      $tab = $link.parent().addClass("active");
    }
  });
});
