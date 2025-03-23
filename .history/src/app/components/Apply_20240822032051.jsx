'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import toast from "react-hot-toast";
import { apiUrl } from '../config/constant';

const Apply = ({price, title, slug}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const applyForCode = async () => {
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
        toast.success('You have applied successfully for ahad!');
        router.push(`/book-code`);
      } else if (data.Success === 'Already') {
        toast.error('You have already applied for ahad!');
        // router.push(`/book-code`);
      } else {
        setError('Failed to apply for ahad');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong with ahad.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <p style={{ textAlign: 'center', backgroundColor: '#ecf2fc', color: '#19b2ee', padding: '4px' }}>
              {title} {price} <b><span  style={{cursor:'pionter'}} onClick={() => applyForCode()} > Get All Code </span></b>
        </p>
    </>
  );
};

export default Apply;
