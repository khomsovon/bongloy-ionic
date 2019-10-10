import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public access_token = "";
  public error = "";

  constructor(platform: Platform, private stripe: Stripe) {

    platform.ready().then(() => {

      this.stripe.setPublishableKey('pk_test_56b6630429c92062953adac23cd7420386e55ce60eb465cd0ad3ab226c09eb6a');

      let card = {
       number: '6200000000000005',
       expMonth: 12,
       expYear: 2020,
       cvc: '220'
      };

      this.stripe.createCardToken(card)
        .then(token => {
          this.access_token = token.id;
        })
        .catch(error => {
          this.error = error;
        });

    });
  }
}


