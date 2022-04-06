import React from "react";
import { Formik, Form, Field } from "formik";

interface ShipmentModalProps {}

const ShipmentModal: React.FunctionComponent<ShipmentModalProps> = (props) => {
    const initialValues = {

    }

    const handleSubmit = (value: any) => {

    }

  return <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
            return <Form>
                
            </Form>
        }}
      </Formik>
  </div>;
};

export default ShipmentModal;
