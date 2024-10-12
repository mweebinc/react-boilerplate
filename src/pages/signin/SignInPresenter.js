class SignInPresenter {
  constructor(view, signInUseCase) {
    this.view = view;
    this.signInUseCase = signInUseCase;
    this.change = {};
  }

  onChange(value, field) {
    this.change[field] = value;
  }

  async submit() {
    try {
      const user = {
        ...this.change,
      };
      this.view.showProgress();
      const signedInUser = await this.signInUseCase.execute(user);

      this.view.navigateTo("/");
      this.view.reload();
    } catch (error) {
      this.view.hideProgress();
      this.view.showError(error);
    }
  }
}

export default SignInPresenter;
