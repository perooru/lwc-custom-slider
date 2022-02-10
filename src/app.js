import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

   myValue = 2; 

    handleChange(event) {
        this.myValue = event.detail.value;
    }

}
