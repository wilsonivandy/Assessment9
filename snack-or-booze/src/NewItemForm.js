import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
import './NewItemForm.css'

/** Form for creating a new item to add to snacks or drinks.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewItemForm = ({ addItem }) => {

// Initialize States

  const INITIAL_STATE = { name: "", description: "", recipe: "", serve: ""};
  const INITIAL_TYPE = {type: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [type, setType] = useState(INITIAL_TYPE);

 /** Update states w/ initial state upon form submission */

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData, type.type);
    alert(`Submitted!`);
    setFormData(INITIAL_STATE);
    setType(INITIAL_TYPE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  const handleTypeChange = evt => {
    const { name, value }= evt.target;
    setType({[name]: value});
  };

   /** Check whether all fields have been filled. If true, then render button */

  function isFilled() {
    //   console.log("checking if filled");
      let formValues = Object.values(formData);
      let typeValue = Object.values(type);
      let allValues = formValues.concat(typeValue);
      let filled = true;
      for (let i=0; i<allValues.length ; i++) {
          if (allValues[i] === "") {
              filled = false;
          }
      }

      if (filled) {
        return(
            <div className="form-fields">
                <button className="inputSlot">Add {type.type}!</button>
            </div>
        )
      }
  }

  /** render form */

  return (
    <section>
    <Card>
    <CardBody>
        <CardTitle className="font-weight-bold text-center">
        Add an Item!
        </CardTitle>
        <p className="italics">*Fill in form to add*</p>
        <form onSubmit={handleSubmit} className="form-master">
            <div className="form-fields" >
                <label htmlFor="type" className="form-label">Type:</label>
                <select name="type" id="type" className="inputSlot" value={type.type} onChange={handleTypeChange}>
                    <option>Choose Type:</option>
                    <option value="Snack">Snack</option>
                    <option value="Drink">Drink</option>
                </select>
            </div>

            <div className="form-fields">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                id="name"
                name="name"
                className="inputSlot"
                value={formData.name}
                onChange={handleChange}
                />
            </div>

            <div className="form-fields">
                <label htmlFor="description" className="form-label">Description:</label>
                <input
                id="description"
                name="description"
                className="inputSlot"
                value={formData.description}
                onChange={handleChange}
                />
            </div>

            <div className="form-fields">
                <label htmlFor="recipe" className="form-label">Recipe:</label>
                <input
                    id="recipe"
                    name="recipe"
                    className="inputSlot"
                    value={formData.recipe}
                    onChange={handleChange}
                />
            </div>

            <div className="form-fields">
                <label htmlFor="serve" className="form-label">Serve:</label>
                <input
                    id="serve"
                    name="serve"
                    className="inputSlot"
                    value={formData.serve}
                    onChange={handleChange}
                />
            </div>

            {isFilled()}
        </form>

    </CardBody>
    </Card>
    </section>
  );
};

export default NewItemForm;
