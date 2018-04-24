# Save Blob

A simple blob saver. This discription is under construction.

## Installation

Just place the following line somewere in your index.html:
```html
<script src='https://unpkg.com/save-blob-component@0.0.18/dist/saveblobcomponent.js'></script>
```

### Angular/Ionic Framework

You should import CUSTOM_ELEMENTS_SCHEMA in your _app.module.ts_ file:
```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
```

## Usage

Then in your page markup file (i.e. my-page.html, or contacts.html or whatever markup file you need) call to component like this:
```html
<file-downloader url="http://example.com/some-image.jpg" fileName="some image" opts="{method:'get', headers: [{'Access-Control-Allow-Origin':'*'}]}"></file-downloader>
```
Parameters:
    * url: an url you want to download file from
    * fileName: the name of a file. File will be placed to your specified location with this name
    * opts: request options such as method and request headers. You can provide authentication information like access token if needed

Simpliest form (without options) is:
```html
<file-downloader url="http://example.com/some-image.jpg" fileName="some image"></file-downloader>
```

To be continued