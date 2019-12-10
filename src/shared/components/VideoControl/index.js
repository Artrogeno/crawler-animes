import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { Row, Col, Button, ButtonGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VideoControl = ({ t, history, sources, info }) => {
  const { episodes, prev, next } = info
  const [videoStream, setVideoStream] = useState(sources[0])

  const chooseHandler = src => {
    setVideoStream(src)
  }

  const goPrevHandler = netx => {}

  return (
    <Row>
      <Col md={8} className="menu-control">
        <ButtonGroup size="sm">
          {sources.map((item, i) => (
            <Button
              outline
              color="green"
              key={i}
              onClick={() => chooseHandler(item)}
              className={item === videoStream ? 'active' : ''}
            >
              {t('VIDEO')} {` 0${i + 1}`}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup size="md">
          {prev ? (
            <Button color="green" onClick={() => goPrevHandler(prev)}>
              <span>
                <FontAwesomeIcon icon={['fas', 'fast-backward']} />
              </span>
            </Button>
          ) : null}

          {next ? (
            <Button color="green" onClick={() => goPrevHandler(next)}>
              <span>
                <FontAwesomeIcon icon={['fas', 'fast-forward']} />
              </span>
            </Button>
          ) : null}

          {episodes ? (
            <Button color="green" onClick={() => goPrevHandler(episodes)}>
              <span>
                <FontAwesomeIcon icon={['fab', 'buffer']} />
              </span>
            </Button>
          ) : null}
        </ButtonGroup>
      </Col>
      <Col md={10} className="wrap-video">
        <video controls src={videoStream} />
      </Col>
    </Row>
  )
}

export default withTranslation()(VideoControl)
