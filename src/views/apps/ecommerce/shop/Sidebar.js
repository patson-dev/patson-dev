import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import Slider from "rc-slider";
import { Check } from "react-feather";
import Radio from "../../../../components/@dev/radio/RadioDev";
import Checkbox from "../../../../components/@dev/checkbox/CheckboxesDev";
import "rc-slider/assets/index.css";

import "../../../../assets/scss/plugins/extensions/slider.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class ShopSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6 className="filter-heading d-none d-lg-block">Filters</h6>
        <Card>
          <CardBody className="p-2">
            <div className="multi-range-price">
              <div className="multi-range-title pb-75">
                <h6 className="filter-title mb-0">Price Range</h6>
              </div>
              <ul className="list-unstyled price-range">
                <li>
                  <Radio
                    label="$10 - $100"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$100 - $500"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$500&nbsp;+"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="price-slider">
              <div className="price-slider-title mt-1">
                <h6 className="filter-title mb-0">Slider</h6>
              </div>
              <div className="price-slider mt-1">
                <Range
                  min={0}
                  max={500}
                  defaultValue={[100, 250]}
                  tipFormatter={(value) => `${value}%`}
                />
              </div>
            </div>
            <hr />
            <div className="product-categories">
              <div className="product-category-title">
                <h6 className="filter-title mb-1">Categories</h6>
              </div>
              <ul className="list-unstyled categories-list">
                <li>
                  <Radio
                    label="Appliances"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Electronics"
                    defaultChecked={true}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Car Electronics & GPS"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Cell Phones"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="brands">
              <div className="brand-title mt-1 pb-1">
                <h6 className="filter-title mb-0">Brands</h6>
              </div>
              <div className="brand-list">
                <ul className="list-unstyled brand-list">
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Insignia™"
                      defaultChecked={false}
                    />
                    <span>746</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Samsung"
                      defaultChecked={false}
                    />
                    <span>633</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Metra"
                      defaultChecked={false}
                    />
                    <span>591</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="HP"
                      defaultChecked={false}
                    />
                    <span>530</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Apple"
                      defaultChecked={false}
                    />
                    <span>442</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="clear-filters">
              <Button.Ripple
                block
                className="btn-block square font-mono"
                color="primary"
              >
                CLEAR FILTERS
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ShopSidebar;
