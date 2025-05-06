/**
 * responsible for get the current user other application initialization
 */
class MainPagePresenter {
    constructor(
        view,
        getCurrentUserUseCase,
        signOutUseCase,
        getSchemaUseCase,
        getObjectUseCase
    ) {
        this.view = view;
        this.getCurrentUserUseCase = getCurrentUserUseCase;
        this.signOutUseCase = signOutUseCase;
        this.getSchemaUseCase = getSchemaUseCase;
        this.getObjectUseCase = getObjectUseCase;
    }

    componentDidMount() {
        this.init(); // Uncomment this line
        // this.testInit();
    }

    testInit() {
        // This function is for testing purposes only delete this in actual development
        const user = {name: 'Juan Dela Cruz', email: 'juan.dela.cruz@yahoo.com'};
        this.view.setCurrentUser(user);
        this.view.hideLoading();

    }

    async init() {
        this.view.showLoading();
        try {
            await this.getSchema();
            await this.getUser();
            // get other data here
            this.view.hideLoading();
        } catch (error) {
            this.view.hideLoading();
            switch (error.code) {
                case 401:
                    this.view.navigateTo("/signin");
                    break;
                case 403:
                    this.view.navigateTo("/app");
                    break;
                default:
                    this.view.showError(error);
            }
        }
    }

    async getUser() {
        try {
            const user = await this.getCurrentUserUseCase.execute();
            this.user = user;
            if (!user.roles && !this.user.isMaster) {
                this.view.navigateTo("/denied");
                return;
            }
            this.view.setCurrentRoles(user.roles || []);
            this.view.setCurrentUser(user);
        } catch (error) {
            throw error;
        }
    }


    async getSchema() {
        try {
            const schemas = await this.getSchemaUseCase.execute();
            this.view.setSchemas(schemas);
        } catch (error) {
            throw error;
        }
    }

    onClickSignOut() {
        const options = {
            title: "Confirm",
            message: "Are you sure you want to sign out?",
            positiveButton: "SIGN OUT",
        };

        this.view
            .showDialog(options)
            .then(() => this.signOutUseCase.execute())
            .then(() => {
                this.view.navigateTo("/signin");
            })
            .catch((error) => {
                this.view.showError(error);
            });
    }
}

export default MainPagePresenter;
