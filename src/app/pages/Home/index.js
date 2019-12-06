import React from 'react'
import { Row, Col } from 'reactstrap'

import CardAnimes from '@src/shared/components/CardAnimes'

const Home = () => {
  return (
    <>
      <Row>
        <Col md={3}>
          <CardAnimes />
        </Col>
      </Row>
    </>
  )
}

export default Home
