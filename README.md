# Telescope Jumbotron Plugin

A simple plugin that lets you add a configurable [Jumbotron][2] and nicely show categories as card UI with their sub-categories to your [Telescope][1] site.  

Example: http://invent.healthcare.meteor.com/


## Install

```bash
meteor add decent10cs:telescope-jumbotron
```

## Quick Start
	1. Login as admin
  	2. Go to http://www.yoursite/admin/settings click on categories link shows in right side of the page or just type  http://www.yoursite/admin/categories url
  	3. Create new category and make sure to checked `trending` checbox if you want to show the category on main screen. Incase of old category  check the trending property and submit.
  
## Customization

Once logged in as an admin, you should see a small tab at the top right of the page that will toggle the Jumbotron configuration window.  You can configure the background image, main and secondary headings and even add imags as heading, some additional HTML (appears below the main headings), and some custom CSS.  

Note that any styles entered in the custom CSS box can effect the site globally, so make sure to be specific enough with your selectors.  Also note that those styles will only be applied on routes where the Jumbotron banner is on the page (currently only the post list). And when you turn the Jumbotron off with the switch on the overlay, the custom CSS will be disabled as well.

If you'd like to customize the Jumbotron with your own CSS, the markup essentially looks like this...

```html
<section class="jumbotron" style="background-image: url('Hero image URL')">
  <div class="jumbotron-inner">
    <div class="copy">
      <h1>Main Heading</h1>
      <h3>Secondary Heading</h3>
      <!-- Extra HTML inserted here -->
    </div>
  </div>
</section>
```


## Future
Feature suggestions and pull requests welcome!  Troubles?  Drop me a line [on Github][4].

[1]: http://www.telescopeapp.org/
[2]: http://www.w3schools.com/bootstrap/bootstrap_jumbotron_header.asp
[3]: https://atmospherejs.com/telescope/core
[4]: https://github.com/biologio/biolog-jumbotron