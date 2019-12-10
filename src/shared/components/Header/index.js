import React from 'react'
import { withTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import HeaderAction from '@src/shared/stores/ducks/header'
import Loading from '@src/shared/components/Loading'

const Header = ({ t }) => {
  const { data, loading } = useSelector(state => state.header)

  return (
    <Loading loading={loading}>
      <header className="main-header">
        <div className="header-info">
          <h1>
            {data.back ? (
              <Button
                color="link"
                className="btn-back"
                onClick={() => data.history.goBack()}
              >
                <FontAwesomeIcon icon={['fas', 'chevron-left']} />
              </Button>
            ) : null}
            <span>{data.title}</span>
            <small>
              <FontAwesomeIcon icon={data.icon} />
            </small>
          </h1>
          <h4>{data.subtitle}</h4>
        </div>
        <div>
          {data.gateway ? (
            <Button color="green" className="btn-large">
              <FontAwesomeIcon icon={['fas', 'plus']} />
              <span> {t('CHANGE_GATEWAY')}</span>
            </Button>
          ) : null}
        </div>
      </header>
    </Loading>
  )
}

export default withTranslation()(Header)
