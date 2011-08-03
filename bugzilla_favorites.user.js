// ==UserScript==
// @name           Bugzilla Favorites
// @namespace      bugzilla.favs
// @description    Display Bugzilla favorites as separte links, instead of a drop down list
// @include        https://bugzilla.tool.1and1.com/
// ==/UserScript==

var favsMenu = document.getElementById('shortcut_options_bookmarkMenu');
var favs = favsMenu.getElementsByTagName('ul')[0].getElementsByTagName('a');
for (var i = 0; i < favs.length; i++) {
	if (favs[i].href.match('dorem')) {
		continue;
	}
	
	title = document.createElement('small');
	title.appendChild(document.createTextNode(favs[i].textContent));
	
	image = document.createElement('img');
	image.setAttribute('width', '22');
	image.setAttribute('height', '22');
	image.setAttribute('border', '0');
	image.setAttribute('src', '/common/image/actions/favorite.png');
	
	link = document.createElement('a');
	link.setAttribute('href', favs[i].href);
	link.appendChild(image);
	
	td = document.createElement('td');
	td.setAttribute('style', 'width:70px;');
	td.setAttribute('valign', 'top');
	td.setAttribute('nowrap', 'nowrap');
	td.appendChild(title);
	td.appendChild(document.createElement('br'));
	td.appendChild(link);
	
	favsMenu.parentNode.parentNode.insertBefore(td, favsMenu.parentNode.nextSibling);
	favsMenu.parentNode.setAttribute('style', 'display:none;');
}
