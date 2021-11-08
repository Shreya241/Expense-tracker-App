import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categories } from "../../Constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";
import "./addForm.css";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Enter valid Data!");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        ></input>
      </div>

      <div className="form-item">
        <label>Amount</label>
        <input
          className="amount-input"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        ></input>
      </div>

      <div className="Category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <lable>{category.title}</lable>
                  <img src={category.icon.default} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <lable>Add</lable>
          <i class="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
