chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    return {
      responseHeaders: details.responseHeaders.filter(function(header) {
        return (header.name.toLowerCase() !== 'x-frame-options');
      })
    };
  }, {
    urls: ["https://web.whatsapp.com/"]
  }, ["blocking", "responseHeaders"]);