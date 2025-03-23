'use client'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

function UpdateUrlComponent(props) {
    const router = useRouter();
    const pathname = usePathname()
    const [inputValue, setInputValue] = useState(props.search);

    const updateUrl = () => {
        const newSearch = encodeURIComponent(inputValue);
        const pathnameParts = pathname.split('/');
        const basePath = pathnameParts.slice(0, 3).join('/'); // e.g., '/search/february-15-2022-afternoon'
        const newUrl = `${basePath}/${newSearch}`;
        router.replace(newUrl);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <center><div style={{ width: '70%' }} className="row  align-items-center">
            <div className="col m-0 p-0">
                <input className='form-control' type="text" value={inputValue} onChange={handleInputChange} style={{ height: '100%' }} />
            </div>
            <div className="col-auto m-0 p-0">
                <button style={{ height: '42px' }} className='btn btn-primary' onClick={updateUrl} ><i className='fa fa-search' ></i></button>
            </div>
        </div>
        </center>
    );
}

export default UpdateUrlComponent;
