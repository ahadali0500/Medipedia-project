export const apiUrl="https://moversdispatch.desired-techs.com";

export const profiledata= async (id)=>{
    try {
        const formData = new FormData();
        formData.append("user_id", id);
        
        const response = await fetch(`${apiUrl}/profile-data.php`, {
            method: 'POST',
            body: formData,
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        //setError('Something went wrong');
        console.log(error)
    }

}

export const SlugToTitle = (slug) => {
    const title = slug
        .split('-') // Split by dashes
        .map(word => {
            // Replace %26 with &
            return word.replace(/%26/g, '&');
        })
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join the words with spaces

    return <>{title}</>;
}



export const bookcode= async (id)=>{
    try {
        const formData = new FormData();
        formData.append("user_id", id);
        const response = await fetch(`${apiUrl}/profile-data.php`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        //setError('Something went wrong');
        console.log(error)
    }

}