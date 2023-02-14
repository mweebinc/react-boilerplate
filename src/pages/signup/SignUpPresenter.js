class SignUpPresenter {
    constructor(view, signUpUseCase, updateObjectUseCase) {
        this.view = view;
        this.signUpUseCase = signUpUseCase;
        this.updateObjectUseCase = updateObjectUseCase;
    }

    submit({email, password, confirmPassword, ...others}) {
        if (password !== confirmPassword) {
            this.view.showError('password must be the same');
            return;
        }
        const user = {
            username: email,
            email,
            password,
            roles: [{id:"OHHT4XSCJG"}],
            ...others
        }
        this.view.showProgress();
        Promise.resolve()
            .then(() => this.signUpUseCase.execute(user))
            .then(() => {
                this.view.hideProgress();
                this.view.showSuccess("Congratulations, your account has been successfully created.")
                    .then(() => {
                        this.view.navigateTo('/');
                    });
            })
            .catch(error => {
                this.view.hideProgress();
                this.view.showError(error);
            });
    }
}

export default SignUpPresenter;
