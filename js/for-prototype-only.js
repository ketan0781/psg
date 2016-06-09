function for_prototype_only() {

document.write ('<b>Annotations</b>');
document.write ('<ul>');
document.write ('	<li>When hovering over a link in the main nav that has sub-navigation (ie. Prescriptions), the arrow pointing down (next to the link) is hidden.');
document.write ('	<li> The hover and active state of a link in the main nav has a red background with a triangle pointing up that is centered and on the bottom of that link area.');
document.write ('	<li> When Register/Sign-In appears in the black navigation bar, there is a hover state  ');
document.write ('	<li> All links in header and footer have a hover state  ');
document.write ('	<li> The breadcrumb changes were limited to updating the breadcrumb.css and removing " » " from the span tag ');
document.write ('	<li> There is an IE8 style sheet (css/global-nav-IE8.css) to allow for backgrounds, etc. in that browser.');
document.write ('</ul>');
document.write ('<b>Phase 1</b>');
document.write ('<ul>');
document.write ('	<li><a href="index.html">Home : Non-Authenticated / Non-Remembered</a> ');
document.write ('	<li><a href="post-home.html">Post-Home : Non-Authenticated / Non-Remembered</a> ');
document.write ('	<li><a href="sub-authenticated.html">Post-Home : Authenticated</a> ');
document.write ('	<li><a href="index-cobranded.html">Co-Branded</a> ');
document.write ('</ul>');
document.write ('<b>Phase 2</b>');
document.write ('<ul>');
document.write ('	<li><a href="index-remembered.html">Home : Non-Authenticated / Remembered</a> ');
document.write ('	<li><a href="post-home-remembered.html">Post-Home : Non-Authenticated / Remembered</a> ');
document.write ('	<li><a href="checkout.html">Checkout Pages</a> ');
document.write ('	<li><a href="registration.html">Registration Pages</a> ');
document.write ('</ul>');

}