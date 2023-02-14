import { useEffect, useState } from 'react';
import CategoryList from '../components/Categories/CategoryList';
import Heading from '../components/Heading';
import { toast } from 'react-toastify';
import CategoryCreate from '../components/Categories/CategoryCreate';
import CategoryEdit from '../components/Categories/CategoryEdit';
import axios from 'axios';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { useSearchParams } from 'react-router-dom';

export default function Categories() {
  const { setModalShow, setModalContent, setModalTitle } = useContext(ModalContext);
  const [categories, setCategories] = useState([]);
  const params = useSearchParams();

  useEffect(() => {
    axios
      .get('http://localhost:8000/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Алдаа гарлаа');
      });
    console.log(params[0].get('page'));
  }, []);

  const afterSubmit = (category) => {
    setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalTitle('Category nemeh');
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    let newCategories = categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setCategories(newCategories);
  };

  const showEditModal = (category) => {
    setModalContent(<CategoryEdit category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoryList items={categories} onEdit={showEditModal} />
      </div>
    </>
  );
}npm install @mui/material @emotion/react @emotion/styled

