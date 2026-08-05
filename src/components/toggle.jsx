import React from "react";

// show and hide the table using toggle button

const Toggle = () => {
  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <table
        style={{
          border: "1px solid black",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "lightblue",
          color: "black",
          
        }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {show && (
          <>
            <tr>
              <td>tofiq</td>
              <td>tofiq@gmail.com</td>
              <td>21</td>
            </tr>
            <tr>
              <td>vinayak</td>
              <td>vinayak@gmail.com</td>
              <td>20</td>
            </tr>
          </>
        )}
      </table>
      <br />

      <button
        onClick={toggle}
        style={{ backgroundColor: "black", color: "white", border: 2 }}
      >
        toggle table
      </button>
    </>
  );
};

export default Toggle;
