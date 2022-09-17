import {  minValue } from "vuelidate/lib/validators";

export default {
  validations: {
    form: {
      adultCount: {
        minValue: minValue(1),
      },
    
    },
  },
}