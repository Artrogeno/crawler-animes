import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { withTranslation } from 'react-i18next'

import AnimeAction from '@src/shared/stores/ducks/anime'
import HeaderAction from '@src/shared/stores/ducks/header'
import Loading from '@src/shared/components/Loading'
import CardAnimes from '@src/shared/components/CardAnimes'

const Animes = props => {
  const dispatch = useDispatch()
  const { t, history } = props
  const { data, loading } = useSelector(state => state.anime)
  const { data: dataGateway } = useSelector(state => state.gateway)

  useEffect(() => {
    const fetchAnimes = async () => {
      const { gateway } = dataGateway.filter(item => item.selected === true)[0]
      await dispatch(AnimeAction.animeRequest(gateway))
    }
    fetchAnimes()
  }, [dispatch, dataGateway])

  useEffect(() => {
    const dispatchHeader = async () => {
      if (data) {
        const { title } = dataGateway.filter(item => item.selected === true)[0]
        const header = {
          title: t('ANIMES'),
          subtitle: title,
          icon: ['fa', 'walking'],
          gateway: false,
          back: true,
          history,
        }
        await dispatch(HeaderAction.headerProps(header))
      }
    }
    dispatchHeader()
  }, [data, t, history, dataGateway, dispatch])

  return (
    <Loading loading={loading}>
      <Row>
        {data
          ? data.map((item, i) => (
              <Col md={3} key={i}>
                <CardAnimes index={i} data={item} />
              </Col>
            ))
          : null}
      </Row>
    </Loading>
  )
}

export default withTranslation()(Animes)
