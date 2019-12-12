import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withTranslation } from 'react-i18next'

import AnimeAction from '@src/shared/stores/ducks/anime'
import HeaderAction from '@src/shared/stores/ducks/header'
import Loading from '@src/shared/components/Loading'
import CardAnimes from '@src/shared/components/CardAnimes'
import Paginate from '@src/shared/components/Paginate'
// import history from '@src/routes/history'

const Animes = props => {
  const dispatch = useDispatch()
  const { t, history, match } = props
  const page = match.params.page || 1
  const { data, loading } = useSelector(state => state.anime)
  const { data: dataGateway } = useSelector(state => state.gateway)

  const paginationHandler = value => {
    if (value > 0 && value <= data.pages.maxPage) {
      history.push(`/animes/${value}`)
    }
  }

  useEffect(() => {
    const fetchAnimes = async () => {
      const { gateway } = dataGateway.filter(item => item.selected === true)[0]
      await dispatch(AnimeAction.animeRequest(gateway, page))
    }
    fetchAnimes()
  }, [dispatch, dataGateway, page])

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
    <Loading loading={loading && (!data || !data.pages)}>
      {data ? (
        <Paginate pages={data.pages} pagnation={paginationHandler} />
      ) : null}
      <div className="container-animes">
        {data
          ? data.animes.map((item, i) => (
              <div className="container-card" key={i}>
                <CardAnimes index={i} data={item} />
              </div>
            ))
          : null}
      </div>
    </Loading>
  )
}

export default withTranslation()(Animes)
