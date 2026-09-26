// Opens a blank tab and injects the TitaniumNetwork Ultraviolet docs page into an iframe.
(function () {
  const targetUrl = 'https://docs.titaniumnetwork.org/proxies/ultraviolet';

  const popup = window.open('about:blank', '_blank');

  if (!popup) {
    console.error('Popup blocked. Allow popups and run this again.');
    return;
  }

  const doc = popup.document;
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ultraviolet Proxy</title>
        <style>
          html, body {
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
          }

          iframe {
            width: 100vw;
            height: 100vh;
            border: 0;
            display: block;
            background: white;
          }
        </style>
      </head>
      <body>
        <iframe
          src="${targetUrl}"
          title="Ultraviolet Proxy"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
        ></iframe>
      </body>
    </html>
  `;

  doc.open();
  doc.write(html);
  doc.close();
})();
