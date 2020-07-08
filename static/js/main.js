<script type="text/javascript">
	console.log("entrando");
    jQuery(function($) {
      $(document).ready(function() {
        //enabling stickUp on the '.navbar-wrapper' class
		console.log("me ejecuto...");
        $('.navbar-wrapper').stickUp({
          parts: {
            0: 'banner',
            1: 'aboutus',
            2: 'specialties',
            3: 'gallery',
            4: 'feedback',
            5: 'contact'
          },
          itemClass: 'menuItem',
          itemHover: 'active',
          topMargin: 'auto'
        });
      });
  </script>
  