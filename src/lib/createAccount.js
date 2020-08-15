export const createAccount = ({ name } = {}) => ({
    name,
    assets : [],
    addAsset({ asset }){
        this.assets = [...this.assets, asset]
    },
    removeAsset({ targetId }){
        this.assets = this.assets.filter(({ id })=> id !== targetId)
    },
    clearAllAssets(){
        this.assets = []
    },
    updateName({ name }){
        this.name = name
    }
})



