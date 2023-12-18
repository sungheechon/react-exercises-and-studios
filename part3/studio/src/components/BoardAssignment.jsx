import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         label: "appertizer",
         value: "Appertizer"
      }
      ,
      {
         label: "main",
         value: "Main"
      }
      ,
      {
         label: "dessert",
         value: "Dessert"
      }];

   const [boardName, setName] = useState("no boards yet");

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>

            {boards.map(board => <option value={board.label}>{board.value}</option>)};

         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
