import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Checkbox from "../../../../components/@dev/checkbox/CheckboxesDev";
import { Check } from "react-feather";

class CheckboxDev extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dev Checkboxes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use Dev checkbox component and pass in icon, label, checked,
            disabled and class as <code>props</code> to create a Dev Checkbox.
          </p>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Active"
              defaultChecked={true}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Inactive"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Active - disabled"
              defaultChecked={true}
              disabled={true}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Inactive - disabled"
              defaultChecked={false}
              disabled={true}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}
export default CheckboxDev;
