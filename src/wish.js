import toast from "react-hot-toast"


    //add all wishlist in local stroage

    const getAllWishes = () =>{
        const all = localStorage.getItem('wishes')

        if(all){
            const wishes = JSON.parse(all)
            return wishes
        }else{
            console.log([]);
            return []
        }
    }


    //add a wish to local storage 
const addWishes = item =>{
    const wishes = getAllWishes()
    const isExist = wishes.find(type => type.product_id == item.product_id)
    if(isExist) return toast.error('Already Exits!')
        const newWishes = [...wishes, item]
    localStorage.setItem('wishes', JSON.stringify(newWishes))
    toast.success('Wish Added Successfully!');
}




const removeWishes = (id) =>{
    const wishes = getAllWishes()
    const remaining = wishes.filter(item => item.product_id != id)
    localStorage.setItem('wishes', JSON.stringify(remaining))
    toast.success('Successfully Removed!')
}


export { getAllWishes , addWishes , removeWishes  }