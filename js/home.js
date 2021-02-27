$(document).ready(function () {

    $("a[href^='#']").on('click', function (e) {
        e.preventDefault()
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          1000,
          'swing'
        )
      })

    var about = new Waypoint.Inview({
        element: $('#aboutsection')[0],
        entered: function(direction) {
            $('#aboutanchor').addClass('active');
        },
        exited: function(direction) {
            $('#aboutanchor').removeClass('active');
        }
    })

    var education = new Waypoint.Inview({
        element: $('#educationsection')[0],
        entered: function(direction) {
            $('#educationanchor').addClass('active');
        },
        exited: function(direction) {
            $('#educationanchor').removeClass('active');
        }
    })

    var experience = new Waypoint.Inview({
        element: $('#experiencesection')[0],
        entered: function(direction) {
            $('#experienceanchor').addClass('active');
        },
        exited: function(direction) {
            $('#experienceanchor').removeClass('active');
        }
    })

    var about = new Waypoint.Inview({
        element: $('#skillssection')[0],
        entered: function(direction) {
            $('#skillsanchor').addClass('active');
        },
        exited: function(direction) {
            $('#skillsanchor').removeClass('active');
        }
    })

});