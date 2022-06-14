import React, {useState} from 'react'

function AddItem({onSubmitNewItem}) {
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/listings', {
      method:'POST',
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({
        description: description,
        location: location,
        image: image,
      }),
    })
    .then(resp => resp.json())
    .then(data => onSubmitNewItem(data))
  };

  return (
    <div className= "new-item-container">
      <h2>Add free item</h2>
      <form className='new-item'>
        <input
          type="text"
          id="description"
          name="description"
          placeholder='Add item description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          id="location"
          name="location"
          placeholder='Add item location'
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          id="image"
          name="image"
          placeholder='Add item image link'
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit new Item</button>
      </form>
    </div>
  )
}

export default AddItem