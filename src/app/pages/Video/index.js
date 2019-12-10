import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Row, Col } from 'reactstrap'

import VideoAction from '@src/shared/stores/ducks/video'
import HeaderAction from '@src/shared/stores/ducks/header'
import Loading from '@src/shared/components/Loading'
import VideoControl from '@src/shared/components/VideoControl'

const Video = props => {
  const id = props.match.params.id || null
  const { history } = props
  const dispatch = useDispatch()
  const { data: dataGateway } = useSelector(state => state.gateway)
  const { data, loading } = useSelector(state => state.video)

  useEffect(() => {
    const fetchData = async () => {
      if (!dataGateway) {
        history.push('/')
      } else {
        let { gateway } = dataGateway.filter(item => item.selected === true)[0]
        await dispatch(VideoAction.videoRequest(id, gateway))
      }
    }
    fetchData()
  }, [id, dataGateway, history, dispatch])

  useEffect(() => {
    const dispatchHeader = async () => {
      if (data) {
        const { title } = dataGateway.filter(item => item.selected === true)[0]
        const header = {
          title: data.info ? data.info.title : null,
          subtitle: title,
          icon: ['fas', 'layer-group'],
          gateway: false,
          back: true,
          history,
        }
        await dispatch(HeaderAction.headerProps(header))
      }
    }
    dispatchHeader()
  }, [data, history, dataGateway, dispatch])

  return (
    <Loading loading={loading}>
      {data.videos ? (
        <VideoControl sources={data.videos} info={data.info} {...props} />
      ) : null}
    </Loading>
  )
}

export default withTranslation()(Video)
