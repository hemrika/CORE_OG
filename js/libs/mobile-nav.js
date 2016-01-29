var navigation = responsiveNav(".nav-collapse", {
  animate: true,                    // Boolean: Use CSS3 transitions, true or false
  transition: 500,                  // Integer: Speed of the transition, in milliseconds
  label: "Menu",                    // String: Label for the navigation toggle
  insert: "before",                 // String: Insert the toggle before or after the navigation
  customToggle: "",                 // Selector: Specify the ID of a custom toggle
  enableFocus: true,
	enableDropdown: true,
	openDropdown: '<span class="screen-reader-text">Open sub menu</span>',
	closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',
  closeOnNavClick: true,            // Boolean: Close the navigation when one of the links are clicked
  openPos: "relative",              // String: Position of the opened nav, relative or static
  navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
  jsClass: "js-nav",                // String: 'JS enabled' class which is added to <html> element
});