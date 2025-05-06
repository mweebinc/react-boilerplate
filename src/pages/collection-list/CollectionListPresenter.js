import BaseListPresenter from "../../base/BaseListPresenter";

class CollectionListPresenter extends BaseListPresenter {
    constructor(view,
                findObjectUseCase,
                countObjectUseCase,
                deleteObjectUseCase,
                upsertUseCase) {
        super(view, findObjectUseCase, deleteObjectUseCase);
        this.findObjectUseCase = findObjectUseCase;
        this.countObjectUseCase = countObjectUseCase;
        this.deleteObjectUseCase = deleteObjectUseCase;
        this.upsertUseCase = upsertUseCase;
    }

    componentDidUpdate(prevProps) {
        const prevClassName = prevProps.params.name;
        const newClassName = this.view.getCollectionName();
        //if collection change
        if (prevClassName !== newClassName) {
            this.init();
            this.getObjects();
        }
    }
    onClickImport() {

    }
    onClickExport() {

    }

}

export default CollectionListPresenter;
