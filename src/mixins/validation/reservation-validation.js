import { required} from "vuelidate/lib/validators";

export default {
  validations: {
    form: {
      name: {
        required,
      }
    },
  },
}