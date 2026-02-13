import React, { useState, useEffect, useRef } from 'react';

import '../Admindashboard/Admindashboard.css'
import d1 from '../../assets/d1.jpg'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import Card from '../Card/Card';
import axiosClient from '../../utills/client.js'


function Admindashboard() {
    const fileInputRef = useRef(null);

    const [products, setProducts] = useState([]);
    const handleDelete = async (id) => {
        try {
            const res = await axiosClient.delete(`/api/product/${id}`);
            if (res.status === 200) {
                alert('Course deleted successfully!');
                setProducts(prevProducts =>
                    prevProducts.filter(product => product._id !== id)
                );

            } else {
                alert('Failed to delete course');
            }
        }
        catch (err) {
            console.error(err);
            alert('Something went wrong!');
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosClient.get('/api/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

    }, []);
    const [name, setName] = useState('');
    const [tutor, setTutor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [file, setFile] = useState(null);


    const create = async () => {
        if (!name || !tutor || !price || !category || !img || !file) {
            alert("Please fill in all fields before creating the course!");
            return; // stop the function
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('tutor', tutor);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('img', img);
        formData.append('file', file);


        try {
            const res = await axiosClient.post('/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.status === 200 || res.status === 201) {
                const newProduct = res.data;

                setProducts(prev => [...prev, newProduct]);
                alert('Course created successfully!');
                setName('');
                setTutor('');
                setPrice('');
                setCategory('');
                setImg('');
                setFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                alert('Failed to create course');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong!');
        }
    };
    return (
        <div>
            <Navbar />
            <div className='olp'>Add a Course</div>
            <input
                type="text"
                className='email-input1'
                placeholder='Enter Name of The Course'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                className='email-input1'
                placeholder='Enter the Tutor of The Course'
                value={tutor}
                onChange={(e) => setTutor(e.target.value)}
            />
            <br />
            <input
                type="number"
                className='email-input1'
                placeholder='Enter the Price of The Course'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <select className='email-input2' defaultValue="" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>
                    Select the Category of the Course
                </option>
                <option value="Artificial Intelligence  (AI)">Artificial Intelligence (AI)
                </option>
                <option value="Python">Python</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="AI Agents and Agentic AI">AI Agents and Agentic AI</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Amazon AWS">Amazon AWS</option>
            </select>
            <br />
            <div className='upload-img'>Upload a Course Image</div>
            <input
                type="text"
                className='email-input1'
                placeholder='Enter the URL of The Image'
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            <br />
            <div className='upload-file'>Upload a Course File</div>
            <input
                type="file"
                className='email-input1'
                placeholder='Upload Course Content'
                ref={fileInputRef}
                accept=".txt"
                onChange={(e) => setFile(e.target.files[0])}
            // onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <button className='create-course-btn' onClick={create} disabled={
                !name ||
                !tutor ||
                !price ||
                !category ||
                !img ||
                !file
            }>Create the Course</button>
            <img src={d1} className='image' />
            <hr className='hre' />
            <div className='iop'>Deleting a Course</div>
            <div className="cards-container">
                {products.length === 0 ? (
                    <p className='bura'>No courses found</p>
                ) : (
                    products.map((product) => (
                    
                            <div className='cardocon'>
                                <Card
                                    key={product._id}
                                    name={product.name}
                                    tutor={product.tutor}
                                    price={product.price}
                                    img={product.img}
                                />
                                <button className='delete-icon' key={product._id} onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                      
                    ))
                )}
            </div>



        </div>
    )
}

export default Admindashboard
