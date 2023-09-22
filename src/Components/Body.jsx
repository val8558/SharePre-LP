import React from 'react'

function Body() {
  return (
    <div style={{width: '100%', height: '100%', paddingTop: 266, paddingBottom: 320, paddingLeft: 195, paddingRight: 195, opacity: 0.20, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 1050, height: 314, position: 'relative'}}>
        <div style={{width: 675, height: 314, left: 0, top: 0, position: 'absolute', background: '#FAB824', boxShadow: '400px 400px 400px ', borderRadius: 9999, filter: 'blur(400px)'}} />
        <div style={{width: 675, height: 314, left: 375, top: 0, position: 'absolute', background: '#FDDD72', boxShadow: '400px 400px 400px ', borderRadius: 9999, filter: 'blur(400px)'}} />
    </div>
</div>
  )
}

export default Body