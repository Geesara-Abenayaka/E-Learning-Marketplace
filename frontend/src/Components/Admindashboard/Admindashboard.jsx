import React, { use, useState, useEffect } from 'react'
import '../Admindashboard/Admindashboard.css'
import d1 from '../../assets/d1.jpg'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import Card from '../Card/Card';


function Admindashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/product');
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
        const formData = new FormData();
        formData.append('name', name);
        formData.append('tutor', tutor);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('img', img);
        formData.append('file', file);

        try {
            const res = await fetch('http://localhost:5000/api/product', {
                method: 'POST',
                body: formData,
            });
            if (res.ok) {
                alert('Course created successfully!');
                setName('');
                setTutor('');
                setPrice('');
                setCategory('');
                setImg('');
                setFile(null);
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

                accept=".txt"
                onChange={(e) => setFile(e.target.files[0])}
            // onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <button className='create-course-btn' onClick={create}>Create the Course</button>
            <img src={d1} className='image' />
            <hr className='hre' />
            <div className='iop'>Deleting a Course</div>
            <div className="cards-container">
                {products.length === 0 ? (
                    <p>No courses found</p>
                ) : (
                    products.map((product) => (
                        <Card
                            key={product._id}
                            name={product.name}
                            tutor={product.tutor}
                            price={product.price}
                            img={product.img}
                        />
                    ))
                )}
            </div>



        </div>
    )
}

export default Admindashboard
