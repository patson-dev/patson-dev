import React from "react"
import { CardBody, Button } from "reactstrap"

const LoginAuth0 = props => {

  return (
    <React.Fragment>
      <CardBody className="pt-1 pb-3">
        <Button.Ripple
          color="primary"
          className="mt-1"
        >
          Login With Auth0
        </Button.Ripple>
      </CardBody>
    </React.Fragment>
  )
}
export default LoginAuth0
