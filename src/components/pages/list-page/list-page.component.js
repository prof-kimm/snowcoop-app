import MapView from '../../shared/map-view/map-view.component.vue';

export default {
  name: 'listPage',
  components: {
    MapView
  },
  mounted() {
    this.$store.dispatch('GET_ADDRESS_LIST').then(
      (addressList) => {
        this.listItems = addressList;
      }
    );
  },
  data() {
    return {
      listItems: null,
      dialogVisible: false,
      formData: {
        email: null,
        password: null,
      },
      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
        ]
      },
      isFormValidated: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    updateIsFormValidated() {
      const fields = this.$refs.formData.fields;
      this.isFormValidated = fields.reduce((acc, field) => {
        const valid = (field.isRequired && field.validateState === 'success');
        const noError = (!field.isRequired && field.validateState !== 'error');
        return acc && (valid || noError);
      }, true);
    },
    signIn() {
      if (this.isFormValidated) {
        const credentials = {
          email: this.formData.email,
          password: this.formData.password
        };
        this.$store.dispatch('LOG_IN', credentials).then(
          (user) => this.onLoginSuccessful(user),
          (error) => this.onLoginFailed(error)
        );
      }
    },
    onLoginSuccessful(user) {
      if (!user) {
        throw new Error('Something went wrong!');
      }

      this.$router.push('dashboard');
    },

    onLoginFailed(error) {
      /* eslint-disable */
      console.error(error);
    },
  }
};
