import { ColorRing } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{
        width:'100%',
        height:'1000px',
        display:'flex',
        justifyContent:'center',
        paddingTop:'30px'
    }}>
        <ColorRing
           visible={true}
           height="150"
           width="150"
           ariaLabel="color-ring-loading"
           wrapperStyle={{}}
           wrapperClass="color-ring-wrapper"
           colors={['#5bbbe1', '#2239e3', '#e248f0', '#cf0c77', '#beeb1b']}
        />
    </div>
  )
}

export default Loader