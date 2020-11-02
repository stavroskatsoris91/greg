interface taValidate {
    ():void,
    
  }
interface Window {
    taValidate: taValidate,
    taOnLoad(event):void
  }