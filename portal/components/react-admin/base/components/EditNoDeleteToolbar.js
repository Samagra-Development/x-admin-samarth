import React from "react";
import { Toolbar, SaveButton } from "react-admin";
import PropTypes from "prop-types";

const EditNoDeleteToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton disabled={props.pristine} />
  </Toolbar>
);

EditNoDeleteToolbar.propTypes = {
  pristine: PropTypes.bool,
};

export default EditNoDeleteToolbar;
