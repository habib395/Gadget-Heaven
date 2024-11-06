// get all coffee from local storage

import toast from "react-hot-toast"

    const getAllFavorites = () => {
        const all = localStorage.getItem('favorites')

        if(all){
            const favorites = JSON.parse(all)
            return favorites
        }else{
            console.log([])
            return []
        }
    }

// add a coffee to local storage
const addFavorite = item => {
    // get all previously saved coffee data
    const favorites = getAllFavorites()
    const isExist = favorites.find(type => type.product_id == item.product_id)
    // console.log(item, item.product_id)
    if(isExist) return toast.error('Items Already Exist!');
    
    favorites.push(item)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully Added!');
}

// remove a coffee from local stroage

export { addFavorite, getAllFavorites }







































// // get all computer from local storage

// const getAllComputer = () =>{
//     const all = localStorage.getItem('computers')
//     if(all){
//         const favorites = JSON.parse(all)
//         console.log(favorites)
//         return favorites
//     }else{
//         console.log([])
//         return []
//     }
    
// }


// // add a computer from local storage

// const addComputer = item => {
//     // get all previously saved computer data
//     const computers = getAllComputer()
//     const isExits = computers.find(type => type.id == item.id)
//     if(isExits) return alert('Already Exits')
        
//      computers.push(item)
//      localStorage.setItem('computers', JSON.stringify(computers))
// }

// // remove a computer from local storage
// export { addComputer, getAllComputer }