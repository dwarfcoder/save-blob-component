import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'file-downloader',
  styleUrl: 'file-downloader.css',
  shadow: true
})
export class SaveBlobComponent {

  @Prop() url: string;
  @Prop() filename: string;
  @Prop() opts: any;

  @Method()
  async makeRequest(url: string, options) {
    if(!url){
      throw new Error('No url provided');
    }

    try{
      var response = await fetch(url, options || {});
      if(response.ok){
        let blob = await response.blob();
        return blob;
      }

      throw new Error(response.statusText);
    }
    catch(err){
      throw err;
    }
  }

downloadFile(/*event: UIEvent*/){
    this.makeRequest(this.url, this.opts)
    .then((blob) => {
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // In case of IE or Edge
        this.filename = escape(this.filename);
        window.navigator.msSaveOrOpenBlob(blob, this.filename);
        return;
      }

      var a = document.createElement("a");
      document.body.appendChild(a);
      //a.style = "display: none";
      
      let url = URL.createObjectURL(blob);
      a.href = url;
      a.download = this.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    if(this.url === undefined){
      return null;
    }

    let title = this.filename || 'Download';

    return (
      <div><button onClick={this.downloadFile.bind(this)}>{title}</button></div>
    );
  }
}
