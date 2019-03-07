// const FormService = {
//   passwordVadlidate(rule, value, callback) {
//     if (value === '') {
//       callback(new Error('Please input the password'));
//     } else {
//       if (this.formData.password !== '') {
//         this.$refs.formData.validateField('password');
//       }
//       callback();
//     }
//   },
//   confirmValidate(rule, value, callback) {
//     if (value === '') {
//       callback(new Error('Please input the password again'));
//     } else if (value !== this.formData.passwordConfirm) {
//       callback(new Error('Two inputs don\'t match!'));
//     } else {
//       callback();
//     }
//   },
// };

// export default FormService;