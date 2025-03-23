'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import toast from "react-hot-toast";

const Apply = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const applyForCode = async ({price, title, slug}) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('user_name', session.user.name);
      formData.append('user_email', session.user.email);
      formData.append('user_no', session.user_no);
      formData.append('user_id', session.user.id);
      formData.append('slug', slug);

      const response = await fetch(`${apiUrl}/apply-for-code.php`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.Success === 'true') {
        toast.success('You have applied successfully!');
        router.push(`/book-code`);
      } else if (data.Success === 'Already') {
        toast.error('You have already applied!');
        router.push(`/book-code`);
      } else {
        setError('Failed to apply for code.');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <p style={{ textAlign: 'center', backgroundColor: '#ecf2fc', color: '#19b2ee', padding: '4px' }}>
              {title} {data.price} <span onClick={() => applyForCode('all-books')} > Get All Code</span>
        </p>
    </>
  );
};

export default Apply;
