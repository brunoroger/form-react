import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as RequestFactory  from './factory/requestFactory';
import './App.css';

const App = () => {

  const handleSubmit = async(obj) => {
    try{
      const res = await RequestFactory.add(obj);

      console.log(res.data);
    }catch(e){
      console.log('error');
    }
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={
      {
        email: '',
        name: ''
      }
    }>
      <Form>
        <Field className="form-control" type="text" name="email" placeholder="Email" />
        <br/>
        <Field className="form-control" type="text" name="name" placeholder="Name" />
        <br/>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
