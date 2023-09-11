// import React from "react";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup'



// const schema = Yup.object().shape({
//   name: Yup.string().max(15, "Name must be less than 15 characters").required("Please enter your name"),
// });
// // .matches(/^\d{10}$/, "Phone number must be 10 digits")


// function Form() {

//   // const { register, handleSubmit, error } = useForm({
//   //   mode: "onBlur",
//   //   resolver: yupResolver(schema),
//   // });

//   const { register, handleSubmit ,errors} = useForm({ resolver: yupResolver(schema) });


//   const onFormSubmit = (data) => {
//     console.log(data);
//   };


//   return (
//     <div className="container">
//       <h1>Simple Form</h1>
//       <form onSubmit={handleSubmit(onFormSubmit)}>
//         <input type="text" {...register('name')} name="name" />
// <p>{errors.name && <h3>{errors.name.message}</h3>}</p>



// <input type="submit" value={"sub"} />

//       </form>

//     </div>
//   );
// }

// export default Form;


// import React from "react"; // Import React
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// // Create a validation schema using Yup
// const schema = Yup.object().shape({
//   name: Yup.string()
//     .max(15, "Name must be less than 15 characters")
//     .required("Please enter your name"),
// });

// // Create a form component using react-hook-form
// function Form() {
//   // Define register and handleSubmit properties
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   });

//   // Handle form submission
//   const onFormSubmit = (data) => {
//     console.log(data);
//   };

//   // Return JSX element
//   return (
//     <div className="container">
//       <h1>Simple Form</h1>
//       <form onSubmit={handleSubmit(onFormSubmit)}>
//         <label>Name:</label> {/* Add a label */}
//         <input
//           type="text"
//           {...register("name")}
//           name="name"
//           placeholder="Enter your name" // Add a placeholder
//         />
//         {/* <p>{errors.name && <h3>{errors.name?.message}</h3>}</p> */}

//         <h3>{errors.name?.message}</h3>

//         <input type="submit" value={"sub"} />
//       </form>
//     </div>
//   );
// }

// export default Form;



// import React from "react"; // Import React
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// // Create a validation schema using Yup
// const schema = Yup.object().shape({
//   name: Yup.string()
//     .max(15, "Name must be less than 15 characters")
//     .required("Please enter your name"),
// });

// // Create a form component using react-hook-form
// function Form() {
//   // Define register and handleSubmit properties
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   });

//   // Handle form submission
//   const onFormSubmit = (data) => {
//     console.log(data);
//   };

//   // Return JSX element
//   return (
//     <div className="container">
//       <h1>Simple Form</h1>
//       <form onSubmit={handleSubmit(onFormSubmit)}>
//         <label>Name:</label> {/* Add a label */}
//         <input
//           type="text"
//           {...register("name")}
//           name="name"
//           placeholder="Enter your name" // Add a placeholder
//         />


//         <h3>{errors.name && errors.name.message}</h3> {/* Use logical AND operator */}

//         <input type="submit" value={"sub"} />
//       </form>
//     </div>
//   );
// }

// export default Form;
