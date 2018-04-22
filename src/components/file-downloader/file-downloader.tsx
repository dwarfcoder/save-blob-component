import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'file-downloader',
  styleUrl: 'file-downloader.css',
  shadow: true
})
export class FileDownloader {

  @Prop() url: string;

  @Method()
  async makeRequest(url: string, options) {
    try{
      var response = await fetch(url, options || {});

      var blob = await response.blob();

      if(response.status === 200){
        return blob;
      }

      throw new Error(response.statusText);
    }
    catch(err){
      throw err;
    }
  }

  render() {
    if(this.url === undefined){
      return null;
    }

    return (
      <div>
        Hello, World! I'm {this.url}
      </div>
    );
  }
}
