import React from 'react'
import ReactNativeTechnology from '../components/ReactNativeTechnology'
import MobileAppBanner from '../components/MobileAppBanner'
import FlutterTechnology from '../components/FlutterTechnology'
import AndroidTechnology from '../components/AndroidTechnology'
import IosTechnology from '../components/IosTechnology'

const MobileAppdevlopmentPage = () => {
  return (
    <>
        <MobileAppBanner />
        <ReactNativeTechnology />
        <FlutterTechnology />
        <AndroidTechnology />
        <IosTechnology />
    </>
  )
}

export default MobileAppdevlopmentPage
