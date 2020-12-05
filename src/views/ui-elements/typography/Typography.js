import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";
import NativeFontStack from "./NativeFontStack";
import HTMLHeadings from "./HTMLHeadings";
import LightBoldHeadings from "./LightBoldHeadings";
import CustomizingHeadings from "./CustomizingHeadings";
import HeadingColors from "./HeadingColors";
import DisplayHeadings from "./DisplayHeadings";
import BlockquoteDefault from "./BlockquoteDefault";
import NamingSource from "./NamingSource";
import BlockquoteStyling from "./BlockquoteStyling";
import BlockquoteAvatar from "./BlockquotesAvatar";
import ListUnstyled from "./ListUnstyled";
import ListUnordered from "./ListUnordered";
import ListOrdered from "./ListOrdered";
import ListIcons from "./ListIcons";
import ListInline from "./ListInline";
import DescriptionList from "./DescriptionList";
import DescriptionListVertical from "./DescriptionListVertical";
import DescriptionListText from "./DescriptionListText";

class Typography extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Typography"
          breadCrumbParent="Content"
          breadCrumbActive="Typography"
        />
        <Row>
          <Col sm="12">
            <NativeFontStack />
          </Col>
          <Col md="6" sm="12">
            <HTMLHeadings />
          </Col>
          <Col md="6" sm="12">
            <LightBoldHeadings />
          </Col>
          <Col md="6" sm="12">
            <CustomizingHeadings />
          </Col>
          <Col md="6" sm="12">
            <HeadingColors />
          </Col>
          <Col sm="12">
            <DisplayHeadings />
          </Col>
          <Col sm="12" className="mt-1">
            <div className="group-area">
              <h4>BlockQuotes</h4>
              <p>
                For quoting blocks of content from another source within your
                document. Wrap{" "}
                <code>&ltblockquote className="blockquote"&gt</code> around any
                HTML as the quote.
              </p>
              <hr />
            </div>
          </Col>
          <Col md="6" sm="12">
            <BlockquoteDefault />
          </Col>
          <Col md="6" sm="12">
            <NamingSource />
          </Col>
          <Col md="6" sm="12">
            <BlockquoteStyling />
          </Col>
          <Col md="6" sm="12">
            <BlockquoteAvatar />
          </Col>
          <Col sm="12" className="mt-1">
            <div className="group-area">
              <h4>Lists</h4>
              <hr />
            </div>
          </Col>
          <Col md="4" sm="12">
            <ListUnstyled />
          </Col>
          <Col md="4" sm="12">
            <ListUnordered />
          </Col>
          <Col md="4" sm="12">
            <ListOrdered />
          </Col>
          <Col md="6" sm="12">
            <ListIcons />
          </Col>
          <Col md="6" sm="12">
            <ListInline />
          </Col>
          <Col sm="12" className="mt-1">
            <div className="group-area">
              <h4>Description list alignment</h4>
              <p>
                Align terms and descriptions horizontally by using our grid
                system’s predefined classes (or semantic mixins). For longer
                terms, you can optionally add a <code>.text-truncate</code>{" "}
                class to truncate the text with an ellipsis.
              </p>
              <hr />
            </div>
          </Col>
          <Col md="8" sm="12">
            <DescriptionList />
          </Col>
          <Col md="4" sm="12">
            <DescriptionListVertical />
          </Col>
          <Col sm="12">
            <DescriptionListText />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Typography;