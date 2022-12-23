import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function PageError() {

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Error 404: Page Not Found
          </CardTitle>
          Sorry, we can't find what you are looking for
        </CardBody>
      </Card>
    </section>
  );
}

export default PageError;
