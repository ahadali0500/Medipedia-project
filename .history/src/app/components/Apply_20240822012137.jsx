import React from 'react'
import { useSession } from "next-auth/react";

export default function Apply() {

    const [loading2, setLoading2] = useState(false);

    const applyForCode = async (slug) => {
        setLoading2(true);
        try {
            const formData = new FormData();
            formData.append("user_name", session.user.name);
            formData.append("user_email", session.user.email);
            formData.append("user_no", session.user_no);
            formData.append("user_id", session.user.id);
            formData.append("slug", slug);

            const response = await fetch(`${apiUrl}/apply-for-code.php`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data)
            if (data.Success == "true") {
                toast.success('You have applied  successfully!');
                router.push(`/book-code`)
            } else if (data.Success == "Already") {
                toast.error('You have already applied!');
                router.push(`/book-code`)
            } else {
                setError('applying for code is  failed');
            }
        } catch (error) {
            console.log(error)
            setError('Something went wrong');
        }
        setLoading2(false);
    }
    return (
        <div>

        </div>
    )
}
