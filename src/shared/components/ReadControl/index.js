import React, { useState, useEffect, useRef } from 'react'
import { withTranslation } from 'react-i18next'

import Loading from '@src/shared/components/Loading'
import Image from '@src/shared/components/Image'
import img0 from '@src/assets/images/01_000.jpg'
import img1 from '@src/assets/images/01_001.png'

const ReadControl = ({
  action,
  fullscreen,
  pages: pagesData,
  loading: loadingReq,
  title,
}) => {
  const readRef = useRef(null)
  const [loading, setLoading] = useState(null)
  const [pages, setPages] = useState([])

  const openFullscreenHandler = () => {
    if (readRef.current.requestFullscreen) {
      readRef.current.requestFullscreen()
    } else if (readRef.current.mozRequestFullScreen) {
      /* Firefox */
      readRef.current.mozRequestFullScreen()
    } else if (readRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      readRef.current.webkitRequestFullscreen()
    } else if (readRef.current.msRequestFullscreen) {
      /* IE/Edge */
      readRef.current.msRequestFullscreen()
    }
    action(false)
  }

  useEffect(() => {
    if (!loadingReq && pagesData) {
      setPages(pagesData)
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [loadingReq, pages])

  useEffect(() => {
    if (fullscreen) {
      openFullscreenHandler()
    }
  })

  return (
    <Loading loading={loading} local>
      <div className="wrap-read" ref={readRef}>
        {pages.map((item, i) => (
          <div key={i}>
            <Image
              key={i}
              src={item.img}
              alt={`${title}: page - ${item.page}`}
              className="page-read"
            />
          </div>
        ))}
      </div>
    </Loading>
  )
}

export default withTranslation()(ReadControl)
