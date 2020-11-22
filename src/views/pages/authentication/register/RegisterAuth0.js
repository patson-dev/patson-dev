import React from "react"
import { Button, CardBody } from "reactstrap"

const RegisterAuth0 = (props) => {
    return (
      <React.Fragment>
      <CardBody className="pt-1 pb-3">
        <Button.Ripple
          color="primary"
          className="mt-1"
        >
          Register With Auth0
        </Button.Ripple>
      </CardBody>
    </React.Fragment>
    )
}

export default RegisterAuth0
