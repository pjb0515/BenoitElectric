function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function createCORSRequest(method, url)
{
	return createCORSRequestWithDataType(method, url, "x-www-form-urlencoded");
}

function createCORSRequestWithDataType(method, url, dataType)
{
  var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr)
	{
		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open(method, url, true);
	}
	else if (typeof XDomainRequest != "undefined")
	{
		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	}
	else
	{
		// Otherwise, CORS is not supported by the browser.
		xhr = null;
	}

	xhr.setRequestHeader("Content-type","application/"+dataType);
   
   var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
	xhr.setRequestHeader("X-CSRF-Token", AUTH_TOKEN);

	return xhr;
}


$( document ).on('turbolinks:load', function() {
  $('.carousel').carousel();
  
});